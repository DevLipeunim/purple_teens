/* eslint-disable react/jsx-no-target-blank */
import IonIcon from "@reacticons/ionicons";
import { useEffect, useState } from "react";
import { useStateContext } from "../../context/";

function Podcast() {
  const { bearerToken, setBearerToken } = useStateContext();
  const [count, setCount] = useState(0);
  const [episodes, setEpisodes] = useState([]);
  const [data, setData] = useState({});

  const incrimentCount = () => {
    setCount(count + 1);
  };
  setInterval(incrimentCount, 3600000);
  useEffect(() => {
    let details = {
      grant_type: "client_credentials",
      client_id: import.meta.env.VITE_CLIENT_ID,
      client_secret: import.meta.env.VITE_CLIENT_SECRETE,
    };

    let formBody = [];
    for (let property in details) {
      let encodedKey = encodeURIComponent(property);
      let encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: formBody,
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBearerToken(data.access_token);
      });
  }, [count]);
  useEffect(() => {
    fetch(
      `https://api.spotify.com/v1/shows/${encodeURIComponent(
        import.meta.env.VITE_SPOTIFY_SHOW_ID
      )}?market=ES`,
      {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
        setEpisodes(data.episodes.items);
      });
  }, [bearerToken]);
  return (
    <>
      <main>
        <article className="container">
          <section className="podcast podcast2" id="podcast">
            <ul className="podcast-list">
              {episodes.map((episode, index) => (
                <li key={index}>
                  <a
                    href={episode.external_urls.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="podcast-card"
                  >
                    <figure className="card-banner">
                      <img
                        src={episode.images[0].url}
                        alt="Podcasts"
                      />

                      <div className="card-banner-icon">
                        <IonIcon name="play" />
                      </div>
                    </figure>

                    <div className="card-content">
                      <div className="card-meta">
                        <time dateTime={episode.release_date}>
                          {episode.release_date}
                        </time>

                        <p className="pod-epi">Episodes: {index + 1}</p>
                      </div>

                      <h3 className="h3 card-title">{episode.name}</h3>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </article>
      </main>
    </>
  );
}

export default Podcast;

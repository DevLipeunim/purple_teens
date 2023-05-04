/* eslint-disable react/jsx-no-target-blank */
import IonIcon from "@reacticons/ionicons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import heroTitle from "./../assets/img/hero-title.png";
import { useEffect, useState } from "react";
import { useStateContext } from "../../context/";
import AudioMack from "./../assets/img/AudioMack.svg";

function Home() {
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
        setEpisodes(data.episodes.items.slice(0,4));
      });
  }, [bearerToken]);
  return (
    <>
      <main>
        <article className="container">
          <section className="hero" id="hero">
            <div className="hero-content">
              <img src={heroTitle} alt="Podcast" className="hero-title" />

              <p className="hero-text">{data.description}</p>

              <div className="hero-btn-group">
                <Link to={"/podcast"}>
                  <button className="btn btn-primary">
                    <IonIcon name="headset" />

                    <span>Listen Now</span>
                  </button>
                </Link>

                <div className="btn-link-wrapper">
                  <p className="btn-title">Subscribe On:</p>

                  <a
                    href="https://open.spotify.com/show/5uE8vXl7hKLY528Mn5vmhN"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-link"
                  >
                    <FontAwesomeIcon icon={faSpotify} />

                    <span>Spotify</span>
                  </a>

                  <a
                    href="https://audiomack.com/search?q=Purple%20Teens"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-link"
                  >
                    <img
                      src={AudioMack}
                      alt="Audiomack logo"
                      className="icon-svg"
                    />

                    <span>Audiomack</span>
                  </a>

                  <a href="https://anchor.fm/purple-teens" className="btn-link">
                    <IonIcon name="logo-apple" />

                    <span>Apple Music</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="hero-banner"></div>
          </section>

          <section className="podcast" id="podcast">
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

          <section className="newsletter">
            <div className="newsletter-card">
              <div className="card-content">
                <h3 className="h3 card-title">
                  Sign Up For Our Newsletter. It’s Free!
                </h3>

                <p className="card-text">
                  Don&#39;t miss out on the latest news and updates from our
                  podcast! Sign up for our newsletter and stay in the loop with
                  our upcoming episodes, special guests and exclusive content.
                  We promise never to spam you or sell your information - your
                  privacy is important to us. Sign up now and don&#39;t miss a
                  beat!
                </p>
              </div>

              <form action="" className="card-form" data-form>
                <input
                  type="email"
                  name="email_address"
                  placeholder="Your Email Address"
                  required
                  className="input-field"
                  data-input
                />

                <button type="button" className="btn btn-primary" data-submit>
                  Subscribe
                </button>
              </form>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}

export default Home;

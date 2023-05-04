import IonIcon from "@reacticons/ionicons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import heroTitle from "./../assets/img/hero-title.png";
import podcast1 from "./../assets/img/podcast-1.png";
import podcast2 from "./../assets/img/podcast-2.png";
import podcast3 from "./../assets/img/podcast-3.png";
import podcast4 from "./../assets/img/podcast-4.png";
import podcast5 from "./../assets/img/podcast-5.png";
import podcast6 from "./../assets/img/podcast-6.png";
import podcast7 from "./../assets/img/podcast-7.png";
import podcast8 from "./../assets/img/podcast-8.png";
import AudioMack from "./../assets/img/AudioMack.svg";

function Home() {
  return (
    <>
      <main>
        <article className="container">
          <section className="hero" id="hero">
            <div className="hero-content">
              <img src={heroTitle} alt="Podcast" className="hero-title" />

              <p className="hero-text">
                Discover more as teenager under Education, Enterpreneurship
                opportunities, and Social Issues that affects the lives of young
                adults.
              </p>

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
              <li>
                <a href="#" className="podcast-card">
                  <figure className="card-banner">
                    <img
                      src={podcast1}
                      alt="Tube Preamps, TLM103 vs. OJ 818, Podcastage's Beanies"
                    />

                    <div className="card-banner-icon">
                      <IonIcon name="play" />
                    </div>
                  </figure>

                  <div className="card-content">
                    <div className="card-meta">
                      <time dateTime="2022-02-15">Feb 15, 2022</time>

                      <p className="pod-epi">Episodes: 01</p>
                    </div>

                    <h3 className="h3 card-title">
                      Tube Preamps, TLM103 vs. OJ 818, Podcastage&apos;s Beanies
                    </h3>
                  </div>
                </a>
              </li>

              <li>
                <a href="#" className="podcast-card">
                  <figure className="card-banner">
                    <img
                      src={podcast2}
                      alt="Ask Unladylike: Late Bloomer with Forever 35"
                    />

                    <div className="card-banner-icon">
                      <IonIcon name="play" />
                    </div>
                  </figure>

                  <div className="card-content">
                    <div className="card-meta">
                      <time dateTime="2022-02-15">Feb 15, 2022</time>

                      <p className="pod-epi">Episodes: 02</p>
                    </div>

                    <h3 className="h3 card-title">
                      Ask Unladylike: Late Bloomer with Forever 35
                    </h3>
                  </div>
                </a>
              </li>

              <li>
                <a href="#" className="podcast-card">
                  <figure className="card-banner">
                    <img
                      src={podcast3}
                      alt="How to Effectively Incentivize Team Members"
                    />

                    <div className="card-banner-icon">
                      <IonIcon name="play" />
                    </div>
                  </figure>

                  <div className="card-content">
                    <div className="card-meta">
                      <time dateTime="2022-02-15">Feb 15, 2022</time>

                      <p className="pod-epi">Episodes: 03</p>
                    </div>

                    <h3 className="h3 card-title">
                      How to Effectively Incentivize Team Members
                    </h3>
                  </div>
                </a>
              </li>

              <li>
                <a href="#" className="podcast-card">
                  <figure className="card-banner">
                    <img
                      src={podcast4}
                      alt="How to go from Start-Up to Scale-Up"
                    />

                    <div className="card-banner-icon">
                      <IonIcon name="play" />
                    </div>
                  </figure>

                  <div className="card-content">
                    <div className="card-meta">
                      <time dateTime="2022-02-15">Feb 15, 2022</time>

                      <p className="pod-epi">Episodes: 04</p>
                    </div>

                    <h3 className="h3 card-title">
                      How to go from Start-Up to Scale-Up
                    </h3>
                  </div>
                </a>
              </li>

              <li>
                <a href="#" className="podcast-card">
                  <figure className="card-banner">
                    <img
                      src={podcast5}
                      alt="Deadbuttons – Tired of You | Live at Club Heavy"
                    />

                    <div className="card-banner-icon">
                      <IonIcon name="play" />
                    </div>
                  </figure>

                  <div className="card-content">
                    <div className="card-meta">
                      <time dateTime="2022-02-15">Feb 15, 2022</time>

                      <p className="pod-epi">Episodes: 05</p>
                    </div>

                    <h3 className="h3 card-title">
                      Deadbuttons – Tired of You | Live at Club Heavy
                    </h3>
                  </div>
                </a>
              </li>

              <li>
                <a href="#" className="podcast-card">
                  <figure className="card-banner">
                    <img
                      src={podcast6}
                      alt="Boogie Through the Universe with SOWO"
                    />

                    <div className="card-banner-icon">
                      <IonIcon name="play" />
                    </div>
                  </figure>

                  <div className="card-content">
                    <div className="card-meta">
                      <time dateTime="2022-02-15">Feb 15, 2022</time>

                      <p className="pod-epi">Episodes: 06</p>
                    </div>

                    <h3 className="h3 card-title">
                      Boogie Through the Universe with SOWO
                    </h3>
                  </div>
                </a>
              </li>

              <li>
                <a href="#" className="podcast-card">
                  <figure className="card-banner">
                    <img
                      src={podcast7}
                      alt="Glittering Blackness, Fall – 4 | Live at Club Heavy"
                    />

                    <div className="card-banner-icon">
                      <IonIcon name="play" />
                    </div>
                  </figure>

                  <div className="card-content">
                    <div className="card-meta">
                      <time dateTime="2022-02-15">Feb 15, 2022</time>

                      <p className="pod-epi">Episodes: 07</p>
                    </div>

                    <h3 className="h3 card-title">
                      Glittering Blackness, Fall – 4 | Live at Club Heavy
                    </h3>
                  </div>
                </a>
              </li>

              <li>
                <a href="#" className="podcast-card">
                  <figure className="card-banner">
                    <img
                      src={podcast8}
                      alt="The Meditative Photos of Chaelinjane"
                    />

                    <div className="card-banner-icon">
                      <IonIcon name="play" />
                    </div>
                  </figure>

                  <div className="card-content">
                    <div className="card-meta">
                      <time dateTime="2022-02-15">Feb 15, 2022</time>

                      <p className="pod-epi">Episodes: 08</p>
                    </div>

                    <h3 className="h3 card-title">
                      The Meditative Photos of Chaelinjane
                    </h3>
                  </div>
                </a>
              </li>
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

import { Link } from "react-router-dom";
import IonIcon from "@reacticons/ionicons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import logo from "./../../assets/img/logo.svg";
import { useRef, useEffect } from "react";
import AudioMack from "./../../assets/img/AudioMack.svg";

export default function Footer() {
  const ref = useRef(null);
  useEffect(() => {
    const goTopBtn = ref.current;
    window.addEventListener("scroll", function () {
      window.scrollY >= 10
        ? goTopBtn.classList.add("active")
        : goTopBtn.classList.remove("active");
    });
  }, []);

  function top() {
    window.scroll(0, 0);
  }
  return (
    <>
      <div className="footer-top">
        <div className="container">
          <div className="footer-brand">
            <Link className="logo" to={"/"}>
              <img src={logo} alt="Purple teens" />
            </Link>

            <p className="footer-text">
              We hope you enjoyed listening to the latest episode and found it
              informative and engaging. Stay in the loop with our future
              episodes by subscribing on your preferred podcast platform, you
              can also connect with us on social media to stay up-to-date on our
              latest news and updates.
              <br />
              Your support means a lot to us, and we look forward to bringing
              you more exciting content. Thanks for turning in!
            </p>
          </div>

          <ul className="footer-list">
            <li>
              <p className="footer-link-title">Start A Conversation</p>
            </li>

            <li>
              <a href="mailto:hello@micro.com" className="footer-link">
                purple-teens@gmail.com
              </a>
            </li>

            <li>
              <a href="tel:+0123454678" className="footer-link">
                +01234 546789
              </a>
            </li>

            <li>
              <a href="tel:+15780346789" className="footer-link">
                +01234 546789
              </a>
            </li>
          </ul>

          <div className="social-list-box">
            <p className="social-title">Follow Us On:</p>

            <ul className="social-list">
              <li>
                <a
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <IonIcon name="logo-facebook" />
                </a>
              </li>

              <li>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <IonIcon name="logo-twitter" />
                </a>
              </li>

              <li>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <IonIcon name="logo-instagram" />
                </a>
              </li>

              <li>
                <a
                  href="https://open.spotify.com/show/5uE8vXl7hKLY528Mn5vmhN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FontAwesomeIcon icon={faSpotify} />
                </a>
              </li>

              <li>
                <a
                  href="https://audiomack.com/search?q=Purple%20Teens"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <img
                    src={AudioMack}
                    alt="Audiomack logo"
                    className="icon-svg"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Purple Teens. All Rights Reserved
          </p>
        </div>
      </div>

      <a onClick={top} className="go-top" ref={ref}>
        <IonIcon name="chevron-up-outline" />
      </a>
    </>
  );
}

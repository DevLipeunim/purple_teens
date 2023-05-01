import { Link } from "react-router-dom";
import IonIcon from "@reacticons/ionicons";
import logo from "./../../assets/img/logo.svg";
import { useRef, useEffect } from "react";

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

  function top(){
    window.scroll(0,0)
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
              Lorem ipsum dolor sit amet consectetur adipiscing elit tincidunt
              in felis malesuada mollis purus id sit in aliquet lectus eget
              morbi dui felis malesuada.
            </p>
          </div>

          <ul className="footer-list">
            <li>
              <p className="footer-link-title">Start A Conversation</p>
            </li>

            <li>
              <a href="mailto:hello@micro.com" className="footer-link">
                hello@micro.com
              </a>
            </li>

            <li>
              <a href="tel:+0123454678" className="footer-link">
                +01234 54678
              </a>
            </li>

            <li>
              <a href="tel:+15780346789" className="footer-link">
                +1 (578) 034-6789
              </a>
            </li>
          </ul>

          <div className="social-list-box">
            <p className="social-title">Follow Us On:</p>

            <ul className="social-list">
              <li>
                <a href="#" className="social-link">
                  <IonIcon name="logo-facebook" />
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  <IonIcon name="logo-twitter" />
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  <IonIcon name="logo-instagram" />
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  <IonIcon name="logo-soundcloud" />
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  <IonIcon name="logo-apple" />
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

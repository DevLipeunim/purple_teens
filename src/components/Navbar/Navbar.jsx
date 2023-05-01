import { Link } from "react-router-dom";
import IonIcon from "@reacticons/ionicons";
import logo from "./../../assets/img/logo.svg";
import { useRef, useEffect } from "react";

function Navbar() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  useEffect(() => {
    const navbar = ref1.current;
    const navToggleBtn = ref2.current;
    const overlay = ref3.current;


    navToggleBtn.addEventListener("click", () => {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });

    overlay.addEventListener("click", () => {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });

    const header = ref4.current;

    let lastScrollPosition = 0;

    window.addEventListener("scroll", function () {
      let scrollPosition = window.pageYOffset;

      if (scrollPosition > lastScrollPosition) {
        header.classList.remove("active");
      } else {
        header.classList.add("active");
      }

      lastScrollPosition = scrollPosition <= 0 ? 0 : scrollPosition;
    });
  }, []);
  return (
    <>
      <header className="active" ref={ref4}>
        <div className="container">
          <div className="overlay" ref={ref3}></div>

          <Link className="logo" to={"/"}>
            <img src={logo} alt="Purple teens" />
          </Link>

          <button className="nav-toggle-btn" ref={ref2}>
            <IonIcon name="menu-outline" />
          </button>

          <nav className="navbar" ref={ref1}>
            <ul className="navbar-list">
              <li className="navbar-item">
                <Link className="navbar-link" to={"/"}>
                  Home
                </Link>
              </li>

              <li className="navbar-item">
                <Link className="navbar-link" to={"/podcast"}>
                  Podcast
                </Link>
              </li>

              <li className="navbar-item">
                <Link className="navbar-link" to={"/blog"}>
                  Blog
                </Link>
              </li>
            </ul>

            <div className="navbar-actions">
              <Link className="link" to={"/donate"}>
                <button className="btn">
                  <IonIcon name="logo-paypal" />

                  <span>Donate</span>
                </button>
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;

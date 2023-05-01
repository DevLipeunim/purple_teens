import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Blog from "./pages/Blog"
import Podcast from "./pages/Podcast"
import Donate from "./pages/Donate"
import Footer from "./components/Footer/Footer";
import { useRef, useEffect } from "react";
import logo from "./assets/img/preload.svg"

const App = () => {
  const ref = useRef(null)
  useEffect(() => {
    const preloader = ref.current
    window.addEventListener("load", function () {
      preloader.classList.add("loaded");
      document.body.classList.add("loaded");
    });
  }, []);
  return (
    <>
      <div className="preload" ref={ref}>
        <img src={logo} alt="loader" />
      </div>
      <Navbar />
      <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<Podcast/>} path="/podcast"/>
        <Route element={<Blog/>} path="/blog"/>
        <Route element={<Donate/>} path="/donate"/>
      </Routes>
      <Footer />
    </>
  );
};

export default App;

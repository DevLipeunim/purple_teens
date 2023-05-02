import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Blog from "./pages/Blog"
import Podcast from "./pages/Podcast"
import Donate from "./pages/Donate"
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
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

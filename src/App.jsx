import './App.css';
import { useState } from "react";
import Home from "./components/home";
import About from "./components/about";
import Crayfish from "./components/crayfish";
import Team from "./components/founders";
import Contact from "./components/contact";
import Activities from "./components/activities";

function App() {

  const [lightboxImg, setLightboxImg] = useState(null);

  const openLightbox = (img) => {
    setLightboxImg(img);
  };

  const closeLightbox = () => {
    setLightboxImg(null);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,            // show 1 main slide
    centerMode: true,           // ✅ enable side slides
    centerPadding: "120px",     // ✅ space around center slide
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "80px"
        }
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "40px"
        }
      }
    ]
  };

  return (
    <div className="App">

      {/* {navbar} */}
      <nav className="navbar-top">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#founders">Team</a></li>
          <li><a href="#contact">Order</a></li>
        </ul>
      </nav>

      <Home />
      <About />
      <Crayfish />
      <Team />
      <Contact />
      <Activities
        settings={settings}
        lightboxImg={lightboxImg}
        openLightbox={openLightbox}
        closeLightbox={closeLightbox}
      />

      {/* Footer */}
      <footer className="footer">
        © {new Date().getFullYear()} Madara’s Farm. All rights reserved.
      </footer>
    </div>
  );
}

export default App;

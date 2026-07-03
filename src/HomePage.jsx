import "./App.scss";
import React, { useState } from "react";
import Home from "./components/home";
import About from "./components/about";
import Crayfish from "./components/crayfish";
import Products from "./components/products";
import Team from "./components/founders";
import Contact from "./components/contact";
import Activities from "./components/activities";
import Reviews from "./components/reviews";
import Navbar from "./components/navbar";   // ✅ correct case

export default function HomePage() {
  const [lightboxImg, setLightboxImg] = useState(null);

  const openLightbox = (img) => setLightboxImg(img);
  const closeLightbox = () => setLightboxImg(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "120px",
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { centerPadding: "80px" } },
      { breakpoint: 768, settings: { centerPadding: "40px" } }
    ]
  };

  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Crayfish />
      <Products />
      <Team />
      <Contact />
      <Activities

        lightboxImg={lightboxImg}
        openLightbox={openLightbox}
        closeLightbox={closeLightbox}
      />      <Reviews />      <footer className="footer">
        © {new Date().getFullYear()} Madara’s Farm. All rights reserved.
      </footer>
    </div>
  );
}

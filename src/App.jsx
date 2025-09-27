import './App.css';
import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaInstagram } from "react-icons/fa";
import jibiImg from './assets/founders/jibi.jpg';
import luigieImg from './assets/founders/luigie.jpg';
import crayfishImg from './assets/crayfish img/crayfish.jpg';
import img1 from './assets/activities/img1.jpg';
import img2 from './assets/activities/img2.jpg';
import img3 from './assets/activities/img3.jpg';
import img4 from './assets/activities/img4.jpg';
import img5 from './assets/activities/img5.jpg';
import img6 from './assets/activities/img6.jpg';
import img7 from './assets/activities/img7.jpg';
import img8 from './assets/activities/img8.jpg';

function App() {

  const [lightboxImg, setLightboxImg] = useState(null);

  const openLightbox = (img) => {
    setLightboxImg(img);
  };

  const closeLightbox = () => {
    setLightboxImg(null);
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

      {/* Hero Section */}
      <header id="home" className="banner">
        {/* <div className="madara-banner">MADARA'S FARM PH</div> */}
      </header>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Our Farm</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ducimus voluptatem sunt voluptatibus similique cupiditate.
          Quisquam, quam officiis iste, neque id enim soluta nisi harum at maiores illum, tempora nemo obcaecati dignissimos consectetu
          porro. Voluptate soluta ratione et dolores nulla mollitia libero consequuntur exercitationem quas accusamus quo quos veritatis neque doloremque asperiores, veniam autem molestias recusandae vel? Dolorum quibusdam corporis, fugiat explicabo nemo incidunt cum, laborum cumque rerum voluptas deleniti magnam ex, molestias ducimus quod officia harum ab nam accusamus rem. Repudiandae adipisci, officiis atque, itaque expedita quisquam repellendus cumque aliquam dolores consequuntur, dolor rerum ex dolorem amet. Esse, reprehenderit.
        </p>
      </section>

      {/* {about crayfish} */}
      <section id="cray" className="cray">
        <h2>What is CrayFish?</h2>
        <div className="cray-content">
          <img src={crayfishImg} alt="Crayfish" className="cray-img" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ducimus voluptatem sunt voluptatibus similique cupiditate.
            Quisquam, quam officiis iste, neque id enim soluta nisi harum at maiores illum, tempora nemo obcaecati dignissimos...
          </p>
        </div>
      </section>

      {/* Founders Section */}
      <section id="founders" className="founders">
        <h2>Meet our Team</h2>
        <div className="founder-cards">
          <div className="founder-card">
            <img src={jibiImg} alt="Founder 1" />
            <h3>Jibi Barrera</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="founder-card">
            <img src={luigieImg} alt="Founder 2" />
            <h3>Luigie Olega</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="contact-grid">
          {/* Left column */}
          <div className="contact-left">
            <h2>Want to order?</h2>
            <p>Click the button below and fill up the form</p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdrBAMRpOzWmjoOBftWOSDr5Bjrwc_bs9bluLbmtZiKca1yjA/viewform?usp=header" target="_blank" rel="noopener noreferrer">
              <button className="order-btn">Order Now</button>
            </a>
          </div>

          {/* Right column */}
          <div className="contact-right">
            <h2>Contact Us</h2>
            <p><FaEnvelope /> Email: <a href="mailto:madarasfarmph@gmail.com">madarasfarmph@gmail.com</a></p>
            <p><FaPhone /> Phone: +63 912 345 6789</p>
            <p><FaMapMarkerAlt /> Visit us: Taytay, Rizal, Philippines</p>
            <a href="https://www.facebook.com/profile.php?id=61573411020069" target="_blank"><FaFacebook /> MADARA's Farm PH</a>
          </div>
        </div>
      </section>

      {/* {activities} */}
      <section id="activities" className="activities">
        <h2>Our Team in Action</h2>
        <div className="activity-grid">
          <img src={img1} alt="Activity 1" onClick={() => openLightbox(img1)} />
          <img src={img2} alt="Activity 2" onClick={() => openLightbox(img2)} />
          <img src={img3} alt="Activity 3" onClick={() => openLightbox(img3)} />
          <img src={img4} alt="Activity 4" onClick={() => openLightbox(img4)} />
          <img src={img5} alt="Activity 5" onClick={() => openLightbox(img5)} />
          <img src={img6} alt="Activity 6" onClick={() => openLightbox(img6)} />
          <img src={img7} alt="Activity 7" onClick={() => openLightbox(img6)} />
          <img src={img8} alt="Activity 8" onClick={() => openLightbox(img6)} />
        </div>

        {/* Lightbox overlay */}
        {lightboxImg && (
          <div className="lightbox" onClick={closeLightbox}>
            <img src={lightboxImg} alt="Expanded activity" />
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="footer">
        © {new Date().getFullYear()} Madara’s Farm. All rights reserved.
      </footer>
    </div>
  );
}

export default App;

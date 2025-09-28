import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../assets/activities/img1.jpg';
import img2 from '../assets/activities/img2.jpg';
import img3 from '../assets/activities/img3.jpg';
import img4 from '../assets/activities/img4.jpg';
import img5 from '../assets/activities/img5.jpg';
import img6 from '../assets/activities/img6.jpg';
import img7 from '../assets/activities/img7.jpg';
import img8 from '../assets/activities/img8.jpg';

export default function Activities({ settings, lightboxImg, openLightbox, closeLightbox }) {

  return (
    <section id="activities" className="activities">
        <h2>Our Team in Action</h2>
        <div className="activity-slider">
          <Slider {...settings}>
            <div><img src={img1} alt="Activity 1" onClick={() => openLightbox(img1)} /></div>
            <div><img src={img2} alt="Activity 2" onClick={() => openLightbox(img2)} /></div>
            <div><img src={img3} alt="Activity 3" onClick={() => openLightbox(img3)} /></div>
            <div><img src={img4} alt="Activity 4" onClick={() => openLightbox(img4)} /></div>
            <div><img src={img5} alt="Activity 5" onClick={() => openLightbox(img5)} /></div>
            <div><img src={img6} alt="Activity 6" onClick={() => openLightbox(img6)} /></div>
            <div><img src={img7} alt="Activity 7" onClick={() => openLightbox(img7)} /></div>
            <div><img src={img8} alt="Activity 8" onClick={() => openLightbox(img8)} /></div>
          </Slider>
        </div>

        {/* Lightbox overlay */}
        {lightboxImg && (
          <div className="lightbox" onClick={closeLightbox}>
            <img src={lightboxImg} alt="Expanded activity" />
          </div>
        )}
    </section>
  );
}
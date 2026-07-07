import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import img1 from '../assets/activities/img1.jpg';
import img2 from '../assets/activities/img2.jpg';
import img3 from '../assets/activities/img3.jpg';
import img4 from '../assets/activities/img4.jpg';
import img5 from '../assets/activities/img5.jpg';
import img6 from '../assets/activities/img6.jpg';
import img7 from '../assets/activities/img7.jpg';
import img8 from '../assets/activities/img8.jpg';
import team1 from '../assets/activities/IMG_5840.jpg';
import team2 from '../assets/activities/IMG_6464.jpg';
import team3 from '../assets/activities/IMG_6465.jpg';

export default function Activities({ lightboxImg, openLightbox, closeLightbox }) {
  
  const sliderRef = useRef(null);

  // Combine all images into one array
  const allImages = [
    { src: team1, alt: "Team Member 1" },
    { src: team2, alt: "Team Member 2" },
    { src: team3, alt: "Team Member 3" },
    { src: img1, alt: "Activity 1" },
    { src: img2, alt: "Activity 2" },
    { src: img3, alt: "Activity 3" },
    { src: img4, alt: "Activity 4" },
    { src: img5, alt: "Activity 5" },
    { src: img6, alt: "Activity 6" },
    { src: img7, alt: "Activity 7" },
    { src: img8, alt: "Activity 8" }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    centerMode: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <section id="activities" className="activities">
      {/* Combined Showcase Section */}
      <div className="team-showcase">
        <div className="showcase-header">
          <h2>Our Team in Action</h2>
          <p className="showcase-subtitle">Meet the dedicated team and explore our farm activities</p>
        </div>
        
        <div className="carousel-wrapper">
          <div className="carousel-container">
            <Slider ref={sliderRef} {...sliderSettings}>
              {allImages.map((image, idx) => (
                <div key={idx} className="carousel-slide">
                  <div className="image-card" onClick={() => openLightbox(image.src)}>
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="carousel-image"
                    />
                    <div className="image-overlay">
                      <span className="click-text">Click to View</span>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Custom Navigation Buttons */}
          <div className="carousel-controls">
            <button 
              className="carousel-btn prev-btn" 
              onClick={handlePrev}
              aria-label="Previous image"
            >
              <span className="btn-icon">❮</span>
            </button>
            <button 
              className="carousel-btn next-btn" 
              onClick={handleNext}
              aria-label="Next image"
            >
              <span className="btn-icon">❯</span>
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox overlay */}
      {lightboxImg && (
        <div className="lightbox" onClick={closeLightbox}>
          <img src={lightboxImg} alt="Expanded view" />
        </div>
      )}
    </section>
  );
}
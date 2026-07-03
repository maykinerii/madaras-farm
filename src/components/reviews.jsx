import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import review1 from "../assets/reviews/review 1.png";
import review2 from "../assets/reviews/review 2.png";
import review3 from "../assets/reviews/review 3.png";
import review4 from "../assets/reviews/review 4.png";
import review5 from "../assets/reviews/review 5.png";
import review6 from "../assets/reviews/review 6.png";

export default function Reviews() {
  const reviews = [review1, review2, review3, review4, review5, review6];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    centerMode: true,
    centerPadding: "20px",
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "20px"
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px"
        }
      }
    ]
  };

  return (
    <section className="reviews" id="reviews">
      <h2>Client Reviews</h2>
      <p>See what our customers have to say about our service</p>
      <div className="reviews-carousel">
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className="review-slide">
              <img src={review} alt={`Review ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

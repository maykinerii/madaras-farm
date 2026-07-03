// src/components/crayfish.jsx
import { Link } from "react-router-dom";
import crayfishImg from '../assets/crayfish img/IMG_8003.jpg';

export default function Crayfish() {
  return (
    <section id="cray" className="cray">
      <h2>What is CrayFish?</h2>
      <div className="cray-content">
        <img src={crayfishImg} alt="Crayfish" className="cray-img" />
        <div className="cray-text">
          <p>
            Crayfish are freshwater crustaceans closely related to lobsters.
            They play an important role in aquatic ecosystems and are also
            farmed for food and aquaculture. Learn about their habitat,
            breeding, and how they are sustainably raised on our farm.
          </p>

<Link to="/learn-more" className="learn-more-btn">
  Learn More About Crayfish
</Link>
        </div>
      </div>
    </section>
  );
}

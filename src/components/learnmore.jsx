import Navbar from "./navbar";
import "../styles/learn.scss";

export default function Learn() {
  return (
    <div className="learnmore-page">
      <Navbar />
      <section className="learnmore-section">
        <div className="learnmore-header">
          <h1>Learn More About Crayfish</h1>
          <p className="intro-text">
            Crayfish (also called crawfish or freshwater lobsters) are small
            freshwater crustaceans that look like miniature lobsters. They play
            an important role in aquatic ecosystems and are also cultivated for
            food and aquaculture.
          </p>
        </div>

        <div className="content-wrapper">
          {/* Types Section */}
          <div className="learn-card">
            <div className="card-header">
              <span className="card-icon">📌</span>
              <h2>Different Types of Crayfish</h2>
            </div>
            <div className="card-content">
              <div className="info-item">
                <h3>Red Claw Crayfish</h3>
                <p>Popular for aquaculture due to fast growth and large size.</p>
              </div>
              <div className="info-item">
                <h3>Procambarus clarkii (Red Swamp Crayfish)</h3>
                <p>Common in farms, very hardy and adaptive.</p>
              </div>
              <div className="info-item">
                <h3>Blue Crayfish</h3>
                <p>Known for their striking blue color, often kept as ornamental pets.</p>
              </div>
              <div className="info-item">
                <h3>Marbled Crayfish</h3>
                <p>Unique self-cloning species, mainly used for research or hobbyists.</p>
              </div>
            </div>
          </div>

          {/* Raising Crayfish Section */}
          <div className="learn-card">
            <div className="card-header">
              <span className="card-icon">🌱</span>
              <h2>How to Raise Crayfish</h2>
            </div>
            <div className="card-content">
              <div className="info-item">
                <h3>Habitat</h3>
                <p>Provide clean, fresh water with hiding places (rocks, pipes, vegetation). Water depth of 30–50 cm is ideal for pond culture.</p>
              </div>
              <div className="info-item">
                <h3>Water Quality</h3>
                <p>Maintain pH between 6.5–8.5, avoid pollutants, and ensure proper oxygen levels with aeration.</p>
              </div>
              <div className="info-item">
                <h3>Feeding</h3>
                <p>Crayfish are omnivorous. They eat aquatic plants, algae, insects, and commercial pellets. Feed them twice daily in small amounts.</p>
              </div>
              <div className="info-item">
                <h3>Breeding</h3>
                <p>Males and females can be paired in tanks. Females carry eggs under their tails until hatching.</p>
              </div>
              <div className="info-item">
                <h3>Harvesting</h3>
                <p>Depending on the species, crayfish can be harvested after 3–6 months when they reach market size.</p>
              </div>
            </div>
          </div>

          {/* Tips Section */}
          <div className="learn-card">
            <div className="card-header">
              <span className="card-icon">⚠️</span>
              <h2>Tips for Success</h2>
            </div>
            <div className="card-content tips-grid">
              <div className="tip-item">
                <span className="tip-check">✅</span>
                <p>Keep water clean and change regularly if in tanks.</p>
              </div>
              <div className="tip-item">
                <span className="tip-check">✅</span>
                <p>Avoid overstocking — 5–10 crayfish per square meter in ponds.</p>
              </div>
              <div className="tip-item">
                <span className="tip-check">✅</span>
                <p>Provide shelters to prevent fights and cannibalism.</p>
              </div>
              <div className="tip-item">
                <span className="tip-check">✅</span>
                <p>Monitor for diseases or weak crayfish and remove them quickly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

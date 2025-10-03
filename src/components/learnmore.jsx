import Navbar from "./navbar";
import "../styles/learn.css";

export default function Learn() {
  return (
    <div className="learnmore-page">
      <Navbar />
      <section className="container my-5" id="learnmore-pg">
        <h1 className="text-center mb-4" style={{ color: "#CBDCEB" }}>
          Learn More About Crayfish
        </h1>
        <p className="lead text-justify" style={{ color: "#CBDCEB" }}>
          Crayfish (also called crawfish or freshwater lobsters) are small
          freshwater crustaceans that look like miniature lobsters. They play
          an important role in aquatic ecosystems and are also cultivated for
          food and aquaculture.
        </p>

        <h2 className="mt-4 ps-3" style={{ color: "#CBDCEB" }}>
          📌 Different Types of Crayfish
        </h2>
        <div style={{ color: "#CBDCEB" }}>
          <p><strong>Red Claw Crayfish</strong> – Popular for aquaculture due to fast growth and large size.</p>
          <p><strong>Procambarus clarkii (Red Swamp Crayfish)</strong> – Common in farms, very hardy and adaptive.</p>
          <p><strong>Blue Crayfish</strong> – Known for their striking blue color, often kept as ornamental pets.</p>
          <p><strong>Marbled Crayfish</strong> – Unique self-cloning species, mainly used for research or hobbyists.</p>
        </div>

        <h2 style={{ color: "#CBDCEB" }}>🌱 How to Raise Crayfish</h2>
        <div style={{ color: "#CBDCEB" }}>
          <p><strong>Habitat:</strong> Provide clean, fresh water with hiding places (rocks, pipes, vegetation). Water depth of 30–50 cm is ideal for pond culture.</p>
          <p><strong>Water Quality:</strong> Maintain pH between 6.5–8.5, avoid pollutants, and ensure proper oxygen levels with aeration.</p>
          <p><strong>Feeding:</strong> Crayfish are omnivorous. They eat aquatic plants, algae, insects, and commercial pellets. Feed them twice daily in small amounts.</p>
          <p><strong>Breeding:</strong> Males and females can be paired in tanks. Females carry eggs under their tails until hatching.</p>
          <p><strong>Harvesting:</strong> Depending on the species, crayfish can be harvested after 3–6 months when they reach market size.</p>
        </div>

        <h2 style={{ color: "#CBDCEB" }}>⚠️ Tips for Success</h2>
        <div style={{ color: "#CBDCEB" }}>
          <p>✅ Keep water clean and change regularly if in tanks.</p>
          <p>✅ Avoid overstocking — 5–10 crayfish per square meter in ponds.</p>
          <p>✅ Provide shelters to prevent fights and cannibalism.</p>
          <p>✅ Monitor for diseases or weak crayfish and remove them quickly.</p>
        </div>
      </section>
    </div>
  );
}

import './App.css';

function App() {
  return (
    <div className="App">
      {/* Hero Section */}
      <header className="hero">
        <h1>🌾 Madara’s Farm</h1>
        <p>Fresh produce straight from our fields to your table.</p>
      </header>

      {/* About Section */}
      <section className="about">
        <h2>About Our Farm</h2>
        <p>
          At Madara’s Farm, we believe in sustainable agriculture and 
          eco-friendly practices. Our fields are nurtured with love, 
          producing fruits and vegetables that are as healthy as they are delicious.
        </p>
      </section>

      {/* Founders Section */}
      <section className="founders">
        <h2>Meet the Founders</h2>
        <div className="founder-cards">
          <div className="founder-card">
            <img src="/founder1.jpg" alt="Founder 1" />
            <h3>Madara Uchiha</h3>
            <p>Visionary farmer dedicated to organic practices.</p>
          </div>
          <div className="founder-card">
            <img src="/founder2.jpg" alt="Founder 2" />
            <h3>Hashirama Senju</h3>
            <p>Expert in sustainable crop management.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Contact Us</h2>
        <p>Email: <a href="mailto:info@madarasfarm.com">info@madarasfarm.com</a></p>
        <p>Phone: +63 912 345 6789</p>
        <p>Visit us: Barangay Greenfields, Philippines</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        © {new Date().getFullYear()} Madara’s Farm. All rights reserved.
      </footer>
    </div>
  );
}

export default App;

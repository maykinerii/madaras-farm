import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Contact() {

  return (
    // left column
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
    {/* right column */}
          <div className="contact-right">
            <h2>Contact Us</h2>
            <p><FaEnvelope /> Email: <a href="mailto:madarasfarmph@gmail.com">madarasfarmph@gmail.com</a></p>
            <p><FaPhone /> Phone: +63 912 345 6789</p>
            <p><FaMapMarkerAlt /> Visit us: Taytay, Rizal, Philippines</p>
            <a href="https://www.facebook.com/profile.php?id=61573411020069" target="_blank"><FaFacebook /> MADARA's Farm PH</a>
          </div>
        </div>
   </section>
  );
}
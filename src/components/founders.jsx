import jibiImg from '../assets/founders/jibi.jpg';
import luigieImg from '../assets/founders/luigie.jpg';

export default function Team() {

  return (
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
  );
}
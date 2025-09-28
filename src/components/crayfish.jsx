import crayfishImg from '../assets/crayfish img/crayfish.jpg';

export default function Crayfish() {

  return (
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
  );
}
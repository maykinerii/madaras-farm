import { HashLink } from "react-router-hash-link";

export default function Navbar() {
  return (
    <nav className="navbar-top">
      <ul>
        <li><HashLink smooth to="/">Home</HashLink></li>
        <li><HashLink smooth to="/#about">About</HashLink></li>
        <li><HashLink smooth to="/#founders">Team</HashLink></li>
        <li><HashLink smooth to="/#contact">Order</HashLink></li>
      </ul>
    </nav>
  );
}

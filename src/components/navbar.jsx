import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        closeMenu();
      }
    };
    
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "What is Crayfish", href: "/#cray" },
    { label: "Products", href: "/#products" },
    { label: "Team", href: "/#founders" },
    { label: "Reviews", href: "/#reviews" },
    { label: "Activities", href: "/#activities" },
    { label: "Order", href: "/#contact" }
  ];

  return (
    <>
      {/* Burger Icon */}
      <button 
        className="burger-icon" 
        onClick={toggleMenu}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="navbar-menu"
      >
        {isOpen ? <MdClose size={24} /> : <GiHamburgerMenu size={24} />}
      </button>

      {/* Overlay */}
      {isOpen && <div className="nav-overlay" onClick={closeMenu} aria-hidden="true"></div>}

      {/* Sidebar Navigation */}
      <nav 
        className={`navbar-side ${isOpen ? "open" : ""}`}
        id="navbar-menu"
        role="navigation"
        aria-label="Main navigation"
      >
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <HashLink 
                smooth 
                to={link.href} 
                onClick={closeMenu}
                role="menuitem"
                tabIndex={isOpen ? 0 : -1}
              >
                {link.label}
              </HashLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

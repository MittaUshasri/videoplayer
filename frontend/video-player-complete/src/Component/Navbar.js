// Navbar.js
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/main.css";
import { Link } from "react-router-dom";
import '../styles/Navbar.css';

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <Link to="/" className="logo">Video Player</Link>
      <nav ref={navRef}>
        <Link to="/Home">Home</Link>
        <Link to="/aboutSection">About</Link>
        <Link to="/sourceCode">Source Code</Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;

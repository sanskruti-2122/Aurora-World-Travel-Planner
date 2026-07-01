import { useState } from "react";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import logo from "../../assets/images/logo.png"; // Your logo
import { Link } from "react-router-dom";

import LoginModal from "../LoginModal/LoginModal";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
const [showLogin, setShowLogin] = useState(false);
 return (
  <>
    <nav className="navbar">

      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="Aurora World" />

        <div>
          <h2>Aurora World</h2>
          <span>Explore Beyond Limits</span>
        </div>
      </div>

      {/* Navigation */}
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>

        <li><Link to="/about">About</Link></li>

        <li><Link to="/contact">Contact</Link></li>

        <li><a href="#">Theme</a></li>

        <li>
  <button
    className="login-btn"
    onClick={() => setShowLogin(true)}
  >
    Login
  </button>
</li>
      </ul>

      {/* Hamburger */}
      <div className="menu-container">

        <FaBars
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        />

        {menuOpen && (
          <div className="dropdown-menu">
            <a href="#">Saved Trips</a>
            <a href="#">Budget Summary</a>
            <a href="#">Itinerary Planner</a>
            <a href="#">Help &Support</a>
            <a href="#">Settings</a>
            <a href="#">Profile</a>
            <a href="#">Logout</a>
          </div>
        )}

      </div>

    </nav>

    <LoginModal
      open={showLogin}
      onClose={() => setShowLogin(false)}
    />
  </>
);
}

export default Navbar;
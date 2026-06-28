import { useState } from "react";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import logo from "../../assets/images/logo.png"; // Your logo

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
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

        <li><a href="#">Home</a></li>

        <li><a href="#">About</a></li>

        <li><a href="#">Contact</a></li>

        <li><a href="#">Theme</a></li>

        <li><a href="#">Login</a></li>

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

            <a href="#">Help & Support</a>

            <a href="#">Settings</a>

            <a href="#">Profile</a>

            <a href="#">Logout</a>

          </div>

        )}

      </div>

    </nav>
  );
}

export default Navbar;
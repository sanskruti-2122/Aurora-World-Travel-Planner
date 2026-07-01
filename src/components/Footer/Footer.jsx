import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import logo from "../../assets/images/logo.png"; // Change path if needed
import { Link } from "react-router-dom";

function Footer({ openLogin }) {
    return (
        <>
            <footer className="footer">

                {/* Left */}
                <div className="footer-left">
                    <img src={logo} alt="Aurora World" className="footer-logo" />

                    <div>
                        <h2>Aurora World</h2>
                        <p>© 2025 Aurora World. All Rights Reserved.</p>
                    </div>
                </div>

                {/* Center */}
                <div className="footer-center">
                    <h3>Quick Links</h3>

                    <ul>

        <li><Link to="/about">About</Link></li>

        <li><Link to="/contact">Contact</Link></li>

                        <li><a href="#">Suggestions</a></li>
                        <li><a href="#">Reviews</a></li>
                        <li className="footer-login"
    onClick={openLogin}
    style={{ cursor: "pointer" }}
>
    Login
</li>
                    </ul>
                </div>

                {/* Right */}
                <div className="footer-right">
                    <h3>Follow Us</h3>

                    <div className="social-icons">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaLinkedinIn /></a>
                    </div>
                </div>

            </footer>

            <div className="footer-bottom">
                © 2025 Aurora World • Crafted with ❤️ for Travelers
            </div>
        </>
    );
}

export default Footer;
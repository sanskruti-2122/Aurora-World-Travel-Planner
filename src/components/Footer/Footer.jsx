import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import logo from "../../assets/images/logo.png"; // Change path if needed

function Footer() {
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
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Suggestions</a></li>
                        <li><a href="#">Reviews</a></li>
                        <li><a href="#">Login</a></li>
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
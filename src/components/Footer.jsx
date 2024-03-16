import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer__section">
          <Link to="/">
            <h1 className="navbar__logo">Sparkle</h1>
          </Link>
          <div className="footer__logo--para">
            Crafting Memories, <br/>One Sparkle at a Time.
          </div>
        </div>
        <div className="footer__section">
          <h4 className="footer__section--title">Shop</h4>
          <ul className="footer__section--list">
            <li>Terms of Service</li>
            <li>Refund Policy</li>
            <li>FAQs</li>
            <li>Necklace Length Guide</li>
            <li>Ring Sizing Guide</li>
          </ul>
        </div>
        <div className="footer__section">
          <h4 className="footer__section--title">Support</h4>
          <ul className="footer__section--list">
            <li>About Us</li>
            <li>Our Stores</li>
            <li>Packaging</li>
            <li>Payment Methods</li>
          </ul>
        </div>
        <div className="footer__section">
          <h4 className="footer__section--title">Contact</h4>
          <ul className="footer__section--list">
            <li>+123 45 6758 789</li>
            <li>sparkle@contact.com</li>
            <li>Store Location</li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>
          TheName Jewelry © 2024 by Assim | <a href="#">Privacy Policy</a> |{" "}
          <a href="#">Sitemap</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

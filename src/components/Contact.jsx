import EastIcon from "@mui/icons-material/East";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import XIcon from "@mui/icons-material/X";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="social__icons">
          <a href="mailto:example@email.com" className="social__icon">
            <EmailIcon />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            className="social__icon"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            className="social__icon"
          >
            <XIcon />
          </a>
          <a
            href="https://www.pinterest.com/"
            target="_blank"
            className="social__icon"
          >
            <PinterestIcon />
          </a>
        </div>
        <div className="subscribe">
          <h4 className="subscribe__text">
            Get Exclusive Offers In Your Inbox
          </h4>
          <div className="subscribe__email">
            <input
              type="email"
              placeholder="Enter your email"
              className="subscribe__input"
            />
            <button className="subscribe__btn">
              <EastIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

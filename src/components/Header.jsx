import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link } from "react-router-dom";
import HeroImg1 from "../assets/hero-img1.png";
import HeroImg2 from "../assets/hero-img2.jpeg";
import SmallImg from "../assets/hero-img3.jpeg";
import ScrollImg from "../assets/scroll.png";
import "../styles/Header.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header__row">
          <div className="header__content">
            <h1 className="header__heading">Crafting Memories,</h1>
            <div className="header__heading--line">
              <div className="header__heading--img">
                <img src={SmallImg} aria-hidden="true" />
              </div>
              <h1 className="header__heading">One Sparkle at a Time.</h1>
            </div>
            <p className="header__sub-heading">
              Welcome to Sparkle, where every piece of jewelry tells a unique
              and enchanting story. From the gleaming sparkle of our diamond
              rings to the timeless elegance of our pearl necklaces, each item
              in our collection embodies cherished moments and unforgettable
              memories.
            </p>
            <div className="header__content-cta">
              <a href="#new">
                <img
                  src={ScrollImg}
                  alt="Explore more"
                  className="header__scroll-btn"
                />
              </a>

              <div className="header__shop-now">
                <p className="header__shop-price">$155</p>
                <p className="header__shop-para">
                  Our highly skilled artisans exceed industry standards with
                  sparkling GIA-graded natural diamonds
                </p>
                <div>
                  <Link to="/shop" className="header__shop-btn">
                    Shop Now{" "}
                    <ArrowRightAltIcon
                      style={{
                        fill: "#242424",
                        fontSize: "32px",
                        transform: "translateY(2px)",
                      }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="header__imgs">
            <img src={HeroImg2} alt="" className="header__imgs-img2" />
            <img src={HeroImg1} alt="" className="header__imgs-img1" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

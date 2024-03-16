import EastIcon from "@mui/icons-material/East";
import AboutImg1 from "../assets/about-img1.jpeg";
import AboutImg2 from "../assets/about-img2.jpeg";
import "../styles/About.css";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section__title">About Us</h2>
        <p className="about__para">
          At Sparkle Jewelry, we pride ourselves on crafting exquisite designs
          that capture the essence of elegance and sophistication. Our team of
          skilled artisans meticulously handcraft each piece, infusing
          creativity and passion into every detail. From timeless classics to
          contemporary marvels, our diverse collection showcases a blend of
          traditional craftsmanship and modern innovation.
        </p>
        <div className="about__row">
          <div className="about__col--left">
            <img src={AboutImg1} alt="" className="about__col--left-img" />
            <p className="about__col--left-para">
              Our goal extends beyond mere adornment. We believe that every
              piece of jewelry holds the power to tell a story, evoke emotions,
              and create unforgettable moments. With this philosophy at the core
              of our ethos, we are committed to providing our customers with
              more than just products; we aim to curate experiences that enrich
              lives and foster connections.
            </p>
            <div className="about__col--left-btn">
              More Information <EastIcon />
            </div>
          </div>
          <div className="about__col--right">
            <img className="about__col--right-img" src={AboutImg2} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

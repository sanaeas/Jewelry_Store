import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import Necklaces from "../assets/necklaces_cat.webp";
import Rings from "../assets/rings_cat.webp";
import Earrings from "../assets/earrings_cat.webp";
import Bracelets from "../assets/bracelets_cat.webp";
import "../styles/Categories.css";

const Categories = () => {
  return (
    <section id="categories">
      <div className="container">
        <h2 className="section__title">Shop By Category</h2>
        <div className="categories">
          <Link>
            <div className="category">
              <img
                src={Necklaces}
                alt="Necklaces Image"
                className="category__img"
              />
              <p className="category__name">
                Necklaces <ArrowForwardIcon />
              </p>
            </div>
          </Link>
          <Link>
            <div className="category">
              <img src={Rings} alt="Ring Image" className="category__img" />
              <p className="category__name">
                Rings <ArrowForwardIcon />
              </p>
            </div>
          </Link>
          <Link>
            <div className="category">
              <img
                src={Earrings}
                alt="Earrings Image"
                className="category__img"
              />
              <p className="category__name">
                Earrings <ArrowForwardIcon />
              </p>
            </div>
          </Link>
          <Link>
            <div className="category">
              <img
                src={Bracelets}
                alt="Bracelets Image"
                className="category__img"
              />
              <p className="category__name">
                Bracelets <ArrowForwardIcon />
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Categories;

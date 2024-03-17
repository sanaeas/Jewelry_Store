import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import LocalMallIcon from "@mui/icons-material/LocalMall";

const ShopNavbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="navbar">
          <Link to="/">
            <h1 className="navbar__logo">Sparkle Jewelry</h1>
          </Link>

          <ul className="nav__links">
            <li>
              <Link to="/" className="nav__link nav__link--hover">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="nav__link nav__link--hover">
                Shop
              </Link>
            </li>
          </ul>

          <ul className="nav__links">
            <li>
              <Link to="/cart" className="nav__link">
                <LocalMallIcon style={{ fill: "#242424" }} />
                <span className="items__num">1</span>
              </Link>
            </li>

            <>
              <li>
                <Link to="/login" className="nav__link">
                  Login
                </Link>
              </li>

              <li>
                <Link to="/signup" className="signup">
                  Sign Up
                </Link>
              </li>
            </>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default ShopNavbar;

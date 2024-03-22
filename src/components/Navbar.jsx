import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { useStateValue } from "../useStateValue";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useCookies } from "react-cookie";

const Navbar = () => {
  const [{ user, cart }, dispatch] = useStateValue();
  const [, removeCookie] = useCookies([]);

  const Logout = () => {
    removeCookie("token");
    dispatch({
      type: "SET_USER",
      user: null,
    });
  };

  return (
    <nav>
      <div className="container">
        <div className="navbar">
          <Link to="/">
            <h1 className="navbar__logo">Sparkle</h1>
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
            <li>
              <a href="#about" className="nav__link nav__link--hover">
                About us
              </a>
            </li>
            <li>
              <a href="#contact" className="nav__link nav__link--hover">
                Contact us
              </a>
            </li>
          </ul>

          <ul className="nav__links">
            <li>
              <Link to="/cart" className="nav__link">
                <LocalMallIcon style={{ fill: "#242424" }} />
                {cart.length > 0 && (
                  <span className="items__num">{cart.length}</span>
                )}
              </Link>
            </li>

            {user ? (
              <>
                <li>
                  <Link to="/profile" className="nav__link">
                    <AccountCircleIcon style={{ fill: "#242424" }} />
                  </Link>
                </li>

                <li className="navbar__logout--btn" onClick={Logout}>
                  Log out
                </li>
              </>
            ) : (
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
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import AuthImg from "../assets/auth.png";
import "../styles/Login.css";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Signup = () => {
  return (
    <>
      <nav>
        <div className="container">
          <div className="login__nav">
            <Link to="/">
              <h1 className="navbar__logo" style={{ color: "#fff" }}>
                Sparkle Jewelry
              </h1>
            </Link>
          </div>
        </div>
      </nav>

      <div className="signup__bg-bronze" aria-hidden="true"></div>
      <div className="login__bg-white" aria-hidden="true"></div>

      <section id="signup">
        <div className="container">
          <div className="login__left">
            <img
              src={AuthImg}
              aria-hidden="true"
              className="login__left--img"
            />
          </div>

          <div className="login__right">
            <h2 className="form__title">Sign up</h2>
            <form className="form">
              <label htmlFor="username" className="form__label">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="form__input"
                placeholder="Enter a username"
                required
              />

              <label htmlFor="email" className="form__label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="form__input"
                required
              />

              <label htmlFor="password" className="form__label">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your Password"
                className="form__input"
                required
              />

              <button type="submit" className="login__form--btn">
                Sign Up
                <ArrowRightAltIcon style={{ fill: "#fff" }} />
              </button>
            </form>

            <p className="login__para">
              Joined us before? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;

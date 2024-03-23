import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import AuthImg from "../assets/auth.png";
import "../styles/Login.css";

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { email, password, username } = inputValue;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3000/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <>
      <nav>
        <nav>
          <div className="container">
            <div className="login__nav">
              <Link to="/">
                <h1 className="navbar__logo signup__navbar--logo">Sparkle</h1>
              </Link>
            </div>
          </div>
        </nav>
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
            <form className="form" onSubmit={handleSubmit}>
              <label htmlFor="username" className="form__label">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="form__input"
                placeholder="Enter a username"
                value={username}
                onChange={handleChange}
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
                value={email}
                onChange={handleChange}
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
                value={password}
                onChange={handleChange}
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

            <ToastContainer />
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;

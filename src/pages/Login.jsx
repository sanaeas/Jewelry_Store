import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import AuthImg from '../assets/auth.png';
import '../styles/Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
  });
  const { email, password } = inputValue;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: 'bottom-left',
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: 'bottom-left',
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        'http://localhost:3000/login',
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate('/');
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: '',
      password: '',
    });
  };

  return (
    <>
      <nav>
        <div className="container">
          <div className="login__nav">
            <Link to="/">
              <h1 className="navbar__logo">Sparkle</h1>
            </Link>
          </div>
        </div>
      </nav>

      <div className="login__bg-bronze" aria-hidden="true"></div>
      <div className="login__bg-white" aria-hidden="true"></div>

      <section id="login">
        <div className="container">
          <div className="login__left">
            <img
              src={AuthImg}
              aria-hidden="true"
              className="login__left--img"
            />
          </div>

          <div className="login__right">
            <h2 className="form__title">Log In</h2>
            <form className="form" onSubmit={handleSubmit}>
              <label htmlFor="email" className="form__label">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="form__input"
                name="email"
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
                placeholder="Enter your Password"
                className="form__input"
                name="password"
                value={password}
                onChange={handleChange}
                required
              />

              <button type="submit" className="login__form--btn">
                Login
                <ArrowRightAltIcon style={{ fill: '#fff' }} />
              </button>
            </form>
            <p className="login__para">
              Don&apos;t have an account? <Link to="/signup">Register</Link>
            </p>
            <ToastContainer />
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;

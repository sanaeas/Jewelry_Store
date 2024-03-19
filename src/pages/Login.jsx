import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from 'react-router-dom';
import AuthImg from '../assets/auth.png';
import '../styles/Login.css';
import { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      // Store token securely (e.g., in localStorage)
      localStorage.setItem('token', data.token);
      // Redirect or perform other actions as needed
      window.location.href = '/';
    } catch (err) {
      console.error('Error:', err);
    }
  };

  return (
    <>
      <nav>
        <div className="container">
          <div className="login__nav">
            <Link to="/">
              <h1 className="navbar__logo">Sparkle Jewelry</h1>
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
            <form
              className="form"
              onSubmit={(e) => {
                e.preventDefault();
                handleLogin();
              }}
            >
              <label htmlFor="email" className="form__label">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="form__input"
                name="email"
                value={formData.email}
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
                value={formData.password}
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;

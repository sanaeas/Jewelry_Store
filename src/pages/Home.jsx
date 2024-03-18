import { useEffect } from 'react';
import About from '../components/About';
import Categories from '../components/Categories';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import New from '../components/New';
import { useStateValue } from '../useStateValue';

const Home = () => {
  const [, dispatch] = useStateValue();

  useEffect(() => {
    fetch('http://localhost:3000/api/products')
      .then((response) => response.json())
      .then((data) =>
        dispatch({
          type: 'SET_PRODUCTS',
          products: data,
        })
      );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar />
      <Header />
      <main>
        <Categories />
        <New />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;

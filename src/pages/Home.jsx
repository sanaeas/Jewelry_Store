import axios from "axios";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import About from "../components/About";
import Categories from "../components/Categories";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import New from "../components/New";
import { useStateValue } from "../useStateValue";

const Home = () => {
  const [, dispatch] = useStateValue();
  const [cookies, removeCookie] = useCookies([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/api/products");
        dispatch({
          type: "SET_PRODUCTS",
          products: data,
        });
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();

    const verifyCookie = async () => {
      if (cookies.token !== undefined) {
        try {
          const { data } = await axios.post(
            "http://localhost:3000",
            {},
            { withCredentials: true }
          );
          const { status, username, email } = data;
          dispatch({
            type: "SET_USER",
            user: status ? { username, email } : null,
          });
          if (status) {
            toast(`Hello ${username}`, {
              position: "top-right",
            });
          } else {
            removeCookie("token");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    verifyCookie();
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

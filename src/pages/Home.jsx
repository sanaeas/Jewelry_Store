import React, { useEffect } from "react";
import About from "../components/About";
import Categories from "../components/Categories";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { useStateValue } from "../useStateValue";

const data = [
  {
    id: "jbsxs7dgjasxrerfvw",
    category: "necklace",
    name: "Necklace product number 1",
    price: 89.9,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eaque quaerat quisquam recusandae molestiae illo excepturi iure pariatur! Dignissimos iure sapiente maxime soluta aut tempore non impedit voluptates? Nemo, ut?",
    color: "silver",
    img_url:
      "https://img.ltwebstatic.com/images3_spmp/2023/07/14/1689312026ffbbb870c5c797ff03634d6da0efb74c_thumbnail_900x.webp",
  },
  {
    id: "j0sxs74gja7xer3vwc",
    category: "ring",
    name: "Ring product number 1",
    price: 103.99,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eaque quaerat quisquam recusandae molestiae illo excepturi iure pariatur! Dignissimos iure sapiente maxime soluta aut tempore non impedit voluptates? Nemo, ut?",
    color: "gold",
    img_url:
      "https://img.ltwebstatic.com/images3_spmp/2023/07/01/168820025992b747b6b94f49f49999ca78a698dc1e_thumbnail_900x.webp",
  },
  {
    id: "j01ayu3jeqd7fer3vw",
    category: "earring",
    name: "Earring product number 1",
    price: 70.5,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eaque quaerat quisquam recusandae molestiae illo excepturi iure pariatur! Dignissimos iure sapiente maxime soluta aut tempore non impedit voluptates? Nemo, ut?",
    color: "silver",
    img_url:
      "https://img.ltwebstatic.com/images3_spmp/2023/12/05/a1/1701778471e2e40cf717f056efbd7340300d01807d_thumbnail_900x.webp",
  },
  {
    id: "j01ayl3jbqd7re6iop",
    category: "bracelet",
    name: "Bracelet product number 1",
    price: 110.0,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eaque quaerat quisquam recusandae molestiae illo excepturi iure pariatur! Dignissimos iure sapiente maxime soluta aut tempore non impedit voluptates? Nemo, ut?",
    color: "gold",
    img_url:
      "https://img.ltwebstatic.com/images3_spmp/2023/12/05/a1/1701778471e2e40cf717f056efbd7340300d01807d_thumbnail_900x.webp",
  },
];

const Home = () => {
  const [, dispatch] = useStateValue();

  useEffect(() => {
    dispatch({
      type: "SET_PRODUCTS",
      products: data,
    });
  }, []);

  return (
    <>
      <Navbar />
      <Header />
      <main>
        <Categories />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;

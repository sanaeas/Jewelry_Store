import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Categories from "../components/Categories";
import About from "../components/About";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <Categories />
        <About />
      </main>
    </>
  );
};

export default Home;

import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Categories from "../components/Categories";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <Categories />
      </main>
    </>
  );
};

export default Home;

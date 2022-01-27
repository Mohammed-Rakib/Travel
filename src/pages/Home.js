import React from "react";
import Header from "../components/shared/header/Header";
import HomeSlider from "../components/Home/HomeSlider";
import Footer from "../components/shared/footer/Footer";
import Blogs from "../components/Home/Blogs";

const Home = () => {
  return (
    <section className="">
      <Header />
      <HomeSlider />
      <Blogs />
      <Footer />
    </section>
  );
};

export default Home;

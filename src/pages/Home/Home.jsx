import React from "react";
import Parallax from "./Parallax/Parallax";
import Poster from "./Poster";
import AboutClient from "./AboutClient";
import Banner from "./Banner/Banner";
import Testimonials from "./Home/Testimonials";
import Reviews from "./Reviews/Reviews";

const Home = () => {
  return (
    <>
      <Banner />
      <Poster />
      <AboutClient />
      <Parallax />
      <Reviews/>
      {/* <Testimonials/> */}
    </>
  );
};

export default Home;

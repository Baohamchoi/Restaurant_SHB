import React from "react";
import Hero from "../components/Hero";
import PopularDishes from "../components/PopularDishes";
import Services from "../components/Services";
import AboutSection from "../components/AboutSection";
import BlogSection from "../components/BlogSection";
import Reservation from "../components/Reservation";

const Home = () => {
  return (
    <div>
      <Hero />
      <PopularDishes />
      <Services />
      <AboutSection />
      <BlogSection />
      <Reservation />
    </div>
  );
};

export default Home;

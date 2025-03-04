import React from "react";
import Hero from "../components/home/Hero";
import PopularDishes from "../components/home/PopularDishes";
import Services from "../components/home/Services";
import AboutSection from "../components/home/AboutSection";
import BlogSection from "../components/home/BlogSection";
import Reservation from "../components/home/Reservation";

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

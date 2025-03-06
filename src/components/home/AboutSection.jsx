import React from "react";
import image from "../../images/home/about.png";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <div className="py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              What We Serve
            </h2>
            <p className="text-gray-600 mb-6 ">
              Founded in 2010, RESTO has been serving delicious meals made with
              the freshest ingredients. Our chefs are passionate about creating
              memorable dining experiences for our guests.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                "Quality Food",
                "Fresh Ingredients",
                "Expert Chefs",
                "Diverse Menu",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center transition-all duration-300 hover:translate-x-2"
                >
                  <div className="w-3 h-3 bg-amber-500 rounded-full mr-2"></div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
            <Link
              to="/about"
              className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold py-3 px-6 rounded-full
               duration-300 hover:scale-105 hover:shadow-lg hover:from-amber-400 hover:to-amber-500"
            >
              Learn More
            </Link>
          </div>

          <div>
            <img
              src={image}
              className="w-full h-80 rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
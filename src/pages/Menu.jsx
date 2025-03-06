import React, { useState, useEffect } from "react";
import DishGrid from "../components/menu/DishGrid";
import { dishes } from "../data/dishes";

const MenuPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`py-16 bg-gradient-to-b from-gray-50 to-white transition-opacity duration-300 ease-in-out ${
        isLoading ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="container">
        <div
          className={`text-center mb-12 transition-all duration-300 ease-in-out transform ${
            isLoading ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          }`}
        >
          <h1 className="text-4xl font-bold mb-2 text-gray-800">Our Menu</h1>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of delicious dishes, all made with fresh
            ingredients and cooked to perfection.
          </p>
        </div>

        <DishGrid dishes={dishes} />
      </div>
    </div>
  );
};

export default MenuPage;
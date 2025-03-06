import React from "react";
import DishGrid from "../components/menu/DishGrid";
import { dishes } from "../data/dishes";

const MenuPage = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        <div className="text-center mb-12">
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

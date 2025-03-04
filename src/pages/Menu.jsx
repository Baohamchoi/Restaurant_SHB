import React from "react";
import DishGrid from "../components/menu/DishGrid";
import { dishes } from "../data/dishes";

const MenuPage = () => {
  return (
    <div className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-2">Our Menu</h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of delicious burgers and sides. All made with
            fresh ingredients and cooked to perfection.
          </p>
        </div>

        <DishGrid dishes={dishes} />
      </div>
    </div>
  );
};

export default MenuPage;

import React, { useState } from "react";
import DishCard from "./DishCard";
import { categories } from "../../data/dishes";

const DishGrid = ({ dishes }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredDishes =
    activeCategory === "All"
      ? dishes
      : dishes.filter((dish) => dish.category === activeCategory);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button 
            key={category.id}
            className={`px-4 py-2 rounded-full ${
              activeCategory === category.name
                ? "bg-primary text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            } transition-colors`}
            onClick={() => setActiveCategory(category.name)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredDishes.map((dish) => (
          <DishCard key={dish.id} dish={dish} />
        ))}
      </div>
    </div>
  );
};

export default DishGrid;

import React, { useState } from "react";
import DishCard from "./DishCard";
import { categories } from "../../data/dishes";

const DishGrid = ({ dishes }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  // Lọc món ăn theo danh mục
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
            className={`px-4 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
              activeCategory === category.name
                ? "bg-amber-500 text-white shadow-md"
                : "bg-gray-200 text-gray-800 hover:bg-amber-100"
            }`}
            onClick={() => setActiveCategory(category.name)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredDishes.map((dish) => (
          <div key={dish.id} className="dish-card">
            <DishCard dish={dish} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DishGrid;

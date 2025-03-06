import React, { useState, useEffect } from "react";
import DishCard from "./DishCard";
import { categories } from "../../data/dishes";

const DishGrid = ({ dishes }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredDishes, setFilteredDishes] = useState(dishes);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Xử lý thay đổi danh sách món ăn với hiệu ứng
  useEffect(() => {
    setIsTransitioning(true); // Kích hoạt trạng thái chuyển đổi
    const timeout = setTimeout(() => {
      const newFilteredDishes =
        activeCategory === "All"
          ? dishes
          : dishes.filter((dish) => dish.category === activeCategory);
      setFilteredDishes(newFilteredDishes);
      setIsTransitioning(false); // Kết thúc chuyển đổi
    }, 300); // Thời gian khớp với CSS transition

    return () => clearTimeout(timeout); // Cleanup
  }, [activeCategory, dishes]);

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

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 transition-opacity duration-300 ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        {filteredDishes.map((dish) => (
          <div
            key={dish.id}
            className="dish-card transition-all duration-300 ease-in-out transform"
            style={{
              opacity: isTransitioning ? 0 : 1,
              transform: isTransitioning ? "scale(0.95)" : "scale(1)",
            }}
          >
            <DishCard dish={dish} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DishGrid;
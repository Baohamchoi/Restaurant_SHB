import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { dishes } from "../../data/dishes";
import DishCard from "./DishCard";

const DishDetailPage = () => {
  const { id } = useParams();
  const dish = dishes.find((d) => d.id === parseInt(id));
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Giả lập hiệu ứng tải trang
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  if (!dish) {
    return (
      <div className="container py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Dish not found</h2>
        <Link to="/menu" className="btn btn-primary">
          Back to Menu
        </Link>
      </div>
    );
  }

  const relatedDishes = dishes
    .filter((d) => d.category === dish.category && d.id !== dish.id)
    .slice(0, 3);

  return (
    <div
      className={`py-16 transition-opacity duration-300 ease-in-out ${
        isLoading ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="container">
        {/* Dish Details */}
        <div className="flex flex-col md:flex-row gap-8 mb-16">
          <div className="md:w-1/2">
            <img
              src={dish.image}
              alt={dish.name}
              className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </div>

          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold mb-2 text-gray-800">{dish.name}</h1>
            <p className="text-2xl text-amber-600 font-semibold mb-4 transition-colors duration-300">
              ${dish.price.toFixed(2)}
            </p>

            <div className="mb-6">
              <div className="flex gap-2 mb-4 flex-wrap">
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:bg-amber-200">
                  Category: {dish.category}
                </span>
                {dish.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:bg-amber-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-gray-700 mb-6">{dish.description}</p>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Ingredients:</h3>
                <ul className="list-disc pl-5 text-gray-700">
                  {dish.ingredients.map((ingredient, index) => (
                    <li
                      key={index}
                      className="transition-all duration-300 hover:text-amber-600"
                    >
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex border rounded-md bg-gray-100">
                  <button className="px-4 py-2 border-r hover:bg-amber-200 transition-colors duration-200">
                    -
                  </button>
                  <span className="px-4 py-2 font-medium">1</span>
                  <button className="px-4 py-2 border-l hover:bg-amber-200 transition-colors duration-200">
                    +
                  </button>
                </div>
                <button className="bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:from-amber-400 hover:to-amber-500 shadow-md">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="mb-16 transition-all duration-300 ease-in-out">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Description</h2>
          <p className="text-gray-700 mb-4">
            {dish.description} Our chefs prepare each {dish.name.toLowerCase()}{" "}
            with care, ensuring that every bite is packed with flavor. We use
            only the freshest ingredients to create a memorable dining
            experience.
          </p>
          <p className="text-gray-700">
            Perfect for a quick lunch, dinner, or whenever you're craving a
            delicious meal. Pair it with our sides and drinks for a complete
            experience.
          </p>
        </div>

        {/* Related Dishes */}
        <div className="transition-all duration-300 ease-in-out">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Related Dishes</h2>
            <Link
              to="/menu"
              className="text-amber-600 transition-all duration-300 hover:text-amber-500 hover:underline"
            >
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {relatedDishes.map((relatedDish) => (
              <DishCard key={relatedDish.id} dish={relatedDish} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DishDetailPage;
import React from "react";
import { dishes } from "../../data/dishes";
import { Link } from "react-router-dom";

const DishCard = ({ image, title, price, id }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Image Placeholder - Replace with your own image */}
      <div className="h-48 bg-gray-300 flex items-center justify-center">
        <img src={image} alt="" className="w-full h-48 object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="flex justify-between items-center">
          <span className="text-primary font-bold">${price}</span>
          <Link to={`/menu/${id}`} className="btn btn-primary inline-block">
            Order Now
          </Link>
        </div>
      </div>
    </div>
  );
};

const PopularDishes = () => {
  return (
    <div className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Popular Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dishes.slice(0, 3).map((dish) => (
            <DishCard
              key={dish.id}
              id={dish.id}
              image={dish.image}
              title={dish.name}
              price={dish.price}
            />
          ))}
        </div>
        ;
      </div>
    </div>
  );
};

export default PopularDishes;

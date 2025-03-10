import React from "react";
import { useFood } from "./FoodContext";

export default function FoodCart() {
  const { food, removeFromFood, updateQuantity } = useFood();
  return (
    <div className="max-w-3xl min-h-screen mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">🛒 Food</h1>
      {food.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {food.map((item) => (
            <div
              key={item.id}
              className="border p-4 flex justify-between items-center rounded-lg shadow"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover"
                />
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  className="bg-gray-300 px-2 rounded hover:bg-gray-400"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <span className="px-2">{item.quantity}</span>
                <button
                  className="bg-gray-300 px-2 rounded hover:bg-gray-400"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  onClick={() => removeFromFood(item.id)}
                >
                  ❌
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

import React from "react";
import { useFood } from "./FoodContext";
import { Trash, Plus, Minus, Trash2, ShoppingCart } from "lucide-react";

export default function FoodCart() {
  const { food, removeFromFood, updateQuantity, sumItems, removeFromFoodAll } =
    useFood();
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-r from-yellow-500 to-amber-500 p-4 rounded-2xl shadow-lg shadow-amber-200/50 rotate-3 hover:rotate-6 transition-transform duration-300">
              <ShoppingCart className="w-10 h-10 text-white drop-shadow-lg" />
            </div>
            <div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                Your Cart
              </h1>
              <p className="text-amber-700/80 mt-2 text-lg">
                Exquisite flavors await you
              </p>
            </div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm px-8 py-4 rounded-2xl shadow-xl border border-amber-100">
            <div className="text-amber-600 font-medium mb-1">Total Price</div>
            <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
              ${sumItems.toFixed(2)}
            </div>
          </div>
        </div>

        {food.length === 0 ? (
          <div className="text-center py-32 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-amber-100 mt-8">
            <ShoppingCart className="w-24 h-24 mx-auto text-amber-300 mb-8" />
            <h2 className="text-3xl font-bold text-amber-800 mb-4">
              Your cart awaits
            </h2>
            <p className="text-amber-600 max-w-md mx-auto text-lg">
              Begin your culinary journey by selecting our premium dishes
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Clear Cart Button - Added at the top */}
            <div className="flex justify-end"></div>

            {food.map((item) => (
              <div
                key={item.id}
                className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-amber-100 overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] hover:bg-white"
              >
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row gap-8">
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="relative w-full sm:w-48 h-48 rounded-2xl object-cover transform transition-transform duration-500 "
                      />
                    </div>

                    <div className="flex-grow">
                      <div className="flex items-start justify-between">
                        <div>
                          <h2 className="text-2xl font-bold text-amber-900 mb-2 group-hover:text-amber-700 transition-colors duration-300">
                            {item.name}
                          </h2>
                        </div>
                        <div className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                      </div>
                      <p className="text-amber-700 text-lg mb-6 max-w-xl">
                        {item.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 bg-amber-50 rounded-2xl p-2 border border-amber-100">
                          <button
                            className="p-2 hover:bg-amber-100 rounded-xl transition-colors duration-200"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                          >
                            <Minus className="w-5 h-5 text-amber-700" />
                          </button>
                          <span className="w-12 text-center font-bold text-amber-900 text-lg">
                            {item.quantity}
                          </span>
                          <button
                            className="p-2 hover:bg-amber-100 rounded-xl transition-colors duration-200"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                          >
                            <Plus className="w-5 h-5 text-amber-700" />
                          </button>
                        </div>

                        <button
                          className="p-3 text-amber-600 hover:text-red-500 hover:bg-red-50 rounded-2xl transition-all duration-300 hover:scale-110"
                          onClick={() => removeFromFood(item.id)}
                        >
                          <Trash2 className="w-6 h-6" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="mt-12 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-amber-100 p-8">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8">
                <div>
                  <h3 className="text-xl text-amber-700 font-medium mb-2">
                    Order Summary
                  </h3>
                  <p className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                    ${sumItems.toFixed(2)}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto ">
                  {/* Delete All Button - Alternative position */}
                  <button
                    onClick={() => {
                      if (
                        window.confirm(
                          "Are you sure you want to remove all items from your cart?"
                        )
                      ) {
                        removeFromFoodAll();
                      }
                    }}
                    className="group relative overflow-hidden rounded-xl bg-white border border-amber-200 px-6 py-3 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 transform"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-red-100 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    <span className="relative flex items-center gap-2 font-medium text-amber-700 group-hover:text-red-600 transition-colors duration-300 ">
                      <Trash className="w-5 h-5" />
                      Clear Cart
                    </span>
                  </button>

                  <button className="w-full sm:w-auto relative group">
                    <div
                      className="relative px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-xl text-white font-semibold text-lg transform transition-all duration-200 hover:scale-105 active:scale-95 shadow-yellow-500 shadow-md"
                      onClick={() => {
                        alert("Coming soon");
                      }}
                    >
                      Complete Your Order
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

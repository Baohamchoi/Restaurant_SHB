import React, { createContext, useContext, useState } from "react";

const FoodContext = createContext();

export const FoodProvider = ({ children }) => {
  const [food, setFood] = useState([]);
  const [orders, setOrders] = useState([]);

  const addToFood = (product, quantity) => {
    if (food.find((item) => item.id === product.id)) {
      setFood((prevFood) => {
        const updatedFood = prevFood.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + parseInt(quantity) }
            : item
        );
        console.log("Updated Food:", updatedFood); 
        return updatedFood;
      }); 
    } else {
      setFood((prevFood) => {
        const newFood = [
          ...prevFood,
          { ...product, quantity: parseInt(quantity) },
        ];
        console.log("New Food:", newFood); // ✅ In ra giá trị đúng
        return newFood;
      });
    }
    console.log(quantity);
  };

  const removeFromFood = (id) => {
    setFood((prevFood) => prevFood.filter((product) => product.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setFood((prevFood) =>
      prevFood.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const totalItems = food.length;

  const sumItems = food.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  const addOrder = (customerInfo = {}) => {
    if (food.length === 0) return null;

    const newOrder = {
      id: Date.now().toString(),
      items: [...food],
      total: sumItems,
      date: new Date(),
    };

    setOrders((prevOrders) => [...prevOrders, newOrder]);
    setFood([]);
    return newOrder;
  };

  return (
    <FoodContext.Provider
      value={{
        food,
        addToFood,
        removeFromFood,
        totalItems,
        sumItems,
        updateQuantity,
        addOrder,
        orders,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};

export const useFood = () => useContext(FoodContext);

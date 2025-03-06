import React, { useState, useEffect } from "react";
import { ChefHat, ShoppingCart, LogOut } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkLoginStatus = () => {
    const userAuthData = localStorage.getItem("userAuthData");
    if (userAuthData) {
      const parsedData = JSON.parse(userAuthData);
      setIsLoggedIn(!!parsedData.email && !!parsedData.password);
    } else {
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    checkLoginStatus();
    window.addEventListener("storage", checkLoginStatus);
    return () => {
      window.removeEventListener("storage", checkLoginStatus);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userAuthData");
    setIsLoggedIn(false);
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <nav className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-4 px-6 flex justify-between items-center sticky top-0 z-50 shadow-lg shadow-amber-500/10">
      <div className="flex items-center gap-3 group">
        <Link to="/" className="flex items-center gap-2">
          <div className="text-amber-500 relative">
            <ChefHat
              size={40}
              strokeWidth={1.5}
              className="group-hover:rotate-12 transition-transform duration-300 transform-gpu"
            />
            <div className="absolute -inset-2 bg-amber-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="text-2xl font-extrabold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600 group-hover:from-amber-300 group-hover:to-amber-500 transition-all duration-300">
              RestoNest
            </span>
          </div>
        </Link>
      </div>

      <div className="hidden md:flex space-x-8">
        {["/", "/menu", "/about", "/blog", "/contact"].map((path, index) => (
          <NavLink
            key={index}
            to={path}
            className={({ isActive }) =>
              `relative font-medium text-sm uppercase tracking-wider transition-all duration-300 ease-in-out group ${
                isActive
                  ? "text-amber-400"
                  : "text-gray-300 hover:text-amber-400"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {["Home", "Menu", "About", "Blog", "Contact"][index]}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-amber-400 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
                <span className="absolute inset-0 -z-10 bg-amber-500/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></span>
              </>
            )}
          </NavLink>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <Link
          to="/cart"
          className="relative p-2 rounded-full bg-gray-800/50 hover:bg-amber-500/20 transition-all duration-300 group"
        >
          <ShoppingCart
            size={24}
            className="text-amber-400 group-hover:scale-110 transition-transform duration-200"
          />
          <span className="absolute -top-1 -right-1 bg-amber-500 text-black text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
            0
          </span>
        </Link>

        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-gray-300 hover:text-amber-400 transition-colors duration-300"
          >
            <LogOut size={20} />
            <span className="text-sm font-medium uppercase">Logout</span>
          </button>
        ) : (
          <Link
            to="/login"
            className="relative bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold py-2 px-6 rounded-full overflow-hidden group transition-all duration-300 hover:from-amber-400 hover:to-amber-500 hover:scale-105 active:scale-95 shadow-md hover:shadow-amber-500/30"
          >
            <span className="relative z-10">LOGIN</span>
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
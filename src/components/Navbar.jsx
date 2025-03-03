import React from "react";
import { ChefHat } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-black text-white py-4 px-6 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="text-amber-500">
          <ChefHat size={40} strokeWidth={1.5} />
        </div>
        <div className="text-2xl font-bold">
          <span className="text-amber-500">Resto</span>
          <span className="text-amber-700">Nest</span>
        </div>
      </div>

      <div className="hidden md:flex space-x-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-primary" : "hover:text-primary"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/menu"
          className={({ isActive }) =>
            isActive ? "text-primary" : "hover:text-primary"
          }
        >
          Menu
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-primary" : "hover:text-primary"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive ? "text-primary" : "hover:text-primary"
          }
        >
          Blog
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-primary" : "hover:text-primary"
          }
        >
          Contact
        </NavLink>
      </div>

      <Link
        to="/login"
        className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-2 px-6 rounded"
      >
        LOGIN
      </Link>
    </nav>
  );
};

export default Navbar;

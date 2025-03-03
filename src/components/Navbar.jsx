import React from 'react';
import { ChefHat } from 'lucide-react';
import { Link } from 'react-router-dom';

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
      
      <div className="hidden md:flex space-x-8">
        <a href="#" className="text-amber-500 hover:text-amber-400">HOME</a>
        <a href="#" className="hover:text-amber-500">ABOUT</a>
        <a href="#" className="hover:text-amber-500">MENU</a>
        <a href="#" className="hover:text-amber-500">RESERVATION</a>
        <a href="#" className="hover:text-amber-500">CONTACT</a>
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
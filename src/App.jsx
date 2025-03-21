import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Header";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Footer from "./components/Footer";
import DishDetailPage from "./components/menu/DishDetailPage";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import FoodCart from "./components/FoodCart";
import { AuthProvider } from "./components/menu/Context";
import { FoodProvider } from "./components/FoodContext";

function App() {
  return (
    <FoodProvider>
      <AuthProvider>
        <Router>
          <div className="font-poppins">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/menu/:id" element={<DishDetailPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cart" element={<FoodCart />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </FoodProvider>
  );
}

export default App;

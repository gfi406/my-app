import React, { useState } from "react";
import logo from "../media/logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <img src={logo} alt="RentPro Logo" className="h-12 w-auto" />

          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">О нас</a>
            <a href="#equipment" className="text-gray-600 hover:text-blue-600 transition-colors">Оборудование</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Контакты</a>
          </nav>

          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden px-2 pt-2 pb-3 space-y-1">
            <a href="#about" className="block px-3 py-2 text-gray-600 hover:bg-blue-50 rounded-md">О нас</a>
            <a href="#equipment" className="block px-3 py-2 text-gray-600 hover:bg-blue-50 rounded-md">Оборудование</a>
            <a href="#contact" className="block px-3 py-2 text-gray-600 hover:bg-blue-50 rounded-md">Контакты</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

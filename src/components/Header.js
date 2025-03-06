import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";
import logo from "../media/logo.jpg";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";
  
  const handleLogoClick = (e) => {
    if (isHomePage) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      navigate('/');
    }
  };

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo on the left */}
          <div 
            onClick={handleLogoClick} 
            className="cursor-pointer"
          >
            <img src={logo} alt="RentPro Logo" className="h-12 w-auto" />
          </div>
          
          {/* Contacts on the right */}
          <div className="flex gap-6">
            <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 text-2xl">
              <FaTelegram />
            </a>
            <a href="https://wa.me/79168497675" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 text-2xl">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
        <div className="flex items-center justify-center h-16">
          <div 
            onClick={handleLogoClick} 
            className="cursor-pointer"
          >
            <img src={logo} alt="RentPro Logo" className="h-12 w-auto" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
import React, { useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import logo from "../media/logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  
  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    
    
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    
    const element = document.getElementById(id);
    if (!element) return;
    
    const headerOffset = 64; 
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  
  const getNavLink = (section) => {
    if (isHomePage) {
      return {
        href: `#${section}`,
        onClick: (e) => handleSmoothScroll(e, section)
      };
    } else {
      return {
        href: `/#${section}`,
        onClick: null
      };
    }
  };

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div 
            onClick={handleLogoClick} 
            className="cursor-pointer"
          >
            <img src={logo} alt="RentPro Logo" className="h-12 w-auto" />
          </div>

          <nav className="hidden md:flex space-x-8">
            <a 
              href={getNavLink("about").href} 
              onClick={getNavLink("about").onClick}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              О нас
            </a>
            <a 
              href={getNavLink("equipment").href}
              onClick={getNavLink("equipment").onClick}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Оборудование
            </a>
            <a 
              href={getNavLink("contact").href}
              onClick={getNavLink("contact").onClick}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Контакты
            </a>
          </nav>

          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden px-2 pt-2 pb-3 space-y-1">
            <a 
              href={getNavLink("about").href}
              onClick={getNavLink("about").onClick}
              className="block px-3 py-2 text-gray-600 hover:bg-blue-50 rounded-md"
            >
              О нас
            </a>
            <a 
              href={getNavLink("equipment").href}
              onClick={getNavLink("equipment").onClick}
              className="block px-3 py-2 text-gray-600 hover:bg-blue-50 rounded-md"
            >
              Оборудование
            </a>
            <a 
              href={getNavLink("contact").href}
              onClick={getNavLink("contact").onClick}
              className="block px-3 py-2 text-gray-600 hover:bg-blue-50 rounded-md"
            >
              Контакты
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
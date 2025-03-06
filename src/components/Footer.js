import React from "react";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TETHYS EVENT</h3>
            <p className="text-gray-400">Профессиональное оборудование в аренду</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <p className="text-gray-400">Телефон: +7 (900) 000-00-00</p>
            <p className="text-gray-400">Email: info@rentpro.ru</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Режим работы</h3>
            <p className="text-gray-400">Пн-Пт: 9:00 - 20:00</p>
            <p className="text-gray-400">Сб-Вс: 10:00 - 18:00</p>
          </div>
        </div>
        
        {/* Иконки соцсетей */}
        <div className="flex justify-center gap-6 mt-8">
          <a href="https://t.me/deadsanfrost" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white text-2xl">
            <FaTelegram />
          </a>
          <a href="https://wa.me/79168497675" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white text-2xl">
            <FaWhatsapp />
          </a>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>© 2025 TETHYS EVENT. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

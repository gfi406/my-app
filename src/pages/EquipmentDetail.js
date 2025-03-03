import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const EquipmentDetail = () => {
  const { state } = useLocation();
  const sliderRef = useRef(null);

  if (!state) {
    return <div>Не удалось найти информацию об оборудовании.</div>;
  }

  const { title, image, description, examples } = state;

  const sliderSettings = {
    dots: false, // Changed from true to false to remove the dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Подробности об оборудовании</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Левая колонка с изображениями (слайдер) */}
          <div className="relative bg-white rounded-lg shadow-md overflow-hidden h-96">
            {/* Кастомные стрелки */}
            <button 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md z-10 hover:bg-gray-600"
              onClick={() => sliderRef.current?.slickPrev()}
            >
              <ChevronLeft size={24} />
            </button>

            <button 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md z-10 hover:bg-gray-600"
              onClick={() => sliderRef.current?.slickNext()}
            >
              <ChevronRight size={24} />
            </button>

            <div className="h-full">
              <Slider ref={sliderRef} {...sliderSettings} className="h-full">
                {image?.map((imgSrc, index) => (
                  <div key={index} className="h-96">
                    <img 
                      src={imgSrc} 
                      alt={`Фото ${index + 1}`} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          {/* Правая колонка с описанием */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>

            {/* Дополнительные плитки */}
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                <h4 className="font-semibold text-xl">Что входит в аренду:</h4>
                <ul className="list-disc pl-6">
                  <li>Световое оборудование</li>
                  <li>Звуковая аппаратура</li>
                  <li>Прочее оборудование для мероприятий</li>
                </ul>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                <h4 className="font-semibold text-xl">Как это работает:</h4>
                <p className="text-gray-600">
                  Мы доставляем оборудование на место проведения мероприятия, устанавливаем, а также предоставляем поддержку в процессе его использования.
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                <h4 className="font-semibold text-xl">Почему выбирают нас:</h4>
                <p className="text-gray-600">
                  Мы предоставляем высококачественное оборудование и обеспечиваем все необходимые услуги для вашего мероприятия.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Дополнительные блоки с техникой */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
          {examples?.map((example, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition-transform">
              <h4 className="font-semibold text-xl mb-4">{example.title || `Техника ${index + 1}`}</h4>
              <div className="h-60 overflow-hidden">
                <img 
                  src={example.image} 
                  alt={`Пример использования техники ${index + 1}`} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <p className="text-gray-600 mb-4">{example.description}</p>
              <p className="text-gray-600 font-semibold">{example.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipmentDetail;
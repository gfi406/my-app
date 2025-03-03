import React, { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const EquipmentDetail = () => {
  const { state } = useLocation();
  const sliderRef = useRef(null);
  const [autoplay, setAutoplay] = useState(true);

  if (!state) {
    return <div>Не удалось найти информацию об оборудовании.</div>;
  }

  const { title, image, description, advantages, examples } = state;

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: autoplay,
    autoplaySpeed: 1000,
    arrows: false,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
    touchThreshold: 5,
    useCSS: true,
    useTransform: true,
    waitForAnimate: false,
    pauseOnHover: true,
    beforeChange: () => {
      // Можно добавить логику перед сменой слайда
    },
    afterChange: () => {
      // Можно добавить логику после смены слайда
    },
    // Остановка автоплея при взаимодействии
    onSwipe: () => setAutoplay(false),
  };

  // Обработчики для стрелок, которые также останавливают автоплей
  const handlePrev = () => {
    setAutoplay(false);
    sliderRef.current?.slickPrev();
  };

  const handleNext = () => {
    setAutoplay(false);
    sliderRef.current?.slickNext();
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Подробности об оборудовании</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Левая колонка с изображениями (слайдер) */}
          <div className="relative bg-white rounded-lg shadow-md overflow-hidden h-96">
            {/* Кастомные стрелки - скрываем на мобильных устройствах */}
            <button 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md z-10 hover:bg-gray-600 hidden md:block"
              onClick={handlePrev}
            >
              <ChevronLeft size={24} />
            </button>

            <button 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md z-10 hover:bg-gray-600 hidden md:block"
              onClick={handleNext}
            >
              <ChevronRight size={24} />
            </button>

            <div className="h-full touch-pan-y">
              <Slider ref={sliderRef} {...sliderSettings} className="h-full">
                {image?.map((imgSrc, index) => (
                  <div key={index} className="h-96">
                    <img 
                      src={imgSrc} 
                      alt={`Фото ${index + 1}`} 
                      className="w-full h-full object-cover" 
                      draggable="false"
                      onTouchStart={() => setAutoplay(false)}
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
              {advantages?.map((advantage, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg shadow-sm">
                  {index === 0 ? (
                    // Для первого пункта выводим список
                    <>
                      <h4 className="font-semibold text-xl">{advantage.title}</h4>
                      <ul className="list-disc pl-5 text-gray-600">
                        {advantage.description.split(",").map((item, idx) => (
                          <li key={idx}>{item.trim()}</li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    // Для остальных выводим как абзац
                    <>
                      <h4 className="font-semibold text-xl">{advantage.title}</h4>
                      <p className="text-gray-600">{advantage.description}</p>
                    </>
                  )}
                </div>
              ))}
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

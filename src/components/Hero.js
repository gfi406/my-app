import React from "react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 break-words">
          Профессиональное оборудование в аренду
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Предоставляем качественное оборудование для вашего бизнеса и проектов
        </p>
        <a 
          href="https://wa.me/79168497675" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-6 md:px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
        >
          Получить предложение
        </a>
      </div>
    </section>
  );
};

export default Hero;
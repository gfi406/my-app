import React from "react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Профессиональное оборудование в аренду
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Предоставляем качественное оборудование для вашего бизнеса и проектов
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-lg">
          Получить предложение
        </button>
      </div>
    </section>
  );
};

export default Hero;

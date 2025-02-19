import React from "react";
import { useLocation } from "react-router-dom";

const EquipmentDetail = () => {
  const { state } = useLocation();  
  const { title, image, description, examples } = state || {};  

  
  if (!state) {
    return <div>Не удалось найти информацию об оборудовании.</div>;
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Подробности об оборудовании</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Левая колонка с изображением */}
          <div className="bg-white rounded-lg shadow-md">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          
          
          {/* Правая колонка с описанием */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            
            {/* Дополнительные плитки с описаниями */}
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

        {/* Дополнительные блоки с техникой, фотографиями и ценой */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
          {/* Блок 1: Описание техники */}
          {examples && examples.map((example, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition-transform">
              <h4 className="font-semibold text-xl mb-4">{example.title || `Техника ${index + 1}`}</h4>
              <img src={example.image} alt={`Пример использования техники ${index + 1}`} className="w-full h-60 object-cover mb-4" />
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

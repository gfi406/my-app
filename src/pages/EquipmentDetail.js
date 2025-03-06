import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { X } from "lucide-react";

const EquipmentDetail = () => {
  const { state } = useLocation();
  const [selectedImage, setSelectedImage] = useState(null);

  if (!state) {
    return <div>Не удалось найти информацию об оборудовании.</div>;
  }

  const { title, image, description, advantages, examples } = state;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Подробности об оборудовании</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Левая колонка с изображениями (плитка) */}
          <div className="grid grid-cols-3 gap-2">
            {image?.map((imgSrc, index) => (
              <div key={index} className="cursor-pointer" onClick={() => setSelectedImage(imgSrc)}>
                <img 
                  src={imgSrc} 
                  alt={`Фото ${index + 1}`} 
                  className="w-full h-32 object-cover rounded-lg shadow-md hover:scale-105 transition-transform" 
                />
              </div>
            ))}
          </div>
          
          {/* Правая колонка с описанием */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <div className="space-y-4">
              {advantages?.map((advantage, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-xl">{advantage.title}</h4>
                  <p className="text-gray-600">{advantage.description}</p>
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

      {/* Модальное окно для изображения */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative p-4 max-w-3xl">
            <button className="absolute top-4 right-4 text-white" onClick={() => setSelectedImage(null)}>
              <X size={32} />
            </button>
            <img src={selectedImage} alt="Выбранное изображение" className="w-full max-h-[80vh] object-contain" />
          </div>
        </div>
      )}
    </section>
  );
};

export default EquipmentDetail;

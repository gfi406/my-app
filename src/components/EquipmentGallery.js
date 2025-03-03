import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const EquipmentGallery = () => {
  const navigate = useNavigate();

  const equipmentList = [
    { 
      id: 1, 
      title: 'Свадьбы', 
      image: [
        'https://kasla-wed.ru/upload/iblock/af4/6mp05ltpsiaww1bxt92yiolgvm1s277x.jpg', 
        'https://aksioma.rent/assets/img/totemy/d6929886cfff118b8902a1a8c0b5dbaf.jpg',
        'https://news.store.rambler.ru/img/a672e36897d359c94369a36ec38734db?img-format=auto&img-1-resize=height:400,fit:max&img-2-filter=sharpen'
      ],
      description: 'Световая и звуковая техника для организации незабываемых свадебных торжеств.',
      examples: [
        { image: 'https://aksioma.rent/assets/img/totemy/d6929886cfff118b8902a1a8c0b5dbaf.jpg', description: 'Световое оборудование 1-8 тотемов', price: '10,000 - 30,000 рублей',title: 'Световое оборудование' },
        { image: 'https://pop-music.ru/upload/medialibrary/68e/68ef33b0c36b868224aa65e5145b6d66.jpg', description: 'Звуковое оборудование 2-6кВТ', price: '10,000 - 30,000 рублей',title: 'Звуковое оборудование' },
      ]
    },
    { 
      id: 2, 
      title: 'Корпоративы', 
      image: [
        'https://party2go.ru/wp-content/uploads/2022/04/25.jpg',
        'https://aksioma.rent/assets/img/totemy/d6929886cfff118b8902a1a8c0b5dbaf.jpg',
        'https://aksioma.rent/assets/img/totemy/d6929886cfff118b8902a1a8c0b5dbaf.jpg'
      ], 
      description: 'Профессиональная звуковая и световая аппаратура для корпоративных мероприятий.',
      examples: [
        { image: 'https://aksioma.rent/assets/img/totemy/d6929886cfff118b8902a1a8c0b5dbaf.jpg', description: 'Световое оборудование 1-8 тотемов', price: '10,000 - 30,000 рублей',title: 'Световое оборудование' },
        { image: 'https://pop-music.ru/upload/medialibrary/68e/68ef33b0c36b868224aa65e5145b6d66.jpg', description: 'Звуковое оборудование 2-6кВТ', price: '10,000 - 30,000 рублей',title: 'Звуковое оборудование' },
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Наше оборудование</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipmentList.map((item) => (
            <EquipmentCard key={item.id} item={item} navigate={navigate} />
          ))}
        </div>
      </div>
    </section>
  );
};

const EquipmentCard = ({ item, navigate }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesLength = item.image.length;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? imagesLength - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === imagesLength - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer transition-transform hover:scale-105"
      onClick={() => navigate(`/equipment/${item.id}`, { state: item })}
    >
      <div className="relative">
        {/* Картинка слайдера */}
        <img src={item.image[currentIndex]} alt={item.title} className="w-full h-64 object-cover" />

        {/* Кнопки переключения */}
        <button 
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md z-10 hover:bg-gray-600"
          onClick={(e) => { e.stopPropagation(); prevSlide(); }}
        >
          <ChevronLeft size={24} />
        </button>

        <button 
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md z-10 hover:bg-gray-600"
          onClick={(e) => { e.stopPropagation(); nextSlide(); }}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Контент */}
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
        <p className="text-gray-600 mb-2">{item.description}</p>
        <button className="text-blue-600 font-medium hover:text-blue-800">Подробнее →</button>
      </div>
    </div>
  );
};

export default EquipmentGallery;

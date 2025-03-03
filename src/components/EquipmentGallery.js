import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const EquipmentGallery = () => {
  const navigate = useNavigate();

  const equipmentList = [
    { 
      id: 1, 
      title: 'Комерция', 
      image: [
        'https://party2go.ru/wp-content/uploads/2022/04/25.jpg',
        'https://aksioma.rent/assets/img/totemy/d6929886cfff118b8902a1a8c0b5dbaf.jpg',
        'https://aksioma.rent/assets/img/totemy/d6929886cfff118b8902a1a8c0b5dbaf.jpg'
      ], 
      description: 'Профессиональная звуковая и световая аппаратура для корпоративных мероприятий.',
      advantages: [
        { title: "Что входит в аренду:", description: "Световое оборудование, Звуковая аппаратура, Прочее оборудование для мероприятий" },
        { title: "Как это работает:", description: "Мы доставляем оборудование на место проведения мероприятия, устанавливаем, а также предоставляем поддержку в процессе его использования." },
        { title: "Почему выбирают нас:", description: "Мы предоставляем высококачественное оборудование и обеспечиваем все необходимые услуги для вашего мероприятия." }
      ],
      examples: [
        { image: 'https://aksioma.rent/assets/img/totemy/d6929886cfff118b8902a1a8c0b5dbaf.jpg', description: 'Световое оборудование 1-8 тотемов', price: '10,000 - 30,000 рублей',title: 'Световое оборудование' },
        { image: 'https://pop-music.ru/upload/medialibrary/68e/68ef33b0c36b868224aa65e5145b6d66.jpg', description: 'Звуковое оборудование 2-6кВТ', price: '10,000 - 30,000 рублей',title: 'Звуковое оборудование' },
      ]
    },
    { 
      id: 2, 
      title: 'Фестивали, концерты', 
      image: [
        'https://s0.rbk.ru/v6_top_pics/media/img/8/21/755522302148218.jpeg', 
        'https://aksioma.rent/assets/img/totemy/d6929886cfff118b8902a1a8c0b5dbaf.jpg',
        'https://news.store.rambler.ru/img/a672e36897d359c94369a36ec38734db?img-format=auto&img-1-resize=height:400,fit:max&img-2-filter=sharpen'
      ],
      description: '',
      advantages: [
        { title: "Что входит в аренду:", description: "Световое оборудование, Звуковая аппаратура, Прочее оборудование для мероприятий" },
        { title: "Как это работает:", description: "Мы доставляем оборудование на место проведения мероприятия, устанавливаем, а также предоставляем поддержку в процессе его использования." },
        { title: "Почему выбирают нас:", description: "Мы предоставляем высококачественное оборудование и обеспечиваем все необходимые услуги для вашего мероприятия." }
      ],
      examples: [
        { image: 'https://aksioma.rent/assets/img/totemy/d6929886cfff118b8902a1a8c0b5dbaf.jpg', description: 'Световое оборудование 1-8 тотемов', price: '10,000 - 30,000 рублей',title: 'Световое оборудование' },
        { image: 'https://pop-music.ru/upload/medialibrary/68e/68ef33b0c36b868224aa65e5145b6d66.jpg', description: 'Звуковое оборудование 2-6кВТ', price: '10,000 - 30,000 рублей',title: 'Звуковое оборудование' },
      ]
      
    },
    { 
      id: 3, 
      title: 'Свадьбы, юбилеи, поминки', 
      image: [
        'https://kasla-wed.ru/upload/iblock/af4/6mp05ltpsiaww1bxt92yiolgvm1s277x.jpg', 
        'https://aksioma.rent/assets/img/totemy/d6929886cfff118b8902a1a8c0b5dbaf.jpg',
        'https://news.store.rambler.ru/img/a672e36897d359c94369a36ec38734db?img-format=auto&img-1-resize=height:400,fit:max&img-2-filter=sharpen'
      ],
      description: '',
      advantages: [
        { title: "Что входит в аренду:", description: "Световое оборудование, Звуковая аппаратура, Прочее оборудование для мероприятий, Гроб для усобшего" },
        { title: "Как это работает:", description: "Мы доставляем оборудование на место проведения мероприятия, устанавливаем, а также предоставляем поддержку в процессе его использования." },
        { title: "Почему выбирают нас:", description: "Мы оочень любим похороны, просто живем ими." }
      ],
      examples: [
        { image: 'https://aksioma.rent/assets/img/totemy/d6929886cfff118b8902a1a8c0b5dbaf.jpg', description: 'Световое оборудование 1-8 тотемов', price: '10,000 - 30,000 рублей',title: 'Световое оборудование' },
        { image: 'https://pop-music.ru/upload/medialibrary/68e/68ef33b0c36b868224aa65e5145b6d66.jpg', description: 'Звуковое оборудование 2-6кВТ', price: '10,000 - 30,000 рублей',title: 'Звуковое оборудование' },
      ]
      
    },
    { 
      id: 4, 
      title: 'Обслуживание', 
      image: [
        'https://i.pinimg.com/736x/b6/5f/0d/b65f0d91d2289c434b8d3eab4c300823.jpg', 
        'https://media.istockphoto.com/id/641494268/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA-%D1%81-%D0%BC%D0%BE%D0%BB%D0%BE%D1%82%D0%BA%D0%BE%D0%BC-%D0%B2-%D1%80%D1%83%D0%BA%D0%B5.jpg?s=612x612&w=0&k=20&c=CfATyfnEv9dKQt7uMuC1z1oAIpmQ7AZdJDdC1n7oRhw=',
        'https://news.store.rambler.ru/img/a672e36897d359c94369a36ec38734db?img-format=auto&img-1-resize=height:400,fit:max&img-2-filter=sharpen'
      ],
      description: '',
      advantages: [
        { title: "Что входит в аренду:", description: "Световое оборудование, Звуковая аппаратура, Прочее оборудование для мероприятий" },
        { title: "Как это работает:", description: "Мы доставляем оборудование на место проведения мероприятия, устанавливаем, а также предоставляем поддержку в процессе его использования." },
        { title: "Почему выбирают нас:", description: "Мы предоставляем высококачественное оборудование и обеспечиваем все необходимые услуги для вашего мероприятия." }
      ],
      examples: [
        { image: 'https://aksioma.rent/assets/img/totemy/d6929886cfff118b8902a1a8c0b5dbaf.jpg', description: 'Световое оборудование 1-8 тотемов', price: '10,000 - 30,000 рублей',title: 'Световое оборудование' },
        { image: 'https://pop-music.ru/upload/medialibrary/68e/68ef33b0c36b868224aa65e5145b6d66.jpg', description: 'Звуковое оборудование 2-6кВТ', price: '10,000 - 30,000 рублей',title: 'Звуковое оборудование' },
      ]
      
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Наши услуги</h2>
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
  const [autoplay, setAutoplay] = useState(true);
  const [autoplayInterval, setAutoplayInterval] = useState(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const imagesLength = item.image.length;
  const slideRef = useRef(null);

  // Функция для автоматического переключения слайдов
  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev === imagesLength - 1 ? 0 : prev + 1));
      }, 3000);
      setAutoplayInterval(interval);
    } else if (autoplayInterval) {
      clearInterval(autoplayInterval);
    }

    return () => {
      if (autoplayInterval) {
        clearInterval(autoplayInterval);
      }
    };
  }, [autoplay, imagesLength, autoplayInterval]);

  const prevSlide = (e) => {
    if (e) e.stopPropagation();
    setAutoplay(false);
    setCurrentIndex((prev) => (prev === 0 ? imagesLength - 1 : prev - 1));
  };

  const nextSlide = (e) => {
    if (e) e.stopPropagation();
    setAutoplay(false);
    setCurrentIndex((prev) => (prev === imagesLength - 1 ? 0 : prev + 1));
  };

  // Обработчики для свайпов
  const handleTouchStart = (e) => {
    setAutoplay(false);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Свайп влево
      nextSlide();
    }

    if (touchStart - touchEnd < -75) {
      // Свайп вправо
      prevSlide();
    }
  };

  return (
    <div
      className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer transition-transform hover:scale-105"
      onClick={() => navigate(`/equipment/${item.id}`, { state: item })}
    >
      <div 
        className="relative" 
        ref={slideRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Картинка слайдера */}
        <img 
          src={item.image[currentIndex]} 
          alt={item.title} 
          className="w-full h-64 object-cover" 
          draggable="false"
        />

        {/* Кнопки переключения - скрываем на мобильных */}
        <button 
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md z-10 hover:bg-gray-600 hidden md:block"
          onClick={prevSlide}
        >
          <ChevronLeft size={24} />
        </button>

        <button 
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md z-10 hover:bg-gray-600 hidden md:block"
          onClick={nextSlide}
        >
          <ChevronRight size={24} />
        </button>

        {/* Индикатор страниц */}
        {imagesLength > 1 && (
          <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
            {Array.from({ length: imagesLength }).map((_, index) => (
              <span
                key={index}
                className={`h-2 w-2 rounded-full ${
                  currentIndex === index ? 'bg-white' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Контент */}
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
        {/* <p className="text-gray-600 mb-2">{item.description}</p> */}
        {/* <button className="text-blue-600 font-medium hover:text-blue-800">Подробнее →</button> */}
      </div>
    </div>
  );
};

export default EquipmentGallery;
import React from "react";
import { useNavigate } from 'react-router-dom';


const EquipmentGallery = () => {
  const navigate = useNavigate();

  const equipmentList = [
    { 
      id: 1, 
      title: 'Свадьбы', 
      image: 'https://kasla-wed.ru/upload/iblock/af4/6mp05ltpsiaww1bxt92yiolgvm1s277x.jpg', 
      description: 'Световая и звуковая техника для организации незабываемых свадебных торжеств.',
      examples: [
        { image: 'https://aksioma.rent/assets/img/totemy/d6929886cfff118b8902a1a8c0b5dbaf.jpg', description: 'Световое оформление для свадебного зала', price: '25,000 рублей',title: 'Световое оборудование' },
        { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTisp37VlXiKDd7FJGXHkZIh6dLxiU_kI5U_g&s', description: 'Звуковое оборудование для свадебной церемонии', price: '20,000 рублей',title: 'Звуковое оборудование' },
      ]
    },
    { 
      id: 2, 
      title: 'Корпоративы', 
      image: 'https://party2go.ru/wp-content/uploads/2022/04/25.jpg', 
      description: 'Профессиональная звуковая и световая аппаратура для корпоративных мероприятий.',
      examples: [
        { image: 'https://aksioma.rent/assets/img/totemy/d6929886cfff118b8902a1a8c0b5dbaf.jpg', description: 'Световое оборудование 1-8 тотемов', price: '10,000 - 30,000 рублей',title: 'Световое оборудование' },
        { image: 'https://pop-music.ru/upload/medialibrary/68e/68ef33b0c36b868224aa65e5145b6d66.jpg', description: 'Звуковое оборудование 2-6кВТ', price: '10,000 - 30,000 рублей',title: 'Звуковое оборудование' },
        // { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTisp37VlXiKDd7FJGXHkZIh6dLxiU_kI5U_g&s', description: 'Звуковое оборудование для корпоративных вечеринок', price: '30,000 рублей' },
        // { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTisp37VlXiKDd7FJGXHkZIh6dLxiU_kI5U_g&s', description: 'Проекционное оборудование для презентаций', price: '15,000 рублей' },
        // { image: 'https://party365.ru/images/watermarked/1/thumbnails/800/700/detailed/2/001_%D0%94%D0%BB%D1%8F_%D0%A0%D0%B0%D0%B1%D0%BE%D1%82%D1%8B_Party365.ru_2020.493.jpeg', description: 'Проекционное оборудование для презентаций', price: '15,000 рублей' },
      ]
    },
    { 
      id: 3, 
      title: 'Юбилеи', 
      image: 'https://annalegenda.ru/wp-content/uploads/2020/04/620x369_1_2136558da752bacbf84575664aa29c7d-5554x3308_0xc0a839a2_9178938381484896210.jpeg', 
      description: 'Высококачественная звуковая и световая техника для организации юбилеев и праздничных событий.',
      examples: [
        { image: 'https://aksioma.rent/assets/img/totemy/d6929886cfff118b8902a1a8c0b5dbaf.jpg', description: 'Световое оформление для свадебного зала', price: '25,000 рублей',title: 'Световое оборудование' },
        { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTisp37VlXiKDd7FJGXHkZIh6dLxiU_kI5U_g&s', description: 'Звуковое оборудование для свадебной церемонии', price: '20,000 рублей',title: 'Звуковое оборудование' },
        // { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTisp37VlXiKDd7FJGXHkZIh6dLxiU_kI5U_g&s', description: 'Звук и свет для юбилейной вечеринки', price: '22,000 рублей' },
        // { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTisp37VlXiKDd7FJGXHkZIh6dLxiU_kI5U_g&s', description: 'Световое оформление для торжественного вечера', price: '18,000 рублей' },
      ]
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Наше оборудование</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipmentList.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer transition-transform hover:scale-105"
              onClick={() => navigate(`/equipment/${item.id}`, { state: item })}
            >
              <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-2">{item.description}</p>
                <button className="text-blue-600 font-medium hover:text-blue-800">Подробнее →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipmentGallery;

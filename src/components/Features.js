import React from "react";

const features = [
  { title: "Быстрая доставка", description: "Доставляем оборудование в день заказа по всему городу", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
  { title: "Гарантия качества", description: "Все оборудование проходит регулярное техобслуживание", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" },
  { title: "Выгодные цены", description: "Гибкая система скидок для постоянных клиентов", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2" }
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="p-6 bg-gray-50 rounded-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;

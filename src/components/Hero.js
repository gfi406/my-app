import React from "react";

const Hero = () => {
  return (
    <section 
      className="pt-32 pb-20 px-4 bg-cover bg-center flex items-center justify-center" 
      style={{ backgroundImage: 'url(https://34mag.net/piarshak/content/editor_images/2018content/september/15sovetov_koncert/125.jpg)', height: '100vh' }}
    >
      <div className="container mx-auto text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 break-words">
          Профессиональное оборудование в аренду
        </h1>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';

const Hero = () => {
  return (
    <div className="bg-blue-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
            Discover Amazing Products
          </h1>
          <p className="mt-3 max-w-md mx-auto text-xl sm:text-2xl md:mt-5 md:max-w-3xl">
            Shop the latest trends with confidence. Quality products, fast shipping, and excellent customer service.
          </p>
          <div className="mt-10">
            <a href="#products" className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg shadow-md hover:bg-gray-100">
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
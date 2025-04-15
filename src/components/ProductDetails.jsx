import React from 'react';

const ProductDetails = ({ product, onBackClick }) => {
  return (
    <div className="flex-grow py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBackClick}
          className="mb-6 flex items-center text-blue-600 font-medium"
        >
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          Back to Products
        </button>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img 
                src={product.image} 
                alt={product.name} 
                className="h-64 w-full object-cover md:w-64"
              />
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
              <p className="mt-2 text-xl text-blue-600 font-semibold">${product.price.toFixed(2)}</p>
              <div className="mt-4">
                <p className="text-gray-600">{product.description}</p>
              </div>
              <div className="mt-8">
                <button className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
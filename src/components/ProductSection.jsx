import React from 'react';
import ProductCard from './ProductCard';

const ProductSection = ({ onProductClick }) => {
  const products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 149.99,
      image: 'https://shopatsc.com/cdn/shop/products/CH520_1000x1000_Black_G.jpg?v=1681194265',
      description: 'Premium wireless headphones with noise cancellation and 30 hours of battery life.',
      link: 'https://www.amazon.com/Wireless-Headphones-Noise-Cancellation-Bluetooth/dp/B08F7HRMYK'  // Example link
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 299.99,
      image: 'https://acwo.com/cdn/shop/files/1_37fcd3a3-2c30-43f4-b8ab-b3fb6bc7e840.webp?v=1715668385&width=720',
      description: 'Track your fitness, receive notifications, and more with this sleek smart watch.',
      link: 'https://www.bestbuy.com/site/samsung-galaxy-watch-4-40mm-bt-silver/6026870.p?skuId=6026870'  // Example link
    },
    {
      id: 3,
      name: 'Portable Speaker',
      price: 89.99,
      image: 'https://parasproaudio.com/wp-content/uploads/2021/08/Ahuja-bta-880.jpg',
      description: 'Waterproof portable speaker with powerful bass and 20 hours of playtime.',
      link: 'https://www.walmart.com/ip/JBL-Flip-5-Wireless-Portable-Speaker/529235772'  // Example link
    },
    {
      id: 4,
      name: 'Laptop Backpack',
      price: 59.99,
      image: 'https://m.media-amazon.com/images/I/71ApNUnhZgL._SY741_.jpg',
      description: 'Durable laptop backpack with multiple compartments and USB charging port.',
      link: 'https://www.amazon.com/Backpack-Backpacks-Computer-Compartments-Adjustable/dp/B08ZYMLQ3S'  // Example link
    }
  ];

  return (
    <div id="products" className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onClick={() => onProductClick(product)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;

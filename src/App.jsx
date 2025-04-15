import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import ProductDetails from './components/ProductDetails';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleNavigation = (page) => {
    setCurrentPage(page);
    if (page !== 'productDetails') {
      setSelectedProduct(null);
    }
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setCurrentPage('productDetails');
  };

  // About and Contact pages
  const AboutPage = () => (
    <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">About Us</h2>
        <p className="text-lg text-gray-600 text-center">
          ShopNow is a premier online retailer offering high-quality products at competitive prices.
          Founded in 2022, we strive to provide excellent customer service and fast shipping.
        </p>
      </div>
    </div>
  );

  const ContactPage = () => (
    <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Contact Us</h2>
        <div className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
              <input className="w-full px-3 py-2 border rounded-md" id="name" type="text" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
              <input className="w-full px-3 py-2 border rounded-md" id="email" type="email" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
              <textarea className="w-full px-3 py-2 border rounded-md" id="message" rows="4"></textarea>
            </div>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero />
            <ProductSection onProductClick={handleProductClick} />
          </>
        );
      case 'products':
        return <ProductSection onProductClick={handleProductClick} />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'productDetails':
        return (
          <ProductDetails 
            product={selectedProduct} 
            onBackClick={() => handleNavigation('products')} 
          />
        );
      default:
        return <Hero />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar activePage={currentPage} onNavigate={handleNavigation} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;

import { useState } from 'react';

const Navbar = ({ activePage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (page) => {
    setIsMenuOpen(false);
    onNavigate(page);
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span 
                className="text-xl font-bold cursor-pointer" 
                onClick={() => handleNavigation('home')}
              >
                ShopNow
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a 
                  onClick={() => handleNavigation('home')}
                  className={`px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${activePage === 'home' ? 'bg-gray-900' : 'hover:bg-gray-700'}`}
                >
                  Home
                </a>
                <a 
                  onClick={() => handleNavigation('products')}
                  className={`px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${activePage === 'products' ? 'bg-gray-900' : 'hover:bg-gray-700'}`}
                >
                  Products
                </a>
                <a 
                  onClick={() => handleNavigation('about')}
                  className={`px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${activePage === 'about' ? 'bg-gray-900' : 'hover:bg-gray-700'}`}
                >
                  About
                </a>
                <a 
                  onClick={() => handleNavigation('contact')}
                  className={`px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${activePage === 'contact' ? 'bg-gray-900' : 'hover:bg-gray-700'}`}
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-700 focus:outline-none"
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              onClick={() => handleNavigation('home')}
              className={`block px-3 py-2 rounded-md text-base font-medium cursor-pointer ${activePage === 'home' ? 'bg-gray-900' : 'hover:bg-gray-700'}`}
            >
              Home
            </a>
            <a 
              onClick={() => handleNavigation('products')}
              className={`block px-3 py-2 rounded-md text-base font-medium cursor-pointer ${activePage === 'products' ? 'bg-gray-900' : 'hover:bg-gray-700'}`}
            >
              Products
            </a>
            <a 
              onClick={() => handleNavigation('about')}
              className={`block px-3 py-2 rounded-md text-base font-medium cursor-pointer ${activePage === 'about' ? 'bg-gray-900' : 'hover:bg-gray-700'}`}
            >
              About
            </a>
            <a 
              onClick={() => handleNavigation('contact')}
              className={`block px-3 py-2 rounded-md text-base font-medium cursor-pointer ${activePage === 'contact' ? 'bg-gray-900' : 'hover:bg-gray-700'}`}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
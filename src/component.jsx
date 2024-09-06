
import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">
          <a href="/"> StockQuary.Com !</a>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="text-gray-800 hover:text-indigo-600">Home</a>
          <a href="/about" className="text-gray-800 hover:text-indigo-600">About</a>
          <a href="/services" className="text-gray-800 hover:text-indigo-600">Services</a>
          <a href="/contact" className="text-gray-800 hover:text-indigo-600">Contact</a>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 hover:text-indigo-600 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <nav className="px-6 pt-4 pb-6 bg-white shadow-md">
            <a href="/" className="block py-2 text-gray-800 hover:text-indigo-600">Home</a>
            <a href="/about" className="block py-2 text-gray-800 hover:text-indigo-600">About</a>
            <a href="/services" className="block py-2 text-gray-800 hover:text-indigo-600">Services</a>
            <a href="/contact" className="block py-2 text-gray-800 hover:text-indigo-600">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          {/* Logo and Description */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-white">StockQuary.com</h2>
            <p className="mt-2 text-gray-400">
              follow price action and 
              control your emotion .
            </p>
          </div>
          
          {/* Navigation Links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="/" className="hover:text-white">Home</a>
              </li>
              <li className="mb-2">
                <a href="/about" className="hover:text-white">About Us</a>
              </li>
              <li className="mb-2">
                <a href="/services" className="hover:text-white">Services</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
            <p className="text-gray-400">
              123 Street Name, City, Country
            </p>
            <p className="mt-2 text-gray-400">
              Email: info@mywebsite.com
            </p>
            <p className="mt-2 text-gray-400">
              Phone: +1 (234) 567-890
            </p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-white">
            <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M24 4.56v14.88c0 2.52-2.04 4.56-4.56 4.56H4.56C2.04 24 0 21.96 0 19.44V4.56C0 2.04 2.04 0 4.56 0h14.88C21.96 0 24 2.04 24 4.56zm-4.56 0h-1.8c-.18 0-.36.06-.54.18-.18.12-.3.3-.3.54v1.8h2.64l-.36 2.64h-2.28v7.92h-2.64V9.72h-1.8v-2.64h1.8V5.22c0-1.08.42-2.1 1.14-2.82.72-.72 1.74-1.14 2.82-1.14h2.28v2.64z" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M23.953 4.569c-.885.394-1.832.661-2.828.775 1.017-.609 1.798-1.574 2.165-2.723-.951.564-2.005.974-3.127 1.196-.897-.954-2.178-1.55-3.594-1.55-2.72 0-4.924 2.204-4.924 4.923 0 .385.045.762.127 1.123-4.092-.205-7.72-2.165-10.14-5.144-.426.729-.669 1.577-.669 2.476 0 1.708.869 3.216 2.188 4.099-.807-.025-1.566-.248-2.228-.616v.062c0 2.385 1.697 4.374 3.946 4.825-.413.111-.85.171-1.3.171-.316 0-.626-.03-.927-.086.627 1.956 2.445 3.379 4.6 3.421-1.68 1.319-3.797 2.107-6.102 2.107-.396 0-.788-.024-1.175-.069 2.179 1.395 4.768 2.209 7.557 2.209 9.053 0 14-7.496 14-13.986 0-.213-.005-.426-.014-.637.961-.695 1.8-1.562 2.462-2.548l-.047-.02z" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M23.998 4.144c-.885.392-1.836.656-2.828.775 1.017-.609 1.797-1.573 2.165-2.721-.951.564-2.003.973-3.127 1.195-.898-.956-2.176-1.551-3.592-1.551-2.72 0-4.923 2.202-4.923 4.924 0 .387.045.763.127 1.124-4.093-.204-7.72-2.165-10.143-5.145-.427.73-.669 1.577-.669 2.476 0 1.708.869 3.216 2.189 4.1-.808-.026-1.567-.248-2.228-.618v.062c0 2.387 1.697 4.374 3.945 4.826-.413.11-.849.17-1.298.17-.317 0-.627-.03-.928-.087.627 1.956 2.446 3.379 4.6 3.421-1.68 1.318-3.798 2.107-6.103 2.107-.396 0-.787-.024-1.174-.069 2.179 1.395 4.768 2.21 7.556 2.21 9.054 0 14.001-7.496 14.001-13.986 0-.213-.004-.426-.014-.638.961-.694 1.8-1.561 2.461-2.548l-.047-.02z" />
            </svg>
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-gray-400">
          <p className='text color bg to-black'>&copy; 2024 sachin choudhary. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

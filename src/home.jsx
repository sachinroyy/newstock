import React from 'react';

const Home = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-6 text-center">
        {/* Hero Image */}
        <div className="w-full mb-12">
          <img 
            src="https://images.pexels.com/photos/5561923/pexels-photo-5561923.jpeg?auto=compress&cs=tinysrgb&w=600" 
            alt="Hero" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Headline */}
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Welcome to StockQuary
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-600 mb-8">
          We offer the best web development and digital solutions to help your business grow. Join us on a journey to create something extraordinary.
        </p>

        {/* Call to Action */}
        <a 
          href="/contact" 
          className="bg-indigo-600 text-white py-3 px-8 rounded-full shadow-lg hover:bg-indigo-700 transition duration-300"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Home;

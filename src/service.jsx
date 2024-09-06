import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Stock Market Cource',
      description: 'A stock market, equity market, or share market is the aggregation of buyers and sell',

      icon: (
        <svg className="w-12 h-12 mb-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 9h16M9 4v16" />
        </svg>
      ),
    },
    {
      title: 'ONLINE LEARNING',
      description: 'Create intuitive and engaging user interfaces for your digital products.',
      icon: (
        <svg className="w-12 h-12 mb-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7 12a5 5 0 00-5 5v2h16v-2a5 5 0 00-5-5H7z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: 'SUMMARY',
      description: 'Promote your business and reach your target audience with our marketing solutions.',
      icon: (
        <svg className="w-12 h-12 mb-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h16M9 4v16m-4-4l5-5 5 5" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-6 text-center">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Our Services</h2>
          <p className="text-gray-600 mt-4">
            We offer a wide range of digital solutions to help your business grow.
          </p>
        </div>

        {/* Services List */}
        <div className="flex flex-wrap justify-center">
          {services.map((service, index) => (
            <div key={index} className="w-full md:w-1/3 px-6 mb-12">
              <div className="bg-white rounded-lg shadow-lg p-8">
                {service.icon}
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

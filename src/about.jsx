import React from 'react';

const About = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
          <p className="text-gray-600 mt-4">
            Learn more about our journey and values.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-wrap -mx-6">
          {/* Image Section */}
          <div className="w-full md:w-1/2 px-6 mb-12 md:mb-0">
            <img
              src="https://images.pexels.com/photos/6801651/pexels-photo-6801651.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="About Us"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 px-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Story
            </h3>
            <p className="text-gray-600 mb-4">
            A stock market, equity market, or share market is the aggregation of buyers and sellers of stocks (also called shares), which represent ownership claims on businesses; these may include securities listed on a public stock exchange as well as stock that is only traded privately, such as shares of private companies that are sold to investors through equity crowdfunding platforms. Investments are usually made with an investment strategy in mind            </p>
            <p className="text-gray-600 mb-4">
            </p>
            <p className="text-gray-600">
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

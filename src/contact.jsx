import React from 'react';

const Contact = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Contact Us</h2>
          <p className="text-gray-600 mt-4">
            We would love to hear from you! Please fill out the form below.
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-lg mx-auto">
          <form>
            {/* Name Input */}
            <div className="mb-6">
              <label className="block text-gray-600 font-semibold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                type="text"
                id="name"
                placeholder="Your Name"
                required
              />
            </div>

            {/* Email Input */}
            <div className="mb-6">
              <label className="block text-gray-600 font-semibold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                type="email"
                id="email"
                placeholder="Your Email"
                required
              />
            </div>

            {/* Message Input */}
            <div className="mb-6">
              <label className="block text-gray-600 font-semibold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                id="message"
                rows="5"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                className="bg-indigo-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

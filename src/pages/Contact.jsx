import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaFax } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <section className="bg-[#035F6A] text-white text-center py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          We’d love to hear from you! Whether you're ready to place an order, book a consultation, or just have questions — reach out.
        </p>
      </section>

      {/* Contact Info Cards */}
      <section className="bg-[#035F6A] py-12 px-6 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white text-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <FaMapMarkerAlt className="text-3xl mx-auto mb-2 text-[#035F6A]" />
            <h4 className="font-bold mb-1">OUR MAIN OFFICE</h4>
            <p>Osu, Accra, Ghana</p>
          </div>

          <div className="bg-white text-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <FaPhoneAlt className="text-3xl mx-auto mb-2 text-[#035F6A]" />
            <h4 className="font-bold mb-1">PHONE NUMBER</h4>
            <p>+233 559 718 196</p>
            <p>+233 888 123 456 (Toll Free)</p>
          </div>

          <div className="bg-white text-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <FaWhatsapp className="text-3xl mx-auto mb-2 text-[#25D366]" />
            <h4 className="font-bold mb-1">WHATSAPP</h4>
            <a 
              href="https://wa.me/233559718196" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#25D366] hover:underline"
            >
              Chat with us
            </a>
          </div>

          <div className="bg-white text-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <FaEnvelope className="text-3xl mx-auto mb-2 text-[#035F6A]" />
            <h4 className="font-bold mb-1">EMAIL</h4>
            <a 
              href="mailto:info@movehubenergy.com" 
              className="text-[#035F6A] hover:underline"
            >
              info@movehubenergy.com
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-[#e6f4f1] py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#035F6A] mb-8">Contact Us</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Enter your Name"
              className="w-full p-3 rounded-md border border-gray-300"
              required
            />
            <input
              type="email"
              placeholder="Enter a valid email address"
              className="w-full p-3 rounded-md border border-gray-300"
              required
            />
            <textarea
              rows="5"
              placeholder="Your message..."
              className="w-full p-3 rounded-md border border-gray-300"
              required
            />
            <button
              type="submit"
              className="bg-[#F1782D] text-white px-6 py-3 rounded-md font-semibold hover:bg-green-700 block mx-auto"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-[#035F6A] text-white text-center py-10 px-6">
        <h3 className="text-2xl font-bold mb-3">Ready to make the switch to clean energy?</h3>
        <p className="mb-5">Let’s help you get started with LPG delivery or solar installation today.</p>
        <a
          href="/"
          className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100"
        >
          Go Back to Home
        </a>
      </section>
    </div>
  );
};

export default ContactPage;

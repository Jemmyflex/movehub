import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <section className="bg-green-600 text-white text-center py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          We’d love to hear from you! Whether you're ready to place an order, book a consultation, or just have questions — reach out.
        </p>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-4">Our Contact Details</h2>

            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-green-600 text-2xl mt-1" />
              <div>
                <h4 className="font-semibold">Address</h4>
                <p>Osu, Accra, Ghana</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-green-600 text-2xl mt-1" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p>+233 559 718 196</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaEnvelope className="text-green-600 text-2xl mt-1" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <p>info@movehubenergy.com</p>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://wa.me/233559718196"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-green-600 text-white px-5 py-3 rounded-xl font-semibold hover:bg-green-700"
              >
                <FaWhatsapp className="mr-2" /> Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-xl font-bold mb-6">Send Us a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block font-semibold mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full border border-gray-300 p-3 rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full border border-gray-300 p-3 rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">Message</label>
                <textarea
                  rows="5"
                  placeholder="Type your message here..."
                  className="w-full border border-gray-300 p-3 rounded-lg"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-blue-600 text-white text-center py-10 px-6">
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

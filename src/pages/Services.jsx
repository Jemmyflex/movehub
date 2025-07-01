import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaGasPump,
  FaSolarPanel,
  FaCheckCircle,
} from 'react-icons/fa';
import {
  MdSecurity,
  MdTimer,
} from 'react-icons/md';

const Services = () => {
  return (
    <div className="font-sans text-gray-800 pt-0">
      {/* Hero Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#035F6A] to-[#0ea371] text-white">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6">
            Trusted by 1000+ Customers
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Comprehensive Energy Solutions
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 mb-12">
            From LPG delivery to solar installations, we're your one-stop solution for all energy needs.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <MdTimer className="text-4xl text-white mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Fast Delivery</h3>
              <p className="text-sm opacity-90">Same-day LPG delivery within Accra</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <MdSecurity className="text-4xl text-white mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Safe & Secure</h3>
              <p className="text-sm opacity-90">Certified technicians & quality equipment</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <FaCheckCircle className="text-4xl text-white mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Guaranteed Quality</h3>
              <p className="text-sm opacity-90">100% satisfaction guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Buttons Section */}
      <section className="py-14 px-6 bg-[#f2fdfa] text-center">
        <h2 className="text-3xl font-bold text-[#035F6A] mb-8">Our Services</h2>
        <div className="flex flex-col gap-5 items-center max-w-md mx-auto">
          <Link
            to="/lpg"
            className="w-full bg-white border border-[#b2e5d2] text-[#035F6A] font-semibold py-3 px-6 rounded-full shadow-md hover:bg-[#e2f8f0] hover:text-green-700 transition duration-300"
          >
            <div className="flex items-center justify-center gap-2">
              <FaGasPump />
              LPG DOOR DELIVERY
            </div>
          </Link>
          <Link
            to="/solar"
            className="w-full bg-white border border-[#b2e5d2] text-[#035F6A] font-semibold py-3 px-6 rounded-full shadow-md hover:bg-[#e2f8f0] hover:text-green-700 transition duration-300"
          >
            <div className="flex items-center justify-center gap-2">
              <FaSolarPanel />
              SOLAR SYSTEM INSTALLATION
            </div>
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#0ea371] to-[#035F6A] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Make the Switch?</h2>
          <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust MoveHub for their energy needs.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <Link
              to="/contact"
              className="bg-white text-[#035F6A] px-8 py-4 rounded-xl font-semibold hover:bg-[#e2f8f0] hover:text-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

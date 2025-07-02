import React from 'react';
import { Link } from 'react-router-dom';
import { FaGasPump, FaSolarPanel, FaCheckCircle } from 'react-icons/fa';
import { MdSecurity, MdTimer } from 'react-icons/md';

const Services = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#035F6A] to-[#0ea371] text-white relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl opacity-20 animate-pulse" />

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm font-medium mb-6 shadow-md backdrop-blur-md">
            🚀 Trusted by 1000+ Customers
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
            Comprehensive Energy Solutions
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 mb-14">
            From LPG delivery to solar installations, we’re your one-stop solution for all energy needs.
          </p>

          {/* Service Highlights */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {[{
              Icon: MdTimer,
              title: "Fast Delivery",
              desc: "Same-day LPG delivery within Accra",
            }, {
              Icon: MdSecurity,
              title: "Safe & Secure",
              desc: "Certified technicians & quality equipment",
            }, {
              Icon: FaCheckCircle,
              title: "Guaranteed Quality",
              desc: "100% satisfaction guaranteed",
            }].map(({ Icon, title, desc }, i) => (
              <div
                key={i}
                className="group bg-white/10 p-8 rounded-3xl backdrop-blur-md shadow-md transition transform hover:scale-105 hover:bg-white/20"
              >
                <Icon className="text-4xl mx-auto mb-4 text-white group-hover:scale-125 transition-transform duration-300" />
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-sm opacity-80">{desc}</p>
              </div>
            ))}
          </div>

          {/* Our Services Buttons */}
          <h2 className="text-3xl font-bold mb-8">Our Services</h2>
          <div className="flex flex-col gap-5 items-center max-w-md mx-auto">
            <Link
              to="/lpg"
              className="w-full bg-white text-[#035F6A] font-semibold py-3 px-6 rounded-full shadow-md hover:bg-[#d3f9e9] hover:text-green-800 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <FaGasPump />
              LPG DOOR DELIVERY
            </Link>
            <Link
              to="/solar"
              className="w-full bg-white text-[#035F6A] font-semibold py-3 px-6 rounded-full shadow-md hover:bg-[#d3f9e9] hover:text-green-800 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <FaSolarPanel />
              SOLAR SYSTEM INSTALLATION
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#0ea371] to-[#035F6A] text-white text-center relative">
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-2xl opacity-20 animate-pulse" />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ready to Make the Switch?</h2>
          <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust MoveHub for their energy needs.
          </p>
          <Link
            to="/contact"
            className="bg-white text-[#035F6A] px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-[#d3f9e9] hover:text-green-800 transform hover:scale-110 transition-all duration-300"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;

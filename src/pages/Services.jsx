import React from 'react';
import { Link } from 'react-router-dom';
import { FaGasPump, FaSolarPanel, FaCheckCircle } from 'react-icons/fa';
import { MdSecurity, MdTimer } from 'react-icons/md';

const Services = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
    <section className="py-24 px-6 bg-gradient-to-br from-[#035F6A] to-[#0ea371] text-white relative overflow-hidden">
  {/* Background Glow */}
  <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl opacity-20 animate-pulse" />

  <div className="relative z-10 max-w-7xl mx-auto text-center">
    
    {/* 🔥 Main Heading */}
    <h1 className="text-4xl md:text-5xl font-extrabold mb-10 leading-tight tracking-tight">
      Powering Homes & Businesses with Clean Energy
    </h1>

    {/* 🚀 Vertical Buttons (Stacked) */}
    <div className="flex flex-col gap-6 items-center mb-12 max-w-md mx-auto">
      <Link
        to="/lpg"
        className="w-full bg-white text-[#035F6A] text-lg font-bold px-8 py-4 rounded-full shadow-xl hover:bg-[#d3f9e9] hover:text-green-800 transform hover:scale-105 transition-all duration-300"
      >
        <div className="flex items-center justify-center gap-3">
          <FaGasPump className="text-xl" />
          LPG DOOR DELIVERY
        </div>
      </Link>
      <Link
        to="/solar"
        className="w-full bg-white text-[#035F6A] text-lg font-bold px-8 py-4 rounded-full shadow-xl hover:bg-[#d3f9e9] hover:text-green-800 transform hover:scale-105 transition-all duration-300"
      >
        <div className="flex items-center justify-center gap-3">
          <FaSolarPanel className="text-xl" />
          SOLAR INSTALLATION
        </div>
      </Link>
    </div>

    {/* Supporting Text */}
    <p className="text-base md:text-lg max-w-4xl mx-auto opacity-90 mb-14">
      Choose reliable LPG delivery or switch to affordable solar solutions. We simplify your energy needs with speed, safety, and sustainability.
    </p>

    {/* 🌟 Highlights */}
    <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
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

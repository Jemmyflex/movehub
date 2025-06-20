import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaGasPump,
  FaSolarPanel,
  FaShieldAlt,
  FaClock,
  FaTruck,
  FaTools,
  FaCheckCircle,
} from 'react-icons/fa';
import {
  MdSupportAgent,
  MdSecurity,
  MdTimer,
} from 'react-icons/md';

const Services = () => {
  const processSteps = [
    {
      step: '1',
      title: 'Choose Service',
      description: 'Select between LPG delivery or solar installation',
    },
    {
      step: '2',
      title: 'Book Online',
      description: 'Schedule your delivery or consultation',
    },
    {
      step: '3',
      title: 'Confirmation',
      description: 'Receive instant booking confirmation',
    },
    {
      step: '4',
      title: 'Service Delivery',
      description: 'Experience our professional service',
    },
  ];

  return (
    <div className="font-sans text-gray-800 pt-0">
      {/* Hero Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#035F6A] to-green-600 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6">
            Trusted by 1000+ Customers
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Comprehensive Energy Solutions
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 mb-12">
            From LPG delivery to solar installations, we're your one-stop solution for all energy needs
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

      {/* LPG Section */}
      <section className="py-12 px-4" style={{ background: 'linear-gradient(120deg, #e6f4f1 70%, #d1f2eb 100%)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <FaGasPump className="text-3xl text-green-600" />
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800">LPG Door Delivery</h2>
              <span className="inline-block px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs font-medium mt-1">
                Same Day Delivery
              </span>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 items-center">
            {/* Image without button */}
            <div className="relative rounded-xl overflow-hidden shadow-lg min-h-[220px] flex items-center justify-center bg-gray-100">
              <img 
                src="/src/assets/images/LPG2.jpg" 
                alt="LPG Delivery Service" 
                className="w-full h-full object-cover opacity-90"
              />
            </div>
            {/* Info Card */}
            <div className="bg-gray-50 rounded-xl p-5 shadow-md">
              <p className="text-gray-700 text-sm mb-4">
                Already filled LPG cylinders delivered to your doorstep. Choose from our wide range of cylinder sizes to match your needs.
              </p>
              <div className="mb-4">
                <h3 className="text-base font-semibold mb-2 text-gray-800">Available Cylinder Sizes</h3>
                <div className="flex flex-wrap gap-2">
                  {[
  { size: '3kg', type: 'Fibre & Steel' },
  { size: '6kg', type: 'Fibre & Steel' },
  { size: '12kg', type: 'Fibre & Steel' },
  { size: '50kg', type: 'Steel Only' },
].map((cylinder) => (
  <div key={cylinder.size} className="bg-white border border-green-100 px-3 py-2 rounded-lg flex flex-col items-center min-w-[70px]">
    <span className="font-bold text-green-700 text-sm">{cylinder.size}</span>
    <span className="text-[11px] text-gray-500">{cylinder.type}</span>
  </div>
))}

                </div>
              </div>
              <ul className="space-y-2 text-xs text-gray-600 mb-3">
                <li className="flex items-center gap-2">
                  <FaTruck className="text-green-500" />
                  Doorstep delivery—no travel or queues.
                </li>
                <li className="flex items-center gap-2">
                  <FaClock className="text-green-500" />
                  Time-saving & hassle-free—no heavy lifting.
                </li>
                <li className="flex items-center gap-2">
                  <FaShieldAlt className="text-green-500" />
                  Reliable, fast service by trained personnel.
                </li>
                <li className="flex items-center gap-2">
                  <MdSupportAgent className="text-green-500" />
                  Customer education for safe LPG use.
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500" />
                  Exclusive Newgas distributor in our zones.
                </li>
              </ul>
              <Link
                to="/order-lpg"
                className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 hover:scale-105 transition-all duration-300 text-xs mt-2"
              >
                Order Now
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solar Section */}
      <section className="py-12 px-4" style={{ background: 'linear-gradient(120deg, #d1f2eb 60%, #f7fafc 100%)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <FaSolarPanel className="text-3xl text-blue-600" />
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800">Solar Solutions</h2>
              <span className="inline-block px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs font-medium mt-1">
                Professional Installation
              </span>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 items-center">
            {/* Image without button */}
            <div className="relative rounded-xl overflow-hidden shadow-lg min-h-[220px] flex items-center justify-center bg-gray-100">
              <img 
                src="/src/assets/images/SOLAR6.jpg" 
                alt="Solar Installation Service" 
                className="w-full h-full object-cover opacity-90"
              />
            </div>
            {/* Info Card */}
            <div className="bg-white rounded-xl p-5 shadow-md">
              <p className="text-gray-700 text-sm mb-4">
                Solar panel systems that work for both grid-connected and off-grid locations, reducing dependence on unstable electricity supply and protecting against blackouts.
              </p>
              <div className="mb-4">
                <h3 className="text-base font-semibold mb-2 text-gray-800">Panel Specifications</h3>
                <div className="flex flex-wrap gap-2">
                  <div className="bg-blue-50 border border-blue-100 px-3 py-2 rounded-lg flex flex-col items-center min-w-[110px]">
                    <span className="font-bold text-blue-700 text-sm">Residential</span>
                    <span className="text-[11px] text-gray-500">1.6m x 1m, 250W–450W</span>
                    <span className="text-[11px] text-gray-500">Homes & small offices</span>
                  </div>
                  <div className="bg-blue-50 border border-blue-100 px-3 py-2 rounded-lg flex flex-col items-center min-w-[110px]">
                    <span className="font-bold text-blue-700 text-sm">Commercial</span>
                    <span className="text-[11px] text-gray-500">2.0m x 1.0m, 450W–600W+</span>
                    <span className="text-[11px] text-gray-500">Factories, institutions</span>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <h3 className="text-base font-semibold mb-2 text-gray-800">Technical Features</h3>
                <ul className="space-y-2 text-xs text-gray-600">
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="text-blue-500" />
                    High efficiency (18%+) for limited roof space
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="text-blue-500" />
                    Low temperature coefficient (≤ -0.38%/°C) for heat resistance
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="text-blue-500" />
                    Sturdy, corrosion-resistant frames for coastal and humid zones
                  </li>
                </ul>
              </div>
              <ul className="space-y-2 text-xs text-gray-600 mb-3">
                <li className="flex items-center gap-2">
                  <FaSolarPanel className="text-blue-500" />
                  Premium, durable solar panels
                </li>
                <li className="flex items-center gap-2">
                  <FaTools className="text-blue-500" />
                  Reliable, decentralized power
                </li>
                <li className="flex items-center gap-2">
                  <MdSupportAgent className="text-blue-500" />
                  Smart, tech-enabled monitoring
                </li>
                <li className="flex items-center gap-2">
                  <FaShieldAlt className="text-blue-500" />
                  Skilled, responsive team
                </li>
              </ul>
              <Link
                to="/book-solar"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 hover:scale-105 transition-all duration-300 text-xs mt-2"
              >
                Book Consultation
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-6 bg-[#e6f4f1]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#035F6A] to-green-600 bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, straightforward process to get you started
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {processSteps.map((item, index) => (
              <div key={index} className="relative group">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500">
                  <span className="absolute -top-4 left-8 bg-[#035F6A] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                    {item.step}
                  </span>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#035F6A] to-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Make the Switch?</h2>
          <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust MoveHub for their energy needs.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <Link
              to="/contact"
              className="bg-white text-[#035F6A] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
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
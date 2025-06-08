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
    <div className="font-sans text-gray-800 pt-20">
      {/* Hero Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#035F6A] to-green-600 text-white">
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

      {/* Service Details */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#035F6A] to-green-600 bg-clip-text text-transparent">
              Detailed Service Offerings
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of energy solutions designed to meet your specific needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* LPG Service */}
            <div className="group bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-green-100/50">
              <div className="flex items-center justify-between mb-8">
                <FaGasPump className="text-6xl text-green-600 transform group-hover:scale-110 transition-transform duration-500" />
                <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  Same Day Delivery
                </span>
              </div>
              <h3 className="text-3xl font-bold mb-4 text-gray-800">LPG Door Delivery</h3>
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                Get your LPG cylinders delivered right to your doorstep with our efficient service.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-gray-600">
                  <FaTruck className="text-green-600 text-xl" />
                  <span>Same-day delivery within Accra</span>
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <FaShieldAlt className="text-green-600 text-xl" />
                  <span>Safe handling by certified technicians</span>
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <FaClock className="text-green-600 text-xl" />
                  <span>Flexible delivery scheduling</span>
                </li>
              </ul>
              <Link
                to="/order-lpg"
                className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transform hover:scale-105 transition-all duration-300"
              >
                Order Now
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </Link>
            </div>

            {/* Solar Service */}
            <div className="group bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100/50">
              <div className="flex items-center justify-between mb-8">
                <FaSolarPanel className="text-6xl text-blue-600 transform group-hover:scale-110 transition-transform duration-500" />
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  Professional Installation
                </span>
              </div>
              <h3 className="text-3xl font-bold mb-4 text-gray-800">Solar Solutions</h3>
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                Transform your energy consumption with our comprehensive solar installations.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-gray-600">
                  <FaSolarPanel className="text-blue-600 text-xl" />
                  <span>High-efficiency solar panels</span>
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <FaTools className="text-blue-600 text-xl" />
                  <span>Expert installation & maintenance</span>
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <MdSupportAgent className="text-blue-600 text-xl" />
                  <span>24/7 technical support</span>
                </li>
              </ul>
              <Link
                to="/book-solar"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300"
              >
                Book Consultation
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 bg-gray-50">
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
      <section className="py-24 px-6 bg-gradient-to-br from-[#035F6A] to-green-600 text-white">
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

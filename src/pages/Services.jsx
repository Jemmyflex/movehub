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

      {/* LPG Service Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-6">
              <FaGasPump className="text-7xl text-green-600" />
              <div>
                <h2 className="text-4xl font-bold text-gray-800">LPG Door Delivery</h2>
                <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mt-2">
                  Same Day Delivery
                </span>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                Get your LPG cylinders delivered right to your doorstep with our efficient service.
              </p>
              <ul className="space-y-6 mb-8">
                <li className="flex items-start gap-3 text-gray-600">
                  <FaTruck className="text-green-600 text-xl mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold block mb-1">Doorstep Delivery</span>
                    <p className="text-sm leading-relaxed">
                      Unlike traditional LPG stations, MoveHub brings gas directly to customers, eliminating the need to travel or queue.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <FaClock className="text-green-600 text-xl mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold block mb-1">Time-Saving and Hassle-Free</span>
                    <p className="text-sm leading-relaxed">
                      Customers don't have to carry heavy cylinders or take time off to refill—MoveHub handles it all.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <FaShieldAlt className="text-green-600 text-xl mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold block mb-1">Reliable and Fast Service</span>
                    <p className="text-sm leading-relaxed">
                      Timely deliveries by trained personnel ensure consistent and dependable access to cooking gas.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <MdSupportAgent className="text-green-600 text-xl mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold block mb-1">Customer Education and Support</span>
                    <p className="text-sm leading-relaxed">
                      Our team educates customers on safe LPG usage, helping first-time users transition from charcoal or firewood confidently.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <FaCheckCircle className="text-green-600 text-xl mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold block mb-1">Exclusivity and Scale</span>
                    <p className="text-sm leading-relaxed">
                      MoveHub is the exclusive distributor for Newgas in our operational zones, giving us a dependable supply and a competitive edge in service delivery.
                    </p>
                  </div>
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
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/src/assets/images/LPG2.jpg" 
                alt="LPG Delivery Service" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solar Service Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-6">
              <FaSolarPanel className="text-7xl text-blue-600" />
              <div>
                <h2 className="text-4xl font-bold text-gray-800">Solar Solutions</h2>
                <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mt-2">
                  Professional Installation
                </span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              {/* Add an image of your solar service here */}
              <img 
                src="/src/assets/images/SOLAR6.jpg" 
                alt="Solar Installation Service" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                Transform your energy consumption with our comprehensive solar installations.
              </p>
              <ul className="space-y-6 mb-8">
                <li className="flex items-start gap-3 text-gray-600">
                  <FaSolarPanel className="text-blue-600 text-xl mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold block mb-1">Premium, Durable Solar Panels</span>
                    <p className="text-sm leading-relaxed">
                      We use globally recognized solar panels built to withstand harsh weather and deliver long-term performance—ensuring our customers get maximum value and reliability.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <FaTools className="text-blue-600 text-xl mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold block mb-1">Reliable, Decentralized Power</span>
                    <p className="text-sm leading-relaxed">
                      Our systems work for both grid-connected and off-grid locations, reducing dependence on unstable electricity supply and protecting against blackouts.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <MdSupportAgent className="text-blue-600 text-xl mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold block mb-1">Smart, Tech-Enabled Monitoring</span>
                    <p className="text-sm leading-relaxed">
                      Through our intelligent platform, customers can track power production and usage in real time—putting energy control and cost savings at their fingertips.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <FaShieldAlt className="text-blue-600 text-xl mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold block mb-1">Skilled, Responsive Team</span>
                    <p className="text-sm leading-relaxed">
                      Our trained electricians and technicians offer professional installations and ongoing support, including timely resolution of technical issues or customer concerns.
                    </p>
                  </div>
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

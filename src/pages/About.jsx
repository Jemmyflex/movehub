import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaLeaf,
  FaUsers,
  FaGlobeAfrica,
  FaArrowRight,
  FaGasPump,
  FaSolarPanel,
  FaTruck,
} from 'react-icons/fa';
import { MdElectricBolt, MdTrendingUp } from 'react-icons/md';

const AboutUs = () => {
  return (
    <div className="font-sans text-gray-800 dark:text-gray-200 dark:bg-[#0e1a1c]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#035F6A] to-green-600 text-white py-24 px-6 dark:from-[#023c44] dark:to-[#116147]">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            About MoveHub Limited
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            We're revolutionizing energy access in Ghana by making clean, reliable, and affordable power a reality for every home and business.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Story */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-white dark:from-[#1a2b2f] dark:to-[#162224]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            {
              icon: <FaGlobeAfrica className="text-5xl" />,
              title: 'Our Mission',
              description:
                'To make modern energy accessible, affordable, and sustainable for every Ghanaian household and business.',
              color: 'text-green-600 dark:text-green-400',
            },
            {
              icon: <FaLeaf className="text-5xl" />,
              title: 'Our Vision',
              description:
                "To eliminate energy poverty and lead Ghana's transition to clean, renewable energy.",
              color: 'text-blue-600 dark:text-blue-400',
            },
            {
              icon: <MdElectricBolt className="text-5xl" />,
              title: 'Our Story',
              description:
                "It began with a bold question: 'How can we make energy easier and safer for Ghanaians?' From LPG delivery to smart solar systems, our journey has been about solving real problems with clean innovation.",
              color: 'text-yellow-600 dark:text-yellow-400',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#1e2c2f] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group"
            >
              <div className={`${item.color} mb-6 transform group-hover:scale-110 transition-transform duration-500`}>
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products & Services */}
      <section className="py-24 px-6 bg-white dark:bg-[#111c1d]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent dark:text-white">
            Our Products & Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-16 max-w-3xl mx-auto">
            We provide innovative energy solutions tailored to the needs of homes, businesses, and institutions across Ghana.
          </p>

          <div className="grid md:grid-cols-2 gap-10 justify-center">
            {[
              {
                to: '/lpg',
                title: 'LPG Door Delivery',
                icon: <FaGasPump className="text-5xl text-green-600 dark:text-green-400" />,
                description: 'Get your filled LPG cylinders delivered to your doorstep safely and on time.',
              },
              {
                to: '/solar',
                title: 'Solar System Installation',
                icon: <FaSolarPanel className="text-5xl text-blue-600 dark:text-blue-400" />,
                description: 'Smart solar solutions for homes and businesses—customized, reliable, and sustainable.',
              },
            ].map((service, index) => (
              <Link
                key={index}
                to={service.to}
                className="bg-gray-50 dark:bg-[#1e2c2f] p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-500">{service.icon}</div>
                <h4 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">{service.title}</h4>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#035F6A] to-green-600 text-white dark:from-[#03363f] dark:to-[#116147]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16">Our Impact in Numbers</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <MdTrendingUp className="text-5xl" />,
                number: '1000+',
                label: 'Customers Served',
              },
              {
                icon: <FaLeaf className="text-5xl" />,
                number: '400+ tons',
                label: 'CO₂ Offset',
              },
              {
                icon: <FaUsers className="text-5xl" />,
                number: '20+',
                label: 'Jobs Created',
              },
            ].map((metric, index) => (
              <div key={index} className="group">
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all duration-500">
                  <div className="mb-4 transform group-hover:scale-110 transition-transform duration-500">
                    {metric.icon}
                  </div>
                  <p className="text-4xl font-bold mb-2">{metric.number}</p>
                  <p className="text-lg opacity-90">{metric.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-white dark:from-[#1a2b2f] dark:to-[#162224]">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">Join Our Energy Revolution</h3>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
            Be part of a cleaner, smarter, and more reliable energy future for Ghana.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-[#035F6A] text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg group"
          >
            Contact Us
            <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

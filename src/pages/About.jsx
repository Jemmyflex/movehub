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
            We're on a mission to make clean, safe, and affordable energy accessible to every Ghanaian — at home, at work, and in the most remote corners.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 px-6 bg-white dark:bg-[#111c1d]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-[#035F6A] dark:text-white">Our Purpose</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            MoveHub is a clean energy company revolutionizing how Ghanaians access cooking fuel and electricity. From our <strong>door-to-door LPG delivery</strong> service to our advanced <strong>solar power installations</strong>, we're solving the energy challenges that affect everyday lives—eliminating queues, reducing indoor pollution, and powering communities with sustainable alternatives. Whether it's a busy urban family or an off-grid village, we make modern energy a convenience, not a luxury.
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
                'To provide reliable, affordable, and sustainable energy solutions that improve everyday lives across Ghana.',
              color: 'text-green-600 dark:text-green-400',
            },
            {
              icon: <FaLeaf className="text-5xl" />,
              title: 'Our Vision',
              description:
                "To eliminate energy poverty and accelerate Ghana’s transition to clean, renewable energy sources.",
              color: 'text-blue-600 dark:text-blue-400',
            },
            {
              icon: <MdElectricBolt className="text-5xl" />,
              title: 'Our Story',
              description:
                "It all began with a bold question: How can we make energy more accessible and reliable? From solving the struggle of LPG refills to reducing 'dumsor' with solar systems, MoveHub is building a cleaner, smarter energy future.",
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
            What We Offer
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-16 max-w-3xl mx-auto">
            We deliver smarter, safer, and cleaner energy — right to your home or business.
          </p>

          <div className="grid md:grid-cols-2 gap-10 justify-center">
            {[
              {
                to: '/lpg',
                title: 'LPG Door Delivery',
                icon: <FaGasPump className="text-5xl text-green-600 dark:text-green-400" />,
                description: 'No queues, no lifting — get filled cylinders delivered straight to your home. Available in 3kg to 50kg (fibre or steel).',
              },
              {
                to: '/solar',
                title: 'Solar System Installation',
                icon: <FaSolarPanel className="text-5xl text-blue-600 dark:text-blue-400" />,
                description: 'Eco-friendly solar packages for homes, offices & factories. High-efficiency panels, real-time monitoring, and grid/off-grid compatibility.',
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
          <h3 className="text-4xl font-bold mb-6">Join the Clean Energy Revolution</h3>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
            Whether you're switching from charcoal or escaping 'dumsor', MoveHub is your trusted partner for modern energy in Ghana.
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

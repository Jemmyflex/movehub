import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaSolarPanel,
  FaCheckCircle,
  FaTools,
  FaShieldAlt
} from 'react-icons/fa';
import { MdSupportAgent } from 'react-icons/md';

const solarSteps = [
  { step: 1, title: 'Assessment', description: 'We assess your energy needs and site suitability.' },
  { step: 2, title: 'Design', description: 'We design a solar solution tailored to your needs.' },
  { step: 3, title: 'Installation', description: 'Our professionals install the system safely and efficiently.' },
  { step: 4, title: 'Monitoring', description: 'We provide support and system monitoring post-installation.' },
];

function SolarPage() {
  return (
    <>
      {/* About Solar Energy with Image */}
      <section className="py-12 px-4 bg-white text-gray-800">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Text */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-[#035F6A]">About Solar Energy</h2>
            <p className="text-sm mb-4 leading-relaxed">
              Solar energy is a renewable, clean, and sustainable power source harnessed from the sun’s rays. It is one of the most environmentally friendly solutions available today, helping to reduce greenhouse gas emissions and combat climate change.
            </p>
            <p className="text-sm mb-4 leading-relaxed">
              Using solar panels, sunlight is converted into electricity or used for heating — powering homes, businesses, schools, and even vehicles. Unlike traditional energy sources, solar energy is abundant, silent, and produces zero emissions during operation.
            </p>
            <p className="text-sm leading-relaxed">
              Modern solar systems are highly efficient and scalable, making them ideal for both residential rooftops and large-scale commercial setups. They require minimal maintenance and can significantly lower electricity bills while increasing energy independence.
            </p>
          </div>
          {/* Image */}
          <div className="relative rounded-xl overflow-hidden shadow-lg min-h-[220px] flex items-center justify-center bg-gray-100">
            <img 
              src="/src/assets/images/SOLAR6.jpg" 
              alt="Solar Installation" 
              className="w-full h-full object-cover opacity-90"
            />
          </div>
        </div>
      </section>

      {/* Solar Solutions Info Card - New Section */}
      <section className="py-12 px-4" style={{ background: 'linear-gradient(120deg, #d1f2eb 60%, #e6f4f1 100%)' }}>
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
      </section>

      {/* How Solar Works */}
      <section className="py-10 px-4 bg-[#d1f2eb]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-[#035F6A] text-center">How Solar Installation Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {solarSteps.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-lg">{item.step}</div>
                <h3 className="font-semibold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-xs text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default SolarPage;

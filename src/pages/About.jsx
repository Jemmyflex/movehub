import React from 'react';
import { FaLeaf, FaUsers, FaGlobeAfrica, FaArrowRight } from 'react-icons/fa';
import { MdElectricBolt, MdTrendingUp } from 'react-icons/md';

const AboutUs = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#035F6A] to-green-600 text-white py-24 px-6">
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
      <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            {
              icon: <FaGlobeAfrica className="text-5xl" />,
              title: "Our Mission",
              description: "To make modern energy accessible, affordable, and sustainable for every Ghanaian household and business.",
              color: "text-green-600",
              bgColor: "group-hover:bg-green-50"
            },
            {
              icon: <FaLeaf className="text-5xl" />,
              title: "Our Vision",
              description: "To eliminate energy poverty and lead Ghana's transition to clean, renewable energy.",
              color: "text-blue-600",
              bgColor: "group-hover:bg-blue-50"
            },
            {
              icon: <MdElectricBolt className="text-5xl" />,
              title: "Our Story",
              description: "It began with a bold question: 'How can we make energy easier and safer for Ghanaians?' From LPG delivery to smart solar systems, our journey has been about solving real problems with clean innovation.",
              color: "text-yellow-600",
              bgColor: "group-hover:bg-yellow-50"
            }
          ].map((item, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group`}
            >
              <div className={`${item.color} mb-6 transform group-hover:scale-110 transition-transform duration-500`}>
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Meet Our Leadership
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
            Our team of dedicated professionals working to transform Ghana's energy landscape
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                name: "John Doe",
                role: "CEO & Founder",
                description: "Leading our mission to revolutionize energy access"
              },
              {
                name: "Jane Smith",
                role: "Chief Operations Officer",
                description: "Ensuring seamless service delivery"
              },
              {
                name: "Kwame Mensah",
                role: "Head of Solar Services",
                description: "Spearheading renewable energy solutions"
              }
            ].map((member, index) => (
              <div key={index} className="group">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="h-40 w-40 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-full mb-6 overflow-hidden group-hover:scale-105 transition-transform duration-500"></div>
                  <h4 className="text-xl font-bold mb-2">{member.name}</h4>
                  <p className="text-green-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#035F6A] to-green-600 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16">Our Impact in Numbers</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <MdTrendingUp className="text-5xl" />,
                number: "1000+",
                label: "Customers Served"
              },
              {
                icon: <FaLeaf className="text-5xl" />,
                number: "400+ tons",
                label: "CO₂ Offset"
              },
              {
                icon: <FaUsers className="text-5xl" />,
                number: "20+",
                label: "Jobs Created"
              }
            ].map((metric, index) => (
              <div key={index} className="group">
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all duration-500">
                  <div className="text-white mb-4 transform group-hover:scale-110 transition-transform duration-500">
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
      <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">Join Our Energy Revolution</h3>
          <p className="text-xl text-gray-600 mb-12">
            Be part of a cleaner, smarter, and more reliable energy future for Ghana.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#035F6A] text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg group"
          >
            Contact Us
            <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

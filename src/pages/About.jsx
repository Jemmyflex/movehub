import React from 'react';
import { FaLeaf, FaUsers, FaGlobeAfrica } from 'react-icons/fa';
import { MdElectricBolt, MdTrendingUp } from 'react-icons/md';

const AboutUs = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero */}
      <section className="bg-blue-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About MoveHub Limited</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          We’re revolutionizing energy access in Ghana by making clean, reliable, and affordable power a reality for every home and business.
        </p>
      </section>

      {/* Mission, Vision, Story */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <div className="bg-white p-6 rounded-xl shadow">
            <FaGlobeAfrica className="text-4xl text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p>To make modern energy accessible, affordable, and sustainable for every Ghanaian household and business.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <FaLeaf className="text-4xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
            <p>To eliminate energy poverty and lead Ghana's transition to clean, renewable energy.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <MdElectricBolt className="text-4xl text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Story</h3>
            <p>
              It began with a bold question: “How can we make energy easier and safer for Ghanaians?” From LPG delivery to smart solar systems, our journey has been about solving real problems with clean innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership / Team */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Meet Our Leadership</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Add actual photos and names if available */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="h-32 w-32 mx-auto bg-gray-200 rounded-full mb-4"></div>
            <h4 className="font-semibold text-lg">John Doe</h4>
            <p className="text-sm text-gray-600">CEO & Founder</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="h-32 w-32 mx-auto bg-gray-200 rounded-full mb-4"></div>
            <h4 className="font-semibold text-lg">Jane Smith</h4>
            <p className="text-sm text-gray-600">Chief Operations Officer</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="h-32 w-32 mx-auto bg-gray-200 rounded-full mb-4"></div>
            <h4 className="font-semibold text-lg">Kwame Mensah</h4>
            <p className="text-sm text-gray-600">Head of Solar Services</p>
          </div>
        </div>
      </section>

      {/* Traction & Metrics */}
      <section className="bg-green-600 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-10">Our Progress So Far</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div>
            <MdTrendingUp className="text-4xl mx-auto mb-2" />
            <p className="text-4xl font-bold">1000+</p>
            <p>Customers Served</p>
          </div>
          <div>
            <FaLeaf className="text-4xl mx-auto mb-2" />
            <p className="text-4xl font-bold">400+ tons</p>
            <p>CO₂ Offset</p>
          </div>
          <div>
            <FaUsers className="text-4xl mx-auto mb-2" />
            <p className="text-4xl font-bold">20+</p>
            <p>Jobs Created</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-6 text-center bg-blue-50">
        <h3 className="text-2xl font-bold mb-4">Join Our Energy Revolution</h3>
        <p className="mb-6">Be part of a cleaner, smarter, and more reliable energy future for Ghana.</p>
        <a
          href="/contact"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default AboutUs;

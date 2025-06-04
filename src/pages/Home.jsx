import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSolarPanel, FaGasPump, FaPhoneAlt, FaWhatsapp, FaLeaf, FaShieldAlt } from 'react-icons/fa';
import { MdLocalShipping, MdSupportAgent, MdTimer } from 'react-icons/md';
import { BiLeaf } from 'react-icons/bi';
import SOLAR1 from '../assets/images/SOLAR1.jpg';
import SOLAR5 from '../assets/images/SOLAR5.jpg';
import LPG2 from '../assets/images/LPG2.jpg';
import LPG3 from '../assets/images/LPG3.webp';

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const backgroundImages = [
    LPG2,
    SOLAR1,
    LPG3,
    SOLAR5
  ];

  // Preload images
  useEffect(() => {
    const loadImages = async () => {
      try {
        const loadImage = (src) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve(src);
            img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
          });
        };

        await Promise.all(backgroundImages.map(src => loadImage(src)));
        setImagesLoaded(true);
      } catch (error) {
        console.error('Error loading images:', error);
      }
    };

    loadImages();
  }, [backgroundImages]);

  // Updated image slider timer with longer duration
  useEffect(() => {
    if (!imagesLoaded) return;

    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000); // Changed from 5000 to 8000 ms (8 seconds)

    return () => clearInterval(timer);
  }, [imagesLoaded, backgroundImages.length]);

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section with Changing Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Images */}
        {imagesLoaded ? (
          backgroundImages.map((img, index) => (
            <div
              key={img}
              className={`absolute inset-0 transition-opacity duration-2000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/60"></div>
              <img 
                src={img}
                alt={`Energy Services ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))
        ) : (
          <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600" />
        )}

        {/* Hero Content - Directly on images */}
        <div className="relative z-20 text-center text-white px-6 max-w-5xl">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight drop-shadow-lg">
            Clean Energy,<br/>Delivered Simply
          </h1>
          <p className="text-2xl md:text-3xl mb-12 opacity-90 max-w-3xl mx-auto drop-shadow-md">
            Ghana's premier LPG delivery and solar installation service
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <Link 
              to="/order-lpg"
              className="group bg-white/90 backdrop-blur text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-white transform hover:scale-105 transition-all duration-300 flex items-center gap-3 shadow-lg"
            >
              <FaGasPump className="text-xl" />
              Order LPG Now
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link 
              to="/book-solar"
              className="group bg-blue-600/90 backdrop-blur text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 flex items-center gap-3 shadow-lg"
            >
              <FaSolarPanel className="text-xl" />
              Book Solar Consult
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
<section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-white">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-20">
      <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
        Experience the MoveHub Difference
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Discover why thousands of Ghanaians trust us for their energy needs
      </p>
    </div>

    <div className="grid md:grid-cols-4 gap-8">
      {[
        {
          icon: <MdLocalShipping className="text-5xl" />,
          title: "Swift & Reliable",
          description: "Experience same-day LPG delivery within Accra. Your time matters to us.",
          color: "text-green-600"
        },
        {
          icon: <FaShieldAlt className="text-5xl" />,
          title: "Safety First",
          description: "Certified technicians and premium equipment for your peace of mind.",
          color: "text-blue-600"
        },
        {
          icon: <MdSupportAgent className="text-5xl" />,
          title: "24/7 Support",
          description: "Our dedicated team is always ready to assist you anytime.",
          color: "text-yellow-600"
        },
        {
          icon: <BiLeaf className="text-5xl" />,
          title: "Eco-Friendly",
          description: "Join us in building a sustainable future for Ghana.",
          color: "text-green-600"
        }
      ].map((feature, index) => (
        <div 
          key={index}
          className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:bg-gradient-to-br from-white to-gray-50 group"
        >
          <div className={`${feature.color} mb-6 transform group-hover:scale-110 transition-transform duration-500`}>
            {feature.icon}
          </div>
          <h3 className="text-2xl font-semibold mb-4 group-hover:text-green-600 transition-colors duration-300">
            {feature.title}
          </h3>
          <p className="text-gray-600 leading-relaxed group-hover:text-gray-700">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Services Section */}
<section className="py-24 px-6 bg-gradient-to-br from-white to-gray-50">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
        Our Energy Solutions
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Powering homes and businesses across Ghana with reliable energy solutions
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-12">
      <div className="group bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-green-100/50">
        <div className="flex items-center justify-between mb-8">
          <FaGasPump className="text-6xl text-green-600 transform group-hover:scale-110 transition-transform duration-500" />
          <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
            Same Day Delivery
          </span>
        </div>
        <h3 className="text-3xl font-bold mb-4 text-gray-800">LPG Door Delivery</h3>
        <p className="text-gray-600 leading-relaxed mb-8 text-lg">
          Get your LPG cylinders delivered right to your doorstep. We offer:
        </p>
        <ul className="space-y-3 mb-8 text-gray-600">
          <li className="flex items-center gap-3">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Multiple cylinder sizes (3kg to 50kg)
          </li>
          <li className="flex items-center gap-3">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Same-day delivery within Accra
          </li>
          <li className="flex items-center gap-3">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Safe handling by certified technicians
          </li>
        </ul>
        <Link
          to="/order-lpg"
          className="inline-flex items-center gap-2 text-green-600 font-semibold group-hover:text-green-700 transition-colors duration-300"
        >
          Order Now
          <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
        </Link>
      </div>

      <div className="group bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100/50">
        <div className="flex items-center justify-between mb-8">
          <FaSolarPanel className="text-6xl text-blue-600 transform group-hover:scale-110 transition-transform duration-500" />
          <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            Professional Installation
          </span>
        </div>
        <h3 className="text-3xl font-bold mb-4 text-gray-800">Solar Solutions</h3>
        <p className="text-gray-600 leading-relaxed mb-8 text-lg">
          Transform your energy consumption with our solar installations. Features include:
        </p>
        <ul className="space-y-3 mb-8 text-gray-600">
          <li className="flex items-center gap-3">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            High-efficiency solar panels
          </li>
          <li className="flex items-center gap-3">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            Smart monitoring systems
          </li>
          <li className="flex items-center gap-3">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            Expert installation & maintenance
          </li>
        </ul>
        <Link
          to="/book-solar"
          className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-300"
        >
          Book Consultation
          <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
        </Link>
      </div>
    </div>
  </div>
</section>

      {/* Contact Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#035F6A] to-green-600 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-6">
              Ready to Switch to Clean Energy?
            </h2>
            <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
              Join thousands of satisfied customers who are already part of Ghana's energy revolution. Contact us now and experience the difference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white/20 p-4 rounded-full">
                  <FaPhoneAlt className="text-3xl text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Call Us</h3>
                  <p className="text-white/80">Available 24/7</p>
                </div>
              </div>
              <a
                href="tel:+233559718196"
                className="w-full bg-white text-[#035F6A] px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 group-hover:shadow-lg"
              >
                <FaPhoneAlt className="text-lg" />
                +233 559 718 196
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white/20 p-4 rounded-full">
                  <FaWhatsapp className="text-3xl text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">WhatsApp</h3>
                  <p className="text-white/80">Instant Response</p>
                </div>
              </div>
              <a
                href="https://wa.me/233559718196"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 hover:bg-[#1ea952] transform hover:scale-105 transition-all duration-300 group-hover:shadow-lg"
              >
                <FaWhatsapp className="text-xl" />
                Chat with Us
              </a>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg text-white/90 mb-4">
              Experience the future of energy solutions today
            </p>
            <div className="flex justify-center gap-2 items-center text-white/80">
              <MdTimer className="text-xl" />
              <span>Quick Response Time</span>
              <span className="mx-2">•</span>
              <FaShieldAlt className="text-xl" />
              <span>Secure Service</span>
              <span className="mx-2">•</span>
              <MdSupportAgent className="text-xl" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

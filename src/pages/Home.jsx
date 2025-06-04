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

      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Why Choose MoveHub?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <MdLocalShipping className="text-4xl" />,
                title: "Fast Delivery",
                description: "Same-day LPG delivery within Accra"
              },
              {
                icon: <FaShieldAlt className="text-4xl" />,
                title: "Safety First",
                description: "Licensed technicians & quality equipment"
              },
              {
                icon: <MdSupportAgent className="text-4xl" />,
                title: "24/7 Support",
                description: "Always here when you need us"
              },
              {
                icon: <BiLeaf className="text-4xl" />,
                title: "Eco-Friendly",
                description: "Reducing carbon footprint"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-blue-600 mb-6">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      {/* Services */}
<section className="py-24 px-6">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
    <div className="grid md:grid-cols-2 gap-12">
      <div className="bg-gradient-to-br from-green-50 to-green-100 p-10 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
        <FaGasPump className="text-5xl text-green-600 mb-6" />
        <h3 className="text-2xl font-semibold mb-4">LPG Door Delivery</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Get filled gas cylinders delivered right to your home or business. 
          Available in sizes from 3kg to 50kg.
        </p>
        <button className="text-green-600 font-semibold flex items-center gap-2 group">
          Learn More 
          <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </button>
      </div>
      <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-10 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
        <FaSolarPanel className="text-5xl text-yellow-600 mb-6" />
        <h3 className="text-2xl font-semibold mb-4">Solar Installation</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          High-efficiency solar systems for homes & businesses with smart 
          monitoring and professional installation.
        </p>
        <button className="text-yellow-600 font-semibold flex items-center gap-2 group">
          Learn More 
          <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </button>
      </div>
    </div>
  </div>
</section> {/* ✅ This was missing */}

      {/* Contact Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-green-500 to-green-600 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold mb-6">Ready to switch to clean energy?</h3>
          <p className="text-xl mb-10 opacity-90">Join Ghana's energy revolution today.</p>
          <div className="flex justify-center gap-6 flex-wrap">
            <a
              href="tel:+233559718196"
              className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold flex items-center gap-3 hover:bg-gray-100 transform hover:scale-105 transition duration-300"
            >
              <FaPhoneAlt /> Call Us Now
            </a>
            <a
              href="https://wa.me/233559718196"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-8 py-4 rounded-full font-semibold flex items-center gap-3 hover:bg-[#1ea952] transform hover:scale-105 transition duration-300"
            >
              <FaWhatsapp className="text-xl" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

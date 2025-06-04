import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SOLAR2 from '../assets/images/SOLAR2.webp'; // Update import

const SolarConsultForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [systemSize, setSystemSize] = useState('');
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = SOLAR2; // Update image source
    img.onload = () => setImageLoaded(true);
    img.onerror = (e) => {
      console.error('Error loading background image:', e);
      setImageLoaded(true); // Show fallback gradient
    };
  }, []);

  const handleSubmit = () => {
    if (!name || !phone || !location || !systemSize) {
      toast.error('Please complete all fields.');
      return;
    }

    toast.success('Redirecting to WhatsApp...');
    const message = encodeURIComponent(
      `Hello MoveHub, I’d like to book a solar consultation.\n\nName: ${name}\nPhone: ${phone}\nLocation: ${location}\nEstimated System Size: ${systemSize}`
    );

    setTimeout(() => {
      window.open(`https://wa.me/233559718196?text=${message}`, '_blank');
    }, 1000);
  };

  return (
    <div
      className="min-h-screen py-8 px-4 bg-cover bg-center bg-fixed bg-no-repeat"
      style={{
        backgroundImage:
          imageLoaded &&
          `linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${SOLAR2})`, // Update image reference
      }}
    >
      <ToastContainer position="top-center" />
      <div className="max-w-md mx-auto bg-black/20 backdrop-blur-sm rounded-lg shadow-lg">
        <div className="p-5">
          <h1 className="text-2xl font-bold mb-4 text-center text-white drop-shadow-lg">
            Book Solar Consultation
          </h1>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium mb-1 text-white drop-shadow">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full border border-gray-300/50 p-2.5 rounded-md text-sm bg-white/40 text-black placeholder-gray-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-white">
                Phone Number
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+233..."
                className="w-full border border-gray-300/50 p-2.5 rounded-md text-sm bg-white/40 text-black placeholder-gray-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-white">
                Your Location
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. Tema, Kumasi"
                className="w-full border border-gray-300/50 p-2.5 rounded-md text-sm bg-white/40 text-black placeholder-gray-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-white">
                Estimated System Size
              </label>
              <select
                value={systemSize}
                onChange={(e) => setSystemSize(e.target.value)}
                className="w-full border border-gray-300/50 p-2.5 rounded-md text-sm bg-white/40 text-black placeholder-gray-300"
              >
                <option value="">Select size</option>
                <option>Small (Home use)</option>
                <option>Medium (Business/Office)</option>
                <option>Large (Factory or Institution)</option>
              </select>
            </div>

            <div className="text-center pt-2">
              <button
                type="button"
                onClick={handleSubmit}
                className="bg-yellow-600/90 hover:bg-yellow-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200"
              >
                Submit via WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SolarConsultForm;

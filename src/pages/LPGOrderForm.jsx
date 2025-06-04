import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LPGONLY from '../assets/images/LPGONLY.jpg';

const LPGOrderForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [size, setSize] = useState('');
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = LPGONLY;
    img.onload = () => setImageLoaded(true);
    img.onerror = (e) => {
      console.error('Error loading background image:', e);
      setImageLoaded(true); // Show fallback gradient
    };
  }, []);

  const handleOrder = () => {
    if (!name || !phone || !address || !size) {
      toast.error('Please fill in all fields correctly.');
      return;
    }

    toast.success('Redirecting to WhatsApp...');
    const message = encodeURIComponent(
      `Hello MoveHub, I want to order an LPG cylinder.\n\nName: ${name}\nPhone: ${phone}\nAddress: ${address}\nCylinder Size: ${size}`
    );

    setTimeout(() => {
      window.open(`https://wa.me/233559718196?text=${message}`, '_blank');
    }, 1000); // allow toast to show before redirect
  };

  return (
    <div
      className="min-h-screen py-8 px-4 bg-cover bg-center bg-fixed bg-no-repeat"
      style={{
        backgroundImage: imageLoaded
          ? `linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${LPGONLY})`
          : 'linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))'
      }}
    >
      <ToastContainer position="top-center" />
      <div className="max-w-md mx-auto bg-black/20 backdrop-blur-sm rounded-lg shadow-lg">
        <div className="p-5">
          <h1 className="text-2xl font-bold mb-4 text-center text-white drop-shadow-lg">
            Order LPG Cylinder
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
                className="w-full border border-gray-300/50 p-2.5 rounded-md text-sm bg-white/40 text-white placeholder-gray-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-white drop-shadow">
                Phone Number
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+233..."
                className="w-full border border-gray-300/50 p-2.5 rounded-md text-sm bg-white/40 text-white placeholder-gray-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-white drop-shadow">
                Delivery Address
              </label>
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="e.g., Osu, Accra - House No. 22"
                rows="3"
                className="w-full border border-gray-300/50 p-2.5 rounded-md text-sm bg-white/40 text-white placeholder-gray-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-white drop-shadow">
                Cylinder Size
              </label>
              <select
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="w-full border border-gray-300/50 p-2.5 rounded-md text-sm bg-white/40 text-white placeholder-gray-300"
              >
                <option value="">Select size</option>
                <option>3kg</option>
                <option>6kg</option>
                <option>12kg</option>
                <option>14kg</option>
                <option>50kg</option>
              </select>
            </div>

            <div className="text-center pt-2">
              <button
                type="button"
                onClick={handleOrder}
                className="bg-green-600/90 hover:bg-green-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200"
              >
                Submit Order via WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LPGOrderForm;

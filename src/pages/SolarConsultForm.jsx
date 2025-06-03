import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SolarConsultForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [systemSize, setSystemSize] = useState('');

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
    <div className="min-h-screen bg-gray-100 py-16 px-6">
      <ToastContainer position="top-center" />
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-yellow-600">Book Solar Consultation</h1>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block font-semibold mb-1">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-full border border-gray-300 p-3 rounded-lg"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Phone Number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+233..."
              className="w-full border border-gray-300 p-3 rounded-lg"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Your Location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g. Tema, Kumasi"
              className="w-full border border-gray-300 p-3 rounded-lg"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Estimated System Size</label>
            <select
              value={systemSize}
              onChange={(e) => setSystemSize(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-lg"
            >
              <option value="">Select size</option>
              <option>Small (Home use)</option>
              <option>Medium (Business/Office)</option>
              <option>Large (Factory or Institution)</option>
            </select>
          </div>

          <div className="text-center">
            <button
              type="button"
              onClick={handleSubmit}
              className="bg-yellow-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-yellow-700"
            >
              Submit via WhatsApp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SolarConsultForm;

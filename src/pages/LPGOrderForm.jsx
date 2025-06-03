import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LPGOrderForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [size, setSize] = useState('');

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
    <div className="min-h-screen bg-gray-100 py-16 px-6">
      <ToastContainer position="top-center" />
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-green-600">Order LPG Cylinder</h1>

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
            <label className="block font-semibold mb-1">Delivery Address</label>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="e.g., Osu, Accra - House No. 22"
              rows="3"
              className="w-full border border-gray-300 p-3 rounded-lg"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Cylinder Size</label>
            <select
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-lg"
            >
              <option value="">Select size</option>
              <option>3kg</option>
              <option>6kg</option>
              <option>12kg</option>
              <option>14kg</option>
              <option>50kg</option>
            </select>
          </div>

          <div className="text-center">
            <button
              type="button"
              onClick={handleOrder}
              className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700"
            >
              Submit Order via WhatsApp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LPGOrderForm;

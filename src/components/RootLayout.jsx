import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
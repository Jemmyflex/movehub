import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './components/RootLayout';
import About from './pages/About';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import LPGOrderForm from './pages/LPGOrderForm';
import SolarConsultForm from './pages/SolarConsultForm';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'about',
          element: <About />
        },
        {
          path: 'services',
          element: <Services />
        },
        {
          path: 'contact',
          element: <Contact />
        },
        {path: 'order-lpg',
          element: <LPGOrderForm />
        },
        {
          path: 'book-solar',
          element: <SolarConsultForm />
        },
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
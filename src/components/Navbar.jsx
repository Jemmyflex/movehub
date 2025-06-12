import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/images/Logo2.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Services', path: '/services' },
    { title: 'Contact', path: '/contact' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="w-full bg-[#035F6A] shadow-lg z-[1000] fixed top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo and Brand */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group"
          >
            <img 
              src={Logo} 
              alt="MoveHub Logo" 
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
            />
            <span className="text-3xl font-bold transition-colors duration-300">
              <span className="text-green-400">Move</span>
              <span className="text-white">Hub</span>
              <span className="text-white"> Limited</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.path}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300
                  text-white/90 hover:text-white
                  ${location.pathname === link.path 
                    ? 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white' 
                    : 'hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-white/50'
                  }`}
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg transition-colors duration-300 text-white hover:bg-white/10"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Now positioned absolutely */}
        <div 
          className={`md:hidden absolute left-0 right-0 transition-all duration-300 shadow-lg
            ${isOpen 
              ? 'opacity-100 translate-y-0 visible' 
              : 'opacity-0 -translate-y-4 invisible'
            }`}
        >
          <div className="px-2 pt-1 pb-2 space-y-0.5 bg-[#035F6A] border-t border-white/10">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.path}
                className={`block px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300
                  ${location.pathname === link.path
                    ? 'bg-white/10 text-white'
                    : 'text-white/90 hover:bg-white/5 hover:text-white'
                  }`}
                onClick={closeMenu}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
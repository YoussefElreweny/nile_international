/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Our Companies', path: '/companies' },
  { name: 'Industries', path: '/industries' },
  { name: 'Products', path: '/products' },
  { name: 'Quality', path: '/quality' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white border-b border-slate-100 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <img src="/src/assets/images/Nile.png" alt="Nile International Logo" className="h-10 w-auto transition-transform group-hover:scale-105" />
          <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-blue-900' : 'text-white'}`}>
            NILE INTERNATIONAL
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-green-500 ${
                location.pathname === link.path
                  ? 'text-blue-900'
                  : isScrolled ? 'text-slate-500' : 'text-slate-200'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-blue-900 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-800 transition-colors shadow-sm"
          >
            Business Inquiry
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className={isScrolled ? 'text-blue-900' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-blue-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium ${
                    location.pathname === link.path ? 'text-green-500' : 'text-gray-700'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-blue-900 text-white px-6 py-3 rounded-md text-center font-semibold hover:bg-blue-800 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

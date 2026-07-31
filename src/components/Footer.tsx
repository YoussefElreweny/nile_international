/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img src="/images/Nile.png" alt="Nile International Logo" className="h-8 w-auto brightness-0 invert" />
              <span className="text-white text-xl font-bold tracking-tight">NILE INTERNATIONAL</span>
            </div>
            <p className="text-sm leading-relaxed">
              Representing excellence in pharmaceutical manufacturing and healthcare industries through our subsidiary companies A2Z Pharmaceutical and Healthcare Pharmaceutical Industries.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="hover:text-green-500 transition-colors">About Us</Link></li>
              <li><Link to="/industries" className="hover:text-green-500 transition-colors">Industries We Serve</Link></li>
              <li><Link to="/quality" className="hover:text-green-500 transition-colors">Quality & Certifications</Link></li>
              <li><Link to="/news" className="hover:text-green-500 transition-colors">Latest News</Link></li>
              <li><Link to="/careers" className="hover:text-green-500 transition-colors">Careers</Link></li>
              <li><Link to="/admin" className="hover:text-green-500 transition-colors">Admin Dashboard</Link></li>
            </ul>
          </div>

          {/* Our Companies */}
          <div>
            <h3 className="text-white font-bold mb-6">Our Companies</h3>
            <ul className="space-y-4">
              <li><Link to="/companies" className="hover:text-green-500 transition-colors">A2Z Pharmaceutical Industries</Link></li>
              <li><Link to="/companies" className="hover:text-green-500 transition-colors">Healthcare Pharmaceutical Industries</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-green-500 mt-1" />
                <span className="text-sm">Industrial Zone, Obour City, Al Qalyubia, Egypt</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-green-500" />
                <span className="text-sm">+20 100 122 6324</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-green-500" />
                <span className="text-sm">nileapi@yahoo.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:row justify-between items-center text-xs space-y-4 md:space-y-0">
          <p>© {currentYear} Nile International for Commercial Agencies. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

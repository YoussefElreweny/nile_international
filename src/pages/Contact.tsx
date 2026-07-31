/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import Section, { SectionTitle, FadeIn } from '../components/Section';
import { Mail, Phone, MapPin, Send, Globe, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-24">
      {/* Page Header */}
      <section className="bg-blue-900 py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-extrabold text-white mb-6"
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 max-w-2xl leading-relaxed"
          >
            We are always open to new partnerships and inquiries. Reach out to us through the form below or our contact details.
          </motion.p>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] border-4 border-white rounded-full opacity-20" />
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <FadeIn>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-blue-900" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Our Location</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">Industrial Zone, Obour City, Al Qalyubia, Egypt</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="text-blue-900" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Phone Number</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">+20 100 122 6324</p>
                    <p className="text-gray-600 text-sm leading-relaxed">+20 48 2086 047</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="text-blue-900" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Email Address</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">info@nile-international.com</p>
                    <p className="text-gray-600 text-sm leading-relaxed">sales@nile-international.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="text-blue-900" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Working Hours</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">Sunday - Thursday</p>
                    <p className="text-gray-600 text-sm leading-relaxed">9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <FadeIn delay={0.2}>
              <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
                <h3 className="text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h3>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                    <input
                      type="text"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                    <input
                      type="email"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Phone Number</label>
                    <input
                      type="text"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all"
                      placeholder="+20 123 456 7890"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Inquiry Department</label>
                    <select className="w-full bg-white border border-gray-200 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all appearance-none">
                      <option>General Inquiry</option>
                      <option>Sales & Distribution</option>
                      <option>Partnership Opportunities</option>
                      <option>Careers</option>
                    </select>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Your Message</label>
                    <textarea
                      rows={5}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>
                  <div className="md:col-span-2">
                    <button
                      type="button"
                      className="w-full bg-blue-900 text-white font-bold py-5 rounded-xl hover:bg-blue-800 transition-all shadow-xl shadow-blue-900/20 flex items-center justify-center space-x-2"
                    >
                      <span>Send Inquiry</span>
                      <Send size={20} />
                    </button>
                  </div>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Map Section */}
      <section className="h-[500px] w-full bg-gray-200 relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18033.786036105037!2d31.00435056807289!3d30.55710469376771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7d68c6f8f4f7f%3A0x2c100fbff54edf7d!2sShebin%20El%20Koum%20Elementary%20Court!5e1!3m2!1sen!2seg!4v1785519185658!5m2!1sen!2seg" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Company Location"
        />
      </section>
    </div>
  );
}

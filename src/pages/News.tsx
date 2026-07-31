/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import Section, { SectionTitle, FadeIn } from '../components/Section';
import { Calendar, ArrowRight, Bell } from 'lucide-react';

const articles = [
  { title: 'Nile International Expands Manufacturing Capacity', date: 'Oct 15, 2025', category: 'Company News', desc: 'Our subsidiary A2Z Pharmaceutical Industries has inaugurated a new production line for sterile capsules...' },
  { title: 'New Strategic Partnership in the Gulf Region', date: 'Sep 22, 2025', category: 'Partnerships', desc: 'We are proud to announce a new distribution agreement that expands our presence in Saudi Arabia and the UAE.' },
  { title: 'Innovation in Veterinary Vaccine Development', date: 'Aug 10, 2025', category: 'R&D', desc: 'Our research team has achieved a breakthrough in avian vaccine formulations, improving efficacy by 30%.' },
];

export default function News() {
  return (
    <div className="pt-24">
      {/* Page Header */}
      <section className="bg-blue-900 py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold text-white mb-6"
          >
            Company News
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
          >
            Stay updated with the latest announcements, partnerships, and breakthroughs from Nile International.
          </motion.p>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {articles.map((article, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col h-full">
                <div className="h-48 bg-gray-100 flex items-center justify-center">
                  <Bell className="text-gray-300" size={48} />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-xs font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full">{article.category}</span>
                    <span className="text-xs text-gray-400 flex items-center">
                      <Calendar size={12} className="mr-1" /> {article.date}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-900 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-8">
                    {article.desc}
                  </p>
                  <button className="mt-auto flex items-center text-blue-900 font-bold hover:text-green-600 transition-colors">
                    Read Article <ArrowRight size={18} className="ml-2" />
                  </button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Subscription CTA */}
      <Section bg="gray">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white p-12 md:p-20 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 mb-10 max-w-xl mx-auto">
              Get the latest industry insights and corporate announcements delivered directly to your inbox.
            </p>
            <form className="flex flex-col sm:row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-900/10 focus:border-blue-900"
              />
              <button className="bg-blue-900 text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-800 transition-all shadow-lg shadow-blue-900/20">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
}

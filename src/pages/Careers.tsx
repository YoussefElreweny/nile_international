/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import Section, { SectionTitle, FadeIn } from '../components/Section';
import { Briefcase, Users, Star, GraduationCap } from 'lucide-react';

export default function Careers() {
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
            Careers
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
          >
            Join a team of professionals dedicated to excellence, innovation, and making a difference in the healthcare industry.
          </motion.p>
        </div>
      </section>

      {/* Why Join Us */}
      <Section>
        <SectionTitle
          title="Why Work With Us?"
          subtitle="At Nile International, we believe our people are our greatest asset. We provide a dynamic and inclusive work environment that fosters growth and innovation."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Users, title: 'Collaborative Culture', desc: 'Work with a diverse team of experts who support each other.' },
            { icon: GraduationCap, title: 'Continuous Learning', desc: 'Invest in your future with our professional development programs.' },
            { icon: Star, title: 'Innovation Mindset', desc: 'Be part of a forward-thinking group that embraces new ideas.' },
            { icon: Briefcase, title: 'Career Growth', desc: 'Clear paths for advancement within our subsidiary companies.' },
          ].map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-50 transition-colors">
                  <item.icon className="text-blue-900" size={32} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Openings Section */}
      <Section bg="gray">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            title="Current Openings"
            subtitle="We are always looking for talented individuals to join our ranks. Explore our current opportunities below."
            centered
          />
          <div className="space-y-4">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:row justify-between items-center text-center md:text-left gap-6">
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-1">Production Manager</h4>
                <p className="text-gray-500 text-sm">Industrial Zone, Egypt | Full-Time</p>
              </div>
              <button className="bg-blue-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-800 transition-all">
                Apply Now
              </button>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:row justify-between items-center text-center md:text-left gap-6 opacity-60">
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-1">Quality Control Specialist</h4>
                <p className="text-gray-500 text-sm">Industrial Zone, Egypt | Full-Time</p>
              </div>
              <span className="text-sm font-bold text-gray-400">Application Closed</span>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-500 italic">
              Don't see a position that fits? Send your CV to <span className="text-blue-900 font-bold">careers@nile-international.com</span> for future consideration.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}

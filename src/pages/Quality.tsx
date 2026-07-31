/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import Section, { SectionTitle, FadeIn } from '../components/Section';
import { Award, ShieldCheck, FileCheck, CheckCircle2, FlaskConical, Microscope } from 'lucide-react';

export default function Quality() {
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
            Quality & Certifications
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
          >
            Trust is earned through transparency and unwavering commitment to the highest international standards of manufacturing.
          </motion.p>
        </div>
      </section>

      {/* Standards Section */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <SectionTitle
              title="Manufacturing Standards"
              subtitle="Our facilities are built and operated in strict compliance with Good Manufacturing Practices (GMP) and international ISO standards."
            />
            <div className="space-y-6">
              {[
                'Strict adherence to cGMP (current Good Manufacturing Practices)',
                'ISO 9001:2015 Quality Management Systems',
                'ISO 14001:2015 Environmental Management Systems',
                'OHSAS 18001 Occupational Health and Safety',
                'Regular internal and external quality audits',
                'State-of-the-art analytical and microbiological laboratories',
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="text-green-600" size={16} />
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="bg-gray-50 p-12 rounded-3xl border border-gray-100">
              <div className="grid grid-cols-2 gap-8">
                {[
                  { icon: FlaskConical, label: 'Modern Labs' },
                  { icon: Microscope, label: 'Advanced R&D' },
                  { icon: Award, label: 'ISO Certified' },
                  { icon: ShieldCheck, label: 'GMP Compliant' },
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                      <item.icon className="text-blue-900" size={40} />
                    </div>
                    <span className="font-bold text-gray-900">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Certifications Grid */}
      <Section bg="gray">
        <SectionTitle
          title="Our Certifications"
          subtitle="A testament to our dedication to excellence across all operational facets."
          centered
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'ISO 9001:2015', desc: 'Global benchmark for quality management systems ensuring consistent product quality.' },
            { title: 'GMP Certificate', desc: 'Compliance with Good Manufacturing Practices as mandated by international health authorities.' },
            { title: 'ISO 14001', desc: 'Standard for environmental management systems across our production facilities.' },
            { title: 'FDA Compliance', desc: 'Adhering to strict guidelines for products intended for international markets.' },
            { title: 'CE Marking', desc: 'Compliance with health, safety, and environmental protection standards for the European Economic Area.' },
            { title: 'WHO Standards', desc: 'Following World Health Organization guidelines for pharmaceutical manufacturing.' },
          ].map((cert, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <FileCheck className="text-green-600 mb-4" size={32} />
                <h4 className="text-xl font-bold text-gray-900 mb-3">{cert.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{cert.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Assurance Section */}
      <Section>
        <div className="bg-blue-900 rounded-3xl p-12 md:p-20 flex flex-col md:row items-center justify-between space-y-10 md:space-y-0">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Commitment to Quality</h2>
            <p className="text-blue-100 text-lg leading-relaxed">
              At Nile International, quality is not just a department; it's a culture. We empower our employees with the tools and training necessary to maintain excellence at every stage of the lifecycle.
            </p>
          </div>
          <div className="flex-shrink-0">
            <div className="w-40 h-40 border-4 border-green-500 rounded-full flex flex-col items-center justify-center text-white text-center">
              <span className="text-4xl font-black">100%</span>
              <span className="text-xs uppercase tracking-widest font-bold">Compliance</span>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

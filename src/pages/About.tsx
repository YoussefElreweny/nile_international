/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import Section, { SectionTitle, FadeIn } from '../components/Section';
import { Target, Eye, Heart, History, Globe, ShieldCheck } from 'lucide-react';

export default function About() {
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
            About Nile International
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 max-w-2xl leading-relaxed"
          >
            A legacy of trust, innovation, and international standards in the pharmaceutical and commercial sectors.
          </motion.p>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] border-4 border-white rounded-full opacity-20" />
        </div>
      </section>

      {/* Company Story */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <FadeIn>
            <SectionTitle
              title="Our Company Story"
              subtitle="Nile International for Commercial Agencies was established with a vision to bridge the gap between global innovations and local needs."
            />
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Founded over two decades ago, our journey began with a simple yet powerful goal: to represent world-class pharmaceutical and commercial agencies in Egypt. Through dedication and a commitment to quality, we have grown into a diversified group with specialized subsidiary companies.
              </p>
              <p>
                Today, we are more than just a commercial agency. We are manufacturers, distributors, and partners in progress, ensuring that high-quality healthcare, veterinary solutions, and industrial products are accessible across the region.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/src/assets/images/pharma_manufacturing_1785514980266.jpg"
                alt="Story 1"
                className="rounded-xl h-64 w-full object-cover shadow-lg"
              />
              <img
                src="/src/assets/images/healthcare_products_1785514990044.jpg"
                alt="Story 2"
                className="rounded-xl h-64 w-full object-cover shadow-lg mt-12"
              />
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Chairman Message */}
      <Section bg="gray">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-12 md:p-20 rounded-3xl shadow-xl relative">
            <div className="absolute top-0 left-10 -translate-y-1/2 w-20 h-20 bg-green-500 rounded-2xl flex items-center justify-center text-white text-5xl font-serif">
              "
            </div>
            <FadeIn>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 italic leading-relaxed">
                "Our success is built on the foundation of trust and a relentless pursuit of excellence. At Nile International, we don't just build businesses; we build lasting partnerships that contribute to the health and well-being of society."
              </h3>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-900 font-bold text-xl">CM</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Chairman Name</h4>
                  <p className="text-gray-500 text-sm">Chairman of Nile International Group</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <FadeIn>
            <div className="bg-gray-50 p-12 rounded-3xl h-full border border-gray-100 group hover:bg-blue-900 transition-colors duration-500">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-white/10 transition-colors">
                <Target className="text-blue-900 group-hover:text-green-400 transition-colors" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-white transition-colors">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-blue-100 transition-colors">
                To provide high-quality healthcare and industrial products through strategic partnerships, modern manufacturing practices, and a commitment to international standards that improve lives and support business growth.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="bg-gray-50 p-12 rounded-3xl h-full border border-gray-100 group hover:bg-blue-900 transition-colors duration-500">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-white/10 transition-colors">
                <Eye className="text-blue-900 group-hover:text-green-400 transition-colors" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-white transition-colors">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-blue-100 transition-colors">
                To be the most trusted international partner for commercial and pharmaceutical agencies, recognized for our innovation, quality excellence, and ethical business practices across the region.
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Core Values */}
      <Section bg="gray">
        <SectionTitle
          title="Our Core Values"
          subtitle="The principles that guide every decision we make and every action we take."
          centered
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: ShieldCheck, title: 'Integrity', desc: 'Acting with honesty and transparency in all our business relationships.' },
            { icon: Heart, title: 'Quality', desc: 'Unwavering commitment to providing products that meet the highest standards.' },
            { icon: Globe, title: 'Innovation', desc: 'Embracing new technologies and practices to stay ahead of industry trends.' },
            { icon: History, title: 'Reliability', desc: 'Being a dependable partner that our customers and stakeholders can always count on.' },
          ].map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="text-green-600" size={28} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>
    </div>
  );
}

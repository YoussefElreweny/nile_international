/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import Section, { SectionTitle, FadeIn } from '../components/Section';
import IndustryCard from '../components/IndustryCard';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Industries() {
  const industries = [
    { title: 'Human Pharmaceuticals', icon: 'Stethoscope', desc: 'Specialized in the development and manufacturing of essential human medicines across multiple therapeutic categories including cardiovascular, respiratory, and anti-infectives.' },
    { title: 'Veterinary Medicine', icon: 'Dog', desc: 'Providing comprehensive healthcare solutions for animal welfare, including vaccines, antibiotics, and nutritional supplements for livestock and pets.' },
    { title: 'Healthcare Industries', icon: 'Activity', desc: 'Manufacturing and supplying professional medical devices, surgical supplies, and consumer healthcare products to hospitals and clinics.' },
    { title: 'Commercial Agencies', icon: 'Briefcase', desc: 'Representing global pharmaceutical and industrial brands in the regional market, managing distribution, marketing, and regulatory compliance.' },
    { title: 'Food Additives', icon: 'Apple', desc: 'Supplying high-purity additives and ingredients for the food industry that enhance flavor, nutritional value, and shelf life.' },
    { title: 'Feed Additives', icon: 'Zap', desc: 'Scientifically formulated supplements for animal feed that improve growth rates, health, and productivity in livestock and poultry.' },
    { title: 'Pesticides', icon: 'Sprout', desc: 'Effective agricultural solutions for pest management and crop protection, ensuring sustainable farming practices and high yields.' },
    { title: 'Surgical Solutions', icon: 'Shield', desc: 'Precision-engineered surgical instruments and operating room essentials designed for safety and efficiency.' },
  ];

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
            Industries We Serve
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
          >
            Our diversified portfolio spans critical sectors of health and industry, driven by a commitment to excellence and international standards.
          </motion.p>
        </div>
      </section>

      {/* Main Grid */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {industries.map((industry, idx) => (
            <div key={idx} className="flex flex-col h-full">
              <IndustryCard
                title={industry.title}
                description={industry.desc}
                iconName={industry.icon as any}
                delay={idx * 0.1}
              />
              <div className="mt-4 ml-8">
                <Link to="/products" className="text-xs font-bold text-blue-900 hover:text-green-600 flex items-center transition-colors">
                  VIEW PRODUCTS <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Industry Approach */}
      <Section bg="gray">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <FadeIn>
            <div className="relative">
              <img
                src="/images/pharma_manufacturing_1785514980266.jpg"
                alt="Industry Approach"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-green-500 rounded-full flex items-center justify-center text-white shadow-xl">
                <ShieldCheck size={48} />
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <SectionTitle
              title="Our Integrated Approach"
              subtitle="We combine manufacturing excellence with strategic commercial insights to lead in every sector we operate."
            />
            <div className="space-y-8">
              {[
                { title: 'Quality Assurance', desc: 'Every industry we serve is backed by rigorous quality control protocols and international certifications.' },
                { title: 'Regulatory Compliance', desc: 'We navigate complex regulatory landscapes to ensure all products meet local and global requirements.' },
                { title: 'Market Intelligence', desc: 'Deep understanding of local market dynamics allows us to introduce the right products at the right time.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold">{i + 1}</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </Section>
    </div>
  );
}

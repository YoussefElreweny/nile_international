/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Shield, Users, Lightbulb, Truck, Award, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section, { SectionTitle, FadeIn } from '../components/Section';
import CompanyCard from '../components/CompanyCard';
import IndustryCard from '../components/IndustryCard';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[700px] md:h-[600px] bg-slate-900 flex items-center px-6 md:px-12 overflow-hidden shrink-0 pt-32 md:pt-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-900/40 to-transparent z-10"></div>
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="grid grid-cols-6 h-full w-full">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="border-r border-white/10 h-full"></div>
              ))}
            </div>
            <div className="absolute inset-0 grid grid-rows-6 h-full w-full">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="border-b border-white/10 w-full"></div>
              ))}
            </div>
          </div>
          <img
            src="/src/assets/images/corporate_hero_bg_1785514967952.jpg"
            alt="Corporate background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        <div className="container mx-auto relative z-20">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-green-400 font-bold text-xs tracking-[0.3em] uppercase mb-4 block"
            >
              Pioneering Global Standards
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight"
            >
              Connecting Industries. <br />
              <span className="text-blue-200">Building Global Partnerships.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-slate-300 text-lg leading-relaxed mb-10 max-w-xl"
            >
              Nile International for Commercial Agencies is a diversified business group specializing in pharmaceutical manufacturing, healthcare industries, veterinary products, and agricultural solutions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/companies"
                className="bg-green-600 text-white px-8 py-4 rounded text-xs font-bold uppercase tracking-widest hover:bg-green-700 transition-all shadow-xl shadow-green-900/20"
              >
                Our Vision
              </Link>
              <Link
                to="/about"
                className="border border-white/30 text-white px-8 py-4 rounded text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all"
              >
                Corporate Profile
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <Section id="who-we-are" className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="space-y-6">
              <span className="text-blue-900 font-bold tracking-[0.2em] uppercase text-[10px]">Headquarters: Cairo, Egypt</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 leading-[1.2] tracking-tight">
                Driving Excellence Across <br /> International Borders
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed max-w-lg">
                As a parent group, we foster excellence through specialized subsidiary companies, delivering international standards of healthcare and industrial solutions to the Middle East and beyond.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                {[
                  { title: 'Global Ethics', desc: 'Operating with transparency and absolute integrity.' },
                  { title: 'Reliability', desc: 'Dependable partnerships built over two decades.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-1 h-8 bg-green-500 shrink-0"></div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wider">{item.title}</h4>
                      <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="relative group">
              <img
                src="/src/assets/images/pharma_manufacturing_1785514980266.jpg"
                alt="About us"
                className="rounded-xl shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -bottom-8 -right-8 bg-blue-900 p-8 rounded shadow-2xl text-white">
                <div className="text-3xl font-black mb-1 tracking-tighter">20+</div>
                <div className="text-[10px] uppercase font-bold tracking-widest opacity-60">Years Professionalism</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Subsidiary Companies */}
      <Section bg="gray" id="our-companies" className="bg-slate-50">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-blue-900 tracking-tight">Subsidiary Companies</h2>
            <p className="text-slate-500 text-sm mt-2">Our specialized pillars of manufacturing and distribution.</p>
          </div>
          <div className="flex gap-2">
            <div className="w-12 h-1 border-b-4 border-blue-900"></div>
            <div className="w-4 h-1 border-b-4 border-slate-300"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FadeIn>
            <CompanyCard
              name="A2Z Pharmaceutical Industries"
              description="Market leaders in Human Medicine and Veterinary Medicine manufacturing. Committed to international WHO-GMP standards and export-ready medical solutions."
              image="/src/assets/images/pharma_manufacturing_1785514980266.jpg"
              logo="/src/assets/images/A2Z.png"
              path="/companies/a2z"
            />
          </FadeIn>
          <FadeIn delay={0.2}>
            <CompanyCard
              name="Healthcare Pharmaceutical Industries"
              description="Specialized in healthcare products, food & feed additives, and agricultural pesticides. Dedicated to improving environmental and nutritional quality."
              image="/src/assets/images/healthcare_products_1785514990044.jpg"
              logo="/src/assets/images/HealthCare.png"
              path="/companies/healthcare"
            />
          </FadeIn>
        </div>
      </Section>

      {/* Industries */}
      <Section id="industries">
        <SectionTitle
          title="Industries We Serve"
          subtitle="Our diverse portfolio covers critical sectors, ensuring quality and innovation across all our business activities."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <IndustryCard
            title="Human Pharmaceuticals"
            description="Developing and manufacturing essential human medicine across various therapeutic classes."
            iconName="Stethoscope"
            delay={0.1}
          />
          <IndustryCard
            title="Veterinary Medicine"
            description="Comprehensive healthcare solutions for animal health and veterinary applications."
            iconName="Dog"
            delay={0.2}
          />
          <IndustryCard
            title="Healthcare Industries"
            description="Specialized medical supplies and healthcare products for professional and consumer use."
            iconName="Activity"
            delay={0.3}
          />
          <IndustryCard
            title="Commercial Agencies"
            description="Representing international brands and establishing reliable distribution networks."
            iconName="Briefcase"
            delay={0.4}
          />
          <IndustryCard
            title="Food Additives"
            description="High-quality additives for the food manufacturing industry ensuring safety and flavor."
            iconName="Apple"
            delay={0.5}
          />
          <IndustryCard
            title="Feed Additives"
            description="Optimizing animal nutrition with scientifically formulated feed additives."
            iconName="Zap"
            delay={0.6}
          />
          <IndustryCard
            title="Pesticides"
            description="Effective agricultural solutions for pest control and crop protection."
            iconName="Sprout"
            delay={0.7}
          />
          <IndustryCard
            title="Global Export"
            description="Expanding our reach across international borders through robust export strategies."
            iconName="Globe"
            delay={0.8}
          />
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section bg="blue" className="relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-green-500/10 skew-x-12 transform translate-x-20" />
        <div className="relative z-10">
          <SectionTitle
            title="Why Choose Nile International?"
            subtitle="We are committed to delivering value through trust, innovation, and international quality standards."
            centered
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { icon: Shield, title: 'International Standards', desc: 'All our products and processes meet or exceed global quality benchmarks.' },
              { icon: Users, title: 'Experienced Team', desc: 'Led by industry veterans with deep expertise in pharma and healthcare.' },
              { icon: Lightbulb, title: 'Innovation Driven', desc: 'Constantly investing in R&D to bring cutting-edge solutions to the market.' },
              { icon: Truck, title: 'Reliable Distribution', desc: 'A robust network ensuring our products reach customers efficiently and safely.' },
              { icon: Award, title: 'Certified Quality', desc: 'Holding multiple certifications that attest to our manufacturing excellence.' },
              { icon: Globe, title: 'Global Partnerships', desc: 'Working with world-class commercial agencies to broaden our horizons.' },
            ].map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                    <item.icon className="text-green-400" size={32} />
                  </div>
                  <h4 className="text-xl font-bold">{item.title}</h4>
                  <p className="text-blue-100 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* Partners */}
      <Section id="partners">
        <SectionTitle
          title="Our International Partners"
          subtitle="We collaborate with world-class organizations to deliver the best solutions."
          centered
        />
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
          {/* Mock Logos */}
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="text-3xl font-black text-gray-400 select-none">
              PARTNER {i}
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section bg="gray">
        <div className="bg-blue-900 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white rounded-full" />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Work Together</h2>
            <p className="text-blue-100 text-lg mb-10">
              Whether you're looking for a manufacturing partner, a commercial agency, or high-quality healthcare products, we're here to help.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-green-500 text-white px-10 py-5 rounded-md font-bold text-lg hover:bg-green-600 transition-all shadow-xl shadow-green-500/40"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}

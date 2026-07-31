/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import Section, { SectionTitle, FadeIn } from '../components/Section';
import { CheckCircle2, Factory, Package, Globe, Microscope, ShieldCheck, ArrowLeft } from 'lucide-react';

const companyData = {
  a2z: {
    name: 'A2Z Pharmaceutical Industries',
    tagline: 'Leading Manufacturing of Human & Veterinary Medicine',
    image: '/src/assets/images/pharma_manufacturing_1785514980266.jpg',
    logo: '/src/assets/images/A2Z.png',
    overview: 'A2Z Pharmaceutical Industries is a cornerstone of the Nile International group, specializing in the high-volume production of pharmaceuticals. With a state-of-the-art facility, we cater to both human healthcare and veterinary medicine needs.',
    mission: 'To manufacture high-quality, affordable pharmaceuticals that meet international standards of efficacy and safety.',
    capabilities: [
      { icon: Factory, title: 'Modern Manufacturing', desc: 'Fully automated production lines for tablets, capsules, and liquids.' },
      { icon: Microscope, title: 'Advanced R&D', desc: 'Dedicated research center for generic formulations and bioequivalence.' },
      { icon: ShieldCheck, title: 'Quality Assurance', desc: 'Rigorous testing protocols at every stage of production.' },
    ],
    categories: [
      { title: 'Human Medicine', items: ['Cardiovascular', 'Anti-diabetics', 'Antibiotics', 'Analgesics'] },
      { title: 'Veterinary Medicine', items: ['Vaccines', 'Nutritional Supplements', 'Antibiotics', 'Anthelmintics'] },
    ],
    markets: ['Egypt (Local)', 'Middle East', 'Africa', 'Eastern Europe'],
  },
  healthcare: {
    name: 'Healthcare Pharmaceutical Industries',
    tagline: 'Excellence in Healthcare, Additives & Agriculture',
    image: '/src/assets/images/healthcare_products_1785514990044.jpg',
    logo: '/src/assets/images/HealthCare.png',
    overview: 'Healthcare Pharmaceutical Industries focuses on a diverse range of products including healthcare supplies, food and feed additives, and agricultural solutions. We are dedicated to providing essential products that support nutrition and safety.',
    mission: 'To be the preferred provider of healthcare supplies and industrial additives through innovation and reliable quality.',
    capabilities: [
      { icon: Package, title: 'Diverse Portfolio', desc: 'Spanning from medical supplies to agricultural pesticides.' },
      { icon: Globe, title: 'Global Sourcing', desc: 'Importing high-quality raw materials from verified international partners.' },
      { icon: ShieldCheck, title: 'Safety Standards', desc: 'Strict compliance with environmental and safety regulations.' },
    ],
    categories: [
      { title: 'Healthcare Products', items: ['Medical Supplies', 'Surgical Essentials', 'Consumables'] },
      { title: 'Industrial Additives', items: ['Food Additives', 'Feed Additives', 'Flavorings'] },
      { title: 'Agricultural', items: ['Pesticides', 'Growth Enhancers', 'Crop Protection'] },
    ],
    markets: ['Local Industrial Sector', 'Gulf Region', 'European Partners'],
  }
};

export default function CompanyDetail() {
  const { id } = useParams<{ id: string }>();
  const company = id ? companyData[id as keyof typeof companyData] : null;

  if (!company) {
    return <Navigate to="/companies" replace />;
  }

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img src={company.image} alt={company.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-blue-900/70" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <Link to="/companies" className="inline-flex items-center text-blue-100 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="mr-2" size={20} /> Back to Companies
          </Link>
          <div className="mb-6 bg-white/10 p-4 rounded-xl backdrop-blur-sm inline-block">
            <img src={company.logo} alt={`${company.name} Logo`} className="h-16 w-auto brightness-0 invert" />
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-extrabold text-white mb-6"
          >
            {company.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl text-green-400 font-medium"
          >
            {company.tagline}
          </motion.p>
        </div>
      </section>

      {/* Overview */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <FadeIn>
            <SectionTitle title="Overview" />
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {company.overview}
            </p>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h4 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                <CheckCircle2 className="mr-2 text-green-600" /> Mission
              </h4>
              <p className="text-gray-600 italic leading-relaxed">
                "{company.mission}"
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <SectionTitle title="Manufacturing & Capabilities" />
            <div className="space-y-6">
              {company.capabilities.map((cap, i) => (
                <div key={i} className="flex items-start space-x-4 p-6 bg-white border border-gray-100 rounded-2xl hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <cap.icon className="text-blue-900" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{cap.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{cap.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Product Categories */}
      <Section bg="gray">
        <SectionTitle title="Product Categories" centered />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {company.categories.map((cat, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 h-full">
                <h4 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-100">
                  {cat.title}
                </h4>
                <ul className="space-y-4">
                  {cat.items.map((item, j) => (
                    <li key={j} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Markets */}
      <Section bg="blue">
        <div className="text-center">
          <SectionTitle title="Export & Markets" centered light />
          <div className="flex flex-wrap justify-center gap-4">
            {company.markets.map((market, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium"
              >
                {market}
              </motion.span>
            ))}
          </div>
        </div>
      </Section>

      {/* Gallery Placeholder */}
      <Section>
        <SectionTitle title="Facility Gallery" centered />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="h-64 bg-gray-100 rounded-2xl overflow-hidden">
            <img src={company.image} alt="Gallery 1" className="w-full h-full object-cover" />
          </div>
          <div className="h-64 bg-gray-100 rounded-2xl overflow-hidden">
            <img src={company.image} alt="Gallery 2" className="w-full h-full object-cover grayscale" />
          </div>
          <div className="h-64 bg-gray-100 rounded-2xl overflow-hidden">
            <img src={company.image} alt="Gallery 3" className="w-full h-full object-cover" />
          </div>
        </div>
      </Section>
    </div>
  );
}

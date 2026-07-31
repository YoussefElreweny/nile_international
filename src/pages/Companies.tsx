/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import Section, { SectionTitle, FadeIn } from '../components/Section';
import CompanyCard from '../components/CompanyCard';

export default function Companies() {
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
            Our Subsidiary Companies
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
          >
            A powerful group of specialized divisions working together to deliver excellence in pharmaceuticals and industrial solutions.
          </motion.p>
        </div>
      </section>

      {/* Companies Overview */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeIn>
            <CompanyCard
              name="A2Z Pharmaceutical Industries"
              description="A state-of-the-art manufacturing powerhouse specialized in a wide range of human and veterinary pharmaceuticals. A2Z is the cornerstone of our manufacturing capabilities, focused on innovation and global reach."
              image="/src/assets/images/pharma_manufacturing_1785514980266.jpg"
              logo="/src/assets/images/A2Z.png"
              path="/companies/a2z"
            />
          </FadeIn>
          <FadeIn delay={0.2}>
            <CompanyCard
              name="Healthcare Pharmaceutical Industries"
              description="Dedicated to the production of high-quality healthcare products, food and feed additives, and agricultural pesticides. Healthcare Industries expands our group's impact into essential industrial and consumer sectors."
              image="/src/assets/images/healthcare_products_1785514990044.jpg"
              logo="/src/assets/images/HealthCare.png"
              path="/companies/healthcare"
            />
          </FadeIn>
        </div>
      </Section>

      {/* Synergy Section */}
      <Section bg="gray">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <SectionTitle
              title="Synergy Through Specialization"
              subtitle="While each company operates as a self-contained unit with its own manufacturing and regulatory focus, they share the same DNA of quality and reliability."
            />
            <div className="space-y-6">
              {[
                { title: 'Shared Resources', desc: 'Optimizing costs and efficiency through shared logistics and procurement networks.' },
                { title: 'Unified Vision', desc: 'All subsidiaries align with the group mission of enhancing health through innovation.' },
                { title: 'Expertise Exchange', desc: 'Cross-functional collaboration between R&D teams to foster breakthrough solutions.' },
              ].map((item, i) => (
                <div key={i} className="flex space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100">
                    <span className="text-green-600 font-bold">0{i + 1}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="bg-blue-900 p-12 rounded-3xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6 italic leading-relaxed">
                  "Our subsidiary structure allows us to maintain the agility of specialized firms while leveraging the stability and scale of a major corporate group."
                </h3>
                <p className="text-blue-100 font-medium">— Group Strategy Department</p>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-green-500 rounded-full opacity-20 blur-3xl" />
            </div>
          </FadeIn>
        </div>
      </Section>
    </div>
  );
}

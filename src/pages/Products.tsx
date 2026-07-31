/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Section, { SectionTitle } from '../components/Section';
import { Download, Search, Filter } from 'lucide-react';
import { useProducts } from '../hooks/useProducts';

export default function Products() {
  const { products } = useProducts();
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = products.filter((p) => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
            Our Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
          >
            A comprehensive range of high-quality products developed across our specialized subsidiary companies.
          </motion.p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="bg-white border-b border-gray-100 sticky top-[72px] z-40 py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:row justify-between items-center space-y-6 lg:space-y-0 lg:space-x-8">
            {/* Search */}
            <div className="relative w-full lg:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-full pl-12 pr-6 py-3 focus:outline-none focus:ring-2 focus:ring-blue-900/10 focus:border-blue-900 transition-all"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                    activeCategory === cat
                      ? 'bg-blue-900 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product List */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, idx) => (
              <motion.div
                layout
                key={product.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full uppercase tracking-wider">
                    {product.category}
                  </span>
                  <span className="text-[10px] font-black text-gray-300 uppercase tracking-[0.2em]">
                    Division: {product.company}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
                  {product.description}
                </p>
                <div className="pt-6 border-t border-gray-50 mt-auto">
                  <button className="w-full flex items-center justify-center space-x-2 text-sm font-bold text-blue-900 hover:text-green-600 transition-colors">
                    <Download size={18} />
                    <span>Download Brochure</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <Filter className="mx-auto text-gray-300 mb-4" size={48} />
            <p className="text-gray-500 text-lg">No products found matching your search criteria.</p>
          </div>
        )}
      </Section>

      {/* Global Distribution CTA */}
      <Section bg="blue">
        <div className="text-center max-w-3xl mx-auto">
          <SectionTitle
            title="Global Distribution & Export"
            subtitle="Our products are exported to over 20 countries worldwide. We are constantly expanding our reach through strategic international partnerships."
            centered
            light
          />
          <button className="bg-white text-blue-900 px-10 py-5 rounded-xl font-bold text-lg hover:bg-green-500 hover:text-white transition-all shadow-xl shadow-white/5">
            Become a Distributor
          </button>
        </div>
      </Section>
    </div>
  );
}

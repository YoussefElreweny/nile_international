/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Section from '../components/Section';
import { Plus, Trash2, Edit2, X, Check, Package, Search } from 'lucide-react';
import { useProducts } from '../hooks/useProducts';
import { Product } from '../types';

export default function Admin() {
  const { products, addProduct, updateProduct, deleteProduct } = useProducts();
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Form State
  const [formData, setFormData] = useState<Omit<Product, 'id'>>({
    name: '',
    category: '',
    description: '',
    company: '',
  });

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    addProduct(formData);
    setFormData({ name: '', category: '', description: '', company: '' });
    setIsAdding(false);
  };

  const handleEdit = (id: string) => {
    const product = products.find(p => p.id === id);
    if (product) {
      setFormData({
        name: product.name,
        category: product.category,
        description: product.description,
        company: product.company,
      });
      setEditingId(id);
    }
  };

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      updateProduct(editingId, formData);
      setFormData({ name: '', category: '', description: '', company: '' });
      setEditingId(null);
    }
  };

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <Section>
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-black text-gray-900 mb-2 tracking-tight">Admin Dashboard</h1>
            <p className="text-gray-500 font-medium">Manage your product catalog and company information.</p>
          </div>
          <button
            onClick={() => setIsAdding(true)}
            className="flex items-center space-x-2 bg-blue-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-800 transition-all shadow-lg shadow-blue-900/10"
          >
            <Plus size={20} />
            <span>Add New Product</span>
          </button>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { label: 'Total Products', value: products.length, color: 'blue' },
            { label: 'Categories', value: new Set(products.map(p => p.category)).size, color: 'green' },
            { label: 'Companies', value: new Set(products.map(p => p.company)).size, color: 'purple' },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-1">{stat.label}</p>
              <p className="text-3xl font-black text-gray-900">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white border border-gray-200 rounded-xl pl-12 pr-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-900/10 focus:border-blue-900 transition-all shadow-sm"
          />
        </div>

        {/* Products Table */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="px-6 py-4 text-sm font-black text-gray-400 uppercase tracking-widest">Product</th>
                  <th className="px-6 py-4 text-sm font-black text-gray-400 uppercase tracking-widest">Category</th>
                  <th className="px-6 py-4 text-sm font-black text-gray-400 uppercase tracking-widest">Company</th>
                  <th className="px-6 py-4 text-sm font-black text-gray-400 uppercase tracking-widest text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filteredProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                          <Package size={20} />
                        </div>
                        <div>
                          <p className="font-bold text-gray-900">{product.name}</p>
                          <p className="text-xs text-gray-400 line-clamp-1">{product.description}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full">
                        {product.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-medium text-gray-600">{product.company}</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end space-x-2">
                        <button
                          onClick={() => handleEdit(product.id)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          title="Edit"
                        >
                          <Edit2 size={18} />
                        </button>
                        <button
                          onClick={() => deleteProduct(product.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {filteredProducts.length === 0 && (
            <div className="p-20 text-center">
              <Package size={48} className="mx-auto text-gray-200 mb-4" />
              <p className="text-gray-400 font-medium">No products found</p>
            </div>
          )}
        </div>
      </Section>

      {/* Add/Edit Modal */}
      <AnimatePresence>
        {(isAdding || editingId) && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setIsAdding(false);
                setEditingId(null);
                setFormData({ name: '', category: '', description: '', company: '' });
              }}
              className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="p-8">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-black text-gray-900">
                    {isAdding ? 'Add New Product' : 'Edit Product'}
                  </h2>
                  <button
                    onClick={() => {
                      setIsAdding(false);
                      setEditingId(null);
                      setFormData({ name: '', category: '', description: '', company: '' });
                    }}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X size={24} className="text-gray-400" />
                  </button>
                </div>

                <form onSubmit={isAdding ? handleAdd : handleUpdate} className="space-y-6">
                  <div>
                    <label className="block text-sm font-black text-gray-400 uppercase tracking-widest mb-2">
                      Product Name
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-900/10 focus:border-blue-900 transition-all font-medium"
                      placeholder="e.g. Cardio-Plus"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-black text-gray-400 uppercase tracking-widest mb-2">
                        Category
                      </label>
                      <input
                        required
                        type="text"
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-900/10 focus:border-blue-900 transition-all font-medium"
                        placeholder="e.g. Veterinary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-black text-gray-400 uppercase tracking-widest mb-2">
                        Company
                      </label>
                      <select
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-900/10 focus:border-blue-900 transition-all font-medium appearance-none"
                      >
                        <option value="">Select Company</option>
                        <option value="A2Z">A2Z</option>
                        <option value="Healthcare">Healthcare</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-black text-gray-400 uppercase tracking-widest mb-2">
                      Description
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-900/10 focus:border-blue-900 transition-all font-medium resize-none"
                      placeholder="Enter product description..."
                    />
                  </div>

                  <div className="pt-4 flex space-x-3">
                    <button
                      type="button"
                      onClick={() => {
                        setIsAdding(false);
                        setEditingId(null);
                        setFormData({ name: '', category: '', description: '', company: '' });
                      }}
                      className="flex-1 bg-gray-100 text-gray-600 px-6 py-4 rounded-xl font-bold hover:bg-gray-200 transition-all"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-blue-900 text-white px-6 py-4 rounded-xl font-bold hover:bg-blue-800 transition-all shadow-lg shadow-blue-900/20"
                    >
                      {isAdding ? 'Add Product' : 'Save Changes'}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

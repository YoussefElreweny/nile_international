/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Product } from '../types';

const INITIAL_PRODUCTS: Product[] = [
  { id: '1', name: 'Cardio-Plus', category: 'Human Medicine', description: 'Advanced cardiovascular support medication.', company: 'A2Z' },
  { id: '2', name: 'Respi-Clear', category: 'Human Medicine', description: 'Broad-spectrum respiratory treatment.', company: 'A2Z' },
  { id: '3', name: 'Veta-Cyl', category: 'Veterinary', description: 'Veterinary antibiotic for livestock.', company: 'A2Z' },
  { id: '4', name: 'Nutri-Feed 500', category: 'Feed Additives', description: 'Growth optimization supplement for poultry.', company: 'Healthcare' },
  { id: '5', name: 'Pure-Guard', category: 'Healthcare', description: 'Professional grade medical disinfectant.', company: 'Healthcare' },
  { id: '6', name: 'Agro-Shield', category: 'Pesticides', description: 'Eco-friendly crop protection solution.', company: 'Healthcare' },
  { id: '7', name: 'Flavor-Ex', category: 'Food Additives', description: 'Natural flavor enhancer for processed foods.', company: 'Healthcare' },
  { id: '8', name: 'Surgi-Kit', category: 'Healthcare', description: 'Sterile surgical consumable pack.', company: 'Healthcare' },
  { id: '9', name: 'Vita-Grow', category: 'Veterinary', description: 'Multi-vitamin complex for animal health.', company: 'A2Z' },
];

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('nile_products');
    if (stored) {
      setProducts(JSON.parse(stored));
    } else {
      setProducts(INITIAL_PRODUCTS);
      localStorage.setItem('nile_products', JSON.stringify(INITIAL_PRODUCTS));
    }
  }, []);

  const saveProducts = (newProducts: Product[]) => {
    setProducts(newProducts);
    localStorage.setItem('nile_products', JSON.stringify(newProducts));
  };

  const addProduct = (product: Omit<Product, 'id'>) => {
    const newProduct = { ...product, id: Date.now().toString() };
    saveProducts([...products, newProduct]);
  };

  const updateProduct = (id: string, updated: Partial<Product>) => {
    saveProducts(products.map(p => p.id === id ? { ...p, ...updated } : p));
  };

  const deleteProduct = (id: string) => {
    saveProducts(products.filter(p => p.id !== id));
  };

  return { products, addProduct, updateProduct, deleteProduct };
}

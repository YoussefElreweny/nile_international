/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CompanyCardProps {
  name: string;
  description: string;
  image: string;
  logo: string;
  path: string;
}

export default function CompanyCard({ name, description, image, logo, path }: CompanyCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200 flex flex-col h-full"
    >
      <div className="relative h-48 overflow-hidden bg-slate-100">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <div className="h-12 w-auto flex items-center">
            <img src={logo} alt={`${name} Logo`} className="h-full w-auto object-contain" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-3">{name}</h3>
        <p className="text-sm text-slate-600 mb-8 leading-relaxed flex-1">
          {description}
        </p>
        <div className="mt-auto">
          <Link
            to={path}
            className="inline-flex items-center text-sm font-bold text-blue-900 tracking-wider uppercase group/link"
          >
            Explore Entity
            <ArrowRight className="ml-1 transition-all group-hover/link:ml-2" size={16} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

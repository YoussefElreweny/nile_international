/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import React from 'react';

interface IndustryCardProps {
  title: string;
  description: string;
  iconName: keyof typeof Icons;
  delay?: number;
}

export default function IndustryCard({ title, description, iconName, delay = 0 }: IndustryCardProps) {
  const Icon = Icons[iconName] as React.ElementType;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="p-8 bg-white rounded-xl border border-gray-100 hover:border-green-500/30 hover:shadow-lg hover:shadow-green-500/5 transition-all duration-300 group"
    >
      <div className="w-14 h-14 bg-gray-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-50 transition-colors">
        {Icon && <Icon className="text-blue-900 group-hover:text-green-600 transition-colors" size={28} />}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed text-sm">
        {description}
      </p>
    </motion.div>
  );
}

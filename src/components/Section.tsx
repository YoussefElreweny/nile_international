/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ReactNode, Key } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  bg?: 'white' | 'gray' | 'blue';
}

export default function Section({ children, className = '', id, bg = 'white' }: SectionProps) {
  const bgClasses = {
    white: 'bg-white',
    gray: 'bg-slate-50',
    blue: 'bg-blue-900 text-white',
  };

  return (
    <section id={id} className={`py-20 px-6 ${bgClasses[bg]} ${className}`}>
      <div className="container mx-auto">
        {children}
      </div>
    </section>
  );
}

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionTitle({ title, subtitle, centered = false, light = false }: SectionTitleProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'}`}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`text-3xl md:text-4xl font-bold mb-4 tracking-tight leading-tight ${light ? 'text-white' : 'text-blue-900'}`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={`text-sm md:text-base leading-relaxed ${light ? 'text-blue-100' : 'text-slate-500'}`}
        >
          {subtitle}
        </motion.p>
      )}
      <div className={`w-12 h-1 mt-6 rounded-full bg-blue-900 ${centered ? 'mx-auto' : ''} ${light ? 'bg-green-400' : ''}`} />
    </div>
  );
}

export function FadeIn({ children, delay = 0 }: { children: ReactNode; delay?: number; key?: Key }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}

'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function FloatingCareObjects() {
  // Abstract circles and capsules to feel cozy and organic
  const items = [
    {
      id: 1,
      className: 'absolute top-1/4 left-10 w-24 h-24 rounded-full bg-gradient-to-tr from-brand-coral/15 to-brand-apricot/20 blur-xl',
      duration: 12,
      x: [0, 20, -10, 0],
      y: [0, -30, 20, 0],
    },
    {
      id: 2,
      className: 'absolute top-2/3 right-12 w-32 h-32 rounded-full bg-gradient-to-br from-brand-salmon/10 to-brand-cream/30 blur-2xl',
      duration: 18,
      x: [0, -40, 15, 0],
      y: [0, 20, -40, 0],
    },
    {
      id: 3,
      className: 'absolute top-1/3 right-1/4 w-16 h-28 rounded-full bg-gradient-to-tr from-brand-apricot/15 to-brand-coral/10 blur-xl rotate-45',
      duration: 15,
      x: [0, 15, -15, 0],
      y: [0, -20, 20, 0],
    },
    {
      id: 4,
      className: 'absolute bottom-1/4 left-1/3 w-20 h-20 rounded-full bg-gradient-to-br from-brand-cream/40 to-brand-salmon/10 blur-xl',
      duration: 14,
      x: [0, -25, 20, 0],
      y: [0, 15, -25, 0],
    }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-5">
      {items.map((item) => (
        <motion.div
          key={item.id}
          className={item.className}
          animate={{
            x: item.x,
            y: item.y,
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

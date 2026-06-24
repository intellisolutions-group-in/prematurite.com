'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ScrollReveal({
  children,
  delay = 0,
  duration = 0.6,
  direction = 'up',
  className = '',
}) {
  const getVariants = () => {
    const directions = {
      up: { y: 30, x: 0 },
      down: { y: -30, x: 0 },
      left: { x: 30, y: 0 },
      right: { x: -30, y: 0 },
      none: { x: 0, y: 0 },
    };

    const initialOffset = directions[direction] || directions.up;

    return {
      hidden: {
        opacity: 0,
        ...initialOffset,
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: duration,
          delay: delay,
          ease: [0.21, 0.47, 0.32, 0.98], // Custom premium easeOut
        },
      },
    };
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={getVariants()}
      className={className}
    >
      {children}
    </motion.div>
  );
}

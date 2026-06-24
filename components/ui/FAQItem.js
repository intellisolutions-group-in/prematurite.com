'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function FAQItem({ faq, id }) {
  const [isOpen, setIsOpen] = useState(false);
  const { question, answer } = faq;

  return (
    <div className="border border-brand-coral/15 bg-brand-white rounded-2xl overflow-hidden hover:border-brand-coral/30 transition-all duration-300 shadow-soft">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left font-display font-bold text-sm md:text-base text-brand-deep hover:text-brand-coral transition-colors duration-200 focus:outline-none"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${id}`}
        id={`faq-question-${id}`}
      >
        <span className="pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-brand-coral transition-transform duration-300 flex-shrink-0 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            role="region"
            aria-labelledby={`faq-question-${id}`}
          >
            <div className="p-5 pt-0 border-t border-brand-coral/5 text-brand-brown text-sm leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

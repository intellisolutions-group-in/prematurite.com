'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X } from 'lucide-react';

export default function ThankYouModal({ isOpen, onClose, message = 'Thank you! We will reach you soon.' }) {
  useEffect(() => {
    if (!isOpen) return;

    // Auto-close modal after 3 seconds
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black"
          />

          {/* Modal Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="bg-brand-white relative w-full max-w-sm rounded-3xl p-6 shadow-glow border border-brand-coral/20 text-center z-10"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1.5 rounded-full text-brand-brown/60 hover:bg-brand-rose hover:text-brand-coral transition-colors duration-200"
              aria-label="Close modal"
              id="close-modal-btn"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Checkmark Icon */}
            <div className="mx-auto flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600 mb-4 mt-2 shadow-inner">
              <Check className="w-6 h-6 stroke-[3]" />
            </div>

            {/* Title & Message */}
            <h3
              className="font-display text-lg font-bold text-brand-deep mb-2"
              id="modal-title"
            >
              Submission Successful
            </h3>
            <p className="text-brand-brown text-sm font-medium leading-relaxed">
              {message}
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

import React from 'react';
import { Quote } from 'lucide-react';

export default function TestimonialCard({ testimonial }) {
  const { quote, author, role } = testimonial;

  return (
    <div className="bg-brand-white border border-brand-coral/15 rounded-3xl p-6 md:p-8 shadow-soft hover:border-brand-coral/30 hover:shadow-glow transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
      {/* Background shape */}
      <div className="absolute -top-6 -right-6 w-20 h-20 bg-brand-coral/5 rounded-full blur-lg group-hover:bg-brand-coral/10 transition-colors duration-300" />
      
      <div>
        <Quote className="w-8 h-8 text-brand-salmon/40 mb-6" />
        <p className="text-brand-deep text-sm md:text-base leading-relaxed italic mb-6 relative z-10">
          "{quote}"
        </p>
      </div>

      <div className="border-t border-brand-coral/10 pt-4 mt-auto">
        <h4 className="font-display text-sm font-bold text-brand-deep">
          {author}
        </h4>
        <p className="text-brand-brown text-xs">
          {role}
        </p>
      </div>
    </div>
  );
}

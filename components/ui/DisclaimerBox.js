import React from 'react';
import { AlertTriangle } from 'lucide-react';

export default function DisclaimerBox({ className = '' }) {
  return (
    <div 
      className={`bg-brand-rose border border-brand-coral/25 rounded-2xl p-5 shadow-soft flex items-start space-x-4 ${className}`}
      role="note"
      aria-label="Medical Disclaimer"
    >
      <div className="bg-brand-coral/10 p-2 rounded-xl text-brand-coral flex-shrink-0">
        <AlertTriangle className="w-5 h-5" />
      </div>
      <div className="space-y-1">
        <h4 className="font-display text-xs font-bold uppercase tracking-wider text-brand-deep">
          Medical Education Disclaimer
        </h4>
        <p className="text-brand-brown text-xs md:text-sm leading-relaxed">
          Prematurite Digital Health provides educational and informational content only. The information on this website is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified pediatrician, neonatologist, or healthcare professional for medical concerns. In case of emergency, contact your nearest hospital or emergency service immediately.
        </p>
      </div>
    </div>
  );
}

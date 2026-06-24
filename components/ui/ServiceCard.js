import React from 'react';
import Link from 'next/link';
import * as Icons from 'lucide-react';

export default function ServiceCard({ service }) {
  const { slug, title, icon, shortDescription, learningAreas } = service;
  
  // Resolve Lucide Icon dynamically
  const IconComponent = Icons[icon] || Icons.Baby;

  return (
    <div className="group relative bg-brand-white hover:bg-brand-rose/30 transition-all duration-300 rounded-3xl p-6 md:p-8 border border-brand-coral/15 hover:border-brand-coral/45 shadow-soft hover:shadow-glow flex flex-col justify-between h-full">
      <div>
        {/* Icon wrapper */}
        <div className="bg-brand-coral/10 group-hover:bg-brand-coral group-hover:text-brand-white text-brand-coral p-3 rounded-2xl w-12 h-12 flex items-center justify-center transition-all duration-300 mb-6 shadow-inner">
          <IconComponent className="w-6 h-6 stroke-[2]" />
        </div>

        {/* Content */}
        <h3 className="font-display text-lg md:text-xl font-bold text-brand-deep mb-3 group-hover:text-brand-coral transition-colors duration-200">
          {title}
        </h3>
        <p className="text-brand-brown text-sm leading-relaxed mb-4">
          {shortDescription}
        </p>

        {/* Related benefit/outcome preview */}
        <div className="border-t border-brand-coral/10 pt-4 mb-6">
          <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-brand-coral block mb-2">
            Primary Learning Focus:
          </span>
          <p className="text-brand-deep text-xs font-semibold line-clamp-1">
            {learningAreas[0]}
          </p>
        </div>
      </div>

      {/* Card Footer Link */}
      <div>
        <Link
          href={`/services/${slug}/`}
          className="inline-flex items-center text-xs md:text-sm font-display font-bold text-brand-deep group-hover:text-brand-coral transition-colors duration-200 group-hover:translate-x-1 duration-300"
          aria-label={`Learn more about ${title}`}
        >
          Explore Guidance
          <Icons.ChevronRight className="w-4 h-4 ml-1 mt-0.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}

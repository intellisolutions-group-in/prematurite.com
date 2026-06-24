import React from 'react';

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  className = '',
}) {
  return (
    <div className={`mb-10 md:mb-14 ${centered ? 'text-center' : 'text-left'} ${className}`}>
      {subtitle && (
        <span className="inline-block text-xs md:text-sm font-sans font-bold tracking-widest uppercase text-brand-coral mb-2">
          {subtitle}
        </span>
      )}
      <h2 className="text-2xl md:text-4xl font-display font-extrabold text-brand-deep tracking-tight">
        {title}
      </h2>
      <div className={`h-1 w-12 bg-gradient-to-r from-brand-coral to-brand-apricot rounded-full mt-4 ${centered ? 'mx-auto' : 'mr-auto'}`} />
    </div>
  );
}

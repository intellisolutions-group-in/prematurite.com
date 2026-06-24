import React from 'react';
import Link from 'next/link';

export default function Button({
  children,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
  id,
  ariaLabel,
  disabled = false,
}) {
  const baseStyle = 'inline-flex items-center justify-center font-display font-medium rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-coral cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed text-center';
  
  const variants = {
    primary: 'bg-brand-coral hover:bg-brand-salmon text-brand-white shadow-soft hover:shadow-glow px-6 py-3 text-sm md:text-base border border-transparent',
    secondary: 'bg-brand-apricot hover:bg-brand-cream text-brand-deep shadow-soft px-6 py-3 text-sm md:text-base border border-transparent',
    outline: 'bg-transparent border-2 border-brand-coral text-brand-deep hover:bg-brand-rose px-6 py-3 text-sm md:text-base',
    text: 'bg-transparent text-brand-deep hover:text-brand-coral px-4 py-2 text-sm md:text-base underline underline-offset-4 decoration-2 decoration-brand-salmon hover:decoration-brand-coral',
    sm: 'bg-brand-coral hover:bg-brand-salmon text-brand-white px-4 py-2 text-xs md:text-sm rounded-full shadow-soft'
  };

  const style = `${baseStyle} ${variants[variant] || variants.primary} ${className}`;

  if (href) {
    return (
      <Link href={href} className={style} id={id} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={style}
      onClick={onClick}
      id={id}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

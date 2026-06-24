'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Heart } from 'lucide-react';
import Button from '../ui/Button';
import navData from '../../data/navigation.json';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Helper to check if route is active
  const isActive = (path) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-panel shadow-soft py-3'
            : 'bg-transparent py-5'
        }`}
        id="main-header"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo area */}
            <div className="flex-shrink-0 flex items-center">
              <Link
                href="/"
                className="flex items-center space-x-2 font-display font-extrabold text-brand-deep transition-transform duration-200 hover:scale-105"
                aria-label="Prematurite Digital Health Home"
              >
                <div className="bg-brand-coral p-1.5 rounded-xl shadow-soft text-brand-white">
                  <Heart className="w-5 h-5" fill="currentColor" />
                </div>
                <span className="text-lg md:text-xl tracking-tight leading-none">
                  Prematurite
                  <span className="block text-[10px] md:text-[11px] font-sans font-semibold tracking-wider uppercase text-brand-brown">
                    Digital Health
                  </span>
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-1" aria-label="Main navigation">
              {navData.header.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`px-3 py-2 rounded-full font-display text-sm font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'bg-brand-coral/10 text-brand-coral'
                      : 'text-brand-deep hover:bg-brand-rose hover:text-brand-coral'
                  }`}
                  aria-current={isActive(item.path) ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button href="/contact/" variant="sm" id="header-cta-btn">
                Send Inquiry
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-xl text-brand-deep hover:bg-brand-rose focus:outline-none focus:ring-2 focus:ring-brand-coral"
                aria-expanded={isOpen}
                aria-label="Toggle navigation menu"
                id="mobile-menu-toggle"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`lg:hidden fixed inset-x-0 top-[65px] bg-brand-white border-b border-brand-coral/15 shadow-soft transition-all duration-300 ease-in-out ${
            isOpen ? 'opacity-100 max-h-[85vh] py-6' : 'opacity-0 max-h-0 pointer-events-none'
          } overflow-y-auto`}
          id="mobile-nav-menu"
        >
          <div className="px-4 sm:px-6 space-y-2">
            {navData.header.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-2xl font-display text-base font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? 'bg-brand-coral/10 text-brand-coral pl-6'
                    : 'text-brand-deep hover:bg-brand-rose hover:text-brand-coral hover:pl-6'
                }`}
                aria-current={isActive(item.path) ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-brand-coral/10 flex justify-center">
              <Button
                href="/contact/"
                className="w-full max-w-sm"
                onClick={() => setIsOpen(false)}
                id="mobile-header-cta"
              >
                Send Inquiry
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

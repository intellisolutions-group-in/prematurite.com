'use client';

import React, { useState } from 'react';
import { HelpCircle, ChevronRight, Search } from 'lucide-react';
import FAQItem from '@/components/ui/FAQItem';
import DisclaimerBox from '@/components/ui/DisclaimerBox';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/animation/ScrollReveal';
import faqData from '@/data/faq.json';

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    'Premature Baby Basics',
    'NICU Journey',
    'Feeding and Nutrition',
    'Growth and Development',
    'Home Care',
    'Website and Resources',
    'Medical Disclaimer'
  ];

  const filteredFAQs = faqData.filter((faq) => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16" id="faq-page">
      
      {/* 1. HERO SECTION */}
      <section className="text-center max-w-3xl mx-auto space-y-6">
        <ScrollReveal direction="up">
          <span className="text-xs md:text-sm font-sans font-bold tracking-widest uppercase text-brand-coral">
            Answers & Resources
          </span>
          <h1 className="text-3xl md:text-5xl font-display font-extrabold text-brand-deep mt-2 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-brand-brown text-base md:text-lg leading-relaxed mt-4">
            Search our comprehensive list of FAQs covering premature baby development, NICU terms, feeding guidance, and home safety.
          </p>
        </ScrollReveal>
      </section>

      {/* 2. SEARCH & FILTER PANEL */}
      <section className="space-y-6 bg-brand-rose/40 rounded-3xl p-6 border border-brand-coral/15">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search bar */}
          <div className="relative w-full md:max-w-sm">
            <Search className="absolute left-4 top-3.5 w-4 h-4 text-brand-brown/50" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-brand-white border border-brand-coral/25 text-brand-deep placeholder-brand-brown/50 text-sm focus:outline-none focus:ring-2 focus:ring-brand-coral/20 transition-all duration-300"
            />
          </div>

          {/* Category Dropdown */}
          <div className="relative w-full md:w-auto">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full md:w-64 px-4 py-3 rounded-2xl bg-brand-white border border-brand-coral/25 text-brand-deep text-sm focus:outline-none focus:ring-2 focus:ring-brand-coral/20 transition-all duration-300 cursor-pointer appearance-none"
              aria-label="Filter FAQ by category"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === 'All' ? 'All Categories' : cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex flex-wrap gap-2 pt-2 border-t border-brand-coral/10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-brand-coral text-brand-white shadow-soft'
                  : 'bg-brand-white text-brand-deep hover:bg-brand-rose hover:text-brand-coral border border-brand-coral/10'
              }`}
            >
              {cat === 'All' ? 'All Topics' : cat}
            </button>
          ))}
        </div>
      </section>

      {/* 3. ACCORDION LIST */}
      <section className="space-y-6 max-w-3xl mx-auto">
        <ScrollReveal direction="none">
          <h2 className="text-xl md:text-2xl font-display font-bold text-brand-deep border-b border-brand-coral/10 pb-3 mb-6">
            {selectedCategory === 'All' ? 'All FAQs' : selectedCategory} ({filteredFAQs.length})
          </h2>
        </ScrollReveal>

        {filteredFAQs.length === 0 ? (
          <div className="text-center py-12 bg-brand-white border border-brand-coral/10 rounded-3xl p-6 shadow-soft">
            <p className="text-brand-brown text-sm">No FAQs found matching your filters.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.03}>
                <FAQItem faq={faq} id={index} />
              </ScrollReveal>
            ))}
          </div>
        )}
      </section>

      {/* 4. DISCLAIMER */}
      <section className="max-w-3xl mx-auto">
        <DisclaimerBox />
      </section>

    </div>
  );
}

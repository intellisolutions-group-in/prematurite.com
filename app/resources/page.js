'use client';

import React, { useState } from 'react';
import { FileText, Download, Clock, Heart, Search } from 'lucide-react';
import Button from '@/components/ui/Button';
import DisclaimerBox from '@/components/ui/DisclaimerBox';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/animation/ScrollReveal';
import resourcesData from '@/data/resources.json';

export default function ResourceLibraryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    'Premature Baby Care Basics',
    'NICU Parent Education',
    'Feeding and Nutrition Awareness',
    'Growth and Milestone Tracking',
    'Kangaroo Care Education',
    'Post-Discharge Home Care',
    'Questions to Ask Your Doctor',
    'Family Support Resources'
  ];

  // Filtering logic
  const filteredResources = resourcesData.filter((res) => {
    const matchesCategory = selectedCategory === 'All' || res.category === selectedCategory;
    const matchesSearch = res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          res.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16" id="resources-page">
      
      {/* 1. HERO SECTION */}
      <section className="text-center max-w-3xl mx-auto space-y-6">
        <ScrollReveal direction="up">
          <span className="text-xs md:text-sm font-sans font-bold tracking-widest uppercase text-brand-coral">
            Educational Downloads
          </span>
          <h1 className="text-3xl md:text-5xl font-display font-extrabold text-brand-deep mt-2 tracking-tight">
            Resource Library
          </h1>
          <p className="text-brand-brown text-base md:text-lg leading-relaxed mt-4">
            Access our free collection of printable checklists, feeding log sheets, corrected age guides, and parent support manuals.
          </p>
        </ScrollReveal>
      </section>

      {/* 2. SEARCH AND FILTER CONTROLS */}
      <section className="space-y-6 bg-brand-rose/40 rounded-3xl p-6 border border-brand-coral/15">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search bar */}
          <div className="relative w-full md:max-w-sm">
            <Search className="absolute left-4 top-3.5 w-4 h-4 text-brand-brown/50" />
            <input
              type="text"
              placeholder="Search resource guides..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-brand-white border border-brand-coral/25 text-brand-deep placeholder-brand-brown/50 text-sm focus:outline-none focus:ring-2 focus:ring-brand-coral/20 transition-all duration-300"
            />
          </div>

          {/* Category Dropdown/Selector */}
          <div className="relative w-full md:w-auto">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full md:w-64 px-4 py-3 rounded-2xl bg-brand-white border border-brand-coral/25 text-brand-deep text-sm focus:outline-none focus:ring-2 focus:ring-brand-coral/20 transition-all duration-300 cursor-pointer appearance-none"
              aria-label="Filter by category"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === 'All' ? 'All Categories' : cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Desktop Category buttons */}
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

      {/* 3. RESOURCES GRID */}
      <section className="space-y-8">
        <ScrollReveal direction="none">
          <h2 className="text-xl md:text-2xl font-display font-bold text-brand-deep">
            {selectedCategory === 'All' ? 'All Resources' : selectedCategory} ({filteredResources.length})
          </h2>
        </ScrollReveal>

        {filteredResources.length === 0 ? (
          <div className="text-center py-12 bg-brand-white border border-brand-coral/10 rounded-3xl p-6 shadow-soft">
            <p className="text-brand-brown text-sm">No educational resources found matching your filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredResources.map((res, index) => (
              <ScrollReveal key={res.id} direction="up" delay={index * 0.05} className="bg-brand-white border border-brand-coral/15 rounded-3xl p-6 md:p-8 shadow-soft flex flex-col justify-between hover:border-brand-coral/30 hover:shadow-glow transition-all duration-300">
                <div>
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-brand-coral/10 text-brand-coral">
                      {res.category}
                    </span>
                    <span className="text-[10px] text-brand-brown font-semibold bg-brand-rose px-2.5 py-1 rounded-md">
                      {res.fileType}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-brand-deep text-lg mb-2">
                    {res.title}
                  </h3>
                  <p className="text-brand-brown text-xs md:text-sm leading-relaxed mb-6">
                    {res.summary}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-brand-coral/10">
                  <div className="flex items-center text-xs text-brand-brown/70 font-semibold gap-3">
                    <span className="flex items-center">
                      <Clock className="w-3.5 h-3.5 mr-1" />
                      {res.readTime}
                    </span>
                    <span>•</span>
                    <span>{res.fileSize}</span>
                  </div>
                  <a
                    href={`/contact/?resource=${encodeURIComponent(res.title)}`}
                    className="inline-flex items-center text-xs md:text-sm font-display font-bold text-brand-coral hover:text-brand-salmon transition-colors duration-200"
                    aria-label={`Request resource: ${res.title}`}
                  >
                    <Download className="w-4 h-4 mr-1.5" />
                    Request File
                  </a>
                </div>
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

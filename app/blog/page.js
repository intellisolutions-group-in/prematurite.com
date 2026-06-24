'use client';

import React from 'react';
import { BookOpen } from 'lucide-react';
import BlogCard from '@/components/ui/BlogCard';
import DisclaimerBox from '@/components/ui/DisclaimerBox';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/animation/ScrollReveal';
import blogData from '@/data/blog.json';

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16 md:space-y-24" id="blog-page">
      
      {/* 1. HERO SECTION */}
      <section className="text-center max-w-3xl mx-auto space-y-6">
        <ScrollReveal direction="up">
          <span className="text-xs md:text-sm font-sans font-bold tracking-widest uppercase text-brand-coral">
            Educational Blog
          </span>
          <h1 className="text-3xl md:text-5xl font-display font-extrabold text-brand-deep mt-2 tracking-tight">
            Articles and Care Manuals
          </h1>
          <p className="text-brand-brown text-base md:text-lg leading-relaxed mt-4">
            Evidence-based reading materials created by the Prematurite Editorial Team to support parent understanding of neonatal care.
          </p>
        </ScrollReveal>
      </section>

      {/* 2. BLOG LISTING GRID */}
      <section className="space-y-10">
        <ScrollReveal direction="up">
          <SectionHeading
            subtitle="Topic Directories"
            title="Browse Our Educational Articles"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((post, index) => (
            <ScrollReveal key={post.slug} direction="up" delay={index * 0.05}>
              <BlogCard post={post} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 3. MEDICAL DISCLAIMER */}
      <section className="max-w-3xl mx-auto space-y-6 text-center">
        <DisclaimerBox />
        <ScrollReveal direction="up" className="pt-4">
          <p className="text-brand-brown text-xs md:text-sm max-w-xl mx-auto">
            All blog articles are educational. They must not be treated as clinical diagnosis or medical prescriptions. Always coordinate with your pediatrician for health concerns.
          </p>
        </ScrollReveal>
      </section>

    </div>
  );
}

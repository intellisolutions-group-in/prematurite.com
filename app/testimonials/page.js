'use client';

import React from 'react';
import { Heart } from 'lucide-react';
import TestimonialCard from '@/components/ui/TestimonialCard';
import DisclaimerBox from '@/components/ui/DisclaimerBox';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/animation/ScrollReveal';
import testimonialsData from '@/data/testimonials.json';

export default function TestimonialsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16 md:space-y-24" id="testimonials-page">
      
      {/* 1. HERO SECTION */}
      <section className="text-center max-w-3xl mx-auto space-y-6">
        <ScrollReveal direction="up">
          <span className="text-xs md:text-sm font-sans font-bold tracking-widest uppercase text-brand-coral">
            Parent Feedback
          </span>
          <h1 className="text-3xl md:text-5xl font-display font-extrabold text-brand-deep mt-2 tracking-tight">
            Educational Feedback
          </h1>
          <p className="text-brand-brown text-base md:text-lg leading-relaxed mt-4">
            Hear from families across India who used our educational resources to understand premature baby care and communicate more clearly with their pediatricians.
          </p>
        </ScrollReveal>
      </section>

      {/* 2. GRID OF TESTIMONIALS */}
      <section className="space-y-10">
        <ScrollReveal direction="up">
          <SectionHeading
            subtitle="Caregiver Experiences"
            title="Read Parents' Feedback"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((t, index) => (
            <ScrollReveal key={t.id} direction="up" delay={index * 0.05}>
              <TestimonialCard testimonial={t} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 3. HEALTHCARE DISCLAIMER */}
      <section className="max-w-3xl mx-auto text-center space-y-6">
        <DisclaimerBox />
        <p className="text-brand-brown text-xs md:text-sm">
          Please note that the feedback listed on this page represents general experiences with our educational articles, logs, and downloads. We do not display clinical outcome reviews, medical diagnoses, or treat testimonials from hospitals.
        </p>
      </section>

    </div>
  );
}

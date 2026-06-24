'use client';

import React from 'react';
import { BookOpen, Award, CheckCircle, Heart } from 'lucide-react';
import Button from '@/components/ui/Button';
import DisclaimerBox from '@/components/ui/DisclaimerBox';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/animation/ScrollReveal';

export default function OurApproachPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16 md:space-y-24" id="approach-page">
      
      {/* 1. HERO SECTION */}
      <section className="text-center max-w-3xl mx-auto space-y-6">
        <ScrollReveal direction="up">
          <span className="text-xs md:text-sm font-sans font-bold tracking-widest uppercase text-brand-coral">
            Our Strategy
          </span>
          <h1 className="text-3xl md:text-5xl font-display font-extrabold text-brand-deep mt-2 tracking-tight">
            Our Educational Approach
          </h1>
          <p className="text-brand-brown text-base md:text-lg leading-relaxed mt-4">
            How we translate complex neonatal science into comforting, safe, and actionable educational programs for Indian parents.
          </p>
        </ScrollReveal>
      </section>

      {/* 2. THE THREE PILLARS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ScrollReveal direction="up" delay={0.1} className="bg-brand-white border border-brand-coral/15 rounded-3xl p-6 md:p-8 shadow-soft space-y-4">
          <div className="bg-brand-coral/10 p-3 rounded-2xl w-12 h-12 flex items-center justify-center text-brand-coral">
            <BookOpen className="w-6 h-6" />
          </div>
          <h3 className="font-display font-bold text-brand-deep text-lg">1. Content Simplification</h3>
          <p className="text-brand-brown text-sm leading-relaxed">
            We review medical publications from established pediatric associations, stripping away dense clinical jargon and replacing it with simple, warm vocabulary.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2} className="bg-brand-white border border-brand-coral/15 rounded-3xl p-6 md:p-8 shadow-soft space-y-4">
          <div className="bg-brand-coral/10 p-3 rounded-2xl w-12 h-12 flex items-center justify-center text-brand-coral">
            <Heart className="w-6 h-6" />
          </div>
          <h3 className="font-display font-bold text-brand-deep text-lg">2. Caregiver Empathy</h3>
          <p className="text-brand-brown text-sm leading-relaxed">
            We recognize that parents of preterm infants face unique emotional strain. We structure our guides to comfort and reassure parents, avoiding fear-based language.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.3} className="bg-brand-white border border-brand-coral/15 rounded-3xl p-6 md:p-8 shadow-soft space-y-4">
          <div className="bg-brand-coral/10 p-3 rounded-2xl w-12 h-12 flex items-center justify-center text-brand-coral">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="font-display font-bold text-brand-deep text-lg">3. Strict Safety Limits</h3>
          <p className="text-brand-brown text-sm leading-relaxed">
            We maintain clear educational boundaries. Our materials emphasize general safety rules and prepare parents to consult pediatricians, rather than self-diagnosing.
          </p>
        </ScrollReveal>
      </section>

      {/* 3. STEPPED PROCESS */}
      <section className="bg-brand-rose/20 rounded-3xl p-8 md:p-12 border border-brand-coral/15 space-y-8">
        <ScrollReveal direction="up">
          <SectionHeading
            subtitle="Content Review"
            title="Our Content Development Process"
            centered={false}
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-brand-brown text-sm md:text-base leading-relaxed">
          <div className="space-y-4">
            <h3 className="font-display font-bold text-brand-deep text-base">
              Step 1: Guideline Analysis
            </h3>
            <p>
              Our editorial team reads established public health guidelines regarding neonatal care, thermal boundaries, lactation, and motor development charts.
            </p>
            <h3 className="font-display font-bold text-brand-deep text-base">
              Step 2: Copywriting and Adaptations
            </h3>
            <p>
              We draft the content in Indian English, adjusting measurements and terms (like room temperatures in Celsius and weight parameters in grams) to match the needs of Indian households.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-display font-bold text-brand-deep text-base">
              Step 3: Medical Validation Checks
            </h3>
            <p>
              We verify that the drafted guides contain no clinical claims, diagnoses, prescription promises, or medical outcome guarantees. We ensure that pediatric contact warnings are clearly visible.
            </p>
            <h3 className="font-display font-bold text-brand-deep text-base">
              Step 4: Layout and Formatting
            </h3>
            <p>
              We format the guide with clear section headings, structured bullet points, and tabbed checklists to ensure readability for tired, busy caregivers.
            </p>
          </div>
        </div>
      </section>

      {/* 4. ACTIONS */}
      <section className="text-center space-y-6 max-w-3xl mx-auto">
        <ScrollReveal direction="up" className="space-y-6">
          <DisclaimerBox />
          <h2 className="text-2xl font-display font-extrabold text-brand-deep">
            Review Our Materials
          </h2>
          <p className="text-brand-brown text-sm md:text-base">
            Check out our Resource Library to download checklists, logs, and worksheets developed using our structured educational approach.
          </p>
          <div className="pt-2">
            <Button href="/resources/" id="approach-resources-btn">
              Explore Resource Library
            </Button>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}

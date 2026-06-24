'use client';

import React from 'react';
import { Heart, Activity } from 'lucide-react';
import ServiceCard from '@/components/ui/ServiceCard';
import DisclaimerBox from '@/components/ui/DisclaimerBox';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/animation/ScrollReveal';
import servicesData from '@/data/services.json';

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16 md:space-y-24" id="services-page">
      
      {/* 1. HERO SECTION */}
      <section className="text-center max-w-3xl mx-auto space-y-6">
        <ScrollReveal direction="up">
          <span className="text-xs md:text-sm font-sans font-bold tracking-widest uppercase text-brand-coral">
            Educational Services
          </span>
          <h1 className="text-3xl md:text-5xl font-display font-extrabold text-brand-deep mt-2 tracking-tight">
            Educational Topics & Care Guides
          </h1>
          <p className="text-brand-brown text-base md:text-lg leading-relaxed mt-4">
            Prematurite Digital Health provides evidence-based educational materials covering premature baby care, NICU support, feeding awareness, and growth monitoring.
          </p>
        </ScrollReveal>
      </section>

      {/* 2. GRID OF 12 SERVICES */}
      <section className="space-y-10">
        <ScrollReveal direction="up">
          <SectionHeading
            subtitle="Topic Directories"
            title="Browse Our 12 Core Education Programs"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ScrollReveal key={service.slug} direction="up" delay={index * 0.05}>
              <ServiceCard service={service} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 3. MEDICAL DISCLAIMER & SUPPORT POSITIONING */}
      <section className="space-y-6 max-w-3xl mx-auto">
        <DisclaimerBox />
        <ScrollReveal direction="up" className="text-center pt-4">
          <p className="text-brand-brown text-xs md:text-sm max-w-xl mx-auto mb-6">
            Our topics are developed under the advice of clinical guidelines. We do not provide clinical diagnostics, treatment formulas, or online prescriptions. Please consult your pediatrician for all baby care decisions.
          </p>
        </ScrollReveal>
      </section>

    </div>
  );
}

'use client';

import React from 'react';
import { Heart, Users, ShieldAlert, Award } from 'lucide-react';
import Button from '@/components/ui/Button';
import DisclaimerBox from '@/components/ui/DisclaimerBox';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/animation/ScrollReveal';

export default function ParentSupportPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16 md:space-y-24" id="parent-support-page">
      
      {/* 1. HERO SECTION */}
      <section className="text-center max-w-3xl mx-auto space-y-6">
        <ScrollReveal direction="up">
          <span className="text-xs md:text-sm font-sans font-bold tracking-widest uppercase text-brand-coral">
            Educational Guide
          </span>
          <h1 className="text-3xl md:text-5xl font-display font-extrabold text-brand-deep mt-2 tracking-tight">
            Parent Mental and Emotional Support
          </h1>
          <p className="text-brand-brown text-base md:text-lg leading-relaxed mt-4">
            Understanding caregiver stress, managing anxiety, and finding supportive, practical coping strategies for you and your family.
          </p>
        </ScrollReveal>
      </section>

      {/* 2. THE EMOTIONAL JOURNEY */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <ScrollReveal direction="right" className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-display font-extrabold text-brand-deep">
            Managing Caregiver Stress
          </h2>
          <p className="text-brand-brown text-sm md:text-base leading-relaxed">
            Preterm delivery is a sudden event that often leaves parents feeling unprepared and overwhelmed. Navigating the hospital environment, monitoring alarms, and adjusting to demanding home care schedules can cause significant emotional strain.
          </p>
          <p className="text-brand-brown text-sm md:text-base leading-relaxed">
            It is common to experience worry, confusion, or physical exhaustion. Understanding that these feelings are a normal physiological response to stress is the first step. Protecting your own well-being is vital for supporting your baby's development.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="left" className="bg-brand-rose/40 rounded-3xl p-8 border border-brand-coral/15 space-y-4">
          <h3 className="font-display font-bold text-brand-deep text-lg">
            Supporting Families Empathically
          </h3>
          <p className="text-brand-brown text-xs md:text-sm leading-relaxed">
            Our educational materials help families manage anxiety by replacing uncertainty with structured information. When parents understand how incubator monitors function or how to calculate corrected milestones, their confidence increases, reducing overall stress.
          </p>
          <DisclaimerBox className="bg-brand-white/80" />
        </ScrollReveal>
      </section>

      {/* 3. COPING STRATEGIES */}
      <section className="bg-brand-white border border-brand-coral/15 rounded-3xl p-8 md:p-12 shadow-soft space-y-8">
        <ScrollReveal direction="up">
          <SectionHeading
            subtitle="Coping Methods"
            title="Practical Coping Strategies"
            centered={false}
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-brand-brown text-sm md:text-base leading-relaxed">
          <div className="space-y-4">
            <h3 className="font-display font-bold text-brand-deep text-base">
              Share Caregiving Duties
            </h3>
            <p>
              Avoid putting all monitoring and holding responsibilities on a single parent. Divide care duties and schedule shifts for checkups, diaper logs, and feeding sessions. Ensuring both parents get regular rest is critical for infant safety.
            </p>
            <h3 className="font-display font-bold text-brand-deep text-base">
              Involve Partners in KMC
            </h3>
            <p>
              Fathers and partners can practice skin-to-skin Kangaroo Mother Care. Paternal KMC provides thermal regulation, heart rate stabilization, and soothing benefits, while offering the mother valuable time to rest or express breast milk.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-display font-bold text-brand-deep text-base">
              Educate Extended Family Members
            </h3>
            <p>
              Share clear guidelines on nursery sanitation, visitor rules, and temperature control with grandparents and helpers. Aligning caregiving expectations reduces household conflict and ensures a consistent, quiet nursery environment.
            </p>
            <h3 className="font-display font-bold text-brand-deep text-base">
              Seek Clinical Mental Support
            </h3>
            <p>
              Caring for a preterm baby is emotionally demanding. Seek guidance from qualified counselors, mental health professionals, or medical teams if you experience severe anxiety, persistent sadness, insomnia, or an inability to cope with daily caregiving.
            </p>
          </div>
        </div>
      </section>

      {/* 4. ACTIONS & CTAS */}
      <section className="space-y-6 text-center max-w-3xl mx-auto">
        <ScrollReveal direction="up" className="space-y-6">
          <h2 className="text-2xl font-display font-extrabold text-brand-deep">
            Explore Fictional Parent Scenarios
          </h2>
          <p className="text-brand-brown text-sm md:text-base">
            Read our educational parent stories detailing how Indian families managed anxiety, divided night shifts, and communicated with neonatologists during the NICU transition.
          </p>
          <div className="flex justify-center gap-4">
            <Button href="/parent-stories/" id="support-stories-btn">
              Read Parent Stories
            </Button>
            <Button href="/contact/" variant="outline" id="support-contact-btn">
              Send an Inquiry
            </Button>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}

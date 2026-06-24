'use client';

import React from 'react';
import Link from 'next/link';
import { Calendar, HelpCircle, Activity, ChevronRight, ShieldAlert } from 'lucide-react';
import Button from '@/components/ui/Button';
import DisclaimerBox from '@/components/ui/DisclaimerBox';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/animation/ScrollReveal';

export default function WhatIsPrematurity() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16 md:space-y-24" id="prematurity-page">
      
      {/* 1. HERO SECTION */}
      <section className="text-center max-w-3xl mx-auto space-y-6">
        <ScrollReveal direction="up">
          <span className="text-xs md:text-sm font-sans font-bold tracking-widest uppercase text-brand-coral">
            Educational Guide
          </span>
          <h1 className="text-3xl md:text-5xl font-display font-extrabold text-brand-deep mt-2 tracking-tight">
            What is Prematurity?
          </h1>
          <p className="text-brand-brown text-base md:text-lg leading-relaxed mt-4">
            Understanding preterm birth, medical classifications, and developmental timelines is the first step in providing confident care for your baby.
          </p>
        </ScrollReveal>
      </section>

      {/* 2. MAIN DEFINITIONS */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <ScrollReveal direction="right" className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-display font-extrabold text-brand-deep">
            Understanding Preterm Birth
          </h2>
          <p className="text-brand-brown text-sm md:text-base leading-relaxed">
            A standard pregnancy timeframe lasts approximately forty weeks. When a baby is delivered before completing thirty-seven weeks of gestation, the birth is defined as premature or preterm. Because premature infants have had less developmental time in the uterus, their physical systems—including their lungs, digestive tract, brain, and skin—are in early growth stages.
          </p>
          <p className="text-brand-brown text-sm md:text-base leading-relaxed">
            Preterm infants are not simply smaller babies; they have distinct physiological needs. They require specific environment adjustments, structural feeding methods, and strict protection against infections to thrive outside the womb.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="left" className="bg-brand-rose/40 rounded-3xl p-8 border border-brand-coral/15 space-y-4">
          <h3 className="font-display font-bold text-brand-deep text-lg">
            Prematurity Classifications
          </h3>
          <ul className="space-y-3">
            <li className="text-brand-brown text-xs md:text-sm">
              <strong className="text-brand-deep block">Late Preterm:</strong> Born between 34 and 36 completed weeks. They often resemble small full-term babies but still face temperature regulation and feeding challenges.
            </li>
            <li className="text-brand-brown text-xs md:text-sm">
              <strong className="text-brand-deep block">Moderately Preterm:</strong> Born between 32 and 34 weeks of pregnancy, frequently requiring temporary feeding and respiratory support.
            </li>
            <li className="text-brand-brown text-xs md:text-sm">
              <strong className="text-brand-deep block">Very Preterm:</strong> Born before 32 weeks, requiring significant, continuous support in a Neonatal Intensive Care Unit.
            </li>
            <li className="text-brand-brown text-xs md:text-sm">
              <strong className="text-brand-deep block">Extremely Preterm:</strong> Born at or before 28 weeks, requiring advanced clinical interventions in the NICU.
            </li>
          </ul>
        </ScrollReveal>
      </section>

      {/* 3. CORRECTED AGE EXPLANATION */}
      <section className="bg-brand-white border border-brand-coral/15 rounded-3xl p-8 md:p-12 shadow-soft grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-6">
          <ScrollReveal direction="right">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brand-apricot/20 text-brand-deep">
              <Calendar className="w-3.5 h-3.5 mr-1" />
              Corrected Age Calculations
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-extrabold text-brand-deep mt-2">
              How Developmental Milestones are Adjusted
            </h2>
            <p className="text-brand-brown text-sm md:text-base leading-relaxed mt-4">
              Standard developmental charts assess milestones based on chronological age (time since actual birth). However, for premature babies, milestone expectations must be adjusted based on their original expected due date. This adjustment is referred to as **corrected age** or **adjusted age**.
            </p>
            <p className="text-brand-brown text-sm md:text-base leading-relaxed">
              For example, if your baby is chronologically six months old but was born two months early, their corrected age is four months. You should expect them to hit physical and cognitive milestones—such as head control, rolling, or responsive smiling—closer to a typical four-month-old baseline.
            </p>
            <div className="bg-brand-rose rounded-2xl p-4 border border-brand-coral/10 font-mono text-xs text-brand-deep">
              Corrected Age = Chronological Age (Weeks/Months since birth) - Weeks/Months Born Early
            </div>
          </ScrollReveal>
        </div>

        <div className="lg:col-span-5 space-y-4 bg-brand-rose/20 rounded-2xl p-6 border border-brand-coral/10">
          <ScrollReveal direction="left" className="space-y-4">
            <h3 className="font-display font-bold text-brand-deep text-base">
              Why Corrected Age is Important
            </h3>
            <ul className="space-y-2 text-xs md:text-sm text-brand-brown">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-coral flex-shrink-0 mt-1.5 mr-2" />
                <span>Prevents unnecessary parental anxiety regarding missed developmental milestones.</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-coral flex-shrink-0 mt-1.5 mr-2" />
                <span>Provides a realistic tracking chart for pediatricians to monitor motor skills.</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-coral flex-shrink-0 mt-1.5 mr-2" />
                <span>Adjusts nutritional and developmental evaluations during pediatric follow-ups.</span>
              </li>
            </ul>
            <p className="text-xs text-brand-brown/70 italic">
              Most pediatricians recommend calculating corrected age until your child reaches two to two and a half years of age.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. INTERNAL LINKS GRID */}
      <section className="space-y-8">
        <ScrollReveal direction="up">
          <SectionHeading
            subtitle="Explore Care Pillars"
            title="Core Areas of Premature Baby Care"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <ScrollReveal direction="up" delay={0.1} className="bg-brand-white border border-brand-coral/15 rounded-2xl p-6 shadow-soft hover:border-brand-coral/30 hover:shadow-glow transition-all duration-300">
            <h3 className="font-display font-bold text-brand-deep text-base mb-2">Baby Care Basics</h3>
            <p className="text-brand-brown text-xs mb-4">Learn about nursery temperature adjustments, skin hygiene, and safe sleep habits.</p>
            <Link href="/premature-baby-care/" className="inline-flex items-center text-xs font-bold text-brand-coral hover:underline">
              Read Guide <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
            </Link>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2} className="bg-brand-white border border-brand-coral/15 rounded-2xl p-6 shadow-soft hover:border-brand-coral/30 hover:shadow-glow transition-all duration-300">
            <h3 className="font-display font-bold text-brand-deep text-base mb-2">NICU Support</h3>
            <p className="text-brand-brown text-xs mb-4">Understand NICU monitors, equipment functions, and daily parent-nurse interaction.</p>
            <Link href="/nicu-journey/" className="inline-flex items-center text-xs font-bold text-brand-coral hover:underline">
              Read Guide <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
            </Link>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3} className="bg-brand-white border border-brand-coral/15 rounded-2xl p-6 shadow-soft hover:border-brand-coral/30 hover:shadow-glow transition-all duration-300">
            <h3 className="font-display font-bold text-brand-deep text-base mb-2">Feeding Awareness</h3>
            <p className="text-brand-brown text-xs mb-4">Explore breast milk expression, gavage tube support, and oral feeding cues.</p>
            <Link href="/feeding-nutrition/" className="inline-flex items-center text-xs font-bold text-brand-coral hover:underline">
              Read Guide <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
            </Link>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.4} className="bg-brand-white border border-brand-coral/15 rounded-2xl p-6 shadow-soft hover:border-brand-coral/30 hover:shadow-glow transition-all duration-300">
            <h3 className="font-display font-bold text-brand-deep text-base mb-2">Post-Discharge Care</h3>
            <p className="text-brand-brown text-xs mb-4">Transition home smoothly by limiting visitors, keeping logs, and tracking feeds.</p>
            <Link href="/post-discharge-care/" className="inline-flex items-center text-xs font-bold text-brand-coral hover:underline">
              Read Guide <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. DISCLAIMER & CALL TO ACTION */}
      <section className="space-y-6">
        <ScrollReveal direction="up" className="max-w-3xl mx-auto space-y-6">
          <DisclaimerBox />
          <div className="text-center pt-4">
            <h3 className="font-display font-bold text-brand-deep text-lg md:text-xl mb-4">
              Have Questions for Your Pediatrician?
            </h3>
            <p className="text-brand-brown text-xs md:text-sm mb-6">
              Review our structured check-list of questions covering breathing, growth milestone charts, and feeding volume schedules to help prepare for your next clinic visit.
            </p>
            <Button href="/doctor-questions-checklist/" id="prematurity-checklist-btn">
              Explore Doctor Visit Checklist
            </Button>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}

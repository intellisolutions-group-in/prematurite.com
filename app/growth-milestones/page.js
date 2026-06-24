'use client';

import React from 'react';
import { TrendingUp, Calendar, AlertTriangle, ShieldAlert } from 'lucide-react';
import Button from '@/components/ui/Button';
import DisclaimerBox from '@/components/ui/DisclaimerBox';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/animation/ScrollReveal';

import MilestoneSimulator from '@/components/ui/MilestoneSimulator';

export default function GrowthMilestonesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16 md:space-y-24" id="growth-milestones-page">
      
      {/* 1. HERO SECTION */}
      <section className="text-center max-w-3xl mx-auto space-y-6">
        <ScrollReveal direction="up">
          <span className="text-xs md:text-sm font-sans font-bold tracking-widest uppercase text-brand-coral">
            Educational Guide
          </span>
          <h1 className="text-3xl md:text-5xl font-display font-extrabold text-brand-deep mt-2 tracking-tight">
            Growth and Milestone Tracking
          </h1>
          <p className="text-brand-brown text-base md:text-lg leading-relaxed mt-4">
            Learn how to calculate corrected age, track physical growth trends, and set realistic developmental milestone expectations for your baby.
          </p>
        </ScrollReveal>
      </section>

      {/* 2. THE CONCEPT */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <ScrollReveal direction="right" className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-display font-extrabold text-brand-deep">
            Preterm Growth Trajectories
          </h2>
          <p className="text-brand-brown text-sm md:text-base leading-relaxed">
            Premature infants follow distinct physical growth patterns. Immediately after birth, they may experience temporary weight loss followed by a rapid phase of catch-up growth. Pediatricians plot their weight, length, and head circumference on specialized charts (like the Fenton or WHO growth charts).
          </p>
          <p className="text-brand-brown text-sm md:text-base leading-relaxed">
            The clinical goal is to monitor the consistency of the baby's personal growth curve. A steady upward trend on their personalized chart is a strong indicator of adequate nutrition, regardless of whether their absolute weight is lower than standard averages.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="left" className="bg-brand-rose/40 rounded-3xl p-8 border border-brand-coral/15 space-y-4">
          <h3 className="font-display font-bold text-brand-deep text-lg">
            Milestone Adjusted vs. Calendar Age
          </h3>
          <p className="text-brand-brown text-sm leading-relaxed">
            When tracking physical, motor, and social milestones, it is essential to calculate and use the corrected age:
          </p>
          <div className="bg-brand-white/80 rounded-2xl p-4 border border-brand-coral/10 font-mono text-xs text-brand-deep">
            Corrected Age = Actual Age (since birth) - Weeks born early
          </div>
          <p className="text-brand-brown text-xs leading-relaxed">
            For example, if your baby was born 8 weeks early and is now 24 weeks old chronologically, their corrected age is 16 weeks (4 months). You should assess their development using standard milestones for a four-month-old.
          </p>
        </ScrollReveal>
      </section>

      {/* INTERACTIVE SIMULATOR SECTION */}
      <section>
        <ScrollReveal direction="up">
          <MilestoneSimulator />
        </ScrollReveal>
      </section>

      {/* 3. PRACTICAL TRACKER */}
      <section className="bg-brand-white border border-brand-coral/15 rounded-3xl p-8 md:p-12 shadow-soft space-y-8">
        <ScrollReveal direction="up">
          <SectionHeading
            subtitle="Milestones"
            title="Developmental Observations"
            centered={false}
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-brand-brown text-sm md:text-base leading-relaxed">
          <div className="space-y-4">
            <h3 className="font-display font-bold text-brand-deep text-base">
              Motor Skills to Watch
            </h3>
            <p>
              Observe head control when held upright, rolling, arm extensions, grasping objects, and attempts to sit with support. Remember to look for these motor developments within the corrected age window.
            </p>
            <h3 className="font-display font-bold text-brand-deep text-base">
              Sensory and Language Markers
            </h3>
            <p>
              Track responsive smiling, visual tracking of moving objects, responsiveness to names and voices, cooing, and startle responses to sudden noises. Document these milestones in a log.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-display font-bold text-brand-deep text-base">
              Documenting logs
            </h3>
            <p>
              Keep a dedicated notebook or folder to record when you first observe developmental milestones. Taking short video clips of physical movements can be highly helpful for pediatrician reviews.
            </p>
            <h3 className="font-display font-bold text-brand-deep text-base">
              When to Consult Your Pediatrician
            </h3>
            <p>
              Consult your pediatrician if your infant, at their corrected age, does not make eye contact, does not respond to loud sounds, exhibits persistent muscle stiffness or extreme floppiness, or loses previously acquired skills.
            </p>
          </div>
        </div>
      </section>

      {/* 4. DISCLAIMER & ACTION */}
      <section className="space-y-6">
        <ScrollReveal direction="up" className="max-w-3xl mx-auto space-y-6 text-center">
          <DisclaimerBox />
          <h3 className="font-display font-bold text-brand-deep text-lg md:text-xl">
            Need structured logs or worksheets?
          </h3>
          <p className="text-brand-brown text-xs md:text-sm">
            Visit our Resource Library to download printable milestone sheets, pediatric appointment trackers, and daily care log templates for educational use.
          </p>
          <div className="flex justify-center gap-4">
            <Button href="/resources/" id="growth-resources-btn">
              Browse Resource Library
            </Button>
            <Button href="/doctor-questions-checklist/" variant="outline" id="growth-checklist-btn">
              Explore Doctor Checklist
            </Button>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}

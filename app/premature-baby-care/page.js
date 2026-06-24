'use client';

import React from 'react';
import { Home, Thermometer, Wind, ShieldAlert, Heart, Calendar } from 'lucide-react';
import Button from '@/components/ui/Button';
import DisclaimerBox from '@/components/ui/DisclaimerBox';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/animation/ScrollReveal';

export default function PrematureBabyCarePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16 md:space-y-24" id="baby-care-page">
      
      {/* 1. HERO SECTION */}
      <section className="text-center max-w-3xl mx-auto space-y-6">
        <ScrollReveal direction="up">
          <span className="text-xs md:text-sm font-sans font-bold tracking-widest uppercase text-brand-coral">
            Educational Guide
          </span>
          <h1 className="text-3xl md:text-5xl font-display font-extrabold text-brand-deep mt-2 tracking-tight">
            Premature Baby Care at Home
          </h1>
          <p className="text-brand-brown text-base md:text-lg leading-relaxed mt-4">
            Practical, evidence-based guidelines to help parents adjust their home environment, prevent infections, and track infant comfort safely.
          </p>
        </ScrollReveal>
      </section>

      {/* 2. THE CORE AREAS */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <ScrollReveal direction="right" className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-display font-extrabold text-brand-deep">
            Transitioning to Home Care
          </h2>
          <p className="text-brand-brown text-sm md:text-base leading-relaxed">
            Transitioning a premature baby from the hospital neonatal ward to home is a major developmental milestone, but it requires changes in your daily routines. Because premature babies have had less time to build up their immune defenses and body fat, their tolerance for environmental changes is lower than that of full-term infants.
          </p>
          <p className="text-brand-brown text-sm md:text-base leading-relaxed">
            Parents must focus on three primary pillars of home care: maintaining warm room temperatures, enforcing strict hand hygiene, and setting up a quiet nursery that supports deep sleep.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="left" className="bg-brand-rose/40 rounded-3xl p-8 border border-brand-coral/15 space-y-6">
          <div className="flex items-start space-x-3">
            <Thermometer className="w-6 h-6 text-brand-coral flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-display font-bold text-brand-deep text-base">Thermal Preservation</h3>
              <p className="text-brand-brown text-xs md:text-sm mt-1">
                Maintain room temperatures between 22 and 24 degrees Celsius. Keep cribs away from open windows and drafts. Check core temperature by feeling the back of the neck.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Wind className="w-6 h-6 text-brand-coral flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-display font-bold text-brand-deep text-base">Air Quality Control</h3>
              <p className="text-brand-brown text-xs md:text-sm mt-1">
                Ensure the home is completely smoke-free. Avoid aerosols, perfumes, and strong chemical cleaners in the nursery, as these irritate preterm respiratory passages.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 3. PRACTICAL CHECKLIST */}
      <section className="bg-brand-white border border-brand-coral/15 rounded-3xl p-8 md:p-12 shadow-soft space-y-8">
        <ScrollReveal direction="up">
          <SectionHeading
            subtitle="Home Management"
            title="Step-by-Step Care Guidelines"
            centered={false}
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-brand-brown text-sm md:text-base leading-relaxed">
          <div className="space-y-4">
            <h3 className="font-display font-bold text-brand-deep text-base">
              1. Enforce Strict Hygiene
            </h3>
            <p>
              Preterm infants are highly vulnerable to common viruses. Enforce hand sanitizing or soap washing from the wrist to the elbow for all primary caregivers before touching the baby. Clean diaper changing mats and feeding items thoroughly after each use.
            </p>
            <h3 className="font-display font-bold text-brand-deep text-base">
              2. Restrict Visitors and Outings
            </h3>
            <p>
              Limit visits to close family members during the first month at home. Ask guests who are unwell, even with a mild cold, to postpone visits. Avoid crowded public spaces, shopping centers, or public transport until cleared by your pediatrician.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-display font-bold text-brand-deep text-base">
              3. Support Safe Sleep
            </h3>
            <p>
              Place your baby on their back on a firm, flat mattress in their own crib. Do not place pillows, bumpers, stuffed toys, or loose, heavy blankets in the crib. Dress the baby in warm, breathable sleeping sacks or layers to preserve body warmth.
            </p>
            <h3 className="font-display font-bold text-brand-deep text-base">
              4. Coordinate Feedings and Logs
            </h3>
            <p>
              Maintain a detailed log of feeding times, volumes (if bottle-feeding), and the duration of nursing sessions. Count daily wet and dirty diapers. Preterm infants should typically wet at least six diapers in twenty-four hours once home.
            </p>
          </div>
        </div>
      </section>

      {/* 4. INTERNAL LINKS & CTAs */}
      <section className="space-y-8 max-w-3xl mx-auto text-center">
        <ScrollReveal direction="up" className="space-y-6">
          <DisclaimerBox />
          <h3 className="font-display font-bold text-brand-deep text-lg md:text-xl">
            Want to learn more about feeding or growth tracking?
          </h3>
          <p className="text-brand-brown text-xs md:text-sm">
            Read our dedicated guides explaining feeding cue observation and how to use corrected age calculations to track physical growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/feeding-nutrition/" variant="primary" id="baby-care-feeding-link">
              Explore Feeding & Nutrition
            </Button>
            <Button href="/growth-milestones/" variant="outline" id="baby-care-milestones-link">
              Explore Milestone Tracking
            </Button>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}

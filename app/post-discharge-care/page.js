'use client';

import React from 'react';
import { Home, LogIn, Calendar, Users, ShieldAlert, Heart } from 'lucide-react';
import Button from '@/components/ui/Button';
import DisclaimerBox from '@/components/ui/DisclaimerBox';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/animation/ScrollReveal';

export default function PostDischargeCarePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16 md:space-y-24" id="post-discharge-page">
      
      {/* 1. HERO SECTION */}
      <section className="text-center max-w-3xl mx-auto space-y-6">
        <ScrollReveal direction="up">
          <span className="text-xs md:text-sm font-sans font-bold tracking-widest uppercase text-brand-coral">
            Educational Guide
          </span>
          <h1 className="text-3xl md:text-5xl font-display font-extrabold text-brand-deep mt-2 tracking-tight">
            Post-Discharge Home Care
          </h1>
          <p className="text-brand-brown text-base md:text-lg leading-relaxed mt-4">
            A comprehensive checklist to help parents transition their baby from the NICU to home, manage visitors, and schedule pediatric follow-up visits.
          </p>
        </ScrollReveal>
      </section>

      {/* 2. THE TRANSITION */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <ScrollReveal direction="right" className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-display font-extrabold text-brand-deep">
            Bringing Your Preterm Baby Home
          </h2>
          <p className="text-brand-brown text-sm md:text-base leading-relaxed">
            Leaving the hospital marks the successful completion of the NICU phase, but it marks the start of a highly vigilant care phase at home. A preterm baby's lungs, gut, and immune systems are still maturing, meaning home environments must be managed carefully.
          </p>
          <p className="text-brand-brown text-sm md:text-base leading-relaxed">
            Parents must structure their schedules around clinical follow-up appointments, prepare baby-safe nurseries, log feeding parameters daily, and maintain strict boundary controls regarding who interacts with the baby.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="left" className="bg-brand-rose/40 rounded-3xl p-8 border border-brand-coral/15 space-y-4">
          <h3 className="font-display font-bold text-brand-deep text-lg">
            Essential Discharge Criteria
          </h3>
          <p className="text-brand-brown text-sm leading-relaxed">
            Prior to discharge, the neonatal team typically verifies that the baby:
          </p>
          <ul className="space-y-2 text-xs md:text-sm text-brand-brown">
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-coral flex-shrink-0 mt-1.5 mr-2" />
              <span>Maintains body temperature in an open crib.</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-coral flex-shrink-0 mt-1.5 mr-2" />
              <span>Takes all feeds orally (breast or bottle) without breathing stress.</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-coral flex-shrink-0 mt-1.5 mr-2" />
              <span>Shows steady daily weight gain.</span>
            </li>
          </ul>
        </ScrollReveal>
      </section>

      {/* 3. HOME CHECKLIST */}
      <section className="bg-brand-white border border-brand-coral/15 rounded-3xl p-8 md:p-12 shadow-soft space-y-8">
        <ScrollReveal direction="up">
          <SectionHeading
            subtitle="Home Management"
            title="The Post-Discharge Care Checklist"
            centered={false}
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-brand-brown text-sm md:text-base leading-relaxed">
          <div className="space-y-4">
            <h3 className="font-display font-bold text-brand-deep text-base">
              Nursery Setup & Heat Control
            </h3>
            <p>
              Keep the room between 22 and 24 degrees Celsius. Use a room thermometer to track fluctuations. Dress the baby in layers (one more than what adults find comfortable). Place cribs away from AC units or direct drafts.
            </p>
            <h3 className="font-display font-bold text-brand-deep text-base">
              Enforcing Boundary Control
            </h3>
            <p>
              Enforce strict rules: restrict visits to immediate family members for the first 4 to 6 weeks. Require everyone who enters the nursery to wash hands to the elbows. Do not take the baby to crowded markets or public gatherings.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-display font-bold text-brand-deep text-base">
              Scheduling Follow-up Checkups
            </h3>
            <p>
              The first pediatric follow-up is typically scheduled within 2 to 4 days of discharge. These checkups allow the pediatrician to monitor growth percentiles, adjust supplements, check breathing patterns, and plan future vaccines.
            </p>
            <h3 className="font-display font-bold text-brand-deep text-base">
              Daily Feed & Diaper logs
            </h3>
            <p>
              Keep detailed logs of feeding times, volumes, and durations. Track wet and dirty diapers. A decline in wet diapers (fewer than six in twenty-four hours) is an indicator of dehydration that requires medical review.
            </p>
          </div>
        </div>
      </section>

      {/* 4. EMERGENCY WARNINGS & CTAS */}
      <section className="space-y-6">
        <ScrollReveal direction="up" className="max-w-3xl mx-auto space-y-6 text-center">
          <DisclaimerBox />
          <h3 className="font-display font-bold text-brand-deep text-lg md:text-xl">
            Identifying Critical Warning Signs
          </h3>
          <p className="text-brand-brown text-xs md:text-sm">
            Immediately contact emergency services or your pediatrician if your baby has a fever, breathes rapidly, shows chest retractions, has blue skin discoloration, refuses multiple feeds, or is unusually difficult to wake.
          </p>
          <div className="pt-2">
            <Button href="/doctor-questions-checklist/" variant="outline" id="post-discharge-checklist-btn">
              Explore Discharge Questions Checklist
            </Button>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}

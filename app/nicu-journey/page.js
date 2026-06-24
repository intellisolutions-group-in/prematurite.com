'use client';

import React from 'react';
import { Shield, ShieldAlert, Heart, Calendar, HelpCircle, Activity } from 'lucide-react';
import Button from '@/components/ui/Button';
import DisclaimerBox from '@/components/ui/DisclaimerBox';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/animation/ScrollReveal';

export default function NICUJourneyPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16 md:space-y-24" id="nicu-journey-page">
      
      {/* 1. HERO SECTION */}
      <section className="text-center max-w-3xl mx-auto space-y-6">
        <ScrollReveal direction="up">
          <span className="text-xs md:text-sm font-sans font-bold tracking-widest uppercase text-brand-coral">
            Educational Guide
          </span>
          <h1 className="text-3xl md:text-5xl font-display font-extrabold text-brand-deep mt-2 tracking-tight">
            Understanding the NICU Journey
          </h1>
          <p className="text-brand-brown text-base md:text-lg leading-relaxed mt-4">
            An educational guide to help parents navigate the Neonatal Intensive Care Unit, understand equipment, and prepare for discharge.
          </p>
        </ScrollReveal>
      </section>

      {/* 2. THE NICU ENVIRONMENT */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <ScrollReveal direction="right" className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-display font-extrabold text-brand-deep">
            Navigating the Neonatal Unit
          </h2>
          <p className="text-brand-brown text-sm md:text-base leading-relaxed">
            The Neonatal Intensive Care Unit (NICU) is a highly specialized hospital environment designed to support babies born early or requiring focused medical care. Seeing your baby surrounded by medical devices, tubes, and alarms can be emotionally challenging.
          </p>
          <p className="text-brand-brown text-sm md:text-base leading-relaxed">
            Learning about the supportive equipment, understanding basic terminology, and collaborating with the neonatal nursing staff help reduce stress. Your active presence is a vital part of your baby's recovery process.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="left" className="bg-brand-rose/40 rounded-3xl p-8 border border-brand-coral/15 space-y-4">
          <h3 className="font-display font-bold text-brand-deep text-lg">
            Common NICU Terms Explained
          </h3>
          <ul className="space-y-3">
            <li className="text-brand-brown text-xs md:text-sm">
              <strong className="text-brand-deep block">Incubator:</strong> A clear, closed crib that provides a warm, humidified, and clean environment to help the baby maintain their body temperature.
            </li>
            <li className="text-brand-brown text-xs md:text-sm">
              <strong className="text-brand-deep block">Cardiorespiratory Monitor:</strong> Leads placed on the baby's chest that track heart rate and respiratory patterns continuously.
            </li>
            <li className="text-brand-brown text-xs md:text-sm">
              <strong className="text-brand-deep block">Oxygen Saturation (SpO2):</strong> A small sensor on the hand or foot that measures oxygen levels in the blood.
            </li>
            <li className="text-brand-brown text-xs md:text-sm">
              <strong className="text-brand-deep block">Gavage Feeding Tube:</strong> A small tube passed through the nose or mouth to deliver breast milk directly to the stomach.
            </li>
          </ul>
        </ScrollReveal>
      </section>

      {/* 3. PARENTAL ROLE & INVOLVEMENT */}
      <section className="bg-brand-white border border-brand-coral/15 rounded-3xl p-8 md:p-12 shadow-soft space-y-8">
        <ScrollReveal direction="up">
          <SectionHeading
            subtitle="Parental Role"
            title="How to Stay Involved Daily"
            centered={false}
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-brand-brown text-sm md:text-base leading-relaxed">
          <div className="space-y-4">
            <h3 className="font-display font-bold text-brand-deep text-base">
              1. Practice containment touch
            </h3>
            <p>
              Premature infants can be overstimulated by stroking or constant movement. Instead, place one warm, clean hand still on their head and the other still on their body or feet. This is called a containment hold and helps them feel secure.
            </p>
            <h3 className="font-display font-bold text-brand-deep text-base">
              2. Talk or sing softly
            </h3>
            <p>
              Preterm babies recognize their parents' voices from the womb. Speaking quietly, reading, or humming near the incubator supports their cognitive development and helps soothe their heart rate.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-display font-bold text-brand-deep text-base">
              3. Provide expressed milk
            </h3>
            <p>
              Breast milk contains protective antibodies tailored to the needs of preterm infants. Work with the hospital lactation team to express and store milk, which can be delivered through the feeding tube.
            </p>
            <h3 className="font-display font-bold text-brand-deep text-base">
              4. Prepare for discharge requirements
            </h3>
            <p>
              Discharge planning begins early. Coordinate with the clinical team to learn how to administer scheduled vitamins, check baby temperature, monitor feeding volumes, and set up pediatric appointments.
            </p>
          </div>
        </div>
      </section>

      {/* 4. DISCHARGE CHECKLIST INTRO */}
      <section className="bg-brand-rose/20 rounded-3xl p-8 md:p-12 border border-brand-coral/15 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8 space-y-4">
          <ScrollReveal direction="right">
            <h2 className="text-2xl font-display font-extrabold text-brand-deep">
              Transitioning Home: Discharge Basics
            </h2>
            <p className="text-brand-brown text-sm md:text-base leading-relaxed">
              Before the neonatologist approves discharge, your baby must demonstrate the ability to maintain body temperature in an open crib, feed successfully (breast or bottle) without respiratory distress, and gain weight consistently. Parents will receive training on basic home care routines.
            </p>
          </ScrollReveal>
        </div>
        <div className="lg:col-span-4 flex justify-center lg:justify-end">
          <ScrollReveal direction="left">
            <Button href="/post-discharge-care/" id="nicu-discharge-btn">
              Explore Home Transition
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. DISCLAIMER & QUESTIONS */}
      <section className="space-y-6">
        <ScrollReveal direction="up" className="max-w-3xl mx-auto space-y-6 text-center">
          <DisclaimerBox />
          <h3 className="font-display font-bold text-brand-deep text-lg md:text-xl mt-6">
            Prepare for Doctor Conversations
          </h3>
          <p className="text-brand-brown text-xs md:text-sm">
            Read our structured lists of questions covering breathing equipment, feeding coordinates, and discharge parameters to ask your neonatologist or pediatrician during rounds.
          </p>
          <div className="pt-2">
            <Button href="/doctor-questions-checklist/" variant="outline" id="nicu-questions-btn">
              Review Doctor Questions
            </Button>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}

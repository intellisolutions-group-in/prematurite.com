'use client';

import React from 'react';
import { Droplet, FileText, Heart, ShieldAlert } from 'lucide-react';
import Button from '@/components/ui/Button';
import DisclaimerBox from '@/components/ui/DisclaimerBox';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/animation/ScrollReveal';

export default function FeedingNutritionPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16 md:space-y-24" id="feeding-page">
      
      {/* 1. HERO SECTION */}
      <section className="text-center max-w-3xl mx-auto space-y-6">
        <ScrollReveal direction="up">
          <span className="text-xs md:text-sm font-sans font-bold tracking-widest uppercase text-brand-coral">
            Educational Guide
          </span>
          <h1 className="text-3xl md:text-5xl font-display font-extrabold text-brand-deep mt-2 tracking-tight">
            Feeding and Nutrition Guidance
          </h1>
          <p className="text-brand-brown text-base md:text-lg leading-relaxed mt-4">
            Understanding preterm nutritional requirements, feeding transitions, lactation support, and identifying early hunger cues responsibly.
          </p>
        </ScrollReveal>
      </section>

      {/* 2. THE CORE METABOLIC NEEDS */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <ScrollReveal direction="right" className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-display font-extrabold text-brand-deep">
            Nutritional Requirements of Preterm Babies
          </h2>
          <p className="text-brand-brown text-sm md:text-base leading-relaxed">
            Premature infants miss out on the final weeks of gestation, which is the key period for storing calcium, phosphorus, iron, and subcutaneous fat. Consequently, they require more calories, protein, and minerals per kilogram than full-term babies.
          </p>
          <p className="text-brand-brown text-sm md:text-base leading-relaxed">
            However, their digestive tract is delicate and their sucking and swallowing reflexes are still developing. Feeding programs are carefully designed by neonatologists and clinical nutritionists, starting with minimal amounts to protect the gut, and increasing gradually under close observation.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="left" className="bg-brand-rose/40 rounded-3xl p-8 border border-brand-coral/15 space-y-4">
          <h3 className="font-display font-bold text-brand-deep text-lg">
            Methods of Feeding in the NICU
          </h3>
          <ul className="space-y-3 text-brand-brown text-xs md:text-sm">
            <li>
              <strong className="text-brand-deep block">Intravenous Nutrition (Parenteral):</strong> Delivering glucose, lipids, and amino acids directly to the blood when the baby's gut is not yet ready to process milk.
            </li>
            <li>
              <strong className="text-brand-deep block">Gavage Feeding:</strong> Delivering expressed breast milk or formula through a small, soft tube inserted through the nose or mouth directly into the stomach.
            </li>
            <li>
              <strong className="text-brand-deep block">Oral Trial Feeds:</strong> Transitioning to breast or bottle feeding, which typically begins when the coordination of sucking, swallowing, and breathing develops.
            </li>
          </ul>
        </ScrollReveal>
      </section>

      {/* 3. PRACTICAL SUGGESTIONS */}
      <section className="bg-brand-white border border-brand-coral/15 rounded-3xl p-8 md:p-12 shadow-soft space-y-8">
        <ScrollReveal direction="up">
          <SectionHeading
            subtitle="Feeding Care"
            title="Lactation and Responsive Feeding"
            centered={false}
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-brand-brown text-sm md:text-base leading-relaxed">
          <div className="space-y-4">
            <h3 className="font-display font-bold text-brand-deep text-base">
              Lactation Support for Mothers
            </h3>
            <p>
              Preterm breast milk is exceptionally rich in proteins and antibodies. Expressing milk using a breast pump every two to three hours helps establish a strong supply, ensuring milk is available for your baby's feeds. If maternal breast milk is limited, donor human milk from a certified milk bank is often recommended by neonatologists.
            </p>
            <h3 className="font-display font-bold text-brand-deep text-base">
              Recognizing Hunger Cues
            </h3>
            <p>
              Before infants begin feeding, they demonstrate subtle readiness signs. Watch for hand-to-mouth movements, sucking on pacifiers or fingers, rooting (turning the head searching for the nipple), and waking up alert around feeding times.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-display font-bold text-brand-deep text-base">
              Fortifiers & Supplements
            </h3>
            <p>
              Because preterm babies have extreme calcium and mineral demands, neonatologists often recommend adding Human Milk Fortifiers (HMF) to expressed breast milk. Iron and vitamin D supplements are also commonly prescribed. These are clinical recommendations and must be administered strictly under medical advice.
            </p>
            <h3 className="font-display font-bold text-brand-deep text-base">
              Monitoring Tolerance
            </h3>
            <p>
              Log feed schedules, volumes, and diaper counts daily. Preterm babies can have mild reflux, but certain signs require attention. Keep feeding logs organized to share during follow-up visits with your pediatrician.
            </p>
          </div>
        </div>
      </section>

      {/* 4. CLINICAL CALLOUT & DISCLAIMER */}
      <section className="space-y-6">
        <ScrollReveal direction="up" className="max-w-3xl mx-auto space-y-6 text-center">
          <DisclaimerBox />
          <h3 className="font-display font-bold text-brand-deep text-lg md:text-xl">
            When to Contact Your Pediatrician
          </h3>
          <p className="text-brand-brown text-xs md:text-sm">
            Contact your pediatrician or seek immediate medical support if your infant experiences persistent vomiting, a hard or distended abdomen, blood in the stool, or refuses feeds for multiple sessions.
          </p>
          <div className="pt-2">
            <Button href="/doctor-questions-checklist/" variant="outline" id="feeding-checklist-btn">
              Explore Feeding Questions Checklist
            </Button>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}

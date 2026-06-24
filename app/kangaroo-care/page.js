'use client';

import React from 'react';
import { Heart, Accessibility, ShieldAlert, CheckCircle } from 'lucide-react';
import Button from '@/components/ui/Button';
import DisclaimerBox from '@/components/ui/DisclaimerBox';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/animation/ScrollReveal';

export default function KangarooCarePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16 md:space-y-24" id="kangaroo-care-page">
      
      {/* 1. HERO SECTION */}
      <section className="text-center max-w-3xl mx-auto space-y-6">
        <ScrollReveal direction="up">
          <span className="text-xs md:text-sm font-sans font-bold tracking-widest uppercase text-brand-coral">
            Educational Guide
          </span>
          <h1 className="text-3xl md:text-5xl font-display font-extrabold text-brand-deep mt-2 tracking-tight">
            Kangaroo Mother Care (KMC)
          </h1>
          <p className="text-brand-brown text-base md:text-lg leading-relaxed mt-4">
            Understanding the biological benefits of skin-to-skin contact, step-by-step holding techniques, and safety guidelines for parents.
          </p>
        </ScrollReveal>
      </section>

      {/* 2. THE CORE SCIENCE */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <ScrollReveal direction="right" className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-display font-extrabold text-brand-deep">
            The Science of Skin-to-Skin Warmth
          </h2>
          <p className="text-brand-brown text-sm md:text-base leading-relaxed">
            Kangaroo Mother Care (KMC) involves holding your diaper-clad premature baby upright against your bare chest. This direct skin-to-skin contact initiates a process called thermal synchrony, where the parent's chest temperature adapts dynamically to warm a cool baby or cool a warm baby.
          </p>
          <p className="text-brand-brown text-sm md:text-base leading-relaxed">
            KMC also triggers the release of oxytocin in the parent, which helps reduce maternal stress, stimulates milk production, and promotes deeper sleep cycles in the infant. It is a highly effective, low-cost care standard recognized globally.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="left" className="bg-brand-rose/40 rounded-3xl p-8 border border-brand-coral/15 space-y-4">
          <h3 className="font-display font-bold text-brand-deep text-lg">
            Physiological Benefits of KMC
          </h3>
          <ul className="space-y-2 text-xs md:text-sm text-brand-brown">
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-brand-coral mr-2 flex-shrink-0 mt-0.5" />
              <span>Stabilizes infant heart rate and breathing patterns.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-brand-coral mr-2 flex-shrink-0 mt-0.5" />
              <span>Improves thermal regulation, reducing cold stress.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-brand-coral mr-2 flex-shrink-0 mt-0.5" />
              <span>Promotes longer periods of deep sleep, which supports brain maturation.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-brand-coral mr-2 flex-shrink-0 mt-0.5" />
              <span>Stimulates milk production and simplifies feeding coordinate transitions.</span>
            </li>
          </ul>
        </ScrollReveal>
      </section>

      {/* 3. STEP-BY-STEP TECHNIQUE */}
      <section className="bg-brand-white border border-brand-coral/15 rounded-3xl p-8 md:p-12 shadow-soft space-y-8">
        <ScrollReveal direction="up">
          <SectionHeading
            subtitle="Practice Guide"
            title="How to Practice Kangaroo Care Safely"
            centered={false}
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-brand-brown text-sm md:text-base leading-relaxed">
          <div className="space-y-4">
            <h3 className="font-display font-bold text-brand-deep text-base">
              1. Preparation & Clothing
            </h3>
            <p>
              Wear a front-opening shirt or wrap. Ensure your skin is clean and free of strong perfumes, lotions, or tobacco odors. Place the baby dressed only in a diaper and a warm cap directly on your bare chest.
            </p>
            <h3 className="font-display font-bold text-brand-deep text-base">
              2. Positioning the Baby
            </h3>
            <p>
              Place the baby in a vertical, upright position against your chest. Turn their head to one side with the neck slightly extended to keep the airway open. Position their legs and arms in a flexed "frog" position.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-display font-bold text-brand-deep text-base">
              3. Securing & Support
            </h3>
            <p>
              Wrap your shirt or a specialized binder securely around the baby to support their body. Ensure the baby's nose and mouth are never covered and that their airway remains clear and unobstructed at all times.
            </p>
            <h3 className="font-display font-bold text-brand-deep text-base">
              4. Sharing with Partners
            </h3>
            <p>
              Fathers and partners are encouraged to practice skin-to-skin contact. Paternal KMC provides the same physiological stability, heart rate regulation, and bonding benefits, while helping share caregiving responsibilities.
            </p>
          </div>
        </div>
      </section>

      {/* 4. HOSPITAL & SAFETY ADVICE */}
      <section className="space-y-6">
        <ScrollReveal direction="up" className="max-w-3xl mx-auto space-y-6 text-center">
          <DisclaimerBox />
          <h3 className="font-display font-bold text-brand-deep text-lg md:text-xl">
            Hospital Guidance Requirement
          </h3>
          <p className="text-brand-brown text-xs md:text-sm">
            KMC should only be initiated under the direct advice and supervision of your hospital neonatal care team or pediatrician. Ensure you understand when your baby is stable enough for skin-to-skin sessions.
          </p>
          <div className="pt-2">
            <Button href="/services/kangaroo-care-education/" id="kmc-details-link">
              Explore Kangaroo Care Education Program
            </Button>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}

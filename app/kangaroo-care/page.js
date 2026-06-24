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

      {/* 4. NEW CONTENT: PATERNAL POSITIONING & SESSION LOGS */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <ScrollReveal direction="right" className="bg-brand-rose/40 border border-brand-coral/15 rounded-3xl p-6 md:p-8 space-y-6">
          <h3 className="font-display font-bold text-brand-deep text-lg md:text-xl">
            Paternal Kangaroo Care Positioning Guide
          </h3>
          <p className="text-brand-brown text-xs md:text-sm leading-relaxed">
            Fathers can establish the same skin-to-skin connection. Follow these tailored adjustment tips:
          </p>
          <ul className="space-y-3">
            <li className="text-brand-brown text-xs md:text-sm border-b border-brand-coral/10 pb-2">
              <strong className="text-brand-deep block font-display">Acoustic Comfort:</strong> Preterm infants are comforted by the lower pitch of paternal vocal tones. Speaking or humming softly during KMC can lower baby heart rate.
            </li>
            <li className="text-brand-brown text-xs md:text-sm border-b border-brand-coral/10 pb-2">
              <strong className="text-brand-deep block font-display">Adjusting Chest contact:</strong> Ensure the father\'s chest hair does not irritate the baby\'s sensitive skin. Placing a soft, clean cotton barrier can help if needed, but direct skin-to-skin contact is preferred.
            </li>
            <li className="text-brand-brown text-xs md:text-sm">
              <strong className="text-brand-deep block font-display">Thermal Monitoring:</strong> Male core chest temperatures can run slightly higher. Check if the baby shows signs of overheating (e.g. flushing or damp hair) and adjust wraps accordingly.
            </li>
          </ul>
        </ScrollReveal>

        <ScrollReveal direction="left" className="bg-brand-white border border-brand-coral/15 rounded-3xl p-6 md:p-8 shadow-soft space-y-6">
          <h3 className="font-display font-bold text-brand-deep text-lg md:text-xl">
            Daily KMC Session Duration Guide
          </h3>
          <p className="text-brand-brown text-xs md:text-sm leading-relaxed">
            Building KMC into your daily routine requires structure. Note these timing parameters:
          </p>
          <div className="space-y-4">
            <div className="border-b border-brand-coral/10 pb-2">
              <strong className="text-brand-deep text-sm block">Minimum Session Length (60 Minutes):</strong>
              <p className="text-brand-brown text-xs">Sessions should last at least one hour continuously. Preterm infants spend significant energy adjusting to transfers; longer sessions allow them to settle into deep sleep.</p>
            </div>
            <div className="border-b border-brand-coral/10 pb-2">
              <strong className="text-brand-deep text-sm block">Target Daily Duration (4 to 8 Hours):</strong>
              <p className="text-brand-brown text-xs">While even short sessions help, clinical benefits (weight gain, stability) scale when parents cumulative KMC practice reaches multiple hours daily.</p>
            </div>
            <div>
              <strong className="text-brand-deep text-sm block">Home Transition KMC:</strong>
              <p className="text-brand-brown text-xs">Continue KMC at home after discharge until your baby shows signs of outgrowing it (e.g., squirming or resisting direct skin contact), usually around 40-42 weeks corrected age.</p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 5. HOSPITAL & SAFETY ADVICE */}
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

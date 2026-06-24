'use client';

import React from 'react';
import DisclaimerBox from '@/components/ui/DisclaimerBox';
import ScrollReveal from '@/components/animation/ScrollReveal';

export default function TermsOfServicePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-8" id="terms-page">
      <ScrollReveal direction="up" className="space-y-4">
        <h1 className="text-3xl md:text-5xl font-display font-extrabold text-brand-deep tracking-tight">
          Terms of Service
        </h1>
        <p className="text-brand-brown text-sm">Last Updated: June 23, 2026</p>
        <div className="h-1 w-12 bg-brand-coral rounded-full mt-4" />
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.1} className="prose prose-stone text-brand-brown text-sm md:text-base leading-relaxed space-y-6">
        <p>
          Welcome to Prematurite Digital Health. By accessing the website prematurite.com, you agree to comply with and be bound by the following terms of service. If you do not agree to these terms, please do not use our website.
        </p>

        <h2 className="font-display font-bold text-brand-deep text-lg md:text-xl mt-6">
          1. Educational Nature of Content
        </h2>
        <p>
          The content provided on Prematurite Digital Health is for educational, informational, and awareness-raising purposes only. **The website does not provide medical diagnoses, treatment plans, prescriptions, clinical counseling, or emergency consultations.** Always consult a qualified pediatrician, neonatologist, or medical professional for health concerns.
        </p>

        <h2 className="font-display font-bold text-brand-deep text-lg md:text-xl mt-6">
          2. Intellectual Property
        </h2>
        <p>
          All educational articles, checklists, logs, images, and brand identifiers on prematurite.com are the property of Prematurite Digital Health. You may view and print resources for personal, non-commercial educational use only. Reproducing, republishing, or distributing content for commercial gain without written approval is prohibited.
        </p>

        <h2 className="font-display font-bold text-brand-deep text-lg md:text-xl mt-6">
          3. Limitation of Liability
        </h2>
        <p>
          Prematurite Digital Health and its editorial team are not liable for any decisions, actions, or outcomes resulting from reading or using the educational materials on this website. Relying on digital guides as a substitute for professional medical checkups is done at your own risk.
        </p>

        <h2 className="font-display font-bold text-brand-deep text-lg md:text-xl mt-6">
          4. Changes to Terms
        </h2>
        <p>
          We reserve the right to modify these terms of service at any time without prior notice. By continuing to use prematurite.com after changes are posted, you accept the modified terms.
        </p>

        <DisclaimerBox className="mt-8" />
      </ScrollReveal>
    </div>
  );
}

'use client';

import React from 'react';
import { Award, ShieldCheck, Heart, Clock, ShieldAlert } from 'lucide-react';
import Button from '@/components/ui/Button';
import DisclaimerBox from '@/components/ui/DisclaimerBox';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/animation/ScrollReveal';

export default function WhyChooseUsPage() {
  const points = [
    {
      icon: Clock,
      title: 'Digital presence since 2003',
      description: 'Our domain, prematurite.com, has carried a focused digital identity since 2003. We represent over twenty years of online commitment to preterm infant and neonatal health education.'
    },
    {
      icon: ShieldCheck,
      title: 'Evidence-based parent education',
      description: 'Every guide, article, and checklist is reviewed against verified clinical guidelines to ensure absolute medical accuracy and parent safety.'
    },
    {
      icon: Heart,
      title: 'Caring, supportive tone',
      description: 'We replace clinical fear and complexity with warm, supportive, and simple vocabulary, helping parents manage caregiver stress and anxiety.'
    },
    {
      icon: Award,
      title: 'Practical tools and checklists',
      description: 'We design actionable worksheets, virtual appointment logs, and diaper checklists that give parents structured tasks during home transitions.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16 md:space-y-24" id="why-choose-us-page">
      
      {/* 1. HERO SECTION */}
      <section className="text-center max-w-3xl mx-auto space-y-6">
        <ScrollReveal direction="up">
          <span className="text-xs md:text-sm font-sans font-bold tracking-widest uppercase text-brand-coral">
            Why Trust Prematurite
          </span>
          <h1 className="text-3xl md:text-5xl font-display font-extrabold text-brand-deep mt-2 tracking-tight">
            Why Choose Prematurite Digital Health?
          </h1>
          <p className="text-brand-brown text-base md:text-lg leading-relaxed mt-4">
            Positioned as India's premium parent education platform, we focus entirely on supportive, clear, and verified digital health resources.
          </p>
        </ScrollReveal>
      </section>

      {/* 2. THE CHOOSE POINTS GRID */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {points.map((pt, idx) => {
          const IconComponent = pt.icon;
          return (
            <ScrollReveal
              key={idx}
              direction="up"
              delay={idx * 0.05}
              className="bg-brand-white border border-brand-coral/15 rounded-3xl p-6 md:p-8 shadow-soft flex items-start space-x-5 hover:border-brand-coral/30 hover:shadow-glow transition-all duration-300"
            >
              <div className="bg-brand-coral/10 p-3 rounded-2xl text-brand-coral flex-shrink-0">
                <IconComponent className="w-6 h-6 stroke-[2]" />
              </div>
              <div className="space-y-2">
                <h3 className="font-display font-bold text-brand-deep text-lg">
                  {pt.title}
                </h3>
                <p className="text-brand-brown text-sm leading-relaxed">
                  {pt.description}
                </p>
              </div>
            </ScrollReveal>
          );
        })}
      </section>

      {/* NEW CONTENT: PARENT RESOURCE COMPARISON MATRIX */}
      <section className="space-y-12 animate-fade-in">
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs md:text-sm font-sans font-bold tracking-widest uppercase text-brand-coral">
            Direct Comparison
          </span>
          <h2 className="text-2xl md:text-4xl font-display font-extrabold text-brand-deep">
            How We Differ From General Parenting Resources
          </h2>
          <p className="text-brand-brown text-sm md:text-base leading-relaxed">
            Understanding the distinction between generalized blogs and our structured, non-commercial education.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" className="bg-brand-white border border-brand-coral/15 rounded-3xl p-6 md:p-8 shadow-soft overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs md:text-sm">
              <thead>
                <tr className="border-b border-brand-coral/20 text-brand-deep font-bold text-sm bg-brand-rose/20">
                  <th className="p-4 rounded-l-2xl">Comparison Metric</th>
                  <th className="p-4">General Parenting Blogs</th>
                  <th className="p-4 rounded-r-2xl text-brand-coral font-bold">Prematurite Digital Health</th>
                </tr>
              </thead>
              <tbody className="text-brand-brown divide-y divide-brand-coral/10">
                <tr>
                  <td className="p-4 font-semibold text-brand-deep">Milestone Evaluation</td>
                  <td className="p-4">Relies on calendar dates, frequently causing unnecessary anxiety when preterm infants lag behind.</td>
                  <td className="p-4 font-medium text-brand-deep bg-brand-rose/10">Applies corrected gestational age mathematical adjustments to map real progress.</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-brand-deep">Content Verification</td>
                  <td className="p-4">Often relies on casual opinions, user forums, or unchecked crowd-sourced advice.</td>
                  <td className="p-4 font-medium text-brand-deep bg-brand-rose/10">Double-checked against verified clinical guides (IAP & WHO preterm care protocols).</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-brand-deep">Commercial Sponsorships</td>
                  <td className="p-4">Monetized through baby formula banners, commercial diaper ads, and paid baby products.</td>
                  <td className="p-4 font-medium text-brand-deep bg-brand-rose/10">Zero commercial sponsorships, zero formula promotions, and absolute educational focus.</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-brand-deep">Clinical Boundaries</td>
                  <td className="p-4">May suggest home remedies, medication dosages, or self-diagnostic advice.</td>
                  <td className="p-4 font-medium text-brand-deep bg-brand-rose/10">Strict educational limits. Always emphasizes pediatrician consultation before actions.</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-brand-deep">Geographic Context</td>
                  <td className="p-4">Mainly US/Western settings (Fahrenheit scales, clinical discharge systems).</td>
                  <td className="p-4 font-medium text-brand-deep bg-brand-rose/10">Tailored to Indian households (Celsius temperatures, local hygiene parameters).</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-brand-deep">Linguistic Accessibility</td>
                  <td className="p-4">Written in dense, academic terminology that is difficult for anxious parents in waiting rooms to digest.</td>
                  <td className="p-4 font-medium text-brand-deep bg-brand-rose/10">Simplified, supportive English with structured tables and clear bullet points for parent accessibility.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </section>

      {/* NEW SECTION: CONTENT SOURCING AUDIT FRAMEWORK */}
      <section className="py-16 md:py-24 bg-brand-rose/10 px-4 border-t border-brand-coral/10">
        <div className="max-w-7xl mx-auto space-y-12 animate-fade-in">
          <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs md:text-sm font-sans font-bold tracking-widest uppercase text-brand-coral">
              Editorial Pipeline
            </span>
            <h2 className="text-2xl md:text-4xl font-display font-extrabold text-brand-deep">
              Quality Sourcing Audit Framework
            </h2>
            <p className="text-brand-brown text-sm md:text-base leading-relaxed">
              How we process, verify, and clean up educational guidelines before publication.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal direction="up" delay={0.1} className="bg-brand-white border border-brand-coral/15 rounded-3xl p-6 shadow-soft space-y-3">
              <span className="text-xs font-sans font-bold text-brand-coral uppercase block">Step 1: Clinical Retrieval</span>
              <h3 className="font-display font-bold text-brand-deep text-base">Verify Sourcing</h3>
              <p className="text-brand-brown text-xs md:text-sm leading-relaxed">
                Extract raw data guidelines strictly from verified neonatology documents (WHO Preterm Care and Indian Academy of Pediatrics clinical guides).
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2} className="bg-brand-white border border-brand-coral/15 rounded-3xl p-6 shadow-soft space-y-3">
              <span className="text-xs font-sans font-bold text-brand-coral uppercase block">Step 2: Lexical Translation</span>
              <h3 className="font-display font-bold text-brand-deep text-base">Simplify Vocabulary</h3>
              <p className="text-brand-brown text-xs md:text-sm leading-relaxed">
                Translate academic neonatal terms into warm, simple, supportive caregiver phrases while maintaining technical accuracy.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3} className="bg-brand-white border border-brand-coral/15 rounded-3xl p-6 shadow-soft space-y-3">
              <span className="text-xs font-sans font-bold text-brand-coral uppercase block">Step 3: Boundary Enforcements</span>
              <h3 className="font-display font-bold text-brand-deep text-base">Verify Compliance</h3>
              <p className="text-brand-brown text-xs md:text-sm leading-relaxed">
                Filter out any statements recommending medication, dosage estimates, or diagnostic criteria. Ensure pediatric referrals are present.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. TRUST DETAILS */}
      <section className="bg-brand-rose/20 rounded-3xl p-8 md:p-12 border border-brand-coral/15 space-y-6">
        <ScrollReveal direction="up">
          <h2 className="text-2xl font-display font-extrabold text-brand-deep text-center">
            Our Commitment to Responsible Health Writing
          </h2>
          <p className="text-brand-brown text-sm md:text-base leading-relaxed text-center max-w-4xl mx-auto mt-4">
            We understand that parenting a premature infant involves significant responsibility. That is why we maintain strict boundaries between non-clinical digital education and real-time medical consultation. We do not claim to replace neonatologists, pediatrician checkups, hospital care, or emergency services.
          </p>
          <div className="max-w-2xl mx-auto pt-6">
            <DisclaimerBox className="bg-brand-white" />
          </div>
        </ScrollReveal>
      </section>

      {/* 4. CTA */}
      <section className="text-center space-y-6">
        <ScrollReveal direction="up">
          <h2 className="text-2xl font-display font-extrabold text-brand-deep">
            Explore Our Care Topics
          </h2>
          <p className="text-brand-brown text-sm md:text-base max-w-xl mx-auto">
            Ready to review our educational material? Browse our services overview containing 12 core care topics.
          </p>
          <div className="pt-4">
            <Button href="/services/" id="why-choose-services-btn">
              Browse Topics
            </Button>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}

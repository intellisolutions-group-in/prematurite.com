'use client';

import React from 'react';
import { Users, HelpCircle, Heart } from 'lucide-react';
import DisclaimerBox from '@/components/ui/DisclaimerBox';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/animation/ScrollReveal';
import parentStoriesData from '@/data/parentStories.json';

export default function ParentStoriesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16 md:space-y-24" id="parent-stories-page">
      
      {/* 1. HERO SECTION */}
      <section className="text-center max-w-3xl mx-auto space-y-6">
        <ScrollReveal direction="up">
          <span className="text-xs md:text-sm font-sans font-bold tracking-widest uppercase text-brand-coral">
            Educational Scenarios
          </span>
          <h1 className="text-3xl md:text-5xl font-display font-extrabold text-brand-deep mt-2 tracking-tight">
            Educational Parent Stories
          </h1>
          <p className="text-brand-brown text-base md:text-lg leading-relaxed mt-4">
            Read general educational scenarios describing how fictional Indian families navigated baby care, NICU units, and post-discharge preparations responsibly.
          </p>
        </ScrollReveal>
      </section>

      {/* 2. STORIES LIST */}
      <section className="space-y-10">
        <ScrollReveal direction="up">
          <SectionHeading
            subtitle="Fictional Case Studies"
            title="Read Caregiver Scenarios"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {parentStoriesData.map((story, index) => (
            <ScrollReveal
              key={story.id}
              direction="up"
              delay={index * 0.05}
              className="bg-brand-white border border-brand-coral/15 rounded-3xl p-6 md:p-8 shadow-soft flex flex-col justify-between hover:border-brand-coral/30 hover:shadow-glow transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-rose rounded-full blur-xl -z-10" />
              <div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-brand-coral/10 text-brand-coral mb-4">
                  {story.scenario}
                </span>
                <h3 className="font-display font-bold text-brand-deep text-lg md:text-xl mb-3">
                  {story.title}
                </h3>
                <p className="text-brand-deep text-xs font-semibold mb-3">
                  {story.summary}
                </p>
                <p className="text-brand-brown text-sm leading-relaxed mb-6">
                  {story.content}
                </p>
              </div>

              <div className="pt-4 border-t border-brand-coral/10 mt-auto bg-brand-rose/20 -mx-6 md:-mx-8 px-6 md:px-8 -mb-6 md:-mb-8 py-4 rounded-b-3xl">
                <p className="text-brand-deep text-xs md:text-sm font-semibold italic">
                  <strong>Takeaway:</strong> {story.takeaway}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 3. DISCLAIMER */}
      <section className="max-w-3xl mx-auto text-center space-y-6">
        <DisclaimerBox />
        <p className="text-brand-brown text-xs md:text-sm">
          Please note that the stories presented on this page represent general, educational scenarios compiled to illustrate caregiving techniques. They are fictional and do not guarantee specific developmental or clinical outcomes.
        </p>
      </section>

    </div>
  );
}

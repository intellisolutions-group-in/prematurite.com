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

      {/* 4. NEW CONTENT: PERCENTILE DETAILS & CATCH-UP TIMELINES */}
      <section className="space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ScrollReveal direction="right" className="bg-brand-white border border-brand-coral/15 rounded-3xl p-6 md:p-8 shadow-soft space-y-6">
            <h3 className="font-display font-bold text-brand-deep text-lg md:text-xl">
              Preterm Percentile Charts Guide
            </h3>
            <p className="text-brand-brown text-xs md:text-sm leading-relaxed">
              Standard pediatric growth charts evaluate infants based on term milestones. For premature babies, clinics use specialized tracking indicators:
            </p>
            <ul className="space-y-3">
              <li className="text-brand-brown text-xs md:text-sm border-b border-brand-coral/10 pb-2">
                <strong className="text-brand-deep block">WHO vs. Fenton Charts:</strong> The WHO growth chart tracks infant development from term (40 weeks) onwards. For babies born extremely or very early, pediatricians use the Fenton growth chart, which starts plotting from 22 weeks gestation.
              </li>
              <li className="text-brand-brown text-xs md:text-sm border-b border-brand-coral/10 pb-2">
                <strong className="text-brand-deep block">Focusing on Curve Consistency:</strong> It is common for preterm babies to fall below the 10th percentile on standard WHO charts. The primary goal is that they maintain a steady, parallel upward trend on their own personal Fenton curve.
              </li>
              <li className="text-brand-brown text-xs md:text-sm">
                <strong className="text-brand-deep block">Adjusting for Gestational Shifts:</strong> Always recalculate corrected milestones before reviewing physical size percentiles, ensuring your observations reflect the baby's actual physiological age.
              </li>
            </ul>
          </ScrollReveal>

          <ScrollReveal direction="left" className="bg-brand-rose/40 border border-brand-coral/15 rounded-3xl p-6 md:p-8 space-y-6">
            <h3 className="font-display font-bold text-brand-deep text-lg md:text-xl">
              Expected Catch-up Growth Timeline
            </h3>
            <p className="text-brand-brown text-xs md:text-sm leading-relaxed">
              Preterm growth gaps close gradually. Learn what to expect across different developmental stages:
            </p>
            <div className="space-y-4">
              <div className="border-b border-brand-coral/10 pb-2">
                <strong className="text-brand-deep text-sm block">0 to 6 Months Corrected:</strong>
                <p className="text-brand-brown text-xs">Primary metabolic energy is spent stabilizing breathing and temperature. Weight gain may be gradual, but head circumference should show steady growth.</p>
              </div>
              <div className="border-b border-brand-coral/10 pb-2">
                <strong className="text-brand-deep text-sm block">6 to 12 Months Corrected:</strong>
                <p className="text-brand-brown text-xs">Sucking reflexes and digestive capacity mature, accelerating weight gain. Motor skills like rolling and grasping align closely with adjusted timelines.</p>
              </div>
              <div>
                <strong className="text-brand-deep text-sm block">12 to 24 Months Corrected:</strong>
                <p className="text-brand-brown text-xs">Catch-up growth typically accelerates. By the age of two, most preterm babies reach standard physical stature and milestone lines matching chronological age.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal direction="up" className="bg-brand-white border border-brand-coral/15 rounded-3xl p-6 md:p-8 shadow-soft space-y-6">
          <h3 className="font-display font-bold text-brand-deep text-lg md:text-xl">
            Fenton Growth Percentiles Mapping Guide
          </h3>
          <p className="text-brand-brown text-xs md:text-sm leading-relaxed">
            This educational mapping explains how pediatricians interpret Fenton growth chart percentiles to monitor preterm growth trajectories over gestational weeks:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs md:text-sm">
              <thead>
                <tr className="border-b border-brand-coral/20 text-brand-deep font-bold">
                  <th className="py-2 pr-4">Fenton Percentile</th>
                  <th className="py-2 pr-4">Typical Definition</th>
                  <th className="py-2">Educational Guidance & Growth Interpretation</th>
                </tr>
              </thead>
              <tbody className="text-brand-brown divide-y divide-brand-coral/10">
                <tr>
                  <td className="py-3 pr-4 font-semibold text-brand-deep">50th Percentile</td>
                  <td className="py-3 pr-4 text-brand-coral font-medium">Median Growth Value</td>
                  <td className="py-3">Represents the statistical median growth line of healthy preterm infants of the same gestational age.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold text-brand-deep">10th to 90th Percentile</td>
                  <td className="py-3 pr-4 text-brand-coral font-medium">Normal Target Range</td>
                  <td className="py-3">Most preterm infants grow steadily within this range. The consistency of their upward curve is far more clinically critical than the absolute percentile rank.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold text-brand-deep">Below 10th Percentile</td>
                  <td className="py-3 pr-4 text-brand-coral font-medium">Small for Gestational Age (SGA)</td>
                  <td className="py-3">Indicates that the baby is tracking at the lower end of the weight curve. If they maintain a steady parallel growth curve, they are generally thriving.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold text-brand-deep">Below 3rd Percentile</td>
                  <td className="py-3 pr-4 text-brand-coral font-medium">Significant Growth Delay</td>
                  <td className="py-3">A warning sign that weight gain, length, or head circumference has flattened. Typically prompts the neonatal team to adjust calorie densities or investigate absorption.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </section>

      {/* NEW CONTENT: DEVELOPMENTAL RED FLAGS */}
      <section className="bg-brand-white border border-brand-coral/15 rounded-3xl p-8 md:p-12 shadow-soft space-y-8 animate-fade-in">
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs md:text-sm font-sans font-bold tracking-widest uppercase text-red-500">
            Developmental Warnings
          </span>
          <h2 className="text-2xl md:text-3xl font-display font-extrabold text-brand-deep">
            Milestone & Growth Red Flags
          </h2>
          <p className="text-brand-brown text-sm leading-relaxed">
            While preterm babies develop at their own pace, certain signs warrant immediate consultation with your pediatrician or early intervention specialist.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-brand-brown text-xs md:text-sm leading-relaxed">
          <div className="space-y-4">
            <h3 className="font-display font-bold text-red-800 text-base">
              Motor & Tone Red Flags:
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0 mt-1.5 mr-2" />
                <span>**Hypotonia:** Baby feels extremely floppy, with weak arm and leg resistance when handled.</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0 mt-1.5 mr-2" />
                <span>**Hypertonia:** Persistent muscle stiffness, clenched fists, or arching of the back when held.</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0 mt-1.5 mr-2" />
                <span>**Asymmetric Movement:** The baby consistently uses only one side of the body or drags one leg.</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0 mt-1.5 mr-2" />
                <span>**Head Lag:** Total inability to support or lift the head briefly when pulled to a sitting position by 4 months corrected.</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-display font-bold text-red-800 text-base">
              Sensory & Social Red Flags:
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0 mt-1.5 mr-2" />
                <span>**Visual Tracking Lack:** Failure to track objects visually or establish eye contact by 3 months corrected age.</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0 mt-1.5 mr-2" />
                <span>**Auditory Non-Response:** Failure to turn toward voices or startle at loud noises.</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0 mt-1.5 mr-2" />
                <span>**Lack of Social Smile:** Failure to smile responsively or engage in early vocal cooing by 3 months corrected.</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0 mt-1.5 mr-2" />
                <span>**Extreme Sensitivity:** Intense, inconsolable crying when exposed to normal daily light or sound levels.</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-display font-bold text-red-800 text-base">
              Growth & Feeding Red Flags:
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0 mt-1.5 mr-2" />
                <span>**Growth Curve Flattening:** Complete flattening or downward trend of weight, length, or head circumference over two consecutive weeks.</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0 mt-1.5 mr-2" />
                <span>**Feeding Exhaustion:** Baby regularly falls asleep within 5 minutes of starting a feed or shows extreme rapid breathing during feeds.</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0 mt-1.5 mr-2" />
                <span>**Persistent Choking:** Regular coughing, choking, or color change (turning pale or blue) during breast or bottle feeds.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. DISCLAIMER & ACTION */}
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
            <Button href="/blog/" id="growth-resources-btn">
              Browse Our Blog
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

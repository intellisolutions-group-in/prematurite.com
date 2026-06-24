import React from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, ShieldAlert, AlertTriangle, BookOpen, Clock, Heart } from 'lucide-react';
import Button from '@/components/ui/Button';
import DisclaimerBox from '@/components/ui/DisclaimerBox';
import SectionHeading from '@/components/ui/SectionHeading';
import servicesData from '@/data/services.json';

// Generate static params for static export
export async function generateStaticParams() {
  return servicesData.map((service) => ({
    'service-slug': service.slug,
  }));
}

// Generate metadata for each page
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams['service-slug'];
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: 'Care Program Details',
    };
  }

  return {
    title: `${service.title} - Prematurite Digital Health`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams['service-slug'];
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold">Topic Page Not Found</h1>
        <p className="mt-2 text-brand-brown">The requested care topic could not be located.</p>
        <Link href="/services/" className="text-brand-coral underline mt-4 inline-block">
          Return to Services Overview
        </Link>
      </div>
    );
  }

  // Find 2 related pages
  const relatedServices = servicesData.filter((s) => s.slug !== slug).slice(0, 2);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-12 md:space-y-16" id={`service-detail-${slug}`}>
      
      {/* Back button */}
      <div>
        <Link
          href="/services/"
          className="inline-flex items-center text-xs md:text-sm font-display font-bold text-brand-coral hover:text-brand-salmon transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Care Topics
        </Link>
      </div>

      {/* 1. HERO SECTION */}
      <section className="bg-brand-rose/30 border border-brand-coral/15 rounded-3xl p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-coral/10 rounded-full blur-2xl" />
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brand-coral/10 text-brand-coral">
            Educational Care Detail
          </span>
          <h1 className="text-2xl md:text-4xl font-display font-extrabold text-brand-deep leading-tight">
            {service.title}
          </h1>
          <p className="text-brand-brown text-sm md:text-base leading-relaxed">
            {service.shortDescription}
          </p>
        </div>
      </section>

      {/* 2. TWO-COLUMN DETAILS GRID (Min 500 words total content layout) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left main content - 500+ words of detailed educational info */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Who this page is for */}
          <div className="bg-brand-white border border-brand-coral/15 rounded-2xl p-5 shadow-soft">
            <h3 className="font-display font-bold text-brand-deep text-sm md:text-base mb-2">
              Who is this guide for?
            </h3>
            <p className="text-brand-brown text-xs md:text-sm leading-relaxed">
              {service.whoFor}
            </p>
          </div>

          {/* Educational Introduction */}
          <div className="space-y-4 text-brand-brown text-sm md:text-base leading-relaxed">
            <h3 className="font-display font-bold text-brand-deep text-lg md:text-xl">
              Educational Overview
            </h3>
            <p>
              Caring for a premature infant involves understanding the unique developmental stages and physiological differences of preterm babies compared to full-term babies. Because premature babies are born before their bodies are fully developed, they experience the world differently. Their sensory systems, lungs, digestive tracts, and skin are highly sensitive, requiring specific adjustments at home and in clinical units to support continued healing.
            </p>
            <p>
              {service.guidanceText}
            </p>
            <p>
              Establishing daily routines helps parents gain confidence in their caregiving. Keep room temperatures warm, sanitize hands, limit nursery noise, and maintain a detailed feeding and diaper log. These simple tasks build a supportive home environment that supports natural growth milestones.
            </p>
            <p>
              It is important to remember that premature babies grow at their own pace. Physical milestones, such as head control, rolling, or responsive smiling, should always be adjusted using corrected age calculations. Corrected age calculates developmental expectations based on the baby's original due date rather than their chronological birth date. Consistency of growth percentiles on a customized curve is more important than matching standard averages.
            </p>
          </div>

          {/* Key learning areas - Min 6 points */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-brand-deep text-lg">
              Key Learning Focus Areas
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.learningAreas.map((area, idx) => (
                <li key={idx} className="flex items-start space-x-3 bg-brand-rose/20 rounded-2xl p-4 border border-brand-coral/10 hover:border-brand-coral/25 transition-all duration-200">
                  <CheckCircle className="w-5 h-5 text-brand-coral mt-0.5 flex-shrink-0" />
                  <span className="text-brand-deep text-xs md:text-sm font-semibold leading-relaxed">
                    {area}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right sidebar column */}
        <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
          
          {/* Medical warning block */}
          <div className="bg-red-50 border border-red-200 rounded-3xl p-6 space-y-4 shadow-soft">
            <div className="flex items-center space-x-2 text-red-700">
              <AlertTriangle className="w-5 h-5 flex-shrink-0" />
              <h3 className="font-display font-bold text-sm md:text-base">
                When to Contact Your Doctor
              </h3>
            </div>
            <p className="text-red-800 text-xs md:text-sm leading-relaxed">
              {service.whenDoctor}
            </p>
            <p className="text-red-800 text-xs leading-relaxed font-semibold">
              In emergency situations, bypass online content and take your baby to the nearest emergency clinic or hospital immediately.
            </p>
          </div>

          {/* Quick PDF checklist request */}
          <div className="bg-brand-rose/40 border border-brand-coral/15 rounded-3xl p-6 space-y-4 shadow-soft">
            <h3 className="font-display font-bold text-brand-deep text-sm md:text-base">
              Download Guidelines
            </h3>
            <p className="text-brand-brown text-xs leading-relaxed">
              Request printable sheets, checklists, and daily care log templates corresponding to this care topic.
            </p>
            <Button
              href={`/contact/?topic=${encodeURIComponent(service.title)}`}
              className="w-full text-xs"
              variant="primary"
              id={`request-pdf-${slug}`}
            >
              Request Printable Guide
            </Button>
          </div>
        </div>
      </section>

      {/* 3. RELATED PAGES SECTION */}
      <section className="border-t border-brand-coral/10 pt-12 space-y-6">
        <h3 className="font-display font-bold text-brand-deep text-lg md:text-xl text-center">
          Related Care Topics
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {relatedServices.map((related) => (
            <div key={related.slug} className="bg-brand-white border border-brand-coral/15 rounded-2xl p-5 shadow-soft hover:border-brand-coral/30 hover:shadow-glow transition-all duration-300">
              <h4 className="font-display font-bold text-brand-deep text-base mb-2">
                {related.title}
              </h4>
              <p className="text-brand-brown text-xs mb-4 line-clamp-2">
                {related.shortDescription}
              </p>
              <Link
                href={`/services/${related.slug}/`}
                className="text-xs font-display font-bold text-brand-coral hover:underline inline-flex items-center"
              >
                Read Guide
                <ArrowLeft className="w-3 h-3 ml-1 rotate-180" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 4. DISCLAIMER strip */}
      <section className="max-w-3xl mx-auto">
        <DisclaimerBox />
      </section>

    </div>
  );
}

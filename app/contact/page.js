'use client';

import React from 'react';
import { Mail, Phone, MapPin, Clock, AlertTriangle, ShieldAlert } from 'lucide-react';
import ContactForm from '@/components/ui/ContactForm';
import InquiryForm from '@/components/ui/InquiryForm';
import DisclaimerBox from '@/components/ui/DisclaimerBox';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/animation/ScrollReveal';
import companyData from '@/data/company.json';

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16 md:space-y-24" id="contact-page">
      
      {/* 1. HERO SECTION */}
      <section className="text-center max-w-3xl mx-auto space-y-6">
        <ScrollReveal direction="up">
          <span className="text-xs md:text-sm font-sans font-bold tracking-widest uppercase text-brand-coral">
            Get in Touch
          </span>
          <h1 className="text-3xl md:text-5xl font-display font-extrabold text-brand-deep mt-2 tracking-tight">
            Contact & Support
          </h1>
          <p className="text-brand-brown text-base md:text-lg leading-relaxed mt-4">
            Connect with our team to request print guides, suggest educational topics, or send general site inquiries.
          </p>
        </ScrollReveal>
      </section>

      {/* 2. EMERGENCY ALIGNMENT NOTE */}
      <section className="bg-red-50 border border-red-200 rounded-3xl p-6 md:p-8 shadow-soft">
        <div className="flex items-start space-x-4">
          <div className="bg-red-100 p-3 rounded-2xl text-red-600 flex-shrink-0">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <div className="space-y-2">
            <h3 className="font-display font-bold text-red-900 text-base md:text-lg">
              Critical Emergency Medical Notice
            </h3>
            <p className="text-red-800 text-sm leading-relaxed">
              Prematurite Digital Health provides educational and informational content only. We do not provide clinical treatment, diagnoses, online prescriptions, or medical emergency consultations. **For urgent or emergency medical situations, please contact your nearest hospital, pediatrician, neonatologist, or emergency service immediately.**
            </p>
          </div>
        </div>
      </section>

      {/* 3. DETAILS & FORMS GRID */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Contact Info Column */}
        <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-24">
          <div className="bg-brand-white border border-brand-coral/15 rounded-3xl p-6 md:p-8 shadow-soft space-y-6">
            <h3 className="font-display font-bold text-brand-deep text-lg border-b border-brand-coral/10 pb-3">
              Office Details
            </h3>

            <ul className="space-y-4 text-brand-brown text-sm">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-brand-coral mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-brand-deep block font-display">Email Address</strong>
                  <a href={`mailto:${companyData.email}`} className="hover:text-brand-coral">
                    {companyData.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-brand-coral mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-brand-deep block font-display">Phone Helpline</strong>
                  <span>{companyData.phone}</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-coral mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-brand-deep block font-display">Office Address</strong>
                  <span>{companyData.address}</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-brand-coral mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-brand-deep block font-display">Business Hours</strong>
                  <span>Monday to Friday: 09:00 AM - 05:00 PM IST (Placeholder hours)</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Map placeholder */}
          <div className="bg-brand-rose/40 border border-brand-coral/15 rounded-3xl p-6 text-center space-y-4 shadow-soft">
            <h3 className="font-display font-bold text-brand-deep text-sm md:text-base">
              Office Location Map
            </h3>
            <div className="h-48 bg-brand-white border border-brand-coral/10 rounded-2xl flex items-center justify-center p-4">
              <p className="text-brand-brown text-xs">
                [Static Map Image Placeholder - Original map script integration will be updated later without external scripts]
              </p>
            </div>
          </div>
        </div>

        {/* Forms Column */}
        <div className="lg:col-span-8 space-y-12">
          {/* Main Contact Form */}
          <div className="bg-brand-white border border-brand-coral/15 rounded-3xl p-6 md:p-8 shadow-soft">
            <h3 className="font-display font-bold text-brand-deep text-xl border-b border-brand-coral/10 pb-3 mb-6">
              General Contact Form
            </h3>
            <ContactForm />
          </div>

          {/* Quick Inquiry Form */}
          <InquiryForm />
        </div>
      </section>

      {/* 4. DISCLAIMER BOX */}
      <section className="max-w-3xl mx-auto">
        <DisclaimerBox />
      </section>

    </div>
  );
}

'use client';

import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';
import Button from './Button';
import ThankYouModal from './ThankYouModal';

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    inquiryType: 'Premature Baby Care Education',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const inquiryOptions = [
    'Premature Baby Care Education',
    'NICU Journey Support',
    'Feeding and Nutrition Awareness',
    'Growth and Development Questions',
    'Resource Request',
    'General Inquiry',
  ];

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full Name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
    } else if (!/^[0-9+\s-]{10,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.message.trim()) newErrors.message = 'Message details are required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowModal(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        city: '',
        inquiryType: 'Premature Baby Care Education',
        message: '',
      });
    }, 1000);
  };

  return (
    <div className="bg-brand-rose border border-brand-coral/25 rounded-3xl p-6 md:p-8 shadow-soft">
      <h3 className="font-display text-lg md:text-xl font-bold text-brand-deep mb-2">
        Quick Inquiry Form
      </h3>
      <p className="text-brand-brown text-xs md:text-sm mb-6">
        Ask a question or request educational digital guides. All details are kept confidential.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {/* Full Name */}
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name *"
            className={`w-full px-4 py-3 rounded-2xl bg-brand-white border ${
              errors.name ? 'border-red-500' : 'border-brand-coral/20'
            } text-brand-deep placeholder-brand-brown/50 text-sm focus:outline-none focus:ring-2 focus:ring-brand-coral/20 transition-all duration-300`}
            disabled={isLoading}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1 font-medium">{errors.name}</p>}
        </div>

        {/* Email & Phone Group */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address *"
              className={`w-full px-4 py-3 rounded-2xl bg-brand-white border ${
                errors.email ? 'border-red-500' : 'border-brand-coral/20'
              } text-brand-deep placeholder-brand-brown/50 text-sm focus:outline-none focus:ring-2 focus:ring-brand-coral/20 transition-all duration-300`}
              disabled={isLoading}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.email}</p>}
          </div>
          <div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number *"
              className={`w-full px-4 py-3 rounded-2xl bg-brand-white border ${
                errors.phone ? 'border-red-500' : 'border-brand-coral/20'
              } text-brand-deep placeholder-brand-brown/50 text-sm focus:outline-none focus:ring-2 focus:ring-brand-coral/20 transition-all duration-300`}
              disabled={isLoading}
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1 font-medium">{errors.phone}</p>}
          </div>
        </div>

        {/* City & Type */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City (Optional)"
              className="w-full px-4 py-3 rounded-2xl bg-brand-white border border-brand-coral/20 text-brand-deep placeholder-brand-brown/50 text-sm focus:outline-none focus:ring-2 focus:ring-brand-coral/20 transition-all duration-300"
              disabled={isLoading}
            />
          </div>
          <div>
            <select
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-2xl bg-brand-white border border-brand-coral/20 text-brand-deep text-sm focus:outline-none focus:ring-2 focus:ring-brand-coral/20 transition-all duration-300 cursor-pointer"
              disabled={isLoading}
            >
              {inquiryOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            placeholder="Your inquiry details... *"
            className={`w-full px-4 py-3 rounded-2xl bg-brand-white border ${
              errors.message ? 'border-red-500' : 'border-brand-coral/20'
            } text-brand-deep placeholder-brand-brown/50 text-sm focus:outline-none focus:ring-2 focus:ring-brand-coral/20 transition-all duration-300 resize-none`}
            disabled={isLoading}
          />
          {errors.message && <p className="text-red-500 text-xs mt-1 font-medium">{errors.message}</p>}
        </div>

        {/* Submit */}
        <Button
          type="submit"
          className="w-full mt-2"
          disabled={isLoading}
          id="submit-inquiry-form"
        >
          {isLoading ? (
            <span className="flex items-center">
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Sending...
            </span>
          ) : (
            'Send Quick Inquiry'
          )}
        </Button>
      </form>

      <ThankYouModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}

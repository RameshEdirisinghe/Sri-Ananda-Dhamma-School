'use client';

import ContactCard from '@/components/ui/contact/ContactCard';
import ContactForm from '@/components/ui/contact/ContactForm';
import SocialLinks from '@/components/ui/contact/SocialLinks';
import ContactHours from '@/components/ui/contact/ContactHours';

import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen px-4 py-10 max-w-5xl mx-auto space-y-12">
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold font-serif mb-2">📞 Connect With Us</h1>
        <p className="text-muted text-sm">
          We’d love to hear from you or welcome you to our Dhamma Institute.
        </p>
      </div>

      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        <ContactCard icon={<Phone />} title="Phone" value="+94 77 123 4567" />
        <ContactCard icon={<Mail />} title="Email" value="info@dhammaschool.lk" />
        <ContactCard icon={<MapPin />} title="Location" value="Sri Saddharmodaya Temple, Colombo" />
      </div>

      {/* Contact Form */}
      <ContactForm />

      {/* Social Buttons */}
      <SocialLinks />

      {/* Operating Hours */}
      <ContactHours />
    </div>
  );
}

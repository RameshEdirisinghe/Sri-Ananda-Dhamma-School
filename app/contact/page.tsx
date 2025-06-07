'use client';

import ContentLayout from '@/components/layout/ContentLayout';
import ContactCard from '@/components/ui/contact/ContactCard';
import ContactForm from '@/components/ui/contact/ContactForm';
import SocialLinks from '@/components/ui/contact/SocialLinks';

import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <ContentLayout
      title="Connect With Us"
      subtitle="We’d love to hear from you or welcome you to our Dhamma Institute."
      icon={<Phone size={32} />}
    >
      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        <ContactCard icon={<Phone size={20} />} title="Phone" value="+94 76 356 6478" />
        <ContactCard icon={<Mail size={20} />} title="Email" value="anadadhm1986@gmail.com" />
        <ContactCard
          icon={<MapPin size={20} />}
          title="Location"
          value="Sri Mahndrarama, Niwanthidiya"
        />
      </div>

      {/* Contact Form */}
      <div className="mt-12">
        <ContactForm />
      </div>

      {/* Social Buttons */}
      <div className="mt-10">
        <SocialLinks />
      </div>
    </ContentLayout>
  );
}

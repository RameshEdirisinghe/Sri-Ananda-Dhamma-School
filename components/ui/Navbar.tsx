'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Sections', href: '/sections' },
  { label: 'Resources', href: '/resources' },
  { label: 'Moments', href: '/moments' },
  { label: 'Events', href: '/events' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const linkStyle = (href: string) =>
    `relative px-1 py-1 transition-all duration-200 ${
      pathname === href
        ? 'text-primary font-semibold after:content-[""] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-primary'
        : 'text-neutral-muted hover:text-primary'
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo + School Name */}
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/images/logo.png"
            alt="School Logo"
            width={44}
            height={44}
            className="object-contain"
            priority
          />
          <span className="text-2xl reguler-400 font-bold text-primary tracking-tight font-sinhala leading-tight">
            ශ්‍රී ආනන්ද දහම් පාසල
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 items-center text-sm font-medium">
          {navLinks.map(({ label, href }) => (
            <Link key={href} href={href} className={linkStyle(href)}>
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white border-t shadow-lg p-4 z-40 space-y-4 animate-fadeIn">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`block ${linkStyle(href)}`}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

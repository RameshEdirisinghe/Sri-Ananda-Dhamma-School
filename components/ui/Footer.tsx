import Link from 'next/link';
import { Youtube, Facebook, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-background border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-muted">
        {/* Left: Copyright */}
        <div className="text-center md:text-left text-neutral-muted">
          © {new Date().getFullYear()} Chadlop. All rights reserved.
        </div>

        {/* Right: Social Links */}
        <div className="flex gap-6 items-center text-primary">
          <Link
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="hover:text-primary-light transition"
          >
            <Youtube className="w-5 h-5" />
          </Link>

          <Link
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-primary-light transition"
          >
            <Facebook className="w-5 h-5" />
          </Link>

          <Link
            href="https://wa.me/+9475855818"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hover:text-primary-light transition"
          >
            <MessageCircle className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

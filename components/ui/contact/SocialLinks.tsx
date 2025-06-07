import { Facebook, MessageCircle } from "lucide-react";

export default function SocialLinks() {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-8">
      <a
        href="https://wa.me/+94763566478"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-5 py-2.5 border border-green-600 text-green-700 hover:bg-green-50 rounded-lg transition text-sm"
      >
        <MessageCircle size={16} />
        WhatsApp
      </a>
      <a
        href="https://web.facebook.com/anandadhm"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-5 py-2.5 border border-blue-600 text-blue-700 hover:bg-blue-50 rounded-lg transition text-sm"
      >
        <Facebook size={16} />
        Facebook
      </a>
    </div>
  );
}

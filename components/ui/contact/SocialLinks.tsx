import { Facebook, MessageCircle } from "lucide-react";

export default function SocialLinks() {
  return (
    <div className="flex justify-center gap-6 mt-8">
      <a
        href="https://wa.me/94771234567"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-white bg-green-500 hover:bg-green-600 px-5 py-2.5 rounded-full shadow hover:shadow-lg transition"
      >
        <div className="bg-white text-green-600 p-1 rounded-full"><MessageCircle size={16} /></div>
        WhatsApp
      </a>
      <a
        href="https://facebook.com/saddharmodaya"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-full shadow hover:shadow-lg transition"
      >
        <div className="bg-white text-blue-600 p-1 rounded-full"><Facebook size={16} /></div>
        Facebook
      </a>
    </div>
  );
}

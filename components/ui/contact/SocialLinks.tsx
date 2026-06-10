import { Facebook, MessageCircle } from "lucide-react";

export default function SocialLinks() {
  return (
    <div className="flex flex-wrap justify-center gap-6 mt-12 bg-[#FAF9F6] py-10 rounded-[2rem] border border-neutral-100">
      <div className="w-full text-center mb-4">
        <p className="text-xs font-bold text-neutral uppercase tracking-widest">Or connect with us on</p>
      </div>
      <a
        href="https://wa.me/+94763566478"
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-3 px-8 py-3.5 bg-white border border-neutral-100 text-neutral font-bold rounded-full hover:shadow-md hover:border-green-500/30 hover:text-green-600 transition-all duration-300 text-sm"
      >
        <MessageCircle size={20} className="text-green-500" />
        WhatsApp
      </a>
      <a
        href="https://web.facebook.com/anandadhm"
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-3 px-8 py-3.5 bg-white border border-neutral-100 text-neutral font-bold rounded-full hover:shadow-md hover:border-blue-500/30 hover:text-blue-600 transition-all duration-300 text-sm"
      >
        <Facebook size={20} className="text-blue-600" />
        Facebook
      </a>
    </div>
  );
}

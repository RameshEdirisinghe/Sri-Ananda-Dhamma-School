"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white border border-neutral-100/60 rounded-[2rem] p-8 md:p-12 shadow-[0_2px_15px_rgba(0,0,0,0.03)] max-w-2xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-neutral mb-3 tracking-tight">Send Us a Message</h2>
        <p className="text-neutral-soft text-sm font-medium">Have a question or feedback? We&apos;d love to hear from you.</p>
        <div className="w-12 h-1 bg-primary/20 mx-auto mt-6 rounded-full" />
      </div>

      {submitted ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-10"
        >
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
             <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
             </svg>
          </div>
          <h3 className="text-xl font-bold text-neutral mb-2">Message Sent!</h3>
          <p className="text-neutral-soft">Thank you for reaching out. We&apos;ll get back to you soon.</p>
          <button 
            onClick={() => setSubmitted(false)}
            className="mt-8 text-primary font-bold text-sm hover:underline"
          >
            Send another message
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-neutral uppercase tracking-widest ml-1">Your Name</label>
              <input
                name="name"
                placeholder="Ex. Anil Kumara"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border border-neutral-100 bg-[#FAF9F6] rounded-xl px-5 py-4 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none transition-all placeholder:text-neutral-soft/40"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold text-neutral uppercase tracking-widest ml-1">Subject</label>
              <input
                name="subject"
                placeholder="What is this regarding?"
                value={form.subject}
                onChange={handleChange}
                className="w-full border border-neutral-100 bg-[#FAF9F6] rounded-xl px-5 py-4 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none transition-all placeholder:text-neutral-soft/40"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-neutral uppercase tracking-widest ml-1">Message</label>
              <textarea
                name="message"
                placeholder="How can we help you?"
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
                className="w-full border border-neutral-100 bg-[#FAF9F6] rounded-xl px-5 py-4 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none transition-all resize-none placeholder:text-neutral-soft/40"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white font-bold px-8 py-4 rounded-xl hover:shadow-lg hover:brightness-105 active:scale-[0.98] transition-all text-sm tracking-wide mt-4"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}

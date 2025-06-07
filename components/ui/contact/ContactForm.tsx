"use client";
import { useState } from "react";

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
    <div className="bg-primary-light border border-neutral-border rounded-xl p-8 shadow-soft max-w-2xl mx-auto space-y-6">
      <h2 className="text-xl font-serif font-semibold text-ui-heading">Send Us a Message</h2>
      <hr className="border-neutral-border" />

      {submitted ? (
        <p className="text-state-success font-medium">Your message has been successfully sent.</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border border-neutral-border bg-white rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:outline-none"
          />
          <input
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            className="w-full border border-neutral-border bg-white rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
            className="w-full border border-neutral-border bg-white rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:outline-none"
          />
          <button
            type="submit"
            className="bg-primary text-white font-medium px-6 py-3 rounded-lg hover:brightness-105 transition"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}

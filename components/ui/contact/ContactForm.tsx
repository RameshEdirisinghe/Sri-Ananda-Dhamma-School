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
    // TODO: send form somewhere
    setSubmitted(true);
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-md border space-y-4 max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold font-serif mb-2">📝 Send a Message</h2>
      <hr className="border-orange-200" />

      {submitted ? (
        <p className="text-green-600 font-medium">✅ Message sent successfully!</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl shadow-sm focus:ring-2 focus:ring-orange-400 focus:outline-none"
          />
          <input
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl shadow-sm focus:ring-2 focus:ring-orange-400 focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl shadow-sm focus:ring-2 focus:ring-orange-400 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium px-6 py-3 rounded-xl hover:brightness-110 transition shadow"
          >
            ✉️ Send Message
          </button>
        </form>
      )}
    </div>
  );
}

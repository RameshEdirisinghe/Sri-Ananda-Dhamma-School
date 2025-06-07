"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AuthLayout from "@/components/reusable/AuthLayout";
import { getPageContent } from "@/hooks/usePageContent";
import type { PageContent } from "@/type/content";

export default function LoginPage() {
  const router = useRouter();
  const [content, setContent] = useState<PageContent | null>(null);
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    getPageContent("login").then(setContent);
  }, []);

  const handleLogin = async () => {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(form),
    });
    if (res.ok) {
      const { role } = await res.json();
      router.push(role === "admin" ? "/admin" : "/");
    } else {
      setError("Invalid credentials");
    }
  };

  if (!content) return null;

  return (
    <AuthLayout imageSrc={content.image} alt={content.alt}>
      <h1 className="text-3xl font-heading text-neutral mb-3">{content.title}</h1>
      <p className="text-neutral-muted mb-6 text-sm">{content.subtitle}</p>
      
      <input
        type="email"
        placeholder="Email"
        className="w-full p-3 border border-neutral-soft rounded-lg focus:outline-none focus:ring-2 focus:ring-accent mb-4"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full p-3 border border-neutral-soft rounded-lg focus:outline-none focus:ring-2 focus:ring-accent mb-6"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      
      <button
        onClick={handleLogin}
        className="w-full py-3 bg-[#A68F6C] text-white font-semibold rounded-lg hover:bg-[#8e775d] transition"
      >
        {content.buttonText}
      </button>
      
      {error && <p className="text-error text-sm mt-4">{error}</p>}
    </AuthLayout>
  );
}

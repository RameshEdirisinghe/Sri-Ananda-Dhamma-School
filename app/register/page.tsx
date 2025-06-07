"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import AuthLayout from "@/components/reusable/AuthLayout";
import { usePageContent } from "@/hooks/usePageContent";

export default function RegisterPage() {
  const router = useRouter();
  const content = usePageContent("register");
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleRegister = async () => {
    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify(form),
    });

    if (res.ok) {
      router.push("/login");
    } else {
      setError("Registration failed");
    }
  };

  return (
    <AuthLayout imageSrc={content.image} alt={content.alt}>
      <h1 className="text-2xl font-heading text-primary">{content.title}</h1>
      <p className="text-sm text-neutral-muted">{content.subtitle}</p>
      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 border border-neutral-soft rounded mb-2"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full p-2 border border-neutral-soft rounded mb-4"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button onClick={handleRegister} className="w-full bg-primary text-white py-2 rounded shadow">
        {content.buttonText}
      </button>
      {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
    </AuthLayout>
  );
}

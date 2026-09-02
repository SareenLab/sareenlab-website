"use client";

import { useState } from "react";

const inquiryTypes = [
  "cGMP Contract Manufacturing",
  "Co-Development & Sponsored Research",
  "Technology Licensing",
  "Venture Incubation",
  "General Inquiry",
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    organization: "",
    email: "",
    inquiryType: "",
    description: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? "Something went wrong");
      }

      setStatus("success");
      setForm({ name: "", organization: "", email: "", inquiryType: "", description: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "An unexpected error occurred.");
    }
  };

  const inputClass =
    "w-full bg-bg-primary border border-grid text-text-primary text-sm px-4 py-3 rounded-sm placeholder:text-text-muted/40 focus:outline-none focus:border-accent/40 transition-colors";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold tracking-label uppercase text-text-muted">Name *</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Your full name"
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold tracking-label uppercase text-text-muted">Organization</label>
          <input
            type="text"
            name="organization"
            value={form.organization}
            onChange={handleChange}
            placeholder="Company or institution"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold tracking-label uppercase text-text-muted">Email *</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="your@email.com"
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold tracking-label uppercase text-text-muted">Inquiry Type *</label>
          <select
            name="inquiryType"
            value={form.inquiryType}
            onChange={handleChange}
            required
            className={`${inputClass} text-text-muted`}
          >
            <option value="">Select inquiry type...</option>
            {inquiryTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-xs font-semibold tracking-label uppercase text-text-muted">Program Description</label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          rows={5}
          placeholder="Describe your program, technology, or how you'd like to collaborate..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === "success" && (
        <div className="px-4 py-3 bg-accent/10 border border-accent/20 rounded-sm text-sm text-accent">
          Message sent successfully. We&apos;ll be in touch soon.
        </div>
      )}

      {status === "error" && (
        <div className="px-4 py-3 bg-red-500/10 border border-red-500/20 rounded-sm text-sm text-red-400">
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-accent text-bg-primary font-semibold text-sm tracking-label uppercase rounded-sm hover:bg-accent-light transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
      >
        {status === "loading" ? "Sending..." : "Send inquiry"}
        {status !== "loading" && (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        )}
      </button>
    </form>
  );
}

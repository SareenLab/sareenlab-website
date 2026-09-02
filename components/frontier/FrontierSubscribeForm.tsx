"use client";

import { useState } from "react";

export default function FrontierSubscribeForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setMessage("You're on the list.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        className="flex-1 bg-white/5 border border-white/10 rounded px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent/50 transition-colors"
      />
      <button
        type="submit"
        disabled={status === "loading" || status === "success"}
        className="px-5 py-2.5 bg-accent text-bg-primary text-sm font-semibold rounded hover:bg-accent/90 transition-colors disabled:opacity-50 whitespace-nowrap"
      >
        {status === "loading" ? "..." : status === "success" ? "Subscribed" : "Subscribe"}
      </button>
      {(status === "success" || status === "error") && (
        <span
          className={`text-xs mt-1 sm:hidden ${status === "success" ? "text-accent" : "text-red-400"}`}
        >
          {message}
        </span>
      )}
    </form>
  );
}

"use client";

import { useState } from "react";
import { profile } from "@/content/profile";

/**
 * Composes the message into a mailto: link so the form works with zero
 * backend and zero third-party account.
 *
 * To collect submissions on the web instead, create a free Formspree form
 * and swap the onSubmit body for a POST to its endpoint.
 */
export default function ContactForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(
      company ? `Portfolio enquiry — ${company}` : "Portfolio enquiry",
    );
    const body = encodeURIComponent(
      `${message}\n\n—\n${name}${company ? `\n${company}` : ""}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  const field =
    "w-full rounded-sm border border-line bg-paper px-4 py-3 text-ink placeholder:text-muted/70 transition-colors focus:border-accent focus:outline-none";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="eyebrow block">
            Your name
          </label>
          <input
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`${field} mt-3`}
            placeholder="Jane Smith"
          />
        </div>
        <div>
          <label htmlFor="company" className="eyebrow block">
            Company <span className="normal-case">(optional)</span>
          </label>
          <input
            id="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className={`${field} mt-3`}
            placeholder="Agency or brand"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="eyebrow block">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${field} mt-3 resize-y`}
          placeholder="What are you working on?"
        />
      </div>

      <button
        type="submit"
        className="rounded-full bg-accent px-7 py-3 text-sm text-paper transition-colors hover:bg-accent-deep"
      >
        Send message
      </button>

      <p className="text-xs text-muted">
        This opens your email client with the message ready to send.
      </p>
    </form>
  );
}

"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="block" htmlFor="email">
        <span className="text-sm font-medium">Email</span>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@company.com"
          className="mt-2 w-full rounded-2xl border px-4 py-3 text-base outline-none transition focus:border-ink focus:ring focus:ring-accent/20"
        />
      </label>
      <label className="block" htmlFor="details">
        <span className="text-sm font-medium">Project notes</span>
        <textarea
          id="details"
          name="details"
          required
          rows={5}
          placeholder="Bookings, payroll, integrations…"
          className="mt-2 w-full rounded-2xl border px-4 py-3 text-base outline-none transition focus:border-ink focus:ring focus:ring-accent/20"
        />
      </label>
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full border border-ink bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
      >
        {submitted ? "Message queued" : "Send inquiry"}
      </button>
      {submitted && (
        <p className="text-sm text-muted">
          Thanks—this is a static demo. Email hello@reedsolutions.ch so we can start for real.
        </p>
      )}
    </form>
  );
}

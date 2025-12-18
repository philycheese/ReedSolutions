"use client";

import { motion } from "framer-motion";

const capabilities = [
  {
    title: "Product platforms",
    body: "Multi-tenant applications with clear roles, onboarding, and billing built in from day one.",
  },
  {
    title: "Workflow & automation",
    body: "Structured processes, approvals, and background jobs that keep operations predictable.",
  },
  {
    title: "Payments & financial flows",
    body: "Checkout, invoicing, payouts, and reconciliation tailored to your revenue model.",
  },
  {
    title: "Ops dashboards",
    body: "Role-based portals with audit trails, analytics, and controls for support and leadership.",
  },
  {
    title: "Integrations",
    body: "Well-documented APIs and connectors into the tools your business already runs on.",
  },
];

export function Capabilities() {
  return (
    <section className="space-y-6">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-muted">What I build</p>
          <h2 className="mt-2 text-2xl font-semibold">Platforms that unlock revenue</h2>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {capabilities.map((capability, index) => (
          <motion.article
            key={capability.title}
            className="group rounded-2xl border bg-white/60 p-6 shadow-subtle transition hover:-translate-y-1 hover:bg-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.05 }}
          >
            <h3 className="text-lg font-semibold">{capability.title}</h3>
            <p className="mt-3 text-sm text-muted">{capability.body}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

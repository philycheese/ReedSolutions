"use client";

import { useRef, useState } from "react";
import Section, { Container } from "@/components/Section";

type LineItem = {
  id: number;
  description: string;
  hours: string;
  rate: string;
};

const CURRENCIES = ["CHF", "GBP", "EUR", "USD"] as const;

export default function InvoicePage() {
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceDate, setInvoiceDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [customerName, setCustomerName] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [periodStart, setPeriodStart] = useState("");
  const [periodEnd, setPeriodEnd] = useState("");
  const [currency, setCurrency] = useState("CHF");
  const invoiceRef = useRef<HTMLDivElement>(null);
  const [items, setItems] = useState<LineItem[]>([
    { id: 1, description: "Software Consulting Services", hours: "", rate: "" },
  ]);

  const addItem = () => {
    setItems((prev) => [
      ...prev,
      { id: Date.now(), description: "", hours: "", rate: "" },
    ]);
  };

  const removeItem = (id: number) => {
    setItems((prev) => (prev.length > 1 ? prev.filter((i) => i.id !== id) : prev));
  };

  const updateItem = (id: number, field: keyof Omit<LineItem, "id">, value: string) => {
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, [field]: value } : i))
    );
  };

  const itemTotal = (item: LineItem) =>
    (parseFloat(item.hours) || 0) * (parseFloat(item.rate) || 0);

  const total = items.reduce((sum, item) => sum + itemTotal(item), 0);

  const dueDate = (() => {
    const d = new Date(invoiceDate + "T00:00:00");
    d.setDate(d.getDate() + 14);
    return d;
  })();

  const formatDate = (date: Date) =>
    date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  const fmt = (amount: number) =>
    `${currency}\u00A0${amount.toLocaleString("en-CH", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;

  /* ── shared input classes ── */
  const inputCls =
    "mt-1 w-full border border-line bg-white px-3 py-2 text-sm text-ink placeholder:text-sand focus:border-accent focus:outline-none";

  return (
    <>
      {/* ────────────────── Form (hidden when printing) ────────────────── */}
      <div className="print:hidden">
        <Section className="pt-10 pb-8 md:pt-16 md:pb-12">
          <Container>
            <h1 className="text-3xl font-semibold tracking-tightish md:text-5xl">
              Invoice Generator
            </h1>
            <p className="mt-3 text-sm text-muted">
              Fill in the details below. The invoice preview updates in real
              time.
            </p>

            {/* ── Top fields ── */}
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Field label="Invoice Number">
                <input
                  type="text"
                  value={invoiceNumber}
                  onChange={(e) => setInvoiceNumber(e.target.value)}
                  placeholder="RS-001"
                  className={inputCls}
                />
              </Field>

              <Field label="Invoice Date">
                <input
                  type="date"
                  value={invoiceDate}
                  onChange={(e) => setInvoiceDate(e.target.value)}
                  className={inputCls}
                />
              </Field>

              <Field label="Period Starting">
                <input
                  type="date"
                  value={periodStart}
                  onChange={(e) => setPeriodStart(e.target.value)}
                  className={inputCls}
                />
              </Field>

              <Field label="Period Ending">
                <input
                  type="date"
                  value={periodEnd}
                  onChange={(e) => setPeriodEnd(e.target.value)}
                  className={inputCls}
                />
              </Field>

              <Field label="Currency">
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className={inputCls}
                >
                  {CURRENCIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Customer Name">
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Acme Corp"
                  className={inputCls}
                />
              </Field>

              <Field label="Customer Address" className="md:col-span-2">
                <textarea
                  value={customerAddress}
                  onChange={(e) => setCustomerAddress(e.target.value)}
                  placeholder={"123 Business Street\nLondon, UK"}
                  rows={2}
                  className={inputCls}
                />
              </Field>
            </div>

            {/* ── Line items ── */}
            <div className="mt-8">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
                Line Items
              </h2>

              <div className="mt-3 space-y-3">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="grid grid-cols-1 gap-3 border border-line bg-white p-4 sm:grid-cols-12"
                  >
                    <div className="sm:col-span-5">
                      <label className="block text-xs text-muted">
                        Description
                      </label>
                      <input
                        type="text"
                        value={item.description}
                        onChange={(e) =>
                          updateItem(item.id, "description", e.target.value)
                        }
                        placeholder="Software Development"
                        className={inputCls}
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs text-muted">Hours</label>
                      <input
                        type="number"
                        value={item.hours}
                        onChange={(e) =>
                          updateItem(item.id, "hours", e.target.value)
                        }
                        placeholder="0"
                        min="0"
                        step="0.5"
                        className={inputCls}
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs text-muted">
                        Rate ({currency}/hr)
                      </label>
                      <input
                        type="number"
                        value={item.rate}
                        onChange={(e) =>
                          updateItem(item.id, "rate", e.target.value)
                        }
                        placeholder="0"
                        min="0"
                        step="0.01"
                        className={inputCls}
                      />
                    </div>

                    <div className="flex items-end sm:col-span-2">
                      <span className="w-full pb-2 text-right text-sm font-medium">
                        {fmt(itemTotal(item))}
                      </span>
                    </div>

                    <div className="flex items-end justify-end sm:col-span-1">
                      {items.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="pb-2 text-xs text-muted hover:text-red-600"
                          aria-label="Remove item"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={addItem}
                className="mt-3 border border-line px-4 py-2 text-xs font-medium uppercase tracking-wide text-muted hover:border-accent hover:text-accent"
              >
                + Add Line Item
              </button>
            </div>

            {/* ── Actions ── */}
            <div className="mt-8">
              <button
                type="button"
                onClick={async () => {
                  const el = invoiceRef.current;
                  if (!el) return;
                  const html2pdf = (await import("html2pdf.js")).default;
                  const filename = invoiceNumber
                    ? `invoice-${invoiceNumber}.pdf`
                    : "invoice.pdf";
                  html2pdf()
                    .set({
                      margin: [15, 15, 15, 15],
                      filename,
                      image: { type: "jpeg", quality: 0.98 },
                      html2canvas: { scale: 2, useCORS: true },
                      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
                    })
                    .from(el)
                    .save();
                }}
                className="bg-ink px-6 py-3 text-sm font-medium text-canvas hover:bg-brand-burgundySoft"
              >
                Save as PDF
              </button>
            </div>
          </Container>
        </Section>
      </div>

      {/* ────────────────── Invoice Preview ────────────────── */}
      <Section className="pb-14 pt-0 md:pb-20 md:pt-0 print:py-0">
        <Container>
          <p className="mb-6 text-xs font-medium uppercase tracking-wide text-muted print:hidden">
            Invoice Preview
          </p>

          <div
            ref={invoiceRef}
            className="invoice-sheet mx-auto border border-line bg-white p-8 shadow-lift md:p-12"
            style={{ maxWidth: 800 }}
          >
            {/* Header */}
            <div className="flex items-start justify-between">
              <div>
                <p className="text-2xl font-semibold tracking-tightish">
                  Reed Solutions
                </p>
                <address className="mt-2 text-sm not-italic leading-relaxed text-muted">
                  Felsenstrasse 95
                  <br />
                  9000 St. Gallen
                  <br />
                  Switzerland
                </address>
              </div>

              <div className="text-right">
                <p className="text-xl font-semibold uppercase tracking-wide text-accent">
                  Invoice
                </p>
                {invoiceNumber && (
                  <p className="mt-2 text-sm text-muted">
                    # <span className="font-medium text-ink">{invoiceNumber}</span>
                  </p>
                )}
                <p className="mt-1 text-sm text-muted">
                  Date:{" "}
                  <span className="text-ink">
                    {formatDate(new Date(invoiceDate + "T00:00:00"))}
                  </span>
                </p>
                <p className="text-sm text-muted">
                  Due:{" "}
                  <span className="text-ink">{formatDate(dueDate)}</span>
                </p>
                {(periodStart || periodEnd) && (
                  <p className="mt-1 text-sm text-muted">
                    Period:{" "}
                    <span className="text-ink">
                      {periodStart
                        ? formatDate(new Date(periodStart + "T00:00:00"))
                        : "—"}
                      {" – "}
                      {periodEnd
                        ? formatDate(new Date(periodEnd + "T00:00:00"))
                        : "—"}
                    </span>
                  </p>
                )}
              </div>
            </div>

            {/* Bill To */}
            <div className="mt-10">
              <p className="text-xs font-medium uppercase tracking-wide text-muted">
                Bill To
              </p>
              <div className="mt-2 text-sm leading-relaxed">
                <p className="font-medium">
                  {customerName || "Customer Name"}
                </p>
                {customerAddress && (
                  <p className="whitespace-pre-line text-muted">
                    {customerAddress}
                  </p>
                )}
              </div>
            </div>

            {/* Items table */}
            <table className="mt-8 w-full text-sm">
              <thead>
                <tr className="border-b-2 border-ink text-left">
                  <th className="pb-2 font-medium">Description</th>
                  <th className="pb-2 text-right font-medium">Hours</th>
                  <th className="pb-2 text-right font-medium">Rate</th>
                  <th className="pb-2 text-right font-medium">Amount</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id} className="border-b border-line">
                    <td className="py-3">{item.description || "\u2014"}</td>
                    <td className="py-3 text-right">{item.hours || "0"}</td>
                    <td className="py-3 text-right">
                      {fmt(parseFloat(item.rate) || 0)}
                    </td>
                    <td className="py-3 text-right font-medium">
                      {fmt(itemTotal(item))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Total */}
            <div className="mt-4 flex justify-end">
              <div className="w-56">
                <div className="flex items-center justify-between border-t-2 border-ink pt-3 text-base font-semibold">
                  <span>Total</span>
                  <span>{fmt(total)}</span>
                </div>
              </div>
            </div>

            {/* Payment details */}
            <div className="mt-12 border-t border-line pt-6">
              <p className="text-xs font-medium uppercase tracking-wide text-muted">
                Payment Details
              </p>
              <div className="mt-2 grid grid-cols-1 gap-1 text-sm sm:grid-cols-3">
                <div>
                  <span className="text-muted">Sort Code:</span>{" "}
                  <span className="font-medium">20-18-47</span>
                </div>
                <div>
                  <span className="text-muted">Account Number:</span>{" "}
                  <span className="font-medium">73324478</span>
                </div>
                <div>
                  <span className="text-muted">Terms:</span>{" "}
                  <span className="font-medium">14 Days</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

/* ── tiny helper to reduce label boilerplate ── */
function Field({
  label,
  className,
  children,
}: {
  label: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label className="block text-xs font-medium uppercase tracking-wide text-muted">
        {label}
      </label>
      {children}
    </div>
  );
}

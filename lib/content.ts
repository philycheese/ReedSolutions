export type CaseStudy = {
  slug: string;
  title: string;
  outcome: string;
  tags: string[];
  image: { src: string; alt: string };
};

export type Insight = {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
};

export const contactEmail = "hello@reedsolutions.dev";

export const navItems = [
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#work" },
  { label: "Process", href: "/#process" },
  { label: "Insights", href: "/#insights" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
] as const;

export const services = [
  {
    eyebrow: "Product",
    title: "Product & Platform Engineering",
    description:
      "We build and evolve web products with a bias for shipping: clean architecture, strong DX, and systems that scale with your team and customer base.",
    href: "/#contact",
    images: [
      { src: "/images/product.jpg", alt: "Team reviewing product roadmap on a whiteboard." },
      { src: "/images/work-2.jpg", alt: "Developer workstation with code on screen." },
    ],
  },
  {
    eyebrow: "Integrations",
    title: "Integrations & Automation",
    description:
      "Payments, payroll, CRM, and internal tools—connected. We design resilient APIs and workflows that reduce manual work and keep data trustworthy.",
    href: "/#contact",
    images: [
      { src: "/images/integrations.jpg", alt: "Professional collaborating on a laptop." },
      { src: "/images/work-1.jpg", alt: "Analytics dashboard on a screen." },
    ],
  },
  {
    eyebrow: "Cloud",
    title: "Cloud & Modernisation",
    description:
      "AWS-first modernisation with performance, security, and cost in mind. Migrations, observability, and hardening—without the rewrite drama.",
    href: "/#contact",
    images: [
      { src: "/images/cloud.jpg", alt: "Earth from space representing cloud infrastructure." },
      { src: "/images/work-3.jpg", alt: "Engineer working with servers and hardware." },
    ],
  },
] as const;

export const caseStudies: CaseStudy[] = [
  {
    slug: "finops-platform",
    title: "FinOps Platform",
    outcome: "Reduced AWS spend by 28% with automated cost controls and reporting.",
    tags: ["AWS", "Next.js", "Data Pipelines"],
    image: { src: "/images/work-1.jpg", alt: "Dashboard interface with charts." },
  },
  {
    slug: "payments-integration",
    title: "Payments Integration Layer",
    outcome: "Unified Stripe and legacy billing into one resilient API for faster launches.",
    tags: ["Integrations", "TypeScript", "Observability"],
    image: { src: "/images/work-2.jpg", alt: "Code on screen representing engineering work." },
  },
  {
    slug: "platform-modernisation",
    title: "Platform Modernisation",
    outcome: "Improved performance by 3× and added security baselines across services.",
    tags: ["AWS", "Security", "Modernisation"],
    image: { src: "/images/work-3.jpg", alt: "Technology infrastructure and tooling." },
  },
];

export const insights: Insight[] = [
  {
    slug: "shipping-with-confidence",
    date: "2025-10-02",
    title: "Shipping with confidence: pragmatic quality systems",
    excerpt:
      "A lightweight approach to testing, reviews, and observability that keeps teams moving without compromising reliability.",
  },
  {
    slug: "integration-architecture",
    date: "2025-09-12",
    title: "Integration architecture that doesn’t wake you at 2am",
    excerpt:
      "Designing workflows and retries that tolerate failures—without creating a tangled mess of edge cases.",
  },
  {
    slug: "aws-modernisation-playbook",
    date: "2025-08-21",
    title: "A modernisation playbook for AWS workloads",
    excerpt:
      "Where to start, what to measure, and how to modernise safely when uptime and security are non-negotiable.",
  },
];


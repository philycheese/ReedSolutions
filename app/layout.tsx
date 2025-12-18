import "./globals.css";

import type { Metadata } from "next";
import { plexMono, plexSans } from "@/lib/fonts";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const title = "Custom software, thoughtfully engineered | Reed Solutions";
const description =
  "Switzerland-based software studio delivering custom platforms for operations, payments, and customer experience.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL("https://reedsolutions.ch"),
  openGraph: {
    title,
    description,
    url: "https://reedsolutions.ch",
    siteName: "Reed Solutions",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  alternates: {
    canonical: "https://reedsolutions.ch",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${plexSans.variable} ${plexMono.variable}`}>
      <body className="bg-canvas text-ink">
        <SiteHeader />
        <main className="mx-auto w-full max-w-5xl px-4 py-16">{children}</main>
        <SiteFooter />
        {/** <script defer data-domain="reedsolutions.ch" src="https://plausible.io/js/script.js"></script> */}
      </body>
    </html>
  );
}

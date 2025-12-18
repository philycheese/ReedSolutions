import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Reed Solutions — Custom Software Development",
  description:
    "Reed Solutions is a premium custom software studio delivering product engineering, integrations, and cloud systems for growing businesses.",
  metadataBase: new URL("https://reedsolutions.example"),
  openGraph: {
    title: "Reed Solutions",
    description:
      "Premium product engineering, integrations, and cloud delivery for growing businesses.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-dvh font-sans antialiased">
        <NavBar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

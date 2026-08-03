import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-roboto",
  display: "swap",
});

const colourThemes = [
  {
    bg: "#263B35",
    text: "#F7F8F3",
    muted: "rgba(247, 248, 243, 0.70)",
    soft: "rgba(247, 248, 243, 0.90)",
    faint: "rgba(247, 248, 243, 0.56)",
    line: "rgba(247, 248, 243, 0.25)",
    shadow: "rgba(10, 20, 16, 0.38)",
    particles: ["#F7F8F3", "#DCE8D9", "#A8C5AD", "#DDEC67", "#72B492"],
    blend: "lighter",
  },
  {
    bg: "#3152A4",
    text: "#FFF7E7",
    muted: "rgba(255, 247, 231, 0.72)",
    soft: "rgba(255, 247, 231, 0.92)",
    faint: "rgba(255, 247, 231, 0.58)",
    line: "rgba(255, 247, 231, 0.27)",
    shadow: "rgba(15, 27, 70, 0.38)",
    particles: ["#FFF7E7", "#B8D7FF", "#F2A184", "#F6DA69", "#C9B8F4"],
    blend: "lighter",
  },
  {
    bg: "#A94F3D",
    text: "#FFF8E8",
    muted: "rgba(255, 248, 232, 0.72)",
    soft: "rgba(255, 248, 232, 0.92)",
    faint: "rgba(255, 248, 232, 0.58)",
    line: "rgba(255, 248, 232, 0.28)",
    shadow: "rgba(61, 22, 14, 0.34)",
    particles: ["#FFF8E8", "#F4C3A8", "#F4DE78", "#D7B5C7", "#A9CED0"],
    blend: "lighter",
  },
  {
    bg: "#5B3A63",
    text: "#FFF2DB",
    muted: "rgba(255, 242, 219, 0.72)",
    soft: "rgba(255, 242, 219, 0.92)",
    faint: "rgba(255, 242, 219, 0.58)",
    line: "rgba(255, 242, 219, 0.27)",
    shadow: "rgba(27, 14, 30, 0.38)",
    particles: ["#FFF2DB", "#D9B6E3", "#F19A85", "#B9D8C4", "#E8C65A"],
    blend: "lighter",
  },
  {
    bg: "#315D68",
    text: "#FFF4DE",
    muted: "rgba(255, 244, 222, 0.72)",
    soft: "rgba(255, 244, 222, 0.92)",
    faint: "rgba(255, 244, 222, 0.58)",
    line: "rgba(255, 244, 222, 0.27)",
    shadow: "rgba(13, 36, 42, 0.38)",
    particles: ["#FFF4DE", "#B8DDD7", "#91B9D0", "#F0C56F", "#D9A3A0"],
    blend: "lighter",
  },
  {
    bg: "#D2A72C",
    text: "#251F12",
    muted: "rgba(37, 31, 18, 0.70)",
    soft: "rgba(37, 31, 18, 0.90)",
    faint: "rgba(37, 31, 18, 0.58)",
    line: "rgba(37, 31, 18, 0.25)",
    shadow: "rgba(69, 49, 8, 0.27)",
    particles: ["#342716", "#6C3D32", "#31566A", "#F3E5BA", "#52653C"],
    blend: "multiply",
  },
  {
    bg: "#7FAAB4",
    text: "#132A2F",
    muted: "rgba(19, 42, 47, 0.70)",
    soft: "rgba(19, 42, 47, 0.90)",
    faint: "rgba(19, 42, 47, 0.58)",
    line: "rgba(19, 42, 47, 0.24)",
    shadow: "rgba(20, 54, 62, 0.25)",
    particles: ["#173940", "#4B6670", "#7B493D", "#E9DFAF", "#385C50"],
    blend: "multiply",
  },
];

const colourThemeScript = `(() => {
  const themes = ${JSON.stringify(colourThemes)};
  let previous = -1;
  try {
    const storedTheme = sessionStorage.getItem("reed-colour-theme");
    if (storedTheme !== null) previous = Number(storedTheme);
  } catch {}
  let index = Math.floor(Math.random() * (themes.length - (previous >= 0 && previous < themes.length ? 1 : 0)));
  if (previous >= 0 && previous < themes.length && index >= previous) index += 1;
  const theme = themes[index];
  const root = document.documentElement;
  root.style.setProperty("--brand-bg", theme.bg);
  root.style.setProperty("--brand-text", theme.text);
  root.style.setProperty("--brand-muted", theme.muted);
  root.style.setProperty("--brand-soft", theme.soft);
  root.style.setProperty("--brand-faint", theme.faint);
  root.style.setProperty("--brand-line", theme.line);
  root.style.setProperty("--brand-shadow", theme.shadow);
  theme.particles.forEach((colour, particleIndex) => {
    root.style.setProperty("--brand-particle-" + (particleIndex + 1), colour);
  });
  root.style.setProperty("--brand-particle-blend", theme.blend);
  try { sessionStorage.setItem("reed-colour-theme", String(index)); } catch {}
})();`;

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
    <html lang="en" className={roboto.variable} suppressHydrationWarning>
      <head>
        <script
          id="reed-colour-theme"
          dangerouslySetInnerHTML={{ __html: colourThemeScript }}
        />
      </head>
      <body className="min-h-dvh font-sans antialiased">
        <NavBar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

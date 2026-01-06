"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/Section";
import HardLink from "@/components/HardLink";
import CutCornerFrame from "@/components/CutCornerFrame";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/80 backdrop-blur">
      <Container className="py-3">
        <div className="relative flex items-center justify-center">
          <HardLink href="/" className="group relative inline-block">
            <CutCornerFrame
              cutPx={8}
              borderColor="transparent"
              borderWidthPx={0}
              className={`transition-opacity duration-300 ${scrolled ? "opacity-0" : "opacity-100"}`}
            >
              <div className="bg-accent px-4 py-2 md:px-5 md:py-2.5 inline-flex items-baseline gap-2">
                <span className="text-lg font-semibold tracking-tightish text-white">
                  Reed Solutions
                </span>
                <span className="hidden text-xs md:inline text-white/80">
                  Custom software studio
                </span>
              </div>
            </CutCornerFrame>
            <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 pointer-events-none ${scrolled ? "opacity-100" : "opacity-0"}`}>
              <div className="inline-flex items-baseline gap-2 px-4 py-2 md:px-5 md:py-2.5">
                <span className="text-lg font-semibold tracking-tightish text-ink">
                  Reed Solutions
                </span>
                <span className="hidden text-xs md:inline text-muted">
                  Custom software studio
                </span>
              </div>
            </div>
          </HardLink>

          <HardLink
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-0 focus:bg-white/70 focus:px-3 focus:py-2"
          >
            Skip to content
          </HardLink>
        </div>
      </Container>
    </header>
  );
}

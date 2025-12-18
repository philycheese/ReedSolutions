import { Hero } from "@/components/sections/hero";
import { Capabilities } from "@/components/sections/capabilities";
import { CaseStudyHighlight } from "@/components/sections/case-study-highlight";
import { Process } from "@/components/sections/process";
import { Pricing } from "@/components/sections/pricing";
import { About } from "@/components/sections/about";
import { ContactCta } from "@/components/sections/contact-cta";

export default function HomePage() {
  return (
    <div className="space-y-20">
      <Hero />
      <Capabilities />
      <CaseStudyHighlight />
      <Process />
      <Pricing />
      <About />
      <ContactCta />
    </div>
  );
}

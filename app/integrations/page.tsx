import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Section";
import { IntegrationEnquiry, SoftwareList } from "./IntegrationContent";
import { integrationExamples } from "./examples";
import styles from "./integrations.module.css";

export const metadata: Metadata = {
  title: "Integrations — Reed Solutions",
  description: "Explore Reed Solutions integration examples. See which software each business uses, what the team did by hand and how the workflow changes.",
};

export default function IntegrationsPage() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <Container>
          <p className={styles.label}>Integrations</p>
          <div className={styles.intro}>
            <h1 className={styles.title}>Connect systems.<br />Simplify work.</h1>
            <p>See how we connect the software your team already uses, one everyday job at a time.</p>
          </div>
        </Container>
      </header>

      <section className={styles.feature} aria-label="Integration examples">
        <Container>
          {integrationExamples.map((example) => (
            <article className={styles.example} key={example.href}>
              <div className={styles.exampleShot}>
                <Image
                  src={`${process.env.BASE_PATH || ""}${example.screenshot.src}`}
                  width={example.screenshot.width}
                  height={example.screenshot.height}
                  alt={example.screenshot.alt}
                  sizes="(max-width: 767px) 90vw, 48vw"
                />
              </div>
              <div className={styles.exampleCopy}>
                <p className={styles.label}>{example.industry}</p>
                <h2 className={styles.featureTitle}>
                  <Link className={styles.exampleLink} href={example.href}>{example.title}</Link>
                </h2>
                <SoftwareList tools={example.software} />
                <p>{example.blurb}</p>
                <span aria-hidden="true" className={styles.exampleAction}>Explore the example</span>
              </div>
            </article>
          ))}
        </Container>
      </section>

      <IntegrationEnquiry />
    </div>
  );
}

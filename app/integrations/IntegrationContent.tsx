import { Container } from "@/components/Section";
import { contactEmail } from "@/lib/content";
import styles from "./integrations.module.css";

export function SoftwareList({ tools }: { tools: readonly string[] }) {
  return (
    <ul className={styles.software} aria-label="Software used">
      {tools.map((tool) => <li key={tool}>{tool}</li>)}
    </ul>
  );
}

export function IntegrationEnquiry() {
  const subject = encodeURIComponent("A workflow we still do by hand");
  const body = encodeURIComponent("We use…\n\nThe part we still do by hand is…\n");
  return (
    <section className={styles.enquiry}>
      <Container className={styles.enquiryGrid}>
        <h2 className={styles.sectionTitle}>What does your team still check by hand?</h2>
        <div>
          <p>Tell us which systems you use and what someone has to do between them.</p>
          <a className={styles.action} href={`mailto:${contactEmail}?subject=${subject}&body=${body}`}>Tell us about your workflow</a>
        </div>
      </Container>
    </section>
  );
}

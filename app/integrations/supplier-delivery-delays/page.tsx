import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Section";
import { workshopExample } from "../examples";
import { IntegrationEnquiry, SoftwareList } from "../IntegrationContent";
import IntegrationFilm from "../IntegrationFilm";
import styles from "../integrations.module.css";

const title = "One delivery slips. Who needs to know?";
const description = "A workshop example connecting Microsoft Outlook, Dynamics 365 Business Central and WhatsApp to find the customer affected by a supplier delay.";

export const metadata: Metadata = {
  title: `${title} — Reed Solutions`,
  description,
  alternates: { canonical: workshopExample.href },
  openGraph: {
    title, description, type: "article", url: workshopExample.href,
    images: [{ url: "/media/integrations/supplier-delivery-delays/poster.png", width: 1920, height: 1080, alt: title }],
  },
};

export default function SupplierDeliveryDelaysPage() {
  return (
    <article className={styles.page}>
      <header className={styles.hero}>
        <Container>
          <Link className={styles.back} href="/integrations/">All integrations</Link>
          <div className={styles.caseOpening}>
            <div className={styles.caseIntro}>
              <p className={styles.label}>{workshopExample.title}</p>
              <h1 className={styles.caseTitle}>{title}</h1>
              <SoftwareList tools={workshopExample.software} />
              <p>A supplier is delivering 40 bearings two days late. Three customer orders use that bearing. Only one customer needs a heads-up.</p>
            </div>
            <IntegrationFilm {...workshopExample.film} />
          </div>
        </Container>
      </header>
      <section className={styles.section}>
        <Container className={styles.split}>
          <h2 className={styles.sectionTitle}>From a supplier email to a decision.</h2>
          <dl className={styles.rows}>
            <div><dt>The manual check</dt><dd>A buyer finds the email in Outlook, copies the purchase order number into Business Central and checks stock, reservations and the dates promised to each customer. Comparing the wrong order can leave Sales calling the wrong person.</dd></div>
            <div><dt>With the portal</dt><dd>AI reads the incoming supplier update. The portal matches the purchase order and part, then checks which customer orders depend on that delivery. An email that says “Thursday or Friday” waits for someone to confirm the date.</dd></div>
          </dl>
        </Container>
      </section>
      <section className={styles.feature}>
        <Container className={styles.split}>
          <div><p className={styles.label}>The result</p><h2 className={styles.sectionTitle}>Three orders.<br />One call.</h2></div>
          <dl className={styles.rows}>
            <div><dt>Lakeside Controls</dt><dd>Its 12 bearings are already on the shelf. The delay has no effect on this order.</dd></div>
            <div className={styles.atRisk}><dt>Limmat Packaging</dt><dd>Its 16 bearings were promised for Wednesday. They arrive on Thursday. Sales gets the flag.</dd></div>
            <div><dt>Jura Automation</dt><dd>Its 24 bearings are due to the customer on Friday. Thursday’s delivery still meets the promise.</dd></div>
          </dl>
        </Container>
      </section>
      <section className={styles.section}>
        <Container className={styles.split}>
          <div>
            <p className={styles.label}>Customer follow-up</p>
            <h2 className={styles.sectionTitle}>You decide what happens next.</h2>
            <p className={styles.aside}>The order keeps the supplier notice and a record of every action. If the same update arrives again, it leads back to that record.</p>
          </div>
          <dl className={styles.rows}>
            <div><dt>Flag a call</dt><dd>Sales sees who needs a call, which part is late and what date the customer was promised.</dd></div>
            <div><dt>Approve a message</dt><dd>The portal drafts an email or WhatsApp message. Someone on your team can read it and approve it with a click.</dd></div>
            <div><dt>Send automatically</dt><dd>You can set a rule for WhatsApp to update the customer whenever a confirmed delay puts their order at risk.</dd></div>
          </dl>
        </Container>
      </section>
      <IntegrationEnquiry />
    </article>
  );
}

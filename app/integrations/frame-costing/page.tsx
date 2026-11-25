import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Section";
import { IntegrationEnquiry, SoftwareList } from "../IntegrationContent";
import IntegrationFilm from "../IntegrationFilm";
import { frameCostingExample } from "../examples";
import styles from "../integrations.module.css";

const { title, href, software, film, screenshot, customerPdf } = frameCostingExample;
const description = "See how a workshop portal reads a revised Onshape drawing, recalculates the quote using the workshop’s own bexio prices and creates a draft invoice in one click.";
const basePath = process.env.BASE_PATH || "";

export const metadata: Metadata = {
  title: `${film.title} — Reed Solutions`,
  description,
  alternates: { canonical: href },
  openGraph: {
    title: film.title, description, type: "article", url: href,
    images: [{ url: screenshot.src, width: screenshot.width, height: screenshot.height, alt: screenshot.alt }],
  },
};

export default function FrameCostingPage() {
  return (
    <article className={styles.page}>
      <header className={styles.hero}>
        <Container>
          <Link className={styles.back} href="/integrations/">All integrations</Link>
          <div className={styles.caseOpening}>
            <div className={styles.caseIntro}>
              <p className={styles.label}>{title}</p>
              <h1 className={styles.caseTitle}>{film.title}</h1>
              <SoftwareList tools={software} />
              <p>You’ve quoted CHF 270 to cut and fit four steel rails for a shop’s display frame. The shop calls back. Could you make it a metre longer to fill more of the window?</p>
            </div>
            <IntegrationFilm {...film} />
          </div>
        </Container>
      </header>

      <section className={styles.section}>
        <Container className={styles.split}>
          <h2 className={styles.sectionTitle}>When the customer changes the design</h2>
          <dl className={styles.rows}>
            <div><dt>The manual check</dt><dd>Your engineer draws the frame in Onshape. You compare the two drawings, note the length of each rail and look up whole bars of steel in your bexio catalogue. Then you sketch the cuts to work out which bars to buy.</dd></div>
            <div><dt>With the project portal</dt><dd>All your jobs and their drawings are in one place. Open the display-frame project and the engineer’s latest Onshape design is already there, alongside the version you originally quoted.</dd></div>
          </dl>
        </Container>
      </section>

      <section className={styles.feature}>
        <Container className={styles.split}>
          <div>
            <p className={styles.label}>Onshape + bexio</p>
            <h2 className={styles.sectionTitle}>The portal prices the change for you</h2>
            <p className={styles.aside}>When your engineer saves Version B in Onshape, the portal automatically rereads the drawing. It works out how much extra steel you need, compares bar prices in your existing bexio catalogue and updates the quote using the labour and markup you’ve already set.</p>
            <p className={styles.aside}>By the time you call the shop back, the new quote is ready to review. <strong>CHF 330 excluding VAT, up CHF 60.</strong></p>
          </div>
          <figure>
            <Image src={basePath + screenshot.src} width={screenshot.width} height={screenshot.height}
              alt={screenshot.alt} sizes="(max-width: 767px) 90vw, 52vw" />
            <figcaption className={styles.aside}>The portal shows the drawing it priced and the cutting plan it used, so you can explain the change to your customer.</figcaption>
          </figure>
        </Container>
      </section>

      <section className={styles.section}>
        <Container className={styles.split}>
          <h2 className={styles.sectionTitle}>What goes to the customer?</h2>
          <dl className={styles.rows}>
            <div><dt>An invoice ready for review</dt><dd>You can adjust labour and markup before finalising the design and price. When the work is done, one click in the portal creates the draft invoice in bexio.</dd></div>
            <div><dt>The drawing, cuts and price in one PDF</dt><dd>When the shop asks about the extra CHF 60, you can export the revised drawing, the cutting plan and the agreed price together from the portal.</dd>
              <dd><a className={styles.action} href={basePath + customerPdf} download>Download the customer PDF</a></dd>
            </div>
          </dl>
        </Container>
      </section>
      <IntegrationEnquiry />
    </article>
  );
}

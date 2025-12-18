export const contactEmail = "hello@reedsolutions.ch";

// Content model types used by UI components (static site friendly).
export type Insight = {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  outcome: string;
  tags: string[];
  image: {
    src: string;
    alt: string;
  };
};

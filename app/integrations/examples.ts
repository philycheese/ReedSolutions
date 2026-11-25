const workshopMedia = "/media/integrations/supplier-delivery-delays";

export const workshopExample = {
  title: "Supplier delays & stock availability",
  href: "/integrations/supplier-delivery-delays/",
  industry: "Manufacturing & distribution",
  software: ["Microsoft Outlook", "Dynamics 365 Business Central", "WhatsApp"],
  blurb: "A supplier moves a delivery date. The workshop portal checks which customer orders rely on those parts and shows Sales who needs a call.",
  film: {
    title: "One delivery slips. Who needs to know?",
    burnedInCaptions: true,
    label: "Workshop film",
    duration: "2 min 01 sec",
    src: `${workshopMedia}/workshop-film.mp4?edit=2`,
    poster: `${workshopMedia}/poster.png`,
    portrait: {
      src: `${workshopMedia}/workshop-film-portrait.mp4?edit=2`,
      poster: `${workshopMedia}/poster-portrait.png`,
    },
    captions: `${workshopMedia}/workshop-captions.vtt`,
  },
  screenshot: {
    src: `${workshopMedia}/order-register.png`,
    width: 832,
    height: 416,
    alt: "The order register shows three customer orders. Only Limmat Packaging is flagged for a call.",
  },
};

const frameMedia = "/media/integrations/frame-costing";

export const frameCostingExample = {
  title: "Design changes & job costing",
  href: "/integrations/frame-costing/",
  industry: "Metal fabrication & shopfitting",
  software: ["Onshape", "bexio"],
  blurb: "A shop wants its display frame a metre longer. The workshop portal reads the revised Onshape drawing and uses steel prices from bexio to work out what the change will cost.",
  film: {
    title: "What will the longer frame cost?",
    burnedInCaptions: true,
    allowMutedAutoplay: true,
    label: "Display frame film",
    duration: "2 min 25 sec",
    src: `${frameMedia}/frame-film.mp4?edit=3`,
    poster: `${frameMedia}/poster.png`,
    portrait: {
      src: `${frameMedia}/frame-film-portrait.mp4?edit=3`,
      poster: `${frameMedia}/poster-portrait.png`,
    },
    captions: `${frameMedia}/frame-captions.vtt?edit=2`,
  },
  screenshot: {
    src: `${frameMedia}/cutting-plan.png`,
    width: 1877,
    height: 918,
    alt: "The revised frame and its cutting plan. Three rails fit on a 12 m bar and the fourth on a 6 m bar, for CHF 144 in steel.",
  },
  customerPdf: `${frameMedia}/FC-218-B.pdf`,
};

export const integrationExamples = [workshopExample, frameCostingExample];

const workshopMedia = "/media/integrations/supplier-delivery-delays";

export const workshopExample = {
  title: "Workshop example",
  href: "/integrations/supplier-delivery-delays/",
  industry: "Manufacturing & distribution",
  software: ["Microsoft Outlook", "Dynamics 365 Business Central", "WhatsApp"],
  blurb: "A supplier moves a delivery date. The workshop portal checks which customer orders rely on those parts and shows Sales who needs a call.",
  film: {
    title: "One delivery slips. Who needs to know?",
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

export const integrationExamples = [workshopExample];

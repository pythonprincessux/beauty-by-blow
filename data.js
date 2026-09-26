/**
 * ================================================================
 * BEAUTY BY BLOW — SERVICES DATA
 * ----------------------------------------------------------------
 * Core service information used throughout the website.
 *
 * category must be one of: "beauty" | "body" | "wellness"
 * ================================================================
 */

const SERVICES = [
  {
    id: "yoni-steam",
    name: "Yoni Steam Rituals",
    category: "wellness",
    tagline: "Wellness",
    description:
      "A private, non-medical external botanical steam ritual centered on relaxation, intention, and personal self-care. Choose from three ritual experiences and five signature blends.",
    duration: "30–60 min",
    price: "From $45"
  },

  {
    id: "teeth-whitening",
    name: "BLOW Bright Teeth Whitening",
    category: "beauty",
    tagline: "Beauty",
    description:
      "A cosmetic whitening service designed to brighten the appearance of your smile in a comfortable private-studio setting.",
    duration: "60 min",
    price: "$75 intro"
  },

  {
    id: "sauna-wrap",
    name: "BLOW Detox Sauna Wrap",
    category: "body",
    tagline: "Body",
    description:
      "A warm body-wrap experience designed to promote relaxation and complement your personal body-care routine.",
    duration: "45 min",
    price: "$45 intro"
  },

  {
    id: "lymphatic-massage",
    name: "BLOW Lymphatic Reset",
    category: "body",
    tagline: "Body",
    description:
      "A gentle, rhythmic body service focused on relaxation and supporting natural lymphatic movement.",
    duration: "60 min",
    price: "$85 intro"
  },

  {
    id: "wood-therapy",
    name: "BLOW Body Sculpt — Wood Therapy",
    category: "body",
    tagline: "Body",
    description:
      "A body-contouring massage technique using specialized wooden tools and tailored to your individual comfort level.",
    duration: "60 min",
    price: "$75 intro"
  },

  {
    id: "lash-extensions",
    name: "Lash Extensions",
    category: "beauty",
    tagline: "Beauty",
    description:
      "Customized lash extensions ranging from a soft classic look to hybrid and fuller-volume styles.",
    duration: "2.5–3.5 hrs",
    price: "From $85 intro"
  },

  {
    id: "microblading",
    name: "BLOW Signature Microblading",
    category: "beauty",
    tagline: "Beauty",
    description:
      "A semi-permanent brow service designed to create the appearance of fuller, more defined, natural-looking brows.",
    duration: "2.5–3 hrs",
    price: "$250 intro"
  },

  {
    id: "brow-lamination",
    name: "BLOW Brow Lamination",
    category: "beauty",
    tagline: "Beauty",
    description:
      "A brow styling treatment designed to create a fuller, lifted, polished appearance that holds its shape.",
    duration: "45–60 min",
    price: "$65 intro"
  }
];


/**
 * ================================================================
 * GALLERY
 * ----------------------------------------------------------------
 * Keep empty until Beauty By BLOW has approved client/studio
 * photography for the public portfolio.
 * ================================================================
 */

const GALLERY_ITEMS = [];


/**
 * ================================================================
 * TESTIMONIALS
 * ----------------------------------------------------------------
 * Keep empty until real client reviews are supplied and approved.
 * ================================================================
 */

const TESTIMONIALS = [];


/**
 * Node/CommonJS support for testing.
 */
if (typeof module !== "undefined") {
  module.exports = {
    SERVICES,
    GALLERY_ITEMS,
    TESTIMONIALS
  };
}
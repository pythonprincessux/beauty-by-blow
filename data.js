/**
 * ================================================================
 * SERVICES DATA
 * ----------------------------------------------------------------
 * This is the ONLY place you need to edit to update service names,
 * descriptions, categories, durations, and prices across the whole
 * website (services grid + booking flow both read from this file).
 *
 * category must be one of: "beauty" | "body" | "wellness"
 * duration is a display string, e.g. "45 min"
 * price is a display string, e.g. "$65" or "From $120"
 * ================================================================
 */

const SERVICES = [
  {
    id: "yoni-steam",
    name: "Yoni Steam Rituals",
    category: "wellness",
    tagline: "Wellness",
    description: "A private, non-medical external botanical steam ritual centered on relaxation, intention, and personal self-care. Choose from three ritual experiences and five signature blends.",
    duration: "30–60 min",
    price: "From $45"
  },
  {
    id: "teeth-whitening",
    name: "Teeth Whitening",
    category: "beauty",
    tagline: "Beauty",
    description: "A cosmetic whitening service designed to brighten the appearance of your smile before your next big moment — or just because.",
    duration: "Duration varies",
    price: "Contact for pricing"
  },
  {
    id: "sauna-wrap",
    name: "Sauna Wrap",
    category: "body",
    tagline: "Body",
    description: "A warm body-wrap experience designed to promote relaxation and complement your self-care routine from head to toe.",
    duration: "Duration varies",
    price: "Contact for pricing"
  },
  {
    id: "lymphatic-massage",
    name: "Lymphatic Massage",
    category: "body",
    tagline: "Body",
    description: "A gentle, rhythmic massage service focused on relaxation and supporting natural lymphatic movement.",
    duration: "Duration varies",
    price: "Contact for pricing"
  },
  {
    id: "wood-therapy",
    name: "Wood Therapy",
    category: "body",
    tagline: "Body",
    description: "A body-contouring massage technique using specialized wooden tools, tailored to your comfort level.",
    duration: "Duration varies",
    price: "Contact for pricing"
  },
  {
    id: "lash-extensions",
    name: "Lash Extensions",
    category: "beauty",
    tagline: "Beauty",
    description: "Customized lash extensions designed to enhance the eyes — from a soft natural look to fuller, glamorous volume.",
    duration: "Duration varies",
    price: "Contact for pricing"
  },
  {
    id: "microblading",
    name: "Microblading",
    category: "beauty",
    tagline: "Beauty",
    description: "A semi-permanent brow service designed to create the appearance of fuller, more defined, natural-looking brows.",
    duration: "Duration varies",
    price: "Contact for pricing"
  },
  {
    id: "brow-lamination",
    name: "Brow Lamination",
    category: "beauty",
    tagline: "Beauty",
    description: "A brow styling treatment designed to create a fuller, lifted, polished brow that holds its shape.",
    duration: "Duration varies",
    price: "Contact for pricing"
  }
];

// Placeholder gallery / portfolio images — Asia can swap the `img` values
// for real photography without touching layout markup.
const GALLERY_ITEMS = [
  { id: "g1", label: "Lash results", size: "tall" },
  { id: "g2", label: "Studio corner", size: "square" },
  { id: "g3", label: "Brow lamination", size: "short" },
  { id: "g4", label: "Whitening glow", size: "square" },
  { id: "g5", label: "Wood therapy tools", size: "tall" },
  { id: "g6", label: "Sauna wrap set-up", size: "short" },
  { id: "g7", label: "Microblading detail", size: "square" },
  { id: "g8", label: "Studio florals", size: "tall" },
  { id: "g9", label: "Lash close-up", size: "short" }
];

// Testimonials stay empty until real client reviews are supplied.
const TESTIMONIALS = [];

if (typeof module !== "undefined") {
  module.exports = { SERVICES, GALLERY_ITEMS, TESTIMONIALS };
}

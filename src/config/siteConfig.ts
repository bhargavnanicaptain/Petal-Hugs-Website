// ============================================================================
// PETAL HUGS — SITE CONFIGURATION (single source of truth)
// ============================================================================
// Edit this file to update brand details, contact links, colors, and the
// pricing toggle. No other file needs to change when these values do.
// ============================================================================

export const siteConfig = {
  brand: {
    name: "Petal Hugs",
    tagline: "Handmade with Love",
    philosophy: "Little Flowers. Endless Love.",
    logo: "/assets/brand/logo/petal-hugs-logo.png",
    description:
      "A handmade gifting and creative crafts brand, turning little handmade creations into big smiles and lasting memories.",
  },

  story: {
    origin:
      "Petal Hugs began with a girl's simple love for handmade crafts. What started as a quiet creative interest slowly blossomed into a dream — to transform that passion into a business of her own, with an identity entirely hers.",
    mission:
      "We believe that even the smallest gift can create a beautiful memory. Every Petal Hugs creation is thoughtfully handcrafted with care, creativity, and attention to detail — turning ordinary moments into something special.",
    vision:
      "We want Petal Hugs to be more than a gifting brand — a place where people find meaningful ways to express love, celebrate relationships, surprise their loved ones, and create memories that last. Our purpose is simple: to turn little handmade creations into big smiles.",
  },

  // Soft pastel palette built directly from the logo.
  // These map to CSS custom properties in src/index.css — edit there to
  // keep Tailwind utilities and raw CSS in sync.
  colors: {
    blushPink: "#F6C9D6",
    pastelPink: "#FADCE4",
    maroon: "#7A2E3A",
    cream: "#FFF8F1",
    ivory: "#FFFDF9",
    white: "#FFFFFF",
    gold: "#D9A441",
  },

  contact: {
    whatsapp: {
      number: "+91 8074588232",
      link: "https://wa.me/918074588232",
    },
    instagram: {
      handle: "@petalhugs_16",
      link: "https://www.instagram.com/petalhugs_16",
    },
    gmail: "harshithakp278@gmail.com",
    location: "Tumakuru, Karnataka, India",
  },

  // ----------------------------------------------------------------------
  // PRICING TOGGLE
  // When ready to show prices, flip this to `true` and add a `price` field
  // to each product in products.ts — no component changes required
  // anywhere else in the site.
  // ----------------------------------------------------------------------
  pricing: {
    enabled: false,
  },

  // Delivery is still being decided (online ordering flow not finalized).
  // Set `enabled: true` and fill in details once that's settled.
  delivery: {
    enabled: false,
    note: "Delivery details coming soon — reach out on WhatsApp for current availability.",
  },

  whyChooseUs: [
    {
      title: "Handmade with Love",
      description: "Every piece is crafted by hand, never mass-produced.",
      icon: "heart",
    },
    {
      title: "Unique Creations",
      description: "No two bouquets are ever quite the same.",
      icon: "sparkles",
    },
    {
      title: "Thoughtful Gifting",
      description: "Designed to turn small moments into lasting memories.",
      icon: "gift",
    },
    {
      title: "Attention to Detail",
      description: "From petal to packaging, every detail is considered.",
      icon: "eye",
    },
    {
      title: "Personalized Experiences",
      description: "Customization available to make each gift truly yours.",
      icon: "wand",
    },
    {
      title: "Creative Craftsmanship",
      description: "Where creativity and skill come together, petal by petal.",
      icon: "palette",
    },
  ],
};

export type SiteConfig = typeof siteConfig;
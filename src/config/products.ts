// ============================================================================
// PETAL HUGS — PRODUCT CATALOG (single source of truth)
// ============================================================================
// To add a new product: add an object to `products` below.
// To add a new category: add an object to `categories` below, then use its
// `id` in a product's `categoryId`.
// To enable pricing later: set siteConfig.pricing.enabled = true and add a
// `price` field (in rupees, as a number) to each product you want priced.
// ============================================================================

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  categoryId: string;
  images: string[]; // paths relative to /public
  description: string;
  customizable: boolean;
  customizationNote?: string;
  price?: number; // only shown when siteConfig.pricing.enabled is true
  isNewArrival?: boolean;
}

export const categories: ProductCategory[] = [
  {
    id: "velvet-bouquets",
    name: "Velvet Flower Bouquets",
    description: "Lush handmade bouquets crafted from soft velvet blooms.",
  },
  {
    id: "crochet-bouquets",
    name: "Crochet Flower Bouquets",
    description: "Hand-crocheted flower arrangements, stitched with love.",
  },
  {
    id: "individual-flowers",
    name: "Individual Handmade Flowers",
    description: "Single stems and blooms, perfect as standalone gifts or decor.",
  },
  {
    id: "keychains",
    name: "Handmade Flower Keychains",
    description: "Colorful flower-shaped keychains for everyday carrying.",
  },
  {
    id: "gift-arrangements",
    name: "Flower Gift Arrangements",
    description: "Flowers thoughtfully paired with decorative gift cards.",
  },
  {
    id: "custom-gifts",
    name: "Customized Handmade Gifts",
    description: "Personalized creations tailored to your preferences and occasion.",
  },
];

export const products: Product[] = [
  {
    id: "velvet-rose-bouquet-black-wrap",
    name: "Classic Velvet Bouquet",
    categoryId: "velvet-bouquets",
    images: ["/assets/products/bouquets/velvet-bouquet-lifestyle-01.jpg"],
    description:
      "A timeless handmade bouquet crafted with soft velvet blooms, wrapped elegantly and finished with a satin ribbon — a statement gift for any occasion.",
    customizable: true,
    customizationNote: "Colors and wrap style can be customized, subject to availability.",
  },
  {
    id: "yellow-velvet-lily-stem",
    name: "Yellow Velvet Lily Stem",
    categoryId: "individual-flowers",
    images: ["/assets/products/individual-flowers/flower-stem-yellow-lily.jpg"],
    description:
      "A single handcrafted lily stem in soft buttery yellow — a delicate gift on its own or a lovely addition to any arrangement.",
    customizable: true,
    customizationNote: "Available in other colors on request, subject to availability.",
  },
  {
    id: "rainbow-individual-flower-set",
    name: "Rainbow Bloom Collection",
    categoryId: "individual-flowers",
    images: [
      "/assets/products/individual-flowers/individual-flowers-pink-purple-yellow.jpg",
      "/assets/products/individual-flowers/individual-flowers-full-color-set.jpg",
    ],
    description:
      "A vibrant set of individual handmade flower heads in a full spectrum of colors, each finished with a delicate pearl center.",
    customizable: true,
    customizationNote: "Mix and match your own color set, subject to availability.",
  },
  {
    id: "potted-pink-lily-pair",
    name: "Potted Pink Lily Pair",
    categoryId: "individual-flowers",
    images: ["/assets/products/individual-flowers/flower-potted-pink-pair.jpg"],
    description:
      "Two charming velvet lilies nestled in handwoven mini pots — a sweet decorative piece for a desk, shelf, or gifting table.",
    customizable: true,
  },
  {
    id: "red-rose-greeting-card",
    name: "Red Rose Greeting Card Arrangement",
    categoryId: "gift-arrangements",
    images: ["/assets/products/gift-arrangements/gift-arrangement-red-rose-card.jpg"],
    description:
      "A handcrafted red velvet rose mounted on a beautifully illustrated greeting card — a ready-to-gift surprise for any good-luck or everyday occasion.",
    customizable: true,
    customizationNote: "Card message and flower color can be personalized.",
  },
  {
    id: "purple-blossom-greeting-card",
    name: "Purple Blossom Greeting Card Arrangement",
    categoryId: "gift-arrangements",
    images: ["/assets/products/gift-arrangements/gift-arrangement-purple-card.jpg"],
    description:
      "A single oversized purple velvet blossom with pearl stamens, presented on a best-wishes greeting card tied with a satin bow.",
    customizable: true,
    customizationNote: "Card message and flower color can be personalized.",
  },
  {
    id: "keychain-bunch-multicolor",
    name: "Multicolor Flower Keychain Bunch",
    categoryId: "keychains",
    images: ["/assets/products/keychains/keychain-bunch-red-teal-purple.jpg"],
    description:
      "A cheerful cluster of handmade flower keychains in red, teal, and purple — colorful companions for your keys or bag.",
    customizable: true,
  },
  {
    id: "daisy-starflower-keychain-duo",
    name: "Daisy & Starflower Keychain Duo",
    categoryId: "keychains",
    images: ["/assets/products/keychains/keychain-blue-daisy-yellow.jpg"],
    description:
      "A sky-blue daisy paired with a golden five-petal starflower — a sweet duo of handmade keychains.",
    customizable: true,
  },
  {
    id: "pastel-petal-keychain-set",
    name: "Pastel Petal Keychain Set",
    categoryId: "keychains",
    images: ["/assets/products/keychains/keychain-set-blue-pink-grey.jpg"],
    description:
      "A set of four handmade flower keychains in soft blues, pinks, and grey tones.",
    customizable: true,
  },
  {
    id: "garden-bloom-keychain-set",
    name: "Garden Bloom Keychain Set",
    categoryId: "keychains",
    images: ["/assets/products/keychains/keychain-set-blue-yellow-red-purple.jpg"],
    description:
      "A lively set of four flower keychains — blue, sunflower yellow, red, and purple — each with its own handcrafted character.",
    customizable: true,
  },
];

// Helper: products flagged for the New Arrivals section.
// Flip `isNewArrival: true` on any product above to feature it here.
export const newArrivals = () => products.filter((p) => p.isNewArrival);

export const productsByCategory = (categoryId: string) =>
  products.filter((p) => p.categoryId === categoryId);

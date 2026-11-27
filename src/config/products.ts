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
  {
    id: "wrapped-bouquets",
    name: "Wrapped Single-Stem Bouquets",
    description: "Individually wrapped mini bouquets, finished with ribbon — ready to gift.",
  },
  {
    id: "potted-plants",
    name: "Mini Potted Flower Collection",
    description: "Tiny handmade potted flowers in a variety of styles, perfect as desk decor.",
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
    images: ["/assets/products/individual-flowers/handcrafted-yellow-lily-bloom.png"],
    description:
      "A single handcrafted lily stem in soft buttery yellow — a delicate gift on its own or a lovely addition to any arrangement.",
    customizable: true,
    customizationNote: "Available in other colors on request, subject to availability.",
  },
  {
    id: "rainbow-individual-flower-set",
    name: "Rainbow Bloom Collection",
    categoryId: "individual-flowers",
    images: ["/assets/products/individual-flowers/fuzzy-flower-trio.png"],
    description:
      "A vibrant set of individual handmade flower heads in a full spectrum of colors, each finished with a delicate pearl center.",
    customizable: true,
    customizationNote: "Mix and match your own color set, subject to availability.",
  },
  {
    id: "potted-pink-lily-pair",
    name: "Potted Pink Lily Pair",
    categoryId: "individual-flowers",
    images: ["/assets/products/individual-flowers/potted-hibiscus-pair.png"],
    description:
      "Two charming velvet blooms nestled in handwoven mini pots — a sweet decorative piece for a desk, shelf, or gifting table.",
    customizable: true,
  },
  {
    id: "velvet-sunflower-stem",
    name: "Velvet Sunflower Stem",
    categoryId: "individual-flowers",
    images: [
      "/assets/products/individual-flowers/velvet-sunflower-stem-01.png",
      "/assets/products/individual-flowers/velvet-sunflower-stem-02.png",
    ],
    description:
      "A cheerful full-bloom velvet sunflower on a soft wrapped stem — a bright, sunny gift on its own or as the centerpiece of a bouquet.",
    customizable: true,
    isNewArrival: true,
  },
  {
    id: "red-rose-greeting-card",
    name: "Mint Floral Rose Bookmark",
    categoryId: "gift-arrangements",
    images: ["/assets/products/gift-arrangements/mint-floral-rose-bookmark.png"],
    description:
      "A handcrafted red velvet rose mounted on a mint floral bookmark card, tied with a satin ribbon — a ready-to-gift surprise that doubles as a keepsake.",
    customizable: true,
    customizationNote: "Card design and flower color can be personalized.",
  },
  {
    id: "wrapped-lily-trio-bouquet",
    name: "Wrapped Lily Trio Bouquet",
    categoryId: "wrapped-bouquets",
    images: ["/assets/products/wrapped-lily-trio-bouquet.png"],
    description:
      "Single-stem lilies in soft yellow and purple, each individually wrapped in paper and tied with an organza bow — a delicate little gift.",
    customizable: true,
    customizationNote: "Colors and flower choice can be customized, subject to availability.",
    isNewArrival: true,
  },
  {
    id: "wrapped-sunflower-daisy-bouquet",
    name: "Sunflower & Daisy Wrapped Bouquet",
    categoryId: "wrapped-bouquets",
    images: ["/assets/products/wrapped-sunflower-daisy-bouquet.png"],
    description:
      "Handmade sunflowers and daisies wrapped in kraft paper and finished with a satin ribbon — a warm, sunny bouquet ready to gift.",
    customizable: true,
    isNewArrival: true,
  },
  {
    id: "mini-potted-flower-collection",
    name: "Mini Potted Flower Collection",
    categoryId: "potted-plants",
    images: ["/assets/products/mini-potted-flower-collection.jpg"],
    description:
      "Tiny handmade potted flowers — sunflowers, daisies, tulips, lilies, roses, hibiscus, lavender, and more — each finished with a lace or ribbon trim. Pick your favorite style.",
    customizable: true,
    customizationNote: "Choose your flower type, pot trim, and color, subject to availability.",
    isNewArrival: true,
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
    name: "Colorful Plush Flower Keychains",
    categoryId: "keychains",
    images: ["/assets/products/keychains/keychain-colorful-plush-bunch.png"],
    description:
      "A cheerful cluster of handmade flower keychains in bold blues, reds, and purples — colorful companions for your keys or bag.",
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

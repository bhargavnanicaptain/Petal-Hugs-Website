# Petal Hugs — Website

A premium, animated, frontend-only website for **Petal Hugs**, a handmade
gifting brand by sisters Harshitha & Mala. Built with React, TypeScript,
Vite, Tailwind CSS, and Framer Motion.

No backend, database, or server is required — this is a static site you can
host anywhere (Netlify, Vercel, GitHub Pages, etc.).

---

## Running locally

```bash
npm install
npm run dev
```

Open the printed localhost URL in your browser. The site reloads
automatically as you edit files.

To build the production version:

```bash
npm run build
npm run preview   # preview the production build locally
```

The built site ends up in the `dist/` folder — that folder is what you
deploy.

---

## Where to make common changes

Everything you'll want to update regularly lives in **two files**:

### 1. `src/config/siteConfig.ts` — brand & contact details

- Business name, tagline, philosophy, owner names
- Brand story / mission / vision text
- Color palette (also mirrored in `src/index.css` under `@theme`)
- WhatsApp, Instagram, Gmail, and location
- **Pricing toggle**: set `pricing.enabled` to `true` once you're ready to
  show prices — no other file needs to change.
- "Why Choose Us" feature list

### 2. `src/config/products.ts` — the product catalog

- `categories` — add a new category by adding an object with a unique `id`.
- `products` — add a new product by adding an object. Each needs:
  - `id` (unique, no spaces)
  - `name`
  - `categoryId` (must match a category's `id`)
  - `images` (array of paths — see "Adding new photos" below)
  - `description`
  - `customizable` (true/false) and optional `customizationNote`
  - `price` (optional number — only shown when pricing is enabled)
  - `isNewArrival: true` to feature it as a new arrival

The site automatically picks up anything you add here — no component code
needs to change.

---

## Adding new product photographs

1. Drop your new image file(s) into the matching folder under
   `public/assets/products/` (create a new subfolder for a new category if
   needed — e.g. `public/assets/products/crochet-bouquets/`).
2. Reference the path in `products.ts`, e.g.:
   ```ts
   images: ["/assets/products/crochet-bouquets/my-new-photo.jpg"]
   ```
3. That's it — the product grid, gallery, and modal all pick it up
   automatically.

Keep photos reasonably sized (under ~2MB each) for fast loading. Any common
image format (jpg, png, webp) works.

---

## Replacing the logo

The logo file lives at:

```
public/assets/brand/logo/petal-hugs-logo.png
```

Replace that file with your new logo **using the exact same filename**, and
it will update everywhere (navbar, hero, curtain intro, footer) automatically.
If you use a different filename, update the `logo` path in
`src/config/siteConfig.ts` instead.

---

## Updating prices

1. Add a `price` number to each product in `src/config/products.ts`.
2. In `src/config/siteConfig.ts`, set:
   ```ts
   pricing: {
     enabled: true,
   },
   ```
3. Rebuild (`npm run build`) and redeploy. Prices will now show on product
   cards and the detail modal, alongside the existing WhatsApp/Instagram
   enquiry buttons.

---

## Updating contact links

In `src/config/siteConfig.ts`, under `contact`:

```ts
contact: {
  whatsapp: { number: "+91 XXXXXXXXXX", link: "https://wa.me/91XXXXXXXXXX" },
  instagram: { handle: "@yourhandle", link: "https://www.instagram.com/yourhandle" },
  gmail: "you@gmail.com",
  location: "Your City, State, Country",
},
```

---

## Updating the tagline / business details

All of this is in `src/config/siteConfig.ts` under `brand` and `story` —
edit the text strings directly.

---

## Deployment

### Deploying to Netlify

1. Push this project to a GitHub repository (or drag-and-drop the `dist/`
   folder after running `npm run build` into Netlify's dashboard).
2. In Netlify: **New site from Git** → select your repo.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy — Netlify gives you a live URL immediately, and redeploys
   automatically on every push.

### Deploying to Vercel

1. Push this project to a GitHub repository.
2. In Vercel: **New Project** → import your repo.
3. Vercel auto-detects Vite — leave the defaults (build command
   `npm run build`, output directory `dist`).
4. Deploy.

Either platform is free for a site like this and both support a custom
domain if you'd like `petalhugs.com` or similar later.

---

## Project structure

```
src/
  components/      — all React components (Navbar, HeroSection, ProductCard, etc.)
  config/
    siteConfig.ts     — brand, contact, colors, pricing toggle (single source of truth)
    products.ts       — product catalog & categories
    imageManifest.json — reference map of organized photos to products
  utils/
    enquiry.ts       — WhatsApp/Instagram/Gmail link builders
  index.css          — Tailwind theme (colors, fonts, animations)
public/
  assets/
    brand/logo/        — the official logo
    products/           — organized product photos by category
    gallery/marketing/  — promotional graphics (not used as catalog photos)
```

---

## Notes on the uploaded photos

- One photo (`individual-flowers-full-color-set.jpg`) was lightly cropped
  to remove an unrelated third-party business card visible in a corner of
  the original — the flowers themselves are untouched.
- Two keychain photos had black screen-recording bars baked into the
  original image; those were cropped out for a cleaner catalog look.
- The designed "Our First Product" poster graphic is kept separate in
  `public/assets/gallery/marketing/` since it has text and logo baked in —
  it's meant for social media reuse, not as a catalog photo.

All original uploaded files remain untouched on your machine — only copies
were organized into this project.

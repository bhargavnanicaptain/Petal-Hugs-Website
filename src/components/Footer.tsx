import { siteConfig } from "../config/siteConfig";

export default function Footer() {
  return (
    <footer className="bg-maroon-dark text-cream/80 py-10 px-5">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-3">
        <img
          src={siteConfig.brand.logo}
          alt={siteConfig.brand.name}
          className="w-14 h-14 rounded-full object-contain"
        />
        <p className="font-display text-xl text-cream">
          {siteConfig.brand.name}
        </p>
        <p className="text-sm tracking-[0.2em] uppercase text-blush">
          {siteConfig.brand.tagline}
        </p>
        <p className="text-xs text-cream/50 mt-4">
          © {new Date().getFullYear()} {siteConfig.brand.name}. Handmade
          with love.
        </p>
      </div>
    </footer>
  );
}
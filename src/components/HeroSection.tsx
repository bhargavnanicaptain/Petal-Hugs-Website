import { motion } from "framer-motion";
import { siteConfig } from "../config/siteConfig";
import FloatingPetals from "./FloatingPetals";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-floral-texture bg-gradient-to-b from-pastel-pink-light via-cream to-cream pt-24 pb-16 px-5"
    >
      <FloatingPetals count={10} />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.img
          src={siteConfig.brand.logo}
          alt={siteConfig.brand.name}
          className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-contain mx-auto mb-6 shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />

        <motion.h1
          className="font-display text-4xl sm:text-6xl text-maroon mb-3 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          {siteConfig.brand.name}
        </motion.h1>

        <motion.p
          className="text-gold font-semibold tracking-[0.25em] uppercase text-sm sm:text-base mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {siteConfig.brand.tagline}
        </motion.p>

        <motion.p
          className="text-maroon/80 text-base sm:text-lg max-w-xl mx-auto mb-2 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          "{siteConfig.brand.philosophy}"
        </motion.p>

        <motion.p
          className="text-maroon/70 text-base sm:text-lg max-w-xl mx-auto mb-10 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {siteConfig.brand.description}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
        >
          <a
            href="#collection"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#collection")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 rounded-full bg-maroon text-cream font-medium shadow-lg hover:bg-maroon-dark hover:shadow-xl transition-all hover:-translate-y-0.5"
          >
            Explore Our Collection
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 rounded-full border-2 border-maroon text-maroon font-medium hover:bg-maroon hover:text-cream transition-all hover:-translate-y-0.5"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { siteConfig } from "../config/siteConfig";
import FloatingPetals from "./FloatingPetals";

const SESSION_KEY = "petalhugs_intro_played";

interface CurtainRevealProps {
  onDone: () => void;
}

export default function CurtainReveal({ onDone }: CurtainRevealProps) {
  const [stage, setStage] = useState<"curtains" | "reveal" | "done">("curtains");
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (prefersReducedMotion) {
      finish();
      return;
    }
    const t1 = setTimeout(() => setStage("reveal"), 1400);
    const t2 = setTimeout(() => finish(), 4200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function finish() {
    sessionStorage.setItem(SESSION_KEY, "true");
    setStage("done");
    onDone();
  }

  return (
    <AnimatePresence>
      {stage !== "done" && (
        <motion.div
          className="fixed inset-0 z-[90] bg-maroon-dark overflow-hidden flex items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Spotlight */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(255,248,241,0.18) 0%, rgba(90,30,40,0.6) 45%, rgba(40,10,16,0.97) 75%)",
            }}
          />

          <FloatingPetals count={16} />

          {/* Left curtain */}
          <motion.div
            className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-maroon to-maroon-dark shadow-2xl"
            style={{ transformOrigin: "left center" }}
            initial={{ x: 0 }}
            animate={{ x: stage === "reveal" ? "-105%" : 0 }}
            transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
          />
          {/* Right curtain */}
          <motion.div
            className="absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l from-maroon to-maroon-dark shadow-2xl"
            style={{ transformOrigin: "right center" }}
            initial={{ x: 0 }}
            animate={{ x: stage === "reveal" ? "105%" : 0 }}
            transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
          />

          {/* Logo + text reveal */}
          <div className="relative z-10 flex flex-col items-center text-center px-6">
            <motion.img
              src={siteConfig.brand.logo}
              alt={siteConfig.brand.name}
              className="w-28 h-28 sm:w-36 sm:h-36 rounded-full object-contain mb-5"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={
                stage === "reveal"
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.7 }
              }
              transition={{ duration: 1, delay: 0.3 }}
            />
            <motion.h1
              className="font-display text-3xl sm:text-5xl text-cream mb-2"
              initial={{ opacity: 0, y: 16 }}
              animate={
                stage === "reveal" ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }
              }
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {siteConfig.brand.name}
            </motion.h1>
            <motion.p
              className="text-blush text-base sm:text-lg tracking-[0.2em] uppercase"
              initial={{ opacity: 0, y: 10 }}
              animate={
                stage === "reveal" ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
              }
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              {siteConfig.brand.tagline}
            </motion.p>
          </div>

          <button
            onClick={finish}
            className="absolute bottom-6 right-6 z-20 text-cream/70 hover:text-cream text-sm underline underline-offset-4 transition-colors"
          >
            Skip intro
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function shouldShowIntro(): boolean {
  if (typeof window === "undefined") return false;
  return sessionStorage.getItem(SESSION_KEY) !== "true";
}

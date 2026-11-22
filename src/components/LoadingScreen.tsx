import { motion } from "framer-motion";
import { siteConfig } from "../config/siteConfig";

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cream"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.img
        src={siteConfig.brand.logo}
        alt={siteConfig.brand.name}
        className="w-24 h-24 rounded-full object-contain mb-4"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      />
      <p className="font-display text-maroon text-lg tracking-wide">
        {siteConfig.brand.name}
      </p>
      <p className="text-maroon/60 text-sm mt-1">blooming for you…</p>
    </motion.div>
  );
}

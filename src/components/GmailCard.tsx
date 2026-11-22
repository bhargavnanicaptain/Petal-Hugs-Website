import { motion } from "framer-motion";
import { gmailLink } from "../utils/enquiry";

export default function GmailCard() {
  return (
    <motion.a
      href={gmailLink()}
      className="group relative flex flex-col items-center text-center p-8 rounded-3xl bg-cream shadow-md hover:shadow-2xl transition-shadow duration-500 overflow-hidden"
      whileHover={{ y: -6 }}
    >
      <div
        className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-gold/15 group-hover:bg-gold/25 transition-colors duration-500"
        aria-hidden
      />
      <div className="relative w-16 h-16 rounded-full bg-gold flex items-center justify-center text-3xl text-white shadow-lg mb-4 overflow-hidden">
        <motion.span
          animate={{ rotateX: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          ✉️
        </motion.span>
      </div>
      <h3 className="font-display text-xl text-maroon mb-1">
        Send Us an Email
      </h3>
      <p className="text-maroon/65 text-sm">
        We would love to hear from you.
      </p>
    </motion.a>
  );
}

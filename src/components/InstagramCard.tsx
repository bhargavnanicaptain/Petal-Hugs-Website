import { motion } from "framer-motion";
import { instagramEnquiryLink } from "../utils/enquiry";

export default function InstagramCard() {
  return (
    <motion.a
      href={instagramEnquiryLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col items-center text-center p-8 rounded-3xl bg-cream shadow-md hover:shadow-2xl transition-shadow duration-500 overflow-hidden"
      whileHover={{ y: -6 }}
    >
      <div
        className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-15 group-hover:opacity-25 transition-opacity duration-500"
        style={{
          background:
            "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
        }}
        aria-hidden
      />
      <div
        className="relative w-16 h-16 rounded-full flex items-center justify-center text-3xl text-white shadow-lg mb-4 animate-float"
        style={{
          background:
            "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
          animationDelay: "0.3s",
        }}
      >
        📷
      </div>
      <h3 className="font-display text-xl text-maroon mb-1">
        Follow Our Journey
      </h3>
      <p className="text-maroon/65 text-sm">
        Explore our latest handmade creations.
      </p>
    </motion.a>
  );
}

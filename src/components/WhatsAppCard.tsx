import { motion } from "framer-motion";
import { whatsappEnquiryLink } from "../utils/enquiry";

export default function WhatsAppCard() {
  return (
    <motion.a
      href={whatsappEnquiryLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col items-center text-center p-8 rounded-3xl bg-cream shadow-md hover:shadow-2xl transition-shadow duration-500 overflow-hidden"
      whileHover={{ y: -6 }}
    >
      <div
        className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-[#25D366]/15 group-hover:bg-[#25D366]/25 transition-colors duration-500"
        aria-hidden
      />
      <div className="relative w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center text-3xl text-white shadow-lg mb-4 animate-float">
        💬
      </div>
      <h3 className="font-display text-xl text-maroon mb-1">Chat With Us</h3>
      <p className="text-maroon/65 text-sm">
        Let's help you find something special.
      </p>
    </motion.a>
  );
}

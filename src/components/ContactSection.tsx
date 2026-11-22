import { motion } from "framer-motion";
import { siteConfig } from "../config/siteConfig";
import WhatsAppCard from "./WhatsAppCard";
import InstagramCard from "./InstagramCard";
import GmailCard from "./GmailCard";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-5 bg-ivory">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-gold uppercase tracking-[0.25em] text-sm font-semibold mb-2">
            Get In Touch
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-maroon mb-3">
            We'd Love to Hear From You
          </h2>
          <p className="text-maroon/70 max-w-xl mx-auto">
            Have a question, a custom idea, or just want to say hello? Reach
            out through any of the ways below.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          <WhatsAppCard />
          <InstagramCard />
          <GmailCard />
        </div>

        <motion.div
          className="mt-14 text-center text-maroon/60 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p>📍 {siteConfig.contact.location}</p>
        </motion.div>
      </div>
    </section>
  );
}

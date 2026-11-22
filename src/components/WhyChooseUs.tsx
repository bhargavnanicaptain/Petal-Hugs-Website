import { motion } from "framer-motion";
import { siteConfig } from "../config/siteConfig";

const ICONS: Record<string, string> = {
  heart: "💖",
  sparkles: "✨",
  gift: "🎁",
  eye: "🔍",
  wand: "🪄",
  palette: "🎨",
};

export default function WhyChooseUs() {
  return (
    <section className="py-24 px-5 bg-ivory">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-gold uppercase tracking-[0.25em] text-sm font-semibold mb-2">
            Why Choose Us
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-maroon">
            The Petal Hugs Difference
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.whyChooseUs.map((item, i) => (
            <motion.div
              key={item.title}
              className="bg-cream rounded-2xl p-7 text-center shadow-sm hover:shadow-lg transition-shadow duration-400 border border-blush/30"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="text-4xl mb-4 animate-float" style={{ animationDelay: `${i * 0.3}s` }}>
                {ICONS[item.icon] ?? "🌸"}
              </div>
              <h3 className="font-display text-lg text-maroon mb-2">
                {item.title}
              </h3>
              <p className="text-maroon/65 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

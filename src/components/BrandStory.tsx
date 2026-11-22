import { motion } from "framer-motion";
import { siteConfig } from "../config/siteConfig";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function BrandStory() {
  return (
    <section
      id="story"
      className="relative py-24 px-5 bg-ivory overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}
        >
          <p className="text-gold uppercase tracking-[0.25em] text-sm font-semibold mb-2">
            Our Story
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-maroon">
            Where It All Began
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-10 items-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            <p className="text-maroon/80 leading-relaxed">
              {siteConfig.story.origin}
            </p>
            <p className="text-maroon/80 leading-relaxed">
              {siteConfig.brand.ownerNote} — two sisters who turned a shared
              love for handmade crafts into a brand of their very own.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="rounded-3xl bg-gradient-to-br from-pastel-pink to-lilac p-8 sm:p-10 shadow-xl">
              <p className="font-display text-xl sm:text-2xl text-maroon italic text-center">
                "{siteConfig.brand.philosophy}"
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="grid sm:grid-cols-2 gap-8 mt-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="bg-cream rounded-2xl p-7 shadow-sm border border-blush/40">
            <h3 className="font-display text-xl text-maroon mb-3">
              Our Mission
            </h3>
            <p className="text-maroon/75 leading-relaxed text-sm">
              {siteConfig.story.mission}
            </p>
          </div>
          <div className="bg-cream rounded-2xl p-7 shadow-sm border border-blush/40">
            <h3 className="font-display text-xl text-maroon mb-3">
              Our Vision
            </h3>
            <p className="text-maroon/75 leading-relaxed text-sm">
              {siteConfig.story.vision}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

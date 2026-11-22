import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "../config/products";

const galleryImages = Array.from(
  new Set(products.flatMap((p) => p.images))
).map((src, i) => ({ src, id: i }));

export default function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 px-5 bg-pastel-pink-light">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-gold uppercase tracking-[0.25em] text-sm font-semibold mb-2">
            Gallery
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-maroon">
            Handmade Moments
          </h2>
        </motion.div>

        <div className="columns-2 sm:columns-3 gap-4 [&>*]:mb-4">
          {galleryImages.map((img, i) => (
            <motion.button
              key={img.id}
              onClick={() => setLightbox(img.src)}
              className="block w-full rounded-xl overflow-hidden break-inside-avoid shadow-sm hover:shadow-xl transition-shadow duration-400 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.3) }}
            >
              <img
                src={img.src}
                alt=""
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[80] bg-maroon-dark/85 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.img
              src={lightbox}
              alt=""
              className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-ivory/90 text-maroon flex items-center justify-center shadow"
              aria-label="Close"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

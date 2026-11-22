import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Product } from "../config/products";
import { siteConfig } from "../config/siteConfig";
import { whatsappEnquiryLink, instagramEnquiryLink } from "../utils/enquiry";

interface ProductDetailsModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductDetailsModal({
  product,
  onClose,
}: ProductDetailsModalProps) {
  const [activeImage, setActiveImage] = useState(0);

  if (!product) return null;

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-maroon-dark/70 backdrop-blur-sm" />

          <motion.div
            className="relative bg-ivory rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-ivory/90 shadow flex items-center justify-center text-maroon hover:bg-blush transition-colors"
            >
              ✕
            </button>

            <div className="relative aspect-[4/3] bg-pastel-pink-light">
              <img
                src={product.images[activeImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {product.images.length > 1 && (
              <div className="flex gap-2 px-6 pt-4 overflow-x-auto">
                {product.images.map((img, i) => (
                  <button
                    key={img}
                    onClick={() => setActiveImage(i)}
                    className={`shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 transition-colors ${
                      i === activeImage ? "border-maroon" : "border-transparent"
                    }`}
                  >
                    <img
                      src={img}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            <div className="p-6 sm:p-8">
              <h3 className="font-display text-2xl text-maroon mb-2">
                {product.name}
              </h3>
              <p className="text-maroon/75 leading-relaxed mb-4">
                {product.description}
              </p>

              {product.customizable && (
                <div className="bg-sage/40 border border-sage rounded-xl p-4 mb-5">
                  <p className="text-sm text-maroon-dark font-medium mb-1">
                    ✨ Customizable
                  </p>
                  <p className="text-sm text-maroon/70">
                    {product.customizationNote ??
                      "Customization available on request — subject to availability and confirmation on WhatsApp."}
                  </p>
                </div>
              )}

              {siteConfig.pricing.enabled && product.price ? (
                <p className="text-xl font-semibold text-maroon mb-5">
                  ₹{product.price}
                </p>
              ) : (
                <p className="text-sm text-maroon/60 mb-5 italic">
                  Message us for pricing, customization, and availability.
                </p>
              )}

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={whatsappEnquiryLink(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#25D366] text-white font-medium shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  💬 Enquire on WhatsApp
                </a>
                <a
                  href={instagramEnquiryLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-full text-white font-medium shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
                  style={{
                    background:
                      "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
                  }}
                >
                  📷 Enquire on Instagram
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

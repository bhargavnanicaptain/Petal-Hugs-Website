import { motion } from "framer-motion";
import type { Product } from "../config/products";
import { siteConfig } from "../config/siteConfig";

interface ProductCardProps {
  product: Product;
  onOpen: (product: Product) => void;
  index?: number;
}

export default function ProductCard({ product, onOpen, index = 0 }: ProductCardProps) {
  return (
    <motion.button
      onClick={() => onOpen(product)}
      className="group relative text-left rounded-2xl overflow-hidden bg-ivory shadow-md hover:shadow-2xl transition-shadow duration-500 w-full"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.06, 0.4) }}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        {product.isNewArrival && (
          <span className="absolute top-3 left-3 bg-gold text-cream text-xs font-semibold px-3 py-1 rounded-full shadow">
            New
          </span>
        )}
        {product.images.length > 1 && (
          <span className="absolute bottom-3 right-3 bg-ivory/90 text-maroon text-xs font-medium px-2.5 py-1 rounded-full">
            +{product.images.length - 1} more
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-display text-lg text-maroon mb-1">{product.name}</h3>
        <p className="text-maroon/60 text-sm line-clamp-2">{product.description}</p>
        {siteConfig.pricing.enabled && product.price && (
          <p className="text-maroon font-semibold mt-2">₹{product.price}</p>
        )}
        <span className="inline-block mt-3 text-xs font-semibold text-gold tracking-wide uppercase">
          View details →
        </span>
      </div>
    </motion.button>
  );
}

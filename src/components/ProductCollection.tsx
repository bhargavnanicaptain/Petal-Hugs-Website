import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { categories, products, type Product } from "../config/products";
import CategoryFilter from "./CategoryFilter";
import ProductCard from "./ProductCard";
import ProductDetailsModal from "./ProductDetailsModal";

export default function ProductCollection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selected, setSelected] = useState<Product | null>(null);

  const visible = useMemo(
    () =>
      activeCategory === "all"
        ? products
        : products.filter((p) => p.categoryId === activeCategory),
    [activeCategory]
  );

  return (
    <section id="collection" className="py-24 px-5 bg-pastel-pink-light">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-gold uppercase tracking-[0.25em] text-sm font-semibold mb-2">
            Our Collection
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-maroon mb-3">
            Handmade Just For You
          </h2>
          <p className="text-maroon/70 max-w-xl mx-auto">
            Every piece below is handcrafted, one at a time. More designs and
            categories are blooming soon — follow along for new arrivals.
          </p>
        </motion.div>

        <CategoryFilter
          categories={categories}
          active={activeCategory}
          onChange={setActiveCategory}
        />

        {visible.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-7">
            {visible.map((product, i) => (
              <ProductCard
                key={product.id}
                product={product}
                index={i}
                onOpen={setSelected}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-maroon/60 italic">
              New designs for this category are on the way — stay tuned!
            </p>
          </div>
        )}
      </div>

      <ProductDetailsModal product={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

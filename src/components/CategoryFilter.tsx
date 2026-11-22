import type { ProductCategory } from "../config/products";

interface CategoryFilterProps {
  categories: ProductCategory[];
  active: string;
  onChange: (id: string) => void;
}

export default function CategoryFilter({
  categories,
  active,
  onChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      <button
        onClick={() => onChange("all")}
        className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
          active === "all"
            ? "bg-maroon text-cream shadow-md"
            : "bg-pastel-pink-light text-maroon hover:bg-blush"
        }`}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onChange(cat.id)}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            active === cat.id
              ? "bg-maroon text-cream shadow-md"
              : "bg-pastel-pink-light text-maroon hover:bg-blush"
          }`}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
}

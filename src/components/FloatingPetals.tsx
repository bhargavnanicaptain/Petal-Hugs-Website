import { useMemo } from "react";

interface FloatingPetalsProps {
  count?: number;
  className?: string;
}

const PETAL_COLORS = ["#F6C9D6", "#E3D6F0", "#D9A441", "#CFE3D4", "#FADCE4"];

/**
 * Decorative floating petal/particle background. Pure CSS animation so it
 * stays GPU-friendly, and is fully disabled under prefers-reduced-motion
 * via the global CSS rule in index.css.
 */
export default function FloatingPetals({ count = 12, className = "" }: FloatingPetalsProps) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 10 + Math.random() * 16,
        delay: Math.random() * 6,
        duration: 7 + Math.random() * 6,
        color: PETAL_COLORS[i % PETAL_COLORS.length],
        opacity: 0.35 + Math.random() * 0.35,
      })),
    [count]
  );

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {petals.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full animate-float-slow"
          style={{
            left: `${p.left}%`,
            top: "-5%",
            width: p.size,
            height: p.size,
            background: p.color,
            opacity: p.opacity,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            filter: "blur(0.5px)",
          }}
        />
      ))}
    </div>
  );
}

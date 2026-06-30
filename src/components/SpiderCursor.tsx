import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Lightweight superhero cursor:
 * - Inner dot tracks pointer with stiff spring
 * - Outer ring trails with looser spring (scales up on interactive)
 * - No per-frame React state / no SVG trail (perf-safe)
 */
export default function SpiderCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const dotX = useSpring(x, { damping: 32, stiffness: 700, mass: 0.25 });
  const dotY = useSpring(y, { damping: 32, stiffness: 700, mass: 0.25 });
  const ringX = useSpring(x, { damping: 22, stiffness: 180, mass: 0.5 });
  const ringY = useSpring(y, { damping: 22, stiffness: 180, mass: 0.5 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: PointerEvent) => {
      const el = e.target as HTMLElement | null;
      setHover(!!el?.closest("a, button, [role=button], .web-target, input, textarea, select"));
    };
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerover", over, { passive: true });
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
    };
  }, [x, y]);

  return (
    <>
      <motion.div
        aria-hidden
        className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{ x: ringX, y: ringY }}
      >
        <motion.div
          animate={{ scale: hover ? 1.8 : 1, rotate: hover ? 90 : 0 }}
          transition={{ type: "spring", stiffness: 280, damping: 22 }}
          className="w-9 h-9 rounded-full border-[1.5px] relative"
          style={{
            borderColor: "var(--cap-red)",
            boxShadow: "0 0 18px oklch(0.62 0.24 25 / 0.55), inset 0 0 8px oklch(0.62 0.24 25 / 0.35)",
          }}
        >
          <span className="absolute top-1/2 left-0 w-full h-px bg-[var(--cap-cream)]/45" />
          <span className="absolute left-1/2 top-0 h-full w-px bg-[var(--cap-cream)]/45" />
          <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-px h-2 bg-[var(--cap-gold)]" />
          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-px h-2 bg-[var(--cap-gold)]" />
        </motion.div>
      </motion.div>
      <motion.div
        aria-hidden
        className="fixed top-0 left-0 pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2"
        style={{ x: dotX, y: dotY }}
      >
        <div
          className="w-1.5 h-1.5 rounded-full bg-[var(--cap-cream)]"
          style={{ boxShadow: "0 0 8px oklch(0.96 0.02 90 / 0.95), 0 0 14px var(--cap-gold)" }}
        />
      </motion.div>
    </>
  );
}

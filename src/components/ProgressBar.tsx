import { useScroll, useTransform, useSpring as useFramerSpring } from "framer-motion";
import { useEffect, useRef } from "react";

/**
 * Provides the global scroll progress bar rendered as a fixed right-edge strip.
 * Uses Framer Motion's useScroll → transforms scroll 0→1 into height 0→100%.
 */
export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const smoothed = useFramerSpring(scrollYProgress, { stiffness: 80, damping: 28 });

  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const unsub = smoothed.on("change", (v) => {
      if (barRef.current) {
        barRef.current.style.height = `${v * 100}%`;
      }
    });
    return unsub;
  }, [smoothed]);

  return (
    <div
      aria-hidden
      className="fixed right-0 top-0 z-50 w-[3px] h-screen"
      style={{ background: "oklch(0.18 0.06 260 / 0.5)" }}
    >
      <div
        ref={barRef}
        className="w-full h-0 transition-none"
        style={{
          background: "linear-gradient(180deg, #e62429 0%, #f5f0e8 40%, #1c3b8a 70%, #5eb8e0 100%)",
          boxShadow: "0 0 8px oklch(0.60 0.24 25 / 0.7), 0 0 20px oklch(0.58 0.22 250 / 0.5)",
        }}
      />
    </div>
  );
}

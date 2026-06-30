import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Trigger = (action?: () => void, ev?: { clientX: number; clientY: number } | null) => void;

const WebContext = createContext<Trigger>(() => {});

export const useWebPull = () => useContext(WebContext);

function WebOverlay({ x, y }: { x: number; y: number }) {
  // 24 radial threads + a few curved strands fan out from click origin
  const threads = Array.from({ length: 28 });
  const max = Math.hypot(window.innerWidth, window.innerHeight) * 1.4;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 pointer-events-none z-[9990]"
      style={{ mixBlendMode: "screen" }}
    >
      <svg width="100%" height="100%" className="absolute inset-0">
        <defs>
          <radialGradient id="webGlow" cx="50%" cy="50%">
            <stop offset="0%" stopColor="oklch(0.96 0.02 90 / 0.95)" />
            <stop offset="60%" stopColor="oklch(0.96 0.02 90 / 0.4)" />
            <stop offset="100%" stopColor="oklch(0.96 0.02 90 / 0)" />
          </radialGradient>
        </defs>

        {/* Origin flash */}
        <motion.circle
          cx={x} cy={y}
          initial={{ r: 0, opacity: 1 }}
          animate={{ r: 80, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          fill="url(#webGlow)"
        />

        {/* Radial web threads */}
        {threads.map((_, i) => {
          const a = (i / threads.length) * Math.PI * 2;
          const ex = x + Math.cos(a) * max;
          const ey = y + Math.sin(a) * max;
          return (
            <motion.line
              key={`r${i}`}
              x1={x} y1={y}
              initial={{ x2: x, y2: y, opacity: 0.9 }}
              animate={{ x2: ex, y2: ey, opacity: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.005 }}
              stroke="oklch(0.96 0.02 90 / 0.85)"
              strokeWidth="1"
            />
          );
        })}

        {/* Concentric web rings */}
        {[0.25, 0.5, 0.75, 1].map((s, i) => (
          <motion.circle
            key={`c${i}`}
            cx={x} cy={y}
            initial={{ r: 30 * (i + 1), opacity: 0.6 }}
            animate={{ r: max * s, opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 + i * 0.04 }}
            fill="none"
            stroke="oklch(0.96 0.02 90 / 0.5)"
            strokeWidth="0.8"
          />
        ))}
      </svg>

      {/* Dark swipe to mask the page mid-transition */}
      <motion.div
        initial={{ scaleX: 0, transformOrigin: `${x}px ${y}px` }}
        animate={{ scaleX: 1 }}
        exit={{ scaleX: 0, transformOrigin: `${window.innerWidth - x}px ${y}px` }}
        transition={{ duration: 0.45, ease: [0.85, 0, 0.15, 1] }}
        className="absolute inset-0 bg-[var(--cap-red)]/15"
      />
    </motion.div>
  );
}

export function WebTransitionProvider({ children }: { children: ReactNode }) {
  const [origin, setOrigin] = useState<{ x: number; y: number } | null>(null);

  const trigger = useCallback<Trigger>((action, ev) => {
    if (typeof window === "undefined") {
      action?.();
      return;
    }
    const x = ev?.clientX ?? window.innerWidth / 2;
    const y = ev?.clientY ?? window.innerHeight / 2;
    setOrigin({ x, y });
    window.setTimeout(() => action?.(), 280);
    window.setTimeout(() => setOrigin(null), 720);
  }, []);

  return (
    <WebContext.Provider value={trigger}>
      {children}
      <AnimatePresence>{origin && <WebOverlay x={origin.x} y={origin.y} />}</AnimatePresence>
    </WebContext.Provider>
  );
}

/** Helper for anchor-style web navigation. */
export function useWebScroll() {
  const trigger = useWebPull();
  return (id: string, ev?: { clientX: number; clientY: number }) => {
    trigger(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, ev ?? null);
  };
}

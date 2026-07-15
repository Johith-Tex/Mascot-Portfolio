import { motion } from "framer-motion";
import { ReactNode } from "react";

type Hero = {
  name: string;
  role: string;
  quote: string;
  accent: string;
  second: string;
  glyph: ReactNode;
};

const HEROES: Hero[] = [
  {
    name: "MY DAD",
    role: "THE FOUNDATION",
    quote: "Before any hero on a screen, he taught me what it means to show up — every single day.",
    accent: "var(--cap-gold)",
    second: "var(--cap-red)",
    glyph: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <linearGradient id="dadG" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="var(--cap-gold)" />
            <stop offset="100%" stopColor="var(--cap-red)" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="46" fill="url(#dadG)" />
        <circle cx="50" cy="50" r="36" fill="oklch(0.12 0.04 280)" />
        <path
          d="M50 22 L62 38 L78 42 L66 56 L70 74 L50 66 L30 74 L34 56 L22 42 L38 38 Z"
          fill="var(--cap-gold)"
        />
        <text
          x="50"
          y="55"
          textAnchor="middle"
          fontFamily="Bebas Neue"
          fontSize="14"
          fill="oklch(0.12 0.04 280)"
          letterSpacing="2"
        >
          DAD
        </text>
      </svg>
    ),
  },
  {
    name: "CAPTAIN AMERICA",
    role: "THE LEADER",
    quote: "Stand for something — even when the world tells you to step aside.",
    accent: "var(--cap-red)",
    second: "var(--cap-blue)",
    glyph: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="50" cy="50" r="46" fill="var(--cap-red)" />
        <circle cx="50" cy="50" r="36" fill="var(--cap-cream)" />
        <circle cx="50" cy="50" r="26" fill="var(--cap-red)" />
        <circle cx="50" cy="50" r="18" fill="var(--cap-blue)" />
        <polygon
          points="50,35 53.4,46 65,46 55.8,53 59.2,64 50,57 40.8,64 44.2,53 35,46 46.6,46"
          fill="var(--cap-cream)"
        />
      </svg>
    ),
  },
  {
    name: "SPIDER-MAN",
    role: "THE RESPONSIBILITY",
    quote: "Power means nothing without the courage to carry its weight.",
    accent: "var(--spidey-red)",
    second: "var(--spidey-blue)",
    glyph: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="50" cy="50" r="46" fill="var(--spidey-red)" />
        <g stroke="oklch(0.12 0.04 270)" strokeWidth="1.2" fill="none">
          {Array.from({ length: 12 }).map((_, i) => {
            const a = (i / 12) * Math.PI * 2;
            return (
              <line key={i} x1="50" y1="50" x2={50 + Math.cos(a) * 44} y2={50 + Math.sin(a) * 44} />
            );
          })}
          {[14, 24, 34, 42].map((r) => (
            <circle key={r} cx="50" cy="50" r={r} />
          ))}
        </g>
      </svg>
    ),
  },
  {
    name: "KRATOS",
    role: "THE RECKONING",
    quote: "Be better than the rage you inherit. Build, do not burn.",
    accent: "var(--kratos)",
    second: "oklch(0.20 0.02 30)",
    glyph: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect x="6" y="6" width="88" height="88" fill="oklch(0.14 0.03 30)" />
        <path
          d="M50 12 L20 50 L50 88 L80 50 Z"
          fill="var(--kratos)"
          stroke="var(--cap-cream)"
          strokeWidth="2"
        />
        <path d="M50 28 L34 50 L50 72 L66 50 Z" fill="oklch(0.94 0.04 80)" />
        <circle cx="50" cy="50" r="6" fill="var(--kratos)" />
      </svg>
    ),
  },
  {
    name: "SUPERMAN",
    role: "THE HOPE",
    quote: "Choose hope. Loudly. Even when no one is watching.",
    accent: "var(--superman)",
    second: "var(--cap-gold)",
    glyph: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path d="M50 6 L90 22 L78 80 L50 94 L22 80 L10 22 Z" fill="var(--superman)" />
        <path d="M50 16 L80 28 L70 74 L50 84 L30 74 L20 28 Z" fill="var(--cap-cream)" />
        <path d="M50 24 L72 32 L64 70 L50 78 L36 70 L28 32 Z" fill="var(--cap-red)" />
        <text
          x="50"
          y="60"
          textAnchor="middle"
          fontFamily="Bebas Neue"
          fontSize="36"
          fill="var(--cap-gold)"
        >
          S
        </text>
      </svg>
    ),
  },
];

export default function HeroesGrid() {
  return (
    <section id="heroes" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="font-mono text-xs text-[var(--cap-blue)] mb-3 flex items-center gap-3">
          <span className="inline-block w-8 h-px bg-[var(--cap-blue)]" />
          // INSPIRATIONS
        </div>
        <h2 className="font-display text-6xl lg:text-7xl">
          THE <span className="marvel-title">PEOPLE</span> THAT SHAPED ME
        </h2>
        <p className="mt-6 max-w-2xl text-muted-foreground">
          One real-world hero at the start of it all — then a roster of icons that taught me
          leadership, responsibility, reckoning, and hope.
        </p>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {HEROES.map((h, i) => (
            <motion.article
              key={h.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -8, rotateZ: -0.4 }}
              className="web-target relative border border-border bg-surface/70 backdrop-blur clip-corner p-5 overflow-hidden group transition-colors duration-300 hover:border-[var(--cap-gold)]/50"
              style={{ boxShadow: `inset 0 0 0 1px ${h.accent}40` }}
            >
              <div
                className="absolute -top-12 -right-12 w-40 h-40 rounded-full opacity-30 blur-2xl group-hover:opacity-70 transition-opacity"
                style={{ background: h.accent }}
              />
              <div
                className="absolute -bottom-16 -left-12 w-44 h-44 rounded-full opacity-0 blur-3xl group-hover:opacity-50 transition-opacity"
                style={{ background: h.second }}
              />
              <div className="relative aspect-square mb-4 mx-auto w-24">
                <div
                  className="absolute inset-[-8px] rounded-full opacity-40 blur-md"
                  style={{ background: `radial-gradient(circle, ${h.accent}, transparent 70%)` }}
                />
                <div className="relative transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  {h.glyph}
                </div>
              </div>
              <div className="font-mono text-[10px] tracking-widest" style={{ color: h.accent }}>
                {h.role}
              </div>
              <div className="font-display text-xl mt-1 leading-tight">{h.name}</div>
              <p className="mt-3 text-sm text-muted-foreground italic leading-snug">"{h.quote}"</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

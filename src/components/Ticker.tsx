/**
 * Infinite horizontal ticker strip — marquee with superhero branding text.
 * Pure CSS animation, zero JS overhead.
 */
export default function Ticker() {
  const ITEMS = [
    "TEXIOVERSE", "GAME DEVELOPER", "UNREAL ENGINE 5",
    "BLENDER", "SOFTWARE ENGINEER", "DISCORD BOT DEV",
    "C++", "BLUEPRINTS", "ACTION RPG", "GATE TO OBLIVION",
    "FULL-STACK", "3D ARTIST", "INDIE DEV",
  ];

  const repeated = [...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <div
      aria-hidden
      className="ticker-strip relative overflow-hidden border-y py-3 select-none"
      style={{
        borderColor: "oklch(0.60 0.24 25 / 0.35)",
        background:
          "linear-gradient(90deg, var(--background) 0%, oklch(0.12 0.06 260 / 0.8) 10%, oklch(0.12 0.06 260 / 0.8) 90%, var(--background) 100%)",
      }}
    >
      {/* Fade edges */}
      <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(90deg, var(--background), transparent)" }} />
      <div className="absolute right-0 top-0 h-full w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(270deg, var(--background), transparent)" }} />

      <div className="ticker-inner flex gap-0 whitespace-nowrap">
        {repeated.map((item, i) => (
          <span key={i} className="ticker-item inline-flex items-center gap-3 px-5 font-mono text-[11px] tracking-[0.3em]"
            style={{ color: i % 5 === 1 ? "var(--cap-gold)" : i % 5 === 3 ? "var(--cap-red)" : "var(--muted-foreground)" }}
          >
            {item}
            <span className="inline-block w-1.5 h-1.5 rounded-full"
              style={{
                background: i % 3 === 0 ? "var(--cap-red)" : i % 3 === 1 ? "var(--cap-gold)" : "var(--cap-blue)",
                boxShadow: `0 0 6px ${i % 3 === 0 ? "var(--cap-red)" : i % 3 === 1 ? "var(--cap-gold)" : "var(--cap-blue)"}`,
              }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}

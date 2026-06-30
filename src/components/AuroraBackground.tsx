import { useEffect, useState } from "react";

export default function AuroraBackground() {
  const [stars, setStars] = useState<{ id: number; top: string; left: string; delay: string; duration: string }[]>([]);

  useEffect(() => {
    // Generate static stars once on mount to avoid hydration mismatch and re-renders
    const generatedStars = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 4}s`,
      duration: `${3 + Math.random() * 4}s`,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div aria-hidden className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[var(--background)]">
      
      {/* 1. Premium Film Grain Noise (Super fast CSS background) */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* 2. Soft Ambient Blobs (Hardware accelerated) */}
      <div className="aurora-blob aurora-a" style={{ opacity: 0.15 }} />
      <div className="aurora-blob aurora-b" style={{ opacity: 0.12 }} />
      
      {/* 3. Subtle Perspective Grid (Hardware accelerated pan) */}
      <div className="absolute inset-0 aurora-grid opacity-30 mix-blend-screen" />

      {/* 4. Twinkling Stars / Dust (Hardware accelerated opacity/transform) */}
      {stars.map((s) => (
        <div
          key={s.id}
          className="aurora-star"
          style={{
            top: s.top,
            left: s.left,
            width: '2px',
            height: '2px',
            animationDelay: s.delay,
            animationDuration: s.duration,
          }}
        />
      ))}
      
      {/* 5. Minimal Lightning Bolts (Rare random strikes) */}
      <div className="absolute inset-0 aurora-bolts opacity-40">
        <div className="aurora-bolt aurora-bolt-1" />
        <div className="aurora-bolt aurora-bolt-2" />
      </div>

    </div>
  );
}

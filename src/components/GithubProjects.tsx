import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import all 9 car images
import car1 from "../assets/car1.png";
import car2 from "../assets/car2.png";
import car3 from "../assets/car3.png";
import car4 from "../assets/car4.png";
import car5 from "../assets/car5.png";
import car6 from "../assets/car6.png";
import car7 from "../assets/car7.png";
import car8 from "../assets/car8.png";
import car9 from "../assets/car9.png";

const CAR_IMAGES = [car1, car2, car3, car4, car5, car6, car7, car8, car9];

/* ─── Config ─────────────────────────────────────────────────────── */
const GITHUB_USER = "Johith-Tex";

/* ─── Types ──────────────────────────────────────────────────────── */
interface Repo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics: string[];
  fork: boolean;
  archived: boolean;
}

interface GarageVehicle {
  repo: Repo;
  image: string;
}

/* ─── High-Performance Background Effects ────────────────────────── */
function DynamicBackground() {
  // Generate static positions for sparks to avoid React re-renders on hover
  const sparks = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: 3 + Math.random() * 5,
    delay: Math.random() * 5,
    size: Math.random() * 3 + 1,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden bg-black" style={{ zIndex: 0 }}>
      {/* Dynamic gradients simulating garage lighting */}
      <div 
        className="absolute inset-0 opacity-40 mix-blend-screen"
        style={{
          background: 'radial-gradient(circle at 50% -20%, rgba(59,130,246,0.3) 0%, transparent 60%), radial-gradient(circle at 50% 120%, rgba(239,68,68,0.2) 0%, transparent 60%)',
        }}
      />
      
      {/* Floor Grid (Tron style) */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          transform: 'perspective(1000px) rotateX(75deg) scale(2.5) translateY(20%)',
          transformOrigin: 'bottom center',
          opacity: 0.3
        }}
      />

      {/* Floating Sparks/Embers */}
      {sparks.map(s => (
        <div
          key={s.id}
          className="absolute rounded-full bg-[var(--cap-gold)] opacity-0 shadow-[0_0_8px_rgba(255,215,0,0.8)]"
          style={{
            left: s.left,
            top: s.top,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animation: `float-spark ${s.duration}s linear ${s.delay}s infinite`,
          }}
        />
      ))}
      <style>{`
        @keyframes float-spark {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          80% { opacity: 0.8; }
          100% { transform: translateY(-100vh) scale(0.5); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

/* ─── HUD Progress Bar Component ─────────────────────────────────── */
function StatBar({ label, value, max, color }: { label: string; value: number; max: number; color: string }) {
  const percentage = Math.min(100, Math.max(5, (value / max) * 100)); // Ensure at least a sliver shows
  return (
    <div className="mb-4">
      <div className="flex justify-between items-end mb-1">
        <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">{label}</span>
        <span className="font-display text-lg text-white leading-none">{value}</span>
      </div>
      <div className="h-2 w-full bg-white/10 overflow-hidden transform skew-x-[-15deg]">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-full"
          style={{ backgroundColor: color, boxShadow: `0 0 10px ${color}` }}
        />
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════════════ */
export default function GithubProjects() {
  const [vehicles, setVehicles] = useState<GarageVehicle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    let cancelled = false;
    fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=100`)
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(`GitHub ${r.status}`))))
      .then((data: Repo[]) => {
        if (cancelled) return;
        
        // Filter repos (no limit, so new repos automatically appear)
        const validRepos = data
          .filter((r) => !r.fork && !r.archived)
          .sort((a, b) => b.stargazers_count - a.stargazers_count || +new Date(b.updated_at) - +new Date(a.updated_at));
        
        // Map car images to repos
        const mappedVehicles = validRepos.map((repo, idx) => ({
          repo,
          image: CAR_IMAGES[idx % CAR_IMAGES.length],
        }));

        setVehicles(mappedVehicles);
        setLoading(false);
      })
      .catch(() => {
        if (!cancelled) { setError(true); setLoading(false); }
      });
    return () => { cancelled = true; };
  }, []);

  if (loading) {
    return (
      <section className="h-screen flex items-center justify-center bg-black">
        <div className="font-mono text-[var(--cap-gold)] animate-pulse tracking-[0.3em]">LOADING SHOWROOM...</div>
      </section>
    );
  }

  if (error || vehicles.length === 0) {
    return (
      <section className="h-screen flex items-center justify-center bg-black">
        <div className="font-mono text-[var(--cap-red)] border border-[var(--cap-red)] p-6 bg-red-950/20">
          SHOWROOM OFFLINE — UNABLE TO CONNECT TO GITHUB
        </div>
      </section>
    );
  }

  const activeVehicle = vehicles[selectedIndex];
  const { repo, image } = activeVehicle;
  
  // Dynamic color based on index or language to tint UI elements
  const THEME_COLORS = ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899', '#06b6d4', '#f97316', '#14b8a6'];
  const activeColor = THEME_COLORS[selectedIndex % THEME_COLORS.length];

  return (
    <section id="github" className="relative h-screen min-h-[800px] w-full bg-[#050508] overflow-hidden flex flex-col">
      <DynamicBackground />

      {/* ── HEADER ── */}
      <div className="relative z-20 px-8 pt-8 flex justify-between items-start">
        <div>
          <div className="font-mono text-[10px] text-[var(--cap-gold)] mb-2 flex items-center gap-2">
            <span className="w-2 h-2 bg-[var(--cap-gold)] animate-pulse" />
            LIVE GITHUB API
          </div>
          <h2 className="font-display text-4xl lg:text-5xl text-white tracking-wide">
            GITHUB <span style={{ color: activeColor }}>REPOSITORIES</span>
          </h2>
        </div>
        <a
          href={`https://github.com/${GITHUB_USER}`}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-xs border border-white/20 px-6 py-3 hover:border-white transition-colors bg-black/40 backdrop-blur"
        >
          VIEW ALL REPOS ↗
        </a>
      </div>

      {/* ── MAIN STAGE & HUD ── */}
      <div className="relative z-10 flex-1 flex flex-col lg:flex-row items-center justify-between px-8 lg:px-16 gap-8">
        
        {/* Left HUD: Specs */}
        <div className="w-full lg:w-72 hidden md:block">
          <motion.div
            key={`specs-${repo.id}`}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-black/40 backdrop-blur-md border-l-4 p-6"
            style={{ borderLeftColor: activeColor }}
          >
            <h3 className="font-display text-3xl text-white mb-6 uppercase tracking-wider truncate">
              {repo.name.replace(/-/g, " ")}
            </h3>
            
            <StatBar label="STARS" value={repo.stargazers_count} max={50} color={activeColor} />
            <StatBar label="FORKS" value={repo.forks_count} max={20} color="#fff" />
            
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="font-mono text-[10px] text-muted-foreground uppercase mb-1">PRIMARY LANGUAGE</div>
              <div className="font-display text-xl text-white" style={{ color: activeColor }}>
                {repo.language || "Hybrid"}
              </div>
            </div>
            
            <div className="mt-4">
              <div className="font-mono text-[10px] text-muted-foreground uppercase mb-1">LAST UPDATED</div>
              <div className="font-mono text-sm text-white">
                {new Date(repo.updated_at).toLocaleDateString()}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Center: The Car Stage */}
        <div className="flex-1 relative w-full h-full flex items-center justify-center -mt-20 lg:mt-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={`car-${repo.id}`}
              initial={{ opacity: 0, scale: 0.9, x: 100 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
              className="relative w-full max-w-4xl flex justify-center items-center pointer-events-none"
            >
              {/* Stage Glow / Shadow */}
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/3 w-[80%] h-[30px] rounded-[100%] opacity-70 blur-xl"
                style={{ backgroundColor: activeColor }}
              />
              
              {/* The Car Image */}
              <motion.img 
                src={image} 
                alt={repo.name} 
                className="relative z-10 w-full object-contain filter drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)]"
                animate={{ y: [0, -8, 0] }} // Subtle breathing animation
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right HUD: Info & Action */}
        <div className="w-full lg:w-72 hidden md:flex flex-col justify-end h-full pb-16">
          <motion.div
            key={`info-${repo.id}`}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <p className="font-mono text-xs text-gray-300 leading-relaxed mb-6 italic border-l-2 pl-4 border-white/20">
              "{repo.description || "Classified project files. No description provided."}"
            </p>
            
            <a
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center justify-center w-full px-8 py-4 font-mono text-sm font-bold text-white bg-white/5 border border-white/20 overflow-hidden"
            >
              {/* Hover sweep effect */}
              <div 
                className="absolute inset-0 w-0 transition-all duration-300 ease-out group-hover:w-full"
                style={{ backgroundColor: activeColor }}
              />
              <span className="relative flex items-center gap-2">
                VIEW REPOSITORY <span aria-hidden>→</span>
              </span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* ── GARAGE SELECTOR (CAROUSEL) ── */}
      <div className="relative z-30 h-32 md:h-40 bg-black/60 backdrop-blur-xl border-t border-white/10 flex flex-col justify-center">
        <div className="absolute top-0 left-0 w-full h-1" style={{ background: `linear-gradient(90deg, transparent, ${activeColor}, transparent)` }} />
        
        <div className="flex gap-4 overflow-x-auto px-8 pb-4 pt-6 snap-x hide-scrollbar">
          {vehicles.map((v, idx) => {
            const isSelected = selectedIndex === idx;
            return (
              <button
                key={v.repo.id}
                onClick={() => setSelectedIndex(idx)}
                className={`
                  relative shrink-0 w-32 md:w-48 h-20 md:h-24 rounded-lg snap-center overflow-hidden transition-all duration-300
                  ${isSelected ? 'scale-105 opacity-100 z-10 shadow-2xl ring-2' : 'scale-95 opacity-40 hover:opacity-70 ring-1 ring-white/10'}
                `}
                style={{
                  backgroundColor: '#111',
                  '--tw-ring-color': isSelected ? activeColor : undefined,
                  boxShadow: isSelected ? `0 10px 30px ${activeColor}40` : undefined
                } as React.CSSProperties}
              >
                {/* Thumbnail Image */}
                <img src={v.image} alt="car thumbnail" className="absolute inset-0 w-full h-full object-contain p-2" />
                
                {/* Overlay Name */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent p-2 text-left">
                  <div className="font-mono text-[8px] md:text-[10px] text-white truncate drop-shadow-md">
                    {v.repo.name.toUpperCase()}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
      
      {/* Utility to hide scrollbar in tailwind without external plugin */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { lazy, type MouseEvent, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ClientOnly from "@/components/ClientOnly";
import SpiderCursor from "@/components/SpiderCursor";
import ClickFX from "@/components/ClickFX";
import { WebTransitionProvider, useWebScroll } from "@/components/WebTransition";
import HeroesGrid from "@/components/HeroesGrid";
import GithubProjects from "@/components/GithubProjects";
import { ScrollProgressBar } from "@/components/ProgressBar";
import MascotAssistant from "@/components/MascotAssistant";
import { Gamepad2, Bot, Code2 } from "lucide-react";
import characterImg from "@/assets/texio-character.jpg";
import avatarImg from "@/assets/avatar_front_with_shield.png";
import oblivionImg from "@/assets/project-oblivion.jpg";
import undefinedImg from "@/assets/project-undefined.jpg";
import txImg from "@/assets/project-tx.jpg";

const ShieldScene = lazy(() => import("@/components/ShieldScene"));

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TEX.IO — Game Developer & Software Engineer" },
      { name: "description", content: "Marvel-inspired 3D portfolio of Tex.IO — game dev, Unreal Engine 5 projects, Discord bots, and software engineering. Forged by legends." },
      { property: "og:title", content: "TEX.IO — Building Digital Worlds" },
      { property: "og:description", content: "Interactive shield-driven portfolio of a game developer & software engineer." },
      { property: "og:image", content: characterImg },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: characterImg },
    ],
  }),
  component: IndexWithWeb,
});

const NAV = [
  { label: "HOME", id: "home" },
  { label: "CHARACTER", id: "character" },
  { label: "PROJECTS", id: "projects" },
  { label: "GITHUB", id: "github" },
  { label: "HEROES", id: "heroes" },
  { label: "DEVLOG", id: "devlog" },
  { label: "HIRE ME", id: "hire" },
  { label: "DISCORD", id: "community" },
];

const PROJECTS = [
  {
    n: "01",
    status: "IN DEVELOPMENT",
    title: "GATE TO OBLIVION",
    desc: "A mythology-based action RPG with deep branching narratives and mythological combat. Journey through ancient myth and modern chaos.",
    tags: ["UNREAL ENGINE", "BLUEPRINTS", "C++", "BLENDER"],
    progress: 35,
    img: oblivionImg,
  },
  {
    n: "02",
    status: "UPCOMING",
    title: "UNDEFINED",
    desc: "Souls-like action in neon-drenched castle ruins. Minimal story, maximum style. Fluid movement and exquisite weapon design.",
    tags: ["UNREAL ENGINE", "C++", "BLUEPRINTS"],
    progress: 0,
    img: undefinedImg,
  },
  {
    n: "03",
    status: "UPCOMING",
    title: "PROJECT TX",
    desc: "Procedurally generated survival-exploration game. Base building, uncharted worlds, emergent gameplay in a vast, hostile universe.",
    tags: ["UNREAL ENGINE", "C++", "BLUEPRINTS"],
    progress: 0,
    img: txImg,
  },
];

const DEVLOG = [
  { type: "PROGRESS", date: "Jan 14, 2024", title: "Gate To Oblivion — Story Development", body: "Working on the main storyline. Implementing branching narrative paths based on player choices and mythological lore integration." },
  { type: "RELEASE", date: "Jan 9, 2024", title: "New Discord Bot Features", body: "Added game announcement channels and automated role assignment. The bot now includes mini-games for community engagement." },
  { type: "DEVLOG", date: "Jan 4, 2024", title: "Behind the Scenes: RPG Combat System", body: "Developing the turn-based combat system for Gate To Oblivion. Focus on balancing mythological abilities and strategic depth." },
  { type: "RELEASE", date: "Dec 31, 2023", title: "Website Redesign Complete", body: "Launched the new portfolio website — complete overhaul with split design, character showcase, and dynamic animations." },
];

const SERVICES = [
  { title: "GAME DEV", items: ["Unity & Unreal Engine", "2D & 3D Game Design", "Shader Development", "Game Mechanics"] },
  { title: "DISCORD BOTS", items: ["Custom Discord Bots", "Server Management", "Game Integration", "API Development"] },
  { title: "SOFTWARE", items: ["Full-Stack Apps", "Desktop Software", "Automation Tools", "System Architecture"] },
];

function Nav() {
  const webScroll = useWebScroll();
  const onClick = (id: string) => (e: MouseEvent) => {
    e.preventDefault();
    webScroll(id, { clientX: e.clientX, clientY: e.clientY });
  };
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-background/50 border-b border-border/40">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#home" onClick={onClick("home")} className="font-display text-2xl tracking-wider flex items-center gap-1">
          <span className="text-cap">TEX</span>
          <span className="text-foreground">.IO</span>
          <span className="ml-1 inline-block w-1.5 h-5 bg-[var(--cap-gold)] animate-pulse-glow" />
        </a>
        <nav className="hidden md:flex items-center gap-6 font-mono text-xs">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} onClick={onClick(n.id)} className="text-muted-foreground hover:text-[var(--cap-gold)] transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          onClick={onClick("contact")}
          className="clip-corner bg-[var(--cap-red)] text-[var(--cap-cream)] font-mono text-xs font-bold px-5 py-2.5 hover:glow-red transition-all"
        >
          CONTACT
        </a>
      </div>
    </header>
  );
}

function MarvelTitleCard() {
  return (
    <div className="relative inline-block text-center">
      <div className="flex items-center justify-center gap-3 mb-3">
        <div className="h-[2px] w-10 bg-[var(--cap-red)]" />
        <span className="font-display text-sm tracking-[0.4em] text-[var(--cap-cream)]">PRESENTS</span>
        <div className="h-[2px] w-10 bg-[var(--cap-red)]" />
      </div>
      <div className="relative">
        <div
          className="absolute inset-0 -m-8 opacity-50 blur-2xl animate-burst"
          style={{ background: "radial-gradient(ellipse at center, #e62429, transparent 60%)" }}
        />
        <h1 className="marvel-title relative text-[clamp(1.8rem,5.5vw,4.5rem)] leading-[0.85]">
          <span className="marvel-title-inner">TEXIO</span>
        </h1>
      </div>
      <div className="mt-4 inline-block clip-tag bg-[var(--cap-red)] text-[var(--cap-cream)] font-mono text-xs tracking-[0.3em] px-5 py-1.5">
        JOHITH // GAME DEVELOPER · SOFTWARE ENGINEER
      </div>
    </div>
  );
}

function Hero() {
  const webScroll = useWebScroll();

  return (
    <section id="home" className="relative min-h-[82vh] pt-24 pb-16 flex items-center justify-center">
      {/* Subtle ambient gradient — placeholder until user decides hero content */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 60%, oklch(0.35 0.14 25 / 0.13) 0%, transparent 55%), " +
            "radial-gradient(ellipse at 50% 35%, oklch(0.35 0.1 280 / 0.09) 0%, transparent 48%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <MarvelTitleCard />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-9 flex flex-wrap gap-3 justify-center"
        >
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); webScroll("projects", { clientX: e.clientX, clientY: e.clientY }); }}
            className="clip-corner bg-[var(--cap-blue)] text-[var(--cap-cream)] font-mono text-sm font-bold px-7 py-3.5 inline-flex items-center gap-3 transition-all"
          >
            VIEW PROJECTS <span aria-hidden>→</span>
          </a>
          <a
            href="#heroes"
            onClick={(e) => { e.preventDefault(); webScroll("heroes", { clientX: e.clientX, clientY: e.clientY }); }}
            className="clip-corner border border-[var(--cap-gold)] text-[var(--cap-gold)] font-mono text-sm font-bold px-7 py-3.5 inline-flex items-center gap-3 hover:bg-[var(--cap-gold)]/10 transition-all"
          >
            INSPIRATIONS
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.65 }}
          className="mt-10 flex flex-wrap gap-6 md:gap-12 justify-center"
        >
          {[{ n: "2", l: "GAMES" }, { n: "5", l: "YEARS XP" }, { n: "100", l: "% PASSION" }].map((s) => (
            <div key={s.l}>
              <div className="font-display text-4xl text-[var(--cap-gold)]">{s.n}</div>
              <div className="font-mono text-[10px] tracking-widest text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] tracking-widest text-muted-foreground">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-[var(--cap-gold)] to-transparent"
        />
      </motion.div>

      {/* Face of the Website: Avatar with Shield (Anchored to Section Bottom) */}
      <motion.img 
        src={avatarImg}
        alt="Texio Avatar"
        className="absolute -bottom-12 -right-8 md:-bottom-48 md:right-32 w-[250px] md:w-[500px] object-contain z-0 md:z-10 pointer-events-auto opacity-30 md:opacity-95 blur-[2px] md:blur-none"
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, -1, 2, -1, 0],
          filter: [
            "drop-shadow(0 0 20px rgba(126,24,235,0.4)) drop-shadow(0 0 10px rgba(126,24,235,0.2))",
            "drop-shadow(0 0 40px rgba(126,24,235,0.8)) drop-shadow(0 0 20px rgba(126,24,235,0.4))",
            "drop-shadow(0 0 20px rgba(126,24,235,0.4)) drop-shadow(0 0 10px rgba(126,24,235,0.2))"
          ]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut",
          times: [0, 0.5, 1] 
        }}
        whileHover={{ 
          scale: 1.05, 
          rotate: 3,
          filter: "drop-shadow(0 0 50px rgba(126,24,235,1)) drop-shadow(0 0 30px rgba(230,36,41,0.8))",
          transition: { duration: 0.4, ease: "easeOut" }
        }}
        whileTap={{ 
          scale: 0.95, 
          rotate: -3,
          filter: "drop-shadow(0 0 15px rgba(230,36,41,0.6))"
        }}
      />
    </section>
  );
}


/* ─── Shared scroll reveal variants — easeOutExpo, blur-fade-slide ── */
const EASE = [0.22, 1, 0.36, 1] as const;

const REVEAL = {
  hidden: { opacity: 0, y: 22, filter: "blur(8px)" },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, delay: i * 0.11, ease: EASE },
  }),
};

const REVEAL_LEFT = {
  hidden: { opacity: 0, x: -28, filter: "blur(6px)" },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, delay: i * 0.1, ease: EASE },
  }),
};

function Character() {
  /* Image parallax — background scrolls slower than foreground */
  const secRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: secRef, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <>
      <div className="px-6"><div className="section-divider" /></div>
      <section ref={secRef} id="character" className="relative py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={REVEAL_LEFT} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
            className="font-mono text-xs text-[var(--cap-red)] mb-4 flex items-center gap-3"
          >
            <span className="inline-block w-8 h-px bg-[var(--cap-red)]" />
            // CHARACTER FILE
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image with parallax */}
            <motion.div
              variants={REVEAL} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
              className="relative overflow-hidden"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-[var(--cap-red)]/30 via-[var(--cap-gold)]/15 to-transparent blur-3xl" />
              <div className="relative clip-corner border-2 border-[var(--cap-gold)]/40 overflow-hidden hud-frame">
                {/* Parallax wrapper — image moves at 0.12x scroll speed */}
                <motion.img
                  src={characterImg}
                  alt="TEXIO character render"
                  width={1280} height={1600}
                  className="w-full aspect-[4/5] object-cover"
                  style={{ y: imgY, scale: 1.08 }}
                />
                <div className="absolute top-3 left-3 font-mono text-[10px] tracking-widest bg-background/70 backdrop-blur px-2 py-1">
                  <span className="text-[var(--cap-red)]">●</span> DOSSIER_001
                </div>
                <div className="absolute bottom-3 right-3 font-mono text-[10px] tracking-widest bg-background/70 backdrop-blur px-2 py-1 text-[var(--cap-gold)]">
                  BLENDER · UE5
                </div>
                <div className="absolute top-3 right-3 font-mono text-[10px] text-[var(--cap-blue)] tracking-widest">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--cap-blue)] mr-1" />LIVE
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={REVEAL} custom={0.1} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="font-display text-5xl lg:text-6xl leading-none">
                MEET <span className="marvel-title">TEXIO</span>
              </h2>
              <div className="mt-3 font-mono text-[var(--cap-red)] tracking-widest text-xs flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[var(--cap-red)]" />
                AKA JOHITH
              </div>
              <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-lg">
                The electrified warrior. Built from scratch in Blender, rigged and animated inside Unreal Engine 5 — protagonist of the entire Texioverse. Lightning-infused blades, a dark trench coat, and glowing purple eyes that pierce through shadow and myth.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {["BLENDER", "UNREAL ENGINE 5", "CUSTOM RIGGING", "VFX SHADERS", "LIGHTNING SYSTEM"].map((t) => (
                  <motion.span
                    key={t}
                    whileHover={{ scale: 1.05, borderColor: "var(--cap-gold)" }}
                    className="font-mono text-[10px] tracking-widest border border-border px-3 py-1.5 bg-surface/60 cursor-default transition-colors"
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

function Projects() {
  return (
    <>
      <div className="px-6"><div className="section-divider" /></div>
      <section id="projects" className="relative py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
            <motion.div
              variants={REVEAL} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
            >
              <div className="font-mono text-xs text-[var(--cap-red)] mb-3 flex items-center gap-3">
                <span className="inline-block w-8 h-px bg-[var(--cap-red)]" />
                // MISSION LOG
              </div>
              <h2 className="font-display text-5xl lg:text-6xl">
                MY <span className="marvel-title">PROJECTS</span>
              </h2>
            </motion.div>
            <a href="https://github.com/Johith-Tex" target="_blank" rel="noreferrer" className="font-mono text-xs text-muted-foreground hover:text-[var(--cap-gold)] transition-colors">
              EXPLORE ALL REPOS ON GITHUB →
            </a>
          </div>

          <div className="space-y-8">
            {PROJECTS.map((p, i) => (
              <motion.article
                key={p.n}
                variants={REVEAL} custom={i * 0.5} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
                className="group grid lg:grid-cols-12 gap-6 items-stretch"
              >
                {/* Image — subtle zoom on hover, clean border */}
                <div className="lg:col-span-7 relative overflow-hidden clip-corner border border-border transition-colors duration-300 group-hover:border-[var(--cap-red)]/60">
                  <img
                    src={p.img} alt={p.title} loading="lazy" width={1600} height={1000}
                    className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  <div className="absolute top-4 left-4 font-mono text-[10px] tracking-widest bg-background/70 backdrop-blur px-2.5 py-1 border border-[var(--cap-red)]/50 text-[var(--cap-red)]">
                    {p.status}
                  </div>
                </div>

                {/* Info panel */}
                <div className="lg:col-span-5 bg-surface/60 backdrop-blur border border-border clip-corner p-7 flex flex-col transition-colors duration-300 group-hover:border-[var(--cap-gold)]/50">
                  <div className="flex items-baseline justify-between">
                    <span className="font-display text-7xl text-[var(--cap-red)]/35">{p.n}</span>
                    {p.progress > 0 && (
                      <span className="font-mono text-sm text-[var(--cap-gold)]">{p.progress}%</span>
                    )}
                  </div>
                  <h3 className="font-display text-4xl mt-2">{p.title}</h3>
                  <p className="mt-4 text-muted-foreground flex-1">{p.desc}</p>
                  {p.progress > 0 && (
                    <div className="mt-4 h-1 bg-secondary overflow-hidden rounded-full">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[var(--cap-red)] to-[var(--cap-gold)]"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${p.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.4, delay: 0.3, ease: EASE }}
                      />
                    </div>
                  )}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className="font-mono text-[10px] tracking-widest border border-border/60 px-2 py-1 text-muted-foreground hover:text-[var(--cap-gold)] hover:border-[var(--cap-gold)]/40 transition-colors">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Devlog() {
  const FILTERS = ["ALL", "PROGRESS", "RELEASES", "DEV LOGS"];
  return (
    <>
      <div className="px-6"><div className="section-divider" /></div>
      <section id="devlog" className="relative py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={REVEAL} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
          >
            <div className="font-mono text-xs text-[var(--cap-red)] mb-3 flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-[var(--cap-red)]" />
              // FIELD JOURNAL
            </div>
            <h2 className="font-display text-5xl lg:text-6xl">DEVELOPMENT <span className="marvel-title">UPDATES</span></h2>
          </motion.div>

          <div className="mt-10 flex gap-2 flex-wrap">
            {FILTERS.map((f, i) => (
              <button key={f} className={`web-target font-mono text-xs px-4 py-2 border transition-colors ${
                i === 0 ? "border-[var(--cap-gold)] text-[var(--cap-gold)] bg-[var(--cap-gold)]/10" : "border-border text-muted-foreground hover:text-foreground hover:border-[var(--cap-gold)]/40"
              }`}>
                {f}
              </button>
            ))}
          </div>

          {/* Timeline layout */}
          <div className="mt-12 relative timeline-connector pl-8">
            <div className="space-y-5">
              {DEVLOG.map((d, i) => (
                <motion.div
                  key={d.title}
                  variants={REVEAL_LEFT} custom={i * 0.5} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
                  className="relative border border-border bg-surface/40 backdrop-blur p-6 clip-corner transition-colors duration-300 hover:border-[var(--cap-gold)]/50"
                >
                  <div
                    className="absolute -left-[1.85rem] top-7 w-3 h-3 rounded-full border-2 border-[var(--cap-gold)] bg-background"
                    style={{ boxShadow: "0 0 8px var(--cap-gold)" }}
                  />
                  <div className="flex items-center justify-between font-mono text-[10px] tracking-widest flex-wrap gap-2">
                    <span className={`px-2 py-0.5 ${
                      d.type === "RELEASE" ? "bg-[var(--cap-gold)] text-[var(--cap-blue)]"
                        : d.type === "PROGRESS" ? "bg-[var(--cap-red)] text-[var(--cap-cream)]"
                          : "bg-[var(--cap-blue)] text-[var(--cap-cream)]"
                    }`}>{d.type}</span>
                    <span className="text-muted-foreground">{d.date}</span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl">{d.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{d.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const SERVICE_ICONS = [<Gamepad2 className="w-8 h-8 text-[var(--cap-gold)]" />, <Bot className="w-8 h-8 text-[var(--cap-gold)]" />, <Code2 className="w-8 h-8 text-[var(--cap-gold)]" />];

function Hire() {
  return (
    <>
      <div className="px-6"><div className="section-divider" /></div>
      <section id="hire" className="relative py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <motion.div
              variants={REVEAL} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="font-mono text-xs text-[var(--cap-gold)] mb-3 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[var(--cap-gold)] animate-pulse-glow" />
                // AVAILABLE FOR WORK
              </div>
              <h2 className="font-display text-5xl lg:text-6xl leading-none">LET'S BUILD<br />SOMETHING<br /><span className="marvel-title">EPIC.</span></h2>
              <p className="mt-8 text-muted-foreground max-w-md">
                Actively seeking opportunities in game development, software engineering, and creative tech. Let's make something unforgettable together.
              </p>
            </motion.div>

            <div className="lg:col-span-7 grid sm:grid-cols-3 gap-4">
              {SERVICES.map((s, i) => (
                <motion.div
                  key={s.title}
                  variants={REVEAL} custom={i * 0.5} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 22 } }}
                  className="border border-border bg-surface/50 backdrop-blur p-6 clip-corner transition-colors duration-300 hover:border-[var(--cap-gold)]/60"
                >
                  <div className="text-3xl mb-3">{SERVICE_ICONS[i]}</div>
                  <div className="font-display text-2xl text-[var(--cap-gold)]">{s.title}</div>
                  <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-start gap-2">
                        <span className="text-[var(--cap-red)] mt-1">▸</span> {it}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Community() {
  return (
    <section id="community" className="relative py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="font-mono text-xs text-[var(--cap-red)] mb-3">// THE COMMUNITY</div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-5xl lg:text-6xl leading-none">JOIN THE<br /><span className="marvel-title">TEXIOVERSE</span></h2>
            <p className="mt-8 text-muted-foreground max-w-md">
              Exclusive dev updates, beta testing, direct access, and a crew of RPG fanatics and indie devs. This is your world too.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3 max-w-md">
              {["Exclusive Updates", "Beta Testing Access", "Dev Discussions", "Community Hub"].map((p) => (
                <div key={p} className="font-mono text-xs border border-border bg-surface/60 px-3 py-2.5 flex items-center gap-2">
                  <span className="text-[var(--cap-gold)]">◇</span> {p}
                </div>
              ))}
            </div>
            <a href="https://discord.gg/euxVmP5Sj" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-3 clip-corner bg-[var(--cap-blue)] text-[var(--cap-cream)] font-mono text-sm font-bold px-7 py-3.5 hover:opacity-90 transition-all">
              JOIN TEXIOVERSE →
            </a>
          </div>

          <div className="border border-border bg-surface/60 backdrop-blur clip-corner overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-surface-2/60">
              <div className="font-display text-xl flex items-center gap-2">
                <span className="text-[var(--cap-red)]">◈</span> TEXIOVERSE
              </div>
              <span className="font-mono text-[10px] tracking-widest text-[var(--cap-gold)] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--cap-gold)]" /> LIVE
              </span>
            </div>
            <div className="grid grid-cols-3 px-5 py-4 border-b border-border text-center">
              {[["ACTIVE", "Community"], ["24/7", "Chat"], ["DEVS", "Online"]].map(([a, b]) => (
                <div key={b}>
                  <div className="font-display text-2xl text-[var(--cap-gold)]">{a}</div>
                  <div className="font-mono text-[10px] tracking-widest text-muted-foreground">{b}</div>
                </div>
              ))}
            </div>
            <ul className="p-5 space-y-2 font-mono text-sm text-muted-foreground">
              {["# announcements", "# dev-updates", "# beta-testing", "# general"].map((c) => (
                <li key={c} className="web-target px-3 py-2 hover:bg-surface-2/80 hover:text-[var(--cap-gold)] transition-colors">{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="font-mono text-xs text-[var(--cap-gold)] mb-3">// TRANSMIT</div>
        <h2 className="font-display text-5xl lg:text-6xl">GET IN <span className="marvel-title">TOUCH</span></h2>

        <div className="mt-16 grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="font-display text-3xl">Let's Build Something Amazing</h3>
            <div className="mt-6 space-y-3 font-mono text-sm">
              <a href="mailto:johithjr@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-[var(--cap-gold)] transition-colors">
                <span className="text-[var(--cap-gold)]">✉</span> johithjr@gmail.com
              </a>
              <a href="#" className="flex items-center gap-3 text-muted-foreground hover:text-[var(--cap-red)] transition-colors">
                <span className="text-[var(--cap-red)]">◈</span> @tex.io
              </a>
              <a href="https://github.com/Johith-Tex" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-[var(--cap-cream)] transition-colors">
                <span className="text-[var(--cap-cream)]">▣</span> Johith-Tex
              </a>
            </div>
          </div>

          <form 
            className="border border-border bg-surface/50 backdrop-blur p-6 clip-corner space-y-4" 
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const name = formData.get("user_name");
              const email = formData.get("user_email");
              const type = formData.get("project_type");
              const details = formData.get("details");
              
              const subject = encodeURIComponent(`Portfolio Inquiry: ${type} - from ${name}`);
              const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nProject Type: ${type}\n\nDetails:\n${details}`);
              
              window.location.href = `mailto:johithjr@gmail.com?subject=${subject}&body=${body}`;
            }}
          >
            <div>
              <label className="font-mono text-[10px] tracking-widest text-muted-foreground">YOUR NAME</label>
              <input name="user_name" type="text" required placeholder="Enter your name" className="mt-1.5 w-full bg-background/60 border border-border px-4 py-3 font-sans text-sm focus:border-[var(--cap-gold)] focus:outline-none transition-colors" />
            </div>
            <div>
              <label className="font-mono text-[10px] tracking-widest text-muted-foreground">EMAIL</label>
              <input name="user_email" type="email" required placeholder="you@domain.com" className="mt-1.5 w-full bg-background/60 border border-border px-4 py-3 font-sans text-sm focus:border-[var(--cap-gold)] focus:outline-none transition-colors" />
            </div>
            <div>
              <label className="font-mono text-[10px] tracking-widest text-muted-foreground">PROJECT TYPE</label>
              <select name="project_type" className="mt-1.5 w-full bg-background/60 border border-border px-4 py-3 font-sans text-sm focus:border-[var(--cap-gold)] focus:outline-none">
                {["Game Development", "Discord Bot", "Website", "Software", "Other"].map((o) => <option key={o}>{o}</option>)}
              </select>
            </div>
            <div>
              <label className="font-mono text-[10px] tracking-widest text-muted-foreground">PROJECT DETAILS</label>
              <textarea name="details" required rows={4} placeholder="Tell me about your idea..." className="mt-1.5 w-full bg-background/60 border border-border px-4 py-3 font-sans text-sm focus:border-[var(--cap-gold)] focus:outline-none resize-none" />
            </div>
            <button type="submit" className="w-full clip-corner bg-[var(--cap-red)] text-[var(--cap-cream)] font-mono text-sm font-bold py-3.5 transition-all">
              SEND TRANSMISSION →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-border mt-20">
      {/* Top divider */}
      <div className="section-divider mb-0" />
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="marvel-title font-display text-xl">TEXIO</span>
          <span>// © 2026 · BUILT WITH PURPOSE</span>
        </div>
        <div className="flex items-center gap-4">
          <span>UNREAL ENGINE · REACT · THREE.JS</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--cap-gold)] animate-pulse-glow" />
            MADE WITH PASSION
          </span>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Character />
      <Projects />
      <GithubProjects />
      <div className="px-6"><div className="section-divider" /></div>
      <HeroesGrid />
      <Devlog />
      <Hire />
      <div className="px-6"><div className="section-divider" /></div>
      <Community />
      <Contact />
      <MascotAssistant />
      <Footer />
    </main>
  );
}

function IndexWithWeb() {
  return (
    <WebTransitionProvider>
      <ClientOnly>
        <SpiderCursor />
        <ClickFX />
        <ScrollProgressBar />
      </ClientOnly>
      <Index />
    </WebTransitionProvider>
  );
}

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import idleKatanas from "../assets/texio_idle_katanas_bg.mp4";
import idlePistols from "../assets/texio_idle_pistols_bg.mp4";
import idleWhistle from "../assets/texio_idle_whistle_bg.mp4";
import talks from "../assets/texio_talks_bg.mp4";

const SECTION_DIALOGUE: Record<string, string> = {
  hero: "Welcome to the Texioverse. I am your guide.",
  character: "This is my origin. Forged in Blender, unleashed in Unreal Engine.",
  projects: "My creator's arsenal. Take a look at these high-performance builds.",
  devlog: "Transmission logs from the frontline of development.",
  hire: "Need a top-tier engineer? You found him.",
  community: "Join the network. Connect with the elite.",
  contact: "Ready to initiate a project? Send a transmission.",
};

const RANDOM_FACTS = [
  "Did you know my blades are infused with 10,000 volts?",
  "I can process 1 million calculations while you blink.",
  "My creator Johith built this entire site using React and Framer Motion.",
  "The glowing eyes aren't for show. They're tactical HUDs.",
  "I never sleep. I just compile.",
];

export default function MascotAssistant() {
  const [currentVideo, setCurrentVideo] = useState<string>(idleWhistle);
  const [dialogue, setDialogue] = useState<string>("");
  const [isTalking, setIsTalking] = useState(false);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const idleTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const factTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const idles = [idleKatanas, idlePistols, idleWhistle];

  const playTalk = (text: string) => {
    setDialogue(text);
    setCurrentVideo(talks);
    setIsTalking(true);

    if (factTimeoutRef.current) clearTimeout(factTimeoutRef.current);
  };

  const handleVideoEnd = () => {
    if (isTalking) {
      // Finished talking, revert to idle
      setIsTalking(false);
      scheduleRandomFact();
    }
    // Always pick a new random idle so it doesn't loop the exact same animation
    const randomIdle = idles[Math.floor(Math.random() * idles.length)];
    setCurrentVideo(randomIdle);
  };

  const scheduleRandomFact = () => {
    if (factTimeoutRef.current) clearTimeout(factTimeoutRef.current);
    factTimeoutRef.current = setTimeout(() => {
      const fact = RANDOM_FACTS[Math.floor(Math.random() * RANDOM_FACTS.length)];
      playTalk(fact);
    }, 15000 + Math.random() * 10000); // 15-25 seconds of idle before random fact
  };

  useEffect(() => {
    // Initial start
    scheduleRandomFact();

    // Intersection Observer for Sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (SECTION_DIALOGUE[id]) {
              playTalk(SECTION_DIALOGUE[id]);
            }
          }
        });
      },
      { threshold: 0.5 } // Trigger when section is 50% visible
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((sec) => observer.observe(sec));

    return () => {
      observer.disconnect();
      if (idleTimeoutRef.current) clearTimeout(idleTimeoutRef.current);
      if (factTimeoutRef.current) clearTimeout(factTimeoutRef.current);
    };
  }, []);

  const videos = [idleKatanas, idlePistols, idleWhistle, talks];
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  // Play active video and pause others
  useEffect(() => {
    videos.forEach((vid) => {
      const el = videoRefs.current[vid];
      if (el) {
        if (vid === currentVideo) {
          el.currentTime = 0;
          el.play().catch(e => console.log("Video autoplay blocked:", e));
        } else {
          el.pause();
        }
      }
    });
  }, [currentVideo]);

  return (
    <motion.div 
      className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end pointer-events-none"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 1 }}
    >
      {/* Speech Bubble */}
      <AnimatePresence>
        {isTalking && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="relative bg-[var(--surface-2)] border border-[var(--cap-gold)] text-[var(--cap-cream)] p-4 rounded-xl mb-4 max-w-[250px] shadow-[0_0_20px_rgba(126,24,235,0.4)] pointer-events-auto"
            style={{ 
              fontFamily: 'var(--font-mono)', 
              fontSize: '12px',
              borderBottomRightRadius: '2px' // comic tail corner
            }}
          >
            {/* Typewriter effect wrapper */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {dialogue}
            </motion.span>
            
            {/* Comic Tail */}
            <div className="absolute -bottom-3 right-6 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[12px] border-t-[var(--cap-gold)]" />
            <div className="absolute -bottom-[10px] right-[25px] w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-[var(--surface-2)]" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mascot Video Container */}
      <motion.div 
        className="relative w-24 h-24 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-[var(--cap-blue)] shadow-[0_0_30px_rgba(230,36,41,0.3)] pointer-events-auto cursor-pointer bg-black"
        whileHover={{ scale: 1.05, borderColor: "var(--cap-gold)", boxShadow: "0 0 40px rgba(126,24,235,0.6)" }}
        whileTap={{ scale: 0.95 }}
        onClick={() => playTalk("Do not tap the glass. I am armed.")}
      >
        {videos.map((vidSrc) => (
          <video
            key={vidSrc}
            ref={(el) => { videoRefs.current[vidSrc] = el; }}
            src={vidSrc}
            muted
            playsInline
            onEnded={() => { if (vidSrc === currentVideo) handleVideoEnd(); }}
            className="absolute inset-0 w-full h-full object-cover mix-blend-screen contrast-125 transition-opacity duration-300"
            style={{ 
              opacity: currentVideo === vidSrc ? 1 : 0,
              backgroundColor: "black" 
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}

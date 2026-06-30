import { Suspense, useRef, useEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, AdaptiveDpr } from "@react-three/drei";
import * as THREE from "three";
import {
  motion,
  useMotionValue,
  useSpring as useFramerSpring,
  useTransform,
} from "framer-motion";

/* ─── Exact Cap shield colours ─────────────────────────────────── */
const C_RED   = new THREE.Color("#cc1515");
const C_WHITE = new THREE.Color("#ede8dc");
const C_BLUE  = new THREE.Color("#0b2660");

/* ─── Shared PBR material params ───────────────────────────────── */
const PBR_BASE = {
  clearcoat: 1.0,
  clearcoatRoughness: 0.05,
  envMapIntensity: 3.2,
  reflectivity: 1.0,
};

/* ─── One concentric ring ───────────────────────────────────────── */
function CapRing({
  innerR, outerR, color,
  metalness = 0.92, roughness = 0.07,
}: {
  innerR: number; outerR: number; color: THREE.Color;
  metalness?: number; roughness?: number;
}) {
  const geo = useMemo(() => {
    const s = new THREE.Shape();
    s.absarc(0, 0, outerR, 0, Math.PI * 2, false);
    const h = new THREE.Path();
    h.absarc(0, 0, innerR, 0, Math.PI * 2, true);
    s.holes.push(h);
    return new THREE.ExtrudeGeometry(s, {
      depth: 0.048,
      bevelEnabled: true,
      bevelThickness: 0.013,
      bevelSize: 0.013,
      bevelSegments: 5,
    });
  }, [innerR, outerR]);

  return (
    <mesh geometry={geo}>
      <meshPhysicalMaterial
        color={color}
        metalness={metalness}
        roughness={roughness}
        {...PBR_BASE}
      />
    </mesh>
  );
}

/* ─── Blue centre disc + 5-point star ──────────────────────────── */
function CentreDisc() {
  const discGeo = useMemo(
    () => new THREE.CylinderGeometry(0.375, 0.375, 0.062, 128),
    []
  );

  const starGeo = useMemo(() => {
    const sh = new THREE.Shape();
    for (let i = 0; i < 10; i++) {
      const r = i % 2 === 0 ? 0.21 : 0.09;
      const a = (i / 10) * Math.PI * 2 - Math.PI / 2;
      i === 0
        ? sh.moveTo(Math.cos(a) * r, Math.sin(a) * r)
        : sh.lineTo(Math.cos(a) * r, Math.sin(a) * r);
    }
    sh.closePath();
    return new THREE.ExtrudeGeometry(sh, { depth: 0.055, bevelEnabled: false });
  }, []);

  return (
    <group rotation={[Math.PI / 2, 0, 0]}>
      <mesh geometry={discGeo}>
        <meshPhysicalMaterial
          color={C_BLUE} metalness={0.9} roughness={0.08} {...PBR_BASE}
        />
      </mesh>
      <mesh geometry={starGeo} position={[0, 0.066, 0]}>
        <meshPhysicalMaterial
          color={C_WHITE} metalness={0.86} roughness={0.14} {...PBR_BASE}
        />
      </mesh>
    </group>
  );
}

/* ─── Key light — tracks mouse for dynamic specular highlight ─────
   This is the #1 premium effect: the bright specular spot slides
   across the metallic surface as you move your cursor.            */
function KeyLight({
  mouseRef,
}: {
  mouseRef: React.MutableRefObject<{ x: number; y: number }>;
}) {
  const ref = useRef<THREE.DirectionalLight>(null!);
  useFrame(() => {
    const { x, y } = mouseRef.current;
    ref.current.position.set(x * 8, -y * 7, 9);
  });
  return <directionalLight ref={ref} intensity={4.5} color="#ffffff" />;
}

/* ─── Full shield group — smooth tilt + idle float + click spin ── */
function ShieldMesh({
  mouseRef,
}: {
  mouseRef: React.MutableRefObject<{ x: number; y: number }>;
}) {
  const grp = useRef<THREE.Group>(null!);
  const tiltX = useRef(0);
  const tiltY = useRef(0);
  const spinTarget = useRef(0);
  const spinCurrent = useRef(0);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const { x, y } = mouseRef.current;

    // Smooth exponential lerp for tilt — feels physical
    tiltX.current += (-y * 0.38 - tiltX.current) * 0.055;
    tiltY.current += (x * 0.52  - tiltY.current) * 0.055;

    // Inertia spin on click — ease to next multiple of 2π
    spinCurrent.current += (spinTarget.current - spinCurrent.current) * 0.065;

    grp.current.rotation.x = tiltX.current;
    grp.current.rotation.y = tiltY.current;
    grp.current.rotation.z = spinCurrent.current;
    // Gentle idle float
    grp.current.position.y = Math.sin(t * 0.5) * 0.09;
  });

  const handleClick = () => {
    spinTarget.current += Math.PI * 2;
  };

  return (
    /* R3F mesh onClick — click anywhere on the shield to spin it */
    <group ref={grp} onClick={handleClick}>
      {/* Outer red ring */}
      <CapRing innerR={1.22} outerR={1.62} color={C_RED} />
      {/* White ring */}
      <CapRing innerR={0.95} outerR={1.22} color={C_WHITE} metalness={0.88} roughness={0.13} />
      {/* Inner red ring */}
      <CapRing innerR={0.375} outerR={0.95} color={C_RED} />
      {/* Blue centre + star */}
      <CentreDisc />
    </group>
  );
}

/* ─── Three.js scene ─────────────────────────────────────────────── */
function Scene({
  mouseRef,
}: {
  mouseRef: React.MutableRefObject<{ x: number; y: number }>;
}) {
  return (
    <>
      {/* Warm-blue ambient fill */}
      <ambientLight intensity={0.55} color="#aac8f0" />
      {/* Mouse-tracked key light for specular magic */}
      <KeyLight mouseRef={mouseRef} />
      {/* Red fill from lower-left */}
      <pointLight position={[-5, 3, 2]} intensity={7} color="#e62429" distance={15} />
      {/* Blue fill from upper-right */}
      <pointLight position={[4, -3, 1.5]} intensity={4.5} color="#1c3b8a" distance={12} />
      {/* Rim / back light */}
      <pointLight position={[0, 0, -5]} intensity={2.5} color="#5eb8e0" distance={10} />
      {/* HDRI environment for metallic reflections */}
      <Environment preset="studio" />
      {/* Auto-lower DPR when FPS drops — zero-config perf safety net */}
      <AdaptiveDpr pixelated />
      <ShieldMesh mouseRef={mouseRef} />
    </>
  );
}

/* ─── Subtle parallax nebula backdrop (CSS only, zero GPU cost) ── */
function NebulaBackdrop({
  mouseRef,
}: {
  mouseRef: React.MutableRefObject<{ x: number; y: number }>;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    let cx = 0;
    let cy = 0;
    const tick = () => {
      if (ref.current) {
        cx += (mouseRef.current.x * 28 - cx) * 0.04;
        cy += (mouseRef.current.y * 18 - cy) * 0.04;
        ref.current.style.transform = `translate(${cx}px,${cy}px)`;
      }
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => cancelAnimationFrame(raf);
  }, [mouseRef]);

  return (
    <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
      <div
        ref={ref}
        className="absolute inset-[-5%]"
        style={{
          background:
            "radial-gradient(ellipse at 42% 48%, oklch(0.55 0.24 25 / 0.25) 0%, transparent 48%)," +
            "radial-gradient(ellipse at 62% 52%, oklch(0.50 0.22 280 / 0.20) 0%, transparent 48%)," +
            "radial-gradient(ellipse at 52% 68%, oklch(0.45 0.20 255 / 0.18) 0%, transparent 42%)",
          filter: "blur(45px)",
        }}
      />
    </div>
  );
}

/* ─── Main export ────────────────────────────────────────────────── */
export default function ShieldScene() {
  const wrapRef = useRef<HTMLDivElement>(null);
  // Raw mouse position — updated via DOM event, NEVER triggers React re-render
  const mouseRef = useRef({ x: 0, y: 0 });

  // Framer Motion springs drive a CSS perspective tilt on the whole Canvas —
  // this is a pure CSS 3D transform, zero WebGL overhead for the tilt itself.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useFramerSpring(mx, { stiffness: 65, damping: 20, mass: 0.9 });
  const sy = useFramerSpring(my, { stiffness: 65, damping: 20, mass: 0.9 });
  const rotateX = useTransform(sy, [-1, 1], [14, -14]);
  const rotateY = useTransform(sx, [-1, 1], [-18, 18]);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width  - 0.5) * 2;
      const y = ((e.clientY - r.top)  / r.height - 0.5) * 2;
      mouseRef.current = { x, y };
      mx.set(x);
      my.set(y);
    };
    const onLeave = () => {
      mouseRef.current = { x: 0, y: 0 };
      mx.set(0);
      my.set(0);
    };
    el.addEventListener("pointermove", onMove, { passive: true });
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [mx, my]);

  return (
    <motion.div
      ref={wrapRef}
      aria-hidden
      className="absolute inset-0 overflow-hidden pointer-events-auto"
      style={{ perspective: 1400, rotateX, rotateY, transformStyle: "preserve-3d" }}
    >
      <NebulaBackdrop mouseRef={mouseRef} />
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 40, near: 0.1, far: 50 }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.35,
        }}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      >
        <Suspense fallback={null}>
          <Scene mouseRef={mouseRef} />
        </Suspense>
      </Canvas>
    </motion.div>
  );
}

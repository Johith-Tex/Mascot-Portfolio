import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, Points, PointMaterial, Torus, Sphere, Environment } from "@react-three/drei";
import { EffectComposer, Bloom, ChromaticAberration } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { useMemo, useRef, Suspense } from "react";
import * as THREE from "three";

function ParticleField({ count = 1500 }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 3 + Math.random() * 6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((_, dt) => {
    if (ref.current) {
      ref.current.rotation.y += dt * 0.05;
      ref.current.rotation.x += dt * 0.02;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#22d3ee"
        size={0.025}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function CoreOrb({ pointer }: { pointer: React.RefObject<{ x: number; y: number }> }) {
  const group = useRef<THREE.Group>(null);
  const inner = useRef<THREE.Mesh>(null);

  useFrame((state, dt) => {
    if (!group.current || !inner.current) return;
    const t = state.clock.elapsedTime;
    const px = pointer.current?.x ?? 0;
    const py = pointer.current?.y ?? 0;
    group.current.rotation.y += dt * 0.15;
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, py * 0.4, 0.05);
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, -px * 0.3, 0.05);
    inner.current.scale.setScalar(1 + Math.sin(t * 2) * 0.05);
  });

  return (
    <group ref={group}>
      <Float speed={1.4} rotationIntensity={0.6} floatIntensity={0.8}>
        <Icosahedron args={[1.35, 1]}>
          <meshStandardMaterial
            color="#a855f7"
            wireframe
            emissive="#d946ef"
            emissiveIntensity={1.2}
            transparent
            opacity={0.65}
          />
        </Icosahedron>
      </Float>
      <Sphere ref={inner} args={[0.85, 64, 64]}>
        <meshPhysicalMaterial
          color="#1a0b2e"
          emissive="#7c3aed"
          emissiveIntensity={0.6}
          roughness={0.15}
          metalness={0.9}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </Sphere>
      {[1.9, 2.3, 2.7].map((r, i) => (
        <Torus key={r} args={[r, 0.012, 16, 128]} rotation={[Math.PI / 2 + i * 0.4, i * 0.6, 0]}>
          <meshBasicMaterial color={i % 2 === 0 ? "#22d3ee" : "#d946ef"} transparent opacity={0.6} />
        </Torus>
      ))}
    </group>
  );
}

export default function HeroScene() {
  const pointer = useRef({ x: 0, y: 0 });

  return (
    <div
      className="absolute inset-0"
      onPointerMove={(e) => {
        const r = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
        pointer.current.x = ((e.clientX - r.left) / r.width) * 2 - 1;
        pointer.current.y = -(((e.clientY - r.top) / r.height) * 2 - 1);
      }}
    >
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5.5], fov: 50 }} gl={{ antialias: true, alpha: true }}>
        <color attach="background" args={["#0a0612"]} />
        <fog attach="fog" args={["#0a0612", 6, 14]} />
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={2} color="#22d3ee" />
        <pointLight position={[-5, -3, 2]} intensity={2} color="#d946ef" />
        <pointLight position={[0, 4, -4]} intensity={1.5} color="#a855f7" />
        <Suspense fallback={null}>
          <CoreOrb pointer={pointer} />
          <ParticleField count={1200} />
          <Environment preset="night" />
        </Suspense>
        <EffectComposer>
          <Bloom intensity={1.2} luminanceThreshold={0.15} luminanceSmoothing={0.9} mipmapBlur />
          <ChromaticAberration
            blendFunction={BlendFunction.NORMAL}
            offset={[0.0012, 0.0012] as unknown as [number, number]}
            radialModulation={false}
            modulationOffset={0}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}

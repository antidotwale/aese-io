"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Edges } from "@react-three/drei";
import { useRef, useEffect } from "react";
import type { Mesh } from "three";

function Crystal() {
  const mesh = useRef<Mesh>(null!);
  const mouse = useRef({ x: 0, y: 0 });
  const scroll = useRef(0);
  const spin = useRef(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    const onScroll = () => {
      scroll.current = window.scrollY;
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useFrame((_, delta) => {
    if (!mesh.current) return;
    // continuous baseline spin
    spin.current += delta * 0.25;
    // targets blend auto-spin + mouse drift + scroll nudge
    const targetY = spin.current + mouse.current.x * 0.6;
    const targetX = mouse.current.y * 0.4 + scroll.current * 0.0009;
    // ease toward targets for smooth motion
    mesh.current.rotation.y += (targetY - mesh.current.rotation.y) * 0.08;
    mesh.current.rotation.x += (targetX - mesh.current.rotation.x) * 0.08;
  });

  return (
    <mesh ref={mesh}>
      <icosahedronGeometry args={[1.5, 0]} />
      <meshStandardMaterial
        color="#d8d8dc"
        metalness={0.4}
        roughness={0.35}
        flatShading
      />
      <Edges threshold={12} color="#ffffff" />
    </mesh>
  );
}

export default function Hero3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 2]}
      style={{ width: "100%", height: "100%" }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.35} />
      <directionalLight position={[5, 5, 5]} intensity={2.2} />
      <directionalLight position={[-5, -2, 2]} intensity={0.7} />
      <Crystal />
    </Canvas>
  );
}

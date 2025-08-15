"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html, useProgress, useFBX } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function LoaderFallback() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="px-4 py-2 bg-black/70 rounded-lg text-white font-bold text-lg">
        {progress.toFixed(0)}% Loaded
      </div>
    </Html>
  );
}

function RotatingDumbbell() {
  const ref = useRef<THREE.Object3D>(null);
  const fbx = useFBX("/Dumbbelle 7kg.fbx"); // ✅ Loads from public folder

  useFrame((state, delta) => {
    if (ref.current) {
      // Smooth rotation
      ref.current.rotation.x += delta * 0.8;
      ref.current.rotation.y += delta * 0.8;

      // Bobbing effect
      ref.current.position.y = Math.sin(state.clock.getElapsedTime() * 2) * 0.2;
    }
  });

  return <primitive ref={ref} object={fbx} scale={[0.02, 0.02, 0.02]} />;
}

export default function Loader() {
  return (
    <div className="w-64 h-64">
      <Canvas camera={{ position: [3, 3, 3] }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1.2} />
        <Suspense fallback={<LoaderFallback />}>
          <RotatingDumbbell />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}

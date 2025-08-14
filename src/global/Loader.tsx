
"use client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Html, useProgress } from "@react-three/drei";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function LoaderFallback() {
  const { progress } = useProgress();
  return (
    <Html center className="text-white text-lg font-bold">
      {progress.toFixed(0)}% Loaded
    </Html>
  );
}

function RotatingDumbbell() {
    const ref = useRef<THREE.Object3D>(null);
    const fbx = useLoader(FBXLoader, "/Dumbbelle 7kg.fbx") as THREE.Object3D;
  
    useFrame(({ clock }) => {
      if (ref.current) {
        // Rotation
        ref.current.rotation.x += 0.01;
        ref.current.rotation.y += 0.01;
  
        // Bobbing
        const t = clock.getElapsedTime();
        ref.current.position.y = Math.sin(t * 2) * 0.2;
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

'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial, Sphere, ContactShadows, Html, Environment } from '@react-three/drei';
import { Suspense } from 'react';

const Macbook = () => {
  return (
    <group rotation={[0, -0.4, 0]} position={[0, -1.2, 0]} scale={1.2}>
      {/* Base / Body */}
      <mesh position={[0, 0, 0]} receiveShadow>
        <boxGeometry args={[4, 0.15, 2.8]} />
        <meshStandardMaterial color="#1e293b" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Trackpad area */}
      <mesh position={[0, 0.08, 0.8]}>
         <boxGeometry args={[1, 0.01, 0.6]} />
         <meshStandardMaterial color="#334155" metalness={0.5} roughness={0.5} />
      </mesh>

      {/* Screen / Lid */}
      <group position={[0, 0.07, -1.35]} rotation={[-1.4, 0, 0]}>
        <mesh position={[0, 1.4, 0]} castShadow>
          <boxGeometry args={[4, 2.8, 0.08]} />
          <meshStandardMaterial color="#0f172a" metalness={0.8} />
        </mesh>
        
        {/* Screen Background Glow */}
        <mesh position={[0, 1.4, 0.05]}>
           <planeGeometry args={[3.8, 2.6]} />
           <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={0.5} />
        </mesh>

        {/* Screen Content - Holographic Code */}
        <Html transform occlude position={[0, 1.4, 0.06]} scale={0.12}>
           <div className="w-[310px] h-[210px] bg-slate-950/90 rounded-sm border border-[#915eff]/50 p-3 font-mono text-[9px] text-white">
              <div className="flex gap-1.5 mb-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                 <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                 <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
              </div>
              <p className="text-violet-400">class <span className="text-blue-400">AryanPatel</span> {"{"}</p>
              <p className="ml-2 text-slate-400">// Software & ML Engineer</p>
              <p className="ml-2 text-violet-400">constructor() {"{"}</p>
              <p className="ml-4"><span className="text-blue-400">this</span>.skills = ["AI", "React", "ML"];</p>
              <p className="ml-4"><span className="text-blue-400">this</span>.status = "Elevating...";</p>
              <p className="ml-2 text-violet-400">{"}"}</p>
              <p className="text-violet-400">{"}"}</p>
              <div className="mt-4 w-full h-[1px] bg-slate-800" />
              <p className="mt-2 text-green-400 animate-pulse">$ npm build portfolio</p>
           </div>
        </Html>
      </group>

      {/* Glowing Disk Base */}
      <mesh position={[0, -0.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2.8, 3.2, 64]} />
        <meshStandardMaterial color="#915eff" emissive="#915eff" emissiveIntensity={4} side={2} />
      </mesh>
      
      {/* Outer Glow Ring */}
      <mesh position={[0, -0.12, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[3.4, 3.5, 64]} />
        <meshStandardMaterial color="#00d2ff" emissive="#00d2ff" emissiveIntensity={2} side={2} />
      </mesh>
    </group>
  );
};

export const HeroCanvas = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 2, 10], fov: 40 }}
      >
        <ambientLight intensity={0.4} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} color="#915eff" intensity={1} />
        
        <Suspense fallback={null}>
          <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <Macbook />
            
            {/* Floating 3D Elements */}
            <Sphere args={[0.3, 32, 32]} position={[3.5, 2, -1]}>
               <MeshDistortMaterial color="#915eff" distort={0.4} speed={2} roughness={0.1} metalness={1} />
            </Sphere>
            
            <mesh position={[-3.5, 2.5, 0]}>
               <octahedronGeometry args={[0.4]} />
               <meshStandardMaterial color="#00d2ff" emissive="#00d2ff" emissiveIntensity={2} wireframe />
            </mesh>

            <mesh position={[4, -1, 1]}>
               <boxGeometry args={[0.3, 0.3, 0.3]} />
               <meshStandardMaterial color="#915eff" emissive="#915eff" emissiveIntensity={1} />
            </mesh>
          </Float>
          
          <ContactShadows position={[0, -2.5, 0]} opacity={0.5} scale={15} blur={2.5} far={4} />
          <Environment preset="city" />
        </Suspense>

        <OrbitControls 
          enableZoom={false} 
          maxPolarAngle={Math.PI / 2.2}
          minPolarAngle={Math.PI / 4}
        />
      </Canvas>
    </div>
  );
};

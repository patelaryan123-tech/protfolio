'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, useTexture, Text } from '@react-three/drei';
import CanvasLoader from '../ui/Loader';

const Ball = (props: any) => {
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 0.05]} intensity={1} />
      <pointLight position={[0, 5, 0]} intensity={1} />
      <pointLight position={[0, -5, 0]} intensity={0.5} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
          roughness={0}
          metalness={1}
        />
        <Text
          position={[0, 0, 1]}
          fontSize={0.2}
          color="#915eff"
          anchorX="center"
          anchorY="middle"
        >
          {props.icon}
        </Text>
      </mesh>
    </Float>
  );
};

export const BallCanvas = ({ icon }: { icon: string }) => {
  return (
    <Canvas
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} />
        <Ball icon={icon} />
      </Suspense>
    </Canvas>
  );
};

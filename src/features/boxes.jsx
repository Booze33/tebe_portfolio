import React from 'react';
import { Canvas } from '@react-three/fiber';
import { SoftShadows, OrbitControls } from '@react-three/drei';
import { useControls } from "leva";
import SpinningMesh from './spinningMesh';

const Boxes = () => {
  const { enabled, ...config } = useControls({
    enabled: true,
    size: { value: 25, min: 0, max: 100 },
    focus: { value: 0, min: 0, max: 2 },
    samples: { value: 10, min: 1, max: 20, step: 1 }
  })

  return (
    <Canvas
      shadows // Enable shadow mapping
      colorManagement
      camera={{ position: [-5, 2, 10], fov: 60 }}
      className="bg-white w-twice"
    >
      {enabled && <SoftShadows {...config} />}
      <directionalLight
        castShadow
        position={[0, 10, 0]}
        intensity={1.5}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <ambientLight intensity={0.3} />
      <pointLight position={[-10, 0, -20]} intensity={0.5} />
      <pointLight position={[0, -10, 0]} intensity={1.5} />

      <group>
        <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
          <planeGeometry attach='geometry' args={[100, 100]} />
          <shadowMaterial attach='material' opacity={0.3} />
        </mesh>
      </group>
      <SpinningMesh position={[0, 1, 0]} args={[3, 2, 1]} color='lightblue' speed={7} />
      <SpinningMesh position={[-2, 1, -5]} color='pink' speed={6} />
      <SpinningMesh position={[5, 1, -2]} color='pink' speed={6} />
      <OrbitControls />
    </Canvas>
  );
};

export default Boxes;

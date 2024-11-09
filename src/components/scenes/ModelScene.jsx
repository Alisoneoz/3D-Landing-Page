'use client';
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const ModelScene = ({ children, environmentPreset = 'park', className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: false, 
    margin: "-100px",
    amount: 0.3
  });

  return (
    <div ref={ref} className={`h-[500px] rounded-lg overflow-hidden ${className}`}>
      <Canvas
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: "transparent"
        }}
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ alpha: true }}
      >
        <directionalLight intensity={3} position={[0,3,2]}/>
        {isInView && (
          <Suspense fallback={null}>
            <Environment preset={environmentPreset} />
            {children}
          </Suspense>
        )}
     
      </Canvas>
    </div>
  )
}

export default ModelScene;

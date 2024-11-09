'use client';
import dynamic from 'next/dynamic'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { useControls } from 'leva';
import { Suspense } from 'react';

// Importación dinámica del modelo
const DynamicCubeInteractive = dynamic(() => import('@/components/models/CubeInteractive'), {
  loading: () => null,
  ssr: false
})

const InteractiveCubeScene = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: false, 
    margin: "-100px",
    amount: 0.3
  });

  useEffect(() => {
    const levaPanel = document.querySelector('.leva-c-kWgxhW');
    if (levaPanel) {
      if (isInView) {
        levaPanel.style.display = 'block';
      } else {
        levaPanel.style.display = 'none';
      }
    }
  }, [isInView]);

  return (
    <div 
      ref={ref} 
      className="h-screen w-full rounded-lg overflow-hidden relative"
    >
      <Canvas
        camera={{ 
          position: [0, 0, 5],
          fov: 75
        }}
      >
        <directionalLight intensity={3} position={[0, 3, 2]} />
        <Suspense fallback={null}>
          {isInView && <DynamicCubeInteractive />}
        </Suspense>
        <OrbitControls 
        
        minPolarAngle={Math.PI / 4} // 45 grados desde arriba
  maxPolarAngle={Math.PI / 2} // 90 grados (vista horizontal)
  enableZoom={false} // Sin zoom
  enablePan={true} // Sin paneo
        />
      </Canvas>
    </div>
  )
}

export default InteractiveCubeScene;

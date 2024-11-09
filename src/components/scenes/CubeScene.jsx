'use client';
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';
import CubeInteractive from '@/components/models/CubeInteractive';
import { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { useControls } from 'leva';

const CubeScene = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: false, 
    margin: "-100px",
    amount: 0.3 // Controla qué porcentaje de la sección debe ser visible
  });

  // Controlar la visibilidad del panel de Leva
  useEffect(() => {
    const levaPanel = document.querySelector('.leva-c-kWgxhW'); // Selector del panel de Leva
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
        {isInView && <CubeInteractive />}
        <OrbitControls />
      </Canvas>
    </div>
  )
}

export default CubeScene;

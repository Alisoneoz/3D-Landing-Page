'use client';
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';
import Discoteca from '@/components/models/Discoteca';

const Play = () => {
  return (
    <div className="h-screen w-full">
      <div className="w-full h-full">
        <Canvas
          camera={{ 
            position: [0, 0, 5],
            fov: 75
          }}
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          <directionalLight intensity={3} position={[0, 3, 2]} />
          <Discoteca />
          <OrbitControls />
        </Canvas>
      </div>
    </div>
  )
}

export default Play

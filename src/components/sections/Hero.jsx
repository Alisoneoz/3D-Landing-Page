'use client'
import React from 'react';
import { Canvas } from '@react-three/fiber'

import Discoteca from '@/components/models/Discoteca';


const Hero = () => {
  return (
    <div className="w-full">
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
        
      </Canvas>
    </div>
  </div>
  )
}

export default Hero
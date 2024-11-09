'use client'
import React from 'react';
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';
import Discoteca from '@/components/models/Discoteca';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen w-full"> {/* Cambiado a h-screen */}

      <Canvas
        camera={{ 
          position: [0, 0, 5],
          fov: 75
        }}
        className="w-full h-full" // Cambiado de absolute
      >
        <directionalLight intensity={3} position={[0, 3, 2]} />
        <Discoteca />
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
        />
      </Canvas>

      {/* Overlay con mejor z-index y posicionamiento */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80" />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
          Three.js Magic
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-300">
          Exploring the boundless possibilities of 3D web graphics
        </p>
      </div> */}
    </section>
  )
}

export default Hero

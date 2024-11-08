'use client';
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Model from './Model';
import { Environment,  OrbitControls } from '@react-three/drei';

const Scene = () => {

  
  return (
    <Canvas   style={{backgroundColor: "transparent"}}   camera={{ position: [0, 0, 5], fov: 75 }}  gl={{ alpha: true }}>
      <directionalLight intensity={3} position={[0,3,2]}/>
      <Environment preset='park'/>
      <Model />
      <OrbitControls />
    </Canvas>
  )
}

export default Scene
'use client';
import {  useGLTF, MeshTransmissionMaterial, Html} from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import React, { useRef } from 'react';

const Model = () => {
    const { nodes } = useGLTF("./medias/Cubo.glb")
    const { viewport } = useThree()
    const torus = useRef(null);
  
    useFrame( () => {
        torus.current.rotation.x += 0.005
        torus.current.rotation.y += 0.005
    })

    const materialProps = {
        thickness: 3.00,
        roughness: 0,
        transmission: 1,
        ior: 0.0,
        chromaticAberration: 1.00,
        backside: true,
    }

    return (
   <group position={[0, 0, 0]} scale={0.5}>
    
    
    <mesh ref={torus} {...nodes.Cube}>
    <MeshTransmissionMaterial {...materialProps}/>
    </mesh>
   </group>
  )
}

export default Model
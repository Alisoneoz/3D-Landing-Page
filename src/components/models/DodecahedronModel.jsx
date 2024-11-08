'use client';
import { useGLTF, MeshTransmissionMaterial } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const DodecahedronModel = () => {
    const { nodes } = useGLTF("/medias/dodecahedron.glb")
    const model = useRef(null);
  
    useFrame(() => {
        model.current.rotation.x += 0.003
        model.current.rotation.y -= 0.01
    })

    const materialProps = {
        thickness: 2.50,
        roughness: 0,
        transmission: 1,
        ior: 1.5,
        chromaticAberration: 0.80,
        backside: true,
    }

    return (
      <mesh ref={model} {...nodes.Dodecahedron}>
        <MeshTransmissionMaterial {...materialProps}/>
      </mesh>
    )
}

export default DodecahedronModel;
useGLTF.preload("/medias/dodecahedron.glb")

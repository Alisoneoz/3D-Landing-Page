'use client';
import { useGLTF, MeshTransmissionMaterial, Float } from '@react-three/drei';
import { useRef } from 'react';

const IcosahedronModel = () => {
  const { nodes } = useGLTF("/medias/poligono.glb")
  const model = useRef(null);

  const materialProps = {
    thickness: 2.50,
    roughness: 0,
    transmission: 1,
    ior: 1.5,
    chromaticAberration: 0.80,
    backside: true,
  }
  console.log("qlq")
  console.log("los nodeees",nodes)
  return (
    <Float
      speed={2} // Velocidad de animación
      rotationIntensity={2} // Intensidad de rotación
      floatIntensity={3} // Intensidad del floating
      floatingRange={[-0.3, 0.3]} // Rango del movimiento vertical
    >
      <group>       
        <mesh ref={model} {...nodes.Icosahedron}>
        <MeshTransmissionMaterial {...materialProps} />
      </mesh></group>

    </Float>
  )
}

export default IcosahedronModel;

useGLTF.preload("/medias/poligono.glb")

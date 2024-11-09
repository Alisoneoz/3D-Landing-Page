'use client';
import { useGLTF, MeshTransmissionMaterial, Float, Text } from '@react-three/drei';
import { useRef } from 'react';
import { useThree } from '@react-three/fiber';


const IcosahedronModel = () => {
  const { viewport } = useThree();
  const { nodes } = useGLTF("/medias/Icosphere.glb")
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
  console.log("los nodeees", nodes)
  return (
    <Float
      speed={10} // Velocidad de animación
      rotationIntensity={0.5} // Intensidad de rotación
      floatIntensity={3} // Intensidad del floating
      floatingRange={[-0.1, 0.1]} // Rango del movimiento vertical
    >

      <group scale={viewport.width / 5}>
        <Text position={[0, 0, -1]} fontSize={0.3} color="white" anchorX="center" anchorY="middle">
        🟡
        </Text>
        <mesh ref={model} {...nodes.Icosphere}>
          <MeshTransmissionMaterial {...materialProps} />
        </mesh>
      </group>
    </Float>
  )
}

export default IcosahedronModel;

useGLTF.preload("/medias/Icosphere.glb")

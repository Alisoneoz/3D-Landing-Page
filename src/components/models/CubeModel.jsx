'use client';
import { useGLTF, MeshTransmissionMaterial} from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const CubeModel = () => {
    const { nodes } = useGLTF("./medias/Cubo.glb")
    const model = useRef(null);
  
    useFrame(() => {
        model.current.rotation.x += 0.005
        model.current.rotation.y += 0.005
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
      <mesh ref={model} {...nodes.Cube}>
        <MeshTransmissionMaterial {...materialProps}/>
      </mesh>
    )
}

export default CubeModel;
useGLTF.preload("/medias/Cubo.glb")

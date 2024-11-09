'use client';
import { useGLTF, MeshTransmissionMaterial, Float} from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const CubeModel = () => {
    const { nodes } = useGLTF("/medias/cube.glb")  // Cambiamos la ruta para que sea absoluta
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
        <Float
            speed={1.5} // Velocidad de la animación
            rotationIntensity={1} // Intensidad de la rotación
            floatIntensity={2} // Intensidad del floating
        >

            <mesh ref={model} {...nodes.Cube}>
                <MeshTransmissionMaterial {...materialProps}/>
            </mesh>
        </Float>
    )
}

export default CubeModel;

useGLTF.preload("/medias/cube.glb")

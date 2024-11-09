'use client';
import { useGLTF, MeshTransmissionMaterial, Float, Text} from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { useThree } from '@react-three/fiber';
import { useControls } from 'leva'

const Discoteca= () => {
    const { nodes } = useGLTF("/medias/discoteca.glb")  // Cambiamos la ruta para que sea absoluta
    const { viewport } = useThree();
    const model = useRef(null);
  
    useFrame(() => {
        model.current.rotation.x += 0.005
        model.current.rotation.y += 0.005
    })

    const materialProps = useControls({
        thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
        roughness: { value: 0, min: 0, max: 1, step: 0.1 },
        transmission: {value: 1, min: 0, max: 1, step: 0.1},
        ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
        chromaticAberration: { value: 0.02, min: 0, max: 1},
        backside: { value: true},
    })
    return (
        <group >
           <Text position={[0, 0, -1]} fontSize={1} color="white" anchorX="center" anchorY="middle"> alison Estephany</Text>
           <Float
  speed={4} // Velocidad de la animación
  rotationIntensity={0} // Si no quieres rotación
  floatIntensity={2} // Intensidad del movimiento
  floatingRange={[-1, 1]} // Rango de movimiento en X
>
            

            <mesh ref={model} {...nodes.discoteca}>
                <MeshTransmissionMaterial {...materialProps}/>
            </mesh>
        </Float>
       
        </group>
        
    )
}

export default Discoteca;

useGLTF.preload("/medias/cube.glb")

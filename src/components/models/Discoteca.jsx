'use client';
import { useGLTF, MeshTransmissionMaterial, Text, Float } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { useThree } from '@react-three/fiber';
import { Environment } from '@react-three/drei';

const Discoteca = () => {
    const { nodes } = useGLTF("/medias/discoteca.glb")
    const { viewport } = useThree();
    const model = useRef(null);
    const groupRef = useRef(null);
  
    // Valores fijos para el material
    const materialProps = {
        thickness: 0.2,
        roughness: 0,
        transmission: 1,
        ior: 1.2,
        chromaticAberration: 0.02,
        backside: true,
    }

    useFrame(({ clock }) => {
        if (model.current) {
            model.current.rotation.x += 0.01
            model.current.rotation.y += 0.01
        }
        
        if (groupRef.current) {
            groupRef.current.position.x = Math.sin(clock.getElapsedTime() * 0.4) * 2
        }
    })

    return (
        <group scale={viewport.width / 10}> {/* Ajustado el scale */}
        <Text 
            font={'/fonts/Orbitron-Regular.ttf'}
            position={[0, 0, 0]} 
            fontSize={0.5} 
            color="white" 
            anchorX="center" 
            anchorY="middle"
        > 
            Playing with ThreeJS
        </Text>
        
        <group ref={groupRef}>
            <Float
                speed={4}
                rotationIntensity={0.5}
                floatIntensity={1}
                floatingRange={[-0.3, 0.3]}
            >     
                <mesh ref={model} {...nodes.discoteca}>
                    <MeshTransmissionMaterial {...materialProps}/>
                </mesh>
            </Float>
        </group>

        <Environment 
            preset="sunset"
            intensity={1.5}
        />
    </group>
    )
}

export default Discoteca;

useGLTF.preload("/medias/discoteca.glb")

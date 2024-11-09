'use client';
import { useGLTF, MeshTransmissionMaterial, Text, Float } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { useThree } from '@react-three/fiber';
import { useControls, folder } from 'leva';
import { Environment } from '@react-three/drei';

const CubeInteractive = () => {
    const { nodes } = useGLTF("/medias/cube.glb")
    const { viewport } = useThree();
    const model = useRef(null);
    const groupRef = useRef(null);
  
    const materialProps = useControls('Material', {
        thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
        roughness: { value: 0, min: 0, max: 1, step: 0.1 },
        transmission: {value: 1, min: 0, max: 1, step: 0.1},
        ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
        chromaticAberration: { value: 0.02, min: 0, max: 1},
        backside: { value: true},
        collapsed:true,
        order:0
    })

    const moveProps = useControls('Movement', {
        rotationSpeedX: { value: 0.007, min: 0, max: 0.02, step: 0.001 },
        rotationSpeedY: { value: 0.01, min: 0, max: 0.02, step: 0.001 },
        swaySpeed: { value: 1, min: 0, max: 5, step: 0.1 },
        swayAmplitude: { value: 1, min: -3, max: 3, step: 0.1 }
    })

    const envProps = useControls('Environment', {
        preset: {
            value: 'sunset',
            options: ['sunset', 'dawn', 'night', 'warehouse', 'forest', 'apartment', 'studio', 'city', 'park', 'lobby'],
        },
        intensity: { value: 1, min: 0, max: 5, step: 0.1 },
    })

    useFrame(({ clock }) => {
        if (model.current) {
            model.current.rotation.x += moveProps.rotationSpeedX
            model.current.rotation.y += moveProps.rotationSpeedY
        }
        
        if (groupRef.current) {
            groupRef.current.position.x = Math.sin(clock.getElapsedTime() * moveProps.swaySpeed) * moveProps.swayAmplitude
        }
    })

    return (
        <group>
            <Text 
                font={'/fonts/Orbitron-Regular.ttf'}
                position={[0, 0, -1]} 
                fontSize={0.5} 
                color="white" 
                anchorX="center" 
                anchorY="middle"
            > 
                Interactive Cube
            </Text>
            
            <group ref={groupRef}>
                <Float
                    speed={10}
                    rotationIntensity={0.5}
                    floatIntensity={2}
                    floatingRange={[-0.1, 0.1]}
                >     
                    <mesh ref={model} {...nodes.Cube}>
                        <MeshTransmissionMaterial {...materialProps}/>
                    </mesh>
                </Float>
            </group>

            <Environment 
                preset={envProps.preset}
                intensity={envProps.intensity}
            />
        </group>
    )
}

export default CubeInteractive;

useGLTF.preload("/medias/cube.glb")
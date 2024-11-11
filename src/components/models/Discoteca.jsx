'use client';
import { useGLTF, MeshTransmissionMaterial, Text, Float } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useEffect, useState } from 'react';
import { useThree } from '@react-three/fiber';
import { Environment } from '@react-three/drei';

const Discoteca = () => {
    const { nodes } = useGLTF("/medias/discoteca.glb")
    const { viewport } = useThree();
    const model = useRef(null);
    const groupRef = useRef(null);

    // Estado para manejar las escalas según el viewport
    const [scales, setScales] = useState({
        text: 1,
        model: 1
    });
  
    // Calculamos las escalas basadas en el viewport
    useEffect(() => {
        const calculateScales = () => {
            // Viewport breakpoints aproximados
            if (viewport.width > 14) { // desktop grande (>1536px)
                setScales({
                    text: viewport.width / 12,
                    model: viewport.width / 10
                });
            } else if (viewport.width > 10) { // desktop normal (>1280px)
                setScales({
                    text: viewport.width / 11,
                    model: viewport.width / 7
                });
            } else if (viewport.width > 8) { // tablet landscape (>1024px)
                setScales({
                    text: viewport.width / 10,
                    model: viewport.width / 6
                });
            } else if (viewport.width > 6) { // tablet (>768px)
                setScales({
                    text: viewport.width / 10,
                    model: viewport.width / 6
                });
            } else { // mobile
                setScales({
                    text: viewport.width / 10,
                    model: viewport.width / 4
                });
            }
        };

        calculateScales();
    }, [viewport.width]);

    // Valores fijos para el material
    const materialProps = {
        thickness: 0.2,
        roughness: 0,
        transmission: 1,
        ior: 1.2,
        chromaticAberration: 0.02,
        backside: true,
    }

    // Ajustamos la velocidad de animación según el viewport
    const rotationSpeed = viewport.width > 10 ? 0.005 : 0.01;
    const swaySpeed = viewport.width > 10 ? 0.3 : 0.4;
    const swayAmount = viewport.width > 10 ? 1.2 : 1.6;

    useFrame(({ clock }) => {
        if (model.current) {
            model.current.rotation.x += rotationSpeed;
            model.current.rotation.y += rotationSpeed;
        }
        
        if (groupRef.current) {
            groupRef.current.position.x = Math.sin(clock.getElapsedTime() * swaySpeed) * swayAmount;
        }
    })

    return (
        <group> 
            <Text 
                font={'/fonts/Orbitron-Regular.ttf'}
                position={[0, viewport.width > 10 ? 0.75 : 0, 0]} 
                fontSize={0.7} 
                color="white" 
                anchorX="center" 
                anchorY="middle"
                scale={scales.text}
            > 
                Playing with ThreeJS
            </Text>
            
            <group 
                ref={groupRef} 
                scale={scales.model}
                position={[0, viewport.width > 10 ? 1 : 0, 0]} // Ajustamos posición en desktop
            >
                <Float
                    speed={viewport.width > 10 ? 3 : 4}
                    rotationIntensity={viewport.width > 10 ? 0.3 : 0.5}
                    floatIntensity={viewport.width > 10 ? 0.7 : 1}
                    floatingRange={viewport.width > 10 ? [-0.2, 0.2] : [-0.3, 0.3]}
                >     
                    <mesh ref={model} {...nodes.discoteca}>
                        <MeshTransmissionMaterial {...materialProps}/>
                    </mesh>
                </Float>
            </group>

            <Environment 
                preset="sunset"
                intensity={viewport.width > 10 ? 1.2 : 1.5}
            />
        </group>
    )
}

export default Discoteca;

useGLTF.preload("/medias/discoteca.glb")

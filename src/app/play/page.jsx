'use client';
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei';
import DodecahedronModel from '@/components/models/DodecahedronModel';
import Discoteca from '@/components/models/Discoteca';

const Play = () => {
  return (
<div className="h-screen w-full"> {/* Añadimos w-full */}
      <div className="w-full h-full"> {/* Añadimos dimensiones al contenedor */}
        <Canvas
          camera={{ 
            position: [0, 0, 5], // Posición de la cámara
            fov: 75 // Campo de visión
          }}
          style={{
            width: '100%',
            height: '100%',
          }}
        >
        <directionalLight intensity={3} position={[0, 3, 2]} />
        <Environment preset="sunset" />
<Discoteca />
        </Canvas>
      </div>
     <Canvas
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: "transparent"


        }}
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ alpha: true }}
      >
        <directionalLight intensity={3} position={[0, 3, 2]} />
        <Environment preset="park" background="true" />



        <DodecahedronModel />



      </Canvas> 
    </div>
  )
}

export default Play
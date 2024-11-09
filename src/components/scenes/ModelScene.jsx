'use client';
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei';


const ModelScene = ({ children, environmentPreset = 'park', className }) => {
  return (
    <div className={className}> {/* Aplicamos la clase pasada como prop */}
      <Canvas
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: "transparent"
        }}
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ alpha: true }}
      >
        <directionalLight intensity={3} position={[0,3,2]}/>
        <Environment preset={environmentPreset} />
        {children}
        <OrbitControls />
      </Canvas>
    </div>
  )
}

export default ModelScene

import React, {Suspense, useState, useEffect} from 'react';
import { Canvas  } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from "../Loader";

const Computers = ({isMobile}) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');
  return (
    <mesh>
      <pointLight intensity={1} color="#fff"/>
      <hemisphereLight intensity={2} groundColor="black" color="#fff"/>
      <spotLight position={[-20,50, 10]} angle={0.12} penubra={1} intensity={1} castShadow shadow-mapSize={1024} color="#fff"/>
      <primitive 
        object={computer.scene}
        scale={isMobile ? 0.3 : 0.55}
        position={isMobile? [0, -0.5, -0.6]:[0, -3.8, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery= window.matchMedia('(max-width:500px)');
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);
    mediaQuery.removeEventListener('change', handleMediaQueryChange);
  }, [])
  
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{position:[20,3,5],fov:25}}
      gl={{preserveDrawingBuffer:true}}
    >
        <OrbitControls 
          enableZoom={false} 
          maxPolarAngle={Math.PI /2}
          minPolarAngle={Math.PI /2}
        />
        <Suspense fallback={<CanvasLoader />}>
          <Computers isMobile={isMobile} />
        </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas;
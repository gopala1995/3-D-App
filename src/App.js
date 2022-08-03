import React, { Suspense, useMemo } from "react";
import "./App.css";
import * as THREE from "three";
import { Canvas,useLoader } from "react-three-fiber";
import circleImg from "./assets/icons.png"

function Points() {
const Imgtext = useLoader(THREE.TextureLoader, circleImg)
let position = useMemo(()=>{

})
  return(
    <point>
      <bufferGeometry attach="geometry">
         <bufferAttribute 
          attachObject={["atributes", "postion"]}
          array={position}
          
         />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        map={Imgtext}
        color={0x00AAFF}
        size={0.5}
        sizeAttenuation
        transparent={false}
        alphaTest={0.5}
        opacity={1.0}
      />
    </point>
  )
}

function AnimationCanvas() {
  return (
    <Canvas
      colorManagement={false}
      camera={{ position: [100, 10, 0], fov: 75 }}
    >
      <Suspense fallback={null}>
        <Points />
      </Suspense>
    </Canvas>
  );
}

function App() {
  return (
    <div className="anim">
      <Suspense fallback={<div>Loding...</div>}>
        <AnimationCanvas />
      </Suspense>
    </div>
  );
}

export default App;

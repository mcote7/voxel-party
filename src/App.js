import './App.css';
// import { useRef, useState } from 'react';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { Canvas, useLoader } from '@react-three/fiber';
import { Suspense } from "react";
import CameraControls from './cameraControl';


const Scene = () => {
  const materials = useLoader(MTLLoader, "ex/homer_0.mtl");
  const obj = useLoader(OBJLoader, "ex/homer_0.obj", (loader) => {
    materials.preload()
    loader.setMaterials(materials)
  });

  console.log(obj);
  return <primitive object={obj} scale={1}/>;
};

const App = () => {
  return (
    <div className="flex">
      <div className="cont">
        <Canvas className='can-can'>
          <Suspense fallback={null}>
            <CameraControls />
            <ambientLight intensity={0.5} />
            <directionalLight/>
            <Scene />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

export default App;

import './App.css';
// import { useRef } from 'react';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { Canvas, useLoader } from '@react-three/fiber';
import { Suspense } from "react";
import CameraControls from './cameraControl';


const Loading = () => {
  return (
    <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]}>
      <sphereGeometry attach="geometry" args={[10, 16, 16]} />
      <meshStandardMaterial
        attach="material"
        color="black"
        transparent
        opacity={0.1}
        roughness={0}
        metalness={50}
        wireframe={true}
      />
    </mesh>
  );
}



const Temple = () => {
  const materials = useLoader(MTLLoader, "temple/blueibodi.mtl");
  const obj = useLoader(OBJLoader, "temple/blueibodi.obj", (loader) => {
    materials.preload()
    loader.setMaterials(materials)
  });
  
  // const ref = useRef(obj);
  // useFrame(() => (ref.current.rotation.y += 0.005)); // auto-rotate set on camera instead 
  console.log(obj);
                                                    // +- [x,y,z]
  return <primitive object={obj} scale={1} position={[0, -10, 0]}/>;
};


// const Homer = () => {
//   const materials = useLoader(MTLLoader, "ex/homer_0.mtl");
//   const obj = useLoader(OBJLoader, "ex/homer_0.obj", (loader) => {
//     materials.preload()
//     loader.setMaterials(materials)
//   });

//   console.log(obj);
//                                                       // +- [x,y,z]
//   return <primitive object={obj} scale={1} position={[0,0,0]}/>;
// }


const App = () => {
  return (
    <div className="flex">
      <div className="cont">
        <Canvas className='can-can' orthographic camera={{ zoom: 18, position: [0, 25, 100] }}>
          
          <ambientLight intensity={0.5} />
          {/* <directionalLight /> */}
          
          <Suspense fallback={<Loading/>}>
            <axesHelper />
            
            <CameraControls />
            
            <spotLight position={[10, 20, 10]} angle={0.15} penumbra={5} />
            <pointLight position={[-10, -10, -10]} />
            
            <Temple />
            {/* <Homer /> */}
            
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

export default App;

// for <Canvas />
// perspective camera={{ zoom: 1, position: [0, 25, 10]

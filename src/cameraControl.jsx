import React, { useRef } from 'react';
import { useFrame, useThree, extend } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


extend({ OrbitControls });
const CameraControls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  const controls = useRef();

  useFrame(() => controls.current.update());

  // setTimeout(() => {
  //   controls.current.reset(); // to reset cam...
  // }, 5000);


  return <orbitControls 
      ref={controls} 
      args={[camera, domElement]} 
      makeDefault
      enableZoom={true}
      enableDamping={true}
      dampingFactor={0.05}
      enablePan={false}
      minZoom={10}
      maxZoom={30}
      maxPolarAngle={Math.PI / 2} // dont show bottom
      autoRotate={true}
      autoRotateSpeed={2.5}
      />;
};
export default CameraControls;






// orbitcontrols>
// POLAR = TOP/BOTTOM
// minPolarAngle={-Math.PI}
// maxPolarAngle={Math.PI}
// AZIMUTH = LEFT/RIGHT (not working if auto-rotating)
// minAzimuthAngle={-Math.PI / 4}
// maxAzimuthAngle={Math.PI / 4}

// zoom for perspective cam only
// maxDistance={20}
// minDistance={10}
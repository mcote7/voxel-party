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
  
  // @ts-ignore
  useFrame(() => controls.current.update());
  // @ts-ignore
  return <orbitControls ref={controls} args={[camera, domElement]} />;
};
export default CameraControls;
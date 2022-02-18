import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";


export function Model({
  children,
  modelPath,
  positionY,
  positionX,
  positionZ,
  ref,
  scale,
  ...props
}) {
  const gltf = useLoader(GLTFLoader, modelPath);
  const sceneRef = useRef();
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    //ashRef.current.rotation.y = time / 25;
    //console.log(sceneRef.current)
    if (sceneRef.current.name === "ball") {
      sceneRef.current.rotation.z = -0.2 - (1 + Math.sin(time / 1.5) / 5);
      sceneRef.current.rotation.x = Math.cos(time / 2) / 2;
      sceneRef.current.rotation.y = Math.sin(time / 4) / 2;
      sceneRef.current.rotation.y = (1 + Math.sin(time / 1.5)) / 2;
      sceneRef.current.position.y = (1 + Math.sin(time / 1.5)) / 1.2;
      sceneRef.current.position.x = (1 + Math.sin(time / 9)) * 0.5;
    } else if (sceneRef.current.name === "ball2") {
      sceneRef.current.rotation.y = time / 35;
      sceneRef.current.rotation.z = -0.2 - (1 + Math.sin(time / 1.5) / 5);
      sceneRef.current.rotation.x = Math.cos(time / 2) / 2;
      sceneRef.current.rotation.y = Math.sin(time / 4) / 2;
      sceneRef.current.rotation.y = (1 + Math.sin(time / 1.5)) / 2;
      sceneRef.current.position.y = (-7 + Math.sin(time / 1.5)) / 1.2;
      sceneRef.current.position.x = (-4 + Math.sin(time / 2)) * 0.5;
    } else if (sceneRef.current.name === "anime") {
      sceneRef.current.rotation.y = time / 35;
    }
  });

  return (
    <group
      position={[positionX, positionY, positionZ]}
      scale={scale}
      ref={sceneRef}
      {...props}
    >
      <ambientLight intensity={0.1} />
      <directionalLight position={[0, -1, 0]} />
      <spotLight intensity={0.2} position={[0, -1, 0]} />
      <mesh>
        <primitive object={gltf.scene} dispose={null} />
      </mesh>
    </group>
  );
}

import { Mesh } from 'three';
import { cubeTweaks } from '../../conroles';
import { useControls } from 'leva';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const Cube = () => {
  // References
  const cubeRef = useRef<Mesh>(null);
  // Controls
  const cubeControles = useControls(cubeTweaks);

  useFrame((_, delta) => {
    if (cubeRef.current) {
      cubeRef.current.rotation.y += delta;
    }
  });
  return (
    <mesh
      position={[
        cubeControles.position.x,
        cubeControles.position.y,
        cubeControles.position.z,
      ]}
      ref={cubeRef}
    >
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial color={cubeControles.color} />
    </mesh>
  );
};

export default Cube;

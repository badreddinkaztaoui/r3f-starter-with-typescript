import { Mesh } from 'three';
import { sphereTweaks } from '../../conroles';
import { useControls } from 'leva';
import { useRef } from 'react';

const Sphere = () => {
  // Reference
  const sphereRef = useRef<Mesh>(null);
  // Controls
  const sphereControles = useControls(sphereTweaks);

  return (
    <mesh
      ref={sphereRef}
      position={[
        sphereControles.position.x,
        sphereControles.position.y,
        sphereControles.position.z,
      ]}
    >
      <sphereGeometry args={[1, 32, 64]} />
      <meshStandardMaterial color={sphereControles.color} />
    </mesh>
  );
};

export default Sphere;

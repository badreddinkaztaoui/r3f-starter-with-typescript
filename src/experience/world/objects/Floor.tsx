import { MeshReflectorMaterial } from '@react-three/drei';
import { floorTweaks } from '../../conroles';
import { useControls } from 'leva';

const Floor = () => {
  const { mirror, color } = useControls(floorTweaks);

  return (
    <mesh rotation-x={-Math.PI * 0.5} position-y={-1}>
      <planeGeometry args={[10, 10]} />
      <MeshReflectorMaterial
        mirror={mirror}
        blur={[300, 100]}
        resolution={2048}
        mixBlur={1}
        mixStrength={50}
        roughness={1}
        depthScale={1.2}
        minDepthThreshold={0.4}
        maxDepthThreshold={1.4}
        color={color}
        metalness={0.8}
      />
    </mesh>
  );
};

export default Floor;

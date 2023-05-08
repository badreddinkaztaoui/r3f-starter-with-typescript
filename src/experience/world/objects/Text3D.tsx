import { Float, Text } from '@react-three/drei';

import { DoubleSide } from 'three';

const Text3D = () => {
  return (
    <Float speed={3} floatIntensity={3} frustumCulled>
      <Text
        position={[0, 2.5, 0]}
        maxWidth={4}
        fontSize={0.5}
        textAlign="center"
        font="/fonts/bangers-v21-latin-regular.woff"
      >
        <meshNormalMaterial side={DoubleSide} />
        Welcome to BK3, the threejs with react starter.
      </Text>
    </Float>
  );
};

export default Text3D;

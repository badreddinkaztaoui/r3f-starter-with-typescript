import { Canvas } from '@react-three/fiber';
import { FC } from 'react';
import { Perf } from 'r3f-perf';
import World from './world/World';

const Experience: FC = () => {
  return (
    <Canvas
      gl={{ antialias: true }}
      camera={{
        far: 1000,
        fov: 55,
        near: 0.1,
        position: [-5, 2, 10],
      }}
    >
      <Perf minimal={true} position="top-left" />
      <World />
    </Canvas>
  );
};

export default Experience;

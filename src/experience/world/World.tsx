import { FC, Fragment } from 'react';

import Cube from './objects/Cube';
import Environement from './Environement';
import Floor from './objects/Floor';
import { OrbitControls } from '@react-three/drei';
import Sphere from './objects/Sphere';

const World: FC = () => {
  return (
    <Fragment>
      <color attach="background" args={['#111']} />
      <Environement />
      <OrbitControls makeDefault />
      <Cube />
      <Sphere />
      <Floor />
    </Fragment>
  );
};

export default World;

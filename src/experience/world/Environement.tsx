import { Fragment } from 'react';

const Environement = () => {
  return (
    <Fragment>
      <ambientLight intensity={0.5} color={0xffffff} />
      <directionalLight intensity={0.5} color={0xffffff} position={[1, 2, 3]} />
    </Fragment>
  );
};

export default Environement;

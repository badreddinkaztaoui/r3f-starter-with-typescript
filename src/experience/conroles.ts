import { folder } from 'leva';

export const cubeTweaks = {
  cube: folder({
    position: {
      value: { x: 2, y: 0, z: 0 },
      step: 0.01,
    },
    pivot: true,
    color: 'mediumpurple',
  }),
};

export const sphereTweaks = {
  sphere: folder({
    position: {
      value: { x: -2, y: 0, z: 0 },
      step: 0.01,
    },
    color: 'orange',
  }),
};

export const floorTweaks = {
  floor: folder({
    mirror: {
      value: 0.5,
      step: 0.001,
      min: 0,
      max: 1,
    },
    color: '#202020',
  }),
};

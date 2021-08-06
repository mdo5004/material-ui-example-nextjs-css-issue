import PropTypes from 'prop-types';
import { createSlice } from '@reduxjs/toolkit';

// just deciding at the start what kind of device we're targeting.
// this will never be perfect, but should cover most of our purposes.
// const isSmall = window && typeof window !== 'undefined' && window.matchMedia('(max-device-width: 700px)').matches;
// const isTouch = window && typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;

// let device;
// if (isSmall && isTouch) {
//   device = 'mobile';
// } else if (isTouch) {
//   device = 'tablet';
// } else {
//   device = 'desktop';
// }

export const initialState = '';

export const targetedDevicePropType = PropTypes.oneOf([
  'mobile',
  'tablet',
  'desktop',
  '',
]);

const targetedDeviceSlice = createSlice({
  name: 'targetedDevice',
  initialState,
  reducers: {
    setTargetedDevice(state, action) {
      return action.payload;
    },
    clearTargetedDevice() {
      return initialState;
    },
  },
});

export const { setTargetedDevice, clearTargetedDevice } = targetedDeviceSlice.actions;
export default targetedDeviceSlice.reducer;

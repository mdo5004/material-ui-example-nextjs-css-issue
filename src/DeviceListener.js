import React from 'react';
import { useStore } from './store';
import { setTargetedDevice } from './targetedDeviceSlice';

const DeviceListener = () => {
  const store = useStore();
  React.useEffect(() => {
    function determineTargetedDevice() {
      // when testing, the window resizes
      // in order to capture a snapshot (for visual testing).
      // let's prevent that from happening here.
      const is_iPhone = Boolean(navigator.userAgent.match(/iPhone/));
      const is_iPad = Boolean(navigator.userAgent.match(/iPad/));

      const isTouch = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse) and (hover: none)').matches;

      let device;
      if (is_iPhone || (isTouch && typeof window !== 'undefined' && window.matchMedia('(max-width: 730px)').matches)) {
        device = 'mobile';
      } else if (is_iPad || (isTouch && typeof window !== 'undefined' && window.matchMedia('(max-width: 1025px)'))) {
        device = (window.orientation && window.orientation > 0) ? 'desktop' : 'tablet';
      } else {
        device = 'desktop';
      }
      console.log(`setting targeted device: ${device}`);
      store.dispatch(setTargetedDevice(device));
    }
    window.addEventListener('resize', determineTargetedDevice, { passive: true });

    determineTargetedDevice();

    return () => window.removeEventListener('resize', determineTargetedDevice);
  }, [store]);

  return null;
};

export default DeviceListener;

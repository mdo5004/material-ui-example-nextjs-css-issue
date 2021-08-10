import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    border: '2px solid black',
    padding: 10,
    '&$desktop': {
      backgroundColor: 'blue',
      color: 'white',
    },
    '&$tablet': {
      backgroundColor: 'green',
      color: 'orange',
    },
    '&$mobile': {
      backgroundColor: 'red',
      color: 'black',
    },
  },
  desktop: {},
  tablet: {},
  mobile: {},
});
const backgrounds = {
  desktop: 'blue',
  tablet: 'green',
  mobile: 'red',
};

function useTargetedDevice() {
  const [targetedDevice, setTargetedDevice] = React.useState('');
  React.useEffect(() => {
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
    setTargetedDevice(device);
  }, []);
  return targetedDevice;
}

function UnconnectedDeviceSpecificCodeWithEffect(props) {
  const { className } = props;
  const classes = useStyles();
  const targetedDevice = useTargetedDevice();

  return <div className={clsx(classes.root, className, classes[targetedDevice])}>
    <h1>I depend on a client-side prop but</h1>
    <h2>I use the useTargetedDevice hook to re-hydrate myself</h2>
    <p suppressHydrationWarning={true}>
      My background should be {backgrounds[targetedDevice]}
    </p>
    <p>
      Unlike my brother, my color is correct every time, even on refresh.
    </p>
    <Typography variant={targetedDevice === 'desktop' ? 'caption' : 'button'}>
      But this doesn't work for my children:<br />
      The formatting of this text depends on the same prop (targetedDevice). It <i>should</i> be all {targetedDevice === 'desktop' ? 'lowercase' : 'uppercase'} on {targetedDevice}.<br />
      But it doesn't seem to detect a change in props from before to after hydrating...
    </Typography>
  </div>;
}

UnconnectedDeviceSpecificCodeWithEffect.defaultProps = {
  className: '',
};

UnconnectedDeviceSpecificCodeWithEffect.propTypes = {
  className: PropTypes.string,
  targetedDevice: PropTypes.string,
};
export default UnconnectedDeviceSpecificCodeWithEffect;

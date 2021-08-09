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
function UnconnectedDeviceSpecificCode(props) {
  const { className, targetedDevice } = props;
  const classes = useStyles();

  return <div className={clsx(classes.root, className, classes[targetedDevice])}>
    <h1>I depend on a client-side prop</h1>
    <p suppressHydrationWarning={true}>
      My background should be {backgrounds[targetedDevice]}
    </p>
    <p>
      But I'm not {backgrounds[targetedDevice]} all the time... only if you navigate to me using a <code>next/link</code> link.
    </p>
    <p>
      If you navigate right to me or hit refresh, I show the wrong background color.
    </p>
    <p>
      That's because I depend on the "targetedDevice" prop, which is undefined on the server.
    </p>
    <p>If you hot-reload, I show the right color.</p>
    <Typography variant={targetedDevice === 'desktop' ? 'caption' : 'button'}>
      But this doesn't work for my children:<br />
      The formatting of this text depends on the same prop (targetedDevice). It <i>should</i> be all {targetedDevice === 'desktop' ? 'lowercase' : 'uppercase'} on {targetedDevice}.
    </Typography>
  </div>;
}

UnconnectedDeviceSpecificCode.defaultProps = {
  className: '',
};

UnconnectedDeviceSpecificCode.propTypes = {
  className: PropTypes.string,
  targetedDevice: PropTypes.string,
};
const ConnectedDeviceSpecificCode = connect(({ targetedDevice }) => ({ targetedDevice }))(UnconnectedDeviceSpecificCode);
export default ConnectedDeviceSpecificCode;

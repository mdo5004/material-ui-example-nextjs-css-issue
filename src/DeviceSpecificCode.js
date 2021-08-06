import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

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
function UnconnectedResponsiveDeviceSpecificCode(props) {
  const { className, targetedDevice } = props;
  const classes = useStyles();
  return <div suppressHydrationWarning={true} className={clsx(classes.root, className, classes[targetedDevice])}>
    <h1>Using redux property "targetedDevice":</h1>
    <p suppressHydrationWarning={true}>store.targetedDevice = {targetedDevice}</p>
    <p suppressHydrationWarning={true}>
      My background should be {backgrounds[targetedDevice]}
    </p>
    <p>
      But it's not right all the time... only if you navigate to me using a <code>next/link</code> link.
    </p>
    <p>
      If you hit refresh, I show the wrong background color.
    </p>
  </div>;
}

UnconnectedResponsiveDeviceSpecificCode.defaultProps = {
  className: '',
};

UnconnectedResponsiveDeviceSpecificCode.propTypes = {
  className: PropTypes.string,
  targetedDevice: PropTypes.string,
};
const ConnectedResponsiveDeviceSpecificCode = connect(({ targetedDevice }) => ({ targetedDevice }))(UnconnectedResponsiveDeviceSpecificCode);
export default ConnectedResponsiveDeviceSpecificCode;

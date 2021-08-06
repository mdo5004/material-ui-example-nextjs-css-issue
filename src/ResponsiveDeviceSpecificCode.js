import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

const useStyles = makeStyles({
  root: {
    border: '2px solid black',
    padding: 10,
    '@media only screen and (pointer: fine)': {
      backgroundColor: 'blue',
      color: 'white',
    },
    '@media only screen and (pointer: coarse) and (max-width: 1100px)': {
      backgroundColor: 'green',
      color: 'orange',
    },
    '@media only screen and (pointer: coarse) and (max-width: 500px)': {
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
  return <div className={clsx(classes.root, className, classes[targetedDevice])}>
    <h1>Using CSS media queries:</h1>
    <p suppressHydrationWarning={true}>store.targetedDevice = {targetedDevice}</p>
    <p>
      My background should be {backgrounds[targetedDevice]}
    </p>
    <p>
      I seem to work all the time.
    </p>
    <p>
      If you hit refresh, I show the RIGHT background color.
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

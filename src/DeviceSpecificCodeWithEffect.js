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
function UnconnectedDeviceSpecificCodeWithEffect(props) {
  const { className, targetedDevice } = props;
  const ssr_classes = useStyles();
  const [loaded, setLoaded] = React.useState(false);
  React.useEffect(() => {
    setLoaded(true);
  }, []);
  const classes = loaded ? ssr_classes : {};

  return <div className={clsx(classes.root, className, classes[targetedDevice])}>
    <h1>Depends on a client-side prop but</h1>
    <h2>also includes an effect hook</h2>
    <p suppressHydrationWarning={true}>
      My background should be {loaded ? backgrounds[targetedDevice] : ''}
    </p>
    <p>
      Unlike my brother, my color is correct every time, even on refresh.
    </p>
    <Typography variant={targetedDevice === 'desktop' ? 'caption' : 'button'}>
      The formatting of this text depends on the same prop, and is inconsistent. It <i>should</i> be all {targetedDevice === 'desktop' ? 'lowercase' : 'uppercase'}.
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
const ConnectedDeviceSpecificCodeWithEffect = connect(({ targetedDevice }) => ({ targetedDevice }))(UnconnectedDeviceSpecificCodeWithEffect);
export default ConnectedDeviceSpecificCodeWithEffect;

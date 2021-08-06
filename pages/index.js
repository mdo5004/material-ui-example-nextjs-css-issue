import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import ResponsiveDeviceSpecificCode from '../src/DeviceSpecificCodeWithEffect';
import DeviceSpecificCode from '../src/DeviceSpecificCode';
import dynamic from 'next/dynamic';

// const DeviceSpecificCode = dynamic(() => import('../src/DeviceSpecificCode'), { ssr: false, loading: () => <div></div> });

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js example
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <DeviceSpecificCode />
        <ResponsiveDeviceSpecificCode />
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}

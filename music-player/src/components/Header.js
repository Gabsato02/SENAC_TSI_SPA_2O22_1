import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { HeadsetTwoTone } from '@mui/icons-material';

const Header = () => {
  return (
    <AppBar position="fixed" color="success">
      <Toolbar>
        <HeadsetTwoTone fontSize="large" />
        <Typography variant="h6" component="h1" style={{ marginLeft: '8px' }}>
          Sputify
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

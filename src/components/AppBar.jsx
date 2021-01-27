import React from 'react';
import PropTypes from 'prop-types';
import {
  Icon, Typography, Toolbar, AppBar as MuiAppBar, Box,
} from '@material-ui/core';

const AppBar = (props) => (
  <Box mb={4}>
    <MuiAppBar position="relative">
      <Toolbar>
        {props.canGoBack && <Icon className="fa fa-arrow-left" />}
        <Typography variant="h6" color="inherit" noWrap>
          Personajes
        </Typography>
      </Toolbar>
    </MuiAppBar>
  </Box>
);

AppBar.propTypes = {

};

export default AppBar;

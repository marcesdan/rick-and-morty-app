import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from 'layout/theme';
import AppBar from 'components/AppBar';

export default function withRoot(Component) {
  function WithRoot() {
    return (
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <AppBar />
        <Component />
      </ThemeProvider>
    );
  }

  return WithRoot;
}

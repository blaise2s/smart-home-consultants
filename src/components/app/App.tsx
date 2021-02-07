import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider
} from '@material-ui/core';

import Landing from '../landing/Landing';

const _theme = createMuiTheme({
  // palette: {
  // primary: {
  //   main: teal['A200']
  // },
  // secondary: {
  //   main: blueGrey[300]
  // },
  // warning: {
  //   main: deepOrange[700]
  // },
  // background: {
  //   default: grey[50]
  // }
  // }
});
const responsiveTheme = responsiveFontSizes(_theme);

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={responsiveTheme}>
        <Route path="/" component={Landing} />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;

import React from 'react';
import { Home } from './pages';
import { ThemeProvider } from 'styled-components';

import theme from '../src/assets/styles/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <Home />
  </ThemeProvider>
);

export default App;

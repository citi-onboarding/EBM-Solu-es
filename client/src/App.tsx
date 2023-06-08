import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';


import { Service } from '../../client/src/pages/service';
import { Home } from '../../client/src/pages/home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home/>
      <Service/>
    </ThemeProvider>
  );
}

export default App;

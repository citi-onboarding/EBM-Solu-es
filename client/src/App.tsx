import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';


import { Service } from '../../client/src/pages/service';
import { Home } from '../../client/src/pages/home';
import { FooterScreen } from '../../client/src/pages/footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home/>
      <Service/>
      <FooterScreen/>
    </ThemeProvider>
  );
}

export default App;

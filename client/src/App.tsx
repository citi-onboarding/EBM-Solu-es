import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';

import { Nav } from './pages';
import { SobreNos } from './pages';
import { NossosClientes } from './pages/';

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <Nav/> */}
      <SobreNos/>
      <NossosClientes/>
    </ThemeProvider>
  );
}

export default App;

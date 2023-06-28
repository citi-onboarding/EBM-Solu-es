import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';

import { Carrossel, Nav } from './pages';
import { SobreNos } from './pages';
import { NossosClientes } from './pages/';

import { Service } from '../../client/src/pages/service';
import { Home } from '../../client/src/pages/home';
import { FooterScreen } from '../../client/src/pages/footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from '../../client/src/components/carrosel';
function App() {
  return (
    <ThemeProvider theme={theme}>
        <Nav />
        <Home />
        <SobreNos />
        <Service />
        <Carrossel />
        <NossosClientes />
        <FooterScreen />
        <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;

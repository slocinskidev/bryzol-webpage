import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import GlobalStyle from '../styles/globalStyle';
import { theme } from '../styles/mainTheme';
import Footer from '../components/Footer/Footer';
import DesktopHeader from '../components/DesktopHeader/DesktopHeader';
import Background from '../components/Background/Background';

const DesktopContentStyled = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  grid-template-rows: auto auto;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.shadow.box};
`;

const DesktopWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 40px auto 40px;

  grid-row-gap: 20px;
`;

const MenuLayout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <DesktopWrapper>
        <DesktopHeader />
        <DesktopContentStyled>
          <Background />
          {children}
        </DesktopContentStyled>
        <Footer />
      </DesktopWrapper>
    </>
  </ThemeProvider>
);

MenuLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MenuLayout;

import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import GlobalStyle from '../styles/globalStyle';
import { theme } from '../styles/mainTheme';
import Footer from '../components/Footer/Footer';
import DesktopHeader from '../components/DesktopHeader/DesktopHeader';
import Background from '../components/HeaderImage/HeaderImage';

const StyledContentWrapper = styled.main`
  width: 100%;
  height: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.shadow.box};
`;

const StyledWrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-row-gap: 20px;
`;

const StyledPaddingWrapper = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  height: 100%;
  width: 100%;
`;

const DesktopLayout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <StyledWrapper>
        <DesktopHeader />
        <StyledPaddingWrapper>
          <StyledContentWrapper>
            <Background />
            {children}
          </StyledContentWrapper>
        </StyledPaddingWrapper>
        <Footer />
      </StyledWrapper>
    </>
  </ThemeProvider>
);

DesktopLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DesktopLayout;

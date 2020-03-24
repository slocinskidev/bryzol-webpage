import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import GlobalStyle from '../styles/globalStyle';
import { theme } from '../styles/mainTheme';
import Footer from '../components/Footer/Footer';

const StyledWrapper = styled.div`
  width: 100%;
  width: 100%;
  min-height: 100vh;
  padding: 0;
  display: grid;
  align-content: space-between;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.shadow.box};
  grid-template-rows: 1fr auto;
`;

const MainPageMobileLayout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <StyledWrapper>
        {children}
        <Footer />
      </StyledWrapper>
    </>
  </ThemeProvider>
);

MainPageMobileLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainPageMobileLayout;

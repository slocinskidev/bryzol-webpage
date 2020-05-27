import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';
import GlobalStyle from '../styles/globalStyle';
import { theme } from '../styles/mainTheme';
import Footer from '../components/Footer/Footer';
import DesktopHeader from '../components/DesktopHeader/DesktopHeader';
import Background from '../components/HeaderImage/HeaderImage';

const StyledDesktopWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-row-gap: 20px;
`;

const StyledDesktopContentWrapper = styled.main`
  width: 100%;
  height: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.shadow.box};
`;

const StyledPaddingWrapper = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  height: 100%;
  width: 100%;
`;

const StyledMobileWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.color.white};
`;

const StyledMobileContentWrapper = styled.main`
  height: 100%;
  width: 100%;
  padding: 0 20px;
`;

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 991 });
  return isMobile ? children : null;
};

const DesktopLayout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Desktop>
        <StyledDesktopWrapper>
          <DesktopHeader />
          <StyledPaddingWrapper>
            <StyledDesktopContentWrapper>
              <Background />
              {children}
            </StyledDesktopContentWrapper>
          </StyledPaddingWrapper>
          <Footer />
        </StyledDesktopWrapper>
      </Desktop>
      <Mobile>
        <StyledMobileWrapper>
          <StyledMobileContentWrapper>{children}</StyledMobileContentWrapper>
          <Footer />
        </StyledMobileWrapper>
      </Mobile>
    </>
  </ThemeProvider>
);

DesktopLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DesktopLayout;

import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import GlobalStyle from '../styles/globalStyle';
import { theme } from '../styles/mainTheme';
import Footer from '../components/Footer/Footer';
import DesktopHeader from '../components/DesktopHeader/DesktopHeader';
import Background from '../components/Background/Background';


const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 991 });
  return isMobile ? children : null;
};

const MobileWrapperStyled = styled.div`
  width: 100%;
  max-width: 1440px;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.shadow.box};
`;

const DesktopContentStyled = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 100%;
  margin: 60px auto 20px;
  display: grid;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.shadow.box};
`;

const DesktopWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MenuLayout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />

      <Mobile>
        <MobileWrapperStyled>
          {children}
          <Footer />
        </MobileWrapperStyled>
      </Mobile>

      <Desktop>
        <DesktopWrapper>
          <DesktopHeader />
          <DesktopContentStyled>
            <Background />
            {children}
          </DesktopContentStyled>
          <Footer />
        </DesktopWrapper>
      </Desktop>
    </>
  </ThemeProvider>
);

MenuLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MenuLayout;

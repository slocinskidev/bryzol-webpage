import React from 'react';
import { useMediaQuery } from 'react-responsive';
import MainPageMobileLayout from '../layouts/MainPageMobileLayout';
import DesktopLayout from '../layouts/DesktopLayout';
import HeaderText from '../components/HeaderText/HeaderText';
import Navigation from '../components/Navigation/Navigation';
import FacebookButton from '../components/FacebookButton/FacebookButton';

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 991 });
  return isMobile ? children : null;
};

const IndexPage = () => (
  <>
    <Mobile>
      <MainPageMobileLayout>
        <HeaderText />
        <FacebookButton />
        <Navigation />
      </MainPageMobileLayout>
    </Mobile>
    <Desktop>
      <DesktopLayout>
        <HeaderText />
        <Navigation />
        <FacebookButton />
      </DesktopLayout>
    </Desktop>
  </>
);

export default IndexPage;

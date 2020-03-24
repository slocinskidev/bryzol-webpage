import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import MobileHeader from '../MobileHeader/MobileHeader';

import { theme } from '../../styles/mainTheme';

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 991 });
  return isMobile ? children : null;
};

const StyledTitle = styled.h2`
  font-family: ${({ theme }) => theme.font.secondary};
  font-weight: 400;
  font-size: ${({ theme }) => theme.font.h2};
  color: ${({ theme }) => theme.color.secondary};
  margin: 0;

  @media (max-width: 991px) {
    color: ${({ theme }) => theme.color.white};
  }
`;

const StyledSubtitle = styled.p`
  text-align: center;
  padding: 10px;
  margin: 0;
  line-height: 1.5;
  font-size: ${({ theme }) => theme.font.normal};
  max-width: 650px;
`;

const StyledWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 20px;

  @media (max-width: 991px) {
    background-color: ${({ theme }) => theme.color.secondary};
    color: ${({ theme }) => theme.color.white};
  }
`;

const HeaderText = () => (
  <StyledWrapper>
    <Mobile>
      <MobileHeader />
    </Mobile>
    <StyledTitle>Mania Gotowania</StyledTitle>
    <StyledSubtitle>
      Bryzol Catering to firma oferująca usługi cateringu zarówno słonego, jak i słodkiego. Wszelkie
      oferty tworzone są pod potrzeby Klienta. Firmę stworzyli dwaj pasjonaci. Jeden lubuje się w
      gotowaniu i tworzeniu nowoczesnych w formie dań ze znanych nam klasyków. Drugi za to wymyśla
      grzechu warte desery i torty.
    </StyledSubtitle>
  </StyledWrapper>
);

export default HeaderText;

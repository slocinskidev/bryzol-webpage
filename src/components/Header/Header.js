import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/mainTheme';
import logo from '../../images/logo.png';

const HeaderTitleStyled = styled.h2`
  font-family: 'Dancing Script', cursive;
  font-weight: 400;
  font-size: ${({ theme }) => theme.font.h2};
  color: #fff;
  margin: 0;
`;

const HeaderSubtitleStyled = styled.p`
  text-align: center;
  padding: 10px;
  margin: 0;
  line-height: 1.5;
  font-size: ${({ theme }) => theme.font.normal};
`;

const HeaderWrapperStyled = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: #52542c;
  color: ${({ theme }) => theme.color.white};
  margin: 0;
`;

const HeaderLogoStyled = styled.img`
  padding: 10px 0 5px;
  width: 150px;
  height: 150px;
`;

const Header = () => (
  <HeaderWrapperStyled>
    <HeaderLogoStyled src={logo} alt="Bryzol Catering Logo" />
    <HeaderTitleStyled>Mania Gotowania</HeaderTitleStyled>
    <HeaderSubtitleStyled>
      Bryzol Catering to firma oferująca usługi cateringu zarówno słonego, jak i słodkiego. Wszelkie
      oferty tworzone są pod potrzeby Klienta. Firmę stworzyli dwaj pasjonaci. Jeden lubuje się w
      gotowaniu i tworzeniu nowoczesnych w formie dań ze znanych nam klasyków. Drugi za to wymyśla
      grzechu warte desery i torty.
    </HeaderSubtitleStyled>
  </HeaderWrapperStyled>
);

export default Header;

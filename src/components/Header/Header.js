import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/mainTheme';
import logo from '../../images/logo.png';

const HeaderTitleStyled = styled.h2`
  font-family: 'Dancing Script', cursive;
  font-weight: 400;
  font-size: ${({ theme }) => theme.font.h2};
  color: #fff;
`;

const HeaderSubtitleStyled = styled.p`
  text-align: center;
  padding: 10px;
  line-height: 1.5;
  font-size: ${({ theme }) => theme.font.normal};
`;

const HeaderWrapperStyled = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 50vh;
  background: #52542c;
  color: ${({ theme }) => theme.color.white};
`;

const HeaderLogoStyled = styled.img`
  margin: 20px 0 10px;
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

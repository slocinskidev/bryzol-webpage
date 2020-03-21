import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { theme } from '../../styles/mainTheme';

const NavigationWrapper = styled.nav`
  width: 100%;
  height: 100%;
  margin: 0;
  padding-bottom: 20px;
`;

const NavigationList = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
`;

const NavigationListItem = styled.li`
  width: 100%;
  margin: 0;
`;

const LinkStyled = styled(Link)`
  background-color: ${({ theme }) => theme.color.primary};
  padding: 10px 0;
  margin: 10px auto;
  max-width: 350px;
  width: 80%;
  display: block;
  text-align: center;
  font-size: 1.6rem;
  text-decoration: none;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.white};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadow.box};

  @media (min-width: 992px) {
    width: 20%;
    margin: 5px auto;
  }
`;

const Navigation = () => (
  <NavigationWrapper>
    <NavigationList>
      <NavigationListItem>
        <LinkStyled to="/o-nas">O Nas</LinkStyled>
      </NavigationListItem>
      <NavigationListItem>
        <LinkStyled to="/oferta">Oferta</LinkStyled>
      </NavigationListItem>
      <NavigationListItem>
        <LinkStyled to="/galeria">Galeria</LinkStyled>
      </NavigationListItem>
      <NavigationListItem>
        <LinkStyled to="/kontakt">Kontakt</LinkStyled>
      </NavigationListItem>
    </NavigationList>
  </NavigationWrapper>
);

export default Navigation;

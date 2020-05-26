import React, { useState, useEffect } from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import posed from 'react-pose';
import styled from 'styled-components';
import { theme } from '../../styles/mainTheme';

const NavigationWrapper = styled.nav`
  width: 100%;
  height: 100%;
  margin: 0;
  padding-bottom: 10px;
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

const LinkStyled = styled(AniLink)`
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
  transition: all 0.3s ease;
  outline: none;

  &:hover,
  &:active,
  &:hover svg,
  &:active svg {
    background-color: ${({ theme }) => theme.color.secondary};
  }
`;

const Navigation = () => {
  return (
    <NavigationWrapper>
      <NavigationList>
        <NavigationListItem>
          <LinkStyled fade to="/o-nas">
            O Nas
          </LinkStyled>
        </NavigationListItem>
        <NavigationListItem>
          <LinkStyled fade to="/oferta">
            Oferta
          </LinkStyled>
        </NavigationListItem>
        <NavigationListItem>
          <LinkStyled fade to="/galeria">
            Galeria
          </LinkStyled>
        </NavigationListItem>
        <NavigationListItem>
          <LinkStyled fade to="/kontakt">
            Kontakt
          </LinkStyled>
        </NavigationListItem>
      </NavigationList>
    </NavigationWrapper>
  );
};

export default Navigation;

import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { theme } from '../../styles/mainTheme';

const MenuWrapperStyled = styled.nav`
  width: 100%;
  height: 100%;
`;

const MenuListStyled = styled.ul`
  width: 100%;
`;

const MenuItemStyled = styled.li`
  width: 100%;
`;

const LinkStyled = styled(Link)`
  background-color: ${({ theme }) => theme.color.primary};
  padding: 14px 20px;
  margin: 20px auto;
  width: 80%;
  display: block;
  text-align: center;
  font-size: 1.6rem;
  text-decoration: none;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.white};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadow.box};
`;

const Menu = () => (
  <MenuListStyled>
    <MenuItemStyled>
      <LinkStyled to="/about">O Nas</LinkStyled>
      <LinkStyled to="/offer">Oferta</LinkStyled>
      <LinkStyled to="/gallery">Galeria</LinkStyled>
      <LinkStyled to="/contact">Kontakt</LinkStyled>
    </MenuItemStyled>
  </MenuListStyled>
);

export default Menu;
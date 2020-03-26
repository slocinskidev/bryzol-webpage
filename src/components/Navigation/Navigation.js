import React, { useState, useEffect } from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import posed from 'react-pose';
import styled from 'styled-components';
import { theme } from '../../styles/mainTheme';

// Pose
const PosedNavigationList = posed.ul({
  visible: {
    delayChildren: 50,
    staggerChildren: 100,
  },
});

const PosedNavigationListItem = posed.li({
  visible: { y: 0, opacity: 1 },
  hidden: { y: '-50%', opacity: 0 },
});

const NavigationWrapper = styled.nav`
  width: 100%;
  height: 100%;
  margin: 0;
  padding-bottom: 10px;
`;

const NavigationList = styled(PosedNavigationList)`
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
`;

const NavigationListItem = styled(PosedNavigationListItem)`
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
`;

const Navigation = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(!visible);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);
  return (
    <NavigationWrapper>
      <NavigationList pose={visible ? 'visible' : 'hidden'}>
        <NavigationListItem>
          <LinkStyled to="/o-nas" paintDrip hex="#52542C">
            O Nas
          </LinkStyled>
        </NavigationListItem>
        <NavigationListItem>
          <LinkStyled to="/oferta" paintDrip hex="#52542C">
            Oferta
          </LinkStyled>
        </NavigationListItem>
        <NavigationListItem>
          <LinkStyled to="/galeria" paintDrip hex="#52542C">
            Galeria
          </LinkStyled>
        </NavigationListItem>
        <NavigationListItem>
          <LinkStyled to="/kontakt" paintDrip hex="#52542C">
            Kontakt
          </LinkStyled>
        </NavigationListItem>
      </NavigationList>
    </NavigationWrapper>
  );
};

export default Navigation;

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import { useMediaQuery } from 'react-responsive';
import { graphql, useStaticQuery } from 'gatsby';

import { theme } from '../../styles/mainTheme';

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 991 });
  return isMobile ? children : null;
};

const PosedWrapper = posed.div({
  visible: {
    x: 0,
    opacity: 1,
  },
  hidden: {
    x: '-150%',
    opacity: 0,
  },
});

const PosedTitle = posed.h2({
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
});

const StyledTitle = styled(PosedTitle)`
  font-family: ${({ theme }) => theme.font.secondary};
  font-weight: 400;
  font-size: ${({ theme }) => theme.font.h2};
  color: ${({ theme }) => theme.color.secondary};
  margin: 0;

  @media (max-width: 991px) {
    color: ${({ theme }) => theme.color.white};
  }
`;

const PosedSubtitle = posed.p({
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
});

const StyledSubtitle = styled(PosedSubtitle)`
  text-align: center;
  padding: 10px;
  margin: 0;
  line-height: 1.5;
  font-size: ${({ theme }) => theme.font.normal};
  max-width: 650px;
`;

const StyledWrapper = styled(PosedWrapper)`
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

const PosedLogoWrapper = posed.div({
  visible: {
    y: 0,
    opacity: 1,
  },
  hidden: {
    y: '50%',
    opacity: 1,
  },
});

const StyledLogoWrapper = styled(PosedLogoWrapper)`
  width: 150px;
  height: 150px;
  background-image: url(${({ image }) => image});
`;

const HeaderText = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(!visible);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "logo" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            src
          }
        }
      }
    }
  `);

  return (
    <StyledWrapper>
      <Mobile>
        <a href="/">
          <StyledLogoWrapper
            image={data.file.childImageSharp.fixed.src}
            pose={visible ? 'visible' : 'hidden'}
          />
        </a>
      </Mobile>
      <StyledTitle pose={visible ? 'visible' : 'hidden'}>Mania Gotowania</StyledTitle>
      <StyledSubtitle pose={visible ? 'visible' : 'hidden'}>
        Bryzol Catering to firma oferująca usługi cateringu zarówno słonego, jak i słodkiego.
        Wszelkie oferty tworzone są pod potrzeby Klienta. Firmę stworzyli dwaj pasjonaci. Jeden
        lubuje się w gotowaniu i tworzeniu nowoczesnych w formie dań ze znanych nam klasyków. Drugi
        za to wymyśla grzechu warte desery i torty.
      </StyledSubtitle>
    </StyledWrapper>
  );
};

export default HeaderText;

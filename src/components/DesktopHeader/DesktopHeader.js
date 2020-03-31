import React, { useState, useEffect } from 'react';
import posed from 'react-pose';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import { theme } from '../../styles/mainTheme';

const PosedRibbon = posed.div({
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
});

const Ribbon = styled(PosedRibbon)`
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 160px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.secondary};
  position: absolute;
  z-index: 1;

  &:before {
    content: '';
    position: absolute;
    z-index: 2;
    left: 0;
    bottom: -80px;
    border-left: 80px solid ${({ theme }) => theme.color.secondary};
    border-right: 80px solid ${({ theme }) => theme.color.secondary};
    border-bottom: 80px solid transparent;
  }
`;

const TopLine = styled.div`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.color.secondary};
  height: 40px;
`;

const Logo = styled.div`
  width: 150px;
  height: 150px;
  background-image: url(${({ image }) => image});
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const DesktopHeader = () => {
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

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(!visible);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <TopLine />
      <Ribbon pose={visible ? 'visible' : 'hidden'}>
        <a href="/">
          <Logo image={data.file.childImageSharp.fixed.src} />
        </a>
      </Ribbon>
    </>
  );
};

export default DesktopHeader;

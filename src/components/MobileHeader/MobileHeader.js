import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import { theme } from '../../styles/mainTheme';

const LogoWrapper = styled.div`
  width: 150px;
  height: 150px;
  background-image: url(${({ image }) => image});
`;

const MobileHeader = () => {
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
    <a href="/">
      <LogoWrapper image={data.file.childImageSharp.fixed.src} />
    </a>
  );
};

export default MobileHeader;

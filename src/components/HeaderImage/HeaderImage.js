import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';

const StyledImage = styled(Image)`
  min-height: 250px;
  height: 35vh;
  width: 100%;
  object-fit: cover;
  object-position: bottom;

  @media (min-height: 1081px) {
    height: 50vh;
  }
`;

const HeaderImage = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "header-bg" }) {
        childImageSharp {
          fluid(maxWidth: 1440, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <StyledImage fluid={data.file.childImageSharp.fluid} alt="Bryzol Catering Logo" />;
};

export default HeaderImage;

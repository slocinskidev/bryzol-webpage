import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';

const StyledImage = styled(Image)`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: bottom;
`;

const Background = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "header-bg" }) {
        childImageSharp {
          fluid(maxWidth: 1440, quality: 100, maxHeight: 400) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);

  return <StyledImage fluid={data.file.childImageSharp.fluid} alt="Bryzol Catering Logo" />;
};

export default Background;

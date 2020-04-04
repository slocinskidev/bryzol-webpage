import React, { useState } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';
import PhotoItem from './PhotoItem';
import LightBox from './Lightbox';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  column-count: 1;
  column-gap: 5px;

  @media (min-width: 769px) {
    column-count: 2;
  }

  @media (min-width: 1024px) {
    column-count: 3;
  }
  @media (min-width: 1408px) {
    column-count: 4;
  }
`;

const Gallery = () => {
  const [showLightbox, setShowLightbox] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpen = i => e => {
    setShowLightbox(true);
    setSelectedImage(i);
  };
  const handleClose = () => {
    setShowLightbox(false);
    setSelectedImage(null);
  };
  const handlePrevRequest = (i, length) => e => {
    setSelectedImage((i - 1 + length) % length);
  };
  const handleNextRequest = (i, length) => e => {
    setSelectedImage((i + 1) % length);
  };
  return (
    <StaticQuery
      query={graphql`
        {
          source: allFile(filter: { absolutePath: { regex: "/gallery/" } }) {
            edges {
              node {
                id
                name
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                    presentationWidth
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        const images = data.source.edges;
        return (
          <Wrapper>
            <PhotoItem images={images} handleOpen={handleOpen} />
            {showLightbox && selectedImage !== null && (
              <LightBox
                images={images}
                handleClose={handleClose}
                handleNextRequest={handleNextRequest}
                handlePrevRequest={handlePrevRequest}
                selectedImage={selectedImage}
              />
            )}
          </Wrapper>
        );
      }}
    />
  );
};
export default Gallery;

import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import styled from 'styled-components';

const ItemButton = styled.button`
  background: none;
  border: none;
  margin: 0;
  padding: 0;
  display: inline-block;
  width: 100%;

  & div {
    transition: all 0.3s ease;
  }

  & div:hover {
    filter: opacity(75%);
  }
`;

const PhotoItem = ({ images, handleOpen }) => {
  return images.map((image, i) => (
    <ItemButton onClick={handleOpen(i)} key={image.node.id}>
      <Img fluid={image.node.childImageSharp.fluid} alt={image.node.name} />
    </ItemButton>
  ));
};

PhotoItem.propTypes = {
  images: PropTypes.array,
};

export default PhotoItem;

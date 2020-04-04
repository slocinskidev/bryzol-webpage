import React from 'react';
import LightboxReact from 'lightbox-react';
import 'lightbox-react/style.css';
import FullPageImage from './FullPageImage';

const Lightbox = ({ images, selectedImage, handleClose, handlePrevRequest, handleNextRequest }) => {
  const array = [];

  images.forEach(image => array.push(<FullPageImage fluid={image.node.childImageSharp.fluid} />));

  return (
    <LightboxReact
      enableZoom={false}
      clickOutsideToClose
      mainSrc={array[selectedImage]}
      nextSrc={array[(selectedImage + 1) % array.length]}
      prevSrc={array[(selectedImage + array.length - 1) % images.length]}
      onCloseRequest={handleClose}
      onMovePrevRequest={handlePrevRequest(selectedImage, array.length)}
      onMoveNextRequest={handleNextRequest(selectedImage, array.length)}
    />
  );
};

export default Lightbox;

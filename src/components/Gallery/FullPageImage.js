/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Img from 'gatsby-image';

const FullPageImage = props => {
  let normalizedProps = props;
  if (props.fluid && props.fluid.presentationWidth) {
    normalizedProps = {
      ...props,
      style: {
        ...(props.style || {}),
        maxWidth: props.fluid.presentationWidth,
        height: window.innerHeight - 100,
        width: 'auto',
        margin: '50px auto 50px',
      },
    };
  }
  return <Img {...normalizedProps} />;
};

export default FullPageImage;

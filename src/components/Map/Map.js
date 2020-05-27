/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
`;

const Map = () => (
  <Wrapper>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.1965992769897!2d18.694234151849585!3d50.045148324264666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47114d1361eb0fd7%3A0xf93655c3943a6e80!2sBryzol%20Catering!5e0!3m2!1sen!2spl!4v1590583491722!5m2!1sen!2spl"
      width="100%"
      height="400px"
      frameBorder="0"
      allowFullScreen=""
      aria-hidden="false"
    />
  </Wrapper>
);

export default Map;

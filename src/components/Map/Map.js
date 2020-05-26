/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
`;

const Map = () => (
    <Wrapper>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d160.1372438597277!2d18.696342634641216!3d50.045161391571284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47114cd2c9e4955b%3A0x8fb7c70fa42d727!2sBramkowa%203%2C%2044-240%20%C5%BBory!5e0!3m2!1sen!2spl!4v1585562245525!5m2!1sen!2spl"
        width="100%"
        height="400px"
        frameBorder="0"
        allowFullScreen=""
        aria-hidden="false"
      />
    </Wrapper>
  );

export default Map;

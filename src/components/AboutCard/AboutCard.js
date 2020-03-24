/* eslint-disable react/prop-types */
import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Chevron from '../Chevron/Chevron';

import { theme } from '../../styles/mainTheme';

const StyledWrapper = styled.section`
  margin: 10px;
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  box-shadow: ${({ theme }) => theme.shadow.box};
`;

const ChevronStyled = styled(Chevron)`
  position: absolute;
  top: 10px;
  right: 10px;
  transform: rotate(90deg);
  transition: transform 0.6s ease;

  &.rotate {
    transform: rotate(270deg);
  }
`;

const StyledCardHeader = styled.div`
  cursor: pointer;
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.color.primary};

  &.active {
    background-color: ${({ theme }) => theme.color.secondary};
  }

  h2 {
    font-weight: 500;
    margin: 0 0 10px 10px;
    color: ${({ theme }) => theme.color.white};
  }
`;

const StyledAvatarWrapper = styled.img`
  margin: 10px 0 10px 10px;
  width: 100px;
  height: 100px;
  background-image: url(${({ avatar }) => avatar});
  border: 2px solid white;
  background-size: cover;
`;

const StyledCardContact = styled.div`
  display: grid;
`;

const AccordionContent = styled.div`
  padding: 0 10px;
  width: 100%;
  background-color: white;
  overflow: hidden;
  transition: max-height 0.6s ease;
`;

const AccordionText = styled.p`
  font-size: 1.6rem;
`;

const AboutCard = ({ name, content, avatar }) => {
  const [setActive, setActiveState] = useState('');
  const [setHeight, setHeightState] = useState('0px');
  const [setRotate, setRotateState] = useState('');

  const contentRef = useRef(null);

  const toggleAccordion = () => {
    setActiveState(setActive === '' ? 'active' : '');
    setHeightState(setActive === 'active' ? '0px' : `${contentRef.current.scrollHeight}px`);
    setRotateState(setActive === 'active' ? '' : 'rotate');
  };

  return (
    <StyledWrapper>
      <StyledCardHeader onClick={toggleAccordion} className={setActive}>
        <ChevronStyled className={`${setRotate}`} width={30} height={30} fill="#fff" />
        <StyledAvatarWrapper avatar={avatar} />
        <h2>{name}</h2>
      </StyledCardHeader>
      <StyledCardContact>
        <AccordionContent ref={contentRef} style={{ maxHeight: `${setHeight}` }}>
          <AccordionText>{content}</AccordionText>
        </AccordionContent>
      </StyledCardContact>
    </StyledWrapper>
  );
};

AboutCard.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default AboutCard;

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
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas:
    'avatar more'
    'name name';

  @media (min-width: 501px) {
    grid-template-areas:
      'avatar name'
      'avatar more';
  }

  &.active {
    background-color: ${({ theme }) => theme.color.secondary};
  }
`;

const StyledAvatarWrapper = styled.img`
  margin: 20px 0 10px 20px;
  width: 100px;
  height: 100px;
  background-image: url(${({ avatar }) => avatar});
  border: 2px solid white;
  background-size: cover;
  grid-area: avatar;

  @media (min-width: 501px) {
    margin: 20px 0 20px 20px;
  }
`;

const StyledCardContact = styled.div`
  display: grid;
`;

const AccordionContent = styled.div`
  padding: 0 20px;
  width: 100%;
  background-color: white;
  overflow: hidden;
  transition: max-height 0.6s ease;
`;

const AccordionText = styled.p`
  font-size: ${({ theme }) => theme.font.normal};
  font-weight: 400;
  line-height: 1.5;
  text-align: justify;
  color: ${({ theme }) => theme.color.dark};
`;

const StyledName = styled.h3`
  margin: 0 0 10px 20px;
  font-size: ${({ theme }) => theme.font.h4};
  font-weight: 500;
  color: ${({ theme }) => theme.color.white};
  grid-area: name;
  align-self: end;

  @media (min-width: 501px) {
    font-size: ${({ theme }) => theme.font.h3};
  }
`;

const StyledNameMore = styled.p`
  margin: 0 0 0 20px;
  padding-right: 10px;
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.white};
  grid-area: more;
  align-self: center;

  @media (min-width: 501px) {
    align-self: start;
  }
`;

const Signature = styled.p`
  font-size: ${({ theme }) => theme.font.h3};
  font-family: ${({ theme }) => theme.font.secondary};
  font-weight: 400;
  line-height: 1.5;
  text-align: right;
  color: ${({ theme }) => theme.color.dark};
  padding: 0 20px 10px 0;
`;

const AboutCard = ({ avatar, name, more, content }) => {
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
        <StyledName>{name}</StyledName>
        <StyledNameMore>{more}</StyledNameMore>
      </StyledCardHeader>
      <StyledCardContact>
        <AccordionContent ref={contentRef} style={{ maxHeight: `${setHeight}` }}>
          <AccordionText>{content}</AccordionText>
          <Signature>Podpis</Signature>
        </AccordionContent>
      </StyledCardContact>
    </StyledWrapper>
  );
};

AboutCard.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  more: PropTypes.string,
  avatar: PropTypes.string.isRequired,
};

AboutCard.defaultProps = {
  more: 'Więcej o mnie po kliknięciu',
};

export default AboutCard;

import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Chevron from '../Chevron/Chevron';

import { theme } from '../../styles/mainTheme';

const Wrapper = styled.article`
  margin: 10px;
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  box-shadow: ${({ theme }) => theme.shadow.box};
`;

const StyledChevron = styled(Chevron)`
  position: absolute;
  top: 10px;
  right: 10px;
  transform: rotate(90deg);
  transition: transform 0.6s ease;

  &.rotate {
    transform: rotate(270deg);
  }
`;

const CardHeader = styled.header`
  cursor: pointer;
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.color.primary};
  display: grid;
  grid-template-columns: auto 1fr;
  transition: 0.6s background-color ease;
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

const AvatarImage = styled.div`
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

const CardContent = styled.section`
  display: grid;
  height: 100%;
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

const Name = styled.h3`
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

const Description = styled.p`
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

const AboutCard = ({ avatar, name, more, content, signature }) => {
  const [active, setActive] = useState('');
  const [height, setHeight] = useState('0px');
  const [rotate, setRotate] = useState('');

  const contentRef = useRef(null);

  const toggleAccordion = () => {
    setActive(active === '' ? 'active' : '');
    setHeight(active === 'active' ? '0px' : `${contentRef.current.scrollHeight}px`);
    setRotate(active === 'active' ? '' : 'rotate');
  };

  return (
    <Wrapper>
      <CardHeader onClick={toggleAccordion} className={active}>
        <StyledChevron className={`${rotate}`} width={30} height={30} fill="#fff" />
        <AvatarImage avatar={avatar} />
        <Name>{name}</Name>
        <Description>{more}</Description>
      </CardHeader>
      <CardContent ref={contentRef} style={{ maxHeight: `${height}` }}>
        <AccordionText>{content}</AccordionText>
        <Signature>{signature}</Signature>
      </CardContent>
    </Wrapper>
  );
};

AboutCard.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  more: PropTypes.string,
  avatar: PropTypes.string.isRequired,
  signature: PropTypes.string.isRequired,
};

AboutCard.defaultProps = {
  more: 'Więcej o mnie po kliknięciu',
};

export default AboutCard;

import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Chevron from '../Chevron/Chevron';

import { theme } from '../../styles/mainTheme';

const StyledWrapper = styled.section`
  width: 100%;
  max-width: 960px;
  display: flex;
  flex-direction: column;
  box-shadow: ${({ theme }) => theme.shadow.box};
`;

const ChevronStyled = styled(Chevron)`
  transform: rotate(90deg);
  transition: transform 0.6s ease;

  &.rotate {
    transform: rotate(270deg);
  }
`;

const AccordionHeader = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 15px 10px;
  width: 100%;
  background-color: ${({ theme }) => theme.color.primary};
  transition: 0.6s background-color ease;

  &.active {
    background-color: ${({ theme }) => theme.color.secondary};
  }
`;

const AccordionBody = styled.div`
  padding: 0;
  width: 100%;
  background-color: white;
  list-style: none;
  overflow: hidden;
  transition: all 0.6s ease;
  box-shadow: ${({ theme }) => theme.shadow.box};
`;

const Heading = styled.h3`
  margin: 0;
  font-size: ${({ theme }) => theme.font.h4};
  font-weight: 500;
  color: ${({ theme }) => theme.color.white};
`;

const Accordion = ({ children, title }) => {
  const [active, setActive] = useState(false);

  const contentRef = useRef(null);

  const toggleActive = () => {
    setActive(!active);
  };

  useEffect(() => {
    contentRef.current.style.maxHeight = active ? `${contentRef.current.scrollHeight}px` : '0px';
  }, [contentRef, active]);

  return (
    <StyledWrapper>
      <AccordionHeader onClick={toggleActive} className={active ? 'active' : ''}>
        <Heading>{title}</Heading>
        <ChevronStyled className={active ? 'rotate' : ''} width={25} height={25} fill="#fff" />
      </AccordionHeader>
      <AccordionBody ref={contentRef}>{children}</AccordionBody>
    </StyledWrapper>
  );
};

export default Accordion;

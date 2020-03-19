import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Chevron from '../Chevron/Chevron';

import { theme } from '../../styles/mainTheme';

const AccordionWrapper = styled.section`
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: ${({theme}) => theme.shadow.box};
`;

const ChevronStyled = styled(Chevron)`
  position: absolute;
  top: 10px;
  right: 10px;
  transform: rotate(90deg);
  transition: transform .6s ease;

  &.rotate {
    transform: rotate(270deg);
}
`;

const CardHeader = styled.div`
  position: relative;
  width: 100%;
  background-color: ${({theme}) => theme.color.primary};

  &.active {
    background-color: ${({theme}) => theme.color.secondary};
  }

  h2 {
    font-weight: 500;
    margin: 0 0 10px 10px;
    color: ${({theme}) => theme.color.white};
  }
`;

const Avatar = styled.div`
  margin: 10px 0 10px 10px;
  width: 100px;
  height: 100px;
  background-color: black;
  border: 2px solid white;
`;

const CardContact = styled.div`
  display: grid;
`;

const AccordionContent = styled.div`
  padding: 0 10px;
  width: 100%;
  background-color: white;
  overflow: auto;
  transition: max-height 0.6s ease;
`;

const AccordionText = styled.p`
  font-size: 1.6rem;
`;

const AboutCard = ({name, content, tel, email}) => {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("");
  
  const contentRef = useRef(null);
  
    const toggleAccordion = () => {
      setActiveState(setActive === "" ? "active" : "");
      setHeightState(
        setActive === "active" ? "0px" : `${contentRef.current.scrollHeight}px`
      );
      setRotateState(
        setActive === "active" ? "" : "rotate"
      );
    }


  return(
    <AccordionWrapper>
      <CardHeader onClick={toggleAccordion} className={setActive}>
        <Avatar />
        <ChevronStyled className={`${setRotate}`} width={30} height={30} fill='#fff' />
        <h2>{name}</h2>
      </CardHeader>
      <CardContact>
        <AccordionContent 
          ref={contentRef}
          style={{ maxHeight: `${setHeight}` }}
        >
          <AccordionText>{content}</AccordionText>
          <p>{tel}</p>
          <p>{email}</p>
        </AccordionContent>
      </CardContact>
    </AccordionWrapper>
  );
};

AboutCard.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  tel: PropTypes.number.isRequired,
  email: PropTypes.string,
}

AboutCard.defaultProps = {
  email: 'kontakt@bryzol.pl',
};

export default AboutCard;
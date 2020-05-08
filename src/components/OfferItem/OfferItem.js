import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Chevron from '../Chevron/Chevron';

import { theme } from '../../styles/mainTheme';

const StyledWrapper = styled.section`
  margin: 5px auto;
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

const Header = styled.header`
  cursor: pointer;
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

const OfferList = styled.ul`
  padding: 0;
  margin: 0;
  width: 100%;
  background-color: white;
  list-style: none;
  overflow: hidden;
  transition: max-height 0.6s ease;
`;

const OfferListItem = styled.li`
  position: relative;
  font-size: ${({ theme }) => theme.font.normal};
  margin: 0 10px 5px 15px;
  font-weight: 400;
  line-height: 1.5;
  text-align: justify;
  color: ${({ theme }) => theme.color.dark};

  &::before {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -15px;
    content: '';
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 10px solid ${({ theme }) => theme.color.primary};
  }

  &:last-child {
    margin-bottom: 20px;
  }

  &:nth-child(1) {
    margin-top: 20px;
  }
`;

const Heading = styled.h3`
  margin: 0;
  font-size: ${({ theme }) => theme.font.h4};
  font-weight: 500;
  color: ${({ theme }) => theme.color.white};
`;

const Price = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.primary};
  width: 100px;
  height: 100px;
  margin: 0 auto 20px;
  padding: 0;
  text-align: center;
  font-size: ${({ theme }) => theme.font.h4};
  font-weight: 500;
  border-radius: 50%;
  color: ${({ theme }) => theme.color.white};
`;

const OfferItem = ({ item, content, price }) => {
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
      <Header onClick={toggleActive} className={active ? 'active' : ''}>
        <Heading>{item}</Heading>
        <ChevronStyled className={active ? 'rotate' : ''} width={25} height={25} fill="#fff" />
      </Header>
      <OfferList ref={contentRef}>
        {content.map(item => (
          <OfferListItem key={item}>{item}</OfferListItem>
        ))}
        {price ? <Price>{price}</Price> : null}
      </OfferList>
    </StyledWrapper>
  );
};

OfferItem.propTypes = {
  item: PropTypes.string.isRequired,
  content: PropTypes.array.isRequired,
};

export default OfferItem;

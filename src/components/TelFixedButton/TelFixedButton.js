import React, { useState } from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import telephoneIcon from '@iconify/icons-foundation/telephone';
import MinimalistContactCard from '../MinimalistContactCard/MinimalistContactCard';

import { theme } from '../../styles/mainTheme';

const Telephone = styled.button`
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 50px;
  right: 30px;
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.color.secondary};
  background-color: ${({ theme }) => theme.color.secondary};
  border-radius: 50%;
  border: none;
  transition: color 0.3s ease;
  z-index: 10;
  box-shadow: ${({ theme }) => theme.shadow.box};
  transition: box-shadow 0.3s ease;

  &:hover,
  &:active {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.12), 0px 6px 12px rgba(0, 0, 0, 0.24);
  }
`;

const TelephoneIcon = styled(Icon)`
  color: ${({ theme }) => theme.color.white};
  width: 30px;
  height: 30px;
`;

const Body = styled.div`
  position: fixed;
  bottom: 120px;
  right: 0;
  background-color: ${({ theme }) => theme.color.secondary};
  opacity: 0;
  box-shadow: ${({ theme }) => theme.shadow.box};
  transition: all 0.3s ease;
  visibility: hidden;
  max-width: 400px;
  z-index: 10;

  @media (min-width: 450px) {
    right: 30px;
  }

  &.visible {
    visibility: visible;
    opacity: 1;
  }
`;

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  visibility: hidden;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  transition: all 0.3s ease;
  cursor: pointer;

  &.visible {
    visibility: visible;
    opacity: 1;
  }
`;

const TelFixedButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <>
      <Telephone onClick={toggleVisible}>
        <TelephoneIcon icon={telephoneIcon} />
      </Telephone>

      <Body className={visible ? 'visible' : ''}>
        <MinimalistContactCard name="Andrzej Słociński" tel="605 547 282" email="slone@bryzol.pl" />
        <MinimalistContactCard name="Adam Gembalczyk" tel="502 315 715" email="slodkie@bryzol.pl" />
      </Body>

      <Overlay onClick={toggleVisible} className={visible ? 'visible' : ''} />
    </>
  );
};

export default TelFixedButton;

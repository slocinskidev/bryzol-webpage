import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import posed from 'react-pose';
import facebookFilled from '@iconify/icons-ant-design/facebook-filled';
import styled from 'styled-components';
import { theme } from '../../styles/mainTheme';

const PosedButtonWrapper = posed.div({
  visible: {
    x: 0,
    opacity: 1,
  },
  hidden: {
    x: '-50%',
    opacity: 0,
  },
});

const ButtonWrapper = styled(PosedButtonWrapper)`
  margin: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px 0;

  @media (min-width: 992px) {
    padding: 0 20px 10px 0;
    justify-content: flex-end;
  }
`;

const IconStyled = styled(Icon)`
  color: ${({ theme }) => theme.color.primary};
  width: 35px;
  height: 35px;
`;

const FacebookLink = styled.a`
  font-family: ${({ theme }) => theme.font.secondary};
  color: ${({ theme }) => theme.color.primary};
  font-size: 2.4rem;
  margin: 0;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  outline: none;

  & svg {
    transition: all 0.3s ease;
  }

  &:hover,
  &:active,
  &:hover svg,
  &:active svg {
    color: ${({ theme }) => theme.color.secondary};
  }
`;

const FacebookButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(!visible);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ButtonWrapper pose={visible ? 'visible' : 'hidden'}>
      <FacebookLink href="https://www.facebook.com/bryzolcatering/">
        Sprawdź nas na
        <IconStyled icon={facebookFilled} />
      </FacebookLink>
    </ButtonWrapper>
  );
};

export default FacebookButton;

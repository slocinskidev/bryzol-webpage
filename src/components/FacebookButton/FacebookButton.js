import React from 'react';
import { Icon } from '@iconify/react';
import facebookFilled from '@iconify/icons-ant-design/facebook-filled';
import styled from 'styled-components';
import { theme } from '../../styles/mainTheme';

const WrapperStyled = styled.div`
  margin: 0;
  padding: 10px 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const IconStyled = styled(Icon)`
  color: ${({ theme }) => theme.color.primary};
  width: 40px;
  height: 40px;
`;

const FacebookLink = styled.a`
  font-family: ${({theme}) => theme.font.secondary};
  color: ${({theme}) => theme.color.primary};
  font-size: 2rem;
  margin: 0;
  text-decoration: none;
  display: flex;
  align-items: center;
`;

const FacebookButton = () => (
  <WrapperStyled>
      <FacebookLink href="https://www.facebook.com/bryzolcatering/">
        Sprawdź nas na
        <IconStyled icon={facebookFilled} />
      </FacebookLink>
  </WrapperStyled>
);

export default FacebookButton;
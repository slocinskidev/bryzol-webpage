import React from 'react';
import { Icon } from '@iconify/react';
import facebookFilled from '@iconify/icons-ant-design/facebook-filled';
import styled from 'styled-components';
import { theme } from '../../styles/mainTheme';

const WrapperStyled = styled.div``;

const IconStyled = styled(Icon)`
  color: ${({ theme }) => theme.color.primary};
  width: 40px;
  height: 40px;
`;

const TextStyled = styled.p``;

const FacebookButton = () => (
  <WrapperStyled>
    <TextStyled>
      <a href="https://www.facebook.com/bryzolcatering/">
        Sprawdź nas na
        <IconStyled icon={facebookFilled} />
      </a>
    </TextStyled>
  </WrapperStyled>
);

export default FacebookButton;
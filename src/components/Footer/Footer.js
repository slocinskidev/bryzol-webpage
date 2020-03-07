import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/mainTheme';

const StyledFooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.secondary};
  height: 6vh;
  width: 100%;
`;

const StyledCopyrightText = styled.p`
  color: ${({ theme }) => theme.color.white};
  font-size: 12px;
`;

const Footer = () => (
  <StyledFooterWrapper>
    <StyledCopyrightText>© 2020 Bryzol Catering</StyledCopyrightText>
  </StyledFooterWrapper>
);

export default Footer;
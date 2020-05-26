import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/mainTheme';

const FooterWrapper = styled.footer`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.secondary};
  height: 40px;
  width: 100%;
`;

const CopyrightText = styled.p`
  color: ${({ theme }) => theme.color.white};
  font-size: 12px;
`;

const Footer = () => (
  <FooterWrapper>
    <CopyrightText>{`© ${new Date().getFullYear()} Bryzol Catering`}</CopyrightText>
  </FooterWrapper>
);

export default Footer;

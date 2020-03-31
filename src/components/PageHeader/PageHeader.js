import React from 'react';
import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import bxArrowBack from '@iconify/icons-bx/bx-arrow-back';
import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';

import { theme } from '../../styles/mainTheme';

const HeaderWrapper = styled.header`
  display: flex;
  width: 100%;
  min-height: 10vh;
  justify-content: space-between;
  align-items: center;

  a {
    outline: none;
  }
`;

const IconStyled = styled(Icon)`
  color: ${({ theme }) => theme.color.primary};
  width: 50px;
  height: 50px;
  transition: color 0.3s ease;

  &:hover,
  &:active,
  &:hover svg,
  &:active svg {
    color: ${({ theme }) => theme.color.secondary};
  }
`;

const TextWrapper = styled.div`
  text-align: right;
`;

const HeaderTitle = styled.h2`
  font-size: ${({ theme }) => theme.font.h2};
  color: ${({ theme }) => theme.color.secondary};
  font-weight: 500;
  margin: 0;
  padding: 0;
  text-transform: uppercase;
`;

const HeaderSubtitle = styled.span`
  margin: 0;
  padding: 0;
  font-size: 12px;
  color: ${({ theme }) => theme.color.secondary};

  @media (min-width: 992px) {
    font-size: 14px;
  }
`;

const PageHeader = ({ title, subtitle }) => (
  <HeaderWrapper>
    <AniLink to="/" paintDrip hex="#52542C" duration={0.5}>
      <IconStyled icon={bxArrowBack} />
    </AniLink>
    <TextWrapper>
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderSubtitle>{subtitle}</HeaderSubtitle>
    </TextWrapper>
  </HeaderWrapper>
);

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

PageHeader.defaultProps = {
  subtitle: '',
};

export default PageHeader;

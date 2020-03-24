import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
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
`;

const IconStyled = styled(Icon)`
  color: ${({ theme }) => theme.color.secondary};
  width: 50px;
  height: 50px;
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
`;

const PageHeader = ({ title }) => (
  <HeaderWrapper>
    <Link to="/">
      <IconStyled icon={bxArrowBack} />
    </Link>
    <TextWrapper>
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderSubtitle>Kliknij by wyświetlić szczegóły</HeaderSubtitle>
    </TextWrapper>
  </HeaderWrapper>
);

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageHeader;

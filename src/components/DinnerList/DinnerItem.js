import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import soupIcon from '@iconify/icons-whh/soup';
import mealIcon from '@iconify/icons-ls/meal';

import { theme } from '../../styles/mainTheme';

const Wrapper = styled.article`
  width: 100%;
  max-width: 500px;
  margin: 0 auto 20px;
  display: flex;
  flex-direction: column;
  box-shadow: ${({ theme }) => theme.shadow.box};
`;

const Header = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.color.primary};
  padding: 15px 10px;
`;

const Content = styled.section`
  padding: 0 20px;
  width: 100%;
  background-color: white;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
`;

const StyledIcon = styled(Icon)`
  color: ${({ theme }) => theme.color.dark};
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

const Soup = styled.p`
  font-size: ${({ theme }) => theme.font.normal};
  font-weight: 400;
  line-height: 1.2;
  text-align: justify;
  color: ${({ theme }) => theme.color.dark};
`;

const Meal = styled.p`
  font-size: ${({ theme }) => theme.font.normal};
  font-weight: 400;
  line-height: 1.2;
  text-align: justify;
  color: ${({ theme }) => theme.color.dark};
`;

const Title = styled.h3`
  font-size: ${({ theme }) => theme.font.h4};
  font-weight: 500;
  color: ${({ theme }) => theme.color.white};
  grid-area: name;
  align-self: end;
  margin: 0;

  @media (min-width: 501px) {
    font-size: ${({ theme }) => theme.font.h3};
  }
`;

const DinnerItem = ({ day, soup, meal }) => {
  return (
    <Wrapper>
      <Header>
        <Title>{day}</Title>
      </Header>
      <Content>
        <StyledIcon icon={soupIcon} />
        <Soup>{soup}</Soup>
        <StyledIcon icon={mealIcon} />
        <Meal>{meal}</Meal>
      </Content>
    </Wrapper>
  );
};

export default DinnerItem;

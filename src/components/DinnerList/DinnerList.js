import React from 'react';
import styled from 'styled-components';
import DinnerItem from './DinnerItem';

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
`;

const DinnerList = () => {
  return (
    <Wrapper>
      <DinnerItem
        day="Poniedziałek"
        soup="Kalafiorowa"
        meal="Kotlet schabowy, pieczone ziemniaki 
i surówka z ogórków kiszonych z frytkami"
      />
      <DinnerItem day="Poniedziałek" soup="Kalafiorowa" meal="Łosoś z frytkami" />
      <DinnerItem day="Poniedziałek" soup="Kalafiorowa" meal="Łosoś z frytkami" />
    </Wrapper>
  );
};

export default DinnerList;

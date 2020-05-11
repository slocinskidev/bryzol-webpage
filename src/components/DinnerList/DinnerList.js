import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import DinnerItem from './DinnerItem';

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
`;

const DinnerList = () => {
  const data = useStaticQuery(graphql`
    {
      datoCmsDinner {
        weekDays {
          date(locale: "pl", formatString: "dddd, DD MMMM YYYY")
          soup
          meal
        }
      }
    }
  `);
  return (
    <Wrapper>
      {data.datoCmsDinner.weekDays.map(item => (
        <DinnerItem key={item.date} day={item.date} soup={item.soup} meal={item.meal} />
      ))}
    </Wrapper>
  );
};

export default DinnerList;

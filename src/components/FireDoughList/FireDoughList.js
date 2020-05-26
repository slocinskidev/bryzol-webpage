import React from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import mealIcon from '@iconify/icons-ls/meal';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

import { theme } from '../../styles/mainTheme';

const Header = styled(Image)`
  height: 100%;
  width: 100%;
  margin: 0 auto;
`;

const Wrapper = styled.article`
  width: 100%;
  height: 100%;
  margin: 0 auto 20px;
  display: flex;
  flex-direction: column;
  background-color: black;
  box-shadow: ${({ theme }) => theme.shadow.box};
`;

const StyledIcon = styled(Icon)`
  color: ${({ theme }) => theme.color.dark};
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

const DoughList = styled.ul`
  list-style: none;
  color: ${({ theme }) => theme.color.white};
`;

const Item = styled.li``;

const Number = styled.p``;
const Price = styled.p``;
const Products = styled.p``;

const fireDough = [
  {
    number: 1,
    price: 19,
    products: 'sos czosnkowy, boczek, cebula, ser',
  },
  {
    number: 2,
    price: 21,
    products: 'sos czosnkowy, kurczak, brokuł, papryka, ser',
  },
  {
    number: 3,
    price: 19,
    products: 'sos czosnkowy, cebula, brokuł, papryka,  ser',
    vege: false,
  },
];

const FireDoughList = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "firedoughlogo" }) {
        childImageSharp {
          fixed(width: 320) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <Wrapper>
      <Header fixed={data.file.childImageSharp.fixed} alt="Ciasto Ogniowe" />
      <DoughList>
        {fireDough.map(item => (
          <Item>
            <Number>{item.number}</Number>
            <Price>{item.price}</Price>
            <Products>{item.products}</Products>
            {item.vege && <StyledIcon icon={mealIcon} />}
          </Item>
        ))}
      </DoughList>
    </Wrapper>
  );
};

export default FireDoughList;

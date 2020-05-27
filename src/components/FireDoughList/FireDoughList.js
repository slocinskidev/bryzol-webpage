import React from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import leafIcon from '@iconify/icons-mdi/leaf';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

import { theme } from '../../styles/mainTheme';

const Header = styled(Image)`
  height: 100%;
  width: 100%;
  margin: 20px auto 0;
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

const VegeIcon = styled(Icon)`
  color: ${({ theme }) => theme.color.dark};
  width: 25px;
  height: 25px;
  margin: 0 0 10px 5px;
  color: green;
`;

const DoughList = styled.ul`
  list-style: none;
  color: ${({ theme }) => theme.color.white};
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-items: center;
  font-size: 2rem;
  width: 100%;
  margin: 20px 0 40px;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  margin: 20px 0 0;
  font-weight: 700;
`;

const Number = styled.p`
  margin: 0 10px 0 0;
  color: #999;
  font-weight: 700;
`;

const Price = styled.p`
  margin: 0;

  &::after {
    content: 'PLN';
    font-size: 2rem;
  }
`;

const Products = styled.p`
  width: 80%;
  text-align: center;
  margin: 0 auto;

  @media (min-width: 992px) {
    width: 60%;
  }
`;

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
    products: 'sos czosnkowy, cebula, papryka, brokuł, ser',
    vege: true,
  },
  {
    number: 4,
    price: 25,
    products: 'sos czosnkowy, łosoś, krewetki, tuńczyk, cebula, ser',
    vege: false,
  },
  {
    number: 5,
    price: 22,
    products: 'sos czosnkowy, cebula, szynka surowa, ser grano padano, rukolla',
    vege: false,
  },
  {
    number: 6,
    price: 20,
    products: 'sos czosnkowy, rokpol, grano padano, mozarella, rukolla',
    vege: true,
  },
];

const FireDoughList = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "firedoughlogo" }) {
        childImageSharp {
          fixed(width: 280) {
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
            <Top>
              <Number>{item.number}.</Number>
              <Price>{item.price},00</Price>
              {item.vege && <VegeIcon icon={leafIcon} />}
            </Top>
            <Products>{item.products}</Products>
          </Item>
        ))}
      </DoughList>
    </Wrapper>
  );
};

export default FireDoughList;

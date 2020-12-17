/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import styled from 'styled-components';
import Layout from '../../layouts/Layout';
import PageHeader from '../../components/PageHeader/PageHeader';
import SEO from '../../components/Seo/Seo';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;

  @media (min-width: 992px) {
    padding: 20px 20px 100px;
  }
`;

const ContentWrapper = styled.main`
  margin: 0 auto;
  /* padding: 0 2rem; */
  width: 100%;
  height: 100%;
  display: grid;
  max-width: 960px;
`;

const StyledPageHeaderWrapper = styled.div`
  padding: 20px 0 40px;
`;

const Heading = styled.h3`
  color: ${({ theme }) => theme.color.dark};
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.font.bold};
  letter-spacing: -1px;
  font-size: ${({ theme }) => theme.font.h3};
  width: 100%;
  text-align: center;
  margin: 0;
  padding: 0;
`;

const MoreHeading = styled.h4`
  color: ${({ theme }) => theme.color.dark};
  letter-spacing: -1px;
  font-size: ${({ theme }) => theme.font.h4};
  width: 100%;
  text-align: center;
  margin: 0;
  padding: 0;
`;

const List = styled.ul`
  color: ${({ theme }) => theme.color.grey1};
  list-style: none;
  border-bottom: 2px solid rgba(0, 0, 0, 0.04);
  padding: 0 0 3rem;
  margin: 0 0 4rem;
`;

const MoreList = styled.ul`
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 1rem 0;
  padding: 0;

  @media (min-wdith: 561px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const MoreItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 1rem 0;
  padding: 0;
`;

const Food = styled.p`
  margin: 0;
  padding: 0;
  font-weight: 500;
`;

const Price = styled.p`
  margin: 0;
  padding: 0;
`;

const Description = styled.p`
  margin: 0;
  padding: 0;
  font-size: 12px;
`;

const FireDoughPage = ({ location }) => {
  return (
    <Layout>
      <Wrapper>
        <SEO title="Oferta świąteczna" pathname={location.pathname} />
        <StyledPageHeaderWrapper>
          <PageHeader nested title="Oferta świąteczna" subtitle="Zadzwoń i zamów!" />
        </StyledPageHeaderWrapper>
        <ContentWrapper>
          <Heading>Zupy</Heading>
          <List>
            <Item>
              <Food>Zupa grzybowa z majerankiem i łazankami</Food>
              <Price>200ml / 5,00zł</Price>
            </Item>
            <Item>
              <Food>Krem z borowików z grzankami</Food>
              <Price>200ml / 6,00zł</Price>
            </Item>
            <Item>
              <Food>Barszcz wigilijny z suszonymi grzybami</Food>
              <Price>200ml / 4,00zł</Price>
            </Item>
            <Item>
              <Food>Krem cebulowy z nutą tymianku i grzankami</Food>
              <Price>200ml / 4,00zł</Price>
            </Item>

            <Item>
              <Food>Krem cebulowy z nutą tymianku i grzankami</Food>
              <Price>200ml / 4,00zł</Price>
            </Item>
            <MoreList>
              <MoreHeading>Dodatki do zup: </MoreHeading>
              <MoreItem>
                <Food>Uszka z grzybami</Food>
                <Price>1szt / 0,70zł</Price>
              </MoreItem>
              <MoreItem>
                <Food>Pierogi:</Food>
                <Price>1szt / 2,50zł</Price>
                <Description>
                  kapusta i grzyby / ruskie / z mięsem / ze szpinakiem i serem
                </Description>
              </MoreItem>
              <MoreItem>
                <Food>Krokiety</Food>
                <Price>1szt / 6,00zł</Price>
                <Description>kapusta i grzyby / z mięsem</Description>
              </MoreItem>
            </MoreList>
          </List>

          <Heading>Ryby</Heading>
          <List>
            <Item>
              <Food>Karp tusza smażona</Food>
              <Price>1szt (200g) / 22,00zł</Price>
            </Item>
            <Item>
              <Food>Filet z łososia z sosem grzybowym</Food>
              <Price>1szt (180g) / 25,00zł</Price>
            </Item>
            <Item>
              <Food>Filet ze szczupaka z masłem ziołowym</Food>
              <Price>1szt (150g) / 24,00zł</Price>
            </Item>
            <Item>
              <Food>Roladka z karpia z łososiem w sosie cytrynowym</Food>
              <Price>1szt (150g) / 21,00zł</Price>
            </Item>
          </List>

          <Heading>Dodatki</Heading>
          <List>
            <Item>
              <Food>Risotto z borowikami</Food>
              <Price>200g / 8,00zł</Price>
            </Item>
            <Item>
              <Food>Ziemniaki faszerowane warzywami i pieczarkami</Food>
              <Price>1szt / 5,00zł</Price>
            </Item>
            <Item>
              <Food>Ziemniaki puree z makiem</Food>
              <Price>250g / 5,00zł</Price>
            </Item>
            <Item>
              <Food>Ziemniaki gratin z grzybami</Food>
              <Price>1szt (70g) / 5,00zł</Price>
            </Item>
            <Item>
              <Food>Kapusta zasmażana z grzybami</Food>
              <Price>200g / 6,00zł</Price>
            </Item>
            <Item>
              <Food>Kapusta z grochem i olejem lnianym</Food>
              <Price>200g / 6,00zł</Price>
            </Item>
          </List>

          <Heading>Słodkości</Heading>
          <List>
            <Item>
              <Food>Moczka</Food>
              <Price>1L / 35,00zł</Price>
            </Item>
            <Item>
              <Food>Makówki</Food>
              <Price>1kg / 25,00zł</Price>
            </Item>
            <Item>
              <Food>Ciasteczka maślane mix</Food>
              <Price>1kg / 45,00zł</Price>
            </Item>
            <Item>
              <Food>Sernik (w tortownicy)</Food>
              <Price>1szt / 80,00zł</Price>
            </Item>
            <Item>
              <Food>Szarlotka z maślaną kruszonką</Food>
              <Price>1kg / 35,00zł</Price>
            </Item>
            <Item>
              <Food>Brownie</Food>
              <Price>1porcja / 4,50zł</Price>
            </Item>
          </List>

          <Heading>Dania na zimno</Heading>
          <List>
            <MoreList>
              <MoreHeading>Półmiski: </MoreHeading>
              <MoreItem>
                <Food>Roladka z karpia, szczypiorek, losoś z musem chrzanowym (3-4 os.)</Food>
                <Price>1szt / 50,00zł</Price>
              </MoreItem>
              <MoreItem>
                <Food>Pstrąg w galarecie z musem łososiowym</Food>
                <Price>1szt / 40,00zł</Price>
              </MoreItem>
            </MoreList>
            <Item>
              <Food>Karp w galarecie z jajkiem przepiórczym</Food>
              <Price>1szt (100g) / 10,00zł</Price>
            </Item>
            <Item>
              <Food>Śledź w winie z buraczkami na sałatce z pora</Food>
              <Price>1szt (100g) / 9,00zł</Price>
            </Item>
            <Item>
              <Food>Śledź w oleju z szalotką i suszonym pomidorem</Food>
              <Price>1szt (100g) / 9,00zł</Price>
            </Item>
            <Item>
              <Food>Hekele</Food>
              <Price>1kg / 25,00zł</Price>
              <Description>śledź, ogórek kiszony, jajko, cebula, musztarda</Description>
            </Item>
            <Item>
              <Food>Sałatka jarzynowa</Food>
              <Price>1kg / 30,00zł</Price>
              <Description>ziemniaki, warzywa korzenna / ogórek / jajko / majonez</Description>
            </Item>
            <Item>
              <Food>Sałatka chłopska</Food>
              <Price>1kg / 32,00zł</Price>
              <Description>ziemniaki, jajko, fasola czerwona, cenula, kuruydza, bekon</Description>
            </Item>
          </List>
        </ContentWrapper>
      </Wrapper>
    </Layout>
  );
};

export default FireDoughPage;

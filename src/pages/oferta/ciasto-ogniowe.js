/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { Icon } from '@iconify/react';
import deliveryTruck from '@iconify/icons-carbon/delivery-truck';
import telephoneIcon from '@iconify/icons-foundation/telephone';
import Layout from '../../layouts/Layout';
import FireDoughList from '../../components/FireDoughList/FireDoughList';
import PageHeader from '../../components/PageHeader/PageHeader';
import AddressSection from '../../components/AddressSection/AddressSection';

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
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: auto;

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const StyledPageHeaderWrapper = styled.div`
  padding: 20px 0 40px;
`;

const StyledInfoWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 0 0 60px;
  width: 100%;
  height: 100%;

  @media (min-width: 992px) {
    order: -1;
    margin: 0;
    padding: 0 40px 60px;
  }
`;

const TelephoneHeading = styled.h3`
  color: ${({ theme }) => theme.color.dark};
  font-size: 3rem;
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
  margin: 60px 0 0;
`;

const Telephone = styled.a`
  font-size: 3rem;
  color: ${({ theme }) => theme.color.secondary};
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: color 0.3s ease;
  font-weight: 700;

  & svg {
    transition: color 0.3s ease;
  }

  &:hover,
  &:active,
  &:hover svg,
  &:active svg {
    color: ${({ theme }) => theme.color.primary};
  }
`;

const TelephoneIcon = styled(Icon)`
  color: ${({ theme }) => theme.color.secondary};
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

const DeliveryMore = styled.p`
  color: ${({ theme }) => theme.color.dark};
  text-align: center;
  font-weight: 700;
  font-size: 2rem;
  margin: 20px 0 10px;
`;

const MoreInfo = styled.p`
  color: ${({ theme }) => theme.color.dark};
  text-align: center;
  font-weight: 700;
  font-size: 2rem;
  margin: ${marginTop => (marginTop ? '60px 0 20px' : '20px 0')};
`;

const Heading = styled.h2`
  color: ${({ theme }) => theme.color.dark};
  text-align: center;
  font-weight: 700;
  font-size: 2.4rem;
  margin: 60px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
`;

const OpenHeading = styled.h2`
  color: ${({ theme }) => theme.color.dark};
  text-align: center;
  font-weight: 700;
  font-size: 2.4rem;
  margin: 60px 0 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  display: grid;

  & > strong {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.color.secondary};
  }

  @media (min-width: 992px) {
    margin: 0;
  }
`;

const DeliveryWrapper = styled.section`
  width: 100%;
`;

const DeliveryInfo = styled.ul`
  color: ${({ theme }) => theme.color.dark};
  font-size: 2rem;
  font-weight: 500;
  list-style: none;

  li {
    text-align: center;
    margin: 10px 0 10px;
    padding: 0;
  }
`;

const StyledIcon = styled(Icon)`
  color: ${({ theme }) => theme.color.dark};
  width: 40px;
  height: 40px;
  margin: 0 10px 10px;
`;

const FireDoughPage = ({ data }) => {
  return (
    <Layout>
      <Wrapper>
        <StyledPageHeaderWrapper>
          <PageHeader nested title="Ciasto ogniowe" subtitle="Zadzwoń i zamów!" />
        </StyledPageHeaderWrapper>
        <ContentWrapper>
          <FireDoughList />
          <StyledInfoWrapper>
            <OpenHeading>
              Otwarte codziennie
              <strong>14:00 - 20:00</strong>
            </OpenHeading>
            <TelephoneHeading>Zadzwoń i zamów!</TelephoneHeading>
            <Telephone href="tel:502315715">
              <TelephoneIcon icon={telephoneIcon} />
              533 363 155
            </Telephone>

            <DeliveryWrapper>
              <Heading>
                Dowóz
                <StyledIcon icon={deliveryTruck} />
              </Heading>
              <DeliveryMore>Na terenie Żor</DeliveryMore>
              <DeliveryInfo>
                <li>
                  Zamówienie do 30zł - <strong>3zł</strong>
                </li>
                <li>
                  Zamówienie powyżej 30zł - <strong>gratis</strong>
                </li>
              </DeliveryInfo>

              <DeliveryMore>Poza terenem Żor</DeliveryMore>
              <DeliveryInfo>
                <li>
                  Zamówienie do 100zł - <strong>1zł za każdy kilometr</strong>
                </li>
                <li>
                  Zamówienie powyżej 100zł - <strong>gratis</strong>
                </li>
              </DeliveryInfo>
            </DeliveryWrapper>

            <Heading>Zamówienie można również odebrać pod adresem:</Heading>
            <AddressSection />

            <MoreInfo marginTop>
              Wszystkie ciasta wykonywane są po zamówieniu przez klienta, a ich wielkość to 30cm.
            </MoreInfo>
          </StyledInfoWrapper>
        </ContentWrapper>
      </Wrapper>
    </Layout>
  );
};

export const query = graphql`
  {
    allDatoCmsDinner {
      nodes {
        weekDays {
          date(formatString: "DD.MM.YYYY")
        }
      }
    }
  }
`;
export default FireDoughPage;

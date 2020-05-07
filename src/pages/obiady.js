/* eslint-disable react/jsx-boolean-value */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import { Icon } from '@iconify/react';
import telephoneIcon from '@iconify/icons-foundation/telephone';
import outlineEmail from '@iconify/icons-ic/outline-email';
import Layout from '../layouts/Layout';
import DinnerList from '../components/DinnerList/DinnerList';
import PageHeader from '../components/PageHeader/PageHeader';
import AddressSection from '../components/AddressSection/AddressSection';

const PosedAboutCardWrapper = posed.ul({
  visible: {
    delay: 500,
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
});

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 992px) {
    padding: 20px 20px 100px;
  }
`;

const ContentWrapper = styled.main`
  display: grid;
  grid-template-columns: auto;

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const PosedPageHeaderWrapper = posed.div({
  visible: {
    x: 0,
    opacity: 1,
  },
  hidden: {
    x: '-150%',
    opacity: 0,
  },
});

const StyledPageHeaderWrapper = styled(PosedPageHeaderWrapper)`
  padding: 20px 0 40px;
`;

const StyledInfoWrapper = styled(PosedAboutCardWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto 60px;
  width: 100%;
  height: 100%;

  @media (min-width: 992px) {
    margin: 0;
  }
`;

const StyledHeading = styled.h3`
  color: ${({ theme }) => theme.color.dark};
  text-align: center;
  font-weight: 500;
`;

const Telephone = styled.a`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.color.primary};
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: color 0.3s ease;
  font-weight: 500;

  & svg {
    transition: color 0.3s ease;
  }

  &:hover,
  &:active,
  &:hover svg,
  &:active svg {
    color: ${({ theme }) => theme.color.secondary};
  }
`;

const TelephoneIcon = styled(Icon)`
  color: ${({ theme }) => theme.color.primary};
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

const Email = styled.a`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.color.primary};
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: color 0.3s ease;
  font-weight: 500;

  & svg {
    transition: color 0.3s ease;
  }

  &:hover,
  &:active,
  &:hover svg,
  &:active svg {
    color: ${({ theme }) => theme.color.secondary};
  }
`;

const EmailIcon = styled(Icon)`
  color: ${({ theme }) => theme.color.primary};
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

const DinnerPage = dinners => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(!visible);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      <StyledWrapper>
        <StyledPageHeaderWrapper pose={visible ? 'visible' : 'hidden'}>
          <PageHeader title="Obiady" subtitle="Menu cateringowe 20.01 - 24.01.2020" />
        </StyledPageHeaderWrapper>
        <ContentWrapper>
          <StyledInfoWrapper pose={visible ? 'visible' : 'hidden'}>
            <StyledHeading>Zamówienia przyjmujemy do godziny 9:00 bieżącego dnia</StyledHeading>
            <Telephone href="tel:502315715">
              <TelephoneIcon icon={telephoneIcon} />
              502 315 715
            </Telephone>
            <Email href="mailto:kontakt@bryzol.pl">
              <EmailIcon icon={outlineEmail} />
              kontakt@bryzol.pl
            </Email>
            <StyledHeading>Odbiór</StyledHeading>
            <AddressSection dinners />
          </StyledInfoWrapper>
          <DinnerList />
        </ContentWrapper>
      </StyledWrapper>
    </Layout>
  );
};

export default DinnerPage;

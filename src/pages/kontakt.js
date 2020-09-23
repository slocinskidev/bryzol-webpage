import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import flagForFlagPoland from '@iconify/icons-twemoji/flag-for-flag-poland';
import Layout from '../layouts/Layout';
import PageHeader from '../components/PageHeader/PageHeader';
import ContactCard from '../components/ContactCard/ContactCard';
import AddressSection from '../components/AddressSection/AddressSection';
import Map from '../components/Map/Map';
import ContactForm from '../components/ContactForm/ContactForm';
import SEO from '../components/Seo/Seo';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 992px) {
    padding: 20px 20px 100px;
  }
`;

const PageHeaderWrapper = styled.div`
  padding: 20px 0 40px;
`;

const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

const Heading = styled.h3`
  margin: 60px 0 20px;
  color: ${({ theme }) => theme.color.dark};
  font-size: 2.4rem;
  text-align: center;
  font-weight: 700;
`;

const CompanyName = styled.h3`
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.color.secondary};
  font-size: 2.4rem;
  text-align: center;
  font-weight: 500;
`;

const AccountNumber = styled.h3`
  margin: 0 0 40px;
  padding: 0;
  color: ${({ theme }) => theme.color.dark};
  font-size: 1.6rem;
  text-align: center;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledIcon = styled(Icon)`
  color: ${({ theme }) => theme.color.primary};
  margin-right: 10px;
  padding: 0;
  width: 20px;
  height: 20px;
`;

const ContactPage = ({ data, location }) => (
  <Layout>
    <Wrapper>
      <SEO title="Kontakt" pathname={location.pathname} />
      <PageHeaderWrapper>
        <PageHeader title="Kontakt" subtitle="Zadzwoń, napisz lub skorzystaj z formularza" />
      </PageHeaderWrapper>
      <CardWrapper>
        <ContactCard
          name="Andrzej Słociński"
          avatar={data.allFile.nodes[0].childImageSharp.fluid.src}
          tel="605 547 282"
          email="slone@bryzol.pl"
        />
        <ContactCard
          name="Adam Gembalczyk"
          avatar={data.allFile.nodes[1].childImageSharp.fluid.src}
          tel="502 315 715"
          email="slodkie@bryzol.pl"
        />
      </CardWrapper>
      <Heading>Nasze dane</Heading>
      <CompanyName>Bryzol Catering</CompanyName>
      <AddressSection />
      <AccountNumber>
        <StyledIcon icon={flagForFlagPoland} />
        33 1050 1676 1000 0090 9160 5494
      </AccountNumber>
      <Map />
      <ContactForm />
    </Wrapper>
  </Layout>
);

export const query = graphql`
  {
    allFile(filter: { name: { regex: "/avatar/" } }) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 300, maxHeight: 300) {
            src
          }
        }
      }
    }
  }
`;

export default ContactPage;

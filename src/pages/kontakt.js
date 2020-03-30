import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import posed from 'react-pose';
import styled from 'styled-components';
import Layout from '../layouts/Layout';
import PageHeader from '../components/PageHeader/PageHeader';
import ContactCard from '../components/ContactCard/ContactCard';
import AddressSection from '../components/AddressSection/AddressSection';
import Map from '../components/Map/Map';

// Pose
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

const PosedContentWrapper = posed.div({
  visible: {
    delay: 500,
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
});

// Style

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 992px) {
    padding: 20px 20px 100px;
  }
`;

const StyledPageHeaderWrapper = styled(PosedPageHeaderWrapper)`
  padding: 20px 0 40px;
`;

const StyledContentWrapper = styled(PosedContentWrapper)`
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

const StyledAddressHeading = styled.h4`
  color: ${({ theme }) => theme.color.dark};
  font-size: 2rem;
  align-self: center;
  font-weight: 500;
`;

const ContactPage = ({ data }) => (
  <Layout>
    <StyledWrapper>
      <StyledPageHeaderWrapper>
        <PageHeader title="Kontakt" subtitle="Zadzwoń, napisz lub skorzystaj z formularza" />
      </StyledPageHeaderWrapper>
      <StyledContentWrapper>
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
      </StyledContentWrapper>
      <StyledAddressHeading>Nasz adres</StyledAddressHeading>
      <AddressSection />
      <Map />
    </StyledWrapper>
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

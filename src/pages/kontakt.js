import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../layouts/Layout';
import PageHeader from '../components/PageHeader/PageHeader';
import ContactCard from '../components/ContactCard/ContactCard';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 992px) {
    padding: 20px 20px 100px;
  }
`;

const StyledPageHeaderWrapper = styled.div`
  padding: 20px 0 40px;
`;

const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  @media (min-width: 992px) {
    flex-direction: row;
  }
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
          email="slodkie@bryzol.pl"
        />
      </StyledContentWrapper>
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

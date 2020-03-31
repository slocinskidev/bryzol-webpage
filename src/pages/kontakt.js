import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import posed from 'react-pose';
import styled from 'styled-components';
import Layout from '../layouts/Layout';
import PageHeader from '../components/PageHeader/PageHeader';
import ContactCard from '../components/ContactCard/ContactCard';
import AddressSection from '../components/AddressSection/AddressSection';
import Map from '../components/Map/Map';
import ContactForm from '../components/ContactForm/ContactForm';

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

const PosedContactWrapper = posed.div({
  visible: {
    delay: 500,
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
});

const PosedAddress = posed.div({
  visible: {
    delay: 1000,
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
});

const PosedForm = posed.div({
  visible: {
    delay: 1500,
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
});

const StyledPosedForm = styled(PosedForm)`
  margin: 0 0 20px;
`;

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

const StyledContactWrapper = styled(PosedContactWrapper)`
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

const StyledAddressHeading = styled.h3`
  margin: 120px 0 20px;
  color: ${({ theme }) => theme.color.dark};
  font-size: 2.4rem;
  text-align: center;
  font-weight: 700;
`;

const ContactPage = ({ data }) => {
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
          <PageHeader title="Kontakt" subtitle="Zadzwoń, napisz lub skorzystaj z formularza" />
        </StyledPageHeaderWrapper>
        <StyledContactWrapper pose={visible ? 'visible' : 'hidden'}>
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
        </StyledContactWrapper>
        <PosedAddress pose={visible ? 'visible' : 'hidden'}>
          <StyledAddressHeading>Nasz adres</StyledAddressHeading>
          <AddressSection />
          <Map />
        </PosedAddress>
        <StyledPosedForm pose={visible ? 'visible' : 'hidden'}>
          <ContactForm />
        </StyledPosedForm>
      </StyledWrapper>
    </Layout>
  );
};

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

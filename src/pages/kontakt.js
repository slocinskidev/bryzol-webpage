import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Image from 'gatsby-image';
import Layout from '../layouts/Layout';
import PageHeader from '../components/PageHeader/PageHeader';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (min-width: 992px) {
    padding: 20px 20px 100px;
  }
`;

const StyledPageHeaderWrapper = styled.div`
  padding: 20px 0 40px;
`;

const StyledContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  text-align: center;
  justify-content: center;
`;

const StyledText = styled.h3`
  font-size: ${({ theme }) => theme.font.h3};
  color: ${({ theme }) => theme.color.secondary};
  text-transform: uppercase;
`;

const StyledTextMore = styled.h4`
  margin-top: -20px;
  font-size: ${({ theme }) => theme.font.h4};
  color: ${({ theme }) => theme.color.secondary};
  font-weight: 400;
  text-transform: uppercase;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin: 0 auto;
`;

const ContactPage = ({ data }) => (
  <Layout>
    <StyledWrapper>
      <StyledPageHeaderWrapper>
        <PageHeader title="Kontakt" />
      </StyledPageHeaderWrapper>
      <StyledContentWrapper>
        <StyledText>Strona w budowie</StyledText>
        <StyledTextMore>Pozostało do wbicia jeszcze kilka gwoździ...</StyledTextMore>
        <StyledImage fluid={data.file.childImageSharp.fluid} alt="Zdjęcie przedstawiające budowę" />
      </StyledContentWrapper>
    </StyledWrapper>
  </Layout>
);

export const query = graphql`
  {
    file(absolutePath: { regex: "/under-construction/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default ContactPage;

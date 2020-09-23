import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import posed from 'react-pose';
import styled from 'styled-components';
import Image from 'gatsby-image';
import Layout from '../layouts/Layout';
import PageHeader from '../components/PageHeader/PageHeader';
import SEO from '../components/Seo/Seo';

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

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

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

const NotFoundPage = ({ data, location }) => {
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
        <SEO title="Nie znaleziono strony" pathname={location.pathname} />
        <StyledPageHeaderWrapper pose={visible ? 'visible' : 'hidden'}>
          <PageHeader title="Brak strony" subtitle="Nie znaleziono strony" />
        </StyledPageHeaderWrapper>
        <StyledContentWrapper pose={visible ? 'visible' : 'hidden'}>
          <StyledText>Nie znaleziono takiej strony!</StyledText>
          <StyledTextMore>
            Strona której szukasz nie istnieje lub została już usunięta...
          </StyledTextMore>
          <StyledTextMore>...a może została zjedzona?</StyledTextMore>
          <StyledImage
            fluid={data.file.childImageSharp.fluid}
            alt="Zdjęcie przedstawiające błąd 404"
          />
        </StyledContentWrapper>
      </StyledWrapper>
    </Layout>
  );
};

export const query = graphql`
  {
    file(absolutePath: { regex: "/404/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default NotFoundPage;

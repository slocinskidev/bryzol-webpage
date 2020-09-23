import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import posed from 'react-pose';
import Layout from '../layouts/Layout';
import AboutCard from '../components/AboutCard/AboutCard';
import PageHeader from '../components/PageHeader/PageHeader';
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

const AboutCardWrapper = styled.section`
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

const AboutPage = ({ data, location }) => (
  <Layout>
    <Wrapper>
      <SEO title="O Nas" pathname={location.pathname} />
      <PageHeaderWrapper>
        <PageHeader title="O Nas" subtitle="Kliknij by wyświetlić szczegóły" />
      </PageHeaderWrapper>
      <AboutCardWrapper>
        <AboutCard
          name="Andrzej Słociński"
          more="Mania gotowania"
          avatar={data.allFile.nodes[0].childImageSharp.fluid.src}
          content="Mam na imię Andrzej, od kilkunastu lat zajmuję się gastronomią, a konkretnie profesjonalną i kompleksową obsługą imprez okolicznościowych u klienta. Jestem osobą staranną i wszystkie powierzone mi zlecenia wykonuję na najwyższym poziomie. Staram się dopasować do gustów podniebienia i oczekiwań klienta. Nie ma rzeczy niemożliwych, możemy odtworzyć danie z dalekiej podróży i wakacji. Zawsze dla mnie najważniejszy jest klient i jego zadowolenie z wykonania mojej pracy. Daje mi to energię i inspirację do dalszego kształcenia oraz podnoszenia moich kwalifikacji."
          signature="Andrzej Słociński"
        />
        <AboutCard
          name="Adam Gembalczyk"
          more="Specjalista od wyrobów cukierniczych"
          avatar={data.allFile.nodes[1].childImageSharp.fluid.src}
          content="Nazywam się Adam i jestem specjalistą od wyrobów cukierniczych. Już od młodych lat moim marzeniem było tworzyć poezję dla smaku. W późniejszych latach prowadziłem jedną z pierwszych cukiernii w Żorach. Powiada, że smak słodki najlepszy jest na smutki. Cechuje mnie dbałość o detale, ponieważ w mojej pracy ważne jest to by nie tylko smakowało, ale i wyglądało."
          signature="Adam Gembalczyk"
        />
      </AboutCardWrapper>
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

export default AboutPage;

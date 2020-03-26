import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../layouts/Layout';
import AboutCard from '../components/AboutCard/AboutCard';
import PageHeader from '../components/PageHeader/PageHeader';

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

const StyledAboutCardWrapper = styled.div`
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

const AboutPage = ({ data }) => (
  <Layout>
    <StyledWrapper>
      <StyledPageHeaderWrapper>
        <PageHeader title="O Nas" />
      </StyledPageHeaderWrapper>
      <StyledAboutCardWrapper>
        <AboutCard
          name="Andrzej Słociński"
          // more=""
          avatar={data.allFile.nodes[0].childImageSharp.fluid.src}
          content="Mam na imię Andrzej, od kilkunastu lat zajmuję się gastronomią, a konkretnie profesjonalną i kompleksową obsługą imprez okolicznościowych u klienta. Jestem osobą staranną i wszystkie powierzone mi zlecenia wykonuję na najwyższym poziomie. Staram się dopasować do gustów podniebienia i oczekiwań klienta. Nie ma rzeczy niemożliwych, możemy odtworzyć danie z dalekiej podróży i wakacji. Zawsze dla mnie najważniejszy jest klient i jego zadowolenie z wykonania mojej pracy. Daje mi to energię i inspirację do dalszego kształcenia oraz podnoszenia moich kwalifikacji."
        />
        <AboutCard
          name="Adam Gembalczyk"
          // more=""
          avatar={data.allFile.nodes[1].childImageSharp.fluid.src}
          content="Mam na imię Andrzej, od kilkunastu lat zajmuję się gastronomią, a konkretnie profesjonalną i kompleksową obsługą imprez okolicznościowych u klienta. Jestem osobą staranną i wszystkie powierzone mi zlecenia wykonuję na najwyższym poziomie. Staram się dopasować do gustów podniebienia i oczekiwań klienta. Nie ma rzeczy niemożliwych, możemy odtworzyć danie z dalekiej podróży i wakacji. Zawsze dla mnie najważniejszy jest klient i jego zadowolenie z wykonania mojej pracy. Daje mi to energię i inspirację do dalszego kształcenia oraz podnoszenia moich kwalifikacji."
        />
      </StyledAboutCardWrapper>
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

export default AboutPage;

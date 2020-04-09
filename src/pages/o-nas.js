import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import posed from 'react-pose';
import Layout from '../layouts/Layout';
import AboutCard from '../components/AboutCard/AboutCard';
import PageHeader from '../components/PageHeader/PageHeader';

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
  justify-content: space-between;

  @media (min-width: 992px) {
    padding: 20px 20px 100px;
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

const StyledAboutCardWrapper = styled(PosedAboutCardWrapper)`
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

const AboutPage = ({ data }) => {
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
          <PageHeader title="O Nas" subtitle="Kliknij by wyświetlić szczegóły" />
        </StyledPageHeaderWrapper>
        <StyledAboutCardWrapper pose={visible ? 'visible' : 'hidden'}>
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

export default AboutPage;

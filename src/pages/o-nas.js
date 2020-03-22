import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import MobileLayout from '../layouts/MobileLayout';
import DesktopLayout from '../layouts/DesktopLayout';
import AboutCard from '../components/AboutCard/AboutCard';
import PageHeader from '../components/PageHeader/PageHeader';

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 991 });
  return isMobile ? children : null;
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: center;
  align-items: center;
`;

const AboutPage = () => (
  <>
    <Mobile>
      <MobileLayout>
        <PageHeader title="O Nas" />
        <AboutCard
          name="Andrzej Słociński"
          content="Mam na imię Andrzej, od kilkunastu lat zajmuję się gastronomią, a konkretnie profesjonalną i kompleksową obsługą imprez okolicznościowych u klienta. Jestem osobą staranną i wszystkie powierzone mi zlecenia wykonuję na najwyższym poziomie. Staram się dopasować do gustów podniebienia i oczekiwań klienta. Nie ma rzeczy niemożliwych, możemy odtworzyć danie z dalekiej podróży i wakacji. Zawsze dla mnie najważniejszy jest klient i jego zadowolenie z wykonania mojej pracy. Daje mi to energię i inspirację do dalszego kształcenia oraz podnoszenia moich kwalifikacji."
          tel="605 547 282"
          email="slodkie@bryzol.pl"
        />

        <AboutCard
          name="Adam Gembalczyk"
          content="Mam na imię Andrzej, od kilkunastu lat zajmuję się gastronomią, a konkretnie profesjonalną i kompleksową obsługą imprez okolicznościowych u klienta. Jestem osobą staranną i wszystkie powierzone mi zlecenia wykonuję na najwyższym poziomie. Staram się dopasować do gustów podniebienia i oczekiwań klienta. Nie ma rzeczy niemożliwych, możemy odtworzyć danie z dalekiej podróży i wakacji. Zawsze dla mnie najważniejszy jest klient i jego zadowolenie z wykonania mojej pracy. Daje mi to energię i inspirację do dalszego kształcenia oraz podnoszenia moich kwalifikacji."
          tel="605 547 282"
          email="slodkie@bryzol.pl"
        />
      </MobileLayout>
    </Mobile>
    <Desktop>
      <DesktopLayout>
        <PageHeader title="O Nas" />
        <StyledWrapper>
          <AboutCard
            name="Andrzej Słociński"
            content="Mam na imię Andrzej, od kilkunastu lat zajmuję się gastronomią, a konkretnie profesjonalną i kompleksową obsługą imprez okolicznościowych u klienta. Jestem osobą staranną i wszystkie powierzone mi zlecenia wykonuję na najwyższym poziomie. Staram się dopasować do gustów podniebienia i oczekiwań klienta. Nie ma rzeczy niemożliwych, możemy odtworzyć danie z dalekiej podróży i wakacji. Zawsze dla mnie najważniejszy jest klient i jego zadowolenie z wykonania mojej pracy. Daje mi to energię i inspirację do dalszego kształcenia oraz podnoszenia moich kwalifikacji."
            tel="605 547 282"
            email="slodkie@bryzol.pl"
          />

          <AboutCard
            name="Adam Gembalczyk"
            content="Mam na imię Andrzej, od kilkunastu lat zajmuję się gastronomią, a konkretnie profesjonalną i kompleksową obsługą imprez okolicznościowych u klienta. Jestem osobą staranną i wszystkie powierzone mi zlecenia wykonuję na najwyższym poziomie. Staram się dopasować do gustów podniebienia i oczekiwań klienta. Nie ma rzeczy niemożliwych, możemy odtworzyć danie z dalekiej podróży i wakacji. Zawsze dla mnie najważniejszy jest klient i jego zadowolenie z wykonania mojej pracy. Daje mi to energię i inspirację do dalszego kształcenia oraz podnoszenia moich kwalifikacji."
            tel="605 547 282"
            email="slodkie@bryzol.pl"
          />
        </StyledWrapper>
      </DesktopLayout>
    </Desktop>
  </>
);

export default AboutPage;

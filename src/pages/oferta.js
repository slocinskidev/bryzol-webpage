import React, { useState, useEffect } from 'react';
import posed from 'react-pose';
import styled from 'styled-components';
import Layout from '../layouts/Layout';
import OfferItem from '../components/OfferItem/OfferItem';
import PageHeader from '../components/PageHeader/PageHeader';

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

// Style

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  width: 100%;

  @media (min-width: 992px) {
    padding: 20px 20px 100px;
  }
`;

const StyledPageHeaderWrapper = styled(PosedPageHeaderWrapper)`
  padding: 20px 0 40px;
`;

const StyledContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OfferPage = () => {
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
          <PageHeader title="Oferta" />
        </StyledPageHeaderWrapper>
        <StyledContentWrapper>
          <OfferItem
            item="Zestaw dla 10 osób"
            content={[
              'Polędwiczki wieprzowe z sosem pieprzowym lub grzybowym 6p.',
              'Udko z kurczak b/k z rozmarynem lub udko z/k z czosnkiem 6szt.',
              'Schab z oscypkiem lub pieczeń 6szt.',
              'Sznycelki drobiowe lub dewolaj 6szt.',
              'Pierś z kaczki z rozmarynem lub udko 6p.',
              'Ziemniaki pieczone lub ziemniaki pure z boczkiem 10szt.',
              'Pęczatto z warzywami lub risotto z grzybami 1kg',
              'Kapusta lekka lub kapusta po góralsku 1,5kg',
            ]}
            price="200 zł"
          />
          <OfferItem
            item="Zestaw dla 10 osób"
            content={[
              'Polędwiczki wieprzowe z sosem pieprzowym lub grzybowym 6p.',
              'Udko z kurczak b/k z rozmarynem lub udko z/k z czosnkiem 6szt.',
              'Schab z oscypkiem lub pieczeń 6szt.',
              'Sznycelki drobiowe lub dewolaj 6szt.',
              'Pierś z kaczki z rozmarynem lub udko 6p.',
              'Ziemniaki pieczone lub ziemniaki pure z boczkiem 10szt.',
              'Pęczatto z warzywami lub risotto z grzybami 1kg',
              'Kapusta lekka lub kapusta po góralsku 1,5kg',
            ]}
            price="200 zł"
          />
          <OfferItem
            item="Zestaw dla 10 osób"
            content={[
              'Polędwiczki wieprzowe z sosem pieprzowym lub grzybowym 6p.',
              'Udko z kurczak b/k z rozmarynem lub udko z/k z czosnkiem 6szt.',
              'Schab z oscypkiem lub pieczeń 6szt.',
              'Sznycelki drobiowe lub dewolaj 6szt.',
              'Pierś z kaczki z rozmarynem lub udko 6p.',
              'Ziemniaki pieczone lub ziemniaki pure z boczkiem 10szt.',
              'Pęczatto z warzywami lub risotto z grzybami 1kg',
              'Kapusta lekka lub kapusta po góralsku 1,5kg',
            ]}
            price="200 zł"
          />
        </StyledContentWrapper>
      </StyledWrapper>
    </Layout>
  );
};

export default OfferPage;

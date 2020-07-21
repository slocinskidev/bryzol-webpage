import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { Icon } from '@iconify/react';
import bxCalendar from '@iconify/icons-bx/bx-calendar';
import fireIcon from '@iconify/icons-noto/fire';
import Layout from '../../layouts/Layout';
import OfferItem from '../../components/OfferItem/OfferItem';
import PageHeader from '../../components/PageHeader/PageHeader';
import SEO from '../../components/Seo/Seo';

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

const StyledPageHeaderWrapper = styled.div`
  padding: 20px 0 40px;
`;

const StyledContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainHeading = styled.h3`
  margin: 0 0 10px;
  color: ${({ theme }) => theme.color.dark};
  font-size: ${({ theme }) => theme.font.h3};
  text-align: center;
  font-weight: 700;
`;

const HeadingDescription = styled.p`
  text-align: center;
  padding: 0;
  margin: 0 0 10px;
  line-height: 1.5;
  font-size: ${({ theme }) => theme.font.p};
`;

const StyledLink = styled(AniLink)`
  max-width: 960px;
  box-shadow: ${({ theme }) => theme.shadow.box};
  display: flex;
  cursor: pointer;
  margin: 0;
  padding: 15px 10px;
  width: 100%;
  background-color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.font.h4};
  text-decoration: none;
  font-weight: 500;
  color: ${({ theme }) => theme.color.white};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.color.secondary};
  }
`;

const SectionWrapper = styled.section`
  margin: 20px 0 60px;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DinnerWrapper = styled.section`
  margin: 10px 0;
  padding: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledIcon = styled(Icon)`
  color: ${({ theme }) => theme.color.dark};
  width: 40px;
  height: 40px;
  margin: 0 10px 10px;
`;

const offerData = {
  foodKit: [
    {
      item: 'Zestaw dla 10 osób',
      content: [
        'Polędwiczki wieprzowe z sosem pieprzowym lub grzybowym 6p.',
        'Udko z kurczak b/k z rozmarynem lub udko z/k z czosnkiem 6szt.',
        'Schab z oscypkiem lub pieczeń 6szt.',
        'Sznycelki drobiowe lub dewolaj 6szt.',
        'Pierś z kaczki z rozmarynem lub udko 6p.',
        'Ziemniaki pieczone lub ziemniaki pure z boczkiem 10szt.',
        'Pęczatto z warzywami lub risotto z grzybami 1kg',
        'Kapusta lekka lub kapusta po góralsku 1,5kg',
      ],
      price: '200 zł',
    },
    {
      item: 'Przekąski dla 10 osób',
      content: [
        'Sakiewki z szynki 16szt.',
        'Polędwiczki z suszonymi pomidorami 10szt.',
        'Galantynki drobiowe z nadzieniem pieprzowym 10szt.',
        'Jajka z śledziem korzennym 8szt.',
        'Łosoś z ajwarem 10szt.',
        'Pomidorki koktajlowe z mozarellą 16szt.',
        'Tatar wołowy 8szt.',
        'Sałatka lekka(mix sałat, pomidor, ogórek, mango,kiełki, pestki, sos winegret) 1 miska',
        'Brokuły z sosem czosnkowym i prażonymi migdałami 1 miska',
      ],
      price: '290 zł',
    },
    {
      item: 'Zestaw słodkości',
      content: [
        'Krem czekoladowy 10szt.',
        'Panna cotta 10szt.',
        'Chija z jogurtem 10szt.',
        'Creme brulle 10szt.',
        'Sałatka owocowa w tartoletkach 10szt.',
      ],
      price: '200 zł',
    },
  ],
  sheetMetalBanquet: [
    {
      item: 'Wiosenna',
      content: [
        'Udko bez kości z rozmarynem grillowane 6szt.',
        'Sznycelki drobiowe 10szt.',
        'Skrzydełka w miodzie 10szt.',
        'Schab z serem wędzonym 6szt.',
        'Pieczeń wieprzowa 1kg (8 plastrów)',
        'Paluszki serowe 6szt.',
        'Fasolka szparagowa 700g',
        'Makaron rurki z sosem czosnkowym 1,5kg',
      ],
      price: '320 zł',
    },
    {
      item: 'Letnia',
      content: [
        'Udko z kurczaka b/k 5szt.',
        'Pierogi ruskie 15szt.',
        'Karkówka z grilla 6szt.',
        'Kiełbaski grillowane 6szt.',
        'Filet z kurczaka z grilla 6szt.',
        'Ziemniaki faszerowane 10szt.',
        'Schabowy 5szt.',
        'Schab z oscypkiem 5szt.',
        'Brokuły z sosem serowym 800g',
        'Ziemniaki z koperkiem i masłem 1,5kg',
      ],
      price: '350 zł',
    },
    {
      item: 'Jesienna',
      content: [
        'Pieczeń wieprzowa 1kg (8 plastrów)',
        'Udko z kurczaka z czosnkiem 5szt.',
        'Skrzydełka pikantne w miodzie 10szt.',
        'Roladki z indyka z ogórkiem i boczkiem 5szt.',
        'Schab po cygańsku(cebula, szynka) 10szt.',
        'Pieczarki panierowane 10szt.',
        'Kaszanka swojska 5szt.',
        'Kapusta zasmażana 1,5kg',
        'Ziemniaki smażone 1,5kg',
      ],
      price: '300 zł',
    },
    {
      item: 'Zimowa',
      content: [
        'Pieczeń wieprzowa 1kg (ok. 8 plastrów)',
        'Golonki pieczone b/k 1kg (ok. 3szt.)',
        'Kaszanka swojska 5szt.',
        'Schab z oscypkiem 6szt.',
        'Śliwki w boczku 20szt.',
        'Kiełbaski pieczone 6szt.',
        'Sznycelki drobiowe 10szt.',
        'Kapusta zasmażana 1,5kg',
        'Ziemniaki pieczone z ziołami 1,5kg',
        'Pieczarki faszerowane 10szt.',
      ],
      price: '330 zł',
    },
  ],
  cateringOfferList: [
    {
      item: 'Przekąski zimne',
      content: ['W trakcie...'],
    },
    {
      item: 'Przekąski ciepłe',
      content: ['W trakcie...'],
    },
    {
      item: 'Zupy',
      content: ['W trakcie...'],
    },
    {
      item: 'Ciepłe dania',
      content: ['W trakcie...'],
    },
    {
      item: 'Dodatki',
      content: ['W trakcie...'],
    },
    {
      item: 'Desery',
      content: ['W trakcie...'],
    },
  ],
};

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
        <SEO title="Oferta" />
        <StyledPageHeaderWrapper pose={visible ? 'visible' : 'hidden'}>
          <PageHeader title="Oferta" subtitle="Kliknij by wyświetlić szczegóły" />
        </StyledPageHeaderWrapper>
        <StyledContentWrapper>
          <SectionWrapper>
            <DinnerWrapper>
              <StyledIcon icon={fireIcon} />
              <HeadingDescription>
                Połączenie idealnie chrupiącego ciasta z wysokiej jakości składnikami
              </HeadingDescription>
              <StyledIcon icon={fireIcon} />
            </DinnerWrapper>

            <StyledLink fade to="/oferta/ciasto-ogniowe">
              Ciasto ogniowe
            </StyledLink>
          </SectionWrapper>

          <SectionWrapper>
            <DinnerWrapper>
              <StyledIcon icon={bxCalendar} />
              <HeadingDescription>
                Sprawdź jakie obiady przygotowaliśmy w tym tygodniu
              </HeadingDescription>
              <StyledIcon icon={bxCalendar} />
            </DinnerWrapper>

            <StyledLink fade to="/oferta/obiady">
              Obiady
            </StyledLink>
          </SectionWrapper>

          <SectionWrapper>
            <MainHeading>Gotowe zestawy</MainHeading>
            <HeadingDescription>Opis gotowych zestawów!</HeadingDescription>
            {offerData.foodKit.map(offer => (
              <OfferItem
                key={offer.item}
                item={offer.item}
                content={offer.content}
                price={offer.price}
              />
            ))}
          </SectionWrapper>

          <SectionWrapper>
            <MainHeading>Blachy biesiadne</MainHeading>
            <HeadingDescription>
              Blachy biesiadne to idealny pomysł na imprezę dla 8-10 osób!
            </HeadingDescription>
            {offerData.sheetMetalBanquet.map(offer => (
              <OfferItem
                key={offer.item}
                item={offer.item}
                content={offer.content}
                price={offer.price}
              />
            ))}
          </SectionWrapper>

          <SectionWrapper>
            <MainHeading>Oferta cateringowa</MainHeading>
            <HeadingDescription>
              Cena jest wyliczana indywidualnie dla każdego klienta na podstawie dań oraz ich
              ilości. W celu poznania ceny zapraszam do kontaktu!
            </HeadingDescription>
            {offerData.cateringOfferList.map(offer => (
              <OfferItem
                key={offer.item}
                item={offer.item}
                content={offer.content}
                price={offer.price}
              />
            ))}
          </SectionWrapper>
        </StyledContentWrapper>
      </StyledWrapper>
    </Layout>
  );
};

export default OfferPage;

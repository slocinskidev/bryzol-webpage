import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { Icon } from '@iconify/react';
import bxCalendar from '@iconify/icons-bx/bx-calendar';
// import fireIcon from '@iconify/icons-noto/fire';
import MinimalistContactCard from '../../components/MinimalistContactCard/MinimalistContactCard';
import Layout from '../../layouts/Layout';
import OfferItem from '../../components/OfferItem/OfferItem';
import PageHeader from '../../components/PageHeader/PageHeader';
import SEO from '../../components/Seo/Seo';
import TelFixedButton from '../../components/TelFixedButton/TelFixedButton';

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

const MinimalistContactCardWrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
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
      item: 'Zestaw dań dla 10 osób',
      description:
        'Poniżej przedstawione są dania do wyboru, przy zamówieniu proszę o wybranie odpowiednich dań. Zestaw do samodzielnego wyłożenia.',
      content: [
        'Polędwiczki wieprzowe z sosem pieprzowym lub grzybowym 6 porcji',
        'Udko z kurczak b/k z rozmarynem lub udko z/k z czosnkiem 6szt.',
        'Schab z serem wędzonym lub pieczeń 6szt.',
        'Sznycelki drobiowe lub kotlet de volaille 6szt.',
        'Pierś z kaczki z rozmarynem lub udko 6 porcji',
        'Ziemniaki pieczone lub ziemniaki pure z boczkiem 10 porcji.',
        'Pęczatto z warzywami lub risotto z grzybami 1kg',
        'Kapusta lekka lub kapusta zasmażana 1,5kg',
      ],
      price: '360 zł',
    },
    {
      item: 'Zestaw przekąsek dla 10 osób',
      description: 'Wyłożone na paterach.',
      content: [
        'Sakiewki z szynki 16szt.',
        'Polędwiczki wieprzowe z suszonymi pomidorami 10szt.',
        'Galantynki z nadzieniem pieprzowym 10szt.',
        'Jajka z śledziem korzennym 8szt.',
        'Łosoś z ajwarem 10szt.',
        'Pomidorki koktajlowe z mozarellą 16szt.',
        'Tatar wołowy 60g 8szt.',
        'Sałatka lekka (mix sałat, pomidor, ogórek, mango, kiełki, pestki, sos winegret) 1 miska',
        'Brokuły z sosem czosnkowym i prażonymi migdałami 1 miska',
      ],
      price: '290 zł',
    },
    {
      item: 'Zestaw słodkości dla 10 osób',
      content: [
        'Krem czekoladowy 10szt.',
        'Panna cotta 10szt.',
        'Chia z jogurtem 10szt.',
        'Creme brulle 10szt.',
        'Tartaletki z kremem i owocami 10szt.',
      ],
      price: '200 zł',
    },
  ],
  sheetMetalBanquet: [
    {
      item: 'Wiosenna',
      description:
        'Podane w korycie drewnianym lub podgrzewaczu lub do samodzielnego wyłożenia - proszę o wybór przy zamówieniu.',
      content: [
        'Udko b/k z rozmarynem 6szt.',
        'Kotleciki drobiowe 10szt.',
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
      description:
        'Podane w korycie drewnianym lub podgrzewaczu lub do samodzielnego wyłożenia - proszę o wybór przy zamówieniu.',
      content: [
        'Udko b/k z rozmarynem 5szt.',
        'Pierogi ruskie 15szt.',
        'Karkówka z grilla 6szt.',
        'Kiełbaski pieczone 6szt.',
        'Filet z kurczaka z grilla 6szt.',
        'Ziemniaki faszerowane z boczkiem 10szt.',
        'Schabowy 5szt.',
        'Schab z serem wędzonym 5szt.',
        'Brokuły z sosem serowym 800g',
        'Ziemniaki z koperkiem i masłem 1,5kg',
      ],
      price: '350 zł',
    },
    {
      item: 'Jesienna',
      description:
        'Podane w korycie drewnianym lub podgrzewaczu lub do samodzielnego wyłożenia - proszę o wybór przy zamówieniu.',
      content: [
        'Pieczeń wieprzowa 1kg (8 plastrów)',
        'Udko z kurczaka z/k z czosnkiem 5szt.',
        'Skrzydełka pikantne w miodzie 10szt.',
        'Rolada wieprzowa 5szt.',
        'Schab po cygańsku (cebula, szynka, panierka) 10szt.',
        'Pieczarki panierowane 10szt.',
        'Kaszanka swojska z cebulą w folii 5szt.',
        'Kapusta zasmażana 1,5kg',
        'Ziemniaki pieczone z ziołami 1,5kg',
      ],
      price: '300 zł',
    },
    {
      item: 'Zimowa',
      description:
        'Podane w korycie drewnianym lub podgrzewaczu lub do samodzielnego wyłożenia - proszę o wybór przy zamówieniu.',
      content: [
        'Pieczeń wieprzowa 1kg (ok. 8 plastrów)',
        'Golonki pieczone b/k 1kg (ok. 3szt.)',
        'Kaszanka swojska z cebulą w folii 5szt.',
        'Schab z serem wędzonym 6szt.',
        'Śliwki w boczku 20szt.',
        'Kiełbaski pieczone 6szt.',
        'Sznycelki drobiowe 10szt.',
        'Kapusta zasmażana 1,5kg',
        'Ziemniaki pieczone z ziołami 1,5kg',
        'Pieczarki faszerowane mięsem 10szt.',
      ],
      price: '330 zł',
    },
    {
      item: 'Śląska',
      description:
        'Podane w korycie drewnianym lub podgrzewaczu lub do samodzielnego wyłożenia - proszę o wybór przy zamówieniu.',
      content: [
        'Rolada wołowa 6szt.',
        'Udko z kaczki 6szt.',
        'Karminadle 6szt.',
        'Kotlet de volaille 6szt.',
        'Pieczeń 600g',
        'Kaszanka swojska z cebulą w folii 6szt.',
        'Kluski śląskie 10 porcji',
        'Kapusta czerwona 1kg',
        'Colesław 1kg',
        'Sos pieczeniowy 1l',
      ],
      price: '400 zł',
    },
    {
      item: 'Mięsna',
      description:
        'Podane w korycie drewnianym lub podgrzewaczu lub do samodzielnego wyłożenia - proszę o wybór przy zamówieniu.',
      content: [
        'Schab z serem wędzonym 5szt.',
        'Polędwiczki wieprzowe z sosem pieprzowym 5 porcji',
        'Kotleciki drobiowe 5szt.',
        'Roladka z drobiowa ze szpinakiem w boczku 5szt.',
        'Rolada wołowa 5szt.',
        'Pierś z kaczki z rozmarynem lub udko 5 porcji/szt.',
      ],
      price: '320 zł',
    },
    {
      item: 'Wegetariańska',
      description:
        'Podane w korycie drewnianym lub podgrzewaczu lub do samodzielnego wyłożenia - proszę o wybór przy zamówieniu.',
      content: [
        'Ziemniaki faszerowane z serem i ziołami 10szt.',
        'Cukinia z suszonymi pomidorami i mozarellą 10szt.',
        'Pieczarki panierowane 10szt.',
        'Szaszłyki warzywne 10szt.',
        'Pierogi ruskie opiekane 10szt.',
        'Paluszki serowe 10szt.',
        'Makaron rurki z sosem serowym 1.5kg',
      ],
      price: '280 zł',
    },
  ],
  cateringOfferList: [
    {
      item: 'Ciepłe dania',
      description: 'Zamówienie możliwe po wybraniu minimum 5 szt. lub 5 porcji jednego rodzaju.',
      content: [
        'Pieczeń z karczku z ziołami porcja',
        'Polędwiczki wieprzowe z sosem grzybowym lub pieprzowym porcja',
        'Polędwiczka wieprzowa po włosku (ser, sos pomidorowy) porcja',
        'Udko z kaczki z rozmarynem pieczone lub w pomarańczach szt.',
        'Pierś z kaczki z rozmarynem porcja',
        'Pierś z kurczaka z masłem ziołowym i serem camembert szt.',
        'Kurczak Caprese (grillowana pierś, mozzarella, pomidor, bazylia) szt.',
        'Filet z indyka w migdałach szt.',
        'Skrzydełka BBQ szt.',
        'Skrzydełka słodko-ostre szt.',
        'Kotlet de volaille (masło, pierś z kurczaka, natka pietruszki, panierka) szt.',
        'Szwajcar (schab, ser, panierka) szt.',
        'Schab z pieczarkami (panierka) szt.',
        'Schab z serem wędzonym (sauté) szt.',
        'Indyk ze szpinakiem w szynce dojrzewającej szt.',
        'Roladka z kurczaka z farszem warzywno-serowym (panierowane) szt.',
        'Rolada wieprzowa (farsz krojony) szt.',
        'Rolada wołowa (farsz krojony) szt.',
        'Golonka po bawarsku pieczona duszona w warzywach ok. 250g - szt.',
        'Udko z kurczaka b/k faszerowane z suszonymi pomidorami szt.',
        'Udko z kurczaka b/k z rozmarynem szt.',
        'Udko z kurczaka z/k z czosnkiem',
        'Stek z karkówki z grilla szt.',
        'Wołowina z orzechami nerkowca i selerem naciowym (kuchnia orientalna) porcja',
        'Królik w śmietanie (skoki) porcja',
        'Żeberka pieczone 150g - szt.',
        'Łosoś ze szpinakiem 150g - szt.',
        'Miruna w sosie maślane cytrynowym 120g - szt.',
        'Krewetki w sosie czosnkowym 100g - porcja ',
      ],
    },
    {
      item: 'Pieczenie',
      description: 'Na zamówienie, minimum 1 szt.',
      content: [
        'Udziec wieprzowy pieczony 10-12kg 40-50 osób ',
        'Indyk b/k faszerowany mięsem 15-20 osób',
        'Kaczka b/k faszerowana mięsem i owocami 8-10 osób',
        'Polędwica wołowa w ziołach pieczona w całości podana z grzybami  8-10 osób',
        'Cukinia zapiekana z pomidorami (cukinia, sos pomidorowy, sos beszamelowy, ser) 1szt. 6-8 osób',
        'Musaka (bakłażan, sos beszamelowy, sos mięsny z cynamonem, ser) 1szt. 6-8 osób',
      ],
    },
    {
      item: 'Zupy',
      description:
        'Zamówienie możliwe po wybraniu minimum 5 porcji zupy jednego rodzaju (1 porcja - 350ml).',
      content: [
        'Krem z brokuł z grzankami',
        'Krem pieczarkowy z groszkiem ptysiowym',
        'Krem szpinakowy ze śmietanką i prażonymi migdałami',
        'Krem pomidorowy z mozarellą, grzankami',
        'Krem cebulowy z grzankami',
        'Krem z dyni (sezonowo - jesień oraz zima)',
        'Żurek',
        'Zupa meksykańska (mięso mielone, mięso z kurczaka, fasola, kukurydza, papryka, pomidory)',
        'Zupa gulaszowa (wieprzowina, ziemniaki, ogórek)',
        'Bogracz (wołowina, kluseczki, papryka)',
        'Zupa toskańska z łososiem (cukinia, pomidory, zioła, łosoś świeży)',
        'Zupa tajska z mleczkiem kokosowym (pikantna)',
        'Rosół z makaronem',
        'Zupa grzybowa',
        'Zupa serowa ',
        'Grochówka',
        'Gazpacho',
        'Chłodnik litewski',
      ],
    },
    {
      item: 'Przekąski zimne',
      description: 'Zamówienie możliwe po wybraniu minimum 5 szt. lub 5 porcji jednego rodzaju.',
      content: [
        'Ruloniki z szynki z nadzieniem grzybowym lub chrzanowym szt.',
        'Ruloniki z sera żółtego z pastą orzechową szt.',
        'Jajka faszerowane pieczarkami szt.',
        'Jajka faszerowane pastą łososiowa szt.',
        'Tatar śledziowy na chlebie tostowym szt.',
        'Tatar z łososia podany na liściu sałaty 40g - szt.',
        'Tatar wołowy z ogórkiem i cebulą 60g - szt.',
        'Śledź korzenny na jajku szt.',
        'Śledź z bakaliami 100g - porcja',
        'Śledź w śmietanie 100g - porcja',
        'Łosoś z szynką dojrzewającą (podawany na zimno kawałek - 50g)',
        'Szynka z melonem szt.',
        'Polędwiczka wieprzowa nadziewana pomidorami suszonymi 30g - porcja',
        'Pomidorki koktajlowe z mozzarellą (koreczek) szt.',
        'Pomidorki faszerowane pastą z łososia szt.',
        'Muszle makaronowe nadziewane farszem warzywno-mięsnym szt.',
        'Tortilla z kurczakiem (pokrojona na kawałki - jeden kęs) szt.',
        'Pikantny kurczak na patyku z sosem czosnkowym lub sosem słodko ostrym szt.',
        'Rozbef lub pierś z kaczki z konfiturą z cebuli czerwonej i wiśniami 30g - porcja',
        'Ryba po grecku 100g - porcja',
        'Galaretka drobiowa szt.',
        'Galaretka wieprzowa szt.',
        'Galaretka z kaczki i żurawiną szt.',
        'Krewetki z melonem i ogórkiem (koreczek) szt.',
        'Tartinki (małe kanapeczki z wędliną, jarskie, z rybą) szt.',
        'Koreczki mix (ser, kurczak, śledź, łosoś wędzony, owoce, itp.) szt.',
        'Sakiewki z szynki dojrzewającej (ser pleśniowy, kiełki rzodkiewki, pasta chrzanowa) szt.',
        'Pasta z makreli w papierze ryżowym z prażonymi pestkami szt.',
        'Pasztet pieczony z konfiturą z czerwonej cebuli i wiśniami 30g - porcja',
        'Omlet z łososiem wędzonym (pokrojony na kawałki - jeden kęs) szt.',
        'Mini hamburgery z wołowiną szt.',
      ],
    },
    {
      item: 'Sałatki',
      description:
        'Zamówienie możliwe po wybraniu minimum 1 miski (1 miska jest liczona dla 5-7 osób).',
      content: [
        'Sałatka lekka - mix sałat, pomidorki, mango, kiełki, ogórek, pestki prażone, sos winegret',
        'Sałatka twarda - cukinia, pomidor, papryka, kiełki smażone, ser feta, zioła, czosnek, cytryna',
        'Sałatka caprese - pomidor, mozarella, bazylia, oliwa',
        'Sałatka grecka - sałata, oliwki, papryka, cebula, pomidor, feta, ogórek, sos winegret',
        'Sałatka z kurczakiem - sałata, pomidorki, kukurydza, papryka, ogórek, winogrono, sos czosnkowy',
        'Sałatka fasolkowa - fasola szparagowa, cebula, pomidor, migdały, sos winegret',
        'Sałatka lazur - roszponka, ser, pomidor, cebula, oliwki, papryka, orzechy, sos jogurtowy',
        'Sałatka z kaczką - rukola, pomidory suszone, pomarańcze, orzechy, parmezan, kaczka, krem balsamiczny',
        'Brokuły z sosem czosnkowym i prażonymi migdałami',
      ],
    },
    {
      item: 'Dodatki',
      description: 'Zamówienie możliwe po wybraniu minimum 5 szt. lub 5 porcji jednego rodzaju.',
      content: [
        'Ryż z groszkiem i marchewką (na ciepło) 100g - porcja',
        'Kluski śląskie jasne/ciemne ugotowane lub nie? 200g - porcja',
        'Ziemniaki pieczone 150g - porcja',
        'Ziemniaki purée z boczkiem 100g - porcja',
        'Kasza gryczana z czosnkiem i natką pietruszki 100g - porcja',
        'Pęczatto z warzywami 100g - porcja',
        'Ziemniaki gratin (lazania ziemniaczana) 60g - szt.',
        'Ziemniaki faszerowane z boczkiem i serem (pół ziemniaka) szt.',
        'Talarki ziemniaczane zapiekane (boczek, zioła, ser) szt.',
        'Kapusta lekka (kapusta świeża – na ciepło) 100g - porcja',
        'Kapusta zasmażana (kapusta kiszona, boczek) 100g - porcja',
        'Kapusta czerwona z boczkiem (lub bez) 100g - porcja',
        'Bukiet warzyw (brokuły, kalafior, fasolka, marchew) 100g - porcja',
        'Marchewka mini z sosem serowym 100g - porcja',
        'Marchewka z pomarańczami i bananem (na zimno) 100g - porcja',
        'Coleslaw (kapusta, cebula, chrzan, majonez, na zimno) 100g - porcja',
        'Pekińska kolorowa (papryka, pomidor, ogórek, kukurydza, winegret) 100g - porcja',
        'Sos pieczeniowy litr',
      ],
    },
    {
      item: 'Desery',
      description: 'Zamówienie możliwe po wybraniu minimum 10 szt. lub 10 porcji jednego rodzaju.',
      content: [
        'Krem czekoladowy',
        'Panna cotta',
        'Tiramisu',
        'Crème brûlée',
        'Szaszłyki owocowe',
        'Sałatka owocowa',
        'Rolada biszkoptowa ze śmietaną i owocami',
        'Sernik',
        'Chia z musem brzoskwiniowym',
        'Carpaccio owocowe z cukrem ziołowym 4-6 osób',
        'Brownie',
        'Sernik (16 kawałków)',
        'Tort szwarcwaldzki',
        'Tort śmietana, owoce świeże',
        'Tort pavlova',
      ],
    },
  ],
};

const OfferPage = ({ location }) => {
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
        <SEO title="Oferta" pathname={location.pathname} />
        <StyledPageHeaderWrapper pose={visible ? 'visible' : 'hidden'}>
          <PageHeader title="Oferta" subtitle="Kliknij by wyświetlić szczegóły" />
        </StyledPageHeaderWrapper>
        <StyledContentWrapper>
          {/* <SectionWrapper>
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
          </SectionWrapper> */}

          <SectionWrapper>
            <DinnerWrapper>
              <StyledIcon icon={bxCalendar} />
              <HeadingDescription>
                Sprawdź jakie obiady przygotowaliśmy w tym tygodniu
              </HeadingDescription>
              <StyledIcon icon={bxCalendar} />
            </DinnerWrapper>

            <StyledLink fade duration={0.2} to="/oferta/obiady">
              Obiady
            </StyledLink>
          </SectionWrapper>

          <SectionWrapper>
            <MainHeading>Gotowe zestawy</MainHeading>
            <HeadingDescription>
              Gotowy zestaw wraz z ceną, podawany do samodzielnego wyłożenia.
            </HeadingDescription>
            {offerData.foodKit.map(offer => (
              <OfferItem
                key={offer.item}
                item={offer.item}
                description={offer.description}
                content={offer.content}
                price={offer.price}
              />
            ))}
          </SectionWrapper>

          <SectionWrapper>
            <MainHeading>Blachy biesiadne (koryto)</MainHeading>
            <HeadingDescription>
              Blacha biesiadna (koryto) to idealny pomysł na imprezę dla 8-10 osób!
            </HeadingDescription>
            {offerData.sheetMetalBanquet.map(offer => (
              <OfferItem
                key={offer.item}
                item={offer.item}
                description={offer.description}
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
            {/* <MinimalistContactCardWrapper>
              <MinimalistContactCard
                name="Andrzej Słociński"
                tel="605 547 282"
                email="slone@bryzol.pl"
              />
              <MinimalistContactCard
                name="Adam Gembalczyk"
                tel="502 315 715"
                email="slodkie@bryzol.pl"
              />
            </MinimalistContactCardWrapper> */}

            {offerData.cateringOfferList.map(offer => (
              <OfferItem
                key={offer.item}
                item={offer.item}
                description={offer.description}
                content={offer.content}
                price={offer.price}
              />
            ))}
          </SectionWrapper>
        </StyledContentWrapper>
      </StyledWrapper>
      <TelFixedButton />
    </Layout>
  );
};

export default OfferPage;

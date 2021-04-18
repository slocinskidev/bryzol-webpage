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
        { name: 'Polędwiczki wieprzowe z sosem pieprzowym lub grzybowym 6 porcji' },
        { name: 'Udko z kurczak b/k z rozmarynem lub udko z/k z czosnkiem 6szt.' },
        { name: 'Schab z serem wędzonym lub pieczeń 6szt.' },
        { name: 'Sznycelki drobiowe lub kotlet de volaille 6szt.' },
        { name: 'Pierś z kaczki z rozmarynem lub udko 6 porcji' },
        { name: 'Ziemniaki pieczone lub ziemniaki pure z boczkiem 10 porcji.' },
        { name: 'Pęczatto z warzywami lub risotto z grzybami 1kg' },
        { name: 'Kapusta lekka lub kapusta zasmażana 1,5kg' },
      ],
      price: '360 zł',
    },
    {
      item: 'Zestaw przekąsek dla 10 osób',
      description: 'Wyłożone na paterach.',
      content: [
        { name: 'Sakiewki z szynki 16szt.' },
        { name: 'Polędwiczki wieprzowe z suszonymi pomidorami 10szt.' },
        { name: 'Galantynki z nadzieniem pieprzowym 10szt.' },
        { name: 'Jajka z śledziem korzennym 8szt.' },
        { name: 'Łosoś z ajwarem 10szt.' },
        { name: 'Pomidorki koktajlowe z mozarellą 16szt.' },
        { name: 'Tatar wołowy 60g 8szt.' },
        {
          name:
            'Sałatka lekka (mix sałat, pomidor, ogórek, mango, kiełki, pestki, sos winegret) 1 miska',
        },
        { name: 'Brokuły z sosem czosnkowym i prażonymi migdałami 1 miska' },
      ],
      price: '290 zł',
    },
  ],
  sheetMetalBanquet: [
    {
      item: 'Wiosenna',
      description:
        'Podane w korycie drewnianym lub podgrzewaczu lub do samodzielnego wyłożenia - proszę o wybór przy zamówieniu.',
      content: [
        { name: 'Udko b/k z rozmarynem 6szt.' },
        { name: 'Kotleciki drobiowe 10szt.' },
        { name: 'Skrzydełka w miodzie 10szt.' },
        { name: 'Schab z serem wędzonym 6szt.' },
        { name: 'Pieczeń wieprzowa 1kg (8 plastrów)' },
        { name: 'Paluszki serowe 6szt.' },
        { name: 'Fasolka szparagowa 700g' },
        { name: 'Makaron rurki z sosem czosnkowym 1,5kg' },
      ],
      price: '320 zł',
    },
    {
      item: 'Letnia',
      description:
        'Podane w korycie drewnianym lub podgrzewaczu lub do samodzielnego wyłożenia - proszę o wybór przy zamówieniu.',
      content: [
        { name: 'Udko b/k z rozmarynem 5szt.' },
        { name: 'Pierogi ruskie 15szt.' },
        { name: 'Karkówka z grilla 6szt.' },
        { name: 'Kiełbaski pieczone 6szt.' },
        { name: 'Filet z kurczaka z grilla 6szt.' },
        { name: 'Ziemniaki faszerowane z boczkiem 10szt.' },
        { name: 'Schabowy 5szt.' },
        { name: 'Schab z serem wędzonym 5szt.' },
        { name: 'Brokuły z sosem serowym 800g' },
        { name: 'Ziemniaki z koperkiem i masłem 1,5kg' },
      ],
      price: '350 zł',
    },
    {
      item: 'Jesienna',
      description:
        'Podane w korycie drewnianym lub podgrzewaczu lub do samodzielnego wyłożenia - proszę o wybór przy zamówieniu.',
      content: [
        { name: 'Pieczeń wieprzowa 1kg (8 plastrów)' },
        { name: 'Udko z kurczaka z/k z czosnkiem 5szt.' },
        { name: 'Skrzydełka pikantne w miodzie 10szt.' },
        { name: 'Rolada wieprzowa 5szt.' },
        { name: 'Schab po cygańsku (cebula, szynka, panierka) 10szt.' },
        { name: 'Pieczarki panierowane 10szt.' },
        { name: 'Kaszanka swojska z cebulą w folii 5szt.' },
        { name: 'Kapusta zasmażana 1,5kg' },
        { name: 'Ziemniaki pieczone z ziołami 1,5kg' },
      ],
      price: '300 zł',
    },
    {
      item: 'Zimowa',
      description:
        'Podane w korycie drewnianym lub podgrzewaczu lub do samodzielnego wyłożenia - proszę o wybór przy zamówieniu.',
      content: [
        { name: 'Pieczeń wieprzowa 1kg (ok. 8 plastrów)' },
        { name: 'Golonki pieczone b/k 1kg (ok. 3szt.)' },
        { name: 'Kaszanka swojska z cebulą w folii 5szt.' },
        { name: 'Schab z serem wędzonym 6szt.' },
        { name: 'Śliwki w boczku 20szt.' },
        { name: 'Kiełbaski pieczone 6szt.' },
        { name: 'Sznycelki drobiowe 10szt.' },
        { name: 'Kapusta zasmażana 1,5kg' },
        { name: 'Ziemniaki pieczone z ziołami 1,5kg' },
        { name: 'Pieczarki faszerowane mięsem 10szt.' },
      ],
      price: '330 zł',
    },
    {
      item: 'Śląska',
      description:
        'Podane w korycie drewnianym lub podgrzewaczu lub do samodzielnego wyłożenia - proszę o wybór przy zamówieniu.',
      content: [
        { name: 'Rolada wołowa 6szt.' },
        { name: 'Udko z kaczki 6szt.' },
        { name: 'Karminadle 6szt.' },
        { name: 'Kotlet de volaille 6szt.' },
        { name: 'Pieczeń 600g' },
        { name: 'Kaszanka swojska z cebulą w folii 6szt.' },
        { name: 'Kluski śląskie 10 porcji' },
        { name: 'Kapusta czerwona 1kg' },
        { name: 'Colesław 1kg' },
        { name: 'Sos pieczeniowy 1l' },
      ],
      price: '400 zł',
    },
    {
      item: 'Mięsna',
      description:
        'Podane w korycie drewnianym lub podgrzewaczu lub do samodzielnego wyłożenia - proszę o wybór przy zamówieniu.',
      content: [
        { name: 'Schab z serem wędzonym 5szt.' },
        { name: 'Polędwiczki wieprzowe z sosem pieprzowym 5 porcji' },
        { name: 'Kotleciki drobiowe 5szt.' },
        { name: 'Roladka z drobiowa ze szpinakiem w boczku 5szt.' },
        { name: 'Rolada wołowa 5szt.' },
        { name: 'Pierś z kaczki z rozmarynem lub udko 5 porcji/szt.' },
      ],
      price: '320 zł',
    },
    {
      item: 'Wegetariańska',
      description:
        'Podane w korycie drewnianym lub podgrzewaczu lub do samodzielnego wyłożenia - proszę o wybór przy zamówieniu.',
      content: [
        { name: 'Ziemniaki faszerowane z serem i ziołami 10szt.' },
        { name: 'Cukinia z suszonymi pomidorami i mozarellą 10szt.' },
        { name: 'Pieczarki panierowane 10szt.' },
        { name: 'Szaszłyki warzywne 10szt.' },
        { name: 'Pierogi ruskie opiekane 10szt.' },
        { name: 'Paluszki serowe 10szt.' },
        { name: 'Makaron rurki z sosem serowym 1.5kg' },
      ],
      price: '280 zł',
    },
  ],
  cateringOfferList: [
    {
      item: 'Ciepłe dania',
      description:
        'Zazwyczaj 100g to szt. lub porcja. Zamówienie możliwe po wybraniu minimum 5 szt. lub 5 porcji jednego rodzaju.',
      content: [
        { name: 'Pieczeń z karczku z ziołami porcja', price: '10 zł' },
        { name: 'Polędwiczki wieprzowe z sosem grzybowym lub pieprzowym porcja', price: '13 zł' },
        { name: 'Polędwiczka wieprzowa po włosku (ser, sos pomidorowy) porcja', price: '13 zł' },
        { name: 'Udko z kaczki z rozmarynem pieczone lub w pomarańczach szt.', price: '13 zł' },
        { name: 'Pierś z kaczki z rozmarynem porcja', price: '12 zł' },
        { name: 'Pierś z kurczaka z masłem ziołowym i serem camembert szt.', price: '11 zł' },
        {
          name: 'Kurczak Caprese (grillowana pierś, mozzarella, pomidor, bazylia) szt.',
          price: '10 zł',
        },
        { name: 'Filet z indyka w migdałach szt.', price: '11 zł' },
        { name: 'Skrzydełka BBQ szt.', price: '2 zł' },
        { name: 'Skrzydełka słodko-ostre szt.', price: '3 zł' },
        {
          name: 'Kotlet de volaille (masło, pierś z kurczaka, natka pietruszki, panierka) szt.',
          price: '12 zł',
        },
        { name: 'Szwajcar (schab, ser, panierka) szt.', price: '12 zł' },
        { name: 'Schab z pieczarkami (panierka) szt.', price: '11 zł' },
        { name: 'Schab z serem wędzonym (sauté) szt.', price: '12 zł' },
        { name: 'Indyk ze szpinakiem w szynce dojrzewającej szt.', price: '12 zł' },
        {
          name: 'Roladka z kurczaka z farszem warzywno-serowym (panierowane) szt.',
          price: '10 zł',
        },
        { name: 'Rolada wieprzowa (farsz krojony) szt.', price: '11 zł' },
        { name: 'Rolada wołowa (farsz krojony) szt.', price: '15 zł' },
        {
          name: 'Golonka po bawarsku pieczona duszona w warzywach ok. 250g - szt.',
          price: '14 zł',
        },
        { name: 'Udko z kurczaka b/k faszerowane z suszonymi pomidorami szt.', price: '14 zł' },
        { name: 'Udko z kurczaka b/k z rozmarynem szt.', price: '7 zł' },
        { name: 'Udko z kurczaka z/k z czosnkiem', price: '7 zł' },
        { name: 'Stek z karkówki z grilla (200g przed grillowaniem) szt.', price: '15 zł' },
        {
          name: 'Wołowina z orzechami nerkowca i selerem naciowym (kuchnia orientalna) porcja',
          price: '15 zł',
        },
        { name: 'Królik w śmietanie (skoki) porcja', price: '15 zł' },
        { name: 'Żeberka pieczone 150g - szt.', price: '14 zł' },
      ],
    },
    {
      item: 'Ryby',
      description: 'Na zamówienie, minimum 1 szt.',
      content: [
        { name: 'Łosoś ze szpinakiem 150g - szt.', price: '20 zł' },
        { name: 'Miruna w sosie maślane cytrynowym 120g - szt.', price: '15 zł' },
        { name: 'Krewetki w sosie czosnkowym 100g - porcja ', price: '15 zł' },
        { name: 'Roladka z soli ze szpinakiem i serem pleśniowym 100g - porcja ', price: '15 zł' },
      ],
    },
    {
      item: 'Pieczenie',
      description: 'Na zamówienie, minimum 1 szt.',
      content: [
        { name: 'Udziec wieprzowy pieczony 10-12kg 40-50 osób ', price: '50 zł/1kg' },
        { name: 'Indyk b/k faszerowany mięsem 15-20 osób', price: '300-320 zł' },
        { name: 'Kaczka b/k faszerowana mięsem i owocami 8-10 osób', price: '150 zł' },
        {
          name: 'Polędwica wołowa w ziołach pieczona w całości podana z grzybami  8-10 osób',
          price: '250-280 zł',
        },
      ],
    },
    {
      item: 'Zapiekanki',
      description: 'Na zamówienie, minimum 1 szt. Podawane w foremce 30cm x 20cm. Dla 6-8 osób.',
      content: [
        {
          name:
            'Cukinia zapiekana z pomidorami (cukinia, sos pomidorowy, sos beszamelowy, ser) 1szt.',
          price: '70 zł',
        },
        {
          name: 'Musaka (bakłażan, sos beszamelowy, sos mięsny z cynamonem, ser) 1szt.',
          price: '90 zł',
        },
        {
          name:
            'Lasagne ze szpinakiem (makaron, szpinak, feta, lazur, sos beszamelowy, zioła, mozarella) 1szt.',
          price: '80 zł',
        },
      ],
    },
    {
      item: 'Wegetariańskie',
      description: 'Na zamówienie, minimum 5 szt.',
      content: [
        {
          name: 'Paluch serowy (ser żółty 50g, panierka) 1szt.',
          price: '3 zł',
        },
        {
          name: 'Paluch z serem mozarella 1szt.',
          price: '2 zł',
        },
        {
          name: 'Pikantne papryczki panierowane nadziewane serem 100g - 1szt.',
          price: '8 zł',
        },
      ],
    },
    {
      item: 'Zupy',
      description:
        'Zamówienie możliwe po wybraniu minimum 5 porcji zupy jednego rodzaju (1 porcja - 350ml).',
      content: [
        { name: 'Krem z brokuł z grzankami', price: '6 zł' },
        { name: 'Krem pieczarkowy z groszkiem ptysiowym', price: '5 zł' },
        { name: 'Krem szpinakowy ze śmietanką i prażonymi migdałami', price: '7 zł' },
        { name: 'Krem pomidorowy z mozarellą, grzankami', price: '8 zł' },
        { name: 'Krem cebulowy z grzankami', price: '6 zł' },
        { name: 'Krem z dyni (sezonowo - jesień oraz zima)', price: '6 zł' },
        { name: 'Żurek', price: '8 zł' },
        {
          name:
            'Zupa meksykańska (mięso mielone, mięso z kurczaka, fasola, kukurydza, papryka, pomidory)',
          price: '8 zł',
        },
        { name: 'Zupa gulaszowa (wieprzowina, ziemniaki, ogórek)', price: '10 zł' },
        { name: 'Bogracz (wołowina, kluseczki, papryka)', price: '15 zł' },
        {
          name: 'Zupa toskańska z łososiem (cukinia, pomidory, zioła, łosoś świeży)',
          price: '9 zł',
        },
        { name: 'Zupa tajska z mleczkiem kokosowym (pikantna)', price: '15 zł' },
        { name: 'Rosół z makaronem', price: '6 zł' },
        { name: 'Zupa grzybowa', price: '7 zł' },
        { name: 'Zupa serowa ', price: '7 zł' },
        { name: 'Grochówka', price: '8 zł' },
        { name: 'Gazpacho', price: '9 zł' },
        { name: 'Chłodnik litewski', price: '7 zł' },
      ],
    },
    {
      item: 'Przekąski zimne',
      description: 'Zamówienie możliwe po wybraniu minimum 5 szt. lub 5 porcji jednego rodzaju.',
      content: [
        { name: 'Ruloniki z szynki z nadzieniem grzybowym lub chrzanowym szt.', price: '2 zł' },
        { name: 'Ruloniki z sera żółtego z pastą orzechową szt.', price: '2 zł' },
        { name: 'Jajka faszerowane pieczarkami szt.', price: '3 zł' },
        { name: 'Jajka faszerowane pastą łososiowa szt.', price: '3.50 zł' },
        { name: 'Tatar śledziowy na chlebie tostowym szt.', price: '2 zł' },
        { name: 'Tatar z łososia podany na liściu sałaty 40g - szt.', price: '6 zł' },
        { name: 'Tatar wołowy z ogórkiem i cebulą 60g - szt.', price: '8 zł' },
        { name: 'Śledź korzenny na jajku szt.', price: '3.50 zł' },
        { name: 'Śledź z bakaliami 100g - porcja', price: '4.50 zł' },
        { name: 'Śledź w śmietanie 100g - porcja', price: '4 zł' },
        { name: 'Łosoś z ajwarem szt.', price: '3.50 zł' },
        {
          name: 'Polędwiczka wieprzowa nadziewana pomidorami suszonymi 1.5 plastra - porcja',
          price: '3.50 zł',
        },
        { name: 'Pomidorki koktajlowe z mozzarellą (koreczek) szt.', price: '2 zł' },
        { name: 'Pomidorki faszerowane pastą z łososia szt.', price: '2.50 zł' },
        { name: 'Muszle makaronowe nadziewane farszem warzywno-mięsnym szt.', price: '3.50 zł' },
        { name: 'Tortilla z kurczakiem (pokrojona na kawałki - jeden kęs) szt.', price: '3 zł' },
        {
          name: 'Pikantny kurczak na patyku z sosem czosnkowym lub sosem słodko ostrym szt.',
          price: '2 zł',
        },
        {
          name:
            'Rozbef lub pierś z kaczki z konfiturą z cebuli czerwonej i wiśniami 1.5 plastra - porcja',
          price: '4 zł',
        },
        { name: 'Ryba po grecku 100g - porcja', price: '7 zł' },
        { name: 'Galaretka drobiowa szt.', price: '6 zł' },
        { name: 'Galaretka wieprzowa na polędwiczkach szt.', price: '7 zł' },
        { name: 'Galaretka z kaczki i żurawiną szt.', price: '9 zł' },
        { name: 'Krewetki z melonem i ogórkiem (koreczek) szt.', price: '3 zł' },
        { name: 'Tartinki (małe kanapeczki z wędliną, jarskie, z rybą) szt.', price: '3.50 zł' },
        {
          name: 'Koreczki mix (ser, kurczak, śledź, łosoś wędzony, owoce, itp.) szt.',
          price: '1.50 zł',
        },
        {
          name:
            'Sakiewki z szynki dojrzewającej (ser pleśniowy, kiełki rzodkiewki, pasta chrzanowa) szt.',
          price: '3.50 zł',
        },
        { name: 'Pasta z makreli w papierze ryżowym z prażonymi pestkami szt.', price: '3.50 zł' },
        {
          name: 'Pasztet pieczony z konfiturą z czerwonej cebuli i wiśniami 30g - porcja',
          price: '3 zł',
        },
        {
          name: 'Omlet z łososiem wędzonym (pokrojony na kawałki - jeden kęs) szt.',
          price: '2 zł',
        },
        { name: 'Mini hamburgery z wołowiną (wołowina przed obróbką 60g) szt.', price: '6 zł' },
        { name: 'Pierożki (mięsne lub warzywne) na sałatce jarzynowej szt.', price: '3 zł' },
        { name: 'Kuleczki mięsne z tzatzykami szt.', price: '3 zł' },
        { name: 'Galantynka drobiowa z nadzieniem pieprzowym szt.', price: '3.50 zł' },
      ],
    },
    {
      item: 'Sałatki',
      description:
        'Zamówienie możliwe po wybraniu minimum 1 miski (1 miska jest liczona dla 5-7 osób).',
      content: [
        {
          name:
            'Sałatka lekka - mix sałat, pomidorki, mango, kiełki, ogórek, pestki prażone, sos winegret',
          price: '37 zł',
        },
        {
          name:
            'Sałatka twarda - cukinia, pomidor, papryka, kiełki smażone, ser feta, zioła, czosnek, cytryna',
          price: '35 zł',
        },
        { name: 'Sałatka caprese - pomidor, mozarella, bazylia, oliwa', price: '30 zł' },
        {
          name:
            'Sałatka grecka - sałata, oliwki, papryka, cebula, pomidor, feta, ogórek, sos winegret',
          price: '35 zł',
        },
        {
          name:
            'Sałatka z kurczakiem - sałata, pomidorki, kukurydza, papryka, ogórek, winogrono, sos czosnkowy',
          price: '37 zł',
        },
        {
          name: 'Sałatka fasolkowa - fasola szparagowa, cebula, pomidor, migdały, sos winegret',
          price: '28 zł',
        },
        {
          name:
            'Sałatka lazur - roszponka, ser, pomidor, cebula, oliwki, papryka, orzechy, sos jogurtowy',
          price: '35 zł',
        },
        {
          name:
            'Sałatka z kaczką - rukola, pomidory suszone, pomarańcze, orzechy, parmezan, kaczka, krem balsamiczny',
          price: '40 zł',
        },
        { name: 'Brokuły z sosem czosnkowym i prażonymi migdałami', price: '28 zł' },
        { name: 'Sałatka jarzynowa 1kg', price: '35 zł' },
      ],
    },
    {
      item: 'Dodatki',
      description: 'Zamówienie możliwe po wybraniu minimum 5 szt. lub 5 porcji jednego rodzaju.',
      content: [
        { name: 'Ryż z groszkiem i marchewką (na ciepło) 100g - porcja', price: '4 zł' },
        {
          name:
            'Kluski śląskie jasne/ciemne (proszę o informację czy ugotowane lub nie?) 200g - porcja',
          price: '5 zł',
        },
        { name: 'Ziemniaki pieczone 150g - porcja', price: '5 zł' },
        { name: 'Ziemniaki purée z boczkiem 100g - porcja', price: '3 zł' },
        { name: 'Kasza gryczana z czosnkiem i natką pietruszki 100g - porcja', price: '3 zł' },
        { name: 'Pęczatto z warzywami 100g - porcja', price: '4 zł' },
        { name: 'Makaron penne z sosem serowym 200g - porcja', price: '5 zł' },
        { name: 'Ziemniaki gratin (lazania ziemniaczana) 60g - szt.', price: '5 zł' },
        { name: 'Ziemniaki faszerowane z boczkiem i serem (pół ziemniaka) szt.', price: '4 zł' },
        { name: 'Talarki ziemniaczane zapiekane (boczek, zioła, ser) szt.', price: '3 zł' },
        { name: 'Kapusta lekka (kapusta świeża – na ciepło) 100g - porcja', price: '4 zł' },
        { name: 'Kapusta zasmażana (kapusta kiszona, boczek) 100g - porcja', price: '5 zł' },
        { name: 'Kapusta czerwona z boczkiem (lub bez) 100g - porcja', price: '3 zł' },
        {
          name: 'Bukiet warzyw (brokuły, kalafior, fasolka, marchew) 100g - porcja',
          price: '5 zł',
        },
        { name: 'Marchewka mini z sosem serowym (na ciepło) 100g - porcja', price: '5 zł' },
        { name: 'Brokuły z sosem czosnkowym (na ciepło) 100g - porcja', price: '5 zł' },
        { name: 'Marchewka z pomarańczami i bananem (na zimno) 100g - porcja', price: '3 zł' },
        {
          name: 'Coleslaw (kapusta, cebula, chrzan, majonez, na zimno) 100g - porcja',
          price: '3 zł',
        },
        {
          name: 'Pekińska kolorowa (papryka, pomidor, ogórek, kukurydza, winegret) 100g - porcja',
          price: '3 zł',
        },
        {
          name: 'Buraczki zasmażane z tymiankiem 100g - porcja',
          price: '5 zł',
        },
        {
          name: 'Buraczki tarte z chrzanem 100g - porcja',
          price: '3 zł',
        },
        { name: 'Sos pieczeniowy litr', price: '10 zł' },
      ],
    },
    // {
    //   item: 'Mini deserki / finger food',
    //   description: 'Zamówienie możliwe po wybraniu minimum 10 szt. jednego rodzaju',
    //   content: [
    //     { name: 'Krem czekoladowy 1 szt.', price: '4.50 zł' },
    //     { name: 'Panna cotta 1 szt.', price: '4.50 zł' },
    //     { name: 'Tiramisu 1 szt.', price: '4.50 zł' },
    //     { name: 'Szaszłyki owocowe 1 szt.', price: '4.50 zł' },
    //     { name: 'Sałatka owocowa 1 szt.', price: '4.50 zł' },
    //     { name: 'Chia z musem brzoskwiniowym 1 szt.', price: '4.50 zł' },
    //     { name: 'Brownie 1 szt.', price: '4.50 zł' },
    //   ],
    // },
    // {
    //   item: 'Desery / torty / ciasta',
    //   description: 'Zamówienie możliwe po wybraniu minimum 1 szt. Ceny zależne od wielkości.',
    //   content: [
    //     {
    //       name: 'Rolada biszkoptowa ze śmietaną i owocami (min. 1kg, cena za 1kg)',
    //       price: '45 zł',
    //     },
    //     { name: 'Carpaccio owocowe z cukrem ziołowym 4-6 osób', price: '30 zł' },
    //     { name: 'Sernik (16 kawałków - szt.)', price: '80 zł' },
    //     { name: 'Tort szwarcwaldzki', price: 'mały 100 zł, średni 120 zł, duży 150 zł' },
    //     {
    //       name: 'Tort ze śmietaną i świeżymi owocami (napis, opłatek, zamówienia indywidualne)',
    //       price: 'mały: 80-90 zł, średni: 100-130 zł, duży: od 130 zł',
    //     },
    //     {
    //       name: 'Pavlova ze śmietaną i serkiem mascarpone i świezymi owocami',
    //       price: 'mała 100 zł, średnia 130 zł, duża 160 zł',
    //     },
    //   ],
    // },
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

            <StyledLink fade duration={0.2} to="/oferta/ciasto-ogniowe">
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
            {offerData.foodKit.map((offer) => (
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
            {offerData.sheetMetalBanquet.map((offer) => (
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
            {offerData.cateringOfferList.map((offer) => (
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

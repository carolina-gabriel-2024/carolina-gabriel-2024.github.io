import * as React from 'react';

import { styled } from '../stitches.config';
import { BoxCss } from './style/BoxCss';
import { renderAsDesktop, renderAsMobile } from './style/Mobile';

export const ShuffledImageList = [
  {
    key: '/bilder/norway_kiss.jpg',
    iframe: false,
    text: 'Från Frieriet Utanför Tromsö i Norge, 2023-10-31',
  },
  {
    key: '/bilder/island_hastar.HEIC',
    iframe: false,
    text: 'Rida islandshästar i Halland, 2021-10-31',
  },
  {
    key: '/bilder/combo0.jpg',
    iframe: false,
    text: 'Kollage med lite olika äventyr, 2017 - 2021',
  },
  {
    key: '/bilder/combo1.jpg',
    iframe: false,
    text: 'Kollage med bilder bröllop, 2017 - 2019',
  },
  {
    key: '/bilder/combo2.jpg',
    iframe: false,
    text: 'Kollage från Vår Cuba-resa, 2017 - 2018',
  },
  {
    key: '/bilder/norge0.HEIC',
    iframe: false,
    text: 'Från Frieri-resan Utanför Tromsö i Norge, 2023-11-03',
  },
  {
    key: '/bilder/bygga_bo.jpg',
    iframe: false,
    text: 'Skrivit på kontrakt för huset!, sommaren 2020',
  },
  {
    key: '/bilder/bjorne.jpg',
    iframe: false,
    text: 'Besök på SVT och Björne, 2019',
  },
  {
    key: '/bilder/brollis.jpg',
    iframe: false,
    text: 'Glada på Erik och Emelies Bröllop, 2018',
  },
  {
    key: '/bilder/klattra_norge.HEIC',
    iframe: false,
    text: 'Bergspromenad i Jotunheimen, 2019',
  },
  {
    key: '/bilder/vinje.HEIC',
    iframe: false,
    text: 'Varma och glada på Vinjerock, 2019',
  },
  {
    key: '/bilder/oldrick.HEIC',
    iframe: false,
    text: 'Lyxig läsk, Varför inte?',
  },
  {
    key: '/bilder/vinje.HEIC',
    iframe: false,
    text: 'Glada och dräggiga på Vinjerock, 2019',
  },
  {
    key: '/bilder/cypern_drink.HEIC',
    iframe: false,
    text: 'Smoothies på Cypern, Okt 2021',
  },
  {
    key: '/bilder/cypern_bad.HEIC',
    iframe: false,
    text: 'Snorkling på Cypern, Okt 2021',
  },
  {
    key: '/bilder/blasjon.HEIC',
    iframe: false,
    text: 'Skotertur med Ture på Stora Blåsjön, Påsk 2022',
  },
  {
    key: '/bilder/bal.PNG',
    iframe: false,
    text: 'Glada på vårbal , 2018',
  },
  {
    key: '/bilder/blasjon_dal.HEIC',
    iframe: false,
    text: 'Naturpromenad i Bjurälvens naturreservat, 2023',
  },
  {
    key: '/bilder/blasjon_vatten.HEIC',
    iframe: false,
    text: 'Forsskådning längs Vildmarksvägen, 2023',
  },
  {
    key: '/bilder/danmark.JPG',
    iframe: false,
    text: 'Turistbild i Köpenhamn! ~ 2018',
  },
  {
    key: '/bilder/osterike.JPG',
    iframe: false,
    text: 'Parkhäng i Wien! ~ 2019',
  },
  {
    key: '/bilder/cypern_sol.JPG',
    iframe: false,
    text: 'Grottskådning på Cypern, 2021',
  },
  {
    key: '/bilder/norge_berg.JPG',
    iframe: false,
    text: 'Bergspromenad i Jotunheimen, 2019',
  },
]
  .map((value) => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value);

export const ImgCard = styled('div', {
  ...BoxCss,
  paddingBottom: '0px',
});
export const ImgCardForm = styled('div', {
  ...BoxCss,
  paddingBottom: '0px',
  paddingLeft: '0px',
  paddingRight: '0px',
});

export const SideImgCard = styled('div', {
  ...BoxCss,
  marginBottom: '10px',
  marginTop: '0px',
  flex: '1',
});

export const SideImg = styled('img', {
  width: '100%',
  height: '400px',
  objectFit: 'cover',
});

export const SideIframe = styled('iframe', {
  width: '100%',
  height: '220px',
  objectFit: 'cover',
});

export const Img = styled('img', {
  width: '100%',
  height: '50%',
  objectFit: 'contain',
});
export const ImgText = styled('div', {
  padding: '0px',
  contentFit: 'contain',
  height: 'fit-content',
  margin: '5px 0px 0px 0px',
  color: 'Grey',
  fontFamily: 'Papyrus',
});

export const SingleImageCard: React.VFC = () => {
  let i = ShuffledImageList[0];
  if (renderAsMobile) {
    return (
      <ImgCard>
        <Img src={i.key} />
        <ImgText>{i.text}</ImgText>
      </ImgCard>
    );
  } else {
    return <span></span>;
  }
};

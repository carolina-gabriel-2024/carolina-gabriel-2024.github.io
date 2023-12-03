import * as React from 'react';

import { styled } from '../stitches.config';
import { BoxCss } from './style/BoxCss';
import { renderAsDesktop, renderAsMobile } from './style/Mobile';

export const ShuffledImageList = [
  {
    key: '/norway_kiss.jpg',
    iframe: false,
    text: 'Från Frieriet Utanför Tromsö i Norge, 2023-10-31',
  },
  {
    key:
      'https://lh3.googleusercontent.com/pw/ADCreHcVmrjHPaT61RJ8mJxM8SKfmeUKcub-YCcJw-VpgMnAQeJx--T0MSpIn6Gsya-kEmxZ81XbeN284IUIlKPlDNQ59h7RYHCHQyve468SnxSTkjRsHgmCbCF0OIv_sr1xXCleZ-xmwaVCTF_xeBMHg3BEKw=w1292-h969-s-no-gm',
    iframe: false,
    text: 'Kotte. 2023',
  },
  {
    key:
      'https://drive.google.com/file/d/1M6UeDpUIK8E0zl3sfNj3IiwDEg287m9D/preview',
    iframe: true,
    text: 'Roadtrip i Norge, 2021',
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
  height: '220px',
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

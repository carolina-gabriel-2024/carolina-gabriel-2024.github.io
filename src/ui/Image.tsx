import { styled } from '../stitches.config';
import { BoxCss } from './style/BoxCss';

export const ShuffledImageList = [
  {
    key: '/norway_kiss.jpg',
    text: 'Från Frieriet Utanför Tromsö i Norge, 2023-10-31',
  },
  {
    key: '/norway_kiss.jpg',
    text: 'Frieriet Utanför Tromsö i Norge, 2023-10-31',
  },
  { key: '/norway_kiss.jpg', text: 'Utanför Tromsö i Norge, 2023-10-31' },
  { key: '/norway_kiss.jpg', text: 'Tromsö i Norge, 2023-10-31' },
  { key: '/norway_kiss.jpg', text: 'i Norge, 2023-10-31' },
  { key: '/norway_kiss.jpg', text: 'Norge, 2023-10-31' },
  { key: '/norway_kiss.jpg', text: '2023-10-31' },
  { key: '/norway_kiss.jpg', text: '10-31' },
  { key: '/norway_kiss.jpg', text: '31' },
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

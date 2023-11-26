import { styled } from '../stitches.config';
import { BoxCss } from './style/BoxCss';

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
  maxHeight: '300px',
  marginLeft: '18px',
  marginBottom: '18px',
  flex: '1',
});

export const SideImg = styled('img', {
  width: '100%',
  height: '220px',
  objectFit: 'cover',
});

export const Img = styled('img', {
  width: '100%',
  height: '20%',
  objectFit: 'contain',
});
export const ImgText = styled('p', {
  margin: '5px 0px 0px 0px',
  color: 'Grey',
  fontFamily: 'Papyrus',
});

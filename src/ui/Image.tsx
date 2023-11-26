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

export const Img = styled('img', {
  width: '100%',
});
export const ImgText = styled('p', {
  margin: '5px 0px 0px 0px',
  color: 'Grey',
  fontFamily: 'Papyrus',
});

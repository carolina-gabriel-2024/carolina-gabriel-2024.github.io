import * as React from 'react';
import { P, H2 } from '../../ui/Paragraph';
import { MapComponent } from '../MapComponent';
import { styled } from '../../stitches.config';
import { ImgCard, ImgText } from '../../ui/Image';

export const Plats: React.VFC = () => (
  <div>
    <H2>Info: Plats!</H2>
    <P>Text om plats</P>
    <P>Årås kvarn</P>
    <div className="google-map">
      <ImgCard>
        <MapComponent />
        <ImgText>Årås Kvarn är en del av Svenska Turistföreningen.</ImgText>
      </ImgCard>
    </div>
  </div>
);

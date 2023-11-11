import * as React from 'react';
import { P } from '../../ui/Paragraph';
import { MapComponent } from '../MapComponent';
import { styled } from '../../stitches.config';

export const Plats: React.VFC = () => (
  <div>
    <P>Info: Plats!</P>
    <P>Årås kvarn</P>
    <div className="google-map">
      <MapComponent />
    </div>
  </div>
);

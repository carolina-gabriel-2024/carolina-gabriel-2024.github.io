import * as React from 'react';
import { P, H2, H3 } from '../../ui/Paragraph';
import { styled } from '../../stitches.config';
import { SingleImageCard } from '../../ui/Image';
export const Present: React.VFC = () => (
  <div>
    <H2>Bröllopsgåvor</H2>
    <P>Gällande bröllopsgåvor så önskar vi oss stöd till bröllopsresan.</P>

    <P>Bröllopsresan bär av mot Peru och Equador i Oktober.</P>

    <P>
      <H3>Koordinering</H3>
      För att undvika distraktioner av att telefonen skulle vibrera under
      vigsel, middag eller efterfest så har vi bett Carolinas mamma Christina
      Hansson att hjälpa oss att vara mottagare och revisor for eventuella
      gåvor. På så vis kommer vi i efterhand att få veta vilka som har skickat
      en gåva så att vi kan ta oss tiden och tacka avsändarna.
    </P>
    <P>Christina Hansson - 073 682 66 55</P>
    <P>Lämna gärna en hälsning om vad ni tycker att vi borde hinna med!</P>

    <SingleImageCard />
  </div>
);

import * as React from 'react';
import { P, H2, H3 } from '../../ui/Paragraph';
import { styled } from '../../stitches.config';
import { SingleImageCard } from '../../ui/Image';
export const Schema: React.VFC = () => (
  <div>
    <H2>Schema för Helgen!</H2>

    <P>
      <H3>Fredag </H3>
      De som är riktigt taggade och vill hänga med oss hela helgen är välkomna
      redan på fredagen för bad och grill! Drop in när det passar från 16,
      grillen tänds vid 18.
    </P>
    <P>
      <H3>Lördag </H3>
      För de som bor på säteriet kommer det finnas en enklare frukost med
      självservering i Vandrarhemmet, önskar man något speciellt finns ett kök
      och man är välkommen att ta med det man vill.
    </P>

    <P>
      Dagens första hållpunkt är samling 14:00 (återkommer med plats) och vigsel
      14:30. Därefter blir det mingel och fotograferingar. Runt 17/18-tiden är
      det dags för bröllopsmiddag i kvarnen.
    </P>
    <P>
      Lördagen avslutas med dansgolv och fest fram till småtimmarna, så ta med
      dig ett par bra och bekväma dansskor!
    </P>

    <P>
      <H3>Söndag </H3>
      För de gäster som bott över på säteriet eller bor i närheten serveras det
      för dem som vill en brunch innan man far hemåt. De som bor på Säteriet har
      utcheckning kl 10 så därför siktar vi på att dra igång stekplattorna strax
      innan 9 på morgonen och kommer kunna ha lite drop-in mellan då och 11.
    </P>

    <P></P>
    <SingleImageCard />
  </div>
);

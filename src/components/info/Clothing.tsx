import * as React from 'react';
import { P, H2, H3 } from '../../ui/Paragraph';
import { styled } from '../../stitches.config';
import { SingleImageCard } from '../../ui/Image';
export const Clothing: React.VFC = () => (
  <div>
    <H2>Klädkod</H2>
    <P>
      <H3>Kavaj / Sommarfint </H3>
    </P>
    <P>
      Då vi kommer spendera en del tid ute så ta med ett par bekväma skor ni kan
      korsa en äng med.
    </P>
    <P>
      Vid behov av paraply ber vi er välja ett vitt/svart utan tydlig logga.
    </P>
    <P>
      Då Årås Säteri ligger mellan två sjöar och vi har en badtokig brud så är
      det rekommenderat att ta med sig badkläder!
    </P>
    <SingleImageCard />
  </div>
);

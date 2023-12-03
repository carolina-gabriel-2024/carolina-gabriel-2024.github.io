import * as React from 'react';
import { InteractiveLink } from '../ui/InteractiveLink';
import { P, H2 } from '../ui/Paragraph';
import { styled } from '../stitches.config';

const LinkContainer = styled('span', {
  display: 'block',
  margin: '8px 0',
});

const PlatsLink: React.VFC = () => (
  <LinkContainer>
    <InteractiveLink href="/info/plats">Plats</InteractiveLink>
  </LinkContainer>
);

const KladerLink: React.VFC = () => (
  <LinkContainer>
    <InteractiveLink href="/info/kladsel">Klädsel</InteractiveLink>
  </LinkContainer>
);

const BoendeLink: React.VFC = () => (
  <LinkContainer>
    <InteractiveLink href="/info/boende">Boende?</InteractiveLink>
  </LinkContainer>
);

export const Info: React.VFC = () => (
  <div>
    <H2>Info!</H2>
    <P>
      den här sidan kanske försvinner om det andra nämns på startsidan.
      <PlatsLink />
      <KladerLink />
      <BoendeLink />
      transport-grejjer
    </P>
  </div>
);

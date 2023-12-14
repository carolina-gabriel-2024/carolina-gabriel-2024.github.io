import * as React from 'react';
import { InteractiveLink } from '../ui/InteractiveLink';
import { P, H2 } from '../ui/Paragraph';
import { styled } from '../stitches.config';
import { SingleImageCard } from '../ui/Image';
const Toast: React.VFC = () => (
  <InteractiveLink href="mailto:toastmaster.gabrielochcarolina@gmail.com">
    toastmaster.gabrielochcarolina@gmail.com
  </InteractiveLink>
);

export const Talare: React.VFC = () => (
  <div>
    <H2>Talare!</H2>
    <P>
      För att komma i kontakt med våra toastmasters Philip och Julia, skriv
      gärna ett mail till <Toast />
    </P>
    <SingleImageCard />
  </div>
);

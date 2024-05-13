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

export const Vin: React.VFC = () => (
  <div>
    <H2>Vad är det vi dricker?!</H2>
    <P>TODO - Info om vinet och musten här!</P>
    <SingleImageCard />
  </div>
);

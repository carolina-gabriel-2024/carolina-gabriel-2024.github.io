import * as React from 'react';
import { InteractiveLink } from '../ui/InteractiveLink';
import { P, H2 } from '../ui/Paragraph';
import { styled } from '../stitches.config';

export const Kontakt: React.VFC = () => (
  <div>
    <H2>Kontakt!</H2>
    <P>Kontakt-uppgifter till Oss</P>
    <P>...till platsvärdar</P>
    <P>...till taxin</P>
    <P>...till bakispizzan...</P>
  </div>
);

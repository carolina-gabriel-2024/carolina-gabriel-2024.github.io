import * as React from 'react';
import { InteractiveLink } from '../ui/InteractiveLink';
import { P, H2, H3, TD } from '../ui/Paragraph';
import { styled } from '../stitches.config';
import { SingleImageCard } from '../ui/Image';
const Toast: React.VFC = () => (
  <InteractiveLink href="mailto:toastmaster.gabrielochcarolina@gmail.com">
    toastmaster.gabrielochcarolina@gmail.com
  </InteractiveLink>
);

const Mail: React.VFC = () => (
  <InteractiveLink href="mailto:gabrielochcarolina@gmail.com">
    gabrielochcarolina@gmail.com
  </InteractiveLink>
);

export const Kontakt: React.VFC = () => (
  <div>
    <H2>Kontakt!</H2>
    <P>
      För att underlätta så har vi sammanställt lite bra-och-ha kontaktuppgifter
    </P>
    <table>
      <tr>
        <TD>
          <H3>Carolina & Gabriel</H3>
        </TD>
        <TD>
          {' '}
          <Mail />{' '}
        </TD>
        <TD>Frågor om bröllopet, tider, boende, osv</TD>
      </tr>
      <tr>
        <TD>
          <H3>Våra Toastmasters</H3>
        </TD>
        <TD>
          {' '}
          <Toast />{' '}
        </TD>
        <TD>Om du vill hålla tal</TD>
      </tr>
      <tr>
        <TD>
          <H3>Taxin</H3>
        </TD>
        <TD> ...mer info kommer... </TD>
        <TD></TD>
      </tr>
    </table>
    <SingleImageCard />
  </div>
);

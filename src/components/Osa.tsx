import * as React from 'react';
import { InteractiveLink } from '../ui/InteractiveLink';
import { P } from '../ui/Paragraph';
import { styled } from '../stitches.config';

const LinkContainer = styled('span', {
  display: 'block',
  margin: '8px 0',
});

export const Osa: React.VFC = () => (
  <div>
    <P>OSA!</P>
    <P>
      sista dag för svar är xxxx-xx-xx Anmälan görs genom Google forms, antingen
      via LÄNK eller i formuläret nedan: FORM_INSERT_HERE.
    </P>
  </div>
);

import * as React from 'react';
import { InteractiveLink } from '../ui/InteractiveLink';
import { P, H2 } from '../ui/Paragraph';
import { OsaForm } from './OsaForm';
import { styled } from '../stitches.config';

const LinkContainer = styled('span', {
  display: 'block',
  margin: '8px 0',
});
const GoogleFormLink = 'https://forms.gle/KoBeXVx9mqZHiWSc8';

export const Osa: React.VFC = () => (
  <div>
    <H2>OSA!</H2>
    <P>
      sista dag för svar är 2024-02-05 Anmälan görs genom{' '}
      <InteractiveLink href={GoogleFormLink} target="_blank">
        Google forms
      </InteractiveLink>
      , antingen via{' '}
      <InteractiveLink href={GoogleFormLink} target="_blank">
        denna länk
      </InteractiveLink>{' '}
      eller i formuläret nedan:
    </P>
    <OsaForm />
  </div>
);

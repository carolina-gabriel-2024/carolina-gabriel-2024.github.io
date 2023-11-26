import * as React from 'react';
import { InteractiveLink } from '../ui/InteractiveLink';
import { P } from '../ui/Paragraph';
import { OsaForm } from './OsaForm';
import { styled } from '../stitches.config';

const LinkContainer = styled('span', {
  display: 'block',
  margin: '8px 0',
});
const GoogleFormLink = 'https://forms.gle/KoBeXVx9mqZHiWSc8';

export const Osa: React.VFC = () => (
  <div>
    <P>OSA!</P>
    <P>
      sista dag för svar är xxxx-xx-xx Anmälan görs genom{' '}
      <InteractiveLink href={GoogleFormLink}>Google forms</InteractiveLink>,
      antingen via{' '}
      <InteractiveLink href={GoogleFormLink}> LÄNK</InteractiveLink> eller i
      formuläret nedan:
    </P>
    <OsaForm />
  </div>
);

import * as React from 'react';
import { InteractiveLink } from '../ui/InteractiveLink';
import { P, H2 } from '../ui/Paragraph';
import { styled } from '../stitches.config';

const LinkContainer = styled('span', {
  display: 'block',
  margin: '8px 0',
});

const RepoReadmeLink: React.VFC = () => (
  <InteractiveLink href="https://github.com/rafgraph/spa-github-pages#readme">
    repo readme
  </InteractiveLink>
);

export const Talare: React.VFC = () => (
  <div>
    <H2>Talare!</H2>
    <P>Kontakt-uppgifter till Toastmasters</P>
  </div>
);

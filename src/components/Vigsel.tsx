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

export const Vigsel: React.VFC = () => (
  <div>
    <H2>Vigsel!</H2>
    <P>
      Vi kommer att försöka hålla vigselceremonin i ett grönområde i närheten av
      festlokalen. Vigseln planeras att hållas XX:XX, så en samlingstid YY:YY
      rekommenderas. Efter vigseln sker det mingel och fotografering. Det kan
      vara bra att ta med skor för att kunna korsa en äng. Om det mot förmodan
      skulle regna så finns det ett antal backup-planer.
    </P>
  </div>
);

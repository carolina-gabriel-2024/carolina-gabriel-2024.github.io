import * as React from 'react';
import { InteractiveLink } from '../ui/InteractiveLink';
import { P } from '../ui/Paragraph';
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

export const Home: React.VFC = () => (
  <div>
    <P>Vi ska gifta oss!</P>
    <P>
      Please see the <RepoReadmeLink /> for instructions on how to use this
      boilerplate to deploy your own single page app using GitHub Pages.
    </P>
    <P>
      <LinkContainer>
        <InteractiveLink to="/where">Var?</InteractiveLink>
      </LinkContainer>
      <LinkContainer>
        <InteractiveLink to="/when">När?</InteractiveLink>
      </LinkContainer>
      <LinkContainer>
        <InteractiveLink to="/how">Hur?</InteractiveLink>
      </LinkContainer>
      <LinkContainer>
        <InteractiveLink to="/example/two-deep?field1=foo&field2=bar#boom!">
          Example two deep with query and hash
        </InteractiveLink>
      </LinkContainer>
    </P>
  </div>
);

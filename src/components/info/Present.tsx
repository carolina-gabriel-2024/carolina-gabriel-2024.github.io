import * as React from 'react';
import { P, H2 } from '../../ui/Paragraph';
import { styled } from '../../stitches.config';
import { SingleImageCard } from '../../ui/Image';
export const Present: React.VFC = () => (
  <div>
    <H2>Bröllopsgåvor</H2>
    <P>Gällande bröllopsgåvor så önskar vi oss stöd till bröllopsresan.</P>
    <P>Mer info kommer snart.</P>
    <SingleImageCard />
  </div>
);

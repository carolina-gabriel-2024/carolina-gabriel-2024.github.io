import * as React from 'react';
import { InteractiveLink } from '../ui/InteractiveLink';
import { P } from '../ui/Paragraph';
import { styled } from '../stitches.config';

const EmbeddedFormLink =
  'https://docs.google.com/forms/d/e/1FAIpQLSfCUzjN2_Bry5S_3As9YaKZclqyyVVHWJh_YMSRldIWxnw7_A/viewform?embedded=true';

export const OsaForm: React.VFC = () => (
  <iframe src={EmbeddedFormLink} width={500} height={600}>
    Loading...
  </iframe>
);

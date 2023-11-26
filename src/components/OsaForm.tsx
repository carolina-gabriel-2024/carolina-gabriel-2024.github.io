import * as React from 'react';
import { InteractiveLink } from '../ui/InteractiveLink';
import { P } from '../ui/Paragraph';
import { ImgCardForm } from '../ui/Image';
import { styled } from '../stitches.config';

const EmbeddedFormLink =
  'https://docs.google.com/forms/d/e/1FAIpQLSfCUzjN2_Bry5S_3As9YaKZclqyyVVHWJh_YMSRldIWxnw7_A/viewform?embedded=true';

export const OsaForm: React.VFC = () => (
  <ImgCardForm>
    <iframe src={EmbeddedFormLink} width="100%" height={1600}>
      Loading...
    </iframe>
  </ImgCardForm>
);

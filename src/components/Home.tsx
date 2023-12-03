import * as React from 'react';
import { InteractiveLink } from '../ui/InteractiveLink';
import { P, H2 } from '../ui/Paragraph';
import { styled } from '../stitches.config';
import { BoxCss } from '../ui/style/BoxCss';
import {
  Img,
  ImgText,
  ImgCard,
  ShuffledImageList,
  SingleImageCard,
} from '../ui/Image';

const LinkContainer = styled('span', {
  display: 'block',
  margin: '8px 0',
});

const InfoPlatsLink: React.VFC = () => (
  <InteractiveLink href="/info-plats">Information: Plats</InteractiveLink>
);
const InfoKladselLink: React.VFC = () => (
  <InteractiveLink href="/info-kladsel">Information: Klädsel</InteractiveLink>
);
const InfoBoendeLink: React.VFC = () => (
  <InteractiveLink href="/info-boende">Information: Boende</InteractiveLink>
);

const KontaktLink: React.VFC = () => (
  <InteractiveLink href="/kontakt">kontakta folk</InteractiveLink>
);

const VigselLink: React.VFC = () => (
  <InteractiveLink href="/vigsel">Vigseln</InteractiveLink>
);

const AnmalanLink: React.VFC = () => (
  <InteractiveLink href="/osa">Anmälan</InteractiveLink>
);

const TalLink: React.VFC = () => (
  <InteractiveLink href="/talare">Tal & Spex</InteractiveLink>
);

export const Home: React.VFC = () => {
  return (
    <div>
      <H2>Vi ska gifta oss!</H2>

      <P>
        Jag vill skriva här istället. På lördagen 2024-05-25 kommer vi att ha
        bröllopsfirande i Årås Kvarn. Vi kommer att ha utfört en borgerlig
        vigsel i förväg men vi vill ändå hålla en ceremoni med familj och vänner
        på plats. Läs mer under <VigselLink />.
      </P>
      <P>
        Anmälan till bröllopet kommer att senast behöva göras xxxx-xx-xx. Mer om
        detta och vart anmälan görs kan du läsa under <AnmalanLink />.
      </P>
      <P>
        Om du vill hålla tal eller liknande så kan det vara bra att få tag i
        toastmastrarna. Läs mer om det under <TalLink />.
      </P>
      <P>
        prat prat prat, mer info behövs. lorem ipsum osåvidare Läs mer under{' '}
        <InfoPlatsLink />, <InfoKladselLink /> & <InfoBoendeLink />. länk för
        att <KontaktLink />.
      </P>
      <SingleImageCard />
    </div>
  );
};

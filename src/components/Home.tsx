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
  <InteractiveLink href="/info-plats">
    Årås Kvarn utanför Ulricehamn
  </InteractiveLink>
);
const InfoKladselLink: React.VFC = () => (
  <InteractiveLink href="/info-kladsel">Klädkod</InteractiveLink>
);
const InfoKladsel2Link: React.VFC = () => (
  <InteractiveLink href="/info-kladsel">här</InteractiveLink>
);
const InfoBoendeLink: React.VFC = () => (
  <InteractiveLink href="/info-boende">Information: Boende</InteractiveLink>
);
const InfoTransportLink: React.VFC = () => (
  <InteractiveLink href="/info-transport">
    Information: Transport
  </InteractiveLink>
);

const KontaktLink: React.VFC = () => (
  <InteractiveLink href="/kontakt">kontaktuppgifter här</InteractiveLink>
);

const VigselLink: React.VFC = () => (
  <InteractiveLink href="/vigsel">Vigseln</InteractiveLink>
);
const VigselOchMingelLink: React.VFC = () => (
  <InteractiveLink href="/vigsel">Vigsel och mingel</InteractiveLink>
);

const AnmalanLink: React.VFC = () => (
  <InteractiveLink href="/osa">Anmälan</InteractiveLink>
);

const TalLink: React.VFC = () => (
  <InteractiveLink href="/talare">Tal & Spex</InteractiveLink>
);
const SchemaLink: React.VFC = () => (
  <InteractiveLink href="/info-schema">Schema</InteractiveLink>
);

export const Home: React.VFC = () => {
  return (
    <div>
      <H2>Vi ska gifta oss!</H2>

      <P>
        Lördagen den 25e maj 2024 blir det bröllopsfirande på <InfoPlatsLink />.
        Vi kommer att ha utfört en borgerlig vigsel i förväg men vill ändå hålla
        en ceremoni med familj och vänner på plats. Läs mer under <VigselLink />
        . För planen för helgen läs mer under <SchemaLink />
      </P>
      <P>
        Vi gillar barn och de är hjärtligt välkomna på <VigselOchMingelLink />.
        Middagen som börjar vid 18 önskar vi dock spendera i vuxet sällskap utan
        barn, med undantag för ammande spädbarn.
      </P>
      <P>
        Låt oss veta om du kan närvara på festligheterna senaste 4e februari
        2024! Mer om detta och vart anmälan görs kan du läsa under{' '}
        <AnmalanLink />.
      </P>
      <P>
        Vill du hålla tal eller liknande kan det vara bra att få tag i våra
        fantastiska toastmasters Julia och Philip. Läs mer om det under{' '}
        <TalLink />.
      </P>
      <P>
        Det finns ett antal boenden på säteriet som bokas via oss, läs mer under{' '}
        <InfoBoendeLink />. Om man bor på annan ort men behöver ta sig till/från
        säteriet kan det hittas mer under <InfoTransportLink />.
      </P>
      <P>
        För <InfoKladselLink /> under bröllopet, läs mer <InfoKladsel2Link />.
      </P>
      <P>
        Vi har även sammanställt lite <KontaktLink />.
      </P>
      <SingleImageCard />
    </div>
  );
};

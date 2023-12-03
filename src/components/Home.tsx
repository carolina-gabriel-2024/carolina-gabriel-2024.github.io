import * as React from 'react';
import { InteractiveLink } from '../ui/InteractiveLink';
import { P, H2 } from '../ui/Paragraph';
import { styled } from '../stitches.config';
import { BoxCss } from '../ui/style/BoxCss';
import { Img, ImgText, ImgCard, ShuffledImageList } from '../ui/Image';
import { renderAsMobile } from '../ui/style/Mobile';

const LinkContainer = styled('span', {
  display: 'block',
  margin: '8px 0',
});

const InfoLink: React.VFC = () => (
  <InteractiveLink href="/info">Information</InteractiveLink>
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

const ImageBox: React.VFC = () => {
  let i = ShuffledImageList[0];
  return (
    <ImgCard>
      <Img src={i.key} />
      <ImgText>{i.text}</ImgText>
    </ImgCard>
  );
};

export const Home: React.VFC = () => {
  return (
    <div>
      <H2>Vi ska gifta oss!</H2>

      <P>
        På lördagen 2024-05-25 kommer vi att ha bröllopsfirande i Årås Kvarn. Vi
        kommer att ha utfört en borgerlig vigsel i förväg men vi vill ändå hålla
        en ceremoni med familj och vänner på plats. Läs mer under <VigselLink />
        .
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
        <InfoLink />.
      </P>
      {renderAsMobile ? <ImageBox /> : ''}
    </div>
  );
};

import * as React from 'react';
import { P, H2 } from '../../ui/Paragraph';
import { MapComponent } from '../MapComponent';
import { styled } from '../../stitches.config';
import { ImgCard, ImgText } from '../../ui/Image';
import { InteractiveLink } from '../../ui/InteractiveLink';

const ArasHistoria: React.VFC = () => (
  <InteractiveLink href="https://www.arassateri.se/historia/" target="_blank">
    Årås säteri historia
  </InteractiveLink>
);

export const Plats: React.VFC = () => (
  <div>
    <H2>Årås Kvarn</H2>
    <P>
      Carolina är uppvuxen i Tibro = Bron över Tidan, vilket gör platsen extra
      speciell då en av sjöarna i närheten är Tidans start och rinner förbi
      kvarnen.
    </P>
    <P>
      Vi har abonnerat hela Årås Säteri som ligger ett par mil utanför
      Ulricehamn. Såhär skriver de själva om platsen:
    </P>
    <P>
      Välkommen till Årås Kvarn och anrika Årås säteri. Beläget i lilla
      Kölingared i vackra Västergötland, öster om Ätradalen, strax utanför
      Ulricehamn. En oas precis vid ån Tidan, och den perfekta utgångspunkten
      för att upptäcka vår vackra natur- och kulturbygd Årås säteri har anor
      tillbaka till 1500-talet och var på denna tid "häradets förnämsta gods och
      herresäte". Årås har präglats av adelns närvaro under många sekler, och
      ägdes en gång av ätten Gyllenstierna som var riksråd till Vasakungarna.
      Årås kvarn ligger i den lilla byn Kölingared, en vacker oas belägen vid ån
      Tidan där den förbinder sjöarna Jogen och Vållern. Bygden är rik på
      fornminnen och kyrkoruiner och härifrån sträcker sig en vildmarksled från
      öppet odlings-och kulturlandskap till högmosse och gammelskog av
      vildmarkskaraktär. I denna historiska och charmiga miljö bedrivs idag en
      mycket aktiv bygdegårdsverksamhet med allt från logi och café till kurser
      och kulturkulturella evenemang.
    </P>
    <P>
      <ArasHistoria />
    </P>

    <div className="google-map">
      <ImgCard>
        <MapComponent />
        <ImgText>Årås Kvarn är en del av Svenska Turistföreningen.</ImgText>
      </ImgCard>
    </div>
  </div>
);

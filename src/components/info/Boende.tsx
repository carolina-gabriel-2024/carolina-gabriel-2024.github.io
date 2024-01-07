import * as React from 'react';
import { P, H2, H3, TD } from '../../ui/Paragraph';
import { styled } from '../../stitches.config';
import { InteractiveLink } from '../../ui/InteractiveLink';
import { SingleImageCard } from '../../ui/Image';
const Mail: React.VFC = () => (
  <InteractiveLink href="mailto:gabrielochcarolina@gmail.com">
    gabrielochcarolina@gmail.com
  </InteractiveLink>
);

const BoendeBilder: React.VFC = () => (
  <InteractiveLink
    href="https://www.arassateri.se/vandrarhem-mejeriet/"
    target="_blank"
  >
    Bilder från boendet.
  </InteractiveLink>
);

const InfoTransportLink: React.VFC = () => (
  <InteractiveLink href="/info-transport">Transport</InteractiveLink>
);

export const Boende: React.VFC = () => (
  <div>
    <H2>Boende under bröllopshelgen</H2>
    <P>
      Det finns ett antal boenden i det lilla hotellet och vandrarhemmet på
      Säteriet som man kan boka. Eftersom vi har abonnerat hela säteriet har vi
      fått lite rabatt på rummen och därmed görs boende-bokningar via <Mail />.
      Då det tyvärr inte finns rum för alla ser vi gärna att ni går ihop i
      rummen så att så många som möjligt får plats på säteriet. Vi kommer också
      ge förtur till dem som planerar stanna fredag-söndag. Det finns även en
      stor parkering med tillgång till toalett om man vill komma med
      husbil/husvagn/tält utan extra kostnad.
    </P>
    <P>
      Det finns även en stor parkering med tillgång till toalett om någon vill
      komma med husbil/husvagn/tält utan extra kostnad.
    </P>

    <P>
      <BoendeBilder />
    </P>

    <H3>Rum Vandrarhem:</H3>
    <P>
      Alla rum i vandrarhemmet delar på ett par gemensamma badrum med dusch och
      toalett i samma byggnad. I nästan alla rum finns det möjlighet att ställa
      in 1-2 extrasängar, och det finns ca 6st sådana att tillgå på säteriet.
      Man kan hyra lakan/handdukar för 139kr/enhet eller så kan man ta med sig
      egna. Var snälla om meddela detta när ni hör av er om boende.
    </P>
    <table>
      <tbody>
        <tr>
          <TD>Fullt</TD>
          <TD>4-bäddsrum</TD>
          <TD>2 våningsängar</TD>
          <TD>850kr /natt</TD>
          <TD>(1700 fre-sön)</TD>
        </tr>
        <tr>
          <TD></TD>
          <TD>4-bäddsrum</TD>
          <TD>1 dubbelsäng, 1 våningsäng</TD>
          <TD>850kr /natt</TD>
          <TD>(1700 fre-sön)</TD>
        </tr>
        <tr>
          <TD>Fullt</TD>
          <TD>2-bäddsrum</TD>
          <TD>1 våningsäng</TD>
          <TD>550kr /natt</TD>
          <TD>(1100 fre-sön)</TD>
        </tr>
      </tbody>
    </table>
    <P></P>
    <H3>Rum Hotell:</H3>

    <P></P>
    <table>
      <tbody>
        <tr>
          <TD></TD>
          <TD>Nybyggt hotellrum 2023</TD>
          <TD>1 dubbelsäng - eget bad/dusch</TD>
          <TD>1250kr /natt</TD>
          <TD>(2500 fre-sön)</TD>
        </tr>
      </tbody>
    </table>

    <P></P>
    <H3>Övriga:</H3>

    <P>
      För övriga finns det en hel del Airbnb-boenden i närheten och även hotell
      i Ulricehamn som ligger 15-20 minuter bort. Vi har pratat med Ulricehamn
      taxi och förberett dem på att vi kommer ha gäster bröllop på säteriet och
      det skulle inte vara något problem att boka taxi under kvällen/natten. Mer
      info under <InfoTransportLink />.
    </P>
    <P></P>
    <SingleImageCard />
  </div>
);

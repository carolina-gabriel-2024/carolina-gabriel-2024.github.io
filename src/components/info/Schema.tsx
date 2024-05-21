import * as React from 'react';
import { P, H2, H3, Table, TD, TH } from '../../ui/Paragraph';
import { styled } from '../../stitches.config';
import { SingleImageCard } from '../../ui/Image';
export const Schema: React.VFC = () => (
  <div>
    <H2>Schema för Helgen!</H2>

    <P>
      <H3>Fredag </H3>
      De som är riktigt taggade och vill hänga med oss hela helgen är välkomna
      redan på fredagen för bad och grill! Vi kommer att få tillgång till rummen
      kl 14. Annars är det fritt fram att komma när det passar från 13. Grillen
      kommer att tändas vid 18.
    </P>
    <P>Med andra ord: Grill finns att ta av 19:00-21:00 på fredag.</P>

    <P>
      <H3>Lördag </H3>
      För de som bor på säteriet kommer det finnas en enklare frukost med
      självservering i Vandrarhemmet, önskar man något speciellt finns ett kök
      och man är välkommen att ta med det man vill.
    </P>

    <P>
      Dagens första hållpunkt är samling 14:00 och vigsel 14:30. Därefter blir
      det mingel och fotograferingar. Runt 17/18-tiden är det dags för
      bröllopsmiddag i kvarnen.
    </P>
    <Table>
      <tbody>
        <tr>
          <TH>Tid</TH>
          <TH>Händelse</TH>
          <TH>Plats</TH>
          <TH>Information</TH>
        </tr>
        <tr>
          <TD>14:00-14:30</TD>
          <TD>Samling</TD>
          <TD>Vid Vigselplatsen på ängen</TD>
          <TD>
            Vid parkeringen till Säteriet finns en grind till ängen där
            Vigselplatsen är.
          </TD>
        </tr>
        <tr>
          <TD>14:30-15:00</TD>
          <TD>Vigsel</TD>
          <TD>På Vigselplatsen på ängen</TD>
          <TD>
            Var i tid. Vigseln börjar med att brudföljet anländer till ceremonin
            prick 14:30
          </TD>
        </tr>
        <tr>
          <TD>15:00-15:15</TD>
          <TD>Gruppfoto</TD>
          <TD>En utvald plats</TD>
          <TD>
            Hela sällskapet går tillsammans från vigselplatsen till gruppfotot.
          </TD>
        </tr>

        <tr>
          <TD>15:15-17:30</TD>
          <TD>Mingel</TD>
          <TD>Nära dansbanan på säteriet</TD>
          <TD>
            Under den här tiden finns det snittar och dryck, olika lekar och
            fotografen Felix håller i en 'Röda Mattan'-fotografering (denna
            inkluderar att gruppfoton tas).
          </TD>
        </tr>
        <tr>
          <TD>18:30-22:30</TD>
          <TD>Middag</TD>
          <TD>Årås Kvarn, vån 3</TD>
          <TD>Hör med våra Toastmasters Julia & Philip om du har frågor.</TD>
        </tr>
        <tr>
          <TD>22:40-23:00</TD>
          <TD>Baren öppnar / Middagen packas ned</TD>
          <TD>Kvarnen, Vån 1 / Vån 3</TD>
          <TD>
            Drinkar och godis går att hitta på första plan. De som vet, de vet.
          </TD>
        </tr>
        <tr>
          <TD>23:15-23:30</TD>
          <TD>Första Dansen</TD>
          <TD>På dansbanan</TD>
          <TD>Samling utanför kvarnen i god tid innan för att få direktiv.</TD>
        </tr>
        <tr>
          <TD>23:30-Sent</TD>
          <TD>Efterfest</TD>
          <TD>På dansbanan eller Middagslokalen</TD>
          <TD>
            Om vädret tillåter så dansar vi loss ute på dansbanan. Blir det för
            kallt riggar vi upp för dans på våning 3.
          </TD>
        </tr>
        <tr>
          <TD>01:00-02:00</TD>
          <TD>Vickning</TD>
          <TD>I Kvarnen, vån 1</TD>
          <TD>
            För att kunna hålla igång sent in i natten. Det finns chans för
            Norrsken!
          </TD>
        </tr>
      </tbody>
    </Table>
    <P>
      Lördagen avslutas med dansgolv och fest fram till småtimmarna, så ta med
      dig ett par bra och bekväma dansskor!
    </P>

    <P>
      <H3>Söndag </H3>
      För de gäster som bott över på säteriet eller bor i närheten serveras det
      för dem som vill en brunch innan man far hemåt. De som bor på Säteriet har
      utcheckning kl 10 så därför siktar vi på att dra igång stekplattorna strax
      innan 9 på morgonen och kommer kunna ha lite drop-in mellan då och 11.
    </P>

    <P>Med andra ord: Brunch finns att ta av 09:00-11:00 på söndag.</P>
    <SingleImageCard />
  </div>
);

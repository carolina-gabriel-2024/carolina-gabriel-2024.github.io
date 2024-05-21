import * as React from 'react';
import { InteractiveLink } from '../ui/InteractiveLink';
import { P, H2, H3, Table, TD } from '../ui/Paragraph';
import { styled } from '../stitches.config';
import { SingleImageCard } from '../ui/Image';
const VitVin: React.VFC = () => (
  <InteractiveLink href="https://www.bordershop.com/se/vin/vitt-vin/vitt-vin-fran-tyskland/edition-abtei-himmerod-riesling-feinherb-2095508">
    Edition Abtei Himmerod Riesling Feinherb Mosel
  </InteractiveLink>
);

const RoseVin: React.VFC = () => (
  <InteractiveLink href="https://www.bordershop.com/se/vin/rosevin/rosevin-fran-frankrike/les-fumees-blanches-rose-gris-de-sauvignon-2061719">
    Les Fumées Blanches Rosé Gris de Sauvignon
  </InteractiveLink>
);

const AppleMust: React.VFC = () => (
  <InteractiveLink href="https://rudenstam.se/produkt/apple-must-klar-65-cl/">
    Rudenstams Filtrerade Äppelmust
  </InteractiveLink>
);

const VinMust: React.VFC = () => (
  <InteractiveLink href="https://rudenstam.se/produkt/vitavinbar-mousserande/">
    Rudenstams Mousserande Vita vinbärsmust
  </InteractiveLink>
);
const Rom: React.VFC = () => (
  <InteractiveLink href="https://www.bordershop.com/se/sprit/rom/plantation-original-dark-artisanal-rum-40-2104893">
    plantation original dark artisanal rum
  </InteractiveLink>
);

const BarKontakt: React.VFC = () => (
  <InteractiveLink href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
    Frågor om Baren Ställs här
  </InteractiveLink>
);

export const Vin: React.VFC = () => (
  <div>
    <H2>Dryckesinformation</H2>
    <P>
      Kul att du hittade hit! Sidan är bara listad på etiketterna av
      vinflaskorna!
    </P>
    <P>Ikväll har vi hittat några guldkorn som passar till maten</P>
    <P>
      <H3>Förrätten</H3>
      Förrätten är har i grunden jordiga toner från sparris och fröbrödet, men
      då smörigheten i såsen och hur sparrisen tillagats så har vi valt ett Rosé
      som gör sig bra till rätten.
    </P>
    <P>
      <RoseVin />
    </P>
    <P>
      Det alkoholfria alternativet är också en pärla som vi dricker mer än vi
      borde hemma. Vinbärsmustens syra och sötma bör sammarbeta med den somriga
      smaken av sparris.
    </P>
    <P>
      <VinMust />
    </P>
    <P>
      <H3>Varmrätten</H3>I Huvudrätten har vi letat efter en asiatisk dialekt.
      Fisken/svampen som är soja- och mirinmarinerad serveras på en
      wasabiskumsås med korianderolja. Detta tillsammans med rotfrukterna tycker
      vi passar utmärkt till en rieslning från Mosel.
    </P>
    <P>
      <VitVin />
    </P>

    <P>
      Här agerar det alkoholfria alternativet lite av en törstsläckare.
      Wasabikrämen gör att man vill dricka mer och mer och mer.
    </P>
    <P>
      <AppleMust />
    </P>
    <P>
      <H3>Avec</H3>
      Av erfarenhet slutar en whiskybar med att vi bara kommer ha en massa sprit
      hemma som man behöver bjuda på! Ikväll håller vi oss till en rom och utgår
      från att den tar slut. Men det är inte hela världen om vi får dricka upp
      lite rester i sommar.
    </P>
    <P>
      <Rom />
    </P>
    <P>
      <H3>Efterfesten</H3>
      När middagen är slut så kommer det finnas gott om alternativ att välja
      från om du är törstig.
      <Table>
        <tbody>
          <tr>
            <TD>Drink</TD>
            <TD>4 sorters Gin & Tonic</TD>
          </tr>
          <tr>
            <TD>Drink</TD>
            <TD>Aperol Spritz</TD>
          </tr>
          <tr>
            <TD>Öl</TD>
            <TD>Lager eller IPA</TD>
          </tr>
          <tr>
            <TD>Lång</TD>
            <TD>Gott om 3.5or</TD>
          </tr>
          <tr>
            <TD>Cider</TD>
            <TD>Fläder, Passionsfrukt och Äpple</TD>
          </tr>
          <tr>
            <TD>Vin</TD>
            <TD>Rosévinet från middagen</TD>
          </tr>
          <tr>
            <TD>Vin</TD>
            <TD>Rieslingen från middagen</TD>
          </tr>
          <tr>
            <TD>Vin</TD>
            <TD>Rött vin - För: Varför inte?</TD>
          </tr>
          <tr>
            <TD>Bubbel</TD>
            <TD>Mingelbubblet</TD>
          </tr>
          <tr>
            <TD>Alkoholfri Must</TD>
            <TD>Musten från middagen</TD>
          </tr>
          <tr>
            <TD>Läsk</TD>
            <TD>Cola Zero, Trocazero, Trocazero Geléhallon</TD>
          </tr>
          <tr>
            <TD>Alkoholfri öl</TD>
            <TD>Carlsberg Nordic</TD>
          </tr>
        </tbody>
      </Table>
    </P>
    <P>
      <BarKontakt />
    </P>
    <SingleImageCard />
  </div>
);

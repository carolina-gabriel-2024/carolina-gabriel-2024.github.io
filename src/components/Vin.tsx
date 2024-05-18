import * as React from 'react';
import { InteractiveLink } from '../ui/InteractiveLink';
import { P, H2, H3 } from '../ui/Paragraph';
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
      <table>
        <tbody>
          <tr>
            <td>Drink</td>
            <td>4 sorters Gin & Tonic</td>
          </tr>
          <tr>
            <td>Drink</td>
            <td>Aperol Spritz</td>
          </tr>
          <tr>
            <td>Öl</td>
            <td>Lager eller IPA</td>
          </tr>
          <tr>
            <td>Öl</td>
            <td>Gott om 3.5or</td>
          </tr>
          <tr>
            <td>Cider</td>
            <td>Fläder, Passionsfrukt och Äpple</td>
          </tr>
          <tr>
            <td>Vin</td>
            <td>Rosévinet från middagen</td>
          </tr>
          <tr>
            <td>Vin</td>
            <td>Rieslingen från middagen</td>
          </tr>
          <tr>
            <td>Bubbel</td>
            <td>Mingelbubblet</td>
          </tr>
          <tr>
            <td>Alkoholfritt&nbsp;&nbsp;</td>
            <td> Musten från middagen</td>
          </tr>
          <tr>
            <td>Alkoholfritt</td>
            <td> Cola Zero</td>
          </tr>
          <tr>
            <td>Alkoholfritt</td>
            <td> Carlsberg Nordic</td>
          </tr>
        </tbody>
      </table>
    </P>
    <P>
      <BarKontakt />
    </P>
    <SingleImageCard />
  </div>
);

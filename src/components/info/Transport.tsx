import * as React from 'react';
import { P, H2, H3, TD } from '../../ui/Paragraph';
import { styled } from '../../stitches.config';
import { SingleImageCard } from '../../ui/Image';
export const Transport: React.VFC = () => (
  <div>
    <H2>Transport</H2>
    <P>
      Vi har varit i kontakt med Ulricehamns lokala taxibolan för att se vad de
      har för priser och bilar. Det visar sig att de inte har jättemånga bilar
      att sätta i drift för vår skull, men ni som behöver kommer att kunna komma
      hem.
    </P>

    <P>
      "Det är bara att ringa så kommer vi på 40." ~ Personen på andra sidan
      luren
    </P>
    <P>
      Numret till beställningscentralen för Ulricehamn taxi är 0321-53 33 33.
    </P>
    <P>
      <H3>Priser Taxi</H3>
      <table>
        <tbody>
          <tr>
            <TD>Bil</TD>
            <TD>4 platser</TD>
            <TD>800kr</TD>
          </tr>
          <tr>
            <TD>Minibus</TD>
            <TD>7 platser</TD>
            <TD>950kr</TD>
          </tr>
        </tbody>
      </table>
    </P>
    <P>
      <H3>Praxis</H3>
      Vi kommer att ställa upp en station för att hjälpa till med samordning och
      beställning av bilar när det väl är dags. Med andra ord: Om du är en
      soloist så ska det absolut gå att matcha med en nästan full bil.
    </P>

    <SingleImageCard />
  </div>
);

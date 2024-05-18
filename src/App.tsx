import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Button } from './ui/Button';
import { globalCss, styled } from './stitches.config';
import { Home } from './components/Home';
import { ExampleComponent } from './components/ExampleComponent';
import { Info } from './components/Info';
import { Osa } from './components/Osa';
import { Boende } from './components/info/Boende';
import { Clothing } from './components/info/Clothing';
import { Plats } from './components/info/Plats';
import { Transport } from './components/info/Transport';
import { Present } from './components/info/Present';
import { Schema } from './components/info/Schema';
import { Talare } from './components/Talare';
import { Kontakt } from './components/Kontakt';
import { Vigsel } from './components/Vigsel';
import { Vin } from './components/Vin';
import { ExampleTwoDeepComponent } from './components/ExampleTwoDeepComponent';
import { SitemapLinkGenerator } from './components/SitemapLinkGenerator';
import { PageNotFound } from './components/PageNotFound';
import { Breadcrumbs } from './components/Breadcrumbs';
import { RouterLink } from './ui/RouterLink';
import { BoxCss } from './ui/style/BoxCss';
import {
  Img,
  ImgText,
  SideImgCard,
  ImgCard,
  SideImg,
  SideIframe,
  ShuffledImageList,
} from './ui/Image';
import { Shortcuts } from './ui/Shortcuts';
import { InteractiveLink } from './ui/InteractiveLink';
import { renderAsDesktop } from './ui/style/Mobile';

const opacityLevel = 1.0;
const transparentBg = `rgba(255,255,255, ${opacityLevel})`;

let viewPortHeight =
  (window.visualViewport.height - (renderAsDesktop ? 200 : 250)).toString() +
  'px';
let viewPortWidth =
  (window.visualViewport.width * (renderAsDesktop ? 0.8 : 1)).toString() + 'px';

const AppContainer = styled('div', {
  maxWidth: viewPortWidth,
  height: viewPortHeight,
  margin: '0 auto',
  padding: '12px 15px 25px',
});

const HeaderContainer = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '18px',
  ...BoxCss,
  backgroundColor: transparentBg,
  paddingBottom: '0px',
});

const H1 = styled('h1', {
  fontSize: '42px',
  marginRight: '16px',
  fontFamily: 'Papyrus, monospace',
});

const HeaderIconContainer = renderAsDesktop
  ? styled('span', {
      maxWidth: '20px',
      minWidth: '20px',
      display: 'inline-flex',
      justifyContent: 'space-between',
      gap: '12px',
    })
  : styled('span', {
      maxWidth: '200px',
      minWidth: '200px',
      display: 'inline-flex',
      justifyContent: 'space-between',
      gap: '12px',
    });

const BreadcrumbsNav = styled('nav', {
  margin: '18px 0',
  ...BoxCss,
  backgroundColor: transparentBg,
  display: 'flex',
  justifyContent: 'space-between',
});

const MainContainer = styled('div', {
  display: 'flex',
  paddingBottom: '10px',
  height: viewPortHeight,
});

const ImageContainer = styled('div', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'auto',
  ...BoxCss,
  marginLeft: '18px',
  backgroundColor: transparentBg,
});

const MainPage = styled('div', {
  flex: 2,
  overflowY: 'auto',
  ...BoxCss,
  backgroundColor: transparentBg,
});

const Tiny = styled('span', {
  fontFamily: 'Papyrus, monospace',
  fontSize: '20px',
});

const FooterCard = styled('div', {
  margin: '18px 0px 0px 0px',
  ...BoxCss,
  backgroundColor: transparentBg,
});

const ImgA = styled('a', {});

const SideImages: React.VFC = () => {
  let images = ShuffledImageList.slice(0, 6);
  return (
    <ImageContainer>
      {images.map((o) => (
        <SideImgCard key={o.key}>
          {o.iframe ? (
            <SideIframe src={o.key} />
          ) : (
            <ImgA href={o.key} target="_blank">
              <SideImg src={o.key} />
            </ImgA>
          )}
          <InteractiveLink href={o.key} target="_blank">
            {o.text}
          </InteractiveLink>
        </SideImgCard>
      ))}
    </ImageContainer>
  );
};

export const App: React.VFC = () => {
  globalCss();

  return (
    <AppContainer>
      <HeaderContainer>
        <H1>
          Gabriel <Tiny>och</Tiny> Carolina 2024
        </H1>
      </HeaderContainer>

      <BreadcrumbsNav>
        <Breadcrumbs />
        <Shortcuts />
      </BreadcrumbsNav>
      <MainContainer>
        <MainPage>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/vigsel" component={Vigsel} />
            <Route exact path="/osa" component={Osa} />
            <Route exact path="/talare" component={Talare} />
            <Route exact path="/kontakt" component={Kontakt} />
            <Route exact path="/info" component={Info} />
            <Route exact path="/info-boende" component={Boende} />
            <Route exact path="/info-kladsel" component={Clothing} />
            <Route exact path="/info-plats" component={Plats} />
            <Route exact path="/info-present" component={Present} />
            <Route exact path="/info-schema" component={Schema} />
            <Route exact path="/info-transport" component={Transport} />
            <Route exact path="/info-dryck" component={Vin} />
            <Route component={PageNotFound} />
          </Switch>
        </MainPage>
        {renderAsDesktop ? <SideImages /> : ''}
      </MainContainer>
    </AppContainer>
  );
};

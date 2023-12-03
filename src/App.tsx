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
import { Talare } from './components/Talare';
import { Vigsel } from './components/Vigsel';
import { ExampleTwoDeepComponent } from './components/ExampleTwoDeepComponent';
import { SitemapLinkGenerator } from './components/SitemapLinkGenerator';
import { PageNotFound } from './components/PageNotFound';
import { Breadcrumbs } from './components/Breadcrumbs';
import { RouterLink } from './ui/RouterLink';
import { BoxCss } from './ui/style/BoxCss';
import { Img, ImgText, SideImgCard, ImgCard, SideImg } from './ui/Image';
import { Shortcuts } from './ui/Shortcuts';
import { renderAsDesktop } from './ui/style/Mobile';

const opacityLevel = 0.93;
const transparentBg = `rgba(255,255,255, ${opacityLevel})`;

let viewPortHeight =
  (window.visualViewport.height - (75 + 39.5 + 25)).toString() + 'px';
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
  maxHeight: '100%',
});
const ImageBox = styled('div', {});

const ImageContainer = styled('div', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'scroll',
  ...BoxCss,
  minHeight: '100%',
  marginLeft: '18px',
  paddingBottom: '0px',
  backgroundColor: transparentBg,
});

const MainPage = styled('div', {
  flex: 2,
  minHeight: '100%',
  maxHeight: 'inherit',
  overflowY: 'auto',
  ...BoxCss,
  backgroundColor: transparentBg,
});

const Tiny = styled('span', {
  fontSize: '20px',
});

const FooterCard = styled('div', {
  margin: '18px 0px 0px 0px',
  ...BoxCss,
  backgroundColor: transparentBg,
});

const Footer: React.VFC = () => (
  <div>
    <h3>Platskarta</h3>
    <ul>
      <li>
        <RouterLink to="/">Hem</RouterLink>{' '}
      </li>
      <li>
        <RouterLink to="/vigsel">Vigsel</RouterLink>
      </li>
      <li>
        <RouterLink to="/osa">OSA</RouterLink>
      </li>
      <li>
        <RouterLink to="/info">Info</RouterLink>
        <ul>
          <li>
            <RouterLink to="/info/boende">Boende</RouterLink>
          </li>
          <li>
            <RouterLink to="/info/plats">Plats</RouterLink>
          </li>
          <li>
            <RouterLink to="/info/klader">Kläder</RouterLink>
          </li>
        </ul>
      </li>
      <li>
        <RouterLink to="/talare">Tal & Spex</RouterLink>
      </li>
    </ul>
  </div>
);

const SideImages: React.VFC = () => (
  <ImageContainer>
    <SideImgCard>
      <SideImg src="/norway_kiss.jpg" />
      <ImgText>Från Frieriet Utanför Tromsö i Norge, 2023-10-31</ImgText>
    </SideImgCard>
    <SideImgCard>
      <SideImg src="/norway_kiss.jpg" />
      <ImgText>Från Frieriet Utanför Tromsö i Norge, 2023-10-31</ImgText>
    </SideImgCard>
    <SideImgCard>
      <SideImg src="/norway_kiss.jpg" />
      <ImgText>Från Frieriet Utanför Tromsö i Norge, 2023-10-31</ImgText>
    </SideImgCard>
    <SideImgCard>
      <SideImg src="/norway_kiss.jpg" />
      <ImgText>Från Frieriet Utanför Tromsö i Norge, 2023-10-31</ImgText>
    </SideImgCard>
    <SideImgCard>
      <SideImg src="/norway_kiss.jpg" />

      <ImgText>Från Frieriet Utanför Tromsö i Norge, 2023-10-31</ImgText>
    </SideImgCard>
    <SideImgCard>
      <SideImg src="/norway_kiss.jpg" />
      <ImgText>Från Frieriet Utanför Tromsö i Norge, 2023-10-31</ImgText>
    </SideImgCard>
  </ImageContainer>
);

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
            <Route exact path="/info" component={Info} />
            <Route exact path="/info/plats" component={Plats} />
            <Route exact path="/info/kladsel" component={Clothing} />
            <Route exact path="/info/boende" component={Boende} />
            <Route
              exact
              path="/example/two-deep"
              component={ExampleTwoDeepComponent}
            />
            <Route
              exact
              path="/sitemap-link-generator"
              component={SitemapLinkGenerator}
            />
            <Route component={PageNotFound} />
          </Switch>
        </MainPage>
        {renderAsDesktop ? <SideImages /> : ''}
      </MainContainer>
    </AppContainer>
  );
};

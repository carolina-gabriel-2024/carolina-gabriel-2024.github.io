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

const AppContainer = styled('div', {
  maxWidth: '540px',
  padding: '12px 15px 25px',
  margin: '0 auto',
});

const HeaderContainer = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '18px',
});

const H1 = styled('h1', {
  fontSize: '26px',
  marginRight: '16px',
});

const HeaderIconContainer = styled('span', {
  width: '78px',
  display: 'inline-flex',
  justifyContent: 'space-between',
  gap: '12px',
});

const BreadcrumbsNav = styled('nav', {
  margin: '18px 0',
});

const MainPage = styled('div', {
  minHeight: '800px',
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

export const App: React.VFC = () => {
  globalCss();

  return (
    <AppContainer>
      <HeaderContainer>
        <H1>Carolina & Gabriel 2024</H1>
        <RouterLink to="/vigsel">Vigsel</RouterLink>
      </HeaderContainer>

      <BreadcrumbsNav>
        <Breadcrumbs />
      </BreadcrumbsNav>
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
      <Footer />
    </AppContainer>
  );
};

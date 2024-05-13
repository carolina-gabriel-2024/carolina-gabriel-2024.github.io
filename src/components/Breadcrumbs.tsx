import * as React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import { InteractiveLink } from '../ui/InteractiveLink';
import { styled } from '../stitches.config';

interface breadCrumbTitlesInterface {
  [key: string]: string | undefined;
}

const breadCrumbTitles: breadCrumbTitlesInterface = {
  '': 'Välkomna',
  info: 'Info',
  vigsel: 'Vigsel',
  anmalan: 'Anmälan',
  osa: 'OSA',
  talare: 'Tal & Spex',
  plats: 'Plats',
  kladsel: 'Klädsel',
  boende: 'Boende',
  'info-plats': 'Information: Årås Kvarn',
  'info-boende': 'Information: Boende',
  'info-kladsel': 'Information: Klädsel',
  'info-transport': 'Information: Transport',
  'info-schema': 'Information: Schema',
  'info-present': 'Information: Bröllopsgåvor',
  kontakt: 'Kontakt',
  'info-dryck': 'Middagen - Dryckesinformation',
};

const CSpan = styled('span', {
  margin: 'auto 0',
  fontSize: '24px',
});

const BreadcrumbsItem: React.VFC<RouteComponentProps> = ({ match }) => {
  const path =
    match.url.length > 1 && match.url[match.url.length - 1] === '/'
      ? match.url.slice(0, -1)
      : match.url;

  const title = breadCrumbTitles[path.split('/').slice(-1)[0]];
  const to = title === undefined ? '/' : path;

  return (
    <CSpan>
      <InteractiveLink to={to}>{title || 'Något blev fel'}</InteractiveLink>
      {!match.isExact && title && ' / '}
      {title && (
        <Route
          path={`${match.url === '/' ? '' : match.url}/:path`}
          component={BreadcrumbsItem}
        />
      )}
    </CSpan>
  );
};

export const Breadcrumbs: React.VFC = () => (
  <Route path="/" component={BreadcrumbsItem} />
);

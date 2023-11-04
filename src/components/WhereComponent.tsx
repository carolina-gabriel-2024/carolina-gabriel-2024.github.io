import * as React from 'react';
import { InteractiveLink } from '../ui/InteractiveLink';
import { P } from '../ui/Paragraph';
import { MapComponent } from './MapComponent';

const location = {
  address: 'Årås Kvarn',
  lat: 55.42216,
  lng: 11.08427,
};

export const WhereComponent: React.VFC = () => (
  <div>
    <P>Årås kvarn</P>
    <div className="google-map">
      <MapComponent />
    </div>
    <InteractiveLink to="/example/two-deep?field1=foo&field2=bar#boom!">
      Example two deep with query and hash
    </InteractiveLink>
  </div>
);

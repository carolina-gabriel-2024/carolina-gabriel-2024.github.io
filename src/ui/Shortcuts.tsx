import * as React from 'react';
import {
  Interactive,
  createInteractive,
  InteractiveStateChange,
} from 'react-interactive';
import { styled } from '../stitches.config';
import { renderAsMobile } from './style/Mobile';
import { Redirect } from 'react-router-dom';

let maxW = renderAsMobile ? '50px' : '200px';
let maxH = renderAsMobile ? '50px' : '200px';
let text = renderAsMobile ? '...' : 'Genvägar';

// select css styling adapted from https://moderncss.dev/custom-select-styles-with-pure-css/
const SelectContainer = styled('div', {
  display: 'grid',
  gridTemplateAreas: '"select"',
  alignItems: 'center',
  margin: '8px 0',
  maxWidth: maxW,
  maxHeight: maxH,
  // select custom arrow created with clip-path
  '&::after': {
    content: '',
    gridArea: 'select',
    justifySelf: 'end',
    width: '14px',
    height: '8px',
    marginRight: '8px',
    backgroundColor: '$highContrast',
    clipPath: 'polygon(100% 0%, 50% 35%, 0 0%, 50% 100%)',
    pointerEvents: 'none',
  },
  variants: {
    disabled: {
      true: { opacity: 0.5 },
    },
  },
});

const Select = styled(Interactive.Select, {
  gridArea: 'select',
  width: '100%',
  backgroundColor: '$formElementsBackground',
  border: '1px solid $colors$highContrast',
  borderRadius: '4px',
  padding: '4px 24px 4px 6px',

  '&.hover': {
    borderColor: '$green',
  },
  '&.mouseActive': {
    boxShadow: '0 0 0 1px $colors$green',
  },
  '&.touchActive': {
    borderColor: '$blue',
    boxShadow: '0 0 0 1px $colors$blue',
  },
  '&.focusFromKey': {
    borderColor: '$purple',
    boxShadow: '0 0 0 1px $colors$purple, 2px 3px 4px 0px rgba(0, 0, 0, 0.38)',
  },
  '&.disabled': {
    opacity: 0.5,
  },
  '&>option': {
    // only works in desktop edge, desktop firefox, and chrome on windows
    color: '$highContrast',
    background: '$colors$pageBackground',
  },
});

export const Shortcuts: React.VFC = () => {
  const [selectInputState, setSelectInputState] = React.useState('placeholder');
  return (
    <SelectContainer>
      <Select
        value={selectInputState}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          if (e.target.value && e.target.value != 'placeholder') {
            window.open(e.target.value, '_self');
          }
        }}
        onMouseDown={(e: any) => {
          if (e.target.value && e.target.value != 'placeholder') {
            window.open(e.target.value, '_self');
          }
        }}
      >
        <option value="placeholder" disabled>
          {text}
        </option>
        <option value="/osa">Anmälan</option>
        <option value="/vigsel">Vigsel</option>
        <option value="placeholder" disabled>
          ----
        </option>
        <option value="/info">Information</option>
        <option value="/info/plats"> - Plats</option>
        <option value="/info/kladsel"> - Klädsel</option>
        <option value="/info/boende"> - Boende</option>
        <option value="placeholder" disabled>
          ----
        </option>
        <option value="/talare"> - Tal & Spex</option>
      </Select>
    </SelectContainer>
  );
};

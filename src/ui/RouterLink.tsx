import * as React from 'react';
import { createInteractive } from 'react-interactive';
import { Link as ReactRouterLink } from 'react-router-dom';
import { InteractiveLink } from '../ui/InteractiveLink';

import { styled, keyframes, CSS } from '../stitches.config';

const scale = keyframes({
  '0%': { transform: 'scale(1)' },
  '50%': { transform: 'scale(1.03)' },
  '100%': { transform: 'scale(1)' },
});

const linkCss: CSS = {
  display: 'inline-block',
  textDecoration: 'underline',
  borderRadius: '3px',
  padding: '3px 4px 2px',
  margin: '1px -4px',
  '&.hover, &.mouseActive': {
    color: '$green',
  },
  '&.touchActive': {
    color: '$blue',
  },
  '&.keyActive': {
    color: '$purple',
  },
  '&.focusFromKey': {
    animation: `${scale} 500ms`,
    textDecoration: 'none',
    backgroundColor: '$backgroundPurple',
    boxShadow: '0 0 0 1px $colors$purple',
    // adds a 3D drop shadow as well
    // boxShadow: '0 0 0 1px $colors$purple, 2px 3px 4px 0px rgba(0, 0, 0, 0.38)',
  },
};

export const RouterLink = styled(createInteractive(ReactRouterLink), linkCss);

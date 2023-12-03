import { isMobile } from 'react-device-detect';

export const renderAsMobile = isMobile;
export const renderAsDesktop = !renderAsMobile;

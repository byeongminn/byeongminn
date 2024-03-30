import { DefaultMedia } from 'styled-components';

const breakPoints = {
  mobile: '988px',
  tablet: '1023px',
  labtop: '1439px',
  desktop: '1440px',
};

const device = {
  mobile: `screen and (max-width: ${breakPoints.mobile})`,
  tablet: `screen and (max-width: ${breakPoints.tablet})`,
  labtop: `screen and (max-width: ${breakPoints.labtop})`,
  desktop: `screen and (min-width: ${breakPoints.desktop})`,
};

const media: DefaultMedia = {
  device,
};

export default media;

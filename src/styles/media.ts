import { DefaultMedia } from 'styled-components';

const breakPoints = {
  mobile: '767px',
  tablet: '991px',
};

const device = {
  mobile: `screen and (max-width: ${breakPoints.mobile})`,
  tablet: `screen and (max-width: ${breakPoints.tablet})`,
};

const media: DefaultMedia = {
  device,
};

export default media;

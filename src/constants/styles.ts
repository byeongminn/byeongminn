import { css } from 'styled-components';
import { eng16, eng20 } from './fonts';
import { GRAY800, GRAY900 } from './colors';

// About
export const HEADING = css`
  margin-bottom: 1.5rem;
  ${eng20};
  color: ${GRAY900};
`;

export const CONTENTS = css`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
`;

export const CONTENT = css`
  display: flex;
  align-items: center;
  column-gap: 0.75rem;
  ${eng16};
  color: ${GRAY800};
`;

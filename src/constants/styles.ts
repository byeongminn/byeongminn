import { css } from 'styled-components';
import { eng14, eng16, eng16M, eng20 } from './fonts';
import { GRAY800 } from './colors';

// About
export const HEADING = css`
  margin-bottom: 1.75rem;
  ${eng20};
  color: ${({ theme }) => theme.sectionColor};

  @media screen and (max-width: 643px) {
    margin-bottom: 1rem;
    ${eng16M};
  }
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

  @media screen and (max-width: 643px) {
    ${eng14};
  }
`;

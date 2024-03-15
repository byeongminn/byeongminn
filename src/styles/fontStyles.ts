import styled from 'styled-components';

/* GrayScales */
export const gray100 = '#FDFDFD';
export const gray200 = '#F7F6F6';
export const gray300 = '#EAEAEA';
export const gray400 = '#E1E5ED';
export const gray500 = '#D2D4DA';
export const gray600 = '#696969';
export const gray700 = '#4D4D4D';
export const gray800 = '#333333';
export const gray900 = '#191919';

/* Text Styles */
// Pretendard
export const pretendard14Reg = {
  'font-family': 'Pretendard',
  'font-weight': '400',
  'font-size': '14px',
  'line-height': '20px',
};

export const pretendard16Reg = {
  'font-family': 'Pretendard',
  'font-weight': '400',
  'font-size': '16px',
  'line-height': '24px',
};

export const pretendard20Med = {
  'font-family': 'Pretendard',
  'font-weight': '500',
  'font-size': '20px',
  'line-height': '30px',
};

// Spoqa
export const spoqa16Reg = {
  'font-family': 'Spoqa',
  'font-weight': '400',
  'font-size': '16px',
  'line-height': '24px',
  'letter-spacing': '-0.5px',
};

/* Styled-components Styles */
// About
export const Heading = styled.h4`
  margin-bottom: 1.5rem;
  ${pretendard20Med};
  color: ${gray900};
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.75rem;
  ${pretendard16Reg};
  color: ${gray800};
`;

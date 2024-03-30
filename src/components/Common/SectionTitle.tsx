import { eng16M, eng20 } from 'constants/fonts';
import React from 'react';
import styled from 'styled-components';

interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle = (props: SectionTitleProps) => {
  const { children } = props;

  return <Container>{children}</Container>;
};

export default SectionTitle;

const Container = styled.h2`
  margin-bottom: 1.75rem;
  ${eng20};
  color: ${({ theme }) => theme.sectionColor};

  @media ${({ theme }) => theme.device.tablet} {
    margin-bottom: 1rem;
    ${eng16M};
  }
`;

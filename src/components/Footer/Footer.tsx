import { eng12, eng14 } from 'constants/fonts';
import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Container>
      <Copyright>
        Copyright ©GILDONG HONG 2021-2024 All rights reserved.
      </Copyright>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  padding-block: 4.5rem;
`;

const Copyright = styled.h5`
  ${eng14};
  color: ${({ theme }) => theme.footerColor};
  text-align: right;

  @media ${({ theme }) => theme.device.mobile} {
    ${eng12};
    text-align: center;
  }
`;

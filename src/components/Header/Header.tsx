import { Navigation } from 'components';
import { GRAY800 } from 'constants/colors';
import { TITLE } from 'constants/header';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <Container>
      <Title>
        <Link to="/">{TITLE}</Link>
      </Title>
      <Navigation />
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 11.375rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1rem;
`;

const Title = styled.div`
  a {
    font-family: 'Champagne';
    font-weight: 400;
    font-size: 32px;
    line-height: 30px;
    letter-spacing: 3px;
    color: ${GRAY800};
    text-transform: uppercase;
  }
`;

import { Navigation } from 'components';
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
  padding: 3.5rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1rem;

  @media ${({ theme }) => theme.device.tablet} {
    padding: 1.5rem 1rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    row-gap: 0;
    border-bottom: 0.2px solid ${({ theme }) => theme.headerBorderColor};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
`;

const Title = styled.div`
  a {
    font-family: 'Champagne';
    font-style: italic;
    font-weight: 400;
    font-size: 32px;
    line-height: 30px;
    letter-spacing: 3px;
    color: ${({ theme }) => theme.headerColor};
    text-transform: uppercase;

    @media ${({ theme }) => theme.device.tablet} {
      font-size: 18px;
      line-height: 22px;
    }
  }
`;

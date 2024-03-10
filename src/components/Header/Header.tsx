import { Navigation } from 'components';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <Container>
      <Title>
        <Link to="/">THE ONE</Link>
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
  font-size: 32px;
`;

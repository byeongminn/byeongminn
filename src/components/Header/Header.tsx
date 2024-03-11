import { Navigation } from 'components';
import { title } from 'constants/header';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { gray900 } from 'styles/fontStyles';

const Header = () => {
  return (
    <Container>
      <Title>
        <Link to="/">{title}</Link>
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
    font-family: 'Pretendard';
    font-weight: 500;
    font-size: 32px;
    line-height: 30px;
    letter-spacing: 0.5px;
    color: ${gray900};
    text-transform: uppercase;
  }
`;

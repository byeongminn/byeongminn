import { GRAY600, GRAY900 } from 'constants/colors';
import { eng16 } from 'constants/fonts';
import { NAVIGATION } from 'constants/navigation';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <Container>
      <NavList>
        {NAVIGATION.map(({ id, name, url }) => (
          <NavItem key={id} $isActive={pathname === url}>
            <Link to={url}>{name}</Link>
          </NavItem>
        ))}
      </NavList>
    </Container>
  );
};

export default Navigation;

const Container = styled.div``;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1.25rem;
`;

const NavItem = styled.li<{ $isActive: boolean }>`
  a {
    ${eng16};
    color: ${({ $isActive }) => ($isActive ? `${GRAY900}` : `${GRAY600}`)};
    text-transform: uppercase;
  }
`;

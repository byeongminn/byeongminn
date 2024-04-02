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
          <NavItem key={id} $isActive={pathname.includes(url)}>
            <Link to={url}>{name}</Link>
          </NavItem>
        ))}
      </NavList>
      <NavButton>
        <img src="/assets/icons/nav.svg" alt="nav" />
      </NavButton>
    </Container>
  );
};

export default Navigation;

const Container = styled.div``;

const NavList = styled.ul`
  padding-left: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1.25rem;

  @media ${({ theme }) => theme.device.tablet} {
    display: none;
  }
`;

const NavItem = styled.li<{ $isActive: boolean }>`
  a {
    ${eng16};
    color: ${({ theme, $isActive }) =>
      $isActive ? theme.headerColor : theme.headerActiveColor};
    text-transform: uppercase;
  }
`;

const NavButton = styled.button`
  padding: 0;
  background-color: transparent;
  border: none;
  display: none;

  &:hover {
    cursor: pointer;
  }

  @media ${({ theme }) => theme.device.tablet} {
    display: block;
  }
`;

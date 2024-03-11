import { navigation } from 'constants/navigation';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { gray600, gray900, pretendard16Reg } from 'styles/fontStyles';

const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <Container>
      <NavList>
        {navigation.map(({ id, name, url }) => (
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
    ${pretendard16Reg};
    color: ${({ $isActive }) => ($isActive ? `${gray900}` : `${gray600}`)};
    text-transform: uppercase;
  }
`;

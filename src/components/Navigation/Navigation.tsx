import { eng16 } from 'constants/fonts';
import { NAVIGATION } from 'constants/navigation';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import MobileNavigation from './components/MobileNavigation';

const Navigation = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 991) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener('resize', handleResize);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  const handleNavButtonClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Container>
      <NavList>
        {NAVIGATION.map(({ id, name, url }) => (
          <NavItem key={id} $isActive={pathname.includes(url)}>
            <Link to={url}>{name}</Link>
          </NavItem>
        ))}
      </NavList>
      <NavButton onClick={handleNavButtonClick}>
        <img src="/assets/icons/nav.svg" alt="nav" />
      </NavButton>
      {isOpen ? <MobileNavigation onItemClick={handleNavButtonClick} /> : null}
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
  height: 1.5rem;

  &:hover {
    cursor: pointer;
  }

  @media ${({ theme }) => theme.device.tablet} {
    display: block;
  }
`;

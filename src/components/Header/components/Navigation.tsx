import { eng16 } from 'constants/fonts';
import { NAVIGATION } from 'constants/navigation';
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import ThemeButton from 'components/Header/components/ThemeButton';
import MobileNavigationComponent from './MobileNavigation';
import { useThemeActions } from 'context/ThemeProvider';

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navigation = ({ isOpen, setIsOpen }: Props) => {
  const { pathname } = useLocation();
  const { theme } = useThemeActions();

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
      <NavListSection>
        <NavList>
          {NAVIGATION.map(({ id, name, url }) => (
            <NavItem key={id} $isActive={pathname.includes(url)}>
              <Link to={url}>{name}</Link>
            </NavItem>
          ))}
        </NavList>
      </NavListSection>
      <ButtonSection>
        <ThemeButton />
        <NavButton onClick={handleNavButtonClick}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/icons/nav-${theme}.svg`}
            alt="nav"
          />
        </NavButton>
      </ButtonSection>
      {isOpen ? (
        <MobileNavigationComponent onItemClick={handleNavButtonClick} />
      ) : null}
    </Container>
  );
};

export default Navigation;

const Container = styled.div``;

const NavListSection = styled.section`
  @media ${({ theme }) => theme.device.tablet} {
    display: none;
  }
`;

const NavList = styled.ul`
  padding-left: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1.25rem;
`;

const NavItem = styled.li<{ $isActive: boolean }>`
  a {
    ${eng16};
    color: ${({ theme, $isActive }) =>
      $isActive ? theme.headerColor : theme.headerActiveColor};
    text-transform: uppercase;
  }
`;

const ButtonSection = styled.section`
  display: none;

  @media ${({ theme }) => theme.device.tablet} {
    display: flex;
    column-gap: 0.5rem;
  }
`;

const NavButton = styled.button`
  padding: 0;
  background-color: transparent;
  border: none;
  height: 1.5rem;

  &:hover {
    cursor: pointer;
  }
`;

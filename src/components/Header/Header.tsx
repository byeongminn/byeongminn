import { TITLE } from 'constants/header';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ThemeButton from './components/ThemeButton';
import Navigation from './components/Navigation';

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleTitleClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <Container>
      <TitleSection>
        <Title>
          <Link to="/" onClick={handleTitleClick}>
            {TITLE}
          </Link>
        </Title>
      </TitleSection>
      <NavigationSection>
        <Navigation isOpen={isOpen} setIsOpen={setIsOpen} />
      </NavigationSection>
      <ThemeButtonSection>
        <ThemeButton />
      </ThemeButtonSection>
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
    background-color: ${({ theme }) => theme.bgColor};
    border-bottom: 1px solid ${({ theme }) => theme.headerBorderColor};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
  }
`;

const TitleSection = styled.section``;

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

const NavigationSection = styled.section``;

const ThemeButtonSection = styled.section`
  height: 1.5rem;

  @media ${({ theme }) => theme.device.tablet} {
    display: none;
  }
`;

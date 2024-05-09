import { useThemeActions } from 'context/ThemeProvider';
import React from 'react';
import styled from 'styled-components';

const ThemeButton = () => {
  const { theme, handleThemeToggle } = useThemeActions();

  return (
    <Container onClick={handleThemeToggle}>
      {theme === 'dark' ? (
        <Icon
          src={`${process.env.PUBLIC_URL}/assets/icons/light.svg`}
          alt="light"
        />
      ) : (
        <Icon
          src={`${process.env.PUBLIC_URL}/assets/icons/dark.svg`}
          alt="dark"
        />
      )}
    </Container>
  );
};

export default ThemeButton;

const Container = styled.button`
  padding: 0;
  height: 1.5rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const Icon = styled.img``;

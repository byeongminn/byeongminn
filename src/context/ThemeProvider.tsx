import { useDarkMode } from 'hooks/useDarkMode';
import { createContext, useContext } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { dark, light } from 'styles/theme';
import media from 'styles/media';

interface Props {
  children: React.ReactNode;
}

const ThemeActionsContext = createContext({
  theme: 'light',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleThemeToggle: () => {},
});

export const ThemeProvider = ({ children }: Props) => {
  const { theme, handleThemeToggle } = useDarkMode();

  return (
    <ThemeActionsContext.Provider value={{ theme, handleThemeToggle }}>
      <StyledThemeProvider
        theme={
          theme === 'dark' ? { ...dark, ...media } : { ...light, ...media }
        }
      >
        {children}
      </StyledThemeProvider>
    </ThemeActionsContext.Provider>
  );
};

export const useThemeActions = () => {
  const value = useContext(ThemeActionsContext);
  if (value === undefined) {
    throw new Error('useThemeActions should be used within ThemeProvider');
  }
  return value;
};

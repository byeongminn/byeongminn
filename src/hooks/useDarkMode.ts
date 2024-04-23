import { useEffect, useState } from 'react';
import { Theme } from 'types';

export const useDarkMode = () => {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const localStorageTheme = window.localStorage.getItem('theme');
    localStorageTheme === 'dark' ? setTheme('dark') : setTheme('light');
  }, []);

  const handleThemeToggle = () => {
    if (theme === 'dark') {
      window.localStorage.setItem('theme', 'light');
      setTheme('light');
    } else {
      window.localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }
  };

  return { theme, handleThemeToggle };
};

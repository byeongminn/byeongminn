import { useTheme } from 'next-themes';
import { ThemedImage } from '../ThemedImage';

export const DarkModeButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <ThemedImage
        srcLight="/assets/icons/dark.svg"
        srcDark="/assets/icons/light.svg"
        alt=""
        width={24}
        height={24}
      />
    </button>
  );
};

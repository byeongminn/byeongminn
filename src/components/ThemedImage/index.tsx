import Image, { ImageProps } from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface ThemedImageProps {
  srcLight: string;
  srcDark: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export const ThemedImage = ({
  srcLight,
  srcDark,
  alt,
  width,
  height,
  priority,
}: ThemedImageProps) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  let src;

  switch (resolvedTheme) {
    case 'light':
      src = srcLight;
      break;
    case 'dark':
      src = srcDark;
      break;
    default:
      src =
        'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
      break;
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
    />
  );
};

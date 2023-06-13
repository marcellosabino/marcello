import { useEffect, useState } from 'react';

// eslint-disable-next-line no-shadow
export enum Theme {
  // eslint-disable-next-line no-unused-vars
  Dark = 'dark',
  // eslint-disable-next-line no-unused-vars
  Light = 'light',
}

export default function useTheme() {
  const [theme, setTheme] = useState(null) as [Theme | null, any];

  useEffect(() => {
    setTheme(localStorage.theme || Theme.Light);
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    if (theme === Theme.Dark) {
      root.classList.add(Theme.Dark);
    } else {
      root.classList.remove(Theme.Dark);
    }

    if (theme !== null) {
      localStorage.theme = theme;
    }
  }, [theme]);

  return [theme, setTheme];
}

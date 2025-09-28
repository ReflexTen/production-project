import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

export function useTheme() {
  const { theme, setTheme } = useContext(ThemeContext);

  const changeTheme = () => {
    const newThem = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme(newThem);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newThem);
  };

  return { theme, changeTheme };
}

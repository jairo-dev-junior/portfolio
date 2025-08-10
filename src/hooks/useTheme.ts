import { useEffect, useState } from 'react';

export function useTheme(): [boolean, () => void] {
  const getInitial = () => {
    if (typeof window === 'undefined') return true;
    const stored = localStorage.getItem('theme');
    if (stored === 'light') return false;
    if (stored === 'dark') return true;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  };

  const [isDark, setIsDark] = useState<boolean>(getInitial);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  function toggle() { setIsDark(prev => !prev); }
  return [isDark, toggle];
}
export default useTheme; 
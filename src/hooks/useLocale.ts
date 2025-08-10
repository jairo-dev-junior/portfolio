import { useEffect, useState } from 'react';
export type Locale = 'pt' | 'en';

export function useLocale(): [Locale, (l: Locale) => void] {
  const getInitial = () => {
    if (typeof window === 'undefined') return 'pt' as const;
    const stored = localStorage.getItem('locale');
    if (stored === 'pt' || stored === 'en') return stored as Locale;
    const nav = navigator.language?.toLowerCase() ?? 'pt';
    return nav.startsWith('pt') ? 'pt' : 'en';
  };
  const [locale, setLocale] = useState<Locale>(getInitial);
  useEffect(() => { localStorage.setItem('locale', locale); }, [locale]);
  return [locale, setLocale];
}
export default useLocale; 
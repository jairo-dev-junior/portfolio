import { useEffect, useState } from 'react';

export type Locale = 'pt' | 'en';

function getLocaleFromQueryParam(): Locale | null {
  if (typeof window === 'undefined') return null;

  const lang = new URLSearchParams(window.location.search).get('lang')?.toLowerCase();
  if (!lang) return null;

  if (lang === 'pt' || lang === 'pt-br' || lang === 'ptbr') return 'pt';
  if (lang === 'eng' || lang === 'en' || lang === 'en-us' || lang === 'enus') return 'en';

  return null;
}

export function useLocale(): [Locale, (l: Locale) => void] {
  const getInitial = () => {
    if (typeof window === 'undefined') return 'pt' as const;

    const queryLocale = getLocaleFromQueryParam();
    if (queryLocale) return queryLocale;

    const stored = localStorage.getItem('locale');
    if (stored === 'pt' || stored === 'en') return stored as Locale;

    const nav = navigator.language?.toLowerCase() ?? 'pt';
    return nav.startsWith('pt') ? 'pt' : 'en';
  };

  const [locale, setLocale] = useState<Locale>(getInitial);

  useEffect(() => {
    localStorage.setItem('locale', locale);
  }, [locale]);

  useEffect(() => {
    const onHistoryChange = () => {
      const queryLocale = getLocaleFromQueryParam();
      if (queryLocale) setLocale(queryLocale);
    };

    window.addEventListener('popstate', onHistoryChange);
    return () => window.removeEventListener('popstate', onHistoryChange);
  }, []);

  return [locale, setLocale];
}

export default useLocale;

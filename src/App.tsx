import React, { useEffect } from 'react';
import Background from './components/Background';
import Header from './components/Header';
import Hero from './components/Hero';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Highlights from './components/Highlights';
import StackCarousel from './components/StackCarousel';
import ImageCarousel from './components/ImageCarousel';
import useTheme from './hooks/useTheme';
import useLocale from './hooks/useLocale';
import usePaletteFromImage from './hooks/usePaletteFromImage';
import { messages } from './i18n/messages';

function App() {
  const [isDark, toggleTheme] = useTheme();
  const [locale, setLocale] = useLocale();
  const t = messages[locale];
  usePaletteFromImage('/images/perfil.jpeg', isDark);

  useEffect(() => {
    const onScroll = () => {
      document.documentElement.style.setProperty('--parallax-offset', `${window.scrollY * 0.06}px`);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 dark:bg-[#0b0b11] dark:text-slate-100">
      <Background />
      <Header
        downloadCVLabel={t.downloadCV}
        isDark={isDark}
        toggleTheme={toggleTheme}
        locale={locale}
        setLocale={setLocale}
      />
      <Hero title={t.hero.title} subtitle={t.hero.subtitle} btnView={t.hero.btnView} btnSite={t.hero.btnSite} />
      <ImageCarousel />
      <Highlights
        projectsTitle={t.projects.title}
        projectsSubtitle={t.projects.subtitle}
        projectsEmpty={t.projects.empty}
        careerTitle={t.career.title}
        experiences={t.career.items}
      />
      <StackCarousel title={t.tech.title} />
      <Contacts
        locationLabel={t.contacts.location}
        githubLabel={t.contacts.github}
        linkedinLabel={t.contacts.linkedin}
        siteLabel={t.contacts.site}
      />
      <Footer />
    </div>
  );
}

export default App;

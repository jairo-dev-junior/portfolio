import React from 'react';
import Background from './components/Background';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Career from './components/Career';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import GitHubProjects from './components/GitHubProjects';
import useTheme from './hooks/useTheme';
import useLocale from './hooks/useLocale';
import usePaletteFromImage from './hooks/usePaletteFromImage';
import { messages } from './i18n/messages';

function App() {
  const [isDark, toggleTheme] = useTheme();
  const [locale, setLocale] = useLocale();
  const t = messages[locale];
  usePaletteFromImage('/images/perfil.jpeg', isDark);

  function scrollToId(id: string) {
    const target = document.getElementById(id);
    if (!target) return;
    const y = target.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  function handleNavigate(href: string) {
    if (!href.startsWith('#')) return;
    scrollToId(href.slice(1));
  }

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 dark:bg-[#0b0b11] dark:text-slate-100">
      <Background />
      <Header
        labels={t.menu}
        downloadCVLabel={t.downloadCV}
        isDark={isDark}
        toggleTheme={toggleTheme}
        locale={locale}
        setLocale={setLocale}
        onNavigate={handleNavigate}
      />
      <Hero title={t.hero.title} subtitle={t.hero.subtitle} btnView={t.hero.btnView} btnSite={t.hero.btnSite} />
      <About title={t.about.title} text={t.about.text} />
      <Technologies title={t.tech.title} backendLabel={t.tech.backend} frontendLabel={t.tech.frontend} />
      <GitHubProjects title={t.projects.title} subtitle={t.projects.subtitle} emptyMessage={t.projects.empty} />
      <Career title={t.career.title} />
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

import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';

interface ContactsProps {
  locationLabel: string;
  githubLabel: string;
  linkedinLabel: string;
  siteLabel: string;
}

export function Contacts({ locationLabel, githubLabel, linkedinLabel, siteLabel }: ContactsProps) {
  return (
    <section id="contatos" className="relative scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex items-center gap-3 rounded-3xl bg-white/60 p-4 shadow-sm backdrop-blur dark:bg-slate-900/50">
            <FaMapMarkerAlt className="h-5 w-5 text-[color:var(--color-primary)]" />
            <span className="text-sm">{locationLabel}</span>
          </div>
          <a href="tel:+5514988051895" className="flex items-center gap-3 rounded-3xl bg-white/60 p-4 shadow-sm backdrop-blur transition hover:shadow-md dark:bg-slate-900/50">
            <FaPhone className="h-5 w-5 text-[color:var(--color-primary)]" />
            <span className="text-sm">+55 14 988-051-895</span>
          </a>
          <a href="mailto:jairojunior.dev@gmail.com" className="flex items-center gap-3 rounded-3xl bg-white/60 p-4 shadow-sm backdrop-blur transition hover:shadow-md dark:bg-slate-900/50">
            <FaEnvelope className="h-5 w-5 text-[color:var(--color-primary)]" />
            <span className="text-sm">jairojunior.dev@gmail.com</span>
          </a>
          <div className="flex items-center gap-3 rounded-3xl bg-white/60 p-4 shadow-sm backdrop-blur dark:bg-slate-900/50">
            <a href="https://github.com/jairo-dev-junior" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium text-slate-800 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50 dark:bg-slate-950 dark:text-slate-200 dark:ring-slate-700">
              <FaGithub /> {githubLabel}
            </a>
            <a href="https://www.linkedin.com/in/jairo-junior-496a4b14a/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[color:var(--color-primary)] to-[color:var(--color-accent)] px-4 py-2 text-xs font-semibold text-white shadow-sm hover:opacity-95">
              <FaLinkedin /> {linkedinLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contacts; 
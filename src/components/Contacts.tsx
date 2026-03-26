import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

interface ContactsProps {
  locationLabel: string;
  githubLabel: string;
  linkedinLabel: string;
  siteLabel: string;
}

export function Contacts({ locationLabel, githubLabel, linkedinLabel }: ContactsProps) {
  return (
    <section id="contatos" className="relative scroll-mt-24">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-14 md:grid-cols-[180px_1fr]">
        <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-300">contato</h2>
        <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
          <p><FaMapMarkerAlt className="mr-2 inline text-cyan-700 dark:text-cyan-300" />{locationLabel}</p>
          <p><FaPhone className="mr-2 inline text-cyan-700 dark:text-cyan-300" />+55 14 988-051-895</p>
          <p><FaEnvelope className="mr-2 inline text-cyan-700 dark:text-cyan-300" />jairojunior.dev@gmail.com</p>
          <p>
            <a href="https://github.com/jairo-dev-junior" target="_blank" rel="noreferrer" className="mr-4 inline-flex items-center gap-2 text-fuchsia-700 hover:text-fuchsia-500 dark:text-fuchsia-200 dark:hover:text-fuchsia-300">
              <FaGithub /> {githubLabel}
            </a>
            <a href="https://www.linkedin.com/in/jairo-junior-496a4b14a/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-fuchsia-700 hover:text-fuchsia-500 dark:text-fuchsia-200 dark:hover:text-fuchsia-300">
              <FaLinkedin /> {linkedinLabel}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contacts;

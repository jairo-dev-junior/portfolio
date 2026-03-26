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
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-2xl border border-violet-500/20 bg-[#151624] p-4 text-sm text-slate-200">
            <FaMapMarkerAlt className="mr-2 inline h-4 w-4 text-violet-300" />
            {locationLabel}
          </div>
          <a href="tel:+5514988051895" className="rounded-2xl border border-violet-500/20 bg-[#151624] p-4 text-sm text-slate-200">
            <FaPhone className="mr-2 inline h-4 w-4 text-violet-300" />
            +55 14 988-051-895
          </a>
          <a href="mailto:jairojunior.dev@gmail.com" className="rounded-2xl border border-violet-500/20 bg-[#151624] p-4 text-sm text-slate-200">
            <FaEnvelope className="mr-2 inline h-4 w-4 text-violet-300" />
            jairojunior.dev@gmail.com
          </a>
          <div className="rounded-2xl border border-violet-500/20 bg-[#151624] p-4 text-sm">
            <a href="https://github.com/jairo-dev-junior" target="_blank" rel="noreferrer" className="mr-4 inline-flex items-center gap-2 text-slate-200 hover:text-violet-200">
              <FaGithub /> {githubLabel}
            </a>
            <a href="https://www.linkedin.com/in/jairo-junior-496a4b14a/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-slate-200 hover:text-violet-200">
              <FaLinkedin /> {linkedinLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;

import React, { useEffect, useState } from 'react';
import { FaDev } from 'react-icons/fa';

interface ExperienceItem {
  empresa: string;
  cargo: string;
  periodo: string;
  resumo: string;
  rpg: string;
}

interface HighlightsProps {
  projectsTitle: string;
  projectsSubtitle: string;
  projectsEmpty: string;
  careerTitle: string;
  experiences: readonly ExperienceItem[];
}

interface DevToArticle {
  id: number;
  title: string;
  description: string;
  url: string;
  published_at: string;
  tag_list: string[];
}

const DEVTO_USERNAME = 'jairo-dev-jr';

export function Highlights({ projectsTitle, projectsSubtitle, projectsEmpty, careerTitle, experiences }: HighlightsProps) {
  const [articles, setArticles] = useState<DevToArticle[]>([]);

  useEffect(() => {
    let active = true;

    async function loadArticles() {
      try {
        const response = await fetch(`https://dev.to/api/articles?username=${DEVTO_USERNAME}&per_page=6`);
        const data = (await response.json()) as DevToArticle[];
        if (!Array.isArray(data)) return;
        if (active) setArticles(data);
      } catch {
        if (active) setArticles([]);
      }
    }

    loadArticles();
    return () => { active = false; };
  }, []);

  return (
    <section className="parallax-section relative border-b border-slate-300/80 py-14 dark:border-slate-800/80">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-2">
        <div id="projetos">
          <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-300">{projectsTitle}</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{projectsSubtitle}</p>
          <div className="mt-4 space-y-2">
            {articles.length === 0 && <p className="text-sm text-slate-500">{projectsEmpty}</p>}
            {articles.map((article) => (
              <a key={article.id} href={article.url} target="_blank" rel="noreferrer" className="block border-b border-slate-300/80 py-3 text-sm hover:bg-cyan-100/40 dark:border-slate-800/80 dark:hover:bg-slate-900/30">
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 font-medium text-fuchsia-700 dark:text-fuchsia-300"><FaDev className="h-4 w-4" />{article.title}</span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-slate-500">
                    {new Date(article.published_at).toLocaleDateString('pt-BR')}
                  </span>
                </div>
                <p className="mt-1 text-slate-700 dark:text-slate-300">{article.description || 'Confira o artigo completo no Dev.to.'}</p>
              </a>
            ))}
          </div>
        </div>

        <div id="carreira">
          <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-300">{careerTitle}</h2>
          <ol className="mt-4 space-y-3">
            {experiences.map((job) => (
              <li key={`${job.empresa}-${job.periodo}`} className="border-b border-slate-300/80 pb-3 dark:border-slate-800/80">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{job.empresa}</p>
                  <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-slate-500">{job.periodo}</p>
                </div>
                <p className="mt-1 text-xs uppercase tracking-[0.08em] text-cyan-700 dark:text-cyan-300">{job.cargo}</p>
                <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">{job.resumo}</p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.08em] text-fuchsia-700 dark:text-fuchsia-300">🦾 {job.rpg}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Highlights;

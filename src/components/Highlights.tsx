import React, { useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa';

interface HighlightsProps {
  projectsTitle: string;
  projectsSubtitle: string;
  projectsEmpty: string;
  careerTitle: string;
}

interface GitHubRepo {
  id: number;
  name: string;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
}

interface RepositoryCard extends GitHubRepo {
  descriptionFromReadme: string;
}

const OWNER = 'jairo-dev-junior';

function pickShortDescription(readme: string): string {
  const cleanLines = readme
    .replace(/```[\s\S]*?```/g, ' ')
    .split('\n')
    .map((line) => line.replace(/^#+\s*/, '').replace(/\[([^\]]+)\]\([^)]*\)/g, '$1').trim())
    .filter((line) => line.length > 28);

  const first = cleanLines[0];
  if (!first) return 'Projeto com foco em backend e arquitetura.';
  return first.length > 105 ? `${first.slice(0, 102)}...` : first;
}

const experiences = [
  { empresa: 'Mercado Livre', cargo: 'Backend Engineer', periodo: '05/2021 - Presente', resumo: 'Quest principal: APIs e serviços escaláveis com Kotlin e Micronaut.', rpg: 'Guilda: Arcanista' },
  { empresa: 'Tudu', cargo: 'Frontend', periodo: '10/2020 - 05/2021', resumo: 'Quest de interface e jornada do usuário em páginas de loja.', rpg: 'Classe: Bardo UI' },
  { empresa: 'Vibe', cargo: 'Full Stack', periodo: '02/2020 - 10/2020', resumo: 'Missões full stack em Java (Play) e AngularJS.', rpg: 'Classe: Ranger Fullstack' },
  { empresa: 'AGTI', cargo: 'Full Stack', periodo: '05/2019 - 05/2020', resumo: 'Criação de plugins em PHP para e-commerce.', rpg: 'Classe: Ferreiro de Plugins' }
];

export function Highlights({ projectsTitle, projectsSubtitle, projectsEmpty, careerTitle }: HighlightsProps) {
  const [repos, setRepos] = useState<RepositoryCard[]>([]);

  useEffect(() => {
    let active = true;

    async function loadRepos() {
      try {
        const reposResponse = await fetch(`https://api.github.com/users/${OWNER}/repos?per_page=100&sort=updated`);
        const reposData = (await reposResponse.json()) as GitHubRepo[];
        if (!Array.isArray(reposData)) return;

        const selectedRepos = reposData.filter((repo) => !repo.fork).sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 6);
        const cards = await Promise.all(selectedRepos.map(async (repo) => {
          const readmeResponse = await fetch(`https://api.github.com/repos/${OWNER}/${repo.name}/readme`, {
            headers: { Accept: 'application/vnd.github.raw+json' }
          });
          const readmeText = readmeResponse.ok ? await readmeResponse.text() : '';
          return { ...repo, descriptionFromReadme: pickShortDescription(readmeText) };
        }));

        if (active) setRepos(cards);
      } catch {
        if (active) setRepos([]);
      }
    }

    loadRepos();
    return () => { active = false; };
  }, []);

  return (
    <section className="parallax-section relative border-b border-slate-300/80 py-14 dark:border-slate-800/80">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-2">
        <div id="projetos">
          <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-300">{projectsTitle}</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{projectsSubtitle}</p>
          <div className="mt-4 space-y-2">
            {repos.length === 0 && <p className="text-sm text-slate-500">{projectsEmpty}</p>}
            {repos.map((repo) => (
              <a key={repo.id} href={repo.html_url} target="_blank" rel="noreferrer" className="block border-b border-slate-300/80 py-3 text-sm hover:bg-cyan-100/40 dark:border-slate-800/80 dark:hover:bg-slate-900/30">
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 font-medium text-fuchsia-700 dark:text-fuchsia-300"><FaGithub className="h-4 w-4" />{repo.name}</span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-slate-500">{repo.language ?? 'Code'}</span>
                </div>
                <p className="mt-1 text-slate-700 dark:text-slate-300">{repo.descriptionFromReadme}</p>
              </a>
            ))}
          </div>
        </div>

        <div id="carreira">
          <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-300">{careerTitle}</h2>
          <ol className="mt-4 space-y-3">
            {experiences.map((job) => (
              <li key={job.empresa} className="border-b border-slate-300/80 pb-3 dark:border-slate-800/80">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{job.empresa}</p>
                  <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-slate-500">{job.periodo}</p>
                </div>
                <p className="mt-1 text-xs uppercase tracking-[0.08em] text-cyan-700 dark:text-cyan-300">{job.cargo}</p>
                <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">{job.resumo}</p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.08em] text-fuchsia-700 dark:text-fuchsia-300">⚔️ {job.rpg}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Highlights;

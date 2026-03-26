import React, { useEffect, useState } from 'react';
import { FaDev, FaGithub } from 'react-icons/fa';

interface ExperienceItem {
  empresa: string;
  cargo: string;
  periodo: string;
  resumo: string;
  rpg: string;
}

interface HighlightsProps {
  githubTitle: string;
  githubSubtitle: string;
  githubEmpty: string;
  articlesTitle: string;
  articlesSubtitle: string;
  articlesEmpty: string;
  careerTitle: string;
  experiences: readonly ExperienceItem[];
}

interface DevToArticle {
  id: number;
  title: string;
  description: string;
  url: string;
  published_at: string;
  type_of?: string;
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

const DEVTO_USERNAME = 'jairo-dev-jr';
const GITHUB_OWNER = 'jairo-dev-junior';

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

export function Highlights({
  githubTitle,
  githubSubtitle,
  githubEmpty,
  articlesTitle,
  articlesSubtitle,
  articlesEmpty,
  careerTitle,
  experiences
}: HighlightsProps) {
  const [repos, setRepos] = useState<RepositoryCard[]>([]);
  const [articles, setArticles] = useState<DevToArticle[]>([]);

  useEffect(() => {
    let active = true;

    async function loadRepos() {
      try {
        const reposResponse = await fetch(`https://api.github.com/users/${GITHUB_OWNER}/repos?per_page=100&sort=updated`);
        const reposData = (await reposResponse.json()) as GitHubRepo[];
        if (!Array.isArray(reposData)) return;

        const selectedRepos = reposData.filter((repo) => !repo.fork).sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 4);
        const cards = await Promise.all(selectedRepos.map(async (repo) => {
          const readmeResponse = await fetch(`https://api.github.com/repos/${GITHUB_OWNER}/${repo.name}/readme`, {
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

    async function loadArticles() {
      try {
        const response = await fetch(`https://dev.to/api/articles?username=${DEVTO_USERNAME}&per_page=6`);
        const data = (await response.json()) as DevToArticle[];
        if (!Array.isArray(data)) return;
        const onlyArticles = data.filter((article) => article.type_of === 'article');
        if (active) setArticles(onlyArticles);
      } catch {
        if (active) setArticles([]);
      }
    }

    loadRepos();
    loadArticles();
    return () => { active = false; };
  }, []);

  return (
    <section className="parallax-section relative border-b border-slate-300/80 py-14 dark:border-slate-800/80">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-3">
        <div id="projetos">
          <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-300">{githubTitle}</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{githubSubtitle}</p>
          <div className="mt-4 space-y-2">
            {repos.length === 0 && <p className="text-sm text-slate-500">{githubEmpty}</p>}
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

        <div id="artigos">
          <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-300">{articlesTitle}</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{articlesSubtitle}</p>
          <div className="mt-4 space-y-2">
            {articles.length === 0 && <p className="text-sm text-slate-500">{articlesEmpty}</p>}
            {articles.map((article) => (
              <a key={article.id} href={article.url} target="_blank" rel="noreferrer" className="block border-b border-slate-300/80 py-3 text-sm hover:bg-cyan-100/40 dark:border-slate-800/80 dark:hover:bg-slate-900/30">
                <div className="flex items-center justify-between gap-3">
                  <span
                    className="inline-flex items-start gap-2 font-medium text-fuchsia-700 dark:text-fuchsia-300"
                    style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
                    title={article.title}
                  >
                    <FaDev className="mt-0.5 h-4 w-4 shrink-0" />
                    {article.title}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-slate-500">
                    {new Date(article.published_at).toLocaleDateString('pt-BR')}
                  </span>
                </div>
                <p className="mt-1 text-slate-700 dark:text-slate-300">{article.description || 'Confira o artigo completo no Dev.to.'}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Highlights;

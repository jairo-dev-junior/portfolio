import React, { useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa';

interface GitHubProjectsProps {
  title: string;
  subtitle: string;
  emptyMessage: string;
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
const MAX_REPOS = 8;

function pickShortDescription(readme: string): string {
  const cleanLines = readme
    .replace(/```[\s\S]*?```/g, ' ')
    .split('\n')
    .map((line) => line.replace(/^#+\s*/, '').replace(/\[([^\]]+)\]\([^)]*\)/g, '$1').trim())
    .filter((line) => line.length > 24);

  const first = cleanLines[0];
  if (!first) return 'Projeto com foco em backend e boas práticas.';
  return first.length > 120 ? `${first.slice(0, 117)}...` : first;
}

export function GitHubProjects({ title, subtitle, emptyMessage }: GitHubProjectsProps) {
  const [repos, setRepos] = useState<RepositoryCard[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    async function loadRepos() {
      try {
        const reposResponse = await fetch(`https://api.github.com/users/${OWNER}/repos?per_page=100&sort=updated`);
        const reposData = (await reposResponse.json()) as GitHubRepo[];

        if (!Array.isArray(reposData)) {
          if (active) setRepos([]);
          return;
        }

        const selectedRepos = reposData
          .filter((repo) => !repo.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, MAX_REPOS);

        const cards = await Promise.all(
          selectedRepos.map(async (repo) => {
            const readmeResponse = await fetch(`https://api.github.com/repos/${OWNER}/${repo.name}/readme`, {
              headers: { Accept: 'application/vnd.github.raw+json' }
            });
            const readmeText = readmeResponse.ok ? await readmeResponse.text() : '';

            return {
              ...repo,
              descriptionFromReadme: pickShortDescription(readmeText)
            };
          })
        );

        if (active) setRepos(cards);
      } catch {
        if (active) setRepos([]);
      } finally {
        if (active) setLoading(false);
      }
    }

    loadRepos();

    return () => {
      active = false;
    };
  }, []);

  return (
    <section id="projetos" className="relative scroll-mt-24">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <h2 className="text-lg font-semibold text-slate-100">{title}</h2>
        <p className="mt-1 text-sm text-slate-400">{subtitle}</p>

        {loading && <p className="mt-4 text-sm text-slate-400">Carregando...</p>}
        {!loading && repos.length === 0 && <p className="mt-4 text-sm text-slate-400">{emptyMessage}</p>}

        {repos.length > 0 && (
          <div className="mt-4 space-y-3">
            {repos.map((repo) => (
              <a key={repo.id} href={repo.html_url} target="_blank" rel="noreferrer" className="block rounded-2xl border border-violet-500/20 bg-[#151624] p-4 transition hover:border-violet-400/50">
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-violet-200">
                    <FaGithub className="h-4 w-4" />
                    {repo.name}
                  </span>
                  <span className="text-xs text-slate-400">{repo.language ?? 'Code'}</span>
                </div>
                <p className="mt-1 text-sm text-slate-300">{repo.descriptionFromReadme}</p>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default GitHubProjects;

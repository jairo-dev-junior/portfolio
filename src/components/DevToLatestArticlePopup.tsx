import React, { useEffect, useState } from 'react';

interface DevToLatestArticlePopupProps {
  label: string;
  dismissLabel: string;
}

interface DevToArticle {
  id: number;
  type_of?: string;
  title: string;
  url: string;
  published_at?: string;
  published_timestamp?: string;
  reading_time_minutes?: number;
}

const DEVTO_USERNAME = 'jairo-dev-jr';
const DEVTO_ENDPOINT = `https://dev.to/api/articles?username=${DEVTO_USERNAME}&page=1&per_page=20`;
const MIN_READING_TIME_MINUTES = 3;
const POLLING_INTERVAL_MS = 120000;

function getPublishedDate(article: DevToArticle): number {
  const date = article.published_timestamp || article.published_at;
  return date ? new Date(date).getTime() : 0;
}

export function DevToLatestArticlePopup({ label, dismissLabel }: DevToLatestArticlePopupProps) {
  const [latestArticle, setLatestArticle] = useState<DevToArticle | null>(null);

  useEffect(() => {
    let active = true;

    async function syncLatestArticle() {
      try {
        const response = await fetch(DEVTO_ENDPOINT);
        const data = (await response.json()) as DevToArticle[];
        if (!active || !Array.isArray(data)) return;

        const newestArticle = data
          .filter((article) => article.type_of === 'article' && (article.reading_time_minutes ?? 0) >= MIN_READING_TIME_MINUTES)
          .sort((a, b) => getPublishedDate(b) - getPublishedDate(a))[0];

        setLatestArticle(newestArticle ?? null);
      } catch {
        if (active) setLatestArticle(null);
      }
    }

    syncLatestArticle();
    const intervalId = window.setInterval(syncLatestArticle, POLLING_INTERVAL_MS);

    return () => {
      active = false;
      window.clearInterval(intervalId);
    };
  }, []);

  if (!latestArticle) return null;

  return (
    <div className="popup-slide-in-right fixed right-4 top-4 z-50 w-[min(92vw,380px)] rounded-2xl border border-fuchsia-300/80 bg-gradient-to-br from-white via-fuchsia-50 to-violet-50 p-4 pr-10 shadow-[0_12px_34px_rgba(168,85,247,0.25)] dark:border-fuchsia-800/80 dark:from-slate-900 dark:via-[#23102f] dark:to-[#1f1b3a]">
      <p className="text-base font-bold tracking-wide text-fuchsia-700 dark:text-fuchsia-300">{label}</p>
      <a
        href={latestArticle.url}
        target="_blank"
        rel="noreferrer"
        className="mt-1 block text-sm font-bold text-violet-700 hover:text-fuchsia-700 dark:text-violet-200 dark:hover:text-fuchsia-300"
      >
        {latestArticle.title}
      </a>
      <button
        type="button"
        onClick={() => setLatestArticle(null)}
        aria-label={dismissLabel}
        className="absolute right-3 top-2 text-lg font-bold leading-none text-fuchsia-500 hover:text-fuchsia-700 dark:text-fuchsia-300 dark:hover:text-fuchsia-100"
      >
        ×
      </button>
    </div>
  );
}

export default DevToLatestArticlePopup;

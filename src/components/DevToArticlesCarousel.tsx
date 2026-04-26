import React, { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { FaDev } from 'react-icons/fa';

interface DevToArticlesCarouselProps {
  title: string;
  subtitle: string;
  emptyLabel: string;
  newArticleLabel: string;
  dismissLabel: string;
}

interface DevToArticle {
  id: number;
  type_of?: string;
  title: string;
  description: string;
  url: string;
  cover_image: string | null;
  social_image: string;
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

export function DevToArticlesCarousel({
  title,
  subtitle,
  emptyLabel,
  newArticleLabel,
  dismissLabel,
}: DevToArticlesCarouselProps) {
  const [articles, setArticles] = useState<DevToArticle[]>([]);
  const [featuredLatestArticle, setFeaturedLatestArticle] = useState<DevToArticle | null>(null);

  useEffect(() => {
    let active = true;

    async function syncArticles() {
      try {
        const response = await fetch(DEVTO_ENDPOINT);
        const data = (await response.json()) as DevToArticle[];
        if (!active || !Array.isArray(data)) return;

        const longFormArticles = data
          .filter((article) => article.type_of === 'article' && (article.reading_time_minutes ?? 0) >= MIN_READING_TIME_MINUTES)
          .sort((a, b) => getPublishedDate(b) - getPublishedDate(a));

        setArticles(longFormArticles.slice(0, 8));

        const newestArticle = longFormArticles[0];
        setFeaturedLatestArticle(newestArticle ?? null);
      } catch {
        if (active) setArticles([]);
      }
    }

    syncArticles();
    const intervalId = window.setInterval(syncArticles, POLLING_INTERVAL_MS);

    return () => {
      active = false;
      window.clearInterval(intervalId);
    };
  }, []);

  const loop = useMemo(() => [...articles, ...articles], [articles]);

  const topPopup = featuredLatestArticle ? (
    <div className="popup-slide-in-right fixed right-4 top-4 z-50 w-[min(92vw,380px)] rounded-2xl border border-fuchsia-300/80 bg-gradient-to-br from-white via-fuchsia-50 to-violet-50 p-4 shadow-[0_12px_34px_rgba(168,85,247,0.25)] dark:border-fuchsia-800/80 dark:from-slate-900 dark:via-[#23102f] dark:to-[#1f1b3a]">
      <p className="text-sm font-semibold tracking-wide text-fuchsia-700 dark:text-fuchsia-300">{newArticleLabel}</p>
      <a
        href={featuredLatestArticle.url}
        target="_blank"
        rel="noreferrer"
        className="mt-1 block text-sm font-medium text-violet-700 underline decoration-fuchsia-400 underline-offset-2 hover:text-fuchsia-700 dark:text-violet-200 dark:hover:text-fuchsia-300"
      >
        {featuredLatestArticle.title}
      </a>
      <button
        type="button"
        onClick={() => setFeaturedLatestArticle(null)}
        className="mt-3 rounded-md border border-fuchsia-200 bg-white/60 px-3 py-1 text-xs text-fuchsia-700 hover:bg-fuchsia-100 dark:border-fuchsia-900 dark:bg-slate-800/50 dark:text-fuchsia-300 dark:hover:bg-fuchsia-950/40"
      >
        {dismissLabel}
      </button>
    </div>
  ) : null;

  return (
    <>
      {typeof document !== 'undefined' ? createPortal(topPopup, document.body) : null}
      <section id="artigos" className="parallax-section relative border-b border-slate-300/80 py-12 dark:border-slate-800/80">
        <div className="mx-auto max-w-6xl px-4">
        <h2 className="font-mono text-[17px] uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-300">{title}</h2>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{subtitle}</p>

        {articles.length === 0 ? (
          <p className="mt-4 text-sm text-slate-500">{emptyLabel}</p>
        ) : (
          <div className="mt-6 overflow-hidden py-2">
            <div className="flex min-w-max animate-[marquee_45s_linear_infinite] gap-4">
              {loop.map((article, index) => (
                <a
                  key={`${article.id}-${index}`}
                  href={article.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-[310px] shrink-0 overflow-hidden rounded-xl border border-slate-300/80 bg-white/80 shadow-sm transition hover:-translate-y-1 hover:bg-cyan-50 dark:border-slate-800/80 dark:bg-slate-900/40 dark:hover:bg-slate-900/70"
                >
                  <img
                    src={article.cover_image || article.social_image}
                    alt={article.title}
                    loading="lazy"
                    className="h-36 w-full object-cover"
                  />
                  <div className="space-y-2 p-4">
                    <p
                      className="inline-flex items-start gap-2 text-sm font-semibold text-fuchsia-700 dark:text-fuchsia-300"
                      style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
                      title={article.title}
                    >
                      <FaDev className="mt-0.5 h-4 w-4 shrink-0" />
                      {article.title}
                    </p>
                    <p
                      className="text-sm text-slate-700 dark:text-slate-300"
                      style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
                    >
                      {article.description || 'Confira o artigo completo no Dev.to.'}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
        </div>
      </section>
    </>
  );
}

export default DevToArticlesCarousel;

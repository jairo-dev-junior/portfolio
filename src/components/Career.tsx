import React from 'react';

interface CareerProps {
  title: string;
}

function GalagaShip() {
  return (
    <svg viewBox="0 0 24 24" className="float-ship h-5 w-5" aria-hidden="true">
      <path d="M12 2 L16 8 L14 8 L14 11 L18 14 L15 14 L13 18 L11 18 L9 14 L6 14 L10 11 L10 8 L8 8 Z" fill="currentColor" />
      <rect x="11" y="18" width="2" height="3" fill="#22d3ee" className="pulse-glow" />
    </svg>
  );
}

export function Career({ title }: CareerProps) {
  const jobs = [
    { empresa: 'Mercado Livre', cargo: 'Backend Engineer', periodo: '05/2021 - Presente', resumo: 'Aplicações escaláveis com foco em performance usando Kotlin e Micronaut.' },
    { empresa: 'Tudu', cargo: 'Frontend', periodo: '10/2020 - 05/2021', resumo: 'Manutenções e evoluções em páginas de loja com foco em UX.' },
    { empresa: 'Vibe', cargo: 'Full Stack', periodo: '02/2020 - 10/2020', resumo: 'Backend em Java (Play Framework) e frontend com AngularJS.' },
    { empresa: 'AGTI', cargo: 'Full Stack', periodo: '05/2019 - 05/2020', resumo: 'Criação de plugins para Prestashop (PHP).' },
  ];

  return (
    <section id="carreira" className="relative border-b border-slate-300/80 scroll-mt-24 dark:border-slate-800/80">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-14 md:grid-cols-[180px_1fr]">
        <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-300">{title}</h2>
        <ol className="space-y-6">
          {jobs.map((job) => (
            <li key={job.empresa} className="grid grid-cols-[32px_1fr] gap-3">
              <div className="pt-1 text-fuchsia-700 dark:text-fuchsia-300">
                <GalagaShip />
              </div>
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{job.empresa}</p>
                  <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-slate-500">{job.periodo}</p>
                </div>
                <p className="mt-1 text-xs uppercase tracking-[0.08em] text-cyan-700 dark:text-cyan-300">{job.cargo}</p>
                <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">{job.resumo}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Career;

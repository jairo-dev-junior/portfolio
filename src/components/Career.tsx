import React from 'react';

interface CareerProps {
  title: string;
}

export function Career({ title }: CareerProps) {
  const jobs = [
    { empresa: 'Mercado Livre', cargo: 'Backend Engineer', periodo: '05/2021 - Presente', resumo: 'Aplicações escaláveis com foco em performance usando Kotlin e Micronaut.' },
    { empresa: 'Tudu', cargo: 'Frontend', periodo: '10/2020 - 05/2021', resumo: 'Manutenções e evoluções em páginas de loja com foco em UX.' },
    { empresa: 'Vibe', cargo: 'Full Stack', periodo: '02/2020 - 10/2020', resumo: 'Backend em Java (Play Framework) e frontend com AngularJS.' },
    { empresa: 'AGTI', cargo: 'Full Stack', periodo: '05/2019 - 05/2020', resumo: 'Criação de plugins para Prestashop (PHP).' },
  ];

  return (
    <section id="carreira" className="relative border-b border-slate-800/80 scroll-mt-24">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-14 md:grid-cols-[180px_1fr]">
        <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-300">{title}</h2>
        <ol className="border-l border-fuchsia-400/30 pl-4">
          {jobs.map((job) => (
            <li key={job.empresa} className="relative mb-6 last:mb-0">
              <span className="absolute -left-[21px] top-1.5 h-2 w-2 bg-fuchsia-300" />
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-sm font-semibold text-slate-100">{job.empresa}</p>
                <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-slate-500">{job.periodo}</p>
              </div>
              <p className="mt-1 text-xs uppercase tracking-[0.08em] text-cyan-300">{job.cargo}</p>
              <p className="mt-1 text-sm text-slate-300">{job.resumo}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Career;

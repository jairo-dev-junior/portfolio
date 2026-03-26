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
    <section id="carreira" className="relative scroll-mt-24">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <h2 className="mb-4 text-lg font-semibold text-slate-100">{title}</h2>
        <ol className="space-y-3">
          {jobs.map((job) => (
            <li key={job.empresa} className="rounded-2xl border border-violet-500/20 bg-[#151624] p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-sm font-semibold text-slate-100">{job.empresa}</p>
                <p className="text-xs text-slate-400">{job.periodo}</p>
              </div>
              <p className="mt-1 text-xs text-violet-200">{job.cargo}</p>
              <p className="mt-1 text-sm text-slate-300">{job.resumo}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Career;

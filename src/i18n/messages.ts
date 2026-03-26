export type Locale = 'pt' | 'en';

export const messages = {
  pt: {
    menu: { tecnologias: 'Stack', projetos: 'Projetos', carreira: 'Carreira', contatos: 'Contatos' },
    hero: {
      title: 'Backend Engineer que entrega software rápido, limpo e escalável',
      subtitle: 'Construo APIs, integrações e arquitetura para sistemas que precisam performar. Java/Kotlin, Spring/Micronaut, bancos relacionais e observabilidade fazem parte do meu dia a dia.',
      btnView: 'Ver Tecnologias',
      btnSite: 'Ver site atual',
    },
    about: {
      title: 'Meu perfil',
      text: 'Sou desenvolvedor com foco em backend e visão de produto. Gosto de resolver problemas de negócio com código simples, testes e boa arquitetura. Também atuo com frontend quando necessário para fechar entregas com qualidade ponta a ponta.',
    },
    tech: { title: 'Stack principal', backend: 'Backend', frontend: 'Frontend de apoio' },
    projects: {
      title: 'Repositórios do GitHub',
      subtitle: 'Seleção automática dos meus repositórios públicos com destaques de backend.',
      empty: 'Não consegui carregar os repositórios agora. Tente novamente em instantes.'
    },
    articles: {
      title: 'Grimório de Artigos: aventuras reais em backend',
      subtitle: 'Apenas artigos do meu Dev.to com aprendizados, arquitetura e histórias de produção.',
      empty: 'Não consegui carregar os artigos agora. Tente novamente em instantes.'
    },
    career: {
      title: 'Experiência profissional',
      items: [
        { empresa: 'Mercado Livre', cargo: 'Backend Engineer', periodo: '05/2021 - Presente', resumo: 'Quest principal: APIs e serviços escaláveis com Kotlin e Micronaut.', rpg: 'Guilda: Arcanista' },
        { empresa: 'Tudu', cargo: 'Frontend', periodo: '10/2020 - 05/2021', resumo: 'Quest de interface e jornada do usuário em páginas de loja.', rpg: 'Classe: Bardo UI' },
        { empresa: 'Vibe', cargo: 'Full Stack', periodo: '02/2020 - 10/2020', resumo: 'Missões full stack em Java (Play) e AngularJS.', rpg: 'Classe: Ranger Fullstack' },
        { empresa: 'AGTI', cargo: 'Full Stack', periodo: '05/2019 - 05/2020', resumo: 'Criação de plugins em PHP para e-commerce.', rpg: 'Classe: Ferreiro de Plugins' }
      ]
    },
    contacts: { location: 'Lins, São Paulo', github: 'GitHub', linkedin: 'LinkedIn', devto: 'Dev.to' },
    downloadCV: 'Baixar CV',
  },
  en: {
    menu: { tecnologias: 'Stack', projetos: 'Projects', carreira: 'Career', contatos: 'Contacts' },
    hero: {
      title: 'Backend Engineer focused on fast, clean and scalable delivery',
      subtitle: 'I build APIs, integrations and architecture for systems that need to perform. Java/Kotlin, Spring/Micronaut, relational databases and observability are my daily tools.',
      btnView: 'View Tech',
      btnSite: 'View current site',
    },
    about: {
      title: 'Profile',
      text: 'I am a backend-focused developer with product mindset. I like solving business problems with simple code, tests and clear architecture. I also work on frontend when needed to deliver end-to-end quality.',
    },
    tech: { title: 'Main stack', backend: 'Backend', frontend: 'Support frontend' },
    projects: {
      title: 'GitHub repositories',
      subtitle: 'Automatic selection of my public repositories with backend-focused highlights.',
      empty: 'I could not load repositories right now. Please try again soon.'
    },
    articles: {
      title: 'Article Grimoire: real-world backend quests',
      subtitle: 'Only articles from my Dev.to with lessons learned, architecture choices and production stories.',
      empty: 'I could not load articles right now. Please try again soon.'
    },
    career: {
      title: 'Professional experience',
      items: [
        { empresa: 'Mercado Livre', cargo: 'Backend Engineer', periodo: '05/2021 - Present', resumo: 'Main quest: scalable APIs and services with Kotlin and Micronaut.', rpg: 'Guild: Arcanist' },
        { empresa: 'Tudu', cargo: 'Frontend', periodo: '10/2020 - 05/2021', resumo: 'UI and user journey quests on e-commerce pages.', rpg: 'Class: UI Bard' },
        { empresa: 'Vibe', cargo: 'Full Stack', periodo: '02/2020 - 10/2020', resumo: 'Full stack missions with Java (Play) and AngularJS.', rpg: 'Class: Fullstack Ranger' },
        { empresa: 'AGTI', cargo: 'Full Stack', periodo: '05/2019 - 05/2020', resumo: 'Plugin crafting in PHP for e-commerce.', rpg: 'Class: Plugin Blacksmith' }
      ]
    },
    contacts: { location: 'Lins, São Paulo', github: 'GitHub', linkedin: 'LinkedIn', devto: 'Dev.to' },
    downloadCV: 'Download CV',
  }
} as const;
export type Messages = typeof messages;

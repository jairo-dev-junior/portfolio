export type Locale = 'pt' | 'en';

export const messages = {
  pt: {
    menu: { sobre: 'Sobre', tecnologias: 'Stack', projetos: 'Projetos', carreira: 'Carreira', contatos: 'Contatos' },
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
      subtitle: 'Seleção automática dos meus repositórios públicos, com descrições curtas extraídas do README de cada projeto.',
      empty: 'Não consegui carregar os repositórios agora. Tente novamente em instantes.'
    },
    career: { title: 'Experiência profissional' },
    contacts: { location: 'Lins, São Paulo', github: 'GitHub', linkedin: 'LinkedIn', site: 'Site' },
    downloadCV: 'Baixar CV',
  },
  en: {
    menu: { sobre: 'About', tecnologias: 'Stack', projetos: 'Projects', carreira: 'Career', contatos: 'Contacts' },
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
      subtitle: 'Automatic selection of my public repositories with short descriptions extracted from each project README.',
      empty: 'I could not load repositories right now. Please try again soon.'
    },
    career: { title: 'Professional experience' },
    contacts: { location: 'Lins, São Paulo', github: 'GitHub', linkedin: 'LinkedIn', site: 'Site' },
    downloadCV: 'Download CV',
  }
} as const;
export type Messages = typeof messages;

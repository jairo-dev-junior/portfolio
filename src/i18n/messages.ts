export type Locale = 'pt' | 'en';

export const messages = {
  pt: {
    menu: { sobre: 'Sobre', tecnologias: 'Tecnologias', carreira: 'Carreira', contatos: 'Contatos' },
    hero: {
      title: 'Programador, músico e seguidor de Jesus Cristo',
      subtitle: 'Olá, sou Jairo Junior, desenvolvedor e entusiasta de tecnologia. Atuo principalmente em backend com Java/Kotlin (Spring, Micronaut) e bancos relacionais, e no frontend com JavaScript/React. Apaixonado por performance, escalabilidade e código limpo.',
      btnView: 'Ver Tecnologias',
      btnSite: 'Ver site atual',
    },
    about: {
      title: 'Quem sou eu?',
      text: 'Amo tudo vinculado com programação e estou na jornada para me tornar um desenvolvedor completo em diferentes áreas. Tenho conhecimento em Java, Kotlin, JavaScript, MySQL, PostgreSQL, Spring, React, entre outras tecnologias. No que eu puder te ajudar, é só chamar!',
    },
    tech: { title: 'Tecnologias', backend: 'Backend', frontend: 'Frontend' },
    career: { title: 'Carreira' },
    contacts: { location: 'Lins, São Paulo', github: 'GitHub', linkedin: 'LinkedIn', site: 'Site' },
    downloadCV: 'Baixar CV',
  },
  en: {
    menu: { sobre: 'About', tecnologias: 'Tech', carreira: 'Career', contatos: 'Contacts' },
    hero: {
      title: 'Programmer, musician and follower of Jesus Christ',
      subtitle: "Hi, I'm Jairo Junior, developer and tech enthusiast. I mainly work on backend with Java/Kotlin (Spring, Micronaut) and relational databases, and on the frontend with JavaScript/React. Passionate about performance, scalability and clean code.",
      btnView: 'View Tech',
      btnSite: 'View current site',
    },
    about: {
      title: 'Who am I?',
      text: 'I love everything related to programming and I am on a journey to become a complete developer in different areas. I have knowledge in Java, Kotlin, JavaScript, MySQL, PostgreSQL, Spring, React, among other technologies. If I can help you, just call me!',
    },
    tech: { title: 'Technologies', backend: 'Backend', frontend: 'Frontend' },
    career: { title: 'Career' },
    contacts: { location: 'Lins, São Paulo', github: 'GitHub', linkedin: 'LinkedIn', site: 'Site' },
    downloadCV: 'Download CV',
  }
} as const;
export type Messages = typeof messages; 
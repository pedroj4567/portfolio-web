import {
  Actions,
  Aws,
  Css,
  Dart,
  Docker,
  Express,
  Flutter,
  Gin,
  Github,
  Golang,
  Graphql,
  Html,
  Javascript,
  Mongo,
  Mysql,
  Nestjs,
  Nodejs,
  Odoo,
  Postgresql,
  Python,
  ReactLogo,
  Tailwinds,
  Typescript,
} from "../components/icons";

export const technologies = [
  {
    id: 1,
    name: "Javascript",
    icon: Javascript,
  },
  {
    id: 2,
    name: "Typescript",
    icon: Typescript,
  },
  {
    id: 3,
    name: "Python",
    icon: Python,
  },
  {
    id: 5,
    name: "Golang",
    icon: Golang,
  },
  {
    id: 6,
    name: "Dart",
    icon: Dart,
  },
];

export const frameworksAndLibrariesPerTechnologie = {
  frontend: [
    {
      id: 1,
      name: "HTML5",
      icon: Html,
    },
    {
      id: 2,
      name: "Css3",
      icon: Css,
    },
    {
      id: 3,
      name: "Tailwind",
      icon: Tailwinds,
    },
    {
      id: 4,
      name: "React",
      icon: ReactLogo,
    },
    {
      id: 5,
      name: "Flutter",
      icon: Flutter,
    },
  ],
  backend: [
    {
      id: 1,
      name: "Node.js",
      icon: Nodejs,
    },
    {
      id: 2,
      name: "Nest.js",
      icon: Nestjs,
    },
    {
      id: 3,
      name: "Graphql",
      icon: Graphql,
    },
    {
      id: 4,
      name: "Express",
      icon: Express,
    },
    {
      id: 5,
      name: "Odoo",
      icon: Odoo,
    },
    {
      id: 5,
      name: "Gin",
      icon: Gin,
    },
  ],

  cloud: [
    {
      id: 1,
      name: "Amazon Web Services",
      icon: Aws,
    },
    {
      id: 2,
      name: "Docker",
      icon: Docker,
    },
    {
      id: 3,
      name: "Github Actions",
      icon: Actions,
    },
    {
      id: 4,
      name: "Git",
      icon: Github,
    },
  ],

  databases: [
    {
      id: 1,
      name: "Mysql",
      icon: Mysql,
    },
    {
      id: 2,
      name: "Postgresql",
      icon: Postgresql,
    },
    {
      id: 3,
      name: "MongoDB",
      icon: Mongo,
    },
  ],
};

export const workExperiences = [
  {
    id: 1,
    date: "2024-2025",
    title: "Desarrollador Backend",
    place: "Santiago de Chile, Chile.",
    caption:
      "Desarrollé apps escalables con Node.js, Python, GraphQL y PostgreSQL. Usé AWS (Cognito, Lambda, RDS) y optimicé flujos para máxima eficiencia.",
    businessName: "Smart Compliance",
    end: true,
  },
  {
    id: 2,
    date: "2024-2024",
    title: "Desarrollador Backend",
    place: "Caracas, Venezuela.",
    caption:
      "Desarrollé microservicios escalables con Node.js, Nest.js, Java y Spring Boot. Usé MySQL para datos, Docker para contenedores, y optimicé la lógica para alto rendimiento en entornos de alta demanda",
    businessName: "Global Resources",
    end: false,
  },

  {
    id: 3,
    date: "2024-2024",
    title: "Desarrollador Backend",
    place: "CDMX, México.",
    caption:
      "Desarrollé microservicios escalables con Nest.js, Java Playframework y Golang. Usé Liquibase para migraciones de bases de datos e integré gRPC para comunicación eficiente entre servicios en entornos de alta demanda.",
    businessName: "Mercanto",
    end: true,
  },
  {
    id: 4,
    date: "2022-2024",
    title: "Desarrollador de Software",
    place: "San Juan de Los Morros. Guarico,Venezuela.",
    caption:
      "Desarrollé  módulos administrativos personalizados utilizando Odoo en su versión 12, realizando análisis de vulnerabilidades con OWASP ZAP para garantizar la seguridad del software, gestionando y dando seguimiento a las tareas del equipo de desarrollo, y ejecutando pruebas de integración para asegurar la calidad y funcionalidad de las tareas implementadas.",
    businessName: "Sistema Tecnologicos Alcaravan S.A",
    end: false,
  },
  {
    id: 5,
    date: "2022-203",
    title: "Desarrollador de Software Junior",
    place: "La Victoria. Aragua,Venezuela.",
    caption:
      "Participación en el desarrollo de software, colaborando en la estructuración y gestión de redes, creación de APIs con Express, maquetación de interfaces de usuario en Figma, brindando soporte técnico a equipos de computo, y apoyando en el control y gestión de proyectos para asegurar su correcta ejecución y entrega",
    businessName: "Novadev Technologies",
    end: true,
  },
  {
    id: 6,
    date: "2020-203",
    title: "Desarrollador de software Freelancer",
    place: "Cualquier parte del mundo.",
    caption:
      "Desarrollé microservicios escalables con Node.js, Golang y Python, manejando bases de datos relacionales y no relacionales. Analicé requerimientos, diseñé interfaces modernas con React.js y Next.js, y refactoricé código usando arquitectura hexagonal y Clean Code para mejorar mantenibilidad y escalabilidad",
    businessName: "Freelancer",
    end: false,
  },
];

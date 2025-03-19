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

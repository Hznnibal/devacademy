import { Code2, Globe, Server, Terminal } from "lucide-react";
import { NavItem } from "./types";

export const navigationItems: NavItem[] = [
  {
    title: "Introduction au Développement Web",
    icon: <Terminal className="h-5 w-5" />,
    progress: 0,
    isMainMenu: true,
    submenu: [

      {
        title: "Qu'est-ce que le Développement Web",
        isMainMenu: false,
        submenu: [
          { title: "Introduction", href: "/basics/intro/introduction" },
          // { title: "Pourquoi apprendre le développement web ?", href: "/basics/intro/why-learn" },
          { title: "Roadmap pour être développeur", href: "/basics/intro/roadmap" },
          { title: "Les différents types de développeur web", href: "/basics/intro/types" },
        ],
      },
      {
        title: "Installation des outils nécessaires",
        isMainMenu: false,
        submenu: [
          { title: "Git & GitHub", href: "/basics/install/git" },
          // { title: "Télécharger Node.js", href: "/basics/install/nodejs" },
          { title: "VS Code", href: "/basics/install/vscode-setup" },
        ],
      },
      // {
      //   title: "Premiers pas",
      //   isMainMenu: false,
      //   submenu: [
      //     { title: "Installation de Git", href: "/basics/git/install" },
      //     { title: "Cloner un repository", href: "/basics/git/clone" },
      //     { title: "Créer une branche", href: "/basics/git/create-branch" },
      //   ],
      // },
    ],
  },
  {
    title: "Construire une interface (Frontend)",
    icon: <Globe className="h-5 w-5" />,
    progress: 0,
    isMainMenu: true,
    submenu: [
      {
        title: "HTML",
        isMainMenu: false,
        submenu: [
          { title: "Structure de base d'une page HTML", href: "/frontend/html/html01_presentation" },
          { title: "Balise et sectionnement", href: "/frontend/html/html02_balise" },
          { title: "Mise en forme", href: "/frontend/html/html03_miseenforme" },
          { title: "Liens", href: "/frontend/html/html04_liens" },
          { title: "Listes", href: "/frontend/html/html05_listes" },
          { title: "Médias", href: "/frontend/html/html06_medias" },
          { title: "Tableaux", href: "/frontend/html/html07_tableaux" },
          { title: "Formulaires", href: "/frontend/html/html08_formulaire" },
          // { title: "Les éléments essentiels (titres, liens, images)", href: "/frontend/html/elements" },
          // { title: "HTML5 Avancé", href: "/frontend/html5" },
        ],
      },
      {
        title: "CSS",
        isMainMenu: false,
        submenu: [
          { title: "Présentation du CSS", href: "/frontend/css/css01_intro" },
          { title: "Sélecteurs", href: "/frontend/css/css02_selecteurs" },
          { title: "Couleurs et polices de caractères", href: "/frontend/css/css03_polices_et_couleurs" },
          { title: "Modèles de boîtes", href: "/frontend/css/css04_modeles_de_boites" },
          { title: "Positionnement", href: "/frontend/css/css05_positionnement" },
          { title: "Responsive", href: "/frontend/css/css06_responsive" },
          { title: "Exercices", href: "/frontend/css/css07_exercices" },
        ],
      },
      {
        title: "JavaScript",
        isMainMenu: false,
        submenu: [
          { title: "Les bases du langage", href: "/frontend/js/js01_base" },
          { title: "Variables", href: "/frontend/js/js02_variables" },
          { title: "Afficher du texte", href: "/frontend/js/js03_displaying_text" },
          { title: "Operators", href: "/frontend/js/js04_operators" },
          { title: "Conditions", href: "/frontend/js/js05_conditions" },
          { title: "Les boucles", href: "/frontend/js/js06_boucles" },
          { title: "Les fonctions", href: "/frontend/js/js07_fonctions" },
          { title: "Les tableaux", href: "/frontend/js/js08_tableaux" },
          { title: "ES6+ et syntaxe moderne", href: "/frontend/js/es6" },
          { title: "DOM & Events", href: "/frontend/js/dom" },
          { title: "Web APIs", href: "/frontend/js/web-apis" },
        ],
      },
    ],
  },
  {
    title: "Programmation Web Backend",
    icon: <Server className="h-5 w-5" />,
    progress: 0,
    isMainMenu: true,
    submenu: [
      {
        title: "Langages Backend",
        isMainMenu: false,
        submenu: [
          { title: "Introduction à Node.js", href: "/backend/languages/nodejs" },
          { title: "Introduction à Python", href: "/backend/languages/python" },
        ],
      },
      {
        title: "Bases de données",
        isMainMenu: false,
        submenu: [
          { title: "Introduction aux bases de données", href: "/backend/databases/intro" },
          { title: "Bases relationnelles (SQL)", href: "/backend/databases/sql" },
          { title: "Bases NoSQL (MongoDB)", href: "/backend/databases/nosql" },
        ],
      },
      {
        title: "API Backend",
        isMainMenu: false,
        submenu: [
          { title: "Création d'une API REST", href: "/backend/api/rest" },
          { title: "Création d'une API GraphQL", href: "/backend/api/graphql" },
          { title: "Authentification et JWT", href: "/backend/api/auth" },
        ],
      },
    ],
  },
  {
    title: "React & Écosystème",
    icon: <Code2 className="h-5 w-5" />,
    progress: 0,
    submenu: [
      // { title: "Télécharger Node.js", href: "/basics/install/nodejs" },
      { title: "Pourquoi React ?", href: "/react/why-react" },
      { title: "React Fondamentaux", href: "/react/basics" },
      { title: "Hooks & État", href: "/react/hooks" },
      { title: "Context & Redux", href: "/react/state-management" },
      { title: "React Router", href: "/react/routing" },
      { title: "Tests avec Jest", href: "/react/testing" },
      { title: "React Query", href: "/react/query" },
      { title: "TypeScript avec React", href: "/react/typescript" },
    ],
  },
  {
    title: "Déploiement & Gestion de Projet",
    icon: <Globe className="h-5 w-5" />,
    progress: 0,
    submenu: [
      { title: "Introduction au déploiement", href: "/deployment/intro" },
      { title: "Déployer avec Vercel", href: "/deployment/vercel" },
      { title: "Outils de gestion de projet", href: "/tools/project-management" },
    ],
  },
];

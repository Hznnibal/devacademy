import { BookOpen, Cpu, Database, Layout, Shield, Terminal } from "lucide-react";
import { NavItem } from "./types";

export const navigationItems: NavItem[] = [
  {
    title: "Introduction to Web Development",
    icon: <BookOpen className="h-5 w-5" />,
    progress: 0,
    isMainMenu: true,
    submenu: [
      {
        title: "What is Web Development?",
        isMainMenu: false,
        submenu: [
          { title: "Introduction", href: "/en/intro/intro/introduction" },
          { title: "Different Types of Web Developers", href: "/en/intro/intro/types" },
        ],
      },
      {
        title: "Setting Up Necessary Tools",
        isMainMenu: false,
        submenu: [
          { title: "VS Code", href: "/en/intro/install/vscode-setup" },
          { title: "Bash commands", href: "/en/intro/install/bash" },
        ],
      },
    ],
  },
  {
    title: "Building an Interface",
    icon: <Layout className="h-5 w-5" />,
    progress: 0,
    isMainMenu: true,
    submenu: [
      {
        title: "HTML",
        isMainMenu: false,
        submenu: [
          { title: "Basic Structure of an HTML Page", href: "/en/basics/html/html01_presentation" },
          { title: "Tags and Sectioning", href: "/en/basics/html/html02_balise" },
          { title: "Styling", href: "/en/basics/html/html03_miseenforme" },
          { title: "Links", href: "/en/basics/html/html04_liens" },
          { title: "Lists", href: "/en/basics/html/html05_listes" },
          { title: "Media", href: "/en/basics/html/html06_medias" },
          { title: "Tables", href: "/en/basics/html/html07_tableaux" },
          { title: "Forms", href: "/en/basics/html/html08_formulaire" },
        ],
      },
      {
        title: "CSS",
        isMainMenu: false,
        submenu: [
          { title: "Introduction to CSS", href: "/en/basics/css/css01_intro" },
          { title: "Selectors", href: "/en/basics/css/css02_selecteurs" },
          { title: "Colors and Fonts", href: "/en/basics/css/css03_polices_et_couleurs" },
          { title: "Box Models", href: "/en/basics/css/css04_modeles_de_boites" },
          { title: "Positioning", href: "/en/basics/css/css05_positionnement" },
          { title: "Responsive Design", href: "/en/basics/css/css06_responsive" },
          { title: "Exercises", href: "/en/basics/css/css07_exercices" },
        ],
      },
      {
        title: "JavaScript",
        isMainMenu: false,
        submenu: [
          { title: "Basics of the Language", href: "/en/basics/js/js01_base" },
          { title: "Variables", href: "/en/basics/js/js02_variables" },
          { title: "Displaying Text", href: "/en/basics/js/js03_displaying_text" },
          { title: "Operators", href: "/en/basics/js/js04_operators" },
          { title: "Conditions", href: "/en/basics/js/js05_conditions" },
          { title: "Loops", href: "/en/basics/js/js06_boucles" },
          { title: "Functions", href: "/en/basics/js/js07_fonctions" },
          { title: "Arrays", href: "/en/basics/js/js08_tableaux" },
          { title: "D.O.M", href: "/en/basics/js/js09_dom" },
          { title: "Native Objects", href: "/en/basics/js/js10_objectsnatif" },
          { title: "JavaScript on the Web", href: "/en/basics/js/js11_javascript_in_web" },
          { title: "Events", href: "/en/basics/js/js12_events" },
          { title: "Regular Expressions", href: "/en/basics/js/js13_regex" },
          { title: "Forms", href: "/en/basics/js/js14_formulaires" },
        ],
      },
      {
        title: "GIT & GitHub",
        isMainMenu: false,
        submenu: [
          { title: "What is GIT?", href: "/en/basics/git/git01_intro" },
          { title: "Commit", href: "/en/basics/git/git02_commit" },
          { title: "Logs", href: "/en/basics/git/git03_historique" },
          { title: "GitHub", href: "/en/basics/git/git04_github" },
          { title: ".gitignore", href: "/en/basics/git/git05_gitignore" },
        ],
      }
    ],
  },
  {
    title: "Databases & SQL",
    icon: <Database className="h-5 w-5" />,
    progress: 0,
    isMainMenu: true,
    submenu: [
      {
        title: "Database",
        isMainMenu: false,
        submenu: [
          { title: "Introduction", href: "/en/backend/database/db01_intro" },
          { title: "Database Fundamentals", href: "/en/backend/database/db02_conceptsfondamentaux" },
          { title: "Installation", href: "/en/backend/database/db03_installation" },
          { title: "Create a Database", href: "/en/backend/database/db04_createdb" },
          { title: "Save a Database", href: "/en/backend/database/db05_savedb" },
        ],
      },
      {
        title: "SQL",
        isMainMenu: false,
        submenu: [
          { title: "Introduction", href: "/en/backend/sql/sql01_intro" },
          { title: "Formalize SQL Queries", href: "/en/backend/sql/sql02_sqlqueries" },
          { title: "SQL Joins", href: "/en/backend/sql/sql03_joins" },
          { title: "Data Update", href: "/en/backend/sql/sql04_dataupdate" },
        ],
      },
    ],
  },
  {
    title: "Use a server langage",
    icon: <Cpu className="h-5 w-5" />,
    progress: 0,
    isMainMenu: true,
    submenu: [
      {
        title: "PHP",
        isMainMenu: false,
        submenu: [
          { title: "Introduction", href: "/en/backend/php/php01_intro" },
          { title: "Installation", href: "/en/backend/php/php02_installation" },
          { title: "Basics", href: "/en/backend/php/php03_base" },
          { title: "Conditional Statements", href: "/en/backend/php/php04_conditionalstatement" },
          { title: "Loops", href: "/en/backend/php/php05_loops" },
          { title: "Array", href: "/en/backend/php/php06_array" },
          { title: "Functions", href: "/en/backend/php/php07_functions" },
          { title: "Date and hours", href: "/en/backend/php/php08_dateandhours" },
          { title: "Files manipulate", href: "/en/backend/php/php09_filesmanipulate" },
          { title: "Servers & Forms", href: "/en/backend/php/php10_serversandforms" },
          { title: "Upload files", href: "/en/backend/php/php11_filesupload" },
          { title: "Sessions", href: "/en/backend/php/php12_sessions" },
          { title: "Authentication", href: "/en/backend/php/php13_auth" },
          { title: "Mails", href: "/en/backend/php/php14_mails" },
          { title: "Unit tests", href: "/en/backend/php/php15_unittests" },
        ],
      },
      {
        title: "Database Connection with PDO",
        isMainMenu: false,
        submenu: [
          { title: "Introduction to PDO", href: "/en/backend/pdo/pdo01_intro" },
          { title: "Understand PDO", href: "/en/backend/pdo/pdo02_understandpdo" },
          { title: "CRUD", href: "/en/backend/pdo/pdo03_crud" },
        ],
      },
      {
        title: "Object-Oriented Programming (OOP)",
        isMainMenu: false,
        submenu: [
          { title: "Introduction", href: "/en/backend/oop/oop01_intro" },
          { title: "Preamble", href: "/en/backend/oop/oop02_preamble" },
        ],
      },
    ],
  },
  {
    title: "Use a MVC framework",
    icon: <Terminal className="h-5 w-5" />,
    progress: 0,
    isMainMenu: true,
    submenu: [
      {
        title: "Symfony",
        isMainMenu: false,
        submenu: [
          { title: "Introduction", href: "/en/MVC/symfony/symfony01_intro" },
          { title: "Create a Symfony project", href: "/en/MVC/symfony/symfony02_createproject" },
          { title: "Forms", href: "/en/MVC/symfony/symfony03_form" },
          { title: "DQL", href: "/en/MVC/symfony/symfony04_dql" },
          { title: "Send mail", href: "/en/MVC/symfony/symfony05_sendmail" },
          { title: "Services", href: "/en/MVC/symfony/symfony06_services" },
          { title: "Doctrine events", href: "/en/MVC/symfony/symfony07_doctrineevent" },
          { title: "Authentication", href: "/en/MVC/symfony/symfony08_authenticate" },
          { title: "Unit tests with Symfony", href: "/en/MVC/symfony/symfony09_unittest" },
        ],
      },
      {
        title: "API",
        isMainMenu: false,
        submenu: [
          { title: "Introduction", href: "/en/MVC/API/api01_intro" },
          { title: "Implementing with Symfony and API Platform", href: "/en/MVC/API/api02_symfonyapiplatform" },
          { title: "Testing/Consuming an API", href: "/en/MVC/API/api03_consumingapi" },
        ],
      },
    ],
  },
  {
    title: "Deployment",
    icon: <Shield className="h-5 w-5" />,
    progress: 0,
    isMainMenu: true,
    submenu: [
      {
        title: "Docker",
        isMainMenu: false,
        submenu: [
          { title: "Introduction", href: "/en/deployment/docker/docker01_intro" },
          { title: "Symfony Containerization", href: "/en/deployment/docker/docker02_symfony" },
        ],
      },
      {
        title: "Publish your app",
        isMainMenu: false,
        submenu: [
          { title: "Introduction", href: "/en/deployment/publish/publish01_intro" },
          { title: "Publish your app", href: "/en/deployment/publish/publish02_publishyourapp" },
        ],
      },
    ],
  },
  // {
  //   title: "React & Ecosystem",
  //   icon: <Code2 className="h-5 w-5" />,
  //   progress: 0,
  //   submenu: [
  //     // { title: "Download Node.js", href: "/en/basics/install/php" },
  //     { title: "Why React?", href: "/en/react/why-react" },
  //     { title: "React Fundamentals", href: "/en/react/basics" },
  //     { title: "Hooks & State", href: "/en/react/hooks" },
  //     { title: "Context & Redux", href: "/en/react/state-management" },
  //     { title: "React Router", href: "/en/react/routing" },
  //     { title: "Testing with Jest", href: "/en/react/testing" },
  //     { title: "React Query", href: "/en/react/query" },
  //     { title: "TypeScript with React", href: "/en/react/typescript" },
  //   ],
  // },
];

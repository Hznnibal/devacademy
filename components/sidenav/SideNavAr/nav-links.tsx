import { BookOpen, Cpu, Database, Layout, Shield, Terminal } from "lucide-react";
import { NavItem } from "./types";

export const navigationItems: NavItem[] = [
  {
    title: "مقدمة لتطوير الويب",
    icon: <BookOpen className="h-5 w-5" />,
    progress: 0,
    isMainMenu: true,
    requiredPlan: ["BASIC", "INTERMEDIATE", "ADVANCED"],
    submenu: [
      {
        title: "ما هو تطوير الويب؟",
        isMainMenu: false,
        submenu: [
          { title: "مقدمة", href: "/courses/ar/intro/intro/introduction" },
          { title: "أنواع مطوري الويب المختلفة", href: "/courses/ar/intro/intro/types" },
        ],
      },
      {
        title: "إعداد الأدوات اللازمة",
        isMainMenu: false,
        submenu: [
          { title: "VS Code", href: "/courses/ar/intro/install/vscode-setup" },
          { title: "أوامر باش", href: "/courses/ar/intro/install/bash" },
        ],
      },
    ],
  },
  {
    title: "بناء واجهة",
    icon: <Layout className="h-5 w-5" />,
    progress: 0,
    isMainMenu: true,
    requiredPlan: ["BASIC", "INTERMEDIATE", "ADVANCED"],
    submenu: [
      {
        title: "HTML",
        isMainMenu: false,
        submenu: [
          { title: "الهيكل الأساسي لصفحة HTML", href: "/courses/ar/basics/html/html01_presentation" },
          { title: "العلامات والتقسيم", href: "/courses/ar/basics/html/html02_balise" },
          { title: "التنسيق", href: "/courses/ar/basics/html/html03_miseenforme" },
          { title: "الروابط", href: "/courses/ar/basics/html/html04_liens" },
          { title: "القوائم", href: "/courses/ar/basics/html/html05_listes" },
          { title: "الوسائط", href: "/courses/ar/basics/html/html06_medias" },
          { title: "الجداول", href: "/courses/ar/basics/html/html07_tableaux" },
          { title: "النماذج", href: "/courses/ar/basics/html/html08_formulaire" },
        ],
      },
      {
        title: "CSS",
        isMainMenu: false,
        submenu: [
          { title: "مقدمة إلى CSS", href: "/courses/ar/basics/css/css01_intro" },
          { title: "المحددات", href: "/courses/ar/basics/css/css02_selecteurs" },
          { title: "الألوان والخطوط", href: "/courses/ar/basics/css/css03_polices_et_couleurs" },
          { title: "نماذج الصناديق", href: "/courses/ar/basics/css/css04_modeles_de_boites" },
          { title: "التحديد", href: "/courses/ar/basics/css/css05_positionnement" },
          { title: "التصميم المتجاوب", href: "/courses/ar/basics/css/css06_responsive" },
          { title: "تمارين", href: "/courses/ar/basics/css/css07_exercices" },
        ],
      },
      {
        title: "JavaScript",
        isMainMenu: false,
        submenu: [
          { title: "أساسيات اللغة", href: "/courses/ar/basics/js/js01_base" },
          { title: "المتغيرات", href: "/courses/ar/basics/js/js02_variables" },
          { title: "عرض النصوص", href: "/courses/ar/basics/js/js03_displaying_text" },
          { title: "العوامل", href: "/courses/ar/basics/js/js04_operators" },
          { title: "الشروط", href: "/courses/ar/basics/js/js05_conditions" },
          { title: "الحلقات", href: "/courses/ar/basics/js/js06_boucles" },
          { title: "الدوال", href: "/courses/ar/basics/js/js07_fonctions" },
          { title: "المصفوفات", href: "/courses/ar/basics/js/js08_tableaux" },
          { title: "D.O.M", href: "/courses/ar/basics/js/js09_dom" },
          { title: "الكائنات الأصلية", href: "/courses/ar/basics/js/js10_objectsnatif" },
          { title: "JavaScript على الويب", href: "/courses/ar/basics/js/js11_javascript_in_web" },
          { title: "الأحداث", href: "/courses/ar/basics/js/js12_events" },
          { title: "التعابير العادية", href: "/courses/ar/basics/js/js13_regex" },
          { title: "النماذج", href: "/courses/ar/basics/js/js14_formulaires" },
        ],
      },
      {
        title: "GIT & GitHub",
        isMainMenu: false,
        submenu: [
          { title: "ما هو GIT؟", href: "/courses/ar/basics/git/git01_intro" },
          { title: "التزام", href: "/courses/ar/basics/git/git02_commit" },
          { title: "السجل", href: "/courses/ar/basics/git/git03_historique" },
          { title: "GitHub", href: "/courses/ar/basics/git/git04_github" },
          { title: ".gitignore", href: "/courses/ar/basics/git/git05_gitignore" },
        ],
      }
    ],
  },
  {
    title: "قواعد البيانات و SQL",
    icon: <Database className="h-5 w-5" />,
    progress: 0,
    isMainMenu: true,
    requiredPlan: ["INTERMEDIATE", "ADVANCED"],
    submenu: [
      {
        title: "قاعدة البيانات",
        isMainMenu: false,
        submenu: [
          { title: "مقدمة", href: "/courses/ar/backend/database/db01_intro" },
          { title: "أساسيات قاعدة البيانات", href: "/courses/ar/backend/database/db02_conceptsfondamentaux" },
          { title: "التثبيت", href: "/courses/ar/backend/database/db03_installation" },
          { title: "إنشاء قاعدة بيانات", href: "/courses/ar/backend/database/db04_createdb" },
          { title: "حفظ قاعدة بيانات", href: "/courses/ar/backend/database/db05_savedb" },
        ],
      },
      {
        title: "SQL",
        isMainMenu: false,
        submenu: [
          { title: "مقدمة", href: "/courses/ar/backend/sql/sql01_intro" },
          { title: "صياغة استعلامات SQL", href: "/courses/ar/backend/sql/sql02_sqlqueries" },
          { title: "الانضمامات في SQL", href: "/courses/ar/backend/sql/sql03_joins" },
          { title: "تحديث البيانات", href: "/courses/ar/backend/sql/sql04_dataupdate" },
        ],
      },
    ],
  },
  {
    title: "استخدام لغة خادم",
    icon: <Cpu className="h-5 w-5" />,
    progress: 0,
    isMainMenu: true,
    requiredPlan: ["INTERMEDIATE", "ADVANCED"],
    submenu: [
      {
        title: "PHP",
        isMainMenu: false,
        submenu: [
          { title: "مقدمة", href: "/courses/ar/backend/php/php01_intro" },
          { title: "التثبيت", href: "/courses/ar/backend/php/php02_installation" },
          { title: "الأساسيات", href: "/courses/ar/backend/php/php03_base" },
          { title: "التصريحات الشرطية", href: "/courses/ar/backend/php/php04_conditionalstatement" },
          { title: "الحلقات", href: "/courses/ar/backend/php/php05_loops" },
          { title: "المصفوفات", href: "/courses/ar/backend/php/php06_array" },
          { title: "الدوال", href: "/courses/ar/backend/php/php07_functions" },
          { title: "التاريخ والوقت", href: "/courses/ar/backend/php/php08_dateandhours" },
          { title: "التلاعب بالملفات", href: "/courses/ar/backend/php/php09_filesmanipulate" },
          { title: "الخوادم والنماذج", href: "/courses/ar/backend/php/php10_serversandforms" },
          { title: "رفع الملفات", href: "/courses/ar/backend/php/php11_filesupload" },
          { title: "الجلسات", href: "/courses/ar/backend/php/php12_sessions" },
          { title: "المصادقة", href: "/courses/ar/backend/php/php13_auth" },
          { title: "البريد الإلكتروني", href: "/courses/ar/backend/php/php14_mails" },
          { title: "اختبارات الوحدة", href: "/courses/ar/backend/php/php15_unittests" },
        ],
      },
      {
        title: "اتصال قاعدة البيانات مع PDO",
        isMainMenu: false,
        submenu: [
          { title: "مقدمة إلى PDO", href: "/courses/ar/backend/pdo/pdo01_intro" },
          { title: "فهم PDO", href: "/courses/ar/backend/pdo/pdo02_understandpdo" },
          { title: "CRUD", href: "/courses/ar/backend/pdo/pdo03_crud" },
        ],
      },
      {
        title: "البرمجة كائنية التوجه (OOP)",
        isMainMenu: false,
        submenu: [
          { title: "مقدمة", href: "/courses/ar/backend/oop/oop01_intro" },
          { title: "المقدمة", href: "/courses/ar/backend/oop/oop02_preamble" },
        ],
      },
    ],
  },
  {
    title: "استخدام إطار عمل MVC",
    icon: <Terminal className="h-5 w-5" />,
    progress: 0,
    isMainMenu: true,
    requiredPlan: ["ADVANCED"],
    submenu: [
      {
        title: "Symfony",
        isMainMenu: false,
        submenu: [
          { title: "مقدمة", href: "/courses/ar/MVC/symfony/symfony01_intro" },
          { title: "إنشاء مشروع Symfony", href: "/courses/ar/MVC/symfony/symfony02_createproject" },
          { title: "النماذج", href: "/courses/ar/MVC/symfony/symfony03_form" },
          { title: "DQL", href: "/courses/ar/MVC/symfony/symfony04_dql" },
          { title: "إرسال البريد", href: "/courses/ar/MVC/symfony/symfony05_sendmail" },
          { title: "الخدمات", href: "/courses/ar/MVC/symfony/symfony06_services" },
          { title: "أحداث Doctrine", href: "/courses/ar/MVC/symfony/symfony07_doctrineevent" },
          { title: "المصادقة", href: "/courses/ar/MVC/symfony/symfony08_authenticate" },
          { title: "اختبارات الوحدة مع Symfony", href: "/courses/ar/MVC/symfony/symfony09_unittest" },
        ],
      },
      {
        title: "API",
        isMainMenu: false,
        submenu: [
          { title: "مقدمة", href: "/courses/ar/MVC/API/api01_intro" },
          { title: "التنفيذ باستخدام Symfony و API Platform", href: "/courses/ar/MVC/API/api02_symfonyapiplatform" },
          { title: "اختبار / استهلاك API", href: "/courses/ar/MVC/API/api03_consumingapi" },
        ],
      },
    ],
  },
  {
    title: "النشر",
    icon: <Shield className="h-5 w-5" />,
    progress: 0,
    isMainMenu: true,
    requiredPlan: ["ADVANCED"],
    submenu: [
      {
        title: "Docker",
        isMainMenu: false,
        submenu: [
          { title: "مقدمة", href: "/courses/ar/deployment/docker/docker01_intro" },
          { title: "حاوية Symfony باستخدام Docker", href: "/courses/ar/deployment/docker/docker02_symfony" },
        ],
      },
      {
        title: "نشر تطبيقك",
        isMainMenu: false,
        submenu: [
          { title: "مقدمة", href: "/courses/ar/deployment/publish/publish01_intro" },
          { title: "نشر تطبيقك", href: "/courses/ar/deployment/publish/publish02_publishyourapp" },
        ],
      },
    ],
  },

  // {
  //   title: "React & Ecosystem",
  //   icon: <Code2 className="h-5 w-5" />,
  //   progress: 0,
  //   submenu: [
  //     // { title: "Download Node.js", href: "/courses/ar/basics/install/php" },
  //     { title: "Why React?", href: "/courses/ar/react/why-react" },
  //     { title: "React Fundamentals", href: "/courses/ar/react/basics" },
  //     { title: "Hooks & State", href: "/courses/ar/react/hooks" },
  //     { title: "Context & Redux", href: "/courses/ar/react/state-management" },
  //     { title: "React Router", href: "/courses/ar/react/routing" },
  //     { title: "Testing with Jest", href: "/courses/ar/react/testing" },
  //     { title: "React Query", href: "/courses/ar/react/query" },
  //     { title: "TypeScript with React", href: "/courses/ar/react/typescript" },
  //   ],
  // },
];

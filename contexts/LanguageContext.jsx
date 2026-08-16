import { createContext, useContext, useState } from 'react';

const translations = {
  fr: {
    nav: {
      about: 'À propos',
      parcours: 'Parcours',
      projects: 'Projets',
      contact: 'Contact',
      cvBtn: 'CV',
      cvBtnFull: 'Télécharger mon CV',
    },
    hero: {
      available: 'Disponible pour projets',
      role: 'Analyste & Développeur Fullstack',
      location: 'Douala, Cameroun',
      description: 'Je conçois des applications web et mobiles performantes, élégantes et sur-mesure.',
      contactBtn: 'Me contacter',
      cvBtn: 'Télécharger CV',
      terminalLines: [
        { cmd: 'whoami', output: 'happi-mathis' },
        { cmd: 'cat stack.json', output: '["Next.js", "React Native (Expo)", "Laravel 12", "Flutter"]' },
        { cmd: 'status', output: '✓ Ouvert aux opportunités et projets' },
      ],
    },
    about: {
      sectionNum: '// 001',
      title: 'À propos de',
      titleHighlight: 'moi',
      whoTitle: 'Ingénieur & Développeur',
      whoP1: 'Basé à',
      whoP1Bold: 'Douala, Cameroun',
      whoP1Rest: ', je crée des solutions numériques modernes qui allient rigueur technique et excellente expérience utilisateur.',
      whoP2Start: 'Mon approche repose sur l\'',
      whoP2Bold: 'agilité et le code propre',
      whoP2End: ' : écoute du client, livraisons rapides et respect strict des exigences.',
      locationLabel: 'Douala, Cameroun',
      languagesLabel: 'Français · Anglais',
      hobbiesLabel: 'Génie Logiciel · UI/UX · Tech',
      aiTitle: 'IA & Productivité',
      aiText: 'Utilisation des outils d\'IA modernes (Cursor, Copilot, Claude) pour accélérer le développement et assurer un code robuste.',
      methodTitle: 'Méthodes Agiles',
      methodText: 'Livraisons itératives, communication continue et respect des délais.',
      methodItems: ['Respect des délais', 'Architecture solide', 'Accompagnement client'],
      skillsTitle: 'Compétences Techniques',
      skills: [
        { title: 'Backend & API', tech: 'Laravel 12 · PHP · Node.js' },
        { title: 'Mobile', tech: 'React Native (Expo) · Flutter' },
        { title: 'Frontend', tech: 'Next.js · React · TailwindCSS' },
        { title: 'Bases de données', tech: 'MySQL · PostgreSQL · Firebase' },
        { title: 'Data Science', tech: 'R · R Shiny · Python' },
        { title: 'Outils', tech: 'Git · Docker · Figma · VS Code' },
      ],
    },
    parcours: {
      sectionNum: '// 002',
      title: 'Mon',
      titleHighlight: 'Parcours',
      formationTitle: 'Formation',
      experienceTitle: 'Expérience',
      currentBadge: '● Actuel',
      education: [
        { degree: 'Master 1 — Génie Logiciel', school: 'École Nationale Supérieure Polytechnique de Douala', location: 'Douala', year: '2025 — Présent', tags: ['Génie Logiciel', 'Architecture', 'R&D'] },
        { degree: "Diplôme d'Ingénieur en Informatique", school: "Institut Africain d'Informatique (IAI)", location: 'Douala', year: '2021 — 2024', tags: ['Ingénierie', 'Systèmes'] },
        { degree: 'Licence en Informatique', school: "Institut Africain d'Informatique (IAI)", location: 'Douala', year: '2021 — 2024', tags: ['Développement', 'Bases de Données'] },
        { degree: 'Baccalauréat Série TI', school: 'Lycée Joss', location: 'Douala', year: '2021', tags: ['Informatique'] },
      ],
      experience: [
        {
          title: 'Analyste & Développeur Web',
          company: 'Awatechno',
          location: 'Douala',
          year: 'Nov. 2025 — Présent',
          current: true,
          tasks: [
            'Développement d\'applications web sous Next.js & React',
            'Personnalisation et optimisation d\'infrastructures WordPress',
            'Accompagnement et communication régulière avec les clients',
          ],
          tags: ['Next.js', 'WordPress', 'Agile'],
        },
        {
          title: 'Stagiaire Développeur Laravel',
          company: 'African Windows SARL',
          location: 'Douala',
          year: '2022',
          current: false,
          tasks: [
            'Conception d\'une application web de gestion avec Laravel',
            'Optimisation des bases de données MySQL',
          ],
          tags: ['Laravel', 'PHP', 'MySQL'],
        },
        {
          title: 'Stagiaire IT & Numérisation',
          company: 'Mairie de Douala',
          location: 'Douala',
          year: '2021',
          current: false,
          tasks: ['Projets de numérisation administrative et support technique'],
          tags: ['IT', 'Numérique'],
        },
        {
          title: 'Stagiaire Développeur Mobile',
          company: 'CIJ',
          location: 'Douala',
          year: '2020',
          current: false,
          tasks: ['Développement d\'applications mobiles avec Flutter'],
          tags: ['Flutter', 'Dart'],
        },
      ],
    },
    projects: {
      sectionNum: '// 003',
      title: 'Mes',
      titleHighlight: 'Projets',
      filterAll: 'Tous',
      viewDetails: 'Fiche Technique →',
      visitProject: 'Visiter le projet',
      localProject: 'Projet Local (Démo sur demande)',
      close: 'Fermer',
      data: [
        { 
          id: 'smartcollect', 
          title: 'SmartCollect — Salubrité Urbaine', 
          subtitle: 'Plateforme Web & App Mobile (Mairie de Douala)',
          isLocal: true,
          tags: ['Laravel 12 API', 'Expo React Native', 'MySQL', 'Leaflet.js'],
          images: ['/images/mobile-project-1.jpg', '/images/mobile-project-2.jpg'],
          summary: 'Gestion intelligente des déchets urbains : signalement GPS citoyen en temps réel, itinéraire chauffeur optimisé et tableau de bord Mairie.', 
          description: "SmartCollect permet la gestion en temps réel de la salubrité urbaine à Douala. Les citoyens signalent les dépôts sauvages avec photo et GPS via l'application mobile React Native, les chauffeurs de camions benne visualisent les points de collecte optimisés sur carte interactive, et la Mairie de Douala suit les statistiques via un dashboard Leaflet.js. Inclut un système de réputation anti-spam et l'exportation de rapports PDF." 
        },
        { 
          id: 'almanac', 
          title: 'Almanac Cameroun', 
          subtitle: 'Système d\'Information Administratif & Cartographie',
          isLocal: false,
          liveUrl: 'https://almanac-4yt5.onrender.com/',
          tags: ['Laravel 11', 'PostgreSQL', 'Docker', 'Nginx', 'Supervisord'],
          images: ['/ac.png', '/DAS.png'],
          summary: 'Plateforme numérique centralisée de préservation, valorisation, cartographie et généalogie des chefferies et villages du Cameroun.', 
          description: "Plateforme web d'Information Administrative numérisant la cartographie du Cameroun (villages, cantons, groupements et chefferies traditionnelles). Déployée en production sur Render Cloud avec conteneurisation Docker (Nginx, Supervisord, PHP-FPM) et base de données PostgreSQL. Développée dans le cadre du stage de Master 1 GL à VRN Innovation." 
        },
        { 
          id: 'slz', 
          title: 'SLZ Platform', 
          subtitle: 'Plateforme Web Sur-Mesure & Dashboard',
          isLocal: false,
          liveUrl: 'https://slz-seven.vercel.app/',
          tags: ['Next.js', 'React', 'TailwindCSS', 'Vercel Cloud'],
          images: ['/ac1.png', '/dash1.png'],
          summary: 'Application web moderne et dynamique hébergée sur Vercel avec espace client et tableau de bord d\'administration.', 
          description: "Solution web haute performance déployée en production sur Vercel. Propose une interface utilisateur fluide, réactive et élégante (Page d'accueil ac1.png) couplée à un tableau de bord d'administration analytique complet (Dashboard dash1.png)." 
        },
        { 
          id: 'laravel-voting', 
          title: 'Laravel Voting Platform', 
          subtitle: 'Scrutin Sécurisé & Audit Anti-Fraude',
          isLocal: true,
          tags: ['Laravel Sanctum', 'MySQL', 'PV PDF'],
          images: ['/images/web-project-1.jpg'],
          summary: 'Plateforme de vote en ligne sécurisée avec rôles, détection des fraudes et Procès-Verbaux PDF.', 
          description: "Plateforme d'élection sécurisée sous Laravel Sanctum. Vote à bulletin secret, gestion des ex-aequo avec second tour automatique, journal d'audit anti-fraude en temps réel et éditeur de PV officiels au format PDF." 
        },
        { 
          id: 'r-shiny', 
          title: 'Dashboard R Shiny', 
          subtitle: 'Analyse Statistique de Données',
          isLocal: false,
          liveUrl: 'https://kenwaydev.shinyapps.io/ACM-teste/',
          tags: ['R', 'R Shiny', 'ggplot2'],
          images: ['/images/web-project-2.jpg'],
          summary: 'Tableau de bord interactif d\'analyse des habitudes d\'utilisation des smartphones.', 
          description: "Application d'analyse statistique développée en langage R. Visualisation dynamique et tableaux récapitulatifs pour explorer des jeux de données comportementales. Déployé sur shinyapps.io." 
        },
        { 
          id: 'defgi', 
          title: 'Site Vitrine — Defgi', 
          subtitle: 'Site Institutionnel & SEO',
          isLocal: false,
          liveUrl: 'https://defgi.org/',
          tags: ['WordPress', 'Elementor', 'SEO'],
          images: ['/images/ui-project-1.jpg'],
          summary: 'Site vitrine professionnel pour optimiser la visibilité et l\'image de marque de Defgi.', 
          description: "Création d'un site vitrine responsive et optimisé pour le référencement naturel (SEO) présentant les activités et valeurs de la société Defgi." 
        },
        { 
          id: 'awatechno', 
          title: 'Site Vitrine — Awatechno', 
          subtitle: 'Portail Agence Tech',
          isLocal: false,
          liveUrl: 'https://awatechno.com/',
          tags: ['Next.js', 'WordPress API', 'TailwindCSS'],
          images: ['/images/ui-project-2.jpg'],
          summary: 'Vitrine web moderne pour l\'agence Awatechno à Douala.', 
          description: "Développement d'une interface claire et moderne présentant les services d'accompagnement tech et de transformation digitale d'Awatechno." 
        },
      ],
    },
    contact: {
      sectionNum: '// 004',
      title: 'Contactez-',
      titleHighlight: 'moi',
      description: "Un projet web ou mobile en vue ? Échangeons directement sur vos besoins.",
      whatsappDirect: 'Discuter sur WhatsApp',
      formTitle: 'Envoyer un message',
      nameLabel: 'Nom / Entreprise',
      namePlaceholder: 'Votre nom ou nom de société',
      emailLabel: 'Adresse Email',
      emailPlaceholder: 'exemple@domaine.com',
      messageLabel: 'Détails du projet',
      messagePlaceholder: "Bonjour Happi, j'aimerais échanger sur un projet...",
      sendBtn: 'Envoyer sur WhatsApp',
      sendingBtn: 'Ouverture de WhatsApp...',
      waMessage: (name, email, message) =>
        `Bonjour Happi Mathis,\n\nJe suis ${name}\nEmail : ${email}\n\n*Message :*\n${message}`,
    },
    footer: {
      rights: 'Tous droits réservés.',
      tagline: 'Conçu avec passion par Happi Mathis 🇨🇲',
    },
  },

  en: {
    nav: {
      about: 'About',
      parcours: 'Journey',
      projects: 'Projects',
      contact: 'Contact',
      cvBtn: 'CV',
      cvBtnFull: 'Download my CV',
    },
    hero: {
      available: 'Available for projects',
      role: 'Analyst & Fullstack Developer',
      location: 'Douala, Cameroon',
      description: 'I design high-performance, elegant, and custom web & mobile applications.',
      contactBtn: 'Contact me',
      cvBtn: 'Download CV',
      terminalLines: [
        { cmd: 'whoami', output: 'happi-mathis' },
        { cmd: 'cat stack.json', output: '["Next.js", "React Native (Expo)", "Laravel 12", "Flutter"]' },
        { cmd: 'status', output: '✓ Open for new projects & contracts' },
      ],
    },
    about: {
      sectionNum: '// 001',
      title: 'About',
      titleHighlight: 'me',
      whoTitle: 'Engineer & Developer',
      whoP1: 'Based in',
      whoP1Bold: 'Douala, Cameroon',
      whoP1Rest: ', I build modern digital products combining technical precision and great user experience.',
      whoP2Start: 'My approach relies on ',
      whoP2Bold: 'Agility & Clean Code',
      whoP2End: ': fast iterations, active listening, and strict adherence to specifications.',
      locationLabel: 'Douala, Cameroon',
      languagesLabel: 'French · English',
      hobbiesLabel: 'Software Eng. · UI/UX · Tech',
      aiTitle: 'AI & Speed',
      aiText: 'Using modern AI tools (Cursor, Copilot, Claude) to accelerate development and ensure code quality.',
      methodTitle: 'Agile Delivery',
      methodText: 'Iterative releases, continuous feedback, and commitment to deadlines.',
      methodItems: ['Meeting deadlines', 'Solid architecture', 'Client support'],
      skillsTitle: 'Technical Skills',
      skills: [
        { title: 'Backend & API', tech: 'Laravel 12 · PHP · Node.js' },
        { title: 'Mobile', tech: 'React Native (Expo) · Flutter' },
        { title: 'Frontend', tech: 'Next.js · React · TailwindCSS' },
        { title: 'Databases', tech: 'MySQL · PostgreSQL · Firebase' },
        { title: 'Data Science', tech: 'R · R Shiny · Python' },
        { title: 'Tools', tech: 'Git · Docker · Figma · VS Code' },
      ],
    },
    parcours: {
      sectionNum: '// 002',
      title: 'My',
      titleHighlight: 'Journey',
      formationTitle: 'Education',
      experienceTitle: 'Experience',
      currentBadge: '● Current',
      education: [
        { degree: "Master's 1 — Software Engineering", school: 'National Advanced School of Engineering of Douala (Polytechnique)', location: 'Douala', year: '2025 — Present', tags: ['Software Eng.', 'Architecture'] },
        { degree: 'Computer Engineering Degree', school: 'African Institute of Computer Science (IAI)', location: 'Douala', year: '2021 — 2024', tags: ['Engineering', 'Systems'] },
        { degree: "Bachelor's Degree in Computer Science", school: 'African Institute of Computer Science (IAI)', location: 'Douala', year: '2021 — 2024', tags: ['Web/Mobile Dev'] },
        { degree: 'High School Diploma (Series TI)', school: 'Lycée Joss', location: 'Douala', year: '2021', tags: ['IT'] },
      ],
      experience: [
        {
          title: 'Web Analyst & Developer',
          company: 'Awatechno',
          location: 'Douala',
          year: 'Nov. 2025 — Present',
          current: true,
          tasks: [
            'Web app development with Next.js & React',
            'Customization & optimization of corporate WordPress sites',
            'Continuous client support & sprint check-ins',
          ],
          tags: ['Next.js', 'WordPress', 'Agile'],
        },
        {
          title: 'Laravel Developer Intern',
          company: 'African Windows SARL',
          location: 'Douala',
          year: '2022',
          current: false,
          tasks: [
            'Design of a web management app using Laravel',
            'MySQL database tuning and optimization',
          ],
          tags: ['Laravel', 'PHP', 'MySQL'],
        },
        {
          title: 'IT Intern',
          company: 'Douala City Council',
          location: 'Douala',
          year: '2021',
          current: false,
          tasks: ['Administrative digitization projects & user support'],
          tags: ['IT', 'Digital'],
        },
        {
          title: 'Mobile Developer Intern',
          company: 'CIJ',
          location: 'Douala',
          year: '2020',
          current: false,
          tasks: ['Mobile app development with Flutter'],
          tags: ['Flutter', 'Dart'],
        },
      ],
    },
    projects: {
      sectionNum: '// 003',
      title: 'My',
      titleHighlight: 'Projects',
      filterAll: 'All',
      viewDetails: 'Tech Sheet →',
      visitProject: 'Visit Site',
      localProject: 'Local Project (Demo on request)',
      close: 'Close',
      data: [
        { 
          id: 'smartcollect', 
          title: 'SmartCollect — Urban Sanitation', 
          subtitle: 'Web & Mobile App (Douala City Council)',
          isLocal: true,
          tags: ['Laravel 12 API', 'Expo React Native', 'MySQL', 'Leaflet.js'],
          images: ['/images/mobile-project-1.jpg', '/images/mobile-project-2.jpg'],
          summary: 'Smart waste management: real-time citizen GPS reporting, driver route optimization, and City Council admin dashboard.', 
          description: "SmartCollect optimizes urban sanitation in Douala. Citizens report waste dumps with photos & GPS via the React Native mobile app, truck drivers follow optimized routes on interactive maps, and city administrators track metrics via a Leaflet.js dashboard. Includes anti-spam reputation rules and PDF report export." 
        },
        { 
          id: 'almanac', 
          title: 'Almanac Cameroon', 
          subtitle: 'Administrative Information System & Mapping',
          isLocal: false,
          liveUrl: 'https://almanac-4yt5.onrender.com/',
          tags: ['Laravel 11', 'PostgreSQL', 'Docker', 'Nginx', 'Supervisord'],
          images: ['/ac.png', '/DAS.png'],
          summary: 'Centralized digital platform for preservation, mapping, and genealogy of Cameroon chiefdoms and villages.', 
          description: "Web platform designed to digitize Cameroon's administrative map (villages, chiefdoms). Deployed live on Render Cloud with Docker containerization (Nginx, Supervisord, PHP-FPM) and PostgreSQL database. Developed as part of Master 1 GL internship at VRN Innovation." 
        },
        { 
          id: 'slz', 
          title: 'SLZ Platform', 
          subtitle: 'Custom Web Application & Dashboard',
          isLocal: false,
          liveUrl: 'https://slz-seven.vercel.app/',
          tags: ['Next.js', 'React', 'TailwindCSS', 'Vercel Cloud'],
          images: ['/ac1.png', '/dash1.png'],
          summary: 'Modern web app hosted on Vercel with responsive interface and admin dashboard.', 
          description: "High-performance web solution deployed live on Vercel. Features a sleek, responsive user interface (Homepage ac1.png) paired with a comprehensive analytics admin panel (Dashboard dash1.png)." 
        },
        { 
          id: 'laravel-voting', 
          title: 'Laravel Voting Platform', 
          subtitle: 'Secure Voting & Anti-Fraud Audit',
          isLocal: true,
          tags: ['Laravel Sanctum', 'MySQL', 'PDF Reports'],
          images: ['/images/web-project-1.jpg'],
          summary: 'Secure election platform built with Laravel Sanctum. Secret ballot voting, automatic runoff handling, real-time anti-fraud audit log, and PDF minutes generation.' 
        },
        { 
          id: 'r-shiny', 
          title: 'R Shiny Dashboard', 
          subtitle: 'Data Analytics & Visualization',
          isLocal: false,
          liveUrl: 'https://kenwaydev.shinyapps.io/ACM-teste/',
          tags: ['R', 'R Shiny', 'ggplot2'],
          images: ['/images/web-project-2.jpg'],
          summary: 'Interactive dashboard for analyzing smartphone usage behavioral data.', 
          description: "Statistical data analysis app built in R. Dynamic visualization and summary tables for behavioral datasets. Deployed live on shinyapps.io." 
        },
        { 
          id: 'defgi', 
          title: 'Showcase Site — Defgi', 
          subtitle: 'Corporate Website & SEO',
          isLocal: false,
          liveUrl: 'https://defgi.org/',
          tags: ['WordPress', 'Elementor', 'SEO'],
          images: ['/images/ui-project-1.jpg'],
          summary: 'Professional showcase website to enhance Defgi\'s online visibility.', 
          description: "Custom responsive corporate site optimized for search engine ranking (SEO) presenting Defgi's core services." 
        },
        { 
          id: 'awatechno', 
          title: 'Showcase Site — Awatechno', 
          subtitle: 'Tech Agency Portal',
          isLocal: false,
          liveUrl: 'https://awatechno.com/',
          tags: ['Next.js', 'WordPress API', 'TailwindCSS'],
          images: ['/images/ui-project-2.jpg'],
          summary: 'Modern web portal for Awatechno tech agency in Douala.', 
          description: "Development of a sleek, modern interface presenting tech services and digital offerings for Awatechno." 
        },
      ],
    },
    contact: {
      sectionNum: '// 004',
      title: 'Contact',
      titleHighlight: 'me',
      description: "Have a web or mobile project in mind? Let's talk about your requirements.",
      whatsappDirect: 'Chat on WhatsApp',
      formTitle: 'Send a message',
      nameLabel: 'Name / Company',
      namePlaceholder: 'Your name or company name',
      emailLabel: 'Email Address',
      emailPlaceholder: 'example@domain.com',
      messageLabel: 'Project details',
      messagePlaceholder: "Hello Happi, I'd like to discuss a project with you...",
      sendBtn: 'Send on WhatsApp',
      sendingBtn: 'Opening WhatsApp...',
      waMessage: (name, email, message) =>
        `Hello Happi Mathis,\n\nI am ${name}\nEmail: ${email}\n\n*Message:*\n${message}`,
    },
    footer: {
      rights: 'All rights reserved.',
      tagline: 'Designed with passion by Happi Mathis 🇨🇲',
    },
  },
};

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('fr');
  const t = translations[lang];
  const toggleLang = () => setLang((l) => (l === 'fr' ? 'en' : 'fr'));

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};

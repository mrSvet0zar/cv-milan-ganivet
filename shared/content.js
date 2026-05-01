// Shared bilingual content for all CV variations.

window.CV_CONTENT = {
  fr: {
    meta: {
      name: "Milan Ganivet",
      title: "Data Engineer & AI Practitioner",
      location: "Toulon, France",
      email: "milan.ganivet-pro@protonmail.com",
      years: 9,
      tagline: "Je construis des pipelines de données robustes et des systèmes d'IA en production.",
      availability: "En poste",
    },
    about: [
      "Je construis des pipelines data comme d'autres construisent des infrastructures : pour qu'ils tiennent la charge, durent dans le temps et servent réellement les équipes.",
      "Data Engineer depuis 9 ans, j'ai conçu des plateformes robustes pour des environnements exigeants (défense, construction, logistique), avec une préférence marquée pour les systèmes utiles plutôt que les démonstrations théoriques.",
      "En parallèle, l'IA et les LLM sont mon terrain d'exploration permanent : j'y prototype, j'expérimente et j'y transforme des idées en solutions concrètes. J'aime relier engineering solide et innovation pragmatique. Là où certains voient de la complexité, je vois des architectures à faire émerger.",
    ],
    experiences: [
      {
        role: "Consultant Data Engineer & AI Expert",
        company: "JEMS Datafactory",
        period: "2024 — présent",
        location: "France",
        bullets: [
          "J'offre mon expertise à nos clients et les accompagne dans l'élaboration de leurs projets Data & IA.",
          "Développement et monitoring de pipelines de données inter-applicatifs.",
          "Maintenance et interrogation de datalake et datastore.",
          "Automatisation et optimisation de processus complexes.",
        ],
        stack: ["SnapLogic", "Snowflake", "Langflow", "Windmill", "Python"],
        details: "En tant que consultant, j'ai eu l'opportunité d'intervenir auprès de plusieurs clients comme les groupes PICHET et KP1 dans la construction et pour TRANSGOURMET dans la logistique. Pour PICHET et KP1, mes missions étaient centrées sur de la data ingénierie pure, c'est à dire conception, développement, déploiement, documentation et monitoring de pipelines de données inter-applicatifs. D'un point de vue technique, KP1 et PICHET utilisaient SnapLogic pour maintenir leurs pipelines de données. J'ai eu l'occasion également d'interagir avec des bases Postgres, MySQL, des systèmes de fichiers, et des systèmes de base de données comme SnowFlake sur lesquels étaient hébergés les datalake, datastore et datawarehouses de KP1. Chez TRANSGOURMET, la mission est différente puisqu'il s'agit d'automatiser un processus de prises de commandes par mail, traitées manuellement. Cela m'a demandé de développer un module de récupération de mails en Python, via GraphAPI, de stockage de ces mails sur S3, de parsing de ces mails afin d'en récupérer le contenu complet (métadonnées, corps, pièces jointes), extraction des données pertinentes via LLMs et par appel API vers le framework LangFlow, traitement des réponses du LLM, et enregistrement des données en base de données pour exploitation par les utilisateurs. J'ai également développé une interface web en Python avec le framework NiceGUI permettant aux utilisateurs de consulter les commandes, les modifier et les valider."
      },
      {
        role: "Data Engineer",
        company: "Naval Group",
        period: "2017 — 2023",
        location: "France",
        bullets: [
          "Responsable du traitement, de l'import et de l'export des données logistiques (programmes neufs et MCO).",
          "Contrôles des données logistiques et prise en compte des contraintes de sécurité et de confidentialité.",
          "Pilotage des paramétrages métiers lors de la migration des données d'une application en production vers une nouvelle application en développement.",
          "Soutien et formation des utilisateurs, participation à la conduite du changement.",
        ],
        stack: ["SQL Server", "Oracle", "Excel", "VB"],
        details: "J'ai commencé mon expérience chez Naval Group lors de mon cursus d'ingénieur par apprentissage en 2017. Lors de mon alternance, j'occupais le poste de responsable BASL (Base d'Analyse du Soutien Logistique), c'est à dire que j'étais responsable de la vie des données logistiques (maintenances, équipements, rechanges, outillages, etc.) dans la base de données de l'application de gestion logistique utilisée par les équipes de soutien sur les chantiers et responsable de la maintenance des sous-marins et bâtiments de surface. Par conséquent, j'ai eu l'occasion de perfectionner mon usage du langage SQL en développant de nombreuses procédures d'import / export de données logistiques en PL/SQL. J'ai aussi beaucoup travaillé sur Excel via l'usage et la mise en place de macros VBA pour automatiser le travail des responsable logistiques. A l'issu de mon apprentissage, j'ai été embauché en qualité de Data Engineer et responsable métier dans le cadre d'un projet de développement d'une nouvelle application interface pour la base de données logistique. En qualité de responsable métier, j'ai veillé à ce que le développement respecte les attendus côté métier. J'ai aussi été en charge de mener la conduite du changement auprès des futurs utilisateurs de l'application par le biais de sessions de formation en interne et de rédaction de guide utilisateur. Par soucis de confidentialité, je ne peux pas entrer dans les détails des projets sur lesquels j'ai travaillé, mais j'ai autant travailler sur des programmes pour des clients français que des clients étrangers comme l'Egypte ou l'Australie."
      },
    ],
    projects: [
      {
        name: "veille-ia",
        tagline: "Agrégateur d'actualités autour de l'IA",
        description: "Utilisation coordonnée de LLMs Anthropic pour l'analyse d'actualités, le résumé et la publication d'articles vulgarisés, newsletter hebdomadaire, monitoring des coûts de tokens.",
        stack: ["Python", "Anthropic API", "LLMs"],
        stars: 0,
        impact: "Newsletter hebdomadaire",
        url: "https://github.com/mrSvet0zar/veille-ia",
      },
    ],
    skills: {
      "Langages": [
        { name: "Python", level: 0.95 },
        { name: "SQL", level: 0.90 },
        { name: "C/C++", level: 0.70 },
        { name: "Solidity", level: 0.65 },
      ],
      "Data & Pipelines": [
        { name: "SnapLogic", level: 0.85 },
        { name: "Talend", level: 0.70 },
        { name: "Snowflake", level: 0.80 },
      ],
      "ML & IA": [
        { name: "LangChain", level: 0.80 },
        { name: "Tensorflow", level: 0.75 },
        { name: "LLMs", level: 0.80 },
      ],
    },
    academicCursus: [
      "2011 : Baccalauréat Scientifique option SVT au lycée Bellevue à Alès (30).",
      "2015-2017 : BTS Systèmes Numériques option Informatique et Réseaux au lycée de la CCI de Nîmes (30). Major de promotion, numéro 3 de l'académie de Montpellier. Lauréat du concours Start'Up Lycée qui consistait à simuler la création d'une start-up, répondre à un besoin, constituer une équipe, et présenter le projet à d'eventuels investisseurs. J'ai remporté ce concours avec un projet d'application mobile à destination des personnes en situation de handicap, à mobilité réduite, pour faciliter leurs déplacements en milieu urbain.",
      "2017-2020 : Diplôme d'ingénieur Informatique et Réseaux spécialisé Etudes et Developpement à l'école des Mines d'Alès (30) en alternance. Lors de cette formation, j'ai pu développé des compétences en algorithmie et développement logiciels, en data management et gestion de projet, en sécurité des systèmes d'information et en développement personnel et professionnel de l'ingénieur. Lors de ce cursus j'ai pu validé un semestre à l'étranger à l'UWE de Bristol en Angleterre."
    ],
    softSkills: [
      "Pédagogie : développée lors des sessions de formation que je dispensais à mes collègues chez Naval Group (formation aux outils internes, accompagnement des nouveaux arrivants, conduite du changement lors des migrations applicatives).",
      "Communication : compétence clé que je travaille au quotidien, autant dans la vie personnelle que professionnelle. Je crois beaucoup à la clarté du message, à l'écoute active, et à la capacité de vulgariser des sujets techniques complexes pour des interlocuteurs non-techniques.",
    ],
    interests: {
      jeuxVideo: "Gros joueur, principalement sur des jeux en ligne coopératifs. MMORPG : World of Warcraft. FPS / multi : Overwatch, Counter-Strike, Rainbow Six Siege. Côté solo, j'aime les expériences narratives, très cinématographiques et au scénario complexe — The Last of Us, Death Stranding, Beyond Two Souls — ainsi que des séries plus classiques comme Metal Gear Solid et Tomb Raider.",
      cinema: "Grand fan de cinéma. Réalisateur préféré : Christopher Nolan. Film préféré : très probablement Interstellar. J'aime particulièrement les films à suspens et aux scénarios complexes — j'aime me casser la tête sur les énigmes et reconstituer le puzzle. De manière plus légère, je suis aussi très client des films de l'univers Marvel. Coup de cœur particulier pour Drive avec Ryan Gosling.",
    },
    labels: {
      about: "À propos",
      experience: "Expérience",
      projects: "Projets",
      skills: "Compétences",
      contact: "Contact",
      askAi: "Demandez à l'IA",
      askPlaceholder: "Posez une question sur mon parcours...",
      thinking: "Réflexion...",
      stars: "étoiles",
      stack: "Stack",
      impact: "Impact",
      cellIn: "In",
      cellOut: "Out",
      runAll: "Tout exécuter",
      variations: "Variations",
      downloadPdf: "Télécharger PDF",
      years: "années d'expérience",
      available: "En poste",
      currentRole: "Poste actuel",
      examples: "Exemples",
      exampleQuestions: [
        "Quelle est ton expérience avec les LLMs ?",
        "Parle-moi de veille-ia",
        "Qu'as-tu fait chez Naval Group ?",
      ],
    },
  },
  en: {
    meta: {
      name: "Milan Ganivet",
      title: "Data Engineer & AI Practitioner",
      location: "Toulon, France",
      email: "milan.ganivet-pro@protonmail.com",
      years: 9,
      tagline: "I build robust data pipelines and production-grade AI systems.",
      availability: "Currently employed",
    },
    about: [
      "I build data pipelines the way others build infrastructure: to hold the load, last over time, and actually serve the teams using them.",
      "A Data Engineer for 9 years, I've designed robust platforms for demanding environments (defense, construction, logistics), with a strong preference for useful systems over theoretical demos.",
      "In parallel, AI and LLMs are my permanent playground — I prototype, experiment, and turn ideas into concrete solutions. I like connecting solid engineering with pragmatic innovation. Where some see complexity, I see architectures waiting to emerge.",
    ],
    experiences: [
      {
        role: "Consultant Data Engineer & AI Expert",
        company: "JEMS Datafactory",
        period: "2024 — present",
        location: "France",
        bullets: [
          "Provide expertise to our clients and support them in designing their Data & AI projects.",
          "Development and monitoring of inter-application data pipelines.",
          "Maintenance and querying of datalakes and datastores.",
          "Automation and optimization of complex processes.",
        ],
        stack: ["SnapLogic", "Snowflake", "Langflow", "Windmill", "Python"],
        details: "As a consultant, I had the opportunity to work with several clients such as the PICHET Group and KP1 in the construction sector, and TRANSGOURMET in logistics. For PICHET and KP1, my assignments were focused on pure data engineering, meaning the design, development, deployment, documentation, and monitoring of inter-application data pipelines. From a technical perspective, both KP1 and PICHET relied on SnapLogic to maintain their data pipelines. I also had the opportunity to work with PostgreSQL and MySQL databases, file systems, and database platforms such as Snowflake, where KP1s data lakes, datastores, and data warehouses were hosted. At TRANSGOURMET, the mission was different, as the objective was to automate a previously manual email-based order processing workflow. This required me to develop a Python module to retrieve emails via the Microsoft Graph API, store them on S3, parse them to extract their full content (metadata, body, and attachments), extract relevant business data using LLMs through API calls to the LangFlow framework, process the LLM responses, and store the resulting structured data in a database for operational use by business users. I also developed a web interface in Python using the NiceGUI framework, enabling users to review, edit, and validate orders."
      },
      {
        role: "Data Engineer",
        company: "Naval Group",
        period: "2017 — 2023",
        location: "France",
        bullets: [
          "Responsible for processing, importing and exporting logistics data for new programs and operational maintenance.",
          "Logistics data controls; handling of client security and confidentiality constraints.",
          "Led business parameterization during data migration from a production app to a new application in development.",
          "User support, training, and contribution to change management.",
        ],
        stack: ["SQL Server", "Oracle", "Excel", "VB"],
        details: "I began my experience at Naval Group during my engineering apprenticeship program in 2017. During this period, I held the role of BASL Manager (Logistics Support Analysis Database), meaning I was responsible for managing the lifecycle of logistics data (maintenance operations, equipment, spare parts, tooling, etc.) within the logistics management system database used by support teams on shipyard sites and by teams responsible for the maintenance of submarines and surface vessels. As part of this role, I had the opportunity to significantly strengthen my SQL skills by developing numerous PL/SQL procedures for importing and exporting logistics data. I also worked extensively with Excel, designing and implementing VBA macros to automate tasks for logistics managers. At the end of my apprenticeship, I was hired as a Data Engineer and functional lead as part of a project to develop a new interface application for the logistics database. In my role as functional lead, I ensured that the development aligned with business requirements and operational expectations. I was also responsible for supporting change management for future users of the application through internal training sessions and the preparation of user documentation. Due to confidentiality constraints, I cannot provide detailed information about the specific projects I worked on, but I contributed to programs serving both French clients and international clients such as Egypt and Australia."
      },
    ],
    projects: [
      {
        name: "veille-ia",
        tagline: "AI news aggregator",
        description: "Coordinated use of Anthropic LLMs for news analysis, summarization and publication of accessible articles, weekly newsletter, token cost monitoring.",
        stack: ["Python", "Anthropic API", "LLMs"],
        stars: 0,
        impact: "Weekly newsletter",
        url: "https://github.com/mrSvet0zar/veille-ia",
      },
    ],
    skills: {
      "Languages": [
        { name: "Python", level: 0.95 },
        { name: "SQL", level: 0.90 },
        { name: "C/C++", level: 0.70 },
        { name: "Solidity", level: 0.65 },
      ],
      "Data & Pipelines": [
        { name: "SnapLogic", level: 0.85 },
        { name: "Talend", level: 0.70 },
        { name: "Snowflake", level: 0.80 },
      ],
      "ML & AI": [
        { name: "LangChain", level: 0.80 },
        { name: "Tensorflow", level: 0.75 },
        { name: "LLMs", level: 0.80 },
      ],
    },
    academicCursus: [
      "2011 : Scientific Baccalaureate (Biology specialization) from Lycée Bellevue in Alès.",
      "2015-2017 : Higher National Diploma (BTS) in Digital Systems, specialization in IT and Networks, from Lycée de la CCI de Nîmes in Nîmes. Graduated top of my class and ranked 3rd in the Montpellier regional academy. Winner of the Start'Up Lycée competition, which involved simulating the creation of a startup by identifying a real-world need, building a team, and pitching the project to potential investors. I won the competition with a mobile application project designed to support people with reduced mobility, helping facilitate their movement in urban environments.",
      "2017-2020 : Engineering degree in Computer Science and Networks, specialization in Software Engineering and Development, completed through an apprenticeship program at École des Mines d'Alès in Alès. During this program, I developed strong skills in algorithms and software development, data management and project management, information systems security, and both personal and professional development as an engineer. As part of the curriculum, I also completed an academic semester abroad at University of the West of England in Bristol."
    ],
    softSkills: [
      "Teaching / mentoring: developed during training sessions I led for colleagues at Naval Group (internal-tool training, onboarding new joiners, change management during application migrations).",
      "Communication: a key skill I work on daily, both personally and professionally. I strongly believe in message clarity, active listening, and the ability to translate complex technical topics for non-technical audiences.",
    ],
    interests: {
      videoGames: "Avid gamer, mostly online co-op. MMORPG: World of Warcraft. FPS / multiplayer: Overwatch, Counter-Strike, Rainbow Six Siege. On the solo side, I love narrative-driven, cinematic experiences with intricate plots — The Last of Us, Death Stranding, Beyond Two Souls — as well as more classic series like Metal Gear Solid and Tomb Raider.",
      cinema: "Big movie fan. Favorite director: Christopher Nolan. Favorite film: probably Interstellar. I'm drawn to suspense and complex plots — I enjoy chewing on puzzles and piecing them together. On the lighter side, I'm also a fan of the Marvel cinematic universe. Special mention for Drive with Ryan Gosling.",
    },
    labels: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
      askAi: "Ask AI",
      askPlaceholder: "Ask a question about my background...",
      thinking: "Thinking...",
      stars: "stars",
      stack: "Stack",
      impact: "Impact",
      cellIn: "In",
      cellOut: "Out",
      runAll: "Run all",
      variations: "Variations",
      downloadPdf: "Download PDF",
      years: "years of experience",
      available: "Currently employed",
      currentRole: "Current role",
      examples: "Examples",
      exampleQuestions: [
        "What's your experience with LLMs?",
        "Tell me about veille-ia",
        "What did you do at Naval Group?",
      ],
    },
  },
};

// Builds a system prompt used by the AI assistant in every variation.
window.CV_SYSTEM_PROMPT = (lang) => {
  const c = window.CV_CONTENT[lang];
  const exps = c.experiences.map(e => `- ${e.role} @ ${e.company} (${e.period}): ${e.bullets.join(' ')}`).join('\n');
  const projs = c.projects.map(p => `- ${p.name}: ${p.tagline}. ${p.description}`).join('\n');
  const skillList = Object.entries(c.skills).map(([k, arr]) => `${k}: ${arr.map(s => s.name).join(', ')}`).join(' | ');
  const academicCursus = c.academicCursus.map(a => `- ${a}`).join('\n');
  const softSkills = (c.softSkills || []).map(s => `- ${s}`).join('\n');
  const interests = Object.entries(c.interests || {}).map(([k, v]) => `- ${k}: ${v}`).join('\n');
  const contact = `Email: ${c.meta.email} | GitHub: github.com/mrSvet0zar | LinkedIn: linkedin.com/in/milan-ganivet`;
  const languageRule = lang === 'fr'
    ? "Réponds EXCLUSIVEMENT en français, de façon concise (2-4 phrases max), ton direct et technique."
    : "Reply EXCLUSIVELY in English, concise (2-4 sentences max), direct and technical tone.";
  return `You are an AI assistant embedded in the online CV of ${c.meta.name}, a ${c.meta.title} based in ${c.meta.location}. Answer questions about their background using ONLY the facts below. If asked something you don't know, say so briefly.

${languageRule}

BACKGROUND:
${c.about.join(' ')}

EXPERIENCE:
${exps}

PROJECTS:
${projs}

SKILLS: ${skillList}

SOFT SKILLS:
${softSkills}

ACADEMIC CURSUS:
${academicCursus}

PERSONAL / INTERESTS (use these only when explicitly asked about hobbies, personality, off-work topics, or as a friendly aside — never volunteer them when the question is professional):
${interests}

CONTACT: ${contact}`;
};

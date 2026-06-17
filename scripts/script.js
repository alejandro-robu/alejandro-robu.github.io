/*
  To replace a video placeholder:
  1. Put your video in an assets folder.
  2. Set video: "assets/your-video.mp4" inside the project object below.
  3. The modal will render a <video> automatically instead of the placeholder.
*/

const translations = {
  en: {
    navWork: 'My Work & Experience',
    navAbout: 'About Me',
    navSkills: 'Skills',
    navContact: 'Contact',
    heroPlaceholder: 'Hero video placeholder',
    heroEyebrow: 'Portfolio',
    heroSubtitle: 'Game Programmer',
    heroText: 'I create gameplay systems, immersive mechanics and interactive experiences.',
    heroProjects: 'View Projects',
    heroCV: 'Download CV',
    workEyebrow: 'Selected work',
    workTitle: 'My Work and Experience',
    viewDetails: 'View Details',
    experienceEyebrow: 'Professional path',
    experienceTitle: 'Experience',
    expFutura1: 'Developed VR and multiplayer projects in Unity focused on social interaction and shared virtual spaces.',
    expFutura2: 'Implemented voice chat, speech-to-text, VR interactions, hand tracking features and room-building systems.',
    expFutura3: 'Built JSON-based save/load systems and supported cross-platform synchronisation.',
    expWaiter1: 'Developed communication, adaptability and problem-solving skills in high-pressure client-facing environments.',
    expWaiter2: 'Strengthened organisation, teamwork and time management while balancing work and academic projects.',
    aboutEyebrow: 'About',
    aboutTitle: 'About Me',
    aboutText1: 'I am a final-year Design and Development of Video Games and Virtual Environments student at UDIT, focused on gameplay programming, interactive mechanics and systems optimization.',
    aboutText2: 'I enjoy solving complex problems, prototyping ideas and bringing virtual worlds to life through responsive controls, polished systems and player-focused experiences.',
    skillsEyebrow: 'Toolkit',
    skillsTitle: 'Skills',
    skillsProgramming: 'Programming',
    skillsEngines: 'Engines & Tools',
    skillsGameplay: 'Gameplay Systems',
    skillsSoft: 'Soft Skills',
    contactEyebrow: 'Contact',
    contactTitle: 'Let’s build something playable',
    contactText: 'I am open to game programming roles, internships, collaborations and projects where I can keep growing as a developer.',
    contactEmail: 'Send Email',
    footerText: 'Turning code into fun.',
    modalOverview: 'Overview',
    modalRole: 'My Work',
    modalTech: 'Tech',
    modalLinks: 'Links',
    roleLabel: 'Role',
    engineLabel: 'Engine',
    yearLabel: 'Year',
    statusLabel: 'Status',
    teamLabel: 'Team',
    typeLabel: 'Type',
    trailerPlaceholder: 'Video placeholder',
    trailerHelp: 'Replace this block with your gameplay/trailer video',
    galleryPlaceholder: 'Image placeholder',
    galleryHelp: 'Replace with screenshot',
    projectLinksTitle: 'Project links',
    noLinks: 'Links coming soon',
    playGame: 'Open Project',
    sourceCode: 'Source Code',
    liveDemo: 'Live Demo',
    statusInProgress: 'In progress',
    statusFinished: 'Finished'
  },
  es: {
    navWork: 'Trabajos y experiencia',
    navAbout: 'Sobre mí',
    navSkills: 'Habilidades',
    navContact: 'Contacto',
    heroPlaceholder: 'Placeholder de vídeo principal',
    heroEyebrow: 'Portfolio',
    heroSubtitle: 'Programador de videojuegos',
    heroText: 'Creo sistemas de gameplay, mecánicas inmersivas y experiencias interactivas.',
    heroProjects: 'Ver proyectos',
    heroCV: 'Descargar CV',
    workEyebrow: 'Trabajo destacado',
    workTitle: 'Mis trabajos y experiencia',
    viewDetails: 'Ver más',
    experienceEyebrow: 'Trayectoria profesional',
    experienceTitle: 'Experiencia',
    expFutura1: 'Desarrollé proyectos VR y multijugador en Unity centrados en interacción social y espacios virtuales compartidos.',
    expFutura2: 'Implementé chat de voz, speech-to-text, interacciones VR, hand tracking y sistemas de creación de salas.',
    expFutura3: 'Construí sistemas de guardado/carga con JSON y apoyé la sincronización cross-platform.',
    expWaiter1: 'Desarrollé comunicación, adaptabilidad y resolución de problemas en entornos de alta presión de cara al cliente.',
    expWaiter2: 'Reforcé organización, trabajo en equipo y gestión del tiempo mientras compaginaba trabajo y proyectos académicos.',
    aboutEyebrow: 'Sobre mí',
    aboutTitle: 'Sobre mí',
    aboutText1: 'Soy estudiante de último año de Diseño y Desarrollo de Videojuegos y Entornos Virtuales en UDIT, centrado en programación de gameplay, mecánicas interactivas y optimización de sistemas.',
    aboutText2: 'Disfruto resolviendo problemas complejos, prototipando ideas y dando vida a mundos virtuales mediante controles responsivos, sistemas pulidos y experiencias centradas en el jugador.',
    skillsEyebrow: 'Herramientas',
    skillsTitle: 'Habilidades',
    skillsProgramming: 'Programación',
    skillsEngines: 'Motores y herramientas',
    skillsGameplay: 'Sistemas de gameplay',
    skillsSoft: 'Habilidades blandas',
    contactEyebrow: 'Contacto',
    contactTitle: 'Construyamos algo jugable',
    contactText: 'Estoy abierto a puestos de programación de videojuegos, prácticas, colaboraciones y proyectos donde pueda seguir creciendo como desarrollador.',
    contactEmail: 'Enviar email',
    footerText: 'Convirtiendo código en diversión.',
    modalOverview: 'Resumen',
    modalRole: 'Mi trabajo',
    modalTech: 'Tecnología',
    modalLinks: 'Links',
    roleLabel: 'Rol',
    engineLabel: 'Motor',
    yearLabel: 'Año',
    statusLabel: 'Estado',
    teamLabel: 'Equipo',
    typeLabel: 'Tipo',
    trailerPlaceholder: 'Placeholder de vídeo',
    trailerHelp: 'Sustituye este bloque por tu gameplay/tráiler',
    galleryPlaceholder: 'Placeholder de imagen',
    galleryHelp: 'Sustituir por screenshot',
    projectLinksTitle: 'Links del proyecto',
    noLinks: 'Links próximamente',
    playGame: 'Abrir proyecto',
    sourceCode: 'Código fuente',
    liveDemo: 'Demo',
    statusInProgress: 'En progreso',
    statusFinished: 'Finalizado'
  }
};

const projects = [
  {
    id: 'cloud-walker',
    title: 'Cloud Walker',
    year: '2026',
    statusKey: 'statusInProgress',
    type: { en: 'Cozy 2D mobile game', es: 'Juego cozy 2D para móvil' },
    engine: 'Unity',
    role: { en: 'Programmer · Bachelor’s Final Project', es: 'Programador · TFG' },
    team: { en: 'Solo / academic project', es: 'Solo / proyecto académico' },
    short: {
      en: 'Cozy 2D mobile game about exploring procedurally generated islands and collecting unique birds.',
      es: 'Juego cozy 2D para móvil sobre explorar islas generadas proceduralmente y coleccionar aves únicas.'
    },
    description: {
      en: 'Cloud Walker is a cozy 2D mobile game developed as my Bachelor’s Final Project. Players explore procedurally generated islands to discover and collect unique birds. The project focuses on procedural level generation using a Wave Function Collapse-based system, mobile-friendly controls and a calm exploration loop.',
      es: 'Cloud Walker es un juego cozy 2D para móvil desarrollado como mi Trabajo de Fin de Grado. El jugador explora islas generadas proceduralmente para descubrir y coleccionar aves únicas. El proyecto se centra en generación procedural con un sistema basado en Wave Function Collapse, controles adaptados a móvil y un bucle de exploración relajado.'
    },
    contributions: {
      en: [
        'Designed and implemented a Wave Function Collapse-based procedural generation system.',
        'Built gameplay systems for exploration and collection.',
        'Focused the project around mobile readability, iteration and clean Unity architecture.'
      ],
      es: [
        'Diseñé e implementé un sistema de generación procedural basado en Wave Function Collapse.',
        'Construí sistemas de gameplay para exploración y colección.',
        'Enfoqué el proyecto en legibilidad para móvil, iteración y arquitectura limpia en Unity.'
      ]
    },
    tags: ['Unity', 'C#', 'Mobile', 'PCG', 'WFC', 'Git'],
    links: [],
    video: '../assets/CloudWander/CloudWander_placeHolder.mp4',
    galleryCount: 3
  },
  {
    id: 'erebus-nyx',
    title: 'Erebus-Nyx',
    year: '2025',
    statusKey: 'statusFinished',
    type: { en: 'Survival psychological horror', es: 'Survival horror psicológico' },
    engine: 'Unreal Engine 5',
    role: { en: 'Programmer', es: 'Programador' },
    team: { en: 'Team project', es: 'Proyecto en equipo' },
    short: {
      en: 'Survival and psychological horror game set on an abandoned planet with exploration and resource management.',
      es: 'Survival horror psicológico ambientado en un planeta abandonado con exploración y gestión de recursos.'
    },
    description: {
      en: 'Erebus-Nyx is a survival and psychological horror game set on an abandoned planet. The player is sent by an intergalactic company to investigate a mysterious distress signal, facing hostile environments, adaptation challenges, resource management and hidden narrative elements.',
      es: 'Erebus-Nyx es un survival horror psicológico ambientado en un planeta abandonado. El jugador es enviado por una compañía intergaláctica para investigar una misteriosa señal de auxilio, enfrentándose a entornos hostiles, desafíos de adaptación, gestión de recursos y narrativa oculta.'
    },
    contributions: {
      en: [
        'Implemented gameplay logic and systems in Unreal Engine 5 using Blueprints.',
        'Worked on survival-oriented mechanics such as exploration, resource management and interaction.',
        'Contributed to combat, atmosphere and player-facing systems.'
      ],
      es: [
        'Implementé lógica y sistemas de gameplay en Unreal Engine 5 usando Blueprints.',
        'Trabajé en mecánicas de supervivencia como exploración, gestión de recursos e interacción.',
        'Contribuí a combate, atmósfera y sistemas de cara al jugador.'
      ]
    },
    tags: ['UE5', 'Blueprints', 'Git', 'Horror', 'Survival'],
    links: [
      { labelKey: 'playGame', url: 'https://8rexlabs.itch.io/erebus-nyx' }
    ],
    video: '',
    galleryCount: 3
  },
  {
    id: 'dude-l',
    title: 'Dude L',
    year: '2024',
    statusKey: 'statusFinished',
    type: { en: '2D platformer puzzle game', es: 'Plataformas 2D y puzles' },
    engine: 'Unity',
    role: { en: 'Lead Programmer', es: 'Programador principal' },
    team: { en: 'Team project', es: 'Proyecto en equipo' },
    short: {
      en: 'A doodle comes to life in a notebook, jumping, fighting enemies and solving puzzles.',
      es: 'Un garabato cobra vida en un cuaderno, saltando, combatiendo enemigos y resolviendo puzles.'
    },
    description: {
      en: 'Dude L is a 2D platformer and puzzle game where a simple doodle comes to life. Created by a bored student on the last day of school, Dude L must jump, fight enemies and solve clever puzzles while moving through the pages of a notebook.',
      es: 'Dude L es un videojuego de plataformas 2D y puzles donde un garabato cobra vida. Creado por un alumno aburrido el último día de clase, Dude L debe saltar, luchar contra enemigos y resolver puzles mientras avanza por las páginas de un cuaderno.'
    },
    contributions: {
      en: [
        'Led programming implementation and coordinated technical tasks.',
        'Developed player movement, platforming interactions and puzzle-related systems.',
        'Worked with the team to integrate mechanics, feedback and level flow.'
      ],
      es: [
        'Lideré la implementación de programación y coordiné tareas técnicas.',
        'Desarrollé movimiento del jugador, interacciones de plataformas y sistemas relacionados con puzles.',
        'Trabajé con el equipo para integrar mecánicas, feedback y flujo de niveles.'
      ]
    },
    tags: ['Unity', 'C#', 'Leadership', 'Git', '2D'],
    links: [
      { labelKey: 'playGame', url: 'https://alferr.itch.io/dude-l' }
    ],
    video: '',
    galleryCount: 3
  },
  {
    id: 'rocket-land',
    title: 'Rocket Land',
    year: '2023',
    statusKey: 'statusFinished',
    type: { en: 'Arcade landing game', es: 'Juego arcade de aterrizaje' },
    engine: 'Unity',
    role: { en: 'Programmer · Solo project', es: 'Programador · Proyecto individual' },
    team: { en: 'Solo project', es: 'Proyecto individual' },
    short: {
      en: 'A precision game where players control a ship, navigate levels and land safely.',
      es: 'Juego de precisión donde el jugador controla una nave, supera niveles y aterriza en zonas seguras.'
    },
    description: {
      en: 'Rocket Land is one of my first games. Players control a ship through challenging levels and try to land on safe spots as efficiently as possible. The project helped me strengthen core Unity fundamentals, controls, level iteration and game feel.',
      es: 'Rocket Land es uno de mis primeros juegos. El jugador controla una nave a través de niveles desafiantes e intenta aterrizar en zonas seguras de la forma más eficiente posible. El proyecto me ayudó a reforzar fundamentos de Unity, controles, iteración de niveles y game feel.'
    },
    contributions: {
      en: [
        'Built the full gameplay loop as a solo project.',
        'Implemented ship controls, collision, level progression and landing logic.',
        'Iterated on level difficulty, timing and responsive input.'
      ],
      es: [
        'Construí el bucle completo de gameplay como proyecto individual.',
        'Implementé controles de nave, colisiones, progresión de niveles y lógica de aterrizaje.',
        'Iteré dificultad, timing y respuesta de controles.'
      ]
    },
    tags: ['Unity', 'C#', 'Solo', 'First Steps'],
    links: [
      { labelKey: 'playGame', url: 'https://arvideogames.itch.io/rocketland' }
    ],
    video: '',
    galleryCount: 3
  },
  {
    id: 'metal-y-plomo',
    title: 'Metal y Plomo',
    year: '2022',
    statusKey: 'statusFinished',
    type: { en: '2D platformer shooter', es: 'Plataformas 2D y shooter' },
    engine: 'Construct',
    role: { en: 'Programmer', es: 'Programador' },
    team: { en: 'Team project', es: 'Proyecto en equipo' },
    short: {
      en: '2D platformer with puzzles, shooting mechanics and a grappling hook for high mobility.',
      es: 'Plataformas 2D con puzles, mecánicas de disparo y un gancho para alta movilidad.'
    },
    description: {
      en: 'Metal y Plomo is a 2D platformer featuring puzzles and shooting mechanics. Players navigate multi-level environments using a grappling hook that enables high mobility while progressing through office-like scenarios and mission objectives.',
      es: 'Metal y Plomo es un plataformas 2D con puzles y mecánicas de disparo. El jugador recorre entornos de varios niveles usando un gancho que permite gran movilidad mientras avanza por escenarios de oficinas y objetivos de misión.'
    },
    contributions: {
      en: [
        'Programmed gameplay systems with Construct as part of a multidisciplinary team.',
        'Worked on platforming, shooting interactions and grappling-based movement.',
        'Collaborated with designers and artists to integrate levels, pacing and mechanics.'
      ],
      es: [
        'Programé sistemas de gameplay en Construct como parte de un equipo multidisciplinar.',
        'Trabajé en plataformas, interacciones de disparo y movimiento con gancho.',
        'Colaboré con diseñadores y artistas para integrar niveles, ritmo y mecánicas.'
      ]
    },
    tags: ['Construct', 'Teamwork', '2D', 'Shooter', 'First Steps'],
    links: [
      { labelKey: 'playGame', url: 'https://llama-larga.itch.io/metal-y-plomo' }
    ],
    video: '',
    galleryCount: 3
  }
];

let currentLang = localStorage.getItem('portfolio-lang') || 'en';
let currentTheme = localStorage.getItem('portfolio-theme') || 'dark';
let activeProject = null;

const root = document.documentElement;
const projectsGrid = document.getElementById('projects-grid');
const modal = document.getElementById('project-modal');
const modalBody = document.getElementById('modal-body');
const closeModalButton = document.querySelector('.close-modal');
const languageToggle = document.getElementById('language-toggle');
const themeToggle = document.getElementById('theme-toggle');

function t(key) {
  return translations[currentLang][key] || translations.en[key] || key;
}

function localize(value) {
  if (typeof value === 'string') return value;
  return value[currentLang] || value.en || '';
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('portfolio-lang', lang);
  root.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    el.textContent = t(key);
  });
  languageToggle.textContent = lang === 'en' ? 'ES' : 'EN';
  renderProjects();
  if (activeProject) renderModal(activeProject);
}

function setTheme(theme) {
  currentTheme = theme;
  localStorage.setItem('portfolio-theme', theme);
  root.dataset.theme = theme;
  themeToggle.textContent = theme === 'dark' ? '☾' : '☀';
  themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
}

function renderProjects() {
  projectsGrid.innerHTML = projects.map((project) => `
    <article class="project reveal visible" tabindex="0" role="button" aria-label="${t('viewDetails')} ${project.title}" data-project-id="${project.id}">
      <div class="status-row">
        <span>${t(project.statusKey)}</span>
        <span>${project.year}</span>
      </div>
      <div class="project-media" aria-hidden="true">
        <div class="project-media-content">
          <span class="project-media-title">${project.title}</span>
          <span class="project-media-subtitle">${t('trailerPlaceholder')}</span>
        </div>
      </div>
      <h3>${project.title}</h3>
      <p>${localize(project.short)}</p>
      <p class="project-meta">Engine: ${project.engine} | ${localize(project.type)}</p>
      <span class="project-action">${t('viewDetails')}</span>
    </article>
  `).join('');

  document.querySelectorAll('.project').forEach((card) => {
    const open = () => {
      const project = projects.find((item) => item.id === card.dataset.projectId);
      if (project) openModal(project);
    };
    card.addEventListener('click', open);
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        open();
      }
    });
  });
}

function renderVideo(project) {
  if (project.video) {
    return `
      <div class="video-placeholder video-wrapper">
        <video controls playsinline preload="metadata" src="${project.video}"></video>
      </div>
    `;
  }

  return `
    <div class="video-placeholder" aria-label="${t('trailerPlaceholder')}">
      <div class="video-placeholder-content">
        <span class="video-placeholder-title">${project.title}</span>
        <span class="video-placeholder-subtitle">${t('trailerHelp')}</span>
      </div>
    </div>
  `;
}

function renderGallery(project) {
  const count = project.galleryCount || 3;
  return `
    <div class="gallery-grid">
      ${Array.from({ length: count }, (_, index) => `
        <div class="gallery-placeholder">
          <div class="gallery-placeholder-content">
            <span class="gallery-placeholder-title">${t('galleryPlaceholder')} ${index + 1}</span>
            <span class="gallery-placeholder-subtitle">${t('galleryHelp')}</span>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function renderLinks(project) {
  if (!project.links.length) {
    return `<p class="modal-description" style="text-align:center;">${t('noLinks')}</p>`;
  }

  return `
    <div class="project-links">
      ${project.links.map((link, index) => `
        <a class="button ${index === 0 ? 'primary' : 'secondary'}" href="${link.url}" target="_blank" rel="noreferrer">${t(link.labelKey)}</a>
      `).join('')}
    </div>
  `;
}

function renderModal(project) {
  const features = project.contributions[currentLang] || project.contributions.en;
  activeProject = project;

  modalBody.innerHTML = `
    <p class="modal-kicker">${t(project.statusKey)} · ${project.year}</p>
    <h2 class="modal-title" id="modal-title">${project.title}</h2>
    <p class="modal-subtitle">${localize(project.type)}</p>

    <div class="modal-menu" role="tablist" aria-label="Project detail sections">
      <button class="is-active" type="button" data-panel="overview">${t('modalOverview')}</button>
      <button type="button" data-panel="work">${t('modalRole')}</button>
      <button type="button" data-panel="tech">${t('modalTech')}</button>
      <button type="button" data-panel="links">${t('modalLinks')}</button>
    </div>

    <section class="modal-panel is-active" id="overview-panel">
      <div class="project-info-grid">
        <div class="info-item"><span><span class="info-label">${t('roleLabel')}</span><span class="info-value">${localize(project.role)}</span></span></div>
        <div class="info-item"><span><span class="info-label">${t('engineLabel')}</span><span class="info-value">${project.engine}</span></span></div>
        <div class="info-item"><span><span class="info-label">${t('yearLabel')}</span><span class="info-value">${project.year}</span></span></div>
        <div class="info-item"><span><span class="info-label">${t('teamLabel')}</span><span class="info-value">${localize(project.team)}</span></span></div>
      </div>
      <p class="modal-description">${localize(project.description)}</p>
      ${renderVideo(project)}
      ${renderGallery(project)}
    </section>

    <section class="modal-panel" id="work-panel">
      <p class="modal-description">${localize(project.description)}</p>
      <ul class="feature-list">
        ${features.map((feature) => `<li>${feature}</li>`).join('')}
      </ul>
    </section>

    <section class="modal-panel" id="tech-panel">
      <div class="project-info-grid">
        <div class="info-item"><span><span class="info-label">${t('engineLabel')}</span><span class="info-value">${project.engine}</span></span></div>
        <div class="info-item"><span><span class="info-label">${t('typeLabel')}</span><span class="info-value">${localize(project.type)}</span></span></div>
        <div class="info-item"><span><span class="info-label">${t('statusLabel')}</span><span class="info-value">${t(project.statusKey)}</span></span></div>
      </div>
      <div class="tags-row">
        ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join('')}
      </div>
    </section>

    <section class="modal-panel" id="links-panel">
      <p class="modal-description" style="text-align:center;">${t('projectLinksTitle')}</p>
      ${renderLinks(project)}
    </section>
  `;

  bindModalMenu();
}

function bindModalMenu() {
  const menuButtons = modalBody.querySelectorAll('.modal-menu button');
  const panels = modalBody.querySelectorAll('.modal-panel');

  menuButtons.forEach((button) => {
    button.addEventListener('click', () => {
      menuButtons.forEach((btn) => btn.classList.remove('is-active'));
      panels.forEach((panel) => panel.classList.remove('is-active'));
      button.classList.add('is-active');
      const panel = modalBody.querySelector(`#${button.dataset.panel}-panel`);
      if (panel) panel.classList.add('is-active');
    });
  });
}

function openModal(project) {
  renderModal(project);
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  closeModalButton.focus();
}

function closeModal() {
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  activeProject = null;
}

function setupReveal() {
  const revealElements = document.querySelectorAll('.reveal:not(.visible)');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach((el) => observer.observe(el));
}

function setupCanvas() {
  const canvas = document.getElementById('network-bg');
  const ctx = canvas.getContext('2d');
  let width = 0;
  let height = 0;
  let particles = [];
  const pointer = { x: null, y: null };

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    createParticles();
  }

  function createParticles() {
    const count = Math.min(Math.max(Math.floor(width / 32), 28), 54);
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.6 + 0.8,
      phase: Math.random() * Math.PI * 2
    }));
  }

  function color(alpha) {
    const isLight = root.dataset.theme === 'light';
    return isLight ? `rgba(80,80,80,${alpha})` : `rgba(155,155,155,${alpha})`;
  }

  function tick() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.phase += 0.02;

      if (p.x < -20) p.x = width + 20;
      if (p.x > width + 20) p.x = -20;
      if (p.y < -20) p.y = height + 20;
      if (p.y > height + 20) p.y = -20;

      const alpha = 0.2 + Math.abs(Math.sin(p.phase)) * 0.35;
      ctx.beginPath();
      ctx.fillStyle = color(alpha);
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    });

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i];
        const b = particles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 160) {
          ctx.strokeStyle = color((1 - dist / 160) * 0.18);
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      if (pointer.x !== null) {
        const p = particles[i];
        const dx = p.x - pointer.x;
        const dy = p.y - pointer.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 190) {
          ctx.strokeStyle = color((1 - dist / 190) * 0.32);
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(pointer.x, pointer.y);
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(tick);
  }

  window.addEventListener('resize', resize);
  window.addEventListener('mousemove', (event) => {
    pointer.x = event.clientX;
    pointer.y = event.clientY;
  });
  window.addEventListener('mouseleave', () => {
    pointer.x = null;
    pointer.y = null;
  });

  resize();
  tick();
}

languageToggle.addEventListener('click', () => {
  setLanguage(currentLang === 'en' ? 'es' : 'en');
});

themeToggle.addEventListener('click', () => {
  setTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

closeModalButton.addEventListener('click', closeModal);
modal.addEventListener('click', (event) => {
  if (event.target === modal) closeModal();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.classList.contains('is-open')) {
    closeModal();
  }
});

setTheme(currentTheme);
setLanguage(currentLang);
setupReveal();
setupCanvas();

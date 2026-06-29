const teamProjects = [
  {
    id: "cloud-wanderer",
    title: "Cloud Wanderer",
    year: "2026",
    statusKey: "statusFinished",
    type: { en: "Cozy 2D mobile game", es: "Juego cozy 2D para móvil" },
    engine: "Unity",
    role: {
      en: "Programmer · Bachelor’s Final Project",
      es: "Programador · TFG",
    },
    team: { en: "Solo / academic project", es: "Solo / proyecto académico" },
    short: {
      en: "Cozy 2D mobile game about exploring procedurally generated islands and collecting unique birds.",
      es: "Juego cozy 2D para móvil sobre explorar islas generadas proceduralmente y coleccionar aves únicas.",
    },
    description: {
      en: "Cloud Wanderer is a cozy 2D mobile game developed as my Bachelor’s Final Project. Players explore procedurally generated islands to discover and collect unique birds. The project focuses on procedural level generation using a Wave Function Collapse-based system, mobile-friendly controls and a calm exploration loop.",
      es: "Cloud Wanderer es un juego cozy 2D para móvil desarrollado como mi Trabajo de Fin de Grado. El jugador explora islas generadas proceduralmente para descubrir y coleccionar aves únicas. El proyecto se centra en generación procedural con un sistema basado en Wave Function Collapse, controles adaptados a móvil y un bucle de exploración relajado.",
    },
    contributions: {
      en: [
        "Designed and implemented a Wave Function Collapse-based procedural generation system.",
        "Built gameplay systems for exploration and collection.",
        "Focused the project around mobile readability, iteration and clean Unity architecture.",
      ],
      es: [
        "Diseñé e implementé un sistema de generación procedural basado en Wave Function Collapse.",
        "Construí sistemas de gameplay para exploración y colección.",
        "Enfoqué el proyecto en legibilidad para móvil, iteración y arquitectura limpia en Unity.",
      ],
    },
    tags: ["Unity", "C#", "Mobile", "PCG", "WFC", "Git"],
    links: [],
    video: "../assets/CloudWanderer/CloudWander_placeHolder.mp4",
    image: "../assets/image-placeholder.jpg",
    gallery: [
      "assets/image-placeholder.jpg",
      "assets/image-placeholder.jpg",
      "assets/image-placeholder.jpg",
    ],
  },
  {
    id: "erebus-nyx",
    title: "Erebus-Nyx",
    year: "2025",
    statusKey: "statusFinished",
    type: {
      en: "Survival psychological horror",
      es: "Survival horror psicológico",
    },
    engine: "Unreal Engine 5",
    role: { en: "Programmer", es: "Programador" },
    team: { en: "Team project", es: "Proyecto en equipo" },
    short: {
      en: "Survival and psychological horror game set on an abandoned planet with exploration and resource management.",
      es: "Survival horror psicológico ambientado en un planeta abandonado con exploración y gestión de recursos.",
    },
    description: {
      en: "Erebus-Nyx is a survival and psychological horror game set on an abandoned planet. The player is sent by an intergalactic company to investigate a mysterious distress signal, facing hostile environments, adaptation challenges, resource management and hidden narrative elements.",
      es: "Erebus-Nyx es un survival horror psicológico ambientado en un planeta abandonado. El jugador es enviado por una compañía intergaláctica para investigar una misteriosa señal de auxilio, enfrentándose a entornos hostiles, desafíos de adaptación, gestión de recursos y narrativa oculta.",
    },
    contributions: {
      en: [
        "Implemented gameplay logic and systems in Unreal Engine 5 using Blueprints.",
        "Worked on survival-oriented mechanics such as exploration, resource management and interaction.",
        "Contributed to combat, atmosphere and player-facing systems.",
      ],
      es: [
        "Implementé lógica y sistemas de gameplay en Unreal Engine 5 usando Blueprints.",
        "Trabajé en mecánicas de supervivencia como exploración, gestión de recursos e interacción.",
        "Contribuí a combate, atmósfera y sistemas de cara al jugador.",
      ],
    },
    tags: ["UE5", "Blueprints", "Git", "Horror", "Survival"],
    links: [
      { labelKey: "playGame", url: "https://8rexlabs.itch.io/erebus-nyx" },
    ],
    video: "../assets/Games/Erebus-Nyx/Gameplay_Erebus-Nyx.mp4",
    image: "../assets/image-placeholder.jpg",
    gallery: [
      "assets/image-placeholder.jpg",
      "assets/image-placeholder.jpg",
      "assets/image-placeholder.jpg",
    ],
  },
  {
    id: "dude-l",
    title: "Dude L",
    year: "2024",
    statusKey: "statusFinished",
    type: { en: "2D platformer puzzle game", es: "Plataformas 2D y puzles" },
    engine: "Unity",
    role: { en: "Lead Programmer", es: "Programador principal" },
    team: { en: "Team project", es: "Proyecto en equipo" },
    short: {
      en: "A doodle comes to life in a notebook, jumping, fighting enemies and solving puzzles.",
      es: "Un garabato cobra vida en un cuaderno, saltando, combatiendo enemigos y resolviendo puzles.",
    },
    description: {
      en: "Dude L is a 2D platformer and puzzle game where a simple doodle comes to life. Created by a bored student on the last day of school, Dude L must jump, fight enemies and solve clever puzzles while moving through the pages of a notebook.",
      es: "Dude L es un videojuego de plataformas 2D y puzles donde un garabato cobra vida. Creado por un alumno aburrido el último día de clase, Dude L debe saltar, luchar contra enemigos y resolver puzles mientras avanza por las páginas de un cuaderno.",
    },
    contributions: {
      en: [
        "Led programming implementation and coordinated technical tasks.",
        "Developed player movement, platforming interactions and puzzle-related systems.",
        "Worked with the team to integrate mechanics, feedback and level flow.",
      ],
      es: [
        "Lideré la implementación de programación y coordiné tareas técnicas.",
        "Desarrollé movimiento del jugador, interacciones de plataformas y sistemas relacionados con puzles.",
        "Trabajé con el equipo para integrar mecánicas, feedback y flujo de niveles.",
      ],
    },
    tags: ["Unity", "C#", "Leadership", "Git", "2D"],
    links: [{ labelKey: "playGame", url: "https://alferr.itch.io/dude-l" }],
    video: "../assets/Games/DudeL/TrailerDudeL.mp4",
    image: "../assets/Games/DudeL/DudeL_Cover.png",
    gallery: [
      "../assets/Games/DudeL/DudeL_1.png",
      "../assets/Games/DudeL/DudeL_3.png",
      "../assets/Games/DudeL/DudeL_4.png",
      "../assets/Games/DudeL/DudeL_Cover.png",
    ],
  },
  {
    id: "rocket-land",
    title: "Rocket Land",
    year: "2023",
    statusKey: "statusFinished",
    type: { en: "Arcade landing game", es: "Juego arcade de aterrizaje" },
    engine: "Unity",
    role: {
      en: "Programmer · Solo project",
      es: "Programador · Proyecto individual",
    },
    team: { en: "Solo project", es: "Proyecto individual" },
    short: {
      en: "A precision game where players control a ship, navigate levels and land safely.",
      es: "Juego de precisión donde el jugador controla una nave, supera niveles y aterriza en zonas seguras.",
    },
    description: {
      en: "Rocket Land is one of my first games. Players control a ship through challenging levels and try to land on safe spots as efficiently as possible. The project helped me strengthen core Unity fundamentals, controls, level iteration and game feel.",
      es: "Rocket Land es uno de mis primeros juegos. El jugador controla una nave a través de niveles desafiantes e intenta aterrizar en zonas seguras de la forma más eficiente posible. El proyecto me ayudó a reforzar fundamentos de Unity, controles, iteración de niveles y game feel.",
    },
    contributions: {
      en: [
        "Built the full gameplay loop as a solo project.",
        "Implemented ship controls, collision, level progression and landing logic.",
        "Iterated on level difficulty, timing and responsive input.",
      ],
      es: [
        "Construí el bucle completo de gameplay como proyecto individual.",
        "Implementé controles de nave, colisiones, progresión de niveles y lógica de aterrizaje.",
        "Iteré dificultad, timing y respuesta de controles.",
      ],
    },
    tags: ["Unity", "C#", "Solo", "First Steps"],
    links: [
      { labelKey: "playGame", url: "https://arvideogames.itch.io/rocketland" },
    ],
    video: "../assets/Games/RocketLand/RocketLand_Gameplay.mp4",
    image: "../assets/Games/RocketLand/RocketLand_Cover.png",

    gallery: [
      "../assets/Games/RocketLand/RocketLand_1.png",
      "../assets/Games/RocketLand/RocketLand_2.png",
      "../assets/Games/RocketLand/RocketLand_3.png",
      "../assets/Games/RocketLand/RocketLand_Cover.png",
    ],
  },
  {
    id: "metal-y-plomo",
    title: "Metal y Plomo",
    year: "2022",
    statusKey: "statusFinished",
    type: { en: "2D platformer shooter", es: "Plataformas 2D y shooter" },
    engine: "Construct",
    role: { en: "Programmer", es: "Programador" },
    team: { en: "Team project", es: "Proyecto en equipo" },
    short: {
      en: "2D platformer with puzzles, shooting mechanics and a grappling hook for high mobility.",
      es: "Plataformas 2D con puzles, mecánicas de disparo y un gancho para alta movilidad.",
    },
    description: {
      en: "Metal y Plomo is a 2D platformer featuring puzzles and shooting mechanics. Players navigate multi-level environments using a grappling hook that enables high mobility while progressing through office-like scenarios and mission objectives.",
      es: "Metal y Plomo es un plataformas 2D con puzles y mecánicas de disparo. El jugador recorre entornos de varios niveles usando un gancho que permite gran movilidad mientras avanza por escenarios de oficinas y objetivos de misión.",
    },
    contributions: {
      en: [
        "Programmed gameplay systems with Construct as part of a multidisciplinary team.",
        "Worked on platforming, shooting interactions and grappling-based movement.",
        "Collaborated with designers and artists to integrate levels, pacing and mechanics.",
      ],
      es: [
        "Programé sistemas de gameplay en Construct como parte de un equipo multidisciplinar.",
        "Trabajé en plataformas, interacciones de disparo y movimiento con gancho.",
        "Colaboré con diseñadores y artistas para integrar niveles, ritmo y mecánicas.",
      ],
    },
    tags: ["Construct", "Teamwork", "2D", "Shooter", "First Steps"],
    links: [
      {
        labelKey: "playGame",
        url: "https://llama-larga.itch.io/metal-y-plomo",
      },
    ],
    video: "../assets/MetalYPlomo/MetalYPlomo.mp4",
    image: "../assets/image-placeholder.jpg",
    gallery: [
      "../assets/image-placeholder.jpg",
      "assets/image-placeholder.jpg",
      "assets/image-placeholder.jpg",
    ],
  },
];
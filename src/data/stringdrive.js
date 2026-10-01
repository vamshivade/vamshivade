import stringDriveSquare from '../assets/String Drive Square.webp';
import stringDriveLandscape from '../assets/String Drive Landscape.webp';

const stringDriveProject = {
  id: "string-drive",

  title: "String Drive",

  subtitle: "Telegram Play-to-Earn Web3 Racing Platform",

  category: "Frontend Development",

  role: "Frontend Developer",

  description:
    "A Telegram-integrated Web3 Play-to-Earn gaming platform featuring an interactive 2D car racing game built with React and HTML5 Canvas, ticket-based gameplay, daily rewards, social tasks, advertisements, referrals, leaderboards, user profiles, and cryptocurrency withdrawal-related interfaces.",

  shortDescription:
    "A mobile-first Telegram Mini-App frontend featuring a custom HTML5 Canvas car racing game, ticket-based gameplay, rewards, tasks, referrals, leaderboard, profile management, advertising integrations, and Web3 wallet-related functionality.",

  image: stringDriveSquare,

  coverImage: stringDriveLandscape,

  technologies: [
    "React 18",
    "JavaScript",
    "JSX",
    "Vite",
    "HTML5 Canvas",
    "React Context API",
    "React Hooks",
    "React Router DOM",
    "Axios",
    "Material UI",
    "React-Bootstrap",
    "Bootstrap",
    "Sass",
    "Framer Motion",
    "Telegram WebApp SDK",
    "@twa-dev/sdk",
    "Ton-AI SDK",
    "Adsgram",
    "TonConnect UI",
    "CryptoJS",
    "Formik",
    "Yup",
    "React Hot Toast",
    "React Toastify",
    "SheetJS",
    "React GA"
  ],

  projectType: "Telegram Mini Application",

  developmentType: "Frontend Application",

  overview: {
    title: "Project Overview",

    content:
      "String Drive is a Telegram-integrated Web3 Play-to-Earn gaming platform designed primarily as a mobile-first Telegram Mini-App. The frontend provides an interactive 2D car racing experience where users drive through multiple lanes, avoid obstacles, collect game elements, use ticket-based wagers, and progress through configurable difficulty levels. The platform also provides daily rewards, social tasks, advertising interactions, referrals, leaderboards, profile management, and withdrawal-related flows. A separate administrative frontend provides interfaces for game configuration, user management, task and advertisement management, withdrawal lifecycle management, reporting, and Web3 wallet-related payout operations. The player-facing frontend communicates with backend REST APIs using Axios and uses React Context for shared application state.",

  },

  myRole: {
    title: "My Role",

    position: "Frontend Developer",

    description:
      "My primary responsibility in the String Drive project was frontend application development. I worked on the React-based Telegram Mini-App, building the mobile-first gaming interface, developing the HTML5 Canvas racing experience, implementing player controls and game interactions, integrating REST APIs using Axios, managing shared state using React Context, implementing Telegram WebApp functionality, building reward, task, referral, leaderboard, profile, and wagering interfaces, integrating advertising providers, handling responsive UI behavior, and contributing to the administrative frontend with configuration, reporting, user-management, and wallet-related interfaces."
  },

  frontend: {
    title: "Frontend Development",

    description:
      "The String Drive frontend consists of a player-facing Telegram Mini-App and a separate administrative operations portal. The player application is built with React 18 and Vite and uses HTML5 Canvas for the custom 2D racing game. The administrative application uses React with React-Bootstrap, Formik, and responsive dashboard components.",

    architecture: [
      "React 18 single-page application",
      "Vite frontend build system",
      "Feature-based React component structure",
      "Reusable functional components",
      "HTML5 Canvas 2D game engine",
      "React Context API for shared application state",
      "React Hooks for component and game state",
      "React Router DOM for client-side navigation",
      "Axios-based REST API integration",
      "Centralized API configuration",
      "Telegram WebApp SDK integration",
      "Mobile-first Telegram Mini-App architecture",
      "Material UI based player interface",
      "React-Bootstrap based admin interface",
      "Reusable modal components",
      "Reusable loaders and notification components",
      "Custom game rendering and animation logic",
      "Touch and mouse interaction handling",
      "Loading and error state handling",
      "Toast-based user feedback",
      "Local storage based session information"
    ]
  },

  features: [
    {
      title: "Telegram Mini-App Integration",

      description:
        "Developed the player-facing application specifically for the Telegram WebApp environment, including Telegram environment detection, mobile access restrictions, WebApp initialization, and Telegram-specific interaction behavior.",

      items: [
        "Telegram WebApp integration",
        "Telegram mobile environment detection",
        "Telegram desktop/browser fallback",
        "Telegram WebApp initialization",
        "Telegram viewport handling",
        "Telegram back-button handling",
        "Telegram user information access",
        "Telegram initData handling",
        "Telegram-specific navigation",
        "Mobile-first Telegram experience"
      ]
    },

    {
      title: "2D Car Racing Game",

      description:
        "Built the interactive car racing game interface using the native HTML5 Canvas API instead of a third-party game engine. The game renders the road, player vehicle, obstacles, effects, and gameplay interactions inside the React application.",

      items: [
        "HTML5 Canvas 2D rendering",
        "Continuous requestAnimationFrame game loop",
        "Multi-lane road system",
        "Player car movement",
        "Touch drag controls",
        "Mouse drag controls",
        "Road scrolling",
        "Enemy vehicle rendering",
        "Road pothole rendering",
        "Coin cluster rendering",
        "Game animation",
        "Game state handling",
        "Game session interface"
      ]
    },

    {
      title: "Game Controls & Interaction",

      description:
        "Implemented interactive player controls for navigating the car across multiple lanes using touch and mouse drag interactions, with gameplay behavior designed for mobile Telegram users.",

      items: [
        "Touch drag controls",
        "Mouse drag controls",
        "Multi-lane movement",
        "Player position tracking",
        "Input event handling",
        "Mobile touch interaction",
        "Desktop mouse interaction",
        "Game control state",
        "Gameplay interaction feedback"
      ]
    },

    {
      title: "Collision Detection",

      description:
        "Implemented client-side collision detection for interactions between the player's vehicle, enemy vehicles, and road hazards using custom bounding-box calculations.",

      items: [
        "Player vehicle collision detection",
        "Enemy vehicle collision detection",
        "Road hazard collision detection",
        "Bounding-box calculations",
        "Collision state handling",
        "Crash detection",
        "Life reduction flow",
        "Game-over interaction",
        "Collision-related effects"
      ]
    },

    {
      title: "Procedural Obstacles",

      description:
        "Implemented frontend rendering and spawning logic for different types of road obstacles and game elements to create changing gameplay scenarios.",

      items: [
        "Enemy vehicle spawning",
        "Multiple enemy vehicle sprites",
        "Road potholes",
        "Coin clusters",
        "Procedural obstacle positioning",
        "Dynamic obstacle movement",
        "Obstacle collision handling",
        "Difficulty-related spawning",
        "Game environment variation"
      ]
    },

    {
      title: "Particle & Visual Effects",

      description:
        "Developed custom particle effects for crash and road hazard interactions to improve the visual feedback of the Canvas-based game.",

      items: [
        "Vehicle crash explosion particles",
        "Pothole water splash particles",
        "Particle position updates",
        "Particle animation",
        "Particle lifecycle handling",
        "Canvas-based visual effects",
        "Game event-based effects",
        "Crash feedback"
      ]
    },

    {
      title: "Audio Integration",

      description:
        "Integrated browser-based audio effects into the game to provide feedback for gameplay events and create a more immersive racing experience.",

      items: [
        "Engine audio",
        "Crash sound",
        "Pothole splash sound",
        "Coin collection sound",
        "Background audio",
        "Game event-based audio",
        "Audio reference management",
        "Gameplay audio feedback"
      ]
    },

    {
      title: "Game Difficulty & Configuration",

      description:
        "Integrated frontend game configuration data provided by the backend to control gameplay parameters such as road speed, enemy speed, spawn frequency, and level distance.",

      items: [
        "Road speed configuration",
        "Enemy speed configuration",
        "Obstacle spawn frequency",
        "Level distance configuration",
        "Dynamic difficulty values",
        "Game multiplier values",
        "Backend-driven game settings",
        "Frontend configuration handling"
      ]
    },

    {
      title: "Wager / Ticket Staking",

      description:
        "Built the pre-game wager interface where users can select ticket amounts within configured limits before starting the racing session.",

      items: [
        "Pre-game wager modal",
        "Ticket amount selection",
        "Minimum wager validation",
        "Maximum wager validation",
        "Available balance display",
        "Wager confirmation",
        "Invalid wager feedback",
        "Game initialization after wager"
      ]
    },

    {
      title: "Life & Revive System",

      description:
        "Implemented frontend interactions around the game's life system and advertisement-based revive flow.",

      items: [
        "Three-life game system",
        "Life counter display",
        "Life state updates",
        "Crash-related life reduction",
        "Game-over state",
        "Advertisement-based revive flow",
        "Revive interaction",
        "Revive feedback"
      ]
    },

    {
      title: "Advertising & Monetization",

      description:
        "Integrated supported Telegram advertising providers into the frontend for advertisement-based rewards and revive interactions.",

      items: [
        "Ton-AI SDK integration",
        "Adsgram integration",
        "Telegram advertisement flows",
        "Advertisement popup handling",
        "Advertisement countdown timers",
        "Daily advertisement limits",
        "Advertisement reward interactions",
        "Ad-watch revive flow",
        "Advertisement status feedback"
      ]
    },

    {
      title: "Ad Blocker Detection",

      description:
        "Implemented frontend ad-blocker detection to identify when sponsored advertising scripts are blocked and provide users with an appropriate notification.",

      items: [
        "Ad blocker detection hook",
        "Blocked advertisement detection",
        "Persistent notification popup",
        "User guidance",
        "Advertisement availability state",
        "Ad-related error handling"
      ]
    },

    {
      title: "Daily Rewards",

      description:
        "Built the daily check-in reward interface allowing users to view and claim available daily bonuses while displaying updated reward and balance information.",

      items: [
        "Daily reward modal",
        "Daily check-in interface",
        "Reward availability state",
        "Reward claim flow",
        "Balance update",
        "Reward timestamp display",
        "Claim success feedback",
        "Claim error feedback"
      ]
    },

    {
      title: "Social Task Hub",

      description:
        "Developed the task interface for displaying categorized social and community activities that provide users with reward points after supported task completion.",

      items: [
        "Task listing",
        "Task categories",
        "Social tasks",
        "Community tasks",
        "Task completion flow",
        "Task verification response",
        "Reward update",
        "Task loading states",
        "Task success feedback",
        "Task error feedback"
      ]
    },

    {
      title: "Referral System",

      description:
        "Implemented Telegram referral and invitation flows allowing users to generate referral links, copy them, and share invitations through Telegram.",

      items: [
        "Referral interface",
        "Unique referral link",
        "Referral link generation",
        "Copy-to-clipboard functionality",
        "Telegram sharing",
        "Telegram URL schemes",
        "Referral information",
        "Referral navigation",
        "Referral engagement flow"
      ]
    },

    {
      title: "Leaderboard",

      description:
        "Developed the competitive leaderboard interface displaying user rankings based on ticket balances, including top-ranked user presentation and pagination.",

      items: [
        "Global leaderboard",
        "User ranking",
        "Ticket balance ranking",
        "Top-three visual indicators",
        "Leaderboard pagination",
        "Leaderboard API integration",
        "Ranking state",
        "Responsive leaderboard UI",
        "User ranking information"
      ]
    },

    {
      title: "Profile & Account Management",

      description:
        "Built the profile interface for displaying user statistics, balances, game activity, and account-related actions.",

      items: [
        "User profile",
        "Username display",
        "Username editing",
        "Ticket balance",
        "Games played",
        "Wins information",
        "User statistics",
        "Profile editing modal",
        "Account interaction",
        "Withdrawal-related navigation"
      ]
    },

    {
      title: "Withdrawal-Related Interface",

      description:
        "Implemented frontend interactions and navigation related to the platform's withdrawal workflow, including access to withdrawal functionality and user account information.",

      items: [
        "Withdrawal-related UI",
        "Account balance display",
        "Withdrawal navigation",
        "Wallet-related information",
        "Withdrawal status interaction",
        "External withdrawal bot redirection",
        "User feedback"
      ]
    },

    {
      title: "Administrative Dashboard",

      description:
        "Contributed to the administrative frontend used by platform administrators to monitor users, configure game settings, manage tasks and advertisements, inspect game history, and manage withdrawal workflows.",

      items: [
        "Admin dashboard",
        "KPI metric cards",
        "Total users metric",
        "Total transactions metric",
        "Total games metric",
        "Game configuration",
        "Game level management",
        "Multiplier configuration",
        "Task management",
        "Advertisement management",
        "User management",
        "Game history inspection",
        "Withdrawal management",
        "Responsive admin layouts"
      ]
    },

    {
      title: "Admin User Management",

      description:
        "Developed administrative interfaces for viewing and managing user records and reviewing user-related game information.",

      items: [
        "User listing",
        "User records",
        "User status information",
        "User data tables",
        "Game history inspection",
        "User-related API integration",
        "Responsive data tables"
      ]
    },

    {
      title: "Admin Withdrawal Management",

      description:
        "Implemented administrative interfaces for managing the withdrawal lifecycle and displaying withdrawal-related transaction information.",

      items: [
        "Pending withdrawals",
        "Approved withdrawals",
        "Rejected withdrawals",
        "Transferred withdrawals",
        "Withdrawal details",
        "Transaction information",
        "Withdrawal status",
        "Administrative actions",
        "Status feedback"
      ]
    },

    {
      title: "Excel Reporting",

      description:
        "Implemented client-side report generation in the administrative frontend using SheetJS for exporting user, game history, and withdrawal-related data.",

      items: [
        "SheetJS integration",
        "Excel export",
        "User log export",
        "Game history export",
        "Withdrawal batch export",
        "Client-side file generation",
        "Report data formatting"
      ]
    },

    {
      title: "Web3 Wallet Integration",

      description:
        "Integrated wallet-related functionality into the administrative frontend using TonConnect UI for non-custodial TON wallet interactions and payout-related operations.",

      items: [
        "TonConnect UI integration",
        "TON wallet connection",
        "Wallet status",
        "Non-custodial wallet interaction",
        "Batch payout interface",
        "Wallet transaction interaction",
        "Transaction feedback",
        "Administrative payout flow"
      ]
    }
  ],

  apiIntegration: {
    title: "API Integration",

    description:
      "Integrated REST APIs into the React frontend using Axios and centralized API configuration. The API-driven frontend supports authentication, game configuration, game sessions, balances, rewards, tasks, advertisements, referrals, leaderboards, profiles, users, game history, and withdrawal-related workflows.",

    technologies: [
      "Axios",
      "REST APIs",
      "React",
      "Centralized Axios configuration",
      "API service helpers"
    ],

    responsibilities: [
      "Integrated frontend API requests using Axios.",
      "Connected React components with backend REST endpoints.",
      "Integrated APIs for Telegram user authentication.",
      "Integrated game configuration APIs.",
      "Integrated game wager and session APIs.",
      "Integrated user balance APIs.",
      "Integrated daily reward APIs.",
      "Integrated social task APIs.",
      "Integrated advertisement-related APIs.",
      "Integrated referral APIs.",
      "Integrated leaderboard APIs.",
      "Integrated profile APIs.",
      "Integrated game history APIs.",
      "Integrated withdrawal-related APIs.",
      "Integrated administrative APIs.",
      "Handled API loading states.",
      "Handled API success and failure states.",
      "Updated frontend state based on API responses.",
      "Provided user feedback using toast notifications."
    ]
  },

  telegramIntegration: {
    title: "Telegram Mini-App Integration",

    description:
      "String Drive is designed around the Telegram WebApp environment. The frontend integrates Telegram WebApp functionality for application initialization, mobile environment handling, user authentication, viewport behavior, navigation, and Telegram-specific user interactions.",

    technologies: [
      "Telegram WebApp SDK",
      "@twa-dev/sdk",
      "Telegram Bot Integration"
    ],

    responsibilities: [
      "Integrated Telegram WebApp SDK into the React application.",
      "Detected whether the application was running inside Telegram.",
      "Implemented mobile Telegram environment handling.",
      "Provided fallback UI for external browser and desktop access.",
      "Integrated Telegram WebApp initialization.",
      "Handled Telegram viewport behavior.",
      "Handled Telegram hardware back-button interactions.",
      "Accessed Telegram WebApp initialization data.",
      "Integrated Telegram authentication flows.",
      "Implemented Telegram-specific navigation behavior.",
      "Integrated Telegram referral sharing flows.",
      "Optimized the application for Telegram mobile usage."
    ]
  },

  walletIntegration: {
    title: "Wallet & Web3 Integration",

    description:
      "The project includes Web3-related frontend functionality for wallet-aware gaming and administrative payout workflows. The administrative frontend integrates TonConnect UI for non-custodial TON wallet interactions and batch payout operations.",

    technologies: [
      "TonConnect UI",
      "TON",
      "Ton-AI SDK",
      "Solana-related Web3 ecosystem",
      "Web3 wallet interaction"
    ],

    features: [
      "TON wallet connection",
      "Wallet status display",
      "Non-custodial wallet interaction",
      "Administrative payout interface",
      "Batch payout interaction",
      "Wallet transaction state",
      "Transaction feedback",
      "Web3-aware withdrawal workflows"
    ]
  },

  responsiveDesign: {
    title: "Responsive & Mobile-First Design",

    description:
      "The player-facing application is designed primarily for mobile users accessing the game through Telegram. The frontend uses mobile-focused layouts, responsive Material UI components, touch interactions, responsive game interfaces, and desktop fallback handling.",

    features: [
      "Mobile-first Telegram layout",
      "Responsive game interface",
      "Responsive game controls",
      "Touch-friendly controls",
      "Responsive profile page",
      "Responsive task page",
      "Responsive leaderboard",
      "Responsive referral interface",
      "Responsive reward modals",
      "Responsive wager modal",
      "Responsive administrative dashboard",
      "Bootstrap responsive grids",
      "Material UI responsive components",
      "Desktop fallback handling",
      "Mobile-oriented navigation"
    ]
  },

  uiUx: {
    title: "UI / UX Features",

    description:
      "The frontend focuses on delivering a game-oriented Telegram experience with custom Canvas rendering, responsive layouts, interactive modals, visual feedback, animations, notifications, and mobile touch interactions.",

    features: [
      "Game-focused interface",
      "Mobile-first navigation",
      "Custom Canvas rendering",
      "Interactive game controls",
      "Game loading states",
      "Wager selection modal",
      "Daily reward modal",
      "Profile editing modal",
      "Ad blocker notification",
      "Toast notifications",
      "Loading animations",
      "Material UI components",
      "Responsive Bootstrap components",
      "Game particle effects",
      "Audio feedback",
      "Crash visual feedback",
      "Reward feedback",
      "Task completion feedback",
      "Wallet transaction feedback",
      "Error states",
      "Empty states",
      "Conditional navigation"
    ]
  },

  navigation: {
    title: "Navigation & Routing",

    technology: "React Router DOM",

    description:
      "Implemented client-side navigation using React Router DOM. The routing architecture separates major player-facing sections and game routes while conditionally displaying global navigation elements based on the active page.",

    areas: [
      "Games",
      "Car Game",
      "Tasks",
      "Profile",
      "Refer",
      "Leaderboard",
      "Home / Dashboard",
      "Game route",
      "Active gameplay screen",
      "Administrative Dashboard",
      "Admin User Management",
      "Admin Game Configuration",
      "Admin Task Management",
      "Admin Advertisement Management",
      "Admin Withdrawal Management",
      "Admin Reports"
    ]
  },

  stateManagement: {
    title: "State Management",

    technology: "React Context API + React Hooks",

    description:
      "Used React Context API for shared application state and React Hooks for component-level state and lifecycle management. Player-side contexts handle user information, balance synchronization, Telegram WebApp controls, and shared application state, while local hooks manage game rendering, canvas references, animation loops, particles, audio, and interactive UI states.",

    responsibilities: [
      "User state",
      "User balance state",
      "Ticket balance synchronization",
      "Telegram WebApp state",
      "Shared application state",
      "Authentication state",
      "Game state",
      "Canvas references",
      "Particle state",
      "Audio references",
      "Loading states",
      "Modal state",
      "Wager state",
      "Reward state",
      "Task state",
      "Wallet-related state"
    ]
  },

  authentication: {
    title: "Authentication & Session Handling",

    description:
      "The frontend integrates Telegram WebApp authentication by capturing Telegram initialization data and sending it to the backend authentication flow. After successful authentication, session-related identifiers and tokens are stored on the client and shared through application context.",

    technologies: [
      "Telegram WebApp",
      "Telegram initData",
      "JWT",
      "Local Storage",
      "React Context API"
    ],

    features: [
      "Telegram-based authentication",
      "Telegram initData handling",
      "Telegram user information",
      "JWT session handling",
      "Token persistence",
      "User ID persistence",
      "Chat ID persistence",
      "Authenticated user state",
      "Authentication-aware API requests",
      "Session information through React Context"
    ]
  },

  uiTechnologies: {
    title: "UI Technologies",

    technologies: [
      {
        name: "Material UI",

        usage:
          "Used extensively in the player-facing Telegram Mini-App for responsive layouts, cards, typography, buttons, dialogs, grids, containers, and mobile-oriented interface components."
      },

      {
        name: "React-Bootstrap",

        usage:
          "Used in the administrative frontend for dashboard layouts, tables, cards, forms, grids, and responsive administrative interfaces."
      },

      {
        name: "Bootstrap",

        usage:
          "Used for responsive layout structures and administrative UI development."
      },

      {
        name: "Sass",

        usage:
          "Used for custom styling and maintainable stylesheet organization within the frontend."
      },

      {
        name: "Framer Motion",

        usage:
          "Used for frontend animation and motion effects where required by the interface."
      },

      {
        name: "HTML5 Canvas",

        usage:
          "Used to build the custom 2D car racing engine, rendering gameplay objects, animations, obstacles, particles, and game effects."
      }
    ]
  },

  chartsAndVisualization: {
    title: "Charts & Visualization",

    technologies: [],

    note:
      "The project overview does not identify an active charting library implementation. The main visual rendering technology is the HTML5 Canvas 2D game engine, while the administrative frontend primarily uses KPI cards, tables, dashboards, and data-oriented interfaces."
  },

  formsAndValidation: {
    title: "Forms & User Interaction",

    technologies: [
      "Formik",
      "Yup",
      "React controlled inputs",
      "Frontend validation"
    ],

    features: [
      "Username editing form",
      "Wager amount input",
      "Wager validation",
      "Administrative login forms",
      "Game configuration forms",
      "Task management forms",
      "Advertisement configuration forms",
      "Withdrawal-related forms",
      "Controlled form inputs",
      "Form state management",
      "Validation feedback",
      "API validation responses",
      "Form submission states"
    ]
  },

  notifications: {
    title: "Notifications & Feedback",

    technologies: [
      "React Hot Toast",
      "React Toastify"
    ],

    features: [
      "Login feedback",
      "Game action feedback",
      "Wager validation feedback",
      "Reward notifications",
      "Task completion notifications",
      "Advertisement feedback",
      "Referral feedback",
      "Profile update feedback",
      "Wallet connection feedback",
      "Transaction feedback",
      "API error notifications",
      "Success notifications",
      "Error notifications",
      "Loading feedback"
    ]
  },

  userExperience: {
    title: "User Experience",

    description:
      "The frontend focuses on delivering a Telegram-first mobile gaming experience that combines interactive arcade gameplay with rewards, tasks, referrals, advertising, leaderboards, profile management, and Web3-related workflows.",

    highlights: [
      "Telegram-first user experience",
      "Mobile-focused arcade gaming",
      "Interactive 2D car racing",
      "Touch-based game controls",
      "Mouse-based game controls",
      "Canvas-based game rendering",
      "Obstacle avoidance gameplay",
      "Collision-based gameplay",
      "Particle crash effects",
      "Audio gameplay feedback",
      "Ticket-based gameplay",
      "Wager selection flow",
      "Three-life gameplay system",
      "Advertisement-based revive flow",
      "Daily reward experience",
      "Social task experience",
      "Referral and invite experience",
      "Leaderboard experience",
      "Profile management",
      "Withdrawal-related navigation",
      "Responsive administrative dashboard",
      "Excel report generation",
      "TON wallet interaction",
      "Toast-based feedback",
      "Loading and error states"
    ]
  },

  challenges: [
    {
      title: "Building a Canvas Game Inside React",

      description:
        "One of the major frontend challenges was integrating a custom HTML5 Canvas 2D game engine into a React application while managing canvas references, animation loops, rendering state, particles, audio, and user interactions through the React component lifecycle."
    },

    {
      title: "Mobile Telegram Environment",

      description:
        "The application was designed primarily for users accessing the platform inside Telegram, requiring careful handling of Telegram WebApp initialization, mobile viewport behavior, touch controls, navigation, and external browser fallback states."
    },

    {
      title: "Custom Collision Detection",

      description:
        "The racing game required custom bounding-box collision detection between the player vehicle, enemy vehicles, and road hazards without relying on a third-party game engine."
    },

    {
      title: "Game Performance & Animation",

      description:
        "The Canvas game uses requestAnimationFrame for continuous rendering and requires coordinated handling of road movement, vehicle movement, obstacle spawning, particles, audio, and collision calculations."
    },

    {
      title: "Complex User Flows",

      description:
        "The frontend combines multiple connected workflows including authentication, wagering, gameplay, rewards, tasks, advertisements, referrals, leaderboards, profiles, and withdrawal-related interactions, requiring organized routing and reusable components."
    },

    {
      title: "Advertising Integration",

      description:
        "Integrating multiple advertisement providers required handling popup flows, countdown timers, daily limits, reward states, revive interactions, and advertisement failure scenarios."
    },

    {
      title: "Web3 Wallet-Aware Frontend",

      description:
        "The administrative frontend includes non-custodial TON wallet interactions through TonConnect UI, requiring wallet connection states, transaction-related UI states, and appropriate user feedback."
    },

    {
      title: "Player and Admin Applications",

      description:
        "The project contains two distinct frontend experiences: the player-facing Telegram Mini-App and the administrative operations portal, requiring different UI patterns, responsive behavior, navigation structures, and component requirements."
    }
  ],

  learning: [
    "React 18 application development",
    "Vite frontend development",
    "HTML5 Canvas 2D development",
    "Custom game loop implementation",
    "requestAnimationFrame",
    "Canvas rendering",
    "Collision detection",
    "Particle system development",
    "Browser audio integration",
    "Touch interaction handling",
    "Mouse interaction handling",
    "React Context API",
    "React Hooks",
    "React Router DOM",
    "Axios REST API integration",
    "Telegram WebApp development",
    "Telegram Mini-App architecture",
    "Telegram authentication flow",
    "Mobile-first frontend development",
    "Material UI",
    "React-Bootstrap",
    "Bootstrap responsive design",
    "Formik form handling",
    "Yup validation",
    "Advertisement SDK integration",
    "Ad blocker detection",
    "Web3 wallet integration",
    "TonConnect UI",
    "Admin dashboard development",
    "Excel report generation using SheetJS",
    "Frontend notifications",
    "Game-oriented UI/UX development"
  ],

  frontendTechnologyStack: {
    framework: [
      "React 18",
      "Vite"
    ],

    language: [
      "JavaScript",
      "JSX"
    ],

    rendering: [
      "HTML5 Canvas",
      "Canvas 2D API",
      "requestAnimationFrame"
    ],

    routing: [
      "React Router DOM"
    ],

    stateManagement: [
      "React Context API",
      "React Hooks",
      "useState",
      "useReducer",
      "useRef",
      "useCallback",
      "useEffect"
    ],

    apiCommunication: [
      "Axios",
      "REST APIs",
      "Centralized API configuration",
      "API service helpers"
    ],

    telegram: [
      "Telegram WebApp SDK",
      "@twa-dev/sdk",
      "Telegram Bot Integration"
    ],

    ui: [
      "Material UI",
      "React-Bootstrap",
      "Bootstrap",
      "Sass",
      "Framer Motion"
    ],

    gameDevelopment: [
      "HTML5 Canvas 2D",
      "requestAnimationFrame",
      "Collision Detection",
      "Particle Effects",
      "Web Audio API"
    ],

    advertising: [
      "Ton-AI SDK",
      "Adsgram",
      "Telegram Ad Integration"
    ],

    wallet: [
      "TonConnect UI"
    ],

    forms: [
      "Formik",
      "Yup"
    ],

    security: [
      "CryptoJS",
      "Telegram initData"
    ],

    notifications: [
      "React Hot Toast",
      "React Toastify"
    ],

    reporting: [
      "SheetJS",
      "XLSX"
    ],

    analytics: [
      "React GA",
      "Google Analytics"
    ]
  },

  projectHighlights: [
    "Telegram-integrated Play-to-Earn gaming platform",
    "React 18 frontend",
    "Vite-based application",
    "Custom HTML5 Canvas 2D racing game",
    "requestAnimationFrame game loop",
    "Multi-lane car movement",
    "Touch and mouse drag controls",
    "Custom collision detection",
    "Procedural obstacle spawning",
    "Enemy vehicle rendering",
    "Road hazard rendering",
    "Particle crash effects",
    "Water splash effects",
    "Game audio integration",
    "Ticket-based gameplay",
    "Wager selection flow",
    "Three-life gameplay system",
    "Advertisement-based revive flow",
    "Ton-AI SDK integration",
    "Adsgram integration",
    "Daily reward system",
    "Social task system",
    "Telegram referral functionality",
    "Global leaderboard",
    "User profile management",
    "React Context state management",
    "Axios REST API integration",
    "Telegram WebApp integration",
    "Material UI responsive interface",
    "React-Bootstrap admin dashboard",
    "Admin game configuration",
    "Admin user management",
    "Admin withdrawal management",
    "Excel reporting with SheetJS",
    "TON wallet integration",
    "TonConnect UI",
    "Responsive mobile-first experience"
  ],

  portfolioDescription:
    "Developed a mobile-first Telegram Mini-App frontend for String Drive, a Web3 Play-to-Earn arcade racing platform built with React 18 and Vite. Built the interactive 2D car racing experience using the HTML5 Canvas API and requestAnimationFrame, including multi-lane touch controls, custom collision detection, procedural obstacles, particle effects, audio feedback, ticket-based wagering, and life/revive interactions. Implemented Telegram WebApp integration, REST API communication using Axios, React Context state management, daily rewards, social tasks, referrals, leaderboard, profile management, advertisement integrations, and responsive Material UI interfaces. Also contributed to the administrative frontend with React-Bootstrap, Formik, SheetJS reporting, and TonConnect wallet-related functionality.",

  resumeDescription:
    "Developed a React 18 and Vite-based Telegram Mini-App frontend for a Web3 Play-to-Earn racing platform, building a custom HTML5 Canvas 2D car racing engine with touch/mouse controls, collision detection, procedural obstacles, particle effects, audio, ticket wagering, and reward flows. Integrated Telegram WebApp authentication, Axios REST APIs, React Context, advertising SDKs, daily rewards, tasks, referrals, leaderboards, profile management, and responsive Material UI interfaces. Contributed to the administrative frontend using React-Bootstrap, Formik, SheetJS, and TonConnect UI.",

  resumeBulletPoints: [
    "Developed a Telegram Mini-App using React 18 and Vite for a mobile-first Web3 Play-to-Earn arcade racing platform.",

    "Built a custom HTML5 Canvas 2D car racing engine using requestAnimationFrame, multi-lane touch/mouse controls, procedural obstacles, bounding-box collision detection, particle effects, and audio feedback.",

    "Implemented ticket-based wager flows, life management, advertisement-based revive interactions, daily rewards, social tasks, referrals, and leaderboard interfaces.",

    "Integrated Telegram WebApp functionality using @twa-dev/sdk, including WebApp initialization, mobile environment handling, viewport behavior, back-button interactions, and Telegram authentication flows.",

    "Integrated REST APIs using Axios for authentication, game configuration, gameplay, balances, rewards, tasks, advertisements, referrals, leaderboards, profiles, and withdrawal-related workflows.",

    "Implemented centralized frontend state management using React Context API and React Hooks for user data, ticket balances, Telegram state, game state, and shared application interactions.",

    "Integrated Telegram advertising providers including Ton-AI SDK and Adsgram with countdown timers, daily limitations, reward flows, revive interactions, and ad-blocker detection.",

    "Developed responsive player interfaces using Material UI and contributed to the administrative dashboard using React-Bootstrap, Formik, and responsive Bootstrap layouts.",

    "Implemented client-side Excel reporting using SheetJS for administrative user logs, game history, and withdrawal-related reports.",

    "Integrated TonConnect UI into the administrative frontend for non-custodial TON wallet interactions and batch payout workflows."
  ],

  links: {
    telegramName: "@stringdrive_bot",

    liveDemo: "",

    github: "",

    caseStudy: ""
  },

  modal: {
    showImage: true,

    showOverview: true,

    showRole: true,

    showResponsibilities: true,

    showFeatures: true,

    showFrontendArchitecture: true,

    showApiIntegration: true,

    showTelegramIntegration: true,

    showWalletIntegration: true,

    showAuthentication: true,

    showResponsiveDesign: true,

    showUiUx: true,

    showChallenges: true,

    showTechnologyStack: true,

    showLearning: false,

    showResumeDescription: false
  }
};

export default stringDriveProject;

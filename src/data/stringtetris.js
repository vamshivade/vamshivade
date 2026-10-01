import stringTetrisSquare from '../assets/String Tetris Square.webp';
import stringTetrisLandscape from '../assets/String Tetris Landscape.webp';

const stringTetrisProject = {
  id: "string-tetris",

  title: "String Tetris",

  subtitle: "Telegram Web3 Play-to-Earn Tetris Gaming Platform",

  category: "Frontend Development",

  role: "Frontend Developer",

  description:
    "A Telegram-integrated Web3 Play-to-Earn gaming platform built with React and Vite, featuring a custom Tetris game engine, ticket-based gameplay, daily rewards, engagement tasks, rewarded advertisements, referrals, leaderboards, profile management, and cryptocurrency withdrawal workflows across TON and Solana.",

  shortDescription:
    "A mobile-first Telegram Mini App frontend combining classic Tetris gameplay with ticket-based wagering, rewards, tasks, referrals, rewarded ads, leaderboards, and Web3 wallet-related interactions.",

  image: stringTetrisSquare,

  coverImage: stringTetrisLandscape,

  technologies: [
    "React",
    "JavaScript",
    "JSX",
    "Vite",
    "React Context API",
    "React Hooks",
    "React Router DOM",
    "Axios",
    "Telegram WebApp SDK",
    "Telegram Bot Integration",
    "Material UI",
    "Tailwind CSS",
    "Bootstrap",
    "React Bootstrap",
    "CoreUI",
    "Sass",
    "Framer Motion",
    "TonConnect UI",
    "TON SDK",
    "Solana Web3",
    "Adsgram",
    "TON AI SDK",
    "Formik",
    "Yup",
    "Crypto-JS",
    "React Hot Toast",
    "React Toastify",
    "React GA",
    "XLSX",
    "Lucide React",
    "React Icons"
  ],

  projectType: "Telegram Mini Application",

  developmentType: "Frontend Application",

  overview: {
    title: "Project Overview",

    content:
      "String Tetris is a Telegram-integrated Web3 Play-to-Earn gaming platform designed specifically for users accessing the application through Telegram Mini Apps. The frontend provides a mobile-first Tetris gaming experience where users can play classic Tetris, participate in ticket-based game sessions, receive daily rewards, complete engagement tasks, watch rewarded advertisements, manage referrals, view leaderboards, and access cryptocurrency withdrawal functionality. The platform also includes a separate administrative frontend for managing users, game configurations, withdrawals, tasks, advertisements, reporting, and blockchain-related payout workflows."
  },

  myRole: {
    title: "My Role",

    position: "Frontend Developer",

    description:
      "My primary responsibility in the String Tetris project was frontend application development. I worked on building the Telegram Mini App using React and Vite, developing the custom Tetris game interface and game logic, creating reusable UI components, integrating REST APIs using Axios, managing shared application state with React Context, implementing Telegram WebApp flows, developing ticket, rewards, task, referral, leaderboard, profile, advertising, and withdrawal interfaces, integrating wallet-related functionality, and building responsive mobile-first experiences for Telegram users."
  },

  frontend: {
    title: "Frontend Development",

    description:
      "The frontend was developed using React, Vite, JavaScript, and JSX. The application follows a modular component-based architecture with dedicated game components, reusable UI elements, React Context-based shared state, React Router navigation, centralized Axios API communication, Telegram WebApp integration, responsive styling, and mobile-first layouts.",

    architecture: [
      "React component-based architecture",

      "Vite-based frontend application",

      "JavaScript and JSX development",

      "Reusable functional components",

      "Dedicated Tetris game components",

      "Game controller for board and piece state",

      "React Context for shared application state",

      "Component-level state management",

      "React Router DOM navigation",

      "Centralized Axios API communication",

      "Telegram WebApp SDK integration",

      "Telegram-specific mobile experience",

      "Responsive and mobile-first UI",

      "Reusable modal components",

      "Reusable loading components",

      "Toast-based feedback",

      "Dedicated administrative dashboard frontend",

      "Lazy-loaded administrative views"
    ]
  },

  features: [
    {
      title: "Custom Tetris Game Engine",

      description:
        "Developed the core Tetris gaming experience in React, implementing the classic seven-piece Tetris system together with movement, rotation, collision detection, line clearing, gravity, scoring, and visual feedback.",

      items: [
        "Classic Tetris board implementation",

        "Seven standard tetrominoes",

        "I tetromino",

        "J tetromino",

        "L tetromino",

        "O tetromino",

        "S tetromino",

        "T tetromino",

        "Z tetromino",

        "Tetromino rotation logic",

        "Piece movement",

        "Boundary detection",

        "Collision detection",

        "Line-clear detection",

        "Dynamic gravity speed",

        "Progressive game difficulty",

        "Score calculation",

        "Level multiplier handling",

        "Game-over handling",

        "Particle effects",

        "Confetti-style visual feedback"
      ]
    },

    {
      title: "Responsive Tetris Gameplay",

      description:
        "Implemented responsive game-board scaling to provide a consistent Tetris experience across different mobile Telegram WebView dimensions.",

      items: [
        "Dynamic game viewport calculation",

        "usePps responsive scaling logic",

        "Window resize handling",

        "Mobile screen adaptation",

        "Consistent game board proportions",

        "Responsive game layout",

        "Telegram WebView compatibility",

        "Mobile-focused gameplay experience"
      ]
    },

    {
      title: "Telegram Mini App Integration",

      description:
        "Built the frontend specifically for the Telegram Mini App environment, integrating Telegram WebApp APIs for application initialization, viewport behavior, navigation, and authentication.",

      items: [
        "Telegram WebApp integration",

        "Telegram mobile WebView support",

        "Telegram environment detection",

        "WebApp initialization",

        "tg.expand() integration",

        "Telegram header customization",

        "Telegram back-button handling",

        "Telegram viewport handling",

        "Telegram initData integration",

        "Telegram-specific user experience",

        "Telegram bot launch flow"
      ]
    },

    {
      title: "Ticket-Based Gameplay",

      description:
        "Implemented frontend flows for ticket-based Tetris sessions, including wager selection, game initiation, score calculation, and result feedback.",

      items: [
        "Ticket balance display",

        "Ticket wager interface",

        "Game session initiation",

        "Game difficulty selection",

        "Level multiplier display",

        "Score calculation",

        "Win and loss states",

        "Game result feedback",

        "Ticket status updates",

        "Backend synchronization"
      ]
    },

    {
      title: "Daily Check-In & Rewards",

      description:
        "Developed the daily reward experience where users can view their streak status and interact with available daily ticket reward claims.",

      items: [
        "Daily reward modal",

        "Daily streak interface",

        "Reward calendar",

        "Claim status display",

        "Daily timestamp information",

        "Reward claim interaction",

        "Success feedback",

        "Error feedback",

        "Ticket reward updates"
      ]
    },

    {
      title: "Tasks & Social Engagement",

      description:
        "Built the task and social engagement interface where users can discover available tasks, view their status, complete supported activities, and receive rewards.",

      items: [
        "Task listing",

        "Task categories",

        "Telegram channel tasks",

        "Social engagement tasks",

        "Task status indicators",

        "Pending task state",

        "Claimed task state",

        "Task completion flow",

        "Reward accumulation",

        "Task loading states",

        "Task success feedback",

        "Task error feedback"
      ]
    },

    {
      title: "Rewarded Advertising",

      description:
        "Integrated rewarded advertising functionality into the Telegram gaming experience using Adsgram and TON AI SDK integrations.",

      items: [
        "Adsgram integration",

        "TON AI SDK integration",

        "Rewarded advertisement flow",

        "Ad completion handling",

        "Advertisement status",

        "Client-side ad timers",

        "Reward claim timing",

        "Ad-related feedback",

        "Rewarded engagement workflow"
      ]
    },

    {
      title: "AdBlocker Detection",

      description:
        "Implemented client-side ad-blocker detection to identify blocked advertising resources and provide users with appropriate feedback before accessing rewarded advertising functionality.",

      items: [
        "Ad-blocker detection",

        "blockadblock.js integration",

        "useAdBlockerDetector hook",

        "Blocked-ad detection",

        "Ad blocker warning modal",

        "Reward feature restriction",

        "User guidance feedback"
      ]
    },

    {
      title: "Referral Dashboard",

      description:
        "Developed the referral interface allowing users to generate referral links, share invitations through Telegram, and view referral-related information.",

      items: [
        "Referral link generation",

        "Telegram referral URL generation",

        "Referral link copying",

        "Clipboard integration",

        "Telegram sharing",

        "Referral history",

        "Referral earnings information",

        "Paginated referral data",

        "Referral status display"
      ]
    },

    {
      title: "Leaderboard",

      description:
        "Built leaderboard interfaces for displaying user rankings and game-related information within the Telegram gaming experience.",

      items: [
        "Leaderboard page",

        "User rankings",

        "Ranking information",

        "Game-related ranking data",

        "Responsive leaderboard UI",

        "Leaderboard API integration",

        "Loading states",

        "Leaderboard feedback"
      ]
    },

    {
      title: "Profile Management",

      description:
        "Developed user profile interfaces for displaying account information and managing user-related data within the Telegram Mini App.",

      items: [
        "User profile",

        "Profile information",

        "Account information",

        "User session information",

        "Profile interaction",

        "Profile forms",

        "Profile validation",

        "Profile feedback"
      ]
    },

    {
      title: "Cryptocurrency Withdrawal Interface",

      description:
        "Implemented the frontend withdrawal workflow allowing users to select supported assets, enter wallet addresses, preview conversions, and submit withdrawal requests.",

      items: [
        "Withdrawal modal",

        "TON asset selection",

        "SOL asset selection",

        "Wallet address input",

        "Ticket-to-USDT conversion preview",

        "Minimum withdrawal validation",

        "Maximum withdrawal validation",

        "Wallet address validation",

        "Withdrawal request flow",

        "Withdrawal status feedback",

        "Success notifications",

        "Error notifications"
      ]
    },

    {
      title: "Web3 Wallet Integration",

      description:
        "Integrated Web3 wallet functionality primarily within the administrative portal using TonConnect for non-custodial TON wallet connection and transaction signing workflows.",

      items: [
        "TonConnect UI integration",

        "TON wallet connection",

        "Connected wallet state",

        "Non-custodial wallet workflow",

        "TON transaction preparation",

        "Multi-recipient batch transfer flow",

        "Transaction signing interface",

        "Wallet connection feedback",

        "Blockchain transaction status"
      ]
    },

    {
      title: "Administrative Dashboard",

      description:
        "Developed and integrated frontend functionality for the administrative management portal used to manage platform configuration, users, withdrawals, tasks, advertisements, and operational information.",

      items: [
        "Admin dashboard",

        "Dashboard KPI cards",

        "Responsive admin tables",

        "User management",

        "Game configuration",

        "Game multiplier configuration",

        "Line-clear score configuration",

        "Withdrawal management",

        "Task management",

        "Advertisement management",

        "Platform metrics",

        "Administrative forms",

        "Status-driven workflows"
      ]
    },

    {
      title: "Excel Reporting",

      description:
        "Implemented client-side Excel export functionality in the administrative portal for operational records and platform-related data.",

      items: [
        "XLSX integration",

        "Withdrawal export",

        "Transaction history export",

        "User record export",

        "Client-side report generation",

        "Downloadable Excel files"
      ]
    },

    {
      title: "Game Audio Manager",

      description:
        "Implemented frontend audio handling for gameplay events and application feedback using native HTML5 audio functionality.",

      items: [
        "Background ambient audio",

        "Piece rotation sound",

        "Piece drop sound",

        "Countdown audio",

        "Game-over audio",

        "Gameplay audio triggers",

        "Audio event management"
      ]
    }
  ],

  apiIntegration: {
    title: "API Integration",

    description:
      "Integrated REST APIs into the React frontend using centralized Axios configuration and API helper modules. API-driven workflows support authentication, user information, ticket balances, game sessions, rewards, tasks, advertisements, referrals, leaderboard data, and withdrawal-related operations.",

    technologies: [
      "Axios",

      "REST APIs",

      "React",

      "Vite",

      "Centralized API configuration",

      "Axios interceptors",

      "Crypto-JS"
    ],

    responsibilities: [
      "Integrated frontend API requests using Axios.",

      "Connected React components with backend REST APIs.",

      "Integrated authentication APIs.",

      "Integrated user profile APIs.",

      "Integrated game configuration APIs.",

      "Integrated wager and game-session APIs.",

      "Integrated ticket balance APIs.",

      "Integrated daily reward APIs.",

      "Integrated task and engagement APIs.",

      "Integrated rewarded advertising APIs.",

      "Integrated referral APIs.",

      "Integrated leaderboard APIs.",

      "Integrated withdrawal APIs.",

      "Handled API loading states.",

      "Handled API success and failure states.",

      "Displayed backend validation messages.",

      "Provided user feedback using toast notifications."
    ]
  },

  telegramIntegration: {
    title: "Telegram Mini-App Integration",

    description:
      "The application was designed specifically for Telegram Mini Apps and integrates Telegram WebApp functionality for application entry, viewport management, authentication, navigation, and Telegram-specific user interactions.",

    technologies: [
      "Telegram WebApp SDK",

      "@twa-dev/sdk",

      "Telegram Bot API",

      "Telegram WebApp initData"
    ],

    responsibilities: [
      "Integrated Telegram WebApp functionality.",

      "Supported Telegram mobile WebView execution.",

      "Handled Telegram application initialization.",

      "Implemented Telegram viewport expansion.",

      "Integrated Telegram header behavior.",

      "Handled Telegram hardware/back-button navigation.",

      "Worked with Telegram initData authentication.",

      "Integrated Telegram-specific user flows.",

      "Supported Telegram referral links.",

      "Designed the frontend around the Telegram Mini App environment."
    ]
  },

  walletIntegration: {
    title: "Wallet Integration",

    description:
      "Implemented Web3 wallet-related functionality across the platform, with user-facing withdrawal workflows for TON and Solana and TonConnect-based non-custodial wallet connectivity in the administrative portal.",

    technologies: [
      "@tonconnect/ui-react",

      "@tonconnect/sdk",

      "TON",

      "TON Core",

      "TonWeb",

      "@solana/web3.js"
    ],

    features: [
      "TON wallet connection",

      "Non-custodial wallet interaction",

      "TON transaction signing",

      "Batch TON transaction workflow",

      "TON wallet status",

      "TON withdrawal workflow",

      "Solana withdrawal-related interface",

      "Wallet address input",

      "Wallet address validation",

      "Wallet-related feedback",

      "Crypto asset selection"
    ]
  },

  responsiveDesign: {
    title: "Responsive & Mobile-First Design",

    description:
      "The frontend was designed primarily for Telegram mobile WebViews. Responsive layouts, dynamic game scaling, mobile-focused components, and responsive administrative views were implemented to support different screen dimensions.",

    features: [
      "Mobile-first Telegram Mini App",

      "Responsive Tetris board",

      "Dynamic viewport scaling",

      "usePps responsive calculation",

      "Window resize handling",

      "Responsive game interface",

      "Responsive game modals",

      "Responsive profile interface",

      "Responsive task interface",

      "Responsive rewards interface",

      "Responsive referral interface",

      "Responsive leaderboard",

      "Responsive withdrawal interface",

      "Responsive wallet interface",

      "Responsive admin tables",

      "Responsive admin forms",

      "Mobile-friendly navigation"
    ]
  },

  uiUx: {
    title: "UI / UX Features",

    description:
      "The frontend focuses on creating an interactive arcade-style Telegram experience with responsive layouts, game-specific interfaces, modal workflows, loading states, notifications, and clear feedback for user actions.",

    features: [
      "Cyberpunk-inspired gaming experience",

      "Mobile-first interface",

      "Interactive Tetris game screen",

      "Responsive game board",

      "Game countdown interface",

      "Game-over feedback",

      "Daily reward modal",

      "Task interaction states",

      "Referral interface",

      "Leaderboard interface",

      "Withdrawal modal",

      "Wallet connection feedback",

      "Ad blocker warning modal",

      "Loading indicators",

      "Fullscreen loading states",

      "Toast notifications",

      "Success feedback",

      "Error feedback",

      "Confirmation dialogs",

      "Responsive admin dashboard"
    ]
  },

  navigation: {
    title: "Navigation & Routing",

    technology: "React Router DOM",

    description:
      "Implemented frontend navigation using React Router DOM. The user application uses route-based rendering for the Telegram Mini App experience, while the administrative application uses nested routes and lazy-loaded views.",

    areas: [
      "Home",

      "Tetris Game",

      "Profile",

      "Daily Rewards",

      "Tasks",

      "Referral",

      "Leaderboard",

      "Withdrawal",

      "Wallet-related views",

      "Game-related views",

      "Admin Dashboard",

      "Admin Users",

      "Admin Game Configuration",

      "Admin Tasks",

      "Admin Advertisements",

      "Admin Withdrawals",

      "Admin Reports"
    ]
  },

  stateManagement: {
    title: "State Management",

    technology: "React Context API",

    description:
      "Used React Context and React Hooks for shared application state across the Telegram Mini App. The state architecture manages authentication, user information, ticket balances, Telegram environment information, and session-related data.",

    responsibilities: [
      "User authentication state",

      "User profile state",

      "Ticket balance state",

      "Session state",

      "Authentication token state",

      "Telegram WebApp state",

      "Telegram viewport information",

      "User-related application state",

      "Game-related component state",

      "Modal state",

      "Loading state",

      "Application-level state sharing",

      "Component-level state management"
    ]
  },

  authentication: {
    title: "Authentication & Session Handling",

    description:
      "The frontend uses Telegram WebApp initData as part of the authentication flow. The client packages Telegram authentication information into API requests and receives a signed JWT that is persisted locally for subsequent authenticated requests.",

    technologies: [
      "Telegram WebApp initData",

      "JWT",

      "localStorage",

      "Axios",

      "Crypto-JS"
    ],

    features: [
      "Telegram-based authentication",

      "Telegram initData handling",

      "JWT session handling",

      "JWT persistence",

      "localStorage token storage",

      "Bearer token API requests",

      "Authenticated user state",

      "Protected API communication",

      "Encrypted timestamp headers",

      "Client request security handling"
    ]
  },

  uiTechnologies: {
    title: "UI Technologies",

    technologies: [
      {
        name: "Material UI",

        usage:
          "Used for responsive and reusable frontend components, form controls, dialogs, layouts, and application interface elements."
      },

      {
        name: "Tailwind CSS",

        usage:
          "Used for utility-based responsive styling and mobile-focused layout implementation."
      },

      {
        name: "Bootstrap",

        usage:
          "Used for responsive layout structures and reusable interface styling."
      },

      {
        name: "React Bootstrap",

        usage:
          "Used for Bootstrap-based React components within the administrative frontend."
      },

      {
        name: "CoreUI",

        usage:
          "Used within the administrative dashboard interface and management-oriented UI components."
      },

      {
        name: "Sass",

        usage:
          "Used for custom styling and application-specific visual requirements."
      },

      {
        name: "Framer Motion",

        usage:
          "Used for frontend animations and interactive motion effects."
      },

      {
        name: "Lucide React",

        usage:
          "Used for interface icons and visual UI elements."
      }
    ]
  },

  chartsAndVisualization: {
    title: "Charts & Visualization",

    technologies: [
      "React Circular Progressbar",

      "React-based dashboard visualization"
    ],

    note:
      "The project documentation identifies React Circular Progressbar as part of the frontend technology stack. Chart.js and D3 are listed as administrative dependencies but are documented as boilerplate artifacts rather than confirmed implemented views."
  },

  formsAndValidation: {
    title: "Forms & User Interaction",

    technologies: [
      "Formik",

      "Yup",

      "Material UI form controls",

      "React controlled components"
    ],

    features: [
      "Profile forms",

      "Withdrawal forms",

      "Wallet address input",

      "Administrative forms",

      "Game configuration forms",

      "Task configuration forms",

      "User input handling",

      "Client-side validation",

      "Form state management",

      "Validation feedback",

      "Success and error states"
    ]
  },

  notifications: {
    title: "Notifications & Feedback",

    technologies: [
      "React Hot Toast",

      "React Toastify"
    ],

    features: [
      "Authentication feedback",

      "Game result feedback",

      "Daily reward feedback",

      "Task completion notifications",

      "Advertisement feedback",

      "Referral feedback",

      "Wallet connection feedback",

      "Withdrawal feedback",

      "Form validation feedback",

      "Success notifications",

      "Error notifications",

      "API validation messages",

      "Application status feedback"
    ]
  },

  userExperience: {
    title: "User Experience",

    description:
      "The frontend focuses on delivering a mobile-first Telegram gaming experience by combining classic Tetris gameplay with ticket-based sessions, rewards, tasks, advertisements, referrals, leaderboards, profile management, and Web3 withdrawal-related workflows.",

    highlights: [
      "Telegram-first user experience",

      "Mobile-focused Tetris gameplay",

      "Interactive custom Tetris engine",

      "Responsive game board",

      "Ticket-based game participation",

      "Progressive game difficulty",

      "Daily reward experience",

      "Task and social engagement",

      "Rewarded advertising",

      "Referral experience",

      "Leaderboard experience",

      "Profile management",

      "Cryptocurrency withdrawal interface",

      "TON wallet-related workflows",

      "Solana wallet-related workflows",

      "Admin management experience",

      "Toast-based feedback",

      "Loading states",

      "Interactive modals",

      "Responsive layouts"
    ]
  },

  challenges: [
    {
      title: "Telegram Mini-App Environment",

      description:
        "Building the frontend specifically for Telegram Mini Apps required adapting the application to Telegram WebView behavior, viewport handling, mobile constraints, Telegram navigation, and Telegram-specific authentication data."
    },

    {
      title: "Custom Tetris Game Logic",

      description:
        "Implementing a complete Tetris experience required handling board matrices, seven tetromino types, rotation, movement, collision detection, line clearing, gravity, scoring, progressive difficulty, and game-over states within the React application."
    },

    {
      title: "Responsive Game Scaling",

      description:
        "Maintaining consistent Tetris board proportions across different mobile screen sizes required dynamic viewport calculations and responsive game scaling using the usePps approach."
    },

    {
      title: "Complex Gaming Workflow",

      description:
        "The frontend connects multiple user journeys including ticket wagering, game sessions, scoring, rewards, tasks, advertisements, referrals, leaderboards, and withdrawals, requiring organized state handling and reusable components."
    },

    {
      title: "API-Driven Game State",

      description:
        "The game and reward platform depends on backend APIs for balances, game sessions, rewards, tasks, advertisements, referrals, leaderboard information, and withdrawals, requiring clear loading, success, failure, and synchronization states."
    },

    {
      title: "Web3 User Experience",

      description:
        "Integrating cryptocurrency-related functionality required presenting wallet addresses, asset selections, conversion information, withdrawal limits, and transaction-related states in a user-friendly Telegram interface."
    },

    {
      title: "Rewarded Advertising",

      description:
        "Integrating rewarded advertisements while managing ad completion states, client-side timers, and ad-blocker detection required additional frontend control around reward-related user interactions."
    },

    {
      title: "Administrative Dashboard",

      description:
        "The project includes a separate administrative frontend with management tables, configuration forms, withdrawal workflows, reporting, and wallet-related transaction interfaces, requiring a different UI structure from the mobile Telegram client."
    }
  ],

  learning: [
    "React application development",

    "Vite frontend development",

    "JavaScript and JSX",

    "React component architecture",

    "React Hooks",

    "React Context state management",

    "React Router DOM",

    "Custom game-engine development",

    "Tetris board and matrix logic",

    "Tetromino rotation algorithms",

    "Collision detection",

    "Line-clearing algorithms",

    "Dynamic game difficulty",

    "Responsive game scaling",

    "Telegram WebApp development",

    "Telegram Mini App integration",

    "Telegram initData authentication",

    "JWT session handling",

    "Axios REST API integration",

    "Centralized API communication",

    "Crypto-JS request security",

    "Mobile-first frontend development",

    "Material UI",

    "Tailwind CSS",

    "Bootstrap",

    "React Bootstrap",

    "Sass",

    "Framer Motion",

    "TON wallet integration",

    "TonConnect integration",

    "Solana wallet-related frontend integration",

    "Rewarded advertising SDK integration",

    "Ad-blocker detection",

    "Daily reward workflows",

    "Task and engagement workflows",

    "Referral interfaces",

    "Leaderboard development",

    "Cryptocurrency withdrawal interfaces",

    "Administrative dashboard development",

    "Excel reporting with XLSX",

    "Frontend notifications and feedback"
  ],

  frontendTechnologyStack: {
    framework: [
      "React",

      "Vite"
    ],

    language: [
      "JavaScript",

      "JSX"
    ],

    routing: [
      "React Router DOM v7",

      "React Router DOM v6 for Admin"
    ],

    stateManagement: [
      "React Context API",

      "React Hooks",

      "useState",

      "useReducer",

      "useContext",

      "useRef",

      "useCallback",

      "useMemo"
    ],

    apiCommunication: [
      "Axios",

      "REST APIs",

      "Centralized API configuration",

      "Axios interceptors"
    ],

    telegram: [
      "Telegram WebApp SDK",

      "@twa-dev/sdk",

      "Telegram Bot Integration",

      "Telegram initData"
    ],

    ui: [
      "Material UI",

      "Tailwind CSS",

      "Bootstrap",

      "React Bootstrap",

      "CoreUI",

      "Sass",

      "Emotion"
    ],

    wallet: [
      "@tonconnect/ui-react",

      "@tonconnect/sdk",

      "TON",

      "TON Core",

      "TonWeb",

      "@solana/web3.js"
    ],

    game: [
      "Custom React Tetris Engine",

      "Tetromino Matrix Logic",

      "Collision Detection",

      "Line-Clear Logic",

      "Dynamic Gravity",

      "Responsive Game Scaling",

      "HTML5 Audio"
    ],

    advertising: [
      "Adsgram",

      "TON AI SDK",

      "AdBlock Detection"
    ],

    forms: [
      "Formik",

      "Yup"
    ],

    notifications: [
      "React Hot Toast",

      "React Toastify"
    ],

    analytics: [
      "React GA",

      "Google Analytics"
    ],

    utilities: [
      "XLSX",

      "Lucide React",

      "React Icons",

      "Crypto-JS"
    ]
  },

  projectHighlights: [
    "Telegram-integrated Web3 gaming platform",

    "React and Vite frontend",

    "Mobile-first Telegram Mini App",

    "Custom Tetris game engine",

    "Seven standard Tetris tetrominoes",

    "Tetromino rotation logic",

    "Collision detection",

    "Line-clearing logic",

    "Dynamic gravity and difficulty",

    "Responsive game scaling",

    "usePps viewport scaling",

    "Game audio management",

    "Ticket-based gameplay",

    "Daily streak rewards",

    "Task and social engagement system",

    "Rewarded advertisements",

    "Adsgram integration",

    "TON AI SDK integration",

    "Ad-blocker detection",

    "Referral dashboard",

    "Leaderboard interface",

    "User profile management",

    "Cryptocurrency withdrawal interface",

    "TON wallet integration",

    "Solana wallet-related functionality",

    "TonConnect administrative transaction flow",

    "React Context state management",

    "Axios REST API integration",

    "Telegram WebApp authentication",

    "JWT session handling",

    "Responsive Material UI and Tailwind interfaces",

    "Administrative management dashboard",

    "Excel reporting",

    "Toast notifications",

    "Reusable React components"
  ],

  portfolioDescription:
    "Developed a Telegram-first Web3 gaming frontend using React and Vite, providing a mobile-first Tetris experience with a custom game engine, responsive viewport scaling, ticket-based gameplay, daily rewards, tasks, rewarded advertisements, referrals, leaderboards, profile management, and cryptocurrency withdrawal workflows. Integrated Telegram WebApp functionality, Axios-based REST APIs, React Context for shared state, JWT session handling, Material UI, Tailwind CSS, Bootstrap, Adsgram, TON AI SDK, and TON/Solana wallet-related functionality. Also contributed to the administrative frontend supporting game configuration, withdrawal management, reporting, and TonConnect-based transaction workflows.",

  resumeDescription:
    "Developed a Telegram Mini App frontend using React and Vite for a Web3 Play-to-Earn Tetris platform, implementing a custom Tetris engine with responsive scaling, collision detection, line clearing, dynamic difficulty, and audio feedback. Integrated Telegram WebApp authentication, Axios REST APIs, React Context state management, ticket-based gameplay, daily rewards, tasks, rewarded ads, referrals, leaderboards, and cryptocurrency withdrawal interfaces with TON and Solana wallet-related workflows.",

  resumeBulletPoints: [
    "Developed a mobile-first Telegram Mini App using React and Vite featuring a custom Tetris game engine with tetromino rotation, collision detection, line clearing, dynamic difficulty, and audio feedback.",

    "Implemented responsive Tetris gameplay using dynamic viewport scaling to maintain consistent game-board proportions across Telegram mobile WebViews.",

    "Integrated Telegram WebApp SDK functionality including viewport expansion, back-button handling, Telegram initData authentication, and Telegram-specific application flows.",

    "Built ticket-based gameplay, daily reward, task, referral, leaderboard, profile, and cryptocurrency withdrawal interfaces using reusable React components.",

    "Integrated REST APIs using Axios and managed shared authentication, user, ticket, session, and Telegram states using React Context API.",

    "Integrated rewarded advertising through Adsgram and TON AI SDK with client-side ad-blocker detection and reward interaction workflows.",

    "Implemented TON and Solana wallet-related frontend workflows, including wallet address handling, withdrawal interfaces, and TonConnect-based administrative transaction signing.",

    "Contributed to the administrative frontend with responsive management tables, game configuration interfaces, withdrawal workflows, and XLSX-based data exports.",

    "Built responsive and interactive interfaces using Material UI, Tailwind CSS, Bootstrap, React Bootstrap, Sass, and Framer Motion.",

    "Implemented loading states, validation feedback, success/error notifications, and reusable modal-based user interactions across the platform."
  ],

  links: {
    telegramName: "@stringtetris_bot",

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

export default stringTetrisProject;

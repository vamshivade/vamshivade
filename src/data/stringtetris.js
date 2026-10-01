import stringTetrisSquare from '../assets/String Tetris Square.webp';
import stringTetrisLandscape from '../assets/String Tetris Landscape.webp';

const stringTetrisProject = {
  id: "string-tetris",

  title: "String Tetris",

  subtitle:
    "Full-Stack Web3 Play-to-Earn Telegram Mini App & Gaming Platform",

  category: "Full Stack Development",

  role: "Full Stack MERN Developer",

  description:
    "A full-stack Web3 Play-to-Earn gaming ecosystem built as a Telegram Mini App, combining a custom React-based Tetris game engine with ticket wagering, daily rewards, engagement tasks, rewarded advertisements, referrals, cryptocurrency withdrawals, an administrative dashboard, and a Node.js, Express, and MongoDB backend.",

  shortDescription:
    "A full-stack Telegram Mini App built with React, Node.js, Express, and MongoDB featuring custom Tetris gameplay, ticket wagering, rewards, referrals, Web3 withdrawals, Telegram authentication, and an admin management portal.",

  image: stringTetrisSquare,

  coverImage: stringTetrisLandscape,

  technologies: [
    "React",
    "Vite",
    "JavaScript",
    "JSX",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "React Context API",
    "React Hooks",
    "React Router DOM",
    "Axios",
    "Material UI",
    "Tailwind CSS",
    "Bootstrap",
    "React Bootstrap",
    "Sass",
    "Framer Motion",
    "Telegram WebApp SDK",
    "Telegram Bot API",
    "JWT",
    "Crypto-JS",
    "HMAC-SHA256",
    "TonConnect UI",
    "TonWeb",
    "TON Core",
    "Solana Web3.js",
    "TonAPI",
    "DexScreener",
    "Solscan",
    "Adsgram",
    "TON AI SDK",
    "Formik",
    "Yup",
    "Node Cron",
    "Nodemailer",
    "Bcrypt",
    "SheetJS",
    "Google Analytics",
    "React Hot Toast",
    "React Toastify"
  ],

  projectType: "Full-Stack Telegram Mini Application",

  developmentType: "Full-Stack MERN / Web3 Application",

  overview: {
    title: "Project Overview",

    content:
      "String Tetris is a full-stack Web3 Play-to-Earn gaming ecosystem developed specifically as a Telegram Mini App. The platform combines classic Tetris gameplay with ticket-based wagering, configurable difficulty levels, daily rewards, engagement tasks, rewarded advertisements, referrals, leaderboards, and cryptocurrency withdrawal workflows. Users access the application through Telegram, authenticate through Telegram WebApp data, play Tetris sessions using virtual tickets, earn rewards, and can request cryptocurrency withdrawals through TON or Solana wallet addresses. The overall system consists of a mobile-first React user application, a React-based administrative dashboard, and a centralized Node.js/Express REST API backed by MongoDB and Mongoose."
  },

  myRole: {
    title: "My Role",

    position: "Full Stack MERN Developer",

    description:
      "My role covered both frontend and backend development. I worked on the React Telegram Mini App, custom Tetris game experience, responsive UI, API integration, authentication flows, user and reward workflows, and administrative interfaces. On the backend, I worked with Node.js, Express, MongoDB, and Mongoose to implement REST APIs, authentication middleware, game session handling, ticket wagering, rewards, referrals, tasks, withdrawal validation, price conversion integrations, Telegram bot functionality, background jobs, and administrative operations."
  },

  frontend: {
    title: "Frontend Development",

    description:
      "The frontend was developed using React and Vite and consists of two applications: a mobile-first Telegram Mini App for players and an administrative management portal. The player application provides the complete Tetris gaming experience, while the admin application provides management, configuration, reporting, withdrawal, and operational workflows.",

    architecture: [
      "React component-based architecture",
      "Vite-based frontend application",
      "Mobile-first Telegram Mini App",
      "Separate administrative React application",
      "Reusable functional components",
      "React Context API for shared state",
      "React Hooks for component and game state",
      "React Router DOM routing",
      "Centralized Axios API configuration",
      "Reusable game components",
      "Reusable modal components",
      "Reusable loading components",
      "Responsive MUI and Tailwind interfaces",
      "Bootstrap-based administrative layouts",
      "Game-specific component architecture",
      "Loading and error state handling",
      "Toast-based user feedback"
    ]
  },

  backend: {
    title: "Backend Development",

    description:
      "The backend was developed using Node.js and Express.js as a centralized REST API responsible for authentication, game mechanics, user progression, ticket wagering, rewards, referrals, tasks, advertisements, withdrawals, price conversion, administrative operations, Telegram integration, and background session management.",

    architecture: [
      "Node.js backend runtime",
      "Express.js REST API",
      "MVC-style backend organization",
      "Domain-specific controllers",
      "Express middleware pipeline",
      "MongoDB database",
      "Mongoose data models",
      "JWT authentication",
      "Telegram HMAC authentication",
      "Role-based authorization",
      "Centralized route configuration",
      "Background cron jobs",
      "Telegram bot integration",
      "External API integrations",
      "Blockchain address validation",
      "Administrative API operations",
      "Atomic MongoDB updates"
    ]
  },

  database: {
    title: "MongoDB Database Architecture",

    description:
      "MongoDB was used as the primary database with Mongoose providing schema definitions, relationships, validation, querying, and atomic database operations. The backend contains dedicated models for users, game sessions, game history, tasks, completed tasks, advertisements, rewards, referrals, transactions, withdrawals, conversion settings, and administrative configuration.",

    technologies: [
      "MongoDB",
      "Mongoose"
    ],

    models: [
      "User",
      "GameHistory",
      "GameSchema",
      "Task",
      "CompletedTask",
      "AdsSchema",
      "CompleteAdSchema",
      "DailyRewardSchema",
      "ClaimHistory",
      "Referer",
      "ReferralSetting",
      "RewardSetting",
      "TicketConversion",
      "TransactionSchema",
      "WithdrawalLimitsSchema",
      "WithdrawalSchema",
      "WithdrawMethodSchema"
    ],

    responsibilities: [
      "Designed MongoDB data structures for users and game sessions.",
      "Stored game history and wager information.",
      "Managed user ticket balances and reward information.",
      "Stored daily reward claim records.",
      "Tracked completed engagement tasks.",
      "Maintained referral relationships and rewards.",
      "Stored withdrawal requests and transaction information.",
      "Managed configurable game and reward settings.",
      "Used atomic MongoDB updates for balance-related operations.",
      "Used Mongoose population and projections where required."
    ]
  },

  features: [
    {
      title: "Telegram Mini App",

      description:
        "Built the primary player application specifically for the Telegram WebApp environment, allowing users to launch and interact with the game directly inside Telegram.",

      items: [
        "Telegram Mini App entry",
        "Telegram WebApp SDK integration",
        "Telegram mobile WebView support",
        "Telegram viewport expansion",
        "Telegram header configuration",
        "Telegram back-button handling",
        "Telegram platform validation",
        "Telegram user initialization",
        "Telegram-specific navigation",
        "Mobile-first gaming experience"
      ]
    },

    {
      title: "Custom Tetris Game Engine",

      description:
        "Developed the core Tetris gameplay experience in React with custom game logic for tetromino movement, rotation, collision detection, line clearing, scoring, difficulty progression, and game session management.",

      items: [
        "Classic Tetris board",
        "Seven standard tetrominoes",
        "I piece",
        "J piece",
        "L piece",
        "O piece",
        "S piece",
        "T piece",
        "Z piece",
        "Tetromino rotation logic",
        "Piece movement",
        "Boundary detection",
        "Collision detection",
        "Line-clear detection",
        "Score calculation",
        "Progressive difficulty",
        "Dynamic gravity speed",
        "Game-over handling",
        "Particle effects",
        "Confetti effects",
        "Game audio feedback"
      ]
    },

    {
      title: "Responsive Game Scaling",

      description:
        "Implemented dynamic viewport scaling using the project's `usePps` logic so the Tetris game board maintains appropriate proportions across different Telegram mobile screen sizes.",

      items: [
        "Dynamic viewport calculations",
        "Responsive game board",
        "Mobile screen adaptation",
        "Window resize handling",
        "Consistent game proportions",
        "Mobile-first gameplay layout"
      ]
    },

    {
      title: "Game Audio System",

      description:
        "Implemented audio feedback for important gameplay interactions and game states using browser audio capabilities.",

      items: [
        "Background ambient audio",
        "Piece rotation sounds",
        "Piece drop sounds",
        "Countdown sounds",
        "Game-over audio",
        "Gameplay feedback sounds"
      ]
    },

    {
      title: "Ticket Wagering & Game Sessions",

      description:
        "Implemented the frontend and backend workflow for ticket-based Tetris sessions, including wager placement, game session creation, score submission, result reconciliation, and win/loss settlement.",

      items: [
        "Ticket balance display",
        "Wager selection",
        "Game entry modal",
        "Game session creation",
        "Game session tracking",
        "Score submission",
        "Win/loss processing",
        "Ticket settlement",
        "Game history",
        "Server-side score validation",
        "Session status handling"
      ]
    },

    {
      title: "Game Difficulty & Multipliers",

      description:
        "Implemented configurable gameplay difficulty and level multipliers that affect the relationship between game performance, cleared lines, and ticket rewards.",

      items: [
        "Difficulty configuration",
        "Level multipliers",
        "Line-clear scoring",
        "Progressive difficulty",
        "Score calculation",
        "Backend-configured game settings",
        "Admin-controlled game parameters"
      ]
    },

    {
      title: "Daily Rewards & Streaks",

      description:
        "Built the daily check-in and streak reward workflow allowing users to claim configured ticket rewards based on their daily participation.",

      items: [
        "Daily reward calendar",
        "Daily claim flow",
        "Streak tracking",
        "Claim timestamps",
        "Reward status",
        "Reward crediting",
        "Claim history",
        "Daily cooldown handling"
      ]
    },

    {
      title: "Tasks & Social Engagement",

      description:
        "Implemented a task and engagement system where users can complete configured activities and receive ticket rewards after successful task verification.",

      items: [
        "Task listing",
        "Telegram channel tasks",
        "Social engagement tasks",
        "Task status",
        "Claim flow",
        "Completed task tracking",
        "Duplicate claim prevention",
        "Reward accumulation",
        "Task validation",
        "Task feedback"
      ]
    },

    {
      title: "Rewarded Advertising",

      description:
        "Integrated rewarded advertisement networks into the gaming experience and implemented frontend and backend controls to prevent excessive reward claims.",

      items: [
        "Adsgram integration",
        "TON AI SDK integration",
        "Rewarded advertisements",
        "Advertisement completion flow",
        "Ad countdown handling",
        "Daily advertisement limits",
        "Ad reward cooldown",
        "Ad completion tracking",
        "Reward abuse prevention"
      ]
    },

    {
      title: "AdBlocker Detection",

      description:
        "Implemented client-side ad-blocker detection to identify environments that prevent rewarded advertisement functionality and provide appropriate user feedback.",

      items: [
        "AdBlocker detection",
        "Script-based detection",
        "AdBlocker popup",
        "Rewarded feature restriction",
        "User feedback"
      ]
    },

    {
      title: "Referral System",

      description:
        "Developed referral functionality allowing users to invite other Telegram users and participate in referral-based reward mechanisms.",

      items: [
        "Referral link generation",
        "Telegram referral URLs",
        "Referral tracking",
        "Referrer association",
        "Signup bonuses",
        "Referral commissions",
        "Referral history",
        "Referral earnings",
        "Telegram sharing flow"
      ]
    },

    {
      title: "Leaderboard",

      description:
        "Implemented leaderboard interfaces for displaying user rankings and game-related performance information.",

      items: [
        "Leaderboard screen",
        "User rankings",
        "Game performance data",
        "Ranking information",
        "API-driven leaderboard data",
        "Responsive leaderboard UI"
      ]
    },

    {
      title: "User Profile",

      description:
        "Developed user profile and account-related functionality for displaying player information, balances, activity, and account-related data.",

      items: [
        "User profile",
        "Telegram user information",
        "Ticket balance",
        "Game information",
        "Reward information",
        "Referral information",
        "User activity",
        "Account-related states"
      ]
    },

    {
      title: "Cryptocurrency Withdrawal",

      description:
        "Implemented cryptocurrency withdrawal workflows supporting TON and Solana destination addresses, ticket-to-crypto conversion, withdrawal limits, and administrative settlement.",

      items: [
        "Withdrawal interface",
        "TON withdrawal option",
        "Solana withdrawal option",
        "Wallet address input",
        "TON address validation",
        "Solana address validation",
        "Ticket-to-USDT conversion",
        "Minimum withdrawal limits",
        "Maximum withdrawal limits",
        "Daily withdrawal quotas",
        "Platform fee calculation",
        "Withdrawal request tracking",
        "Withdrawal approval workflow"
      ]
    },

    {
      title: "TON & Solana Web3 Integration",

      description:
        "Integrated Web3 libraries and services for wallet address validation, price conversion, transaction information, and TON transaction signing workflows.",

      items: [
        "TON wallet integration",
        "TonConnect UI",
        "TonWeb address validation",
        "TON Core",
        "Solana Web3.js",
        "Solana public key validation",
        "TON transaction workflows",
        "Batch TON payout signing",
        "Blockchain transaction lookup"
      ]
    },

    {
      title: "Admin Dashboard",

      description:
        "Developed and integrated an administrative management portal for platform operators to manage users, game configuration, tasks, advertisements, withdrawals, conversion settings, and platform operations.",

      items: [
        "Admin dashboard",
        "Dashboard KPI information",
        "User management",
        "Game configuration",
        "Tetris level configuration",
        "Line-clear score configuration",
        "Ticket conversion configuration",
        "Task management",
        "Advertisement management",
        "Withdrawal management",
        "Transaction history",
        "Platform settings",
        "Telegram broadcast functionality"
      ]
    },

    {
      title: "Admin Withdrawal Management",

      description:
        "Implemented administrative workflows for reviewing and processing user withdrawal requests and initiating blockchain payout transactions through connected non-custodial wallets.",

      items: [
        "Withdrawal request listing",
        "Withdrawal status",
        "Withdrawal approval",
        "Withdrawal rejection",
        "Wallet information",
        "Transaction information",
        "Batch payout workflow",
        "TonConnect wallet connection",
        "TON transaction signing"
      ]
    },

    {
      title: "Excel Reporting",

      description:
        "Implemented client-side Excel export functionality within the administrative portal for operational reporting and data analysis.",

      items: [
        "Withdrawal exports",
        "Transaction exports",
        "User record exports",
        "XLSX generation",
        "Administrative reporting"
      ]
    }
  ],

  apiIntegration: {
    title: "REST API Integration",

    description:
      "Built the complete frontend-to-backend communication layer using Axios and REST APIs. The React applications communicate with the Express backend for authentication, game sessions, users, rewards, tasks, referrals, advertisements, withdrawals, configuration, and administrative operations.",

    technologies: [
      "Axios",
      "REST APIs",
      "Express.js",
      "React",
      "MongoDB",
      "Mongoose",
      "Crypto-JS",
      "JWT"
    ],

    responsibilities: [
      "Created and consumed REST API workflows.",
      "Integrated authentication APIs.",
      "Integrated user profile APIs.",
      "Integrated game session APIs.",
      "Integrated wager APIs.",
      "Integrated score submission APIs.",
      "Integrated daily reward APIs.",
      "Integrated task APIs.",
      "Integrated advertisement APIs.",
      "Integrated referral APIs.",
      "Integrated leaderboard APIs.",
      "Integrated withdrawal APIs.",
      "Integrated administrative APIs.",
      "Handled API loading states.",
      "Handled API validation errors.",
      "Handled success and failure responses.",
      "Added authentication headers to requests.",
      "Implemented centralized Axios configuration."
    ]
  },

  telegramIntegration: {
    title: "Telegram Mini-App & Bot Integration",

    description:
      "The application was deeply integrated with the Telegram ecosystem. The player frontend runs as a Telegram Mini App while the backend validates Telegram authentication data and communicates with users through a Telegram bot.",

    technologies: [
      "Telegram WebApp SDK",
      "@twa-dev/sdk",
      "Telegram Bot API",
      "node-telegram-bot-api"
    ],

    responsibilities: [
      "Integrated Telegram WebApp initialization.",
      "Handled Telegram WebView environment.",
      "Implemented Telegram viewport expansion.",
      "Handled Telegram back-button behavior.",
      "Validated Telegram platform access.",
      "Processed Telegram WebApp initData.",
      "Implemented Telegram authentication verification.",
      "Generated Telegram Mini App launch flows.",
      "Integrated Telegram bot `/start` handling.",
      "Implemented Telegram broadcast messaging.",
      "Managed Telegram chat IDs.",
      "Integrated Telegram-specific user flows."
    ]
  },

  walletIntegration: {
    title: "Web3 & Wallet Integration",

    description:
      "Implemented Web3 functionality across the application using TON and Solana libraries. The system validates user wallet addresses, calculates crypto conversion values, retrieves blockchain transaction information, and allows administrators to sign TON batch payout transactions using connected non-custodial wallets.",

    technologies: [
      "@tonconnect/ui-react",
      "@tonconnect/sdk",
      "TonWeb",
      "@ton/core",
      "@solana/web3.js",
      "TweetNaCl",
      "TonAPI",
      "DexScreener",
      "Solscan"
    ],

    features: [
      "TON wallet connection",
      "Non-custodial wallet workflow",
      "TON wallet address validation",
      "Solana public key validation",
      "TON batch transaction signing",
      "TON price lookup",
      "Solana token price lookup",
      "Ticket-to-crypto conversion",
      "Transaction verification",
      "Blockchain transaction lookup",
      "Administrative payout workflow"
    ]
  },

  authentication: {
    title: "Authentication & Authorization",

    description:
      "Implemented a multi-layer authentication and authorization architecture combining Telegram WebApp HMAC verification, JWT sessions, AES-encrypted request timestamps, and role-based access control.",

    technologies: [
      "Telegram WebApp initData",
      "HMAC-SHA256",
      "JWT",
      "Crypto-JS",
      "Node Crypto",
      "Bcrypt",
      "Express Middleware"
    ],

    features: [
      "Telegram WebApp authentication",
      "HMAC-SHA256 signature verification",
      "Telegram Bot Token validation",
      "JWT token generation",
      "JWT token validation",
      "JWT session persistence",
      "AES-encrypted client timestamps",
      "Replay attack prevention",
      "5-second client timestamp validation",
      "Admin authentication",
      "Admin password verification",
      "Role-based authorization",
      "Admin/SubAdmin/User role handling",
      "Protected API routes"
    ]
  },

  security: {
    title: "Application Security",

    description:
      "Implemented multiple security layers across the frontend and backend to protect authentication, API requests, game sessions, reward claims, and administrative functionality.",

    technologies: [
      "HMAC-SHA256",
      "AES Encryption",
      "JWT",
      "Bcrypt",
      "Crypto-JS",
      "CORS",
      "Express Middleware"
    ],

    features: [
      "Telegram signature verification",
      "HMAC-SHA256 authentication",
      "AES-encrypted request timestamps",
      "Replay attack prevention",
      "JWT authentication",
      "Role-based authorization",
      "Password hashing",
      "User-Agent filtering",
      "CORS configuration",
      "Wallet address validation",
      "Server-side score caps",
      "Duplicate task claim prevention",
      "Advertisement reward rate limiting",
      "Withdrawal quota validation"
    ]
  },

  gameEngine: {
    title: "Custom Tetris Game Engine",

    technology: "React + JavaScript",

    description:
      "Developed the Tetris gameplay engine as a custom React-based implementation rather than relying on an external game engine. The implementation manages board state, tetromino vectors, movement, rotation, collision detection, line clearing, gravity, scoring, and gameplay lifecycle.",

    components: [
      "Game board matrix",
      "Tetromino definitions",
      "Piece rotation matrices",
      "Piece movement logic",
      "Collision detection",
      "Boundary detection",
      "Line-clear algorithm",
      "Gravity loop",
      "Dynamic drop speed",
      "Score calculation",
      "Level progression",
      "Game-over detection",
      "Particle effects",
      "Confetti effects",
      "Audio manager",
      "Game session synchronization"
    ]
  },

  stateManagement: {
    title: "State Management",

    technology: "React Context API + React Hooks",

    description:
      "Used React Context API and React Hooks to maintain shared application state across the player application, while local component state and reducer-based state were used for specific UI and administrative requirements.",

    responsibilities: [
      "User authentication state",
      "JWT token state",
      "User profile state",
      "Ticket balance state",
      "Telegram environment state",
      "Game state",
      "Game session state",
      "Reward state",
      "Task state",
      "Referral state",
      "Wallet state",
      "Admin configuration state",
      "Component-level UI state"
    ]
  },

  navigation: {
    title: "Navigation & Routing",

    technology: "React Router DOM",

    description:
      "Implemented route-based navigation across the player Telegram Mini App and administrative application. The user application uses React Router for player-facing views, while the admin application uses nested routes and lazy-loaded views.",

    areas: [
      "Home",
      "Tetris game",
      "Rewards",
      "Tasks",
      "Referrals",
      "Leaderboard",
      "Profile",
      "Wallet",
      "Withdrawals",
      "Game history",
      "Admin dashboard",
      "Users",
      "Game configuration",
      "Tasks management",
      "Advertisements",
      "Withdrawals",
      "Transactions",
      "Platform settings"
    ]
  },

  uiTechnologies: {
    title: "UI Technologies",

    technologies: [
      {
        name: "Material UI",

        usage:
          "Used for responsive player interfaces, form controls, dialogs, cards, and reusable UI components."
      },

      {
        name: "Tailwind CSS",

        usage:
          "Used for utility-based responsive styling and mobile-focused interface development."
      },

      {
        name: "Bootstrap",

        usage:
          "Used for responsive layout structures and administrative interface styling."
      },

      {
        name: "React Bootstrap",

        usage:
          "Used for reusable Bootstrap-based React components within the administrative application."
      },

      {
        name: "Sass",

        usage:
          "Used for custom styling and application-specific visual requirements."
      },

      {
        name: "Framer Motion",

        usage:
          "Used for interface animations and motion effects."
      },

      {
        name: "Lucide React",

        usage:
          "Used for interface icons and visual controls."
      }
    ]
  },

  chartsAndVisualization: {
    title: "Charts & Visualization",

    technologies: [
      "React Circular Progressbar"
    ],

    note:
      "The project dependencies also contain charting libraries, but the project review identifies React Circular Progressbar as the implemented visualization dependency and notes that Chart.js, D3, and Google Charts entries are boilerplate rather than confirmed implemented views."
  },

  formsAndValidation: {
    title: "Forms & Validation",

    technologies: [
      "Formik",
      "Yup",
      "Material UI Form Controls",
      "Custom JavaScript Validation",
      "Mongoose Validation"
    ],

    features: [
      "Administrative profile forms",
      "Configuration forms",
      "Withdrawal forms",
      "Wallet address validation",
      "TON address validation",
      "Solana address validation",
      "Minimum withdrawal validation",
      "Maximum withdrawal validation",
      "Game configuration validation",
      "Client-side form handling",
      "Backend parameter validation"
    ]
  },

  notifications: {
    title: "Notifications & Feedback",

    technologies: [
      "React Hot Toast",
      "React Toastify",
      "Telegram Bot API",
      "Nodemailer"
    ],

    features: [
      "Login feedback",
      "Game result feedback",
      "Reward notifications",
      "Task completion notifications",
      "Withdrawal status feedback",
      "Wallet connection feedback",
      "Validation errors",
      "API errors",
      "Admin notifications",
      "Telegram broadcast messages",
      "Password recovery OTP emails"
    ]
  },

  telegramBot: {
    title: "Telegram Bot Backend",

    description:
      "Implemented backend Telegram bot functionality using node-telegram-bot-api for Mini App onboarding and administrative communication workflows.",

    technologies: [
      "node-telegram-bot-api",
      "Telegram Bot API",
      "Axios"
    ],

    features: [
      "Bot polling",
      "/start command handling",
      "Mini App launch interaction",
      "Telegram chat ID management",
      "User onboarding",
      "Broadcast messaging",
      "Administrative announcements"
    ]
  },

  backgroundJobs: {
    title: "Background Jobs",

    technology: "node-cron",

    description:
      "Implemented scheduled backend processing to identify and expire abandoned game sessions, helping maintain consistent gameplay session state.",

    features: [
      "Scheduled session cleanup",
      "One-minute cron execution",
      "Detection of stale game sessions",
      "Three-minute session expiration threshold",
      "Automatic PENDING to EXPIRED transition",
      "Game session data integrity"
    ]
  },

  externalApis: {
    title: "External API Integrations",

    technologies: [
      "Telegram Bot API",
      "TonAPI",
      "DexScreener API",
      "Solscan API"
    ],

    integrations: [
      {
        name: "TonAPI",

        usage:
          "Used for TON and USDT price information required for cryptocurrency conversion calculations."
      },

      {
        name: "DexScreener",

        usage:
          "Used to retrieve Solana token market price information for conversion calculations."
      },

      {
        name: "Solscan",

        usage:
          "Used to retrieve blockchain transaction information and verify processed transaction details."
      },

      {
        name: "Telegram Bot API",

        usage:
          "Used for Telegram bot communication, Mini App onboarding, and administrative broadcast messaging."
      }
    ]
  },

  adminDashboard: {
    title: "Administrative Dashboard",

    description:
      "Developed the administrative side of the platform to provide operational control over users, game configuration, rewards, advertisements, tasks, withdrawals, conversion settings, transactions, and Telegram communication.",

    modules: [
      "Dashboard",
      "User Management",
      "Game Management",
      "Tetris Configuration",
      "Level Multipliers",
      "Line-Clear Scores",
      "Task Management",
      "Advertisement Management",
      "Withdrawal Management",
      "Transaction Management",
      "Ticket Conversion",
      "Reward Settings",
      "Referral Settings",
      "Withdrawal Limits",
      "Telegram Broadcast",
      "Administrative Profile",
      "Excel Reporting"
    ]
  },

  responsiveDesign: {
    title: "Responsive & Mobile-First Design",

    description:
      "The player application was designed primarily for mobile Telegram WebViews, while the administrative portal provides responsive layouts for operational management.",

    features: [
      "Mobile-first Telegram interface",
      "Responsive Tetris board",
      "Dynamic game viewport scaling",
      "Responsive game controls",
      "Responsive modals",
      "Responsive reward interfaces",
      "Responsive task interfaces",
      "Responsive profile",
      "Responsive withdrawal interface",
      "Responsive leaderboard",
      "Responsive admin tables",
      "Responsive admin forms",
      "Mobile Telegram WebView optimization"
    ]
  },

  uiUx: {
    title: "UI / UX Features",

    description:
      "The UI combines an arcade gaming experience for players with a structured management experience for administrators.",

    features: [
      "Cyberpunk-inspired gaming interface",
      "Mobile-first game experience",
      "Interactive Tetris board",
      "Game animations",
      "Particle effects",
      "Confetti effects",
      "Loading indicators",
      "Toast notifications",
      "Confirmation modals",
      "Reward modals",
      "Withdrawal modals",
      "Task cards",
      "Leaderboard views",
      "Responsive tables",
      "Admin management cards",
      "Clear success and error feedback"
    ]
  },

  challenges: [
    {
      title: "Building a Custom Tetris Engine",

      description:
        "Implementing the complete Tetris gameplay experience required managing tetromino matrices, rotation, movement, collision detection, line clearing, gravity, scoring, and game lifecycle state inside a React application."
    },

    {
      title: "Telegram Mini-App Environment",

      description:
        "The application had to operate correctly inside Telegram WebViews, requiring Telegram-specific viewport handling, platform checks, WebApp initialization, back-button handling, and Telegram authentication."
    },

    {
      title: "Secure Telegram Authentication",

      description:
        "Authentication required validating Telegram WebApp initData using HMAC-SHA256 and generating JWT-based sessions for subsequent API communication."
    },

    {
      title: "API Request Security",

      description:
        "The application implemented encrypted timestamp-based request validation to restrict unauthorized requests and reduce replay-style API abuse."
    },

    {
      title: "Game Wager & Settlement",

      description:
        "The game required coordination between frontend gameplay, ticket wagers, backend game sessions, score validation, and final win/loss settlement."
    },

    {
      title: "Reward Abuse Prevention",

      description:
        "Daily rewards, tasks, and advertisements required backend-side validation, cooldowns, duplicate-claim prevention, and rate-limiting logic."
    },

    {
      title: "Cryptocurrency Withdrawal Validation",

      description:
        "Withdrawal workflows required validation of TON and Solana wallet addresses, conversion calculations, withdrawal limits, quotas, and transaction processing."
    },

    {
      title: "Admin Blockchain Payout Workflow",

      description:
        "The administrative dashboard needed to connect to a non-custodial TON wallet and support batch transaction signing for approved withdrawal requests."
    },

    {
      title: "External Price Integration",

      description:
        "The backend integrated external APIs such as TonAPI and DexScreener to calculate current asset conversion values for withdrawal processing."
    },

    {
      title: "Game Session Cleanup",

      description:
        "Abandoned game sessions required scheduled cleanup so that pending sessions did not remain indefinitely and game-state integrity could be maintained."
    }
  ],

  learning: [
    "Full-stack MERN application development",
    "React application architecture",
    "React Context state management",
    "React Hooks",
    "Vite-based React development",
    "React Router DOM",
    "Custom browser game development",
    "Tetris game logic",
    "Game board matrix management",
    "Collision detection",
    "Line-clearing algorithms",
    "Responsive game scaling",
    "Node.js backend development",
    "Express.js REST API development",
    "MongoDB database design",
    "Mongoose schema development",
    "JWT authentication",
    "Telegram WebApp authentication",
    "HMAC-SHA256 verification",
    "AES-encrypted request validation",
    "Role-based authorization",
    "REST API security",
    "Telegram Bot API integration",
    "Telegram Mini App development",
    "TON wallet integration",
    "Solana wallet validation",
    "Web3 wallet workflows",
    "Cryptocurrency price API integration",
    "Background jobs with node-cron",
    "Reward and referral systems",
    "Administrative dashboard development",
    "Ad network integration",
    "Withdrawal processing workflows",
    "Excel reporting",
    "Email OTP workflows"
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
      "React Router DOM"
    ],

    stateManagement: [
      "React Context API",
      "React Hooks",
      "useReducer"
    ],

    apiCommunication: [
      "Axios",
      "REST APIs",
      "Crypto-JS"
    ],

    telegram: [
      "Telegram WebApp SDK",
      "@twa-dev/sdk",
      "Telegram Bot Integration"
    ],

    ui: [
      "Material UI",
      "Tailwind CSS",
      "Bootstrap",
      "React Bootstrap",
      "Sass",
      "Framer Motion",
      "Lucide React"
    ],

    game: [
      "Custom React Tetris Engine",
      "JavaScript Game Logic",
      "Dynamic Viewport Scaling",
      "HTML5 Audio"
    ],

    wallet: [
      "@tonconnect/ui-react",
      "@tonconnect/sdk",
      "TonWeb",
      "@ton/core",
      "@solana/web3.js"
    ],

    forms: [
      "Formik",
      "Yup",
      "Custom Validation"
    ],

    notifications: [
      "React Hot Toast",
      "React Toastify"
    ],

    analytics: [
      "Google Analytics",
      "react-ga"
    ],

    utilities: [
      "SheetJS / XLSX",
      "JWT Decode",
      "Lucide React"
    ]
  },

  backendTechnologyStack: {
    runtime: [
      "Node.js"
    ],

    framework: [
      "Express.js"
    ],

    database: [
      "MongoDB",
      "Mongoose"
    ],

    authentication: [
      "JWT",
      "Telegram HMAC-SHA256",
      "Bcrypt",
      "Bcryptjs"
    ],

    authorization: [
      "Role-Based Access Control",
      "Express Middleware"
    ],

    api: [
      "Express Router",
      "REST APIs",
      "express-async-handler",
      "Axios"
    ],

    security: [
      "Crypto-JS",
      "Node Crypto",
      "HMAC-SHA256",
      "AES",
      "CORS",
      "User-Agent Validation"
    ],

    telegram: [
      "node-telegram-bot-api",
      "Telegram Bot API"
    ],

    blockchain: [
      "TonWeb",
      "@ton/core",
      "@solana/web3.js",
      "TweetNaCl"
    ],

    externalApis: [
      "TonAPI",
      "DexScreener",
      "Solscan",
      "Telegram Bot API"
    ],

    backgroundJobs: [
      "node-cron"
    ],

    email: [
      "Nodemailer",
      "Gmail SMTP"
    ],

    configuration: [
      "dotenv"
    ]
  },

  projectHighlights: [
    "Full-stack MERN Web3 gaming platform",
    "Telegram Mini App architecture",
    "Custom React Tetris game engine",
    "React + Vite frontend",
    "Node.js + Express backend",
    "MongoDB + Mongoose database",
    "Telegram WebApp authentication",
    "HMAC-SHA256 verification",
    "AES-encrypted timestamp validation",
    "JWT authentication",
    "Role-based access control",
    "Ticket-based gameplay",
    "Game wager and settlement flow",
    "Daily reward system",
    "Task and engagement system",
    "Referral and commission system",
    "Rewarded advertising",
    "AdBlocker detection",
    "TON wallet integration",
    "Solana wallet validation",
    "TON batch payout workflow",
    "Cryptocurrency withdrawal system",
    "TonAPI integration",
    "DexScreener integration",
    "Solscan integration",
    "Telegram Bot integration",
    "Background game-session cleanup",
    "Administrative dashboard",
    "Excel reporting",
    "Responsive mobile-first UI"
  ],

  portfolioDescription:
    "Developed String Tetris as a full-stack Web3 Play-to-Earn Telegram Mini App using React, Vite, Node.js, Express, and MongoDB. Built the custom Tetris game engine with tetromino movement, rotation, collision detection, line clearing, dynamic difficulty, responsive viewport scaling, audio feedback, and game-session synchronization. Implemented ticket wagering, daily rewards, tasks, referrals, rewarded advertisements, leaderboards, user profiles, and cryptocurrency withdrawal workflows supporting TON and Solana. Developed REST APIs and MongoDB models for gameplay, users, rewards, referrals, tasks, advertisements, transactions, and withdrawals. Implemented Telegram HMAC-SHA256 authentication, AES-encrypted request validation, JWT authorization, role-based access control, background game-session cleanup, Telegram bot messaging, external price integrations, and an administrative dashboard with withdrawal management and batch TON payout workflows.",

  resumeDescription:
    "Developed a full-stack Web3 Telegram Mini App using React, Node.js, Express, and MongoDB, featuring a custom Tetris game engine, ticket wagering, rewards, tasks, referrals, rewarded advertisements, leaderboards, and cryptocurrency withdrawals. Implemented secure Telegram HMAC-SHA256 authentication, AES-encrypted request validation, JWT authorization, MongoDB/Mongoose data models, REST APIs, TON and Solana wallet validation, Telegram Bot integration, background game-session cleanup, external price APIs, and an administrative dashboard for platform and withdrawal management.",

  resumeBulletPoints: [
    "Developed a full-stack Web3 Telegram Mini App using React, Node.js, Express.js, and MongoDB, combining custom Tetris gameplay with ticket-based wagering and cryptocurrency rewards.",

    "Built a custom React Tetris game engine implementing tetromino rotation, movement, collision detection, line clearing, dynamic gravity, scoring, progressive difficulty, audio feedback, and responsive viewport scaling.",

    "Designed and implemented REST APIs with Express.js and MongoDB/Mongoose for user management, game sessions, wagers, rewards, tasks, referrals, advertisements, transactions, and withdrawals.",

    "Implemented secure Telegram WebApp authentication using HMAC-SHA256 signature verification, AES-encrypted timestamp validation, JWT authorization, and role-based access control.",

    "Integrated TON and Solana Web3 workflows including wallet address validation, live price conversion through TonAPI and DexScreener, transaction verification through Solscan, and TON batch payout signing through TonConnect.",

    "Implemented automated game-session cleanup using node-cron to expire stale sessions and maintain consistent wager and game-state handling.",

    "Developed Telegram Bot functionality using node-telegram-bot-api for Mini App onboarding, user communication, and administrative broadcast messaging.",

    "Built rewarded advertising, daily reward, task, referral, and anti-abuse workflows with frontend and backend validation, cooldowns, limits, and duplicate-claim prevention.",

    "Developed an administrative dashboard for user management, game configuration, task and advertisement management, withdrawal processing, platform settings, Telegram broadcasts, and Excel reporting.",

    "Integrated external REST APIs including TonAPI, DexScreener, Solscan, and Telegram Bot API to support cryptocurrency conversion, transaction verification, and platform communication."
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
    showBackendArchitecture: true,
    showDatabaseArchitecture: true,
    showGameEngine: true,
    showApiIntegration: true,
    showTelegramIntegration: true,
    showTelegramBot: true,
    showWalletIntegration: true,
    showAuthentication: true,
    showSecurity: true,
    showAdminDashboard: true,
    showBackgroundJobs: true,
    showExternalApis: true,
    showResponsiveDesign: true,
    showUiUx: true,
    showChallenges: true,
    showTechnologyStack: true,
    showLearning: false,
    showResumeDescription: false
  }
};

export default stringTetrisProject;
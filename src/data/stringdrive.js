import stringDriveSquare from '../assets/String Drive Square.webp';
import stringDriveLandscape from '../assets/String Drive Landscape.webp';

const stringDriveProject = {
  id: "string-drive",

  title: "String Drive",

  subtitle: "Telegram Play-to-Earn Web3 Gaming Platform & Admin Portal",

  category: "Full Stack Development",

  role: "Full Stack MERN Developer",

  description:
    "A full-stack Telegram Mini-App Web3 gaming platform built with React, Vite, Node.js, Express, MongoDB, and Mongoose. The platform provides a mobile-first 2D car racing game using HTML5 Canvas, ticket-based wagering, rewards, daily check-ins, social tasks, referrals, leaderboards, Telegram authentication, cryptocurrency withdrawal workflows, and a dedicated administrative dashboard.",

  shortDescription:
    "A full-stack Telegram Mini-App gaming ecosystem combining a React/Vite HTML5 Canvas racing game with Node.js/Express APIs, MongoDB game economics, Telegram authentication, Web3 withdrawal workflows, and an administrative management portal.",

  image: stringDriveSquare,

  coverImage: stringDriveLandscape,

  technologies: [
    "React 18",
    "Vite",
    "JavaScript",
    "HTML5 Canvas",
    "Node.js",
    "Express 5",
    "MongoDB",
    "Mongoose",
    "REST APIs",
    "React Router DOM",
    "React Context API",
    "Axios",
    "Material UI",
    "React-Bootstrap",
    "Bootstrap",
    "Sass",
    "Formik",
    "Yup",
    "JWT",
    "bcryptjs",
    "CryptoJS",
    "Telegram WebApp SDK",
    "Telegram Bot API",
    "node-telegram-bot-api",
    "TonConnect",
    "TonWeb",
    "TON Core",
    "Solana Web3.js",
    "Dexscreener API",
    "Solscan API",
    "node-cron",
    "Nodemailer",
    "SheetJS",
    "React Hot Toast",
    "React Toastify"
  ],

  projectType: "Full Stack Telegram Mini Application",

  developmentType: "Full Stack MERN Application",

  overview: {
    title: "Project Overview",

    content:
      "String Drive is a Web3 Play-to-Earn gaming ecosystem built primarily as a Telegram Mini-App with a dedicated administrative back-office. The platform allows users to launch the game through Telegram, stake virtual tickets, play an interactive 2D obstacle-dodging car racing game, progress through different difficulty stages, collect rewards, complete daily check-ins and social tasks, participate in referrals, view global rankings, and submit cryptocurrency withdrawal requests. The system uses React and Vite for the player-facing application, Node.js and Express for the backend REST API, MongoDB with Mongoose for persistence, Telegram WebApp and Bot integrations, and Web3 utilities for TON and Solana wallet/address validation. A separate React-based administration portal allows authorized administrators to manage game configuration, users, tasks, advertisements, withdrawals, reports, and blockchain payout workflows."
  },

  myRole: {
    title: "My Role",

    position: "Full Stack MERN Developer",

    description:
      "My role in String Drive covered both frontend and backend development across the player-facing Telegram Mini-App and the administrative platform. I worked on React and Vite frontend development, HTML5 Canvas game implementation, Telegram WebApp integration, responsive mobile UI, React Context state management, REST API integration, Node.js and Express backend development, MongoDB and Mongoose data modeling, authentication and authorization, game session and wagering workflows, reward and referral logic, withdrawal processing, Telegram bot functionality, background jobs using node-cron, Web3 address validation, administrative APIs, and the React-based admin dashboard."
  },

  frontend: {
    title: "Frontend Development",

    description:
      "The player-facing application was developed using React 18 and Vite as a mobile-first Telegram Mini-App. The frontend includes a custom HTML5 Canvas 2D car racing engine, Telegram WebApp integration, game controls, ticket wagering, rewards, tasks, advertisements, referrals, leaderboards, profiles, and withdrawal-related interfaces. A separate React administrative dashboard was developed using React-Bootstrap, Formik, Sass, and supporting libraries for operational management.",

    architecture: [
      "React 18 single-page application",
      "Vite-based frontend build system",
      "Feature-based React component structure",
      "Reusable functional components",
      "React Router DOM routing",
      "React Context API for shared state",
      "React Hooks for component and game state",
      "HTML5 Canvas 2D rendering",
      "requestAnimationFrame game loop",
      "Touch and mouse drag controls",
      "Custom collision detection",
      "Particle animation systems",
      "Web Audio / HTML5 audio integration",
      "Axios-based REST API integration",
      "Telegram WebApp SDK integration",
      "Telegram mobile environment detection",
      "Responsive Material UI layouts",
      "Reusable modal and dialog components",
      "Loading and error states",
      "Toast notification system",
      "Mobile-first Telegram interface",
      "Separate React administrative dashboard"
    ]
  },

  features: [
    {
      title: "HTML5 Canvas Car Racing Game",

      description:
        "Built an interactive 2D obstacle-dodging car racing game using the native HTML5 Canvas API rather than a third-party game engine. The game continuously renders the road, player vehicle, obstacles, particles, and other visual elements through a requestAnimationFrame-based game loop.",

      items: [
        "HTML5 Canvas 2D rendering",
        "Continuous requestAnimationFrame loop",
        "Scrolling road simulation",
        "Multi-lane car movement",
        "Touch drag controls",
        "Mouse drag controls",
        "Enemy vehicle rendering",
        "Road pothole obstacles",
        "Coin cluster rendering",
        "Procedural obstacle spawning",
        "Custom bounding-box collision detection",
        "Dynamic difficulty configuration",
        "Player life system",
        "Game pause and resume handling",
        "Crash animations",
        "Particle effects",
        "Water splash effects",
        "Engine audio",
        "Crash audio",
        "Coin collection audio"
      ]
    },

    {
      title: "Game Difficulty & Physics",

      description:
        "Implemented a configurable game system where important gameplay parameters can be controlled from backend configuration and managed through the administrative dashboard.",

      items: [
        "Road speed configuration",
        "Enemy speed configuration",
        "Obstacle spawn frequency",
        "Level distance configuration",
        "Level multipliers",
        "Dynamic difficulty settings",
        "Backend-driven game configuration",
        "Admin-controlled game parameters",
        "Game physics configuration",
        "Progressive difficulty"
      ]
    },

    {
      title: "Ticket Wagering System",

      description:
        "Implemented the frontend and backend flow for users to select a ticket wager before starting a game. The backend validates the wager against the user's available balance and creates a pending game session.",

      items: [
        "Pre-game wager modal",
        "Ticket amount selection",
        "Minimum wager validation",
        "Maximum wager validation",
        "Balance validation",
        "Ticket deduction",
        "Pending game creation",
        "Duplicate active game prevention",
        "Game session tracking",
        "Wager status handling",
        "Win amount calculation",
        "Game settlement"
      ]
    },

    {
      title: "Game Session Lifecycle",

      description:
        "Developed the backend lifecycle for game sessions from wager placement through result settlement and automatic expiration of abandoned sessions.",

      items: [
        "Game session creation",
        "Pending game status",
        "Active game validation",
        "Concurrent game prevention",
        "Game result submission",
        "Server-side payout validation",
        "Win amount limits",
        "Balance crediting",
        "Game history creation",
        "Completed game status",
        "Expired game status",
        "Abandoned game cleanup"
      ]
    },

    {
      title: "Daily Check-In Rewards",

      description:
        "Implemented daily reward functionality allowing users to claim configured daily bonuses while the backend tracks claim timing and prevents repeated claims within the configured interval.",

      items: [
        "Daily reward interface",
        "Reward claim modal",
        "Daily reward API",
        "Claim validation",
        "24-hour reward interval",
        "Reward balance updates",
        "Claim timestamp tracking",
        "Success notifications",
        "Error handling",
        "Reward status display"
      ]
    },

    {
      title: "Social Task System",

      description:
        "Built task-related frontend and backend workflows allowing administrators to configure tasks while users can view available tasks, complete supported activities, and receive reward points after successful verification.",

      items: [
        "Task listing",
        "Task categories",
        "Social/community tasks",
        "Task completion flow",
        "Task verification",
        "One-time reward tracking",
        "Completed task records",
        "Task reward processing",
        "Task administration",
        "Task CRUD operations"
      ]
    },

    {
      title: "Advertisement & Monetization",

      description:
        "Integrated Telegram advertisement providers into the gaming experience with countdown controls, daily claim limitations, reward handling, and ad-blocker detection.",

      items: [
        "Telegram advertisement integration",
        "Adsgram integration",
        "Ton-AI SDK integration",
        "Advertisement display flow",
        "Countdown timers",
        "Daily advertisement limits",
        "Ad reward processing",
        "Anti-spam cooldown",
        "Ad-blocker detection",
        "Ad configuration from admin dashboard"
      ]
    },

    {
      title: "Referral System",

      description:
        "Implemented a multi-tier referral system that connects Telegram referral links with backend referral tracking and reward attribution.",

      items: [
        "Telegram referral links",
        "Referral link generation",
        "Invite friends interface",
        "Copy referral link",
        "Telegram sharing",
        "Referral user tracking",
        "Referral history",
        "Signup bonus attribution",
        "Multi-tier referral structure",
        "Referral reward processing"
      ]
    },

    {
      title: "Leaderboard",

      description:
        "Developed a global leaderboard showing users ranked according to ticket balance, including top-three visual indicators and pagination.",

      items: [
        "Global leaderboard",
        "User ranking",
        "Ticket balance ranking",
        "Top-three ranking indicators",
        "Pagination",
        "Leaderboard API",
        "Dynamic ranking data",
        "Responsive leaderboard interface"
      ]
    },

    {
      title: "User Profile",

      description:
        "Built the user profile interface and supporting backend APIs for displaying player statistics, balances, account information, and withdrawal-related actions.",

      items: [
        "User profile",
        "Username display",
        "Username editing",
        "Ticket balance",
        "Games played",
        "Wins",
        "Player statistics",
        "Account status",
        "Profile update API",
        "Withdrawal bot navigation"
      ]
    },

    {
      title: "Telegram Mini-App Integration",

      description:
        "Integrated the application with Telegram WebApp functionality so the player experience runs directly inside Telegram and follows Telegram-specific viewport, lifecycle, authentication, and navigation behavior.",

      items: [
        "Telegram WebApp SDK",
        "Telegram environment detection",
        "Mobile gatekeeper",
        "Telegram viewport handling",
        "Telegram WebApp initialization",
        "Telegram BackButton handling",
        "Telegram user data",
        "Telegram initData",
        "Telegram bot deep links",
        "Telegram-specific navigation",
        "Desktop fallback screen"
      ]
    },

    {
      title: "Authentication & Authorization",

      description:
        "Implemented a multi-layer authentication and authorization system combining Telegram WebApp authentication, HMAC-SHA256 signature verification, AES timestamp verification, JWT sessions, and role-based authorization.",

      items: [
        "Telegram WebApp authentication",
        "Telegram initData validation",
        "HMAC-SHA256 signature verification",
        "JWT authentication",
        "24-hour JWT expiration",
        "JWT token validation",
        "Admin authorization",
        "User authorization",
        "Ownership validation",
        "Protected API routes",
        "Authenticated frontend state"
      ]
    },

    {
      title: "Anti-Replay Client Verification",

      description:
        "Implemented an additional client verification layer using AES-encrypted timestamped request headers. The backend decrypts and validates the timestamp within a strict five-second window before allowing protected requests.",

      items: [
        "AES-encrypted client payload",
        "CryptoJS integration",
        "Timestamp generation",
        "Timestamp validation",
        "Five-second replay window",
        "Client ID verification",
        "Protected request headers",
        "Backend verification middleware",
        "Replay protection workflow"
      ]
    },

    {
      title: "Cryptocurrency Withdrawal System",

      description:
        "Implemented backend withdrawal workflows for users requesting cryptocurrency settlement using TON and Solana wallet addresses. The system validates withdrawal limits, balances, daily quotas, wallet addresses, and transaction states.",

      items: [
        "Withdrawal request creation",
        "Minimum withdrawal validation",
        "Maximum withdrawal validation",
        "Daily withdrawal limits",
        "Ticket balance validation",
        "Atomic balance deduction",
        "TON wallet validation",
        "Solana wallet validation",
        "Withdrawal status tracking",
        "Pending withdrawal",
        "Approved withdrawal",
        "Rejected withdrawal",
        "Transferred withdrawal"
      ]
    },

    {
      title: "TON & Solana Web3 Integration",

      description:
        "Integrated Web3 utilities for validating blockchain settlement destinations and supporting cryptocurrency-related platform workflows across TON and Solana networks.",

      items: [
        "TON address validation",
        "TON TEP-2 format validation",
        "Bounceable TON address validation",
        "Non-bounceable TON address validation",
        "Solana address validation",
        "Solana curve validation",
        "TonWeb integration",
        "TON Core integration",
        "Solana Web3.js integration",
        "Blockchain-aware withdrawal workflow"
      ]
    },

    {
      title: "Admin Dashboard",

      description:
        "Developed a dedicated React-based administrative portal for managing game configuration, users, tasks, advertisements, withdrawals, reports, and blockchain payout operations.",

      items: [
        "Admin login",
        "KPI dashboard",
        "Total users metric",
        "Total transactions metric",
        "Total games metric",
        "Game configuration",
        "Game level management",
        "Multiplier management",
        "Task management",
        "Advertisement management",
        "User management",
        "Game history inspection",
        "Withdrawal management",
        "Withdrawal approval",
        "Withdrawal rejection",
        "Transaction hash recording",
        "Audit reporting"
      ]
    },

    {
      title: "Excel Reporting",

      description:
        "Implemented client-side Excel report generation in the administrative portal using SheetJS for user logs, game history, and withdrawal-related data.",

      items: [
        "SheetJS integration",
        "User log export",
        "Game history export",
        "Withdrawal batch export",
        "Excel file generation",
        "Administrative reporting"
      ]
    },

    {
      title: "Admin Web3 Payout Workflow",

      description:
        "Integrated non-custodial TON wallet functionality into the administrative dashboard using TonConnect UI to support administrator-controlled batch payout workflows.",

      items: [
        "TON wallet connection",
        "Non-custodial wallet flow",
        "TonConnect UI integration",
        "Withdrawal batch processing",
        "Payout transaction preparation",
        "Transaction signing",
        "Transaction hash recording",
        "Withdrawal status reconciliation"
      ]
    },

    {
      title: "Telegram Bot",

      description:
        "Implemented a Telegram bot daemon used for user onboarding, application launch, introductory content, and WebApp deep-link access.",

      items: [
        "Telegram bot integration",
        "/start command",
        "Introductory messages",
        "Marketing media",
        "Inline keyboard launchers",
        "WebApp deep links",
        "Telegram user onboarding"
      ]
    },

    {
      title: "Automated Background Jobs",

      description:
        "Implemented scheduled backend maintenance using node-cron to identify abandoned or stale pending game sessions and automatically transition them to expired states.",

      items: [
        "node-cron integration",
        "Minute-based scheduled job",
        "Pending game inspection",
        "Dynamic expiry threshold",
        "Stale session detection",
        "Automatic game expiration",
        "Database status update",
        "Game lifecycle maintenance"
      ]
    },

    {
      title: "Email & OTP Recovery",

      description:
        "Implemented administrator credential recovery using OTP generation and transactional email delivery through Nodemailer and Gmail SMTP.",

      items: [
        "OTP generation",
        "Administrator password recovery",
        "Email delivery",
        "Nodemailer integration",
        "Gmail SMTP",
        "OTP validation",
        "Credential recovery workflow"
      ]
    }
  ],

  apiIntegration: {
    title: "API Integration",

    description:
      "Designed and integrated REST APIs using Node.js and Express 5 for the player application and administrative portal. The API layer handles authentication, users, games, tasks, rewards, referrals, advertisements, leaderboards, withdrawals, administrative operations, and Web3-related workflows. The React frontend communicates with the backend through Axios using centralized API configuration.",

    technologies: [
      "Axios",
      "REST APIs",
      "Node.js",
      "Express 5",
      "Express Router",
      "MongoDB",
      "Mongoose",
      "JWT",
      "CryptoJS"
    ],

    responsibilities: [
      "Designed REST API endpoints using Express Router.",
      "Integrated frontend requests using Axios.",
      "Created centralized API configuration.",
      "Connected React components with backend services.",
      "Implemented user authentication APIs.",
      "Implemented game session APIs.",
      "Implemented wager placement APIs.",
      "Implemented game result settlement APIs.",
      "Implemented daily reward APIs.",
      "Implemented task APIs.",
      "Implemented referral APIs.",
      "Implemented leaderboard APIs.",
      "Implemented withdrawal APIs.",
      "Implemented administrative APIs.",
      "Implemented game configuration APIs.",
      "Implemented advertisement management APIs.",
      "Handled API success and failure states.",
      "Implemented structured HTTP status responses.",
      "Added authentication middleware to protected routes.",
      "Connected MongoDB operations through Mongoose models."
    ]
  },

  telegramIntegration: {
    title: "Telegram Mini-App & Bot Integration",

    description:
      "String Drive is designed around Telegram as its primary user-entry platform. The frontend operates as a Telegram WebApp while the backend validates Telegram initialization data and a dedicated Telegram bot provides application onboarding and WebApp launch functionality.",

    technologies: [
      "Telegram WebApp SDK",
      "@twa-dev/sdk",
      "Telegram Bot API",
      "node-telegram-bot-api",
      "Telegram initData",
      "HMAC-SHA256"
    ],

    responsibilities: [
      "Integrated Telegram WebApp SDK into the React frontend.",
      "Implemented Telegram environment detection.",
      "Handled Telegram WebApp initialization.",
      "Implemented Telegram mobile viewport behavior.",
      "Integrated Telegram BackButton functionality.",
      "Captured Telegram WebApp initData.",
      "Sent Telegram authentication information to the backend.",
      "Implemented server-side HMAC-SHA256 validation.",
      "Implemented Telegram bot onboarding.",
      "Implemented /start bot command handling.",
      "Created WebApp launch buttons.",
      "Implemented Telegram referral deep links.",
      "Supported Telegram-specific navigation flows."
    ]
  },

  walletIntegration: {
    title: "Web3 & Wallet Integration",

    description:
      "Implemented Web3-related functionality across the backend and administrative frontend. The backend validates TON and Solana withdrawal addresses and calculates settlement values, while the admin frontend uses TonConnect UI for non-custodial TON wallet transaction workflows.",

    technologies: [
      "TonConnect UI",
      "TonWeb",
      "TON Core",
      "Solana Web3.js",
      "Dexscreener API",
      "Solscan API"
    ],

    features: [
      "TON wallet connection",
      "Non-custodial admin wallet flow",
      "TON address validation",
      "TON TEP-2 validation",
      "Bounceable address validation",
      "Non-bounceable address validation",
      "Solana address validation",
      "Solana curve validation",
      "Withdrawal destination validation",
      "Token price lookup",
      "Dexscreener price integration",
      "Transaction hash recording",
      "Solscan transaction lookup",
      "Withdrawal status reconciliation",
      "Batch TON payout workflow"
    ]
  },

  responsiveDesign: {
    title: "Responsive & Mobile-First Design",

    description:
      "The player-facing application was designed primarily for mobile users accessing String Drive through Telegram. The interface uses Material UI and responsive layout patterns for the player application, while the administrative dashboard uses React-Bootstrap responsive grids.",

    features: [
      "Telegram mobile-first layout",
      "Mobile game interface",
      "Responsive game screens",
      "Touch drag controls",
      "Mobile navigation",
      "Responsive profile page",
      "Responsive task interface",
      "Responsive leaderboard",
      "Responsive reward modals",
      "Responsive admin dashboard",
      "Bootstrap responsive grid",
      "Material UI responsive components",
      "Mobile-friendly forms"
    ]
  },

  uiUx: {
    title: "UI / UX Features",

    description:
      "The application provides a game-focused Telegram experience combining interactive Canvas gameplay with reward, task, referral, leaderboard, profile, and withdrawal workflows. The administrative application provides structured operational interfaces for platform management.",

    features: [
      "Game-focused interface",
      "Telegram-first experience",
      "Mobile-first navigation",
      "Interactive game canvas",
      "Touch controls",
      "Mouse controls",
      "Game wager modal",
      "Daily reward modal",
      "Profile edit modal",
      "Ad blocker popup",
      "Loading indicators",
      "Material UI components",
      "Bootstrap components",
      "Toast notifications",
      "Success feedback",
      "Error feedback",
      "Game status feedback",
      "Responsive admin tables",
      "Administrative forms",
      "Withdrawal status indicators"
    ]
  },

  navigation: {
    title: "Navigation & Routing",

    technology: "React Router DOM",

    description:
      "Implemented client-side routing for both the player-facing Telegram Mini-App and the administrative dashboard. The player application uses React Router to navigate between games, profile, tasks, referrals, leaderboard, and other platform sections, while active gameplay routes can hide global navigation elements.",

    areas: [
      "Games",
      "Car Game",
      "Tasks",
      "Profile",
      "Refer",
      "Leaderboard",
      "Home",
      "Administrative Dashboard",
      "Admin Users",
      "Admin Games",
      "Admin Tasks",
      "Admin Advertisements",
      "Admin Withdrawals",
      "Admin Game History",
      "Admin Configuration"
    ]
  },

  stateManagement: {
    title: "State Management",

    technology: "React Context API + React Hooks",

    description:
      "Implemented shared application state using React Context API along with React Hooks. The player application uses contexts for user information, Telegram WebApp state, balance synchronization, and shared application state, while the administrative application uses dedicated configuration and account state management.",

    responsibilities: [
      "User authentication state",
      "User profile state",
      "Ticket balance state",
      "Telegram WebApp state",
      "Game state",
      "Game lifecycle state",
      "Wager state",
      "Loading state",
      "Modal state",
      "Admin authentication state",
      "Admin configuration state",
      "Withdrawal state",
      "API response state",
      "Local component state",
      "useState",
      "useEffect",
      "useRef",
      "useCallback",
      "useReducer"
    ]
  },

  authentication: {
    title: "Authentication & Security",

    description:
      "String Drive implements multiple authentication and request-validation layers. Telegram WebApp initialization data is cryptographically validated on the backend using HMAC-SHA256, protected requests use AES-encrypted timestamp verification, and JWT-based authentication with role-based authorization protects user and administrative APIs.",

    technologies: [
      "Telegram WebApp initData",
      "HMAC-SHA256",
      "JWT",
      "bcryptjs",
      "CryptoJS AES",
      "Role-Based Access Control",
      "CORS"
    ],

    features: [
      "Telegram authentication",
      "Telegram HMAC-SHA256 verification",
      "JWT token generation",
      "JWT token validation",
      "24-hour JWT expiration",
      "Admin role authorization",
      "User role authorization",
      "User ownership validation",
      "AES-encrypted request verification",
      "Timestamp validation",
      "Five-second replay window",
      "Password hashing using bcryptjs",
      "Protected API routes",
      "Authenticated frontend state",
      "Administrative route protection"
    ]
  },

  backend: {
    title: "Backend Development",

    description:
      "The backend was developed using Node.js and Express 5 as a REST API service backed by MongoDB and Mongoose. It manages the platform's user system, game economy, game session lifecycle, rewards, tasks, referrals, advertisements, withdrawals, administrative operations, authentication, Web3 validation, Telegram bot operations, and automated background maintenance.",

    architecture: [
      "Node.js runtime",
      "Express 5 REST API",
      "MongoDB database",
      "Mongoose ODM",
      "Express Router",
      "Modular controllers",
      "Route-level middleware",
      "User controllers",
      "Game controllers",
      "Task controllers",
      "Admin controllers",
      "Withdrawal controllers",
      "Ticket controllers",
      "Authentication middleware",
      "Role-based middleware",
      "Telegram validation middleware",
      "AES client verification middleware",
      "JWT validation middleware",
      "node-cron background worker",
      "Telegram bot daemon",
      "Nodemailer email service",
      "Web3 validation utilities"
    ]
  },

  database: {
    title: "MongoDB & Database Development",

    technology: "MongoDB + Mongoose",

    description:
      "Designed and implemented MongoDB data models using Mongoose for users, game configuration, game history, withdrawals, tasks, completed tasks, advertisements, and related platform operations. Database operations support user balances, game lifecycle tracking, reward processing, administrative management, and financial audit information.",

    models: [
      "User Schema",
      "Game Schema",
      "Game History Schema",
      "Withdrawal Schema",
      "Task Schema",
      "Completed Task Schema",
      "Ads Schema",
      "Completed Advertisement Schema"
    ],

    responsibilities: [
      "Created Mongoose schemas.",
      "Defined required database fields.",
      "Defined schema enumerations.",
      "Implemented timestamps.",
      "Managed user balances.",
      "Stored Telegram user identifiers.",
      "Stored referral information.",
      "Stored game configuration.",
      "Stored game history.",
      "Stored wager amounts.",
      "Stored win amounts.",
      "Stored initial and final balances.",
      "Stored withdrawal information.",
      "Stored wallet addresses.",
      "Stored transaction hashes.",
      "Tracked withdrawal status.",
      "Tracked completed tasks.",
      "Tracked advertisement completion.",
      "Implemented atomic balance updates.",
      "Implemented database connection retry handling."
    ]
  },

  gameEngine: {
    title: "Game Engine Development",

    technology: "HTML5 Canvas 2D + JavaScript",

    description:
      "Built the player-facing car racing engine from scratch using the native HTML5 Canvas API. The game uses a requestAnimationFrame rendering loop, custom collision calculations, procedural obstacle generation, particle systems, audio effects, and touch/mouse controls.",

    features: [
      "Canvas initialization",
      "requestAnimationFrame loop",
      "Road scrolling",
      "Player car movement",
      "Multi-lane navigation",
      "Touch drag input",
      "Mouse drag input",
      "Enemy vehicle generation",
      "Pothole generation",
      "Coin cluster generation",
      "Bounding-box collision detection",
      "Life management",
      "Crash detection",
      "Particle explosion effects",
      "Water splash particles",
      "Engine audio",
      "Crash sound",
      "Coin collection sound",
      "Game pause on visibility change",
      "Game resume handling",
      "Backend-driven difficulty configuration"
    ]
  },

  security: {
    title: "Application Security",

    description:
      "Implemented multiple security mechanisms across the frontend and backend to validate Telegram users, protect API requests, authenticate sessions, restrict administrative operations, and reduce request replay risks.",

    mechanisms: [
      "Telegram HMAC-SHA256 verification",
      "Telegram initData validation",
      "AES-encrypted client request payload",
      "Timestamp-based request verification",
      "Five-second replay protection window",
      "JWT authentication",
      "Role-Based Access Control",
      "User ownership validation",
      "bcrypt password hashing",
      "CORS configuration",
      "Protected REST endpoints",
      "Withdrawal validation",
      "Game wager validation",
      "Server-side payout limits",
      "Concurrent active-game prevention"
    ]
  },

  formsAndValidation: {
    title: "Forms & Validation",

    technologies: [
      "Formik",
      "Yup",
      "Mongoose Validation",
      "Custom JavaScript Validation",
      "Web3 Address Validation"
    ],

    features: [
      "Admin login forms",
      "Game configuration forms",
      "Task forms",
      "Advertisement forms",
      "User profile editing",
      "Username validation",
      "Wager amount validation",
      "Minimum and maximum wager validation",
      "Withdrawal amount validation",
      "Withdrawal limit validation",
      "TON wallet address validation",
      "Solana wallet address validation",
      "Mongoose schema validation",
      "Administrative form validation",
      "API response validation"
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
      "Game start feedback",
      "Wager validation feedback",
      "Game result feedback",
      "Reward notifications",
      "Task completion notifications",
      "Referral feedback",
      "Wallet feedback",
      "Withdrawal status feedback",
      "Admin operation feedback",
      "API success notifications",
      "API error notifications",
      "Validation errors",
      "Loading indicators"
    ]
  },

  chartsAndVisualization: {
    title: "Charts & Visualization",

    technologies: [
      "HTML5 Canvas 2D",
      "Material UI",
      "Bootstrap"
    ],

    note:
      "The project does not contain a significant dedicated charting library implementation. The primary visualization technology is the custom HTML5 Canvas 2D game engine, while the administrative dashboard uses KPI cards, tables, forms, and structured management interfaces."
  },

  adminDashboard: {
    title: "Administrative Dashboard",

    description:
      "Developed a separate React administrative portal for platform operators to manage game configuration, users, tasks, advertisements, game history, withdrawals, reporting, and Web3 settlement workflows.",

    technologies: [
      "React",
      "React-Bootstrap",
      "Bootstrap",
      "Sass",
      "Formik",
      "Yup",
      "SheetJS",
      "TonConnect UI"
    ],

    features: [
      "Admin authentication",
      "Dashboard KPI cards",
      "Total users",
      "Total transactions",
      "Total games",
      "Game configuration",
      "Game physics management",
      "Level management",
      "Multiplier management",
      "Task CRUD",
      "Advertisement CRUD",
      "User management",
      "Game history",
      "Withdrawal management",
      "Withdrawal approval",
      "Withdrawal rejection",
      "Transaction hash recording",
      "Excel reporting",
      "TON wallet connection",
      "Batch payout workflow"
    ]
  },

  backgroundJobs: {
    title: "Background Jobs & Automation",

    technology: "node-cron",

    description:
      "Implemented an automated background worker that periodically checks active game sessions and expires stale pending games according to dynamically configured database thresholds.",

    features: [
      "node-cron integration",
      "Minute-based scheduled execution",
      "Active game inspection",
      "Pending game detection",
      "Dynamic expiry threshold",
      "Automatic expiration",
      "Game status updates",
      "Database maintenance",
      "Abandoned wager cleanup"
    ]
  },

  externalIntegrations: {
    title: "External Services & Integrations",

    services: [
      {
        name: "Telegram Bot API",
        usage:
          "Used for Telegram bot onboarding, /start commands, introductory content, and WebApp launch links."
      },
      {
        name: "Telegram WebApp",
        usage:
          "Used as the primary player application environment and authentication source."
      },
      {
        name: "Adsgram",
        usage:
          "Used for Telegram advertisement and reward-related flows."
      },
      {
        name: "Ton-AI SDK",
        usage:
          "Used for advertisement and monetization-related interactions."
      },
      {
        name: "Dexscreener API",
        usage:
          "Used for token price resolution during withdrawal approval and currency conversion."
      },
      {
        name: "Solscan API",
        usage:
          "Used for optional transaction lookup and withdrawal reconciliation."
      },
      {
        name: "Gmail SMTP",
        usage:
          "Used through Nodemailer for administrator OTP and credential recovery emails."
      }
    ]
  },

  apiArchitecture: {
    title: "REST API Architecture",

    description:
      "The backend follows a modular Express REST API architecture with routes, controllers, middleware, Mongoose models, and service-specific logic. The API is divided into administrative, user, and withdrawal-related domains.",

    structure: [
      "Express server",
      "Express Router",
      "Authentication routes",
      "User routes",
      "Admin routes",
      "Gameplay routes",
      "Task routes",
      "Referral routes",
      "Leaderboard routes",
      "Withdrawal routes",
      "Middleware layer",
      "Controller layer",
      "Mongoose model layer",
      "MongoDB persistence",
      "Background job layer",
      "External API integrations"
    ],

    responsibilities: [
      "Designed REST endpoints.",
      "Organized routes by business domain.",
      "Implemented controller-level business logic.",
      "Connected controllers with Mongoose models.",
      "Protected routes with middleware.",
      "Implemented standardized HTTP responses.",
      "Handled API errors.",
      "Implemented authentication checks.",
      "Implemented authorization checks.",
      "Implemented ownership validation.",
      "Implemented game lifecycle APIs.",
      "Implemented withdrawal APIs."
    ]
  },

  userExperience: {
    title: "User Experience",

    description:
      "String Drive combines a Telegram-first gaming experience with a Web3 reward economy. The user can enter the application through Telegram, authenticate through Telegram WebApp data, select a ticket wager, play the Canvas racing game, earn rewards, complete tasks, invite referrals, view rankings, and access withdrawal-related functionality.",

    highlights: [
      "Telegram-first user experience",
      "Mobile-first arcade game",
      "Interactive 2D car racing",
      "Touch drag controls",
      "Mouse controls",
      "Ticket-based gameplay",
      "Daily check-in rewards",
      "Social tasks",
      "Advertisement rewards",
      "Referral system",
      "Global leaderboard",
      "User profile",
      "Game statistics",
      "Cryptocurrency withdrawal workflow",
      "TON wallet support",
      "Solana withdrawal support",
      "Administrative management",
      "Game configuration",
      "Reward management",
      "Withdrawal management"
    ]
  },

  challenges: [
    {
      title: "Building a Canvas Game from Scratch",

      description:
        "Developing the racing game without a dedicated game engine required implementing the rendering loop, player movement, obstacle generation, collision detection, particle effects, audio playback, and game lifecycle manually using the HTML5 Canvas API."
    },

    {
      title: "Telegram Mini-App Constraints",

      description:
        "The application needed to operate inside the Telegram WebApp environment, requiring mobile-focused layouts, Telegram viewport handling, environment detection, BackButton behavior, and Telegram-specific authentication flows."
    },

    {
      title: "Game & Backend Synchronization",

      description:
        "The frontend game experience needed to communicate with backend APIs for wager placement, game session creation, result settlement, balance updates, and game history while keeping the client and server responsibilities separated."
    },

    {
      title: "Secure Telegram Authentication",

      description:
        "The authentication system required validating Telegram WebApp initialization data cryptographically on the backend using HMAC-SHA256 rather than trusting client-provided user information."
    },

    {
      title: "Anti-Replay Request Verification",

      description:
        "Protected frontend requests required additional AES-encrypted timestamp information that the backend decrypts and verifies against a strict five-second window."
    },

    {
      title: "Game Economy & Atomic Balances",

      description:
        "The backend needed to safely manage ticket wagers, winnings, balances, and withdrawal deductions while preventing duplicate active games and maintaining consistent game history records."
    },

    {
      title: "Multi-Chain Withdrawal Validation",

      description:
        "The withdrawal system required validation of blockchain destinations across TON and Solana while supporting platform limits, transaction states, token price resolution, and administrative settlement workflows."
    },

    {
      title: "Admin & Player Applications",

      description:
        "The project contains both a mobile player-facing Telegram Mini-App and a separate administrative portal, requiring different UI patterns, routing structures, authentication behavior, and business workflows."
    },

    {
      title: "Background Game Session Cleanup",

      description:
        "Abandoned pending game sessions needed automated cleanup so stale wagers would not remain active indefinitely. This was handled through a scheduled node-cron background worker."
    }
  ],

  learning: [
    "Full-stack MERN application development",
    "React 18 development",
    "Vite application development",
    "Node.js backend development",
    "Express 5 REST API development",
    "MongoDB database design",
    "Mongoose schema development",
    "REST API architecture",
    "React Context API",
    "React Router DOM",
    "Axios API integration",
    "HTML5 Canvas 2D development",
    "requestAnimationFrame game loops",
    "Collision detection algorithms",
    "Particle animation systems",
    "Web Audio API integration",
    "Telegram Mini-App development",
    "Telegram Bot development",
    "Telegram initData validation",
    "HMAC-SHA256 authentication",
    "AES encryption and timestamp validation",
    "JWT authentication",
    "Role-Based Access Control",
    "Atomic MongoDB operations",
    "Game session lifecycle management",
    "node-cron background jobs",
    "TON wallet integration",
    "Solana Web3 integration",
    "TON address validation",
    "Solana address validation",
    "Cryptocurrency withdrawal workflows",
    "Admin dashboard development",
    "Formik and Yup form validation",
    "SheetJS Excel reporting",
    "Nodemailer email integration",
    "External API integration",
    "Web3 transaction workflows"
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

    routing: [
      "React Router DOM",
      "Client-Side Routing"
    ],

    stateManagement: [
      "React Context API",
      "React Hooks",
      "useState",
      "useEffect",
      "useRef",
      "useCallback",
      "useReducer"
    ],

    apiCommunication: [
      "Axios",
      "REST APIs",
      "Centralized API Configuration",
      "Custom API Calls"
    ],

    gameDevelopment: [
      "HTML5 Canvas API",
      "Canvas 2D Context",
      "requestAnimationFrame",
      "Collision Detection",
      "Particle Systems",
      "Web Audio"
    ],

    telegram: [
      "Telegram WebApp SDK",
      "@twa-dev/sdk",
      "Telegram Bot API",
      "node-telegram-bot-api"
    ],

    ui: [
      "Material UI",
      "MUI Icons",
      "React-Bootstrap",
      "Bootstrap",
      "Sass",
      "Emotion",
      "Framer Motion"
    ],

    forms: [
      "Formik",
      "Yup"
    ],

    notifications: [
      "React Hot Toast",
      "React Toastify"
    ],

    wallet: [
      "TonConnect UI",
      "TON Core",
      "TonWeb",
      "Solana Web3.js"
    ],

    reporting: [
      "SheetJS",
      "xlsx"
    ],

    security: [
      "CryptoJS",
      "JWT",
      "Telegram HMAC-SHA256"
    ]
  },

  backendTechnologyStack: {
    runtime: [
      "Node.js"
    ],

    framework: [
      "Express 5"
    ],

    database: [
      "MongoDB",
      "Mongoose"
    ],

    authentication: [
      "JSON Web Tokens",
      "Telegram HMAC-SHA256",
      "bcryptjs"
    ],

    authorization: [
      "Role-Based Access Control",
      "isAdmin Middleware",
      "isuser Middleware"
    ],

    api: [
      "Express Router",
      "REST APIs",
      "JSON over HTTP"
    ],

    security: [
      "CryptoJS AES",
      "HMAC-SHA256",
      "JWT",
      "bcryptjs",
      "CORS"
    ],

    backgroundJobs: [
      "node-cron"
    ],

    email: [
      "Nodemailer",
      "Gmail SMTP"
    ],

    telegram: [
      "node-telegram-bot-api",
      "Telegram Bot API"
    ],

    web3: [
      "TonWeb",
      "TON Core",
      "Solana Web3.js",
      "tweetnacl",
      "Dexscreener API",
      "Solscan API"
    ],

    utilities: [
      "dotenv",
      "express-async-handler",
      "moment"
    ]
  },

  databaseArchitecture: {
    title: "Database Architecture",

    technology: "MongoDB + Mongoose",

    collections: [
      {
        name: "Users",
        purpose:
          "Stores user information, Telegram identifiers, balances, referral information, account status, and OTP-related fields."
      },
      {
        name: "Games",
        purpose:
          "Stores configurable game physics, speed, multiplier, spawn rate, level distance, and expiry settings."
      },
      {
        name: "Game History",
        purpose:
          "Stores wagers, winnings, initial and final balances, and game status such as PENDING, WON, LOSE, and EXPIRED."
      },
      {
        name: "Withdrawals",
        purpose:
          "Stores wallet addresses, token information, amounts, deductions, USD values, transaction hashes, and withdrawal status."
      },
      {
        name: "Tasks",
        purpose:
          "Stores available user tasks and associated reward configuration."
      },
      {
        name: "Completed Tasks",
        purpose:
          "Tracks user task completion and one-time task rewards."
      },
      {
        name: "Advertisements",
        purpose:
          "Stores advertising configuration and reward-related information."
      },
      {
        name: "Completed Advertisements",
        purpose:
          "Tracks advertisement completion and user reward activity."
      }
    ]
  },

  projectHighlights: [
    "Full-stack MERN development",
    "React 18 frontend",
    "Vite application",
    "Node.js backend",
    "Express 5 REST API",
    "MongoDB database",
    "Mongoose ODM",
    "Telegram Mini-App",
    "Telegram Bot integration",
    "HTML5 Canvas 2D racing game",
    "requestAnimationFrame game engine",
    "Custom collision detection",
    "Particle effects",
    "Audio integration",
    "Touch and mouse controls",
    "Ticket wagering system",
    "Game session lifecycle",
    "Daily rewards",
    "Social tasks",
    "Advertisement monetization",
    "Referral system",
    "Global leaderboard",
    "User profile management",
    "JWT authentication",
    "Telegram HMAC-SHA256 verification",
    "AES timestamp validation",
    "Replay protection",
    "Role-Based Access Control",
    "MongoDB atomic balance operations",
    "node-cron background jobs",
    "TON Web3 integration",
    "Solana Web3 integration",
    "TON address validation",
    "Solana address validation",
    "Cryptocurrency withdrawal workflow",
    "React administrative dashboard",
    "Game configuration management",
    "Withdrawal management",
    "SheetJS Excel reporting",
    "TonConnect non-custodial wallet workflow",
    "Nodemailer OTP recovery",
    "Dexscreener API",
    "Solscan API"
  ],

  portfolioDescription:
    "Developed String Drive as a full-stack Telegram Mini-App Web3 gaming platform using React 18, Vite, Node.js, Express 5, MongoDB, and Mongoose. Built an interactive HTML5 Canvas 2D car racing game with multi-lane touch controls, collision detection, procedural obstacles, particle effects, audio, ticket wagering, and backend-driven game configuration. Implemented Telegram WebApp authentication with HMAC-SHA256 validation, JWT-based authorization, AES-encrypted timestamp verification, daily rewards, tasks, advertisements, referrals, leaderboards, and cryptocurrency withdrawal workflows across TON and Solana. Developed a separate React administrative portal for game configuration, user management, withdrawal processing, Excel reporting, and non-custodial TON wallet batch payout workflows.",

  resumeDescription:
    "Developed a full-stack Telegram Mini-App gaming platform using React 18, Vite, Node.js, Express 5, MongoDB, and Mongoose. Built an HTML5 Canvas 2D car racing engine, implemented Telegram HMAC-SHA256 authentication, AES timestamp-based request verification, JWT/RBAC authorization, ticket wagering, game session management, rewards, tasks, referrals, withdrawals, TON/Solana validation, node-cron automation, and a React-based administrative dashboard.",

  resumeBulletPoints: [
    "Developed a full-stack Telegram Mini-App using React 18, Vite, Node.js, Express 5, MongoDB, and Mongoose for a Web3 Play-to-Earn gaming platform.",

    "Built an interactive HTML5 Canvas 2D car racing engine with requestAnimationFrame rendering, multi-lane touch/mouse controls, procedural obstacles, collision detection, particle effects, and audio integration.",

    "Implemented Telegram WebApp authentication using HMAC-SHA256 initData verification, JWT-based sessions, role-based authorization, and AES-encrypted timestamp validation for protected API requests.",

    "Designed and developed REST APIs for user management, game sessions, ticket wagering, rewards, tasks, referrals, leaderboards, advertisements, withdrawals, and administrative operations.",

    "Implemented MongoDB and Mongoose data models for users, game configuration, game history, withdrawals, tasks, advertisements, and reward tracking with atomic balance operations.",

    "Engineered the game session lifecycle including wager validation, balance deduction, duplicate active-game prevention, result settlement, payout validation, and automated stale-session expiration using node-cron.",

    "Integrated TON and Solana Web3 functionality for blockchain address validation, withdrawal processing, token price resolution, transaction verification, and non-custodial TON wallet workflows.",

    "Developed a React-based administrative dashboard with React-Bootstrap, Formik, Yup, SheetJS, and TonConnect for game configuration, user management, reporting, withdrawal approvals, and batch payout operations.",

    "Integrated Telegram Bot API, Adsgram, Ton-AI SDK, Dexscreener, Solscan, and Nodemailer to support onboarding, monetization, price conversion, transaction lookup, and administrator recovery workflows.",

    "Implemented responsive mobile-first interfaces, React Context state management, React Router navigation, Axios API integration, loading states, error handling, and toast-based user feedback."
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
    showBackendArchitecture: true,
    showApiIntegration: true,
    showTelegramIntegration: true,
    showWalletIntegration: true,
    showAuthentication: true,
    showSecurity: true,
    showDatabaseArchitecture: true,
    showGameEngine: true,
    showAdminDashboard: true,
    showBackgroundJobs: true,
    showResponsiveDesign: true,
    showUiUx: true,
    showChallenges: true,
    showTechnologyStack: true,
    showLearning: false,
    showResumeDescription: false
  }
};

export default stringDriveProject;
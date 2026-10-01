import stringArc8ModernSquare from '../assets/String Arc8 Modern Square.webp';
import stringArc8ModernLandscape from '../assets/String Arc8 Modern Landscape.webp';

const stringArc8ModernProject = {
  id: "string-arc8-modern",

  title: "String Arc8 Modern",

  subtitle: "Telegram Arcade Gaming, Rewards & Wallet Platform",

  category: "Full Stack Development",

  role: "Full Stack MERN Developer",

  description:
    "A Telegram-based arcade gaming and rewards platform built with Next.js, React, Node.js, Express, and MongoDB. The platform allows users to authenticate through Telegram, play arcade games such as Flappy Bird, Stack, and Doodle Jump, earn ticket-based rewards, complete tasks, invite friends, use boosters, manage profiles, and interact with wallet and withdrawal flows.",

  shortDescription:
    "A full-stack Telegram mini-app combining arcade gaming, rewards, referrals, tasks, boosters, user management, wallet flows, and admin operations using Next.js, Node.js, Express, and MongoDB.",

  image: stringArc8ModernSquare,

  coverImage: stringArc8ModernLandscape,

  technologies: [
    "Next.js",
    "React",
    "JavaScript",
    "JSX",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "REST APIs",
    "Axios",
    "React Context",
    "JWT",
    "Telegram WebApp SDK",
    "Telegram Bot API",
    "Bootstrap",
    "Material UI",
    "CSS Modules",
    "Custom SCSS",
    "Joi",
    "Multer",
    "TON Connect",
    "TON API",
    "Solana Web3.js",
    "Telegraf",
    "Nodemailer",
    "Swagger",
    "PM2"
  ],

  projectType: "Telegram Mini Application & Admin Platform",

  developmentType: "Full Stack MERN Application",

  overview: {
    title: "Project Overview",

    content:
      "String Arc8 Modern is a Telegram-integrated arcade gaming and rewards platform designed around a mobile-first gaming and reward experience. Users enter the application through Telegram, authenticate using Telegram WebApp data, access arcade games such as Flappy Bird, Stack, and Doodle Jump, claim daily rewards, complete tasks, invite friends, activate boosters, track ticket balances, and interact with wallet and withdrawal functionality. The application is structured across a Next.js and React frontend, a Node.js and Express backend, and a MongoDB database layer. The project also includes administrative functionality for managing users, games, rewards, banners, tasks, withdrawals, and reporting."
  },

  myRole: {
    title: "My Role",

    position: "Full Stack MERN Developer",

    description:
      "My responsibility in the String Arc8 Modern project covered both frontend and backend development. I worked on the Next.js and React-based Telegram mini-app, reusable UI components, game-related screens, authentication flows, profile management, rewards, tasks, referrals, boosters, tickets, leaderboards, and wallet-related interfaces. On the backend, I worked with Node.js, Express, MongoDB, and Mongoose to implement REST APIs, Telegram authentication, JWT-based protected routes, user management, reward logic, task and referral workflows, game history, booster handling, wallet-related operations, and admin functionality."
  },

  frontend: {
    title: "Frontend Development",

    description:
      "The frontend was developed using Next.js and React with JavaScript and JSX. The application follows a page-based architecture with reusable components, React Context for shared state, Next.js routing, Axios-based API communication, Telegram WebApp integration, responsive mobile-first layouts, and game-focused interfaces.",

    architecture: [
      "Next.js page-based React application",

      "React component-based architecture",

      "Reusable functional components",

      "Next.js file-based routing",

      "React Context for shared application state",

      "Component-level state management",

      "Axios-based REST API integration",

      "Centralized API configuration and service layer",

      "Telegram WebApp integration",

      "Telegram bot integration",

      "Responsive and mobile-first UI",

      "Reusable game cards and UI components",

      "Reusable loaders and modal components",

      "Game-oriented interactive layouts",

      "Loading and error state handling",

      "Toast-based user feedback",

      "Frontend authentication and session handling"
    ]
  },

  backend: {
    title: "Backend Development",

    description:
      "The backend was developed using Node.js and Express as a modular REST API layer connected to MongoDB through Mongoose. It handles Telegram-based authentication, JWT access tokens, protected APIs, user profiles, game sessions, rewards, tasks, referrals, boosters, tickets, transaction-related workflows, and administrative operations.",

    architecture: [
      "Node.js runtime",

      "Express.js REST API architecture",

      "Modular route and controller structure",

      "MongoDB database",

      "Mongoose data modeling",

      "Resource-based REST API modules",

      "JWT authentication",

      "Telegram initData validation",

      "Role-based authorization",

      "Joi request validation",

      "Centralized error handling",

      "CORS middleware",

      "Request logging with Morgan",

      "Multer file upload handling",

      "MongoDB aggregation and historical queries",

      "PM2 process management",

      "Environment-based configuration"
    ],

    responsibilities: [
      "Developed REST API functionality using Node.js and Express.",

      "Implemented Telegram WebApp initData authentication.",

      "Implemented JWT-based protected route access.",

      "Created and maintained MongoDB/Mongoose models.",

      "Implemented user registration and profile APIs.",

      "Implemented reward and daily reward workflows.",

      "Implemented task creation and completion workflows.",

      "Implemented referral tracking and reward logic.",

      "Implemented game catalog and game history APIs.",

      "Implemented booster creation, activation, and expiration logic.",

      "Implemented ticket-related backend workflows.",

      "Supported wallet and withdrawal-related API flows.",

      "Implemented administrative APIs for users, games, tasks, rewards, and banners.",

      "Added Joi validation for API requests.",

      "Implemented centralized API error responses.",

      "Integrated file upload processing.",

      "Supported Telegram bot messaging and notification functionality."
    ]
  },

  features: [
    {
      title: "Telegram Arcade Platform",

      description:
        "Built the main Telegram gaming experience where users enter through a Telegram mini app and access the platform's gaming and reward functionality.",

      items: [
        "Telegram mini-app entry",
        "Mobile-first dashboard",
        "Game discovery",
        "Game catalog",
        "Game detail screens",
        "Reward dashboard",
        "User profile",
        "Task dashboard",
        "Referral interface",
        "Booster store"
      ]
    },

    {
      title: "Arcade Games",

      description:
        "Implemented frontend and backend support for the platform's arcade game experiences.",

      items: [
        "Flappy Bird",
        "Stack",
        "Doodle Jump",
        "Game listing",
        "Game-specific routes",
        "Game session handling",
        "Score-related state",
        "Game history",
        "Game metadata",
        "Mobile game interfaces"
      ]
    },

    {
      title: "Ticket-Based Gameplay",

      description:
        "Implemented frontend and backend flows around the platform's ticket-based gameplay and reward model.",

      items: [
        "Ticket balance display",
        "Ticket-related API workflows",
        "Game participation flow",
        "Game ticket information",
        "Ticket status",
        "Game history",
        "Backend ticket processing",
        "Reward-related ticket handling"
      ]
    },

    {
      title: "User Authentication",

      description:
        "Implemented Telegram-based authentication combined with JWT session handling for protected application access.",

      items: [
        "Telegram WebApp authentication",
        "Telegram initData validation",
        "HMAC-based Telegram verification",
        "JWT access tokens",
        "Protected API routes",
        "Authenticated frontend state",
        "Token persistence",
        "Cookie-based session handling",
        "Local storage session handling",
        "Role-based backend authorization"
      ]
    },

    {
      title: "User Profile",

      description:
        "Developed user profile functionality across frontend and backend for displaying and managing account information.",

      items: [
        "Profile information",
        "Profile retrieval",
        "Profile updates",
        "User balance",
        "Booster status",
        "Withdrawal-related actions",
        "User session information",
        "Profile API integration",
        "Frontend profile state"
      ]
    },

    {
      title: "Daily Rewards",

      description:
        "Implemented the daily reward flow that allows users to access available rewards and track reward-related actions.",

      items: [
        "Daily reward display",
        "Reward claim flow",
        "Reward status",
        "Reward API integration",
        "Reward creation",
        "Reward claim processing",
        "Reward feedback",
        "Success and error handling"
      ]
    },

    {
      title: "Tasks & Advertising",

      description:
        "Implemented task-related frontend and backend workflows allowing users to view available activities and receive supported rewards.",

      items: [
        "Task listing",
        "Task details",
        "Task completion",
        "Advertising tasks",
        "Watch-based tasks",
        "Task reward processing",
        "Task status",
        "Task APIs",
        "Task validation",
        "Success and error feedback"
      ]
    },

    {
      title: "Referral System",

      description:
        "Implemented referral and invite functionality allowing users to invite friends and participate in referral-based reward flows.",

      items: [
        "Referral flow",
        "Invite friends",
        "Referral information",
        "Referral tracking",
        "Referral history",
        "Referral rewards",
        "Referral API integration",
        "Backend referral logic"
      ]
    },

    {
      title: "Booster System",

      description:
        "Developed frontend and backend functionality for creating, displaying, activating, purchasing, and managing boosters.",

      items: [
        "Booster listing",
        "Booster cards",
        "Booster information",
        "Booster activation",
        "Booster purchase flow",
        "Booster expiration logic",
        "Booster status",
        "TON-based booster interaction",
        "Backend booster management"
      ]
    },

    {
      title: "Leaderboard",

      description:
        "Implemented leaderboard functionality for displaying ranking and game-related user information.",

      items: [
        "Leaderboard page",
        "User rankings",
        "Ranking information",
        "Game-related data",
        "Leaderboard API",
        "Responsive leaderboard UI",
        "Backend ranking data"
      ]
    },

    {
      title: "Wallet & Withdrawal",

      description:
        "Implemented wallet-aware frontend and backend flows involving TON and Solana-related wallet validation and transaction workflows.",

      items: [
        "Wallet connection",
        "Wallet status",
        "Wallet balance availability",
        "TON wallet interaction",
        "TON transaction checks",
        "Solana wallet validation",
        "Withdrawal-related APIs",
        "Transaction tracking",
        "Wallet-related feedback",
        "Booster purchase workflow"
      ]
    },

    {
      title: "Game & Transaction History",

      description:
        "Implemented APIs and frontend interfaces for maintaining and displaying user activity, game history, and transaction-related information.",

      items: [
        "Game history",
        "Transaction records",
        "User activity",
        "Historical game data",
        "Transaction-related information",
        "MongoDB historical queries",
        "Frontend history interfaces"
      ]
    },

    {
      title: "Admin Management",

      description:
        "Supported a separate administrative surface for managing users, games, rewards, tasks, banners, withdrawals, and reporting.",

      items: [
        "User management",
        "Game management",
        "Reward management",
        "Task management",
        "Banner management",
        "Withdrawal workflows",
        "Admin dashboards",
        "User activity",
        "Historical reports",
        "Analytics-related data",
        "Admin settings",
        "Role-based admin access"
      ]
    }
  ],

  apiIntegration: {
    title: "API Integration",

    description:
      "Integrated the Next.js frontend with the Node.js and Express backend through Axios and centralized API configuration. The REST API layer supports authentication, profiles, games, game history, rewards, tasks, referrals, boosters, tickets, leaderboards, wallet-related operations, notifications, static content, and administrative functionality.",

    technologies: [
      "Axios",
      "REST APIs",
      "Node.js",
      "Express.js",
      "Next.js",
      "React",
      "MongoDB",
      "Mongoose",
      "Centralized API configuration"
    ],

    responsibilities: [
      "Integrated frontend API requests using Axios.",

      "Connected React and Next.js components with Express REST APIs.",

      "Integrated authentication APIs.",

      "Integrated user profile APIs.",

      "Integrated game catalog and game history APIs.",

      "Integrated task and reward APIs.",

      "Integrated referral APIs.",

      "Integrated booster and ticket APIs.",

      "Integrated leaderboard-related API data.",

      "Integrated wallet and withdrawal-related APIs.",

      "Handled API loading states.",

      "Handled API success and failure states.",

      "Provided user feedback using toast notifications."
    ]
  },

  telegramIntegration: {
    title: "Telegram Mini-App Integration",

    description:
      "The platform was designed specifically for Telegram users. Telegram WebApp functionality is used for application entry, user authentication, and Telegram-specific interaction flows, while Telegram bot functionality supports communication and engagement.",

    technologies: [
      "Telegram WebApp SDK",
      "Telegram Bot API",
      "Telegraf",
      "Telegram initData"
    ],

    responsibilities: [
      "Integrated Telegram WebApp functionality.",

      "Supported Telegram-based application entry.",

      "Implemented Telegram authentication flows.",

      "Worked with Telegram WebApp initialization data.",

      "Integrated Telegram-specific user interactions.",

      "Supported Telegram bot communication.",

      "Connected Telegram authentication with backend JWT sessions.",

      "Designed the frontend experience specifically for Telegram mobile users."
    ]
  },

  walletIntegration: {
    title: "Wallet & Blockchain Integration",

    description:
      "The project includes wallet-related functionality involving TON and Solana. The frontend supports wallet connection and user-facing wallet interactions, while backend flows include transaction validation and wallet-related processing.",

    technologies: [
      "TON Connect",
      "TON API",
      "TON Core",
      "Solana Web3.js"
    ],

    features: [
      "TON wallet connection",
      "Wallet status",
      "Balance availability checks",
      "TON transaction verification",
      "TON-based booster purchase flow",
      "Withdrawal-related processing",
      "Solana wallet validation",
      "Transaction-related API flows",
      "Wallet feedback states"
    ]
  },

  responsiveDesign: {
    title: "Responsive & Mobile-First Design",

    description:
      "The application was primarily designed for users accessing the platform through Telegram mini apps. The frontend uses responsive layouts and mobile-focused UI patterns to provide a consistent gaming and rewards experience across smaller screens.",

    features: [
      "Mobile-first layouts",
      "Responsive dashboard",
      "Responsive game catalog",
      "Responsive game cards",
      "Responsive game screens",
      "Responsive profile pages",
      "Responsive task pages",
      "Responsive reward interfaces",
      "Responsive booster store",
      "Responsive leaderboard",
      "Responsive wallet interfaces",
      "Mobile-friendly navigation",
      "Responsive modal workflows"
    ]
  },

  uiUx: {
    title: "UI / UX Features",

    description:
      "The frontend focuses on a customized arcade and reward-oriented experience rather than a generic application interface. Reusable components, interactive states, loading indicators, notifications, responsive layouts, and game-focused UI patterns are used throughout the application.",

    features: [
      "Game-focused visual design",
      "Telegram-first user experience",
      "Mobile-first navigation",
      "Loading indicators",
      "Toast notifications",
      "Confirmation modals",
      "Game cards",
      "Featured game cards",
      "Responsive cards",
      "Interactive buttons",
      "User feedback states",
      "Wallet connection feedback",
      "Task completion feedback",
      "Reward interaction states",
      "Game loading states"
    ]
  },

  navigation: {
    title: "Navigation & Routing",

    technology: "Next.js File-Based Routing",

    description:
      "Implemented application navigation using Next.js file-based routing and next/router. The routing structure supports the main user-facing sections, game-specific routes, profile flows, task pages, referral pages, store functionality, and wallet-related views.",

    areas: [
      "Home",
      "Game catalog",
      "Game pages",
      "Profile",
      "Store",
      "Tasks",
      "Invite Friends",
      "Flappy Bird",
      "Stack",
      "Doodle Jump",
      "Wallet-related pages",
      "Leaderboard views"
    ]
  },

  stateManagement: {
    title: "State Management",

    technology: "React Context API",

    description:
      "Used React Context for shared application state across the Next.js frontend. Component-level state is used for local UI behavior, loading states, gameplay states, and interactive controls.",

    responsibilities: [
      "Authentication state",
      "User profile state",
      "Ticket balance state",
      "Wallet state",
      "Session state",
      "User data",
      "Application-level state sharing",
      "Component-level state management",
      "Gameplay-related UI state",
      "Loading state management"
    ]
  },

  authentication: {
    title: "Authentication & Authorization",

    description:
      "Implemented Telegram-based authentication combined with JWT session handling. Telegram WebApp initialization data is validated by the backend before authenticated access is granted. Protected routes use JWT verification, while administrative functionality uses role-based access checks.",

    technologies: [
      "Telegram WebApp",
      "Telegram initData",
      "HMAC verification",
      "JWT",
      "Local Storage",
      "Cookies",
      "JWT Decode",
      "Role-based authorization"
    ],

    features: [
      "Telegram-based login",
      "Telegram initData verification",
      "HMAC-based authentication",
      "JWT access token generation",
      "Protected API routes",
      "JWT token handling",
      "Token persistence",
      "Local storage persistence",
      "Cookie-based session handling",
      "Authenticated user state",
      "Admin role checks",
      "Sub-admin role checks"
    ]
  },

  database: {
    title: "Database & Data Modeling",

    technology: "MongoDB + Mongoose",

    description:
      "Used MongoDB as the primary data layer with Mongoose schemas and models for managing users, games, tasks, rewards, boosters, transactions, referrals, game history, banners, contact records, and administrative settings.",

    models: [
      "Users",
      "Games",
      "Tasks",
      "Rewards",
      "Boosters",
      "Transactions",
      "Referral History",
      "Game History",
      "Banners",
      "Contact Us Records",
      "Admin Settings"
    ],

    responsibilities: [
      "Designed MongoDB data models using Mongoose.",

      "Implemented CRUD operations.",

      "Managed user-related data.",

      "Managed game and gameplay history data.",

      "Stored task and reward information.",

      "Stored referral records.",

      "Managed booster information.",

      "Tracked transaction-related data.",

      "Used aggregation for historical and analytical queries.",

      "Supported administrative reporting queries."
    ]
  },

  backendApiArchitecture: {
    title: "Backend API Architecture",

    technology: "Node.js + Express.js REST API",

    description:
      "The backend is organized into resource-based route modules and controllers. API groups separate user-facing functionality, game operations, rewards, tasks, boosters, tickets, notifications, static content, Solana-related operations, and administrative functionality.",

    routes: [
      "/api/v1/user",
      "/api/v1/admin",
      "/api/v1/game",
      "/api/v1/task",
      "/api/v1/rewards",
      "/api/v1/Booster",
      "/api/v1/ticket",
      "/api/v1/notification",
      "/api/v1/static",
      "/api/v1/solana"
    ],

    components: [
      "Express server",
      "Route modules",
      "Controllers",
      "Mongoose models",
      "Authentication middleware",
      "Authorization middleware",
      "Validation middleware",
      "Error handling middleware",
      "Upload middleware",
      "CORS middleware",
      "Request logging"
    ]
  },

  validationAndErrorHandling: {
    title: "Validation & Error Handling",

    technologies: [
      "Joi",
      "Express middleware",
      "Custom API error handling"
    ],

    features: [
      "Login validation",
      "Sign-up validation",
      "Task validation",
      "Reward validation",
      "Booster validation",
      "Profile validation",
      "Wallet request validation",
      "Admin action validation",
      "Centralized error responses",
      "API failure handling",
      "Frontend error feedback"
    ]
  },

  adminPanel: {
    title: "Admin Management",

    description:
      "The project includes a separate administrative surface and backend functionality for managing operational aspects of the platform, including users, games, rewards, banners, tasks, withdrawals, and reporting.",

    features: [
      "User management",
      "User activity",
      "Game management",
      "Reward management",
      "Task management",
      "Banner management",
      "Withdrawal workflows",
      "Admin dashboards",
      "Analytics-related information",
      "Historical reports",
      "Admin settings",
      "Role-based access"
    ]
  },

  fileUploads: {
    title: "File Upload & Media Handling",

    technology: "Multer",

    description:
      "Implemented backend file upload handling for supported profile and application asset workflows. The project also contains cloud storage helper support for services such as Cloudinary and AWS S3.",

    features: [
      "Multer-based upload handling",
      "Profile-related uploads",
      "Application asset processing",
      "Cloud storage helper support",
      "Media-related backend processing"
    ]
  },

  notifications: {
    title: "Notifications & Feedback",

    technologies: [
      "React Hot Toast",
      "React Toastify",
      "Telegram Bot",
      "Nodemailer"
    ],

    features: [
      "Login feedback",
      "Task completion notifications",
      "Reward feedback",
      "Wallet connection feedback",
      "Booster purchase feedback",
      "Success notifications",
      "Error notifications",
      "Application status feedback",
      "Telegram notifications",
      "Email-related backend support"
    ]
  },

  deployment: {
    title: "Deployment & Process Management",

    technologies: [
      "PM2",
      "Environment Variables",
      "Node.js"
    ],

    features: [
      "Node.js process management",
      "PM2 configuration",
      "Application restart handling",
      "Environment-based configuration",
      "Backend process management"
    ]
  },

  userExperience: {
    title: "User Experience",

    description:
      "The application focuses on providing a Telegram-first arcade gaming and rewards experience by combining game discovery, ticket-based gameplay, rewards, tasks, referrals, boosters, profiles, leaderboards, and wallet-related interactions within a mobile-oriented interface.",

    highlights: [
      "Telegram-first user experience",
      "Mobile-focused gaming interface",
      "Interactive arcade game catalog",
      "Flappy Bird gameplay",
      "Stack gameplay",
      "Doodle Jump gameplay",
      "Ticket-based gameplay flow",
      "Daily reward experience",
      "Task and advertising interactions",
      "Referral and invite flows",
      "Booster store experience",
      "Wallet connection flows",
      "Leaderboard experience",
      "Profile management",
      "Toast-based feedback",
      "Loading states",
      "Interactive modals"
    ]
  },

  challenges: [
    {
      title: "Telegram Mini-App Architecture",

      description:
        "Building the application around Telegram mini-apps required designing both authentication and user experience around Telegram WebApp behavior rather than treating the application as a traditional standalone website."
    },

    {
      title: "Full-Stack Authentication Flow",

      description:
        "The authentication flow required coordination between Telegram WebApp initialization data, backend verification, JWT generation, protected API routes, and frontend session persistence."
    },

    {
      title: "Mobile-First Gaming UI",

      description:
        "The application primarily targets Telegram mobile users, requiring responsive layouts, touch-friendly interactions, compact game interfaces, and mobile-focused navigation."
    },

    {
      title: "Multiple Game Interfaces",

      description:
        "The application includes separate frontend experiences for Flappy Bird, Stack, and Doodle Jump while maintaining consistent navigation, gameplay state handling, and reward-related interactions."
    },

    {
      title: "Complex Reward Workflows",

      description:
        "The platform contains connected workflows for daily rewards, tasks, referrals, tickets, boosters, game history, and user balances, requiring coordinated frontend interactions and backend business logic."
    },

    {
      title: "API-Driven Full-Stack Architecture",

      description:
        "The frontend depends heavily on backend APIs for authentication, users, games, tasks, rewards, boosters, tickets, leaderboards, and wallet-related workflows, requiring structured API communication and clear loading and error states."
    },

    {
      title: "Wallet-Aware User Experience",

      description:
        "TON and Solana-related functionality introduced wallet connection, validation, transaction checks, and withdrawal-related flows that required coordination between frontend interfaces and backend processing."
    },

    {
      title: "Admin Operations",

      description:
        "Supporting user management, game management, rewards, tasks, banners, withdrawals, and reporting required separate administrative APIs, data models, authorization checks, and operational workflows."
    }
  ],

  learning: [
    "Next.js application development",

    "React component architecture",

    "Next.js file-based routing",

    "Reusable frontend component development",

    "React Context state management",

    "REST API integration with Axios",

    "Node.js backend development",

    "Express.js REST API development",

    "MongoDB database design",

    "Mongoose data modeling",

    "Telegram WebApp integration",

    "Telegram mini-app development",

    "Telegram initData authentication",

    "JWT authentication",

    "Role-based authorization",

    "Local storage and cookie-based session handling",

    "Responsive mobile-first development",

    "Arcade gaming UI development",

    "Reward system development",

    "Task and referral workflow development",

    "Booster system development",

    "Game history management",

    "Wallet integration using TON Connect",

    "Solana wallet-related backend validation",

    "Joi API validation",

    "Centralized backend error handling",

    "Multer file upload handling",

    "MongoDB aggregation",

    "Admin dashboard API development",

    "PM2 process management",

    "Telegram bot integration"
  ],

  frontendTechnologyStack: {
    framework: [
      "Next.js",
      "React"
    ],

    language: [
      "JavaScript",
      "JSX"
    ],

    routing: [
      "Next.js File-Based Routing",
      "next/router"
    ],

    stateManagement: [
      "React Context",
      "Component State"
    ],

    apiCommunication: [
      "Axios",
      "REST APIs",
      "Centralized API Configuration"
    ],

    telegram: [
      "Telegram WebApp SDK",
      "Telegram Bot Integration"
    ],

    ui: [
      "Material UI",
      "Bootstrap",
      "CSS Modules",
      "Custom SCSS"
    ],

    wallet: [
      "TON Connect",
      "TON API",
      "TON Core",
      "Solana Web3.js"
    ],

    authentication: [
      "JWT",
      "JWT Decode",
      "Telegram initData"
    ],

    utilities: [
      "React Hot Toast",
      "React Toastify",
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
      "Telegram initData",
      "Telegram HMAC verification"
    ],

    authorization: [
      "USER",
      "ADMIN",
      "SUBADMIN role checks"
    ],

    api: [
      "REST APIs",
      "Express Route Modules",
      "Controllers"
    ],

    validation: [
      "Joi"
    ],

    middleware: [
      "CORS",
      "Morgan",
      "JWT verification",
      "Telegram authentication",
      "Error handling",
      "Multer"
    ],

    blockchain: [
      "TON API",
      "Solana Web3.js"
    ],

    messaging: [
      "Telegraf",
      "Telegram Bot API",
      "Nodemailer"
    ],

    documentation: [
      "Swagger UI"
    ],

    deployment: [
      "PM2",
      "dotenv",
      "Environment Configuration"
    ]
  },

  projectHighlights: [
    "Telegram-integrated arcade gaming platform",

    "Full-stack Next.js and Node.js application",

    "React-based mobile-first frontend",

    "Express.js REST API backend",

    "MongoDB and Mongoose data layer",

    "Flappy Bird game interface",

    "Stack game interface",

    "Doodle Jump game interface",

    "Ticket-based gameplay flows",

    "Telegram WebApp authentication",

    "Telegram initData validation",

    "JWT-based authentication",

    "Role-based authorization",

    "Daily rewards",

    "Task management",

    "Referral system",

    "Booster system",

    "Leaderboard functionality",

    "Game history",

    "Transaction-related workflows",

    "TON wallet integration",

    "Solana wallet validation",

    "Responsive mobile-first UI",

    "Reusable React components",

    "Axios REST API integration",

    "MongoDB data modeling",

    "Joi validation",

    "Admin management functionality",

    "Withdrawal-related workflows",

    "File upload handling",

    "PM2 process management"
  ],

  portfolioDescription:
    "Developed a full-stack Telegram arcade gaming and rewards platform using Next.js, React, Node.js, Express, and MongoDB. Built mobile-first gaming and reward experiences for Flappy Bird, Stack, and Doodle Jump, along with user profiles, daily rewards, tasks, referrals, boosters, tickets, leaderboards, game history, and wallet-related workflows. Implemented Telegram WebApp authentication, JWT-based sessions, Axios REST API integration, React Context state management, MongoDB/Mongoose data models, Express controllers and routes, Joi validation, administrative APIs, and TON/Solana-related wallet and transaction validation flows.",

  resumeDescription:
    "Developed a Telegram-based full-stack arcade gaming and rewards platform using Next.js, React, Node.js, Express, and MongoDB. Implemented Telegram authentication, JWT-protected APIs, game and reward workflows, tasks, referrals, boosters, user profiles, game history, admin management, and wallet-related functionality while building responsive mobile-first interfaces and MongoDB-backed REST APIs.",

  resumeBulletPoints: [
    "Developed a Telegram mini-app using Next.js and React with mobile-first arcade gaming, reward, task, referral, booster, and profile workflows.",

    "Built Node.js and Express REST APIs with MongoDB/Mongoose for users, games, rewards, tasks, referrals, boosters, transactions, and game history.",

    "Implemented Telegram WebApp initData verification and JWT-based authentication with protected API routes and role-based authorization.",

    "Developed reward, daily reward, ticket, referral, task, and booster workflows across frontend and backend layers.",

    "Integrated TON wallet connectivity and transaction validation along with Solana wallet-related validation for wallet and withdrawal flows.",

    "Developed administrative functionality for managing users, games, rewards, tasks, banners, withdrawals, and reporting.",

    "Implemented Joi validation, centralized API error handling, Multer-based file processing, MongoDB aggregation, and PM2 process management.",

    "Built responsive interfaces using Bootstrap, Material UI, CSS Modules, custom SCSS, reusable React components, loading states, and toast notifications."
  ],

  links: {
    telegramName: "",

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

    showDatabase: true,

    showAdminPanel: true,

    showValidationAndErrorHandling: true,

    showResponsiveDesign: true,

    showUiUx: true,

    showChallenges: true,

    showTechnologyStack: true,

    showDeployment: true,

    showLearning: false,

    showResumeDescription: false
  }
};

export default stringArc8ModernProject;
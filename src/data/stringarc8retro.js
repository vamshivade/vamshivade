import stringarc8RetroSquare from '../assets/String Arc8 Retro Square.png';

import stringarc8RetroLandscape from '../assets/String Arc8 Retro Landscape.png';

const stringarc8RetroProject = {
  id: "stringarc8-retro",
  title: "Stringarc8Retro",
  subtitle: "Telegram Retro Arcade Gaming & Rewards Platform",

  category: "Frontend Development",

  role: "Frontend Developer",

  description:
    "A Telegram-integrated retro arcade gaming and rewards platform built with Next.js and React, providing users with browser-based games such as Snake, Space Invaders, and Pacman, along with ticket-based gameplay, daily rewards, tasks, referrals, boosters, leaderboards, profile management, and wallet-related interactions.",

  shortDescription:
    "A mobile-first Telegram mini-app frontend for a retro arcade gaming and rewards platform featuring classic games, ticket-based gameplay, rewards, tasks, referrals, boosters, leaderboards, profiles, and wallet interactions.",

  image: stringarc8RetroSquare,

  coverImage: stringarc8RetroLandscape,

  technologies: [
    "Next.js",
    "React",
    "JavaScript",
    "JSX",
    "React Context",
    "Axios",
    "Telegram WebApp SDK",
    "Telegram Bot Integration",
    "Material UI",
    "Bootstrap",
    "CSS Modules",
    "Custom SCSS",
    "TON Connect",
    "TON Core",
    "Solana Web3",
    "Framer Motion",
    "Formik",
    "Yup",
    "React Hot Toast",
    "ApexCharts",
    "Chart.js",
    "React Share",
    "React Scroll",
    "React Dropzone",
    "JWT Decode",
    "QR Code React",
    "Lucide React"
  ],

  projectType: "Telegram Mini Application",

  developmentType: "Frontend Application",

  overview: {
    title: "Project Overview",

    content:
      "Stringarc8 Retro is a Telegram-integrated retro arcade gaming and rewards platform designed specifically for users accessing the application through Telegram mini-apps. The frontend is built with Next.js and React and provides a mobile-first experience where users can discover and play retro arcade games such as Snake, Space Invaders, and Pacman. The application also includes profile management, referrals, daily rewards, boosters, tasks, ticket balances, leaderboards, and wallet-related interactions."
  },

  myRole: {
    title: "My Role",

    position: "Frontend Developer",

    description:
      "My primary responsibility in the Stringarc8 Retro project was frontend application development. I worked on building the Telegram mini-app interface using Next.js and React, creating reusable UI components, implementing game discovery and game-related screens, integrating backend APIs using Axios, managing user and session state with React Context, implementing Telegram WebApp flows, developing profile, rewards, task, referral, booster, ticket, leaderboard, and wallet-related interfaces, and building responsive mobile-first experiences."
  },

  frontend: {
    title: "Frontend Development",

    description:
      "The frontend was developed using Next.js and React with JavaScript and JSX. The application follows a page-based architecture with reusable UI components, shared application state, Next.js file-based routing, centralized API communication, Telegram WebApp integration, responsive styling, and mobile-first game interfaces.",

    architecture: [
      "Next.js page-based React application",

      "React component-based architecture",

      "Reusable functional components",

      "Next.js file-based routing",

      "React Context for shared application state",

      "Component-level state management",

      "Axios-based REST API integration",

      "Centralized API configuration/service layer",

      "Telegram WebApp SDK integration",

      "Telegram bot integration",

      "Responsive and mobile-first UI",

      "Reusable game cards and UI components",

      "Reusable loaders and confirmation modals",

      "Game-oriented interactive layouts",

      "Loading and error state handling",

      "Toast-based user feedback"
    ]
  },

  features: [
    {
      title: "Retro Gaming Interface",

      description:
        "Developed a Telegram-focused gaming interface that allows users to discover and access browser-based retro arcade games through a mobile-first game catalog.",

      items: [
        "Retro arcade game catalog",

        "Featured game cards",

        "Game discovery interface",

        "Individual game pages",

        "Snake game interface",

        "Space Invaders game interface",

        "Pacman game interface",

        "Game-related navigation",

        "Interactive game screens",

        "Responsive gaming layouts"
      ]
    },

    {
      title: "Game Catalog",

      description:
        "Built the game discovery experience where users can view available games and navigate to individual game screens.",

      items: [
        "Game listing",

        "Game cards",

        "Featured games",

        "Game categories",

        "Game metadata from backend APIs",

        "Individual game navigation",

        "Responsive game catalog"
      ]
    },

    {
      title: "Ticket-Based Gameplay",

      description:
        "Implemented frontend flows around the platform's ticket-based gameplay system, including displaying ticket balances and supporting game-related user interactions.",

      items: [
        "Ticket balance display",

        "Game ticket information",

        "Game bet interface",

        "Ticket-related user interactions",

        "Game participation flow",

        "Ticket status display"
      ]
    },

    {
      title: "User Profile",

      description:
        "Developed user profile and account-related interfaces for managing and displaying user information within the Telegram mini-app.",

      items: [
        "User profile",

        "Profile information",

        "Profile editing",

        "Account-related information",

        "User session state",

        "Profile interaction flows"
      ]
    },

    {
      title: "Referral System",

      description:
        "Implemented frontend referral and invite flows that allow users to access referral-related information and participate in the platform's referral engagement system.",

      items: [
        "Referral flow",

        "Invite friends interface",

        "Referral information",

        "Referral history",

        "Referral-related navigation",

        "Referral reward information"
      ]
    },

    {
      title: "Daily Rewards",

      description:
        "Built frontend interfaces for the platform's daily reward functionality, allowing users to view and interact with available reward claims.",

      items: [
        "Daily reward interface",

        "Reward claim flow",

        "Reward status display",

        "Reward prompts",

        "Reward interaction states",

        "Success and error feedback"
      ]
    },

    {
      title: "Tasks & Advertising",

      description:
        "Developed the task interface where users can view available tasks and complete supported engagement activities such as advertising or watch-based tasks.",

      items: [
        "Task listing",

        "Task status",

        "Advertising tasks",

        "Watch-based tasks",

        "Task completion flow",

        "Task loading states",

        "Task success and error feedback"
      ]
    },

    {
      title: "Booster Store",

      description:
        "Implemented the booster store interface where users can view available boosters and interact with booster purchase flows.",

      items: [
        "Booster store",

        "Booster cards",

        "Booster information",

        "Booster purchase flow",

        "TON-based booster interaction",

        "Purchase status feedback"
      ]
    },

    {
      title: "Leaderboard",

      description:
        "Built leaderboard interfaces for displaying ranking and game-related user information.",

      items: [
        "Leaderboard page",

        "User rankings",

        "Ranking information",

        "Recent game-related data",

        "Responsive leaderboard UI",

        "Leaderboard API integration"
      ]
    },

    {
      title: "Wallet Integration",

      description:
        "Implemented frontend wallet-related interactions involving TON and Solana integrations, including wallet connection and balance availability checks.",

      items: [
        "Wallet connection",

        "Wallet status display",

        "Wallet balance availability",

        "TON wallet interaction",

        "Solana wallet interaction",

        "Wallet-related user flows",

        "Wallet connection feedback"
      ]
    },

    {
      title: "Authentication",

      description:
        "Implemented frontend authentication and session handling for users entering the application through Telegram.",

      items: [
        "Telegram WebApp login flow",

        "Telegram initData-based authentication flow",

        "JWT session handling",

        "Token persistence",

        "Local storage handling",

        "Cookie-based session persistence",

        "Authenticated user state"
      ]
    },

    {
      title: "Game & Transaction History",

      description:
        "Developed interfaces for displaying user-related game and transaction information within the application.",

      items: [
        "Game history",

        "Transaction-related information",

        "User activity",

        "Historical game information",

        "Responsive history interfaces"
      ]
    }
  ],

  apiIntegration: {
    title: "API Integration",

    description:
      "Integrated REST APIs into the Next.js frontend using Axios and a centralized API configuration/service layer. API-driven workflows support authentication, profiles, tasks, boosters, tickets, games, leaderboard data, rewards, referrals, and wallet-related functionality.",

    technologies: [
      "Axios",

      "REST APIs",

      "Next.js",

      "React",

      "Centralized ApiConfig/service layer"
    ],

    responsibilities: [
      "Integrated frontend API requests using Axios.",

      "Connected React and Next.js components with backend REST APIs.",

      "Integrated APIs for game metadata and game-related workflows.",

      "Integrated APIs for user profile information.",

      "Integrated APIs for tasks and rewards.",

      "Integrated APIs for boosters and ticket-related workflows.",

      "Integrated leaderboard-related API data.",

      "Handled API-driven user interactions.",

      "Managed loading states during API operations.",

      "Handled success and failure states.",

      "Provided user feedback using toast notifications."
    ]
  },

  telegramIntegration: {
    title: "Telegram Mini-App Integration",

    description:
      "The frontend was designed specifically for Telegram users and integrated Telegram WebApp functionality to support application entry, authentication, and Telegram-specific user interactions.",

    technologies: [
      "Telegram WebApp SDK",

      "Telegram Bot Integration"
    ],

    responsibilities: [
      "Integrated Telegram WebApp functionality into the frontend.",

      "Supported Telegram-based application entry.",

      "Worked with Telegram authentication flows.",

      "Handled Telegram WebApp readiness and application behavior.",

      "Integrated Telegram-specific user interaction flows.",

      "Designed the frontend around the Telegram mini-app experience."
    ]
  },

  walletIntegration: {
    title: "Wallet Integration",

    description:
      "The frontend includes wallet-related functionality using TON and Solana integrations. Wallet interactions are used for connection, balance availability checks, and booster-related user workflows.",

    technologies: [
      "TON Connect",

      "TON Core",

      "Solana Web3"
    ],

    features: [
      "Wallet connection",

      "Wallet status",

      "Balance availability checks",

      "TON wallet interaction",

      "Solana wallet interaction",

      "TON-based booster purchase flow",

      "Wallet-related user feedback"
    ]
  },

  responsiveDesign: {
    title: "Responsive & Mobile-First Design",

    description:
      "The application was designed primarily for users accessing the platform through Telegram mini-apps. The frontend uses responsive layouts and mobile-focused UI patterns to provide a consistent gaming and rewards experience on mobile devices.",

    features: [
      "Mobile-first layouts",

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
      "The frontend focuses on creating a customized game-oriented experience rather than a generic application interface. Interactive states, loading indicators, notifications, responsive layouts, and game-focused components are used throughout the application.",

    features: [
      "Game-focused visual design",

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
      "Implemented application navigation using Next.js file-based routing. The routing structure supports the main user-facing sections of the Telegram mini-app and individual game routes.",

    areas: [
      "Home",

      "Game catalog",

      "Profile",

      "Store",

      "Tasks",

      "Invite Friends",

      "Pacman Game",

      "Snake Game",

      "Space Invaders Game",

      "Wallet-related pages",

      "Leaderboard-related views"
    ]
  },

  stateManagement: {
    title: "State Management",

    technology: "React Context",

    description:
      "Used React Context for shared application state across the Next.js frontend. Shared state includes authentication information, user profile data, ticket balance, wallet state, session state, and user-related information.",

    responsibilities: [
      "Authentication state",

      "User profile state",

      "Ticket balance state",

      "Wallet state",

      "Session state",

      "User data",

      "Application-level state sharing",

      "Component-level state management"
    ]
  },

  authentication: {
    title: "Authentication & Session Handling",

    description:
      "The frontend integrates Telegram-based authentication with JWT session handling. Telegram WebApp initialization data is verified by the backend, while the frontend maintains the authenticated session using client-side token persistence.",

    technologies: [
      "Telegram WebApp",

      "JWT",

      "Local Storage",

      "Cookies",

      "JWT Decode"
    ],

    features: [
      "Telegram-based login",

      "Telegram initData authentication flow",

      "JWT token handling",

      "Token persistence",

      "Local storage persistence",

      "Cookie-based persistence",

      "Authenticated user state"
    ]
  },

  uiTechnologies: {
    title: "UI Technologies",

    technologies: [
      {
        name: "Material UI",

        usage:
          "Used to build reusable and responsive interface components within the application."
      },

      {
        name: "Bootstrap",

        usage:
          "Used for responsive layout structures and mobile-friendly interface development."
      },

      {
        name: "CSS Modules",

        usage:
          "Used for component-specific styling and isolated frontend styles."
      },

      {
        name: "Custom SCSS",

        usage:
          "Used for customized game-oriented visual styling and application-specific UI requirements."
      },

      {
        name: "Framer Motion",

        usage:
          "Used for frontend animations and interactive motion effects where required."
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
      {
        name: "ApexCharts",

        usage:
          "Used for interactive chart and visualization requirements."
      },

      {
        name: "react-apexcharts",

        usage:
          "Used to integrate ApexCharts into React components."
      },

      {
        name: "Chart.js",

        usage:
          "Used for chart and data visualization requirements."
      },

      {
        name: "react-chartjs-2",

        usage:
          "Used to integrate Chart.js visualizations into React components."
      }
    ]
  },

  formsAndValidation: {
    title: "Forms & User Interaction",

    technologies: [
      "Formik",

      "Yup"
    ],

    features: [
      "Profile forms",

      "User input handling",

      "Form state management",

      "Client-side validation",

      "User interaction states",

      "Form feedback"
    ]
  },

  notifications: {
    title: "Notifications & Feedback",

    technologies: [
      "React Hot Toast"
    ],

    features: [
      "Login feedback",

      "Task completion notifications",

      "Wallet connection feedback",

      "Reward feedback",

      "Booster purchase feedback",

      "Success notifications",

      "Error notifications",

      "Application status feedback"
    ]
  },

  userExperience: {
    title: "User Experience",

    description:
      "The frontend focuses on providing a mobile-first Telegram gaming experience by combining retro arcade game discovery, responsive interfaces, ticket-based gameplay, rewards, tasks, referrals, boosters, leaderboards, profile management, and wallet-related interactions.",

    highlights: [
      "Telegram-first user experience",

      "Mobile-focused gaming interface",

      "Interactive retro game catalog",

      "Classic arcade game access",

      "Ticket-based gameplay flow",

      "Reward-focused user interactions",

      "Daily reward experience",

      "Task and advertising interactions",

      "Referral and invite flows",

      "Booster store experience",

      "Wallet connection flows",

      "Leaderboard experience",

      "Responsive profile management",

      "Toast-based feedback",

      "Loading states",

      "Interactive modals"
    ]
  },

  challenges: [
    {
      title: "Telegram Mini-App Experience",

      description:
        "Building the frontend around Telegram mini-apps required designing the application for users entering through Telegram rather than treating it as a traditional standalone website."
    },

    {
      title: "Mobile-First Gaming UI",

      description:
        "The application targets Telegram users, making responsive layouts, mobile-friendly navigation, game cards, and touch-oriented interfaces important parts of the frontend implementation."
    },

    {
      title: "Multiple Game Interfaces",

      description:
        "The application includes separate frontend experiences for retro arcade games such as Snake, Space Invaders, and Pacman, requiring reusable UI patterns while supporting game-specific screens."
    },

    {
      title: "Complex User Flows",

      description:
        "The frontend contains multiple connected workflows including authentication, games, tickets, rewards, tasks, referrals, boosters, profiles, leaderboards, and wallet interactions, requiring organized navigation and reusable components."
    },

    {
      title: "API-Driven Frontend",

      description:
        "The application depends on backend API data for games, users, tasks, rewards, boosters, tickets, leaderboards, and wallet-related workflows, requiring structured API integration and clear loading and feedback states."
    },

    {
      title: "Wallet-Aware User Experience",

      description:
        "The frontend includes TON and Solana wallet-related interactions, requiring wallet connection states, balance availability checks, and user feedback within the Telegram gaming experience."
    }
  ],

  learning: [
    "Next.js application development",

    "React component architecture",

    "Next.js file-based routing",

    "Reusable frontend component development",

    "React Context state management",

    "REST API integration with Axios",

    "Telegram WebApp frontend integration",

    "Telegram mini-app development",

    "JWT session handling",

    "Local storage and cookie-based session persistence",

    "Responsive and mobile-first development",

    "Retro gaming UI development",

    "Wallet integration using TON Connect",

    "Solana wallet-related frontend integration",

    "Interactive game catalog development",

    "Reward and task workflow development",

    "Referral and leaderboard interfaces",

    "Booster store development",

    "Frontend form handling with Formik and Yup",

    "Frontend notifications and user feedback",

    "Responsive dashboard and data visualization"
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
      "Next.js File-Based Routing"
    ],

    stateManagement: [
      "React Context",

      "Component State"
    ],

    apiCommunication: [
      "Axios",

      "REST APIs",

      "Centralized ApiConfig Service"
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

      "TON Core",

      "Solana Web3"
    ],

    charts: [
      "ApexCharts",

      "react-apexcharts",

      "Chart.js",

      "react-chartjs-2"
    ],

    forms: [
      "Formik",

      "Yup"
    ],

    animation: [
      "Framer Motion"
    ],

    utilities: [
      "React Hot Toast",

      "React Share",

      "React Scroll",

      "React Dropzone",

      "JWT Decode",

      "QR Code React",

      "Lucide React"
    ]
  },

  projectHighlights: [
    "Telegram-integrated retro arcade gaming platform",

    "Next.js and React frontend",

    "Mobile-first Telegram mini-app experience",

    "Retro game catalog",

    "Snake game interface",

    "Space Invaders game interface",

    "Pacman game interface",

    "Ticket-based gameplay flows",

    "REST API integration using Axios",

    "Telegram WebApp integration",

    "JWT-based session handling",

    "React Context state management",

    "Daily rewards and task interfaces",

    "Referral and invite functionality",

    "Booster store and purchase flow",

    "Leaderboard interface",

    "User profile management",

    "TON wallet integration",

    "Solana wallet-related integration",

    "Responsive game-oriented UI",

    "Reusable React components",

    "Loading and error states",

    "Toast notifications"
  ],

  portfolioDescription:
    "Developed a Telegram-first retro gaming and rewards frontend using Next.js and React, providing users with a mobile-first game catalog and interactive experiences for Snake, Space Invaders, and Pacman. Implemented profile management, ticket-based gameplay flows, daily rewards, tasks, referrals, boosters, leaderboards, and wallet-related interactions. Integrated REST APIs using Axios, Telegram WebApp functionality, React Context for shared state, Next.js file-based routing, responsive MUI and Bootstrap interfaces, and TON and Solana wallet-related frontend workflows.",

  resumeDescription:
    "Developed a Telegram mini-app frontend using Next.js and React for a retro gaming and rewards platform, implementing responsive game discovery, profile, tasks, rewards, booster, referral, leaderboard, ticket, and wallet-aware user flows. Integrated Telegram WebApp logic, Axios-based REST APIs, JWT session handling, React Context state management, and responsive MUI, Bootstrap, and custom CSS interfaces.",

  resumeBulletPoints: [
    "Developed a Telegram mini-app frontend using Next.js and React for a retro arcade gaming platform with wallet-aware user flows.",

    "Implemented responsive game discovery, profile, tasks, rewards, referral, leaderboard, ticket, and booster pages using MUI, Bootstrap, and custom CSS.",

    "Integrated Telegram WebApp functionality, JWT-based session handling, local storage/cookie persistence, and React Context for authenticated user state.",

    "Built reusable UI components including game cards, loaders, confirmation modals, responsive layouts, and interactive action states.",

    "Integrated TON and Solana wallet-related interactions for wallet connectivity, balance checks, and booster purchase workflows.",

    "Optimized the frontend for mobile-first Telegram gameplay and reward-focused user interactions."
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

export default stringarc8RetroProject;
import stringGamesSquare from '../assets/String Games Square.webp';
import stringGamesLandscape from '../assets/String Games Landscape.webp';

const stringGamesProject = {
  id: "string-games",

  title: "String Games",

  subtitle: "Telegram Gaming & Rewards Platform",

  category: "Frontend Development",

  role: "Frontend Developer",

  description:
    "A Telegram-focused gaming and rewards platform built with React and JavaScript, providing users with interactive casino-style games, wallet features, daily rewards, advertising tasks, referrals, leaderboards, profiles, game history, and account management.",

  shortDescription:
    "A responsive Telegram gaming and rewards platform with interactive games, wallet workflows, rewards, referrals, leaderboards, and real-time game interactions.",

  image: stringGamesSquare,
  coverImage: stringGamesLandscape,

  technologies: [
    "React 18",
    "JavaScript",
    "JSX",
    "React Router",
    "Context API",
    "Axios",
    "REST APIs",
    "Socket.IO Client",
    "Bootstrap",
    "React-Bootstrap",
    "Custom CSS",
    "TON Connect",
    "Chart.js",
    "ApexCharts",
    "Recharts",
    "React Toastify",
    "React Hot Toast",
    "React Spinners"
  ],

  projectType: "Telegram Web Application",

  developmentType: "Frontend Application",

  overview: {
    title: "Project Overview",

    content:
      "String Games is a Telegram-optimized gaming and rewards platform developed with a React-based frontend. The application provides users with access to casino-style games, wallet functionality, daily rewards, advertising tasks, referrals, leaderboards, profiles, game history, and account management. The frontend was designed with a mobile-first approach to provide an interactive and responsive experience for Telegram users."
  },

  myRole: {
    title: "My Role",
    position: "Frontend Developer",
    description: "My primary responsibility in the String Games project was frontend application development. I worked on building React-based user interfaces, implementing reusable components, integrating REST APIs, managing frontend state, implementing navigation and user flows, connecting real-time Socket.IO events, developing wallet-related screens, and creating responsive interactive experiences."
  },


  frontend: {
    title: "Frontend Development",

    description:
      "The frontend was developed using React 18 with JavaScript and JSX. The application followed a component-based architecture with reusable UI components, shared application state, client-side routing, API integration, and real-time communication.",

    architecture: [
      "React component-based architecture",

      "Reusable functional components",

      "React Router based navigation",

      "React Context API for shared state",

      "Component-level state management",

      "REST API integration using Axios",

      "Socket.IO Client integration for real-time communication",

      "Responsive and mobile-first UI",

      "Modal-based user workflows",

      "Reusable layouts and interactive dashboard components"
    ]
  },

  features: [
    {
      title: "Gaming Interface",

      description:
        "Developed interactive casino-style gaming interfaces with responsive layouts, game-specific UI components, animations, audio feedback, and real-time game interactions.",

      items: [
        "Casino-style game interfaces",
        "Interactive game components",
        "Real-time game interactions",
        "Game history",
        "Game animations",
        "Audio feedback",
        "Interactive gaming UI"
      ]
    },

    {
      title: "Wallet Management",

      description:
        "Implemented frontend wallet-related workflows for displaying balances and providing users with wallet interaction screens.",

      items: [
        "Wallet balance display",
        "Wallet-related user interfaces",
        "Deposit screens",
        "Withdrawal screens",
        "Wallet interaction flows",
        "TON Connect integration"
      ]
    },

    {
      title: "Authentication",

      description:
        "Developed frontend authentication and session-related user flows for the Telegram gaming application.",

      items: [
        "Login interface",
        "OTP verification interface",
        "Session handling",
        "Telegram WebApp integration",
        "JWT-based API request handling",
        "Authentication-related modal flows"
      ]
    },

    {
      title: "Rewards",

      description:
        "Built frontend interfaces for user rewards and engagement features.",

      items: [
        "Daily rewards",
        "Advertising tasks",
        "Reward interaction flows",
        "Booster interfaces",
        "Task interfaces"
      ]
    },

    {
      title: "Referral System",

      description:
        "Developed frontend pages and components for referral-based user engagement.",

      items: [
        "Referral pages",
        "Referral information",
        "Referral-related user interactions",
        "Referral reward workflows"
      ]
    },

    {
      title: "Leaderboards",

      description:
        "Implemented leaderboard interfaces to display user rankings and engagement information.",

      items: [
        "Leaderboard page",
        "Ranking interface",
        "User ranking information",
        "Responsive leaderboard UI"
      ]
    },

    {
      title: "User Profile",

      description:
        "Built profile and account management interfaces for users to view and manage their account-related information.",

      items: [
        "User profile",
        "Account management",
        "Profile interactions",
        "Account history"
      ]
    },

    {
      title: "Transaction & Game History",

      description:
        "Developed frontend interfaces for displaying user activity and historical information.",

      items: [
        "Game history",
        "Transaction history",
        "Account activity",
        "Responsive history interfaces"
      ]
    },

    {
      title: "Real-Time Communication",

      description:
        "Integrated Socket.IO Client into the React application to support real-time game events and live application updates.",

      items: [
        "Socket.IO Client",
        "Real-time game events",
        "Live game updates",
        "Dynamic UI updates",
        "Interactive game communication"
      ]
    }
  ],

  apiIntegration: {
    title: "API Integration",

    description:
      "Integrated REST APIs into the React frontend using Axios. API-driven workflows were used across authentication, games, wallet-related functionality, rewards, referrals, and account-related features.",

    technologies: [
      "Axios",
      "REST APIs",
      "JavaScript",
      "React"
    ],

    responsibilities: [
      "Integrated frontend API requests using Axios.",

      "Connected React components with backend REST APIs.",

      "Handled API-driven user workflows.",

      "Managed frontend loading states during API operations.",

      "Provided user feedback through toast notifications.",

      "Handled API-related interaction states within reusable components."
    ]
  },

  realTime: {
    title: "Real-Time Features",

    description:
      "Socket.IO Client was integrated into the frontend to support real-time game interactions and live updates.",

    responsibilities: [
      "Connected React frontend components with Socket.IO events.",

      "Handled real-time game events.",

      "Updated the user interface based on live events.",

      "Supported interactive gaming experiences.",

      "Integrated real-time communication into the application workflow."
    ]
  },

  walletIntegration: {
    title: "Wallet Integration",

    description:
      "The project included blockchain-oriented wallet functionality. On the frontend, TON Connect was integrated to provide wallet connectivity and wallet-related user workflows.",

    technologies: [
      "TON Connect"
    ],

    features: [
      "Wallet connectivity",
      "Wallet-related UI",
      "Balance-related screens",
      "Wallet interaction workflows",
      "Deposit interface",
      "Withdrawal interface"
    ]
  },

  responsiveDesign: {
    title: "Responsive & Mobile-First Design",

    description:
      "The application was designed with Telegram users and mobile devices as an important target. The frontend used responsive layouts and mobile-focused navigation to provide a consistent experience across different screen sizes.",

    features: [
      "Mobile-first layouts",
      "Responsive components",
      "Responsive navigation",
      "Mobile-friendly game interfaces",
      "Responsive wallet screens",
      "Responsive profile pages",
      "Responsive leaderboard interfaces",
      "Responsive history pages",
      "Mobile-friendly modal workflows"
    ]
  },

  uiUx: {
    title: "UI / UX Features",

    description:
      "The frontend included several interactive elements and feedback mechanisms to create a smooth gaming experience.",

    features: [
      "Loading indicators",
      "Toast notifications",
      "Modal-based workflows",
      "Game animations",
      "Audio feedback",
      "Interactive dashboards",
      "Charts",
      "Responsive navigation",
      "Interactive game components",
      "Responsive cards",
      "User feedback states"
    ]
  },

  navigation: {
    title: "Navigation & Routing",

    technology: "React Router",

    description:
      "Implemented client-side navigation using React Router to organize different application sections and provide smooth navigation between user-facing pages.",

    areas: [
      "Gaming pages",
      "Wallet pages",
      "Rewards",
      "Referrals",
      "Leaderboards",
      "Profile",
      "Game history",
      "Transaction history",
      "Account management"
    ]
  },

  stateManagement: {
    title: "State Management",

    technology: "React Context API",

    description:
      "Used React Context API along with component state to manage shared user and game-related information across the application and reduce unnecessary state duplication between components.",

    responsibilities: [
      "Shared user state",
      "Game-related state",
      "Wallet-related application data",
      "Application-level state sharing",
      "Component state management",
      "Modal and interaction state"
    ]
  },

  uiTechnologies: {
    title: "UI Technologies",

    technologies: [
      {
        name: "Bootstrap",
        usage:
          "Used for responsive layout structures and common UI styling."
      },

      {
        name: "React-Bootstrap",
        usage:
          "Used Bootstrap components within the React application."
      },

      {
        name: "Custom CSS",
        usage:
          "Used for application-specific styling and customized gaming interfaces."
      },

      {
        name: "Chart.js",
        usage:
          "Used for chart and data visualization requirements."
      },

      {
        name: "ApexCharts",
        usage:
          "Used for interactive chart and visualization components."
      },

      {
        name: "Recharts",
        usage:
          "Used for React-based data visualization components."
      }
    ]
  },

  userExperience: {
    title: "User Experience",

    description:
      "The frontend focused on creating an interactive experience for Telegram users by combining responsive layouts, real-time interactions, game animations, wallet workflows, rewards, notifications, and intuitive navigation.",

    highlights: [
      "Mobile-focused user experience",

      "Interactive gaming screens",

      "Fast navigation between application sections",

      "Real-time game updates",

      "Clear wallet workflows",

      "Reward-focused user interactions",

      "Toast-based feedback",

      "Loading states",

      "Interactive modals",

      "Responsive UI components"
    ]
  },

  challenges: [
    {
      title: "Real-Time Game Interaction",

      description:
        "Working with real-time game events required integrating Socket.IO Client with the React frontend and updating the UI dynamically based on incoming events."
    },

    {
      title: "Mobile-First Gaming UI",

      description:
        "The application was designed for Telegram users, making responsive layouts and touch-friendly interactive components important parts of the frontend implementation."
    },

    {
      title: "Complex User Flows",

      description:
        "The application contained multiple interconnected workflows including authentication, games, wallets, rewards, referrals, leaderboards, profiles, and history, requiring organized routing and reusable components."
    },

    {
      title: "API-Driven Interface",

      description:
        "The frontend depended on REST API data for multiple application features, requiring integration of API requests with loading states, user feedback, and interactive UI components."
    },

    {
      title: "Interactive Gaming Experience",

      description:
        "Gaming interfaces required interactive components, animations, audio feedback, real-time updates, and responsive layouts to create a smooth user experience."
    }
  ],

  learning: [
    "React component architecture",

    "Building complex React applications",

    "Reusable frontend component development",

    "React Router navigation",

    "Context API state management",

    "REST API integration with Axios",

    "Socket.IO real-time communication",

    "Responsive and mobile-first development",

    "Telegram WebApp frontend development",

    "Wallet integration using TON Connect",

    "Interactive gaming UI development",

    "Frontend authentication workflows",

    "Working with asynchronous API operations",

    "Building reusable modal-based workflows",

    "Implementing responsive dashboards and data visualization"
  ],

  frontendTechnologyStack: {
    framework: [
      "React 18"
    ],

    language: [
      "JavaScript",
      "JSX"
    ],

    routing: [
      "React Router"
    ],

    stateManagement: [
      "React Context API",
      "Component State"
    ],

    apiCommunication: [
      "Axios",
      "REST APIs"
    ],

    realTime: [
      "Socket.IO Client"
    ],

    ui: [
      "Bootstrap",
      "React-Bootstrap",
      "Custom CSS"
    ],

    wallet: [
      "TON Connect"
    ],

    charts: [
      "Chart.js",
      "ApexCharts",
      "Recharts"
    ],

    utilities: [
      "React Toastify",
      "React Hot Toast",
      "React Spinners",
      "React Datepicker",
      "React Select"
    ]
  },

  projectHighlights: [
    "Telegram-focused React gaming application",

    "Mobile-first responsive frontend",

    "Interactive casino-style game interfaces",

    "REST API integration using Axios",

    "Real-time communication using Socket.IO Client",

    "Wallet and balance workflows",

    "TON Connect wallet integration",

    "Daily rewards and advertising task interfaces",

    "Referral and leaderboard functionality",

    "User profile and account management",

    "Game and transaction history",

    "Reusable React components",

    "Context API state management",

    "React Router navigation",

    "Interactive animations and UI feedback"
  ],

  portfolioDescription:
    "Developed a responsive React frontend for a Telegram gaming and rewards platform, implementing authentication, real-time game interactions, wallet management, rewards, referrals, leaderboards, user profiles, account history, and interactive gaming experiences. Integrated REST APIs using Axios, Socket.IO for real-time communication, React Context API for shared state, React Router for navigation, Bootstrap-based responsive layouts, and TON Connect for wallet connectivity.",

  resumeDescription:
    "Developed a React-based Telegram gaming and rewards frontend with interactive casino-style games, wallet workflows, rewards, referrals, leaderboards, profiles, and transaction history. Integrated REST APIs using Axios, real-time communication using Socket.IO, shared state using Context API, navigation using React Router, responsive Bootstrap-based UI, and TON Connect wallet connectivity.",

  resumeBulletPoints: [
    "Developed a React-based Telegram gaming interface supporting casino-style games, rewards, referrals, leaderboards, wallet features, and user account management.",

    "Integrated REST APIs using Axios and implemented Socket.IO Client communication for real-time game interactions and live updates.",

    "Built reusable frontend flows for authentication, OTP verification, wallet management, daily rewards, advertising tasks, profiles, transaction history, and referrals.",

    "Implemented responsive mobile-first layouts using Bootstrap, React-Bootstrap, custom CSS, animations, audio feedback, and interactive game components.",

    "Used React Context API and React Router to manage shared user and game state, navigation, modal flows, and application layouts.",

    "Integrated TON Connect for wallet connectivity and wallet-oriented frontend workflows."
  ],

  links: {
    telegramName:'string_gamesbot',
    liveDemo: "https://t.me/string_gamesbot",
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

    showRealTimeFeatures: true,

    showWalletIntegration: true,

    showResponsiveDesign: true,

    showChallenges: true,

    showTechnologyStack: true,

    showLearning: false,

    showResumeDescription: false
  }
};

export default stringGamesProject;

export const workInfoHead = ['period', "company", "title", "task", "projects"]

export const workInfoData = [
  {
    period: "November 2021 - March 2023",
    company: "Inbase Partners Taiwan Limited",
    title: "Frontend Developer",
    tasks: [
      'Debugging : Identify and resolve issues in the existing projects',
      'UI/UX Improvement : Collaborate with designer and PM to enhance the visual appeal and usability of our projects, ensuring an exceptional user experience.',
      'Legacy Code Refactoring : Analyze and refactor existing code to improve maintainability, readability, and scalability.',
      "New Feature Development: Take part in the creation and implementatio of new features.",
      "Rebuilding an Internal System : Utilize mock data to rebuild an existing internal system."
    ],
    projects: [
      {
        name: "OTC",
        description: [
          "A platform utilized for facilitating a significant volume of cryptocurrency trading.",
        ],
        url: "",
        tasks: [],
        tools: [
          "React.js (CRA)",
          "Bootstrap",
          "context - api",
          "Axios",
          "Yup",
          "Typescript",
        ],
        repos: {
          frontend: "",
          backend: "",
        },
      },
      {
        name: "Risk Management",
        description: [
          "A dashboard designed for internal use, displaying investment risks and financial status.",
        ],
        tasks: [],
        url: "",
        tools: ["React.js (Next)", "Zustand", "Axios", "Sass"],
        repos: {
          frontend: "",
          backend: "",
        },
      },
      {
        name: "Catch Matrix",
        description: [
          "A trading platform for traders to engage in various cryptocurrency transactions and monitor the latest prices across multiple exchanges.",
        ],
        tasks: [],
        url: "",
        tools: ["React.js (CRA)", "Redux", "Axios", "Yup", "Material UI"],
        repos: {
          frontend: "",
          backend: "",
        },
      },
      {
        name: "Catch Markets",
        description: [
          "A platform utilized for trading precious metals, catering to both traders and suppliers.",
        ],
        tasks: [],
        url: "",
        tools: [
          "React.js (CRA)",
          "Bootstrap",
          "Context Api",
          "Axios",
          "Yup",
          "Typescript",
        ],
        repos: {
          frontend: "",
          backend: "",
        },
      },

    ]

  }
]

export const projectData = [
  {
    name: "Memodown (Full stack)",
    url: "https://memodown.vercel.app/",
    videoUrl: 'https://youtu.be/Lz_jyg91-GE',
    description: [
      '- An app which can add note or idea and share with your friend conveniently.',
      "- Authorization : signup, login/ logout, change password",
      "- Rest API : CRUD maniupulation with MongoDB",
      "- Send Message to friend by his/her email"
    ],
    repos: {
      frontend: "https://github.com/jimmyisdev/memodown",
      backend: "https://github.com/jimmyisdev/memodown",
    },
    tools: [
      "Next13",
      "TypeScript",
      "Mongoose",
      "bcrypt",
      'JWT',
      'Tailwind',
      "Redux (RTK / ApiSice)",
      "Vercel",
    ],
    tasks: [],

  },
  {
    name: "Sake Sake 2023",
    url: "https://sake-sake2023.vercel.app/",
    description: [
      "- Search desired drink based on Cocktail Api",
      "- Make order and calculate the bill."
    ],
    repos: {
      frontend: "https://github.com/jimmyisdev/sake-sake2023",
    },
    tools: [
      "TypeScript",
      "React-NextJS",
      "Redux",
      'Cocktail Api',
      "Scss",
    ],
    tasks: [],
  },
  {
    name: "Dailygram (Full stack)",
    url: "https://dailygram2023.onrender.com/",
    description: [
      '- Authentication/ Authorization : signin/ login, JWT token, Encrypt password before storing in mongoDB',
      '- Fetch 3rd party API : get cat picture',
      '- Text format tool : reformat the text from horizontally to vertically',
      '- Data display : conditionally filter, ascending/ descending order',
      '- WebSocket : Show crypto currency price by symbol based on Binance data',
      '- Rest API  : connect MongoDB to execute CRUD function based on RestAPI',
      "- MVC structure : Modal(MongoDB data structure), View(React.js Frontend), Controller(Express.js)"
    ],
    repos: {
      frontend: "https://github.com/jimmyisdev/Dailygram-frontend",
      backend: "https://github.com/jimmyisdev/Dailygram-backend",
    },
    tools: [
      "React.js (CRA)",
      "Redux",
      "Express.js",
      'Rest API',
      'Axios',
      "MongoDB",
      "Mongoose",
      "JWT",
      "MaterialUI",
      "Render",
    ],
    tasks: [],

  },
  {
    name: "Dailygram Admin",
    url: "https://dailygram-admin2023.onrender.com/",
    description: [
      '- An admin dashboard to control Dailygram APP'
    ],
    repos: {
      frontend: "https://github.com/jimmyisdev/Dailygram-GraphQL-frontend",
      backend: "https://github.com/jimmyisdev/Dailygram-GraphQL-backend",
    },
    tools: [
      "React.js (CRA)",
      "Express.js",
      "Apollo server",
      "GraphQL",
      "MongoDB",
      "Mongoose",
      "Bootstrap",
      "Render",
    ],
    tasks: [],

  },
  {
    name: "sake-sake",
    url: "https://2021project-sakesake-react.netlify.app/",
    description: [
      '-This is a basic bar order system App'
    ],
    repos: {
      frontend: "https://github.com/jimmyisdev/sake-sake",
    },
    tools: ["React.js (CRA)", "Redux", "Sass", "Netlify"],
    tasks: [],

  },
];

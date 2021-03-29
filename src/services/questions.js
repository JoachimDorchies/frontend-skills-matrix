import { normalize, schema } from 'normalizr';
import { v4 as uuidv4 } from 'uuid';

export const getQuestions = () => [
  {
    name: 'Javascript',
    icon: 'mdi-language-javascript',
    categories: [
      {
        name: 'ES6',
        icon: 'mdi-language-javascript',
        levels: [
          {
            level: 1,
            description:
              'Knows the difference between let and var. Can write ES6 (arrow functions, template literals, object destructuring, etc.)',
            selected: false,
          },
          {
            level: 2,
            description:
              'Can setup a .babelrc. Knows Promises, Symbols, async/await, how class transpiles to ES5, browser compatibility.',
            selected: false,
          },
          {
            level: 3,
            description:
              "Has a strong knowledge of babel (popular babelrc configs, babel-polyfill, etc.). Knows upcoming features (ES7, ES8, etc.) and what's inside.",
            selected: false,
          },
        ],
      },
      {
        name: 'Browser',
        icon: 'mdi-google-chrome',
        levels: [
          {
            level: 1,
            description: 'Knows basic functions (setTimeout, parseInt, etc.)',
            selected: false,
          },
          {
            level: 2,
            description: 'Deep knowledge of a specific API (audio, webworker, etc.)',
            selected: false,
          },
          {
            level: 3,
            description: "Deeps knowledge on multiple APIs and what's available.",
            selected: false,
          },
        ],
      },
      {
        name: 'Tools',
        icon: 'mdi-tools',
        levels: [
          {
            level: 1,
            description: 'Console, DevTools, editor configured properly.',
            selected: false,
          },
          {
            level: 2,
            description:
              'Has a custom eslint config. Knows how to use debug mode, network, sources and plugins in DevTools.',
            selected: false,
          },
          {
            level: 3,
            description: 'DevTools profiling, device simulation, network throttling, heap stack.',
            selected: false,
          },
        ],
      },
    ],
  },
  {
    name: 'Frontend',
    icon: 'mdi-cellphone-link',
    categories: [
      {
        name: 'API',
        icon: 'mdi-api',
        levels: [
          {
            level: 1,
            description: 'Knows about REST and HTTP verbs. Can consume / feed JSON endpoints.',
            selected: false,
          },
          {
            level: 2,
            description:
              'Can test APIs through Postman, Swagger or any other API testing framework.',
            selected: false,
          },
          {
            level: 3,
            description: 'Knows about GraphQL, SOAP, multipart forms.',
            selected: false,
          },
        ],
      },
      {
        name: 'Webpack',
        icon: 'mdi-webpack',
        levels: [
          {
            level: 1,
            description: 'Can write and understand basic configuration file',
            selected: false,
          },
          {
            level: 2,
            description:
              'Knows most common plugins (HtmlWebpackPlugin, CopyWebpackPlugin, etc.) and when to use them.',
            selected: false,
          },
          {
            level: 3,
            description: 'Can set up a webpack config from scratch. Can configure hot loading.',
            selected: false,
          },
        ],
      },
      {
        name: 'Tests',
        icon: 'mdi-code-tags-check',
        levels: [
          {
            level: 1,
            description: 'Can write tests with a framework (Jest, Mocha, Cypress, etc.)',
            selected: false,
          },
          {
            level: 2,
            description:
              'Knows about unit tests, component tests and e2e tests. All critical paths are covered through tests.',
            selected: false,
          },
          {
            level: 3,
            description: "Work with TDD / BDD. Application's tests coverage is 100%.",
            selected: false,
          },
        ],
      },
      {
        name: 'CSS',
        icon: 'mdi-language-css3',
        levels: [
          {
            level: 1,
            description: 'CSS3 fundamentals',
            selected: false,
          },
          {
            level: 2,
            description:
              'CSS3, browser-compatability awareness, preprocessors (Sass), basic compilation process, variables, flexbox, grid, stylelint',
            selected: false,
          },
          {
            level: 3,
            description:
              'Deep knowledge of preprocessors, scss mixins, scss functions, neat animations, flexbox wizard.',
            selected: false,
          },
        ],
      },
      {
        name: 'Performance',
        icon: 'mdi-speedometer',
        levels: [
          {
            level: 1,
            description: 'Knows basics (TTFB, Speedindex, etc.) and how to benchmark them.',
            selected: false,
          },
          {
            level: 2,
            description: 'Knows programming pitfall regarding performance and how to avoid them.',
            selected: false,
          },
          {
            level: 3,
            description:
              'Has knowledge about whole development chain and how to maximize performance (networking, clustering, lazy loading, etc.)',
            selected: false,
          },
        ],
      },
      {
        name: 'Accessibility',
        icon: 'mdi-wheelchair-accessibility',
        levels: [
          {
            level: 1,
            description: 'Knows basics (alt, aria-*, etc.)',
            selected: false,
          },
          {
            level: 2,
            description: 'Has a certification (ARIA, Opquast, etc.)',
            selected: false,
          },
          {
            level: 3,
            description: 'Has an application in production that follows accessibility standards.',
            selected: false,
          },
        ],
      },
    ],
  },
  {
    name: 'Tools',
    icon: 'mdi-tools',
    categories: [
      {
        name: 'Git',
        icon: 'mdi-git',
        levels: [
          {
            level: 1,
            description: 'Mostly GUI (GitKraken, SourceTree, etc.) add, commit, pull, push, fetch',
            selected: false,
          },
          {
            level: 2,
            description: 'Mostly CLI rebase, cherry-pick, merge, revert, branching',
            selected: false,
          },
          {
            level: 3,
            description: 'Only CLI bisect, interactive rebase, submodules, git hooks',
            selected: false,
          },
        ],
      },
      {
        name: 'NPM / yarn',
        icon: 'mdi-npm',
        levels: [
          {
            level: 1,
            description: 'Can use yarn / npm. Mostly yarn install.',
            selected: false,
          },
          {
            level: 2,
            description: 'Can pick one with technical reasons. Knows about semver.',
            selected: false,
          },
          {
            level: 3,
            description: 'Knows concept of yarn workspaces and PnP.',
            selected: false,
          },
        ],
      },
      {
        name: 'DevOps',
        icon: 'mdi-gitlab',
        levels: [
          {
            level: 1,
            description: "Knows about CI/CD and how it is integrated in the project's lifecycle.",
            selected: false,
          },
          {
            level: 2,
            description:
              'Can create pipelines from scratch (.gitlab-ci.yml, Jenkins, etc.). Knows about containerization and can tweak images as needed.',
            selected: false,
          },
          {
            level: 3,
            description:
              'Can setup a powerful CI/CD strategy from scratch (orchestration, deployment automation, etc.). Knows about Kubernetes, IAC, etc.',
            selected: false,
          },
        ],
      },
    ],
  },
  {
    name: 'Programming',
    icon: 'mdi-file-code-outline',
    categories: [
      {
        name: 'Technological watch',
        icon: 'mdi-github',
        levels: [
          {
            level: 1,
            description:
              'Actively watches (Github, Twitter, Medium, etc.) and knows about new tech coming.',
            selected: false,
          },
          {
            level: 2,
            description: "Some projects with new tech to see what's inside.",
            selected: false,
          },
          {
            level: 3,
            description: 'Files / fixes issues on open source repos.',
            selected: false,
          },
        ],
      },
      {
        name: 'Database',
        icon: 'mdi-database',
        levels: [
          {
            level: 1,
            description: 'Can write basic read/write queries',
            selected: false,
          },
          {
            level: 2,
            description:
              'Knows ACID, ORM and patterns, document vs relational. Can implement a good relational design and write more complex queries (joins, subqueries, etc.)',
            selected: false,
          },
          {
            level: 3,
            description:
              'Has in-depth knowledge of multiple engine (Mongo, Postgres, ElasticSearch, etc.)',
            selected: false,
          },
        ],
      },
      {
        name: 'Data structures',
        icon: 'mdi-graph-outline',
        levels: [
          {
            level: 1,
            description:
              'Knows the difference between Arrays, LinkedLists, Map, etc., and when to uses them.',
            selected: false,
          },
          {
            level: 2,
            description: 'Knows space and time tradeoffs of basic data structures',
            selected: false,
          },
          {
            level: 3,
            description: 'Advanced knowledge of data structures (binary trees, graphs, etc.)',
            selected: false,
          },
        ],
      },
      {
        name: 'Algorithms',
        icon: 'mdi-code-braces',
        levels: [
          {
            level: 1,
            description: 'Knows how to sort and search through an array.',
            selected: false,
          },
          {
            level: 2,
            description:
              'Knowledge of recursion and how to implement it. Can search items through different data structures (array, linked lists, binary trees, etc.)',
            selected: false,
          },
          {
            level: 3,
            description: 'Knows advanced algorithms : greedy algorithm, divide and conquer, etc.',
            selected: false,
          },
        ],
      },
    ],
  },
  {
    name: 'Frameworks',
    icon: 'mdi-code-tags',
    categories: [
      {
        name: 'Angular',
        icon: 'mdi-angular',
        levels: [
          {
            level: 1,
            description:
              'Knows about Typescript, components, modules, services, data binding, event handling, components lifecycle.',
            selected: false,
          },
          {
            level: 2,
            description:
              'Knows about CLI, animations, lazy loading, guards, state management, dependency injection, common libraries (Material Angular, NgRx, RxJS, etc.) Some knowledge about performance.',
            selected: false,
          },
          {
            level: 3,
            description:
              'Can modify angular.json as needed. Knows about ViewChild, ContentChild, how the app is bootstraped, SSR. Deep knowledge about performance.',
            selected: false,
          },
        ],
      },
      {
        name: 'Vue.js',
        icon: 'mdi-vuejs',
        levels: [
          {
            level: 1,
            description:
              'Knows about single file components, data binding, event handling, components lifecycle.',
            selected: false,
          },
          {
            level: 2,
            description:
              'Knows about CLI, transitions, mixins, custom directives, state management, common libraries (vue-router, vuex, etc.) Some knowledge about performance.',
            selected: false,
          },
          {
            level: 3,
            description:
              'Knows about SSR, Vue instance ($refs, $root, $on, $once, $off). Deep knowledge about performance.',
            selected: false,
          },
        ],
      },
      {
        name: 'React',
        icon: 'mdi-react',
        levels: [
          {
            level: 1,
            description: 'Knows about JSX, data binding, event handling, components lifecycle.',
            selected: false,
          },
          {
            level: 2,
            description:
              'Knows the difference between stateless vs stateful and when to use each one, smart / dumb components, state management, common libraries (react-router, redux, etc.) Some knowledge about performance.',
            selected: false,
          },
          {
            level: 3,
            description:
              'Knows about common patterns and their pitfalls, HOC, SSR. Deep knowledge about performance.',
            selected: false,
          },
        ],
      },
    ],
  },
];

const getQuestionsWithId = () => {
  const addLevelZero = (category) => ({
    ...category,
    levels: [
      {
        level: 0,
        description: 'Never heard of it.',
        selected: false,
      },
    ].concat(category.levels),
  });

  const sortFn = (a, b) => {
    return a.name.localeCompare(b.name);
  };

  const addIdToLevel = (level) => ({
    ...level,
    id: uuidv4(),
  });

  const addIdToCategory = (category) => ({
    ...category,
    levels: category.levels.map(addIdToLevel),
    id: uuidv4(),
  });

  const addIdToPillar = (pillar) => ({
    ...pillar,
    categories: pillar.categories.map(addLevelZero).map(addIdToCategory).sort(sortFn),
    id: uuidv4(),
  });

  return getQuestions().map(addIdToPillar).sort(sortFn);
};

const level = new schema.Entity('levels', {});

const category = new schema.Entity('categories', {
  levels: [level],
});

const pillar = new schema.Entity('pillars', {
  categories: [category],
});

export const getQuestionsNormalized = () =>
  normalize(getQuestionsWithId(), new schema.Array(pillar));

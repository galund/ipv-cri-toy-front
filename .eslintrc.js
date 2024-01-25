module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
    es2020: true,
    jest: true,
  },
  globals: {
    sinon: true,
    expect: true,
    setupDefaultMocks: "readonly",
  },
  extends: ["prettier", "eslint:recommended", "plugin:prettier/recommended"],
  ignorePatterns: [
    "wallaby.conf.js",
    "node_modules",
    "coverage",
    ".aws-sam",
    "dist",
  ],
  rules: {
    "no-console": 2,
    "padding-line-between-statements": [
      "error",
      { blankLine: "any", prev: "*", next: "*" },
    ],
  },
  overrides: [
    {
      files: "src/**/*.test.js",
      plugins: ["jest"],
      extends: ["plugin:jest/style", "plugin:jest/recommended"],
    },
    {
      files: "test/**/*",
      rules: {
        "no-console": 0,
        "no-unused-vars": [
          "error",
          { varsIgnorePattern: "^_", argsIgnorePattern: "^_" },
        ],
      },
    },
  ],
};

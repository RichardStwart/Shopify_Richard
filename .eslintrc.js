module.exports = {
  parser: `@babel/eslint-parser`,
  parserOptions: {
    requireConfigFile: false,
    ecmaFeatures: {
      experimentalDecorators: true,
    },
  },
  plugins: [`eslint-plugin-prettier`],
  extends: [`eslint:recommended`, `google`, `eslint-config-prettier`],
  rules: {
    "prettier/prettier": `error`,
    curly: [2, `all`],
    "new-cap": `off`,
    "require-jsdoc": `off`,
    semi: `off`,
    "no-unused-expressions": `off`,
    camelcase: `off`,
    "no-invalid-this": `off`,
  },
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  ignorePatterns: [`**/models`],
  overrides: [
    {
      files: [`*.ts`],
      parser: `@typescript-eslint/parser`,
      plugins: [`@typescript-eslint/eslint-plugin`],
      extends: [`plugin:@typescript-eslint/recommended`],
      rules: {
        "@typescript-eslint/explicit-function-return-type": ["error"],
      },
    },
    {
      files: ["**/api/**/*.js"],
      rules: {
        "valid-jsdoc": ["off"],
      },
    },
  ],
}

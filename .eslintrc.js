module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        "project": "./tsconfig.json"
    },
    plugins: ["@typescript-eslint/eslint-plugin", "prettier"],
    extends: [
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
      'prettier/@typescript-eslint'
    ],
    rules: {
      'prettier/prettier': 0,
    }
};
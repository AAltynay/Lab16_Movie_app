module.exports = {  env: {
  browser: true,    es2021: true,
},  extends: [
  'plugin:vue/essential',    'eslint:recommended',
],  parserOptions: {
  ecmaVersion: 12,    sourceType: 'module',
},  rules: {
  // ваши правила ESLint  },
};
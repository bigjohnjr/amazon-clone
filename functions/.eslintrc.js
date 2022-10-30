module.exports = {
  root: true,
  env: {
    es2022: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "google",
    "prettier"
  ],
  rules: {
    quotes: ["error", "double"],
  },
};

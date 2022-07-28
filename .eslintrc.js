module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warning" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warning" : "off",
    quotes: [2, "double"],
    "react/react-in-jsx-scope": "off",
  },
};

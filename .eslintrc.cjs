module.exports = {
  root: true, // Define que esta es la configuración principal
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    },
    project: "./tsconfig.json" // Asegura que ESLint use la configuración de TypeScript
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb",
    "airbnb-typescript",
    "prettier" // Agrega compatibilidad con Prettier para formateo de código
  ],
  plugins: ["react", "react-hooks", "jsx-a11y", "@typescript-eslint"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }], // Permite ignorar variables con _
    "@typescript-eslint/explicit-module-boundary-types": "off", // No obliga a definir tipos en todas las funciones
    "react/jsx-filename-extension": [1, { "extensions": [".tsx"] }], // Permite JSX en archivos TSX
    "import/extensions": "off", // No requiere extensiones en importaciones
    "import/no-extraneous-dependencies": "off" // Evita problemas con dependencias de desarrollo
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};

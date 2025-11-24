import eslint from "@eslint/js";

export default [
  {
    ignores: ["node_modules/","eslint.config.mjs"],
    
  },

  eslint.configs.recommended,

  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "commonjs",
      globals: {
        __dirname: "readonly",
        require: "readonly",
        process: "readonly",
        console: "readonly"
      },
    }
  }
];
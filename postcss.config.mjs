module.exports = {
  plugins: [
    "tailwindcss",
    process.env.NODE_ENV === "production"
      ? [
          "@fullhuman/postcss-purgecss",
          {
            content: [
              './pages/**/*.{js,ts,jsx,tsx,mdx}',
              './components/**/*.{js,ts,jsx,tsx,mdx}',
              './app/**/*.{js,ts,jsx,tsx,mdx}',
            ],
            defaultExtractor: (content) =>
              content.match(/[\w-/:]+(?<!:)/g) || [],
          },
        ]
      : undefined, // Removido o valor 'false'
    "postcss-preset-env",
  ],
};
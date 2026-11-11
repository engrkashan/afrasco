/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx,mdx}",
    "./src/components/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;


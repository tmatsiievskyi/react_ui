/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  purge: [
    './src/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
    './index.html',
    './dist/**/*.{js,ts,jsx,tsx}',
  ],

  // content: [
  //   './index.html',
  //   './src/**/*.{js,ts,jsx,tsx}',
  //   './lib/**/*.{js,ts,jsx,tsx}',
  // ],
  theme: {
    extend: {
      colors: {
        border: 'rgb(var(--border) / <alpha-value>)',
        input: 'rgb(var(--input) / <alpha-value>)',
        primary: {
          DEFAULT: 'rgb(var(--primary) / <alpha-value>)',
          foreground: 'rgb(var(--primary-foreground) / <alpha-value>)',
        },
        light: {
          DEFAULT: 'rgb(var(--light) / <alpha-value>)',
          foreground: 'rgb(var(--light-foreground) / <alpha-value>)',
        },
        dark: {
          DEFAULT: 'rgb(var(--dark) / <alpha-value>)',
          foreground: 'rgb(var(--dark-foreground) / <alpha-value>)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

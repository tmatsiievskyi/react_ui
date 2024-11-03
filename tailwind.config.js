/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  purge: [
    './src/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
    './index.html',
    './dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(var(--primary) / <alpha-value>)',
        'primary-frg': 'hsl(var(--primary-frg) / <alpha-value>)',
        secondary: 'hsl(var(--secondary) / <alpha-value>)',
        'secondary-frg': 'hsl(var(--secoondary-frg) / <alpha-value>)',
        light: 'hsl(var(--light) / <alpha-value>)',
        'light-frg': 'hsl(var(--light-frg) / <alpha-value>)',
        dark: 'hsl(var(--dark) / <alpha-value>)',
        'dark-frg': 'hsl(var(--dark-frg) / <alpha-value>)',
        destructive: 'hsl(var(--destructive) / <alpha-value>)',
        'destructive-frg': 'hsl(var(--destructive-frg) / <alpha-value>)',
        success: 'hsl(var(--success) / <alpha-value>)',
        'success-frg': 'hsl(var(--success-frg) / <alpha-value>)',
        bkg: 'hsl(var(--bkg) / <alpha-value>)',
        'bkg-frg': 'hsl(var(--bkg-frg) / <alpha-value>)',
        'bkg-sec': 'hsl(var(--bkg-sec) / <alpha-value>)',
        'bkg-sec-frg': 'hsl(var(--bkg-sec-frg) / <alpha-value>)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

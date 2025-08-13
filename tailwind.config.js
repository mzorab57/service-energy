// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
 theme: {
    extend: {
      colors: {
        // Legacy colors (keep for backward compatibility)
        primary: '#3765B5',
        primaryLighter: '#648CC4',
        // secondary: '#6EB530',
        
        // Dynamic theme colors using CSS variables
        'theme-primary': 'var(--color-primary)',
        'theme-primary-light': 'var(--color-primaryLight)',
        'theme-background': 'var(--color-background)',
        'theme-surface': 'var(--color-surface)',
        'theme-text': 'var(--color-text)',
        'theme-text-secondary': 'var(--color-textSecondary)',
        'theme-border': 'var(--color-border)',
      },
    },
  },
  plugins: [],
}

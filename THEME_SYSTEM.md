# Multi-Theme System Documentation

## Overview

This project now includes a comprehensive multi-theme system that allows users to switch between different professional color schemes. The system is built using React Context, CSS variables, and Tailwind CSS.

## Features

- **6 Professional Themes**: Default Blue, Dark Professional, Nature Green, Royal Purple, Sunset Orange, and Minimal Gray
- **Persistent Theme Selection**: User's theme choice is saved in localStorage
- **Smooth Transitions**: All theme changes include smooth color transitions
- **Responsive Design**: Theme switcher works on both desktop and mobile
- **Easy Integration**: Simple to add theme support to new components

## Available Themes

### 1. Default Blue
- Primary: #3765B5 (Professional blue)
- Secondary: #6EB530 (Green accent)
- Best for: Corporate, professional websites

### 2. Dark Professional
- Primary: #60A5FA (Light blue)
- Background: #0F172A (Dark slate)
- Best for: Modern, tech-focused applications

### 3. Nature Green
- Primary: #059669 (Emerald green)
- Secondary: #84CC16 (Lime green)
- Best for: Environmental, health, organic businesses

### 4. Royal Purple
- Primary: #7C3AED (Purple)
- Secondary: #EC4899 (Pink accent)
- Best for: Creative, luxury, premium brands

### 5. Sunset Orange
- Primary: #EA580C (Orange)
- Secondary: #DC2626 (Red accent)
- Best for: Energy, food, entertainment industries

### 6. Minimal Gray
- Primary: #374151 (Dark gray)
- Secondary: #111827 (Almost black)
- Best for: Minimalist, professional, clean designs

## How to Use

### 1. Theme Switcher Component

The theme switcher is automatically included in the navigation bar. Users can:
- Click the theme button to open the dropdown
- See a preview of each theme with color swatches
- Click any theme to switch instantly
- The selection is automatically saved

### 2. Using Theme Colors in Components

Use the predefined theme color classes in your components:

```jsx
// Text colors
<h1 className="text-theme-text">Main heading</h1>
<p className="text-theme-text-secondary">Secondary text</p>
<span className="text-theme-primary">Primary colored text</span>

// Background colors
<div className="bg-theme-background">Main background</div>
<div className="bg-theme-surface">Card/surface background</div>
<div className="bg-theme-primary">Primary background</div>

// Borders
<div className="border border-theme-border">Themed border</div>

// Buttons
<button className="bg-theme-primary text-white hover:bg-theme-primary-light">
  Primary Button
</button>
```

### 3. Accessing Theme in Components

```jsx
import { useTheme } from '../contexts/ThemeContext';

const MyComponent = () => {
  const { currentTheme, themes, changeTheme, colors } = useTheme();
  
  return (
    <div>
      <h2>Current theme: {themes[currentTheme].name}</h2>
      <button onClick={() => changeTheme('dark')}>
        Switch to Dark Theme
      </button>
    </div>
  );
};
```

## Available Theme Classes

### Text Colors
- `text-theme-text` - Primary text color
- `text-theme-text-secondary` - Secondary text color
- `text-theme-primary` - Primary brand color
- `text-theme-secondary` - Secondary brand color
- `text-theme-accent` - Accent color

### Background Colors
- `bg-theme-background` - Main background
- `bg-theme-surface` - Cards, panels, elevated surfaces
- `bg-theme-primary` - Primary brand background
- `bg-theme-secondary` - Secondary brand background
- `bg-theme-accent` - Accent background

### Border Colors
- `border-theme-border` - Standard borders
- `border-theme-primary` - Primary brand borders
- `border-theme-secondary` - Secondary brand borders

## Adding New Themes

To add a new theme, edit `/src/contexts/ThemeContext.jsx`:

```jsx
export const themes = {
  // ... existing themes
  newTheme: {
    name: 'New Theme Name',
    colors: {
      primary: '#YOUR_PRIMARY_COLOR',
      primaryLight: '#YOUR_PRIMARY_LIGHT_COLOR',
      secondary: '#YOUR_SECONDARY_COLOR',
      accent: '#YOUR_ACCENT_COLOR',
      background: '#YOUR_BACKGROUND_COLOR',
      surface: '#YOUR_SURFACE_COLOR',
      text: '#YOUR_TEXT_COLOR',
      textSecondary: '#YOUR_SECONDARY_TEXT_COLOR',
      border: '#YOUR_BORDER_COLOR',
    }
  }
};
```

## File Structure

```
src/
├── contexts/
│   └── ThemeContext.jsx          # Theme context and theme definitions
├── components/
│   └── ui/
│       ├── ThemeSwitcher.jsx     # Theme switcher dropdown component
│       └── ThemePreview.jsx      # Theme preview grid component
├── index.css                     # CSS variables and default theme
└── tailwind.config.js           # Tailwind configuration with theme classes
```

## Technical Implementation

### CSS Variables
The system uses CSS variables that are dynamically updated when themes change:
- `--color-primary`
- `--color-primaryLight`
- `--color-secondary`
- `--color-accent`
- `--color-background`
- `--color-surface`
- `--color-text`
- `--color-textSecondary`
- `--color-border`

### Tailwind Integration
Custom Tailwind classes are defined in `tailwind.config.js` that reference the CSS variables, allowing for dynamic theming while maintaining Tailwind's utility-first approach.

### Persistence
Theme selection is automatically saved to `localStorage` and restored when the user returns to the site.

## Best Practices

1. **Always use theme classes** instead of hardcoded colors for new components
2. **Include transitions** for smooth theme switching: `transition-colors duration-300`
3. **Test all themes** when creating new components
4. **Use semantic color names** (primary, secondary, accent) rather than specific color names
5. **Maintain contrast ratios** for accessibility across all themes

## Troubleshooting

### Theme not applying
- Check that the component is wrapped in `<ThemeProvider>`
- Ensure you're using `theme-*` classes, not regular color classes
- Verify the CSS variables are being set in browser dev tools

### Colors not updating
- Clear localStorage: `localStorage.removeItem('website-theme')`
- Check browser console for JavaScript errors
- Ensure Tailwind is processing the theme classes

## Browser Support

The theme system works in all modern browsers that support:
- CSS Custom Properties (CSS Variables)
- ES6 JavaScript features
- localStorage API

This covers all browsers from 2016 onwards, including IE 11 with polyfills.
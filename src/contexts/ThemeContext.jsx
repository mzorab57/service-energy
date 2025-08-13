import React, { createContext, useContext, useState, useEffect } from 'react';

// Define available themes
export const themes = {
  light: {
    name: 'Light',
    colors: {
      primary: '#3765B5',
      primaryLight: '#648CC4',
      background: '#FFFFFF',
      surface: '#F8FAFC',
      text: '#1E293B',
      textSecondary: '#64748B',
      border: '#E2E8F0',
    }
  },
  dark: {
    name: 'Dark',
    colors: {
      primary: '#60A5FA',
      primaryLight: '#93C5FD',
      background: '#000000',
      surface: '#1E293B',
      text: '#F1F5F9',
      textSecondary: '#CBD5E1',
      border: '#334155',
    }
  }
};

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('dark');

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('website-theme');
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  // Apply theme colors to CSS variables
  useEffect(() => {
    const theme = themes[currentTheme];
    const root = document.documentElement;
    
    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });
    
    // Save to localStorage
    localStorage.setItem('website-theme', currentTheme);
  }, [currentTheme]);

  const changeTheme = (themeName) => {
    if (themes[themeName]) {
      setCurrentTheme(themeName);
    }
  };

  const value = {
    currentTheme,
    themes,
    changeTheme,
    colors: themes[currentTheme].colors,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
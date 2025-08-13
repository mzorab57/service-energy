import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const ThemePreview = () => {
  const { themes, changeTheme, currentTheme } = useTheme();

  return (
    <div className="bg-theme-surface p-6 rounded-lg border border-theme-border">
      <h3 className="text-lg font-semibold mb-4 text-theme-text">Available Themes</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(themes).map(([key, theme]) => (
          <div
            key={key}
            className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
              currentTheme === key
                ? 'border-theme-primary bg-theme-primary/5'
                : 'border-theme-border hover:border-theme-primary/50'
            }`}
            onClick={() => changeTheme(key)}
          >
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-medium text-theme-text">{theme.name}</h4>
              {currentTheme === key && (
                <div className="w-2 h-2 bg-theme-primary rounded-full"></div>
              )}
            </div>
            
            {/* Color preview */}
            <div className="flex space-x-1 mb-3">
              <div
                className="w-6 h-6 rounded border border-gray-300"
                style={{ backgroundColor: theme.colors.primary }}
                title="Primary"
              />
              <div
                className="w-6 h-6 rounded border border-gray-300"
                style={{ backgroundColor: theme.colors.secondary }}
                title="Secondary"
              />
              <div
                className="w-6 h-6 rounded border border-gray-300"
                style={{ backgroundColor: theme.colors.accent }}
                title="Accent"
              />
              <div
                className="w-6 h-6 rounded border border-gray-300"
                style={{ backgroundColor: theme.colors.background }}
                title="Background"
              />
            </div>
            
            {/* Mini preview */}
            <div 
              className="p-2 rounded text-xs"
              style={{ 
                backgroundColor: theme.colors.surface,
                color: theme.colors.text,
                border: `1px solid ${theme.colors.border}`
              }}
            >
              <div className="font-medium mb-1" style={{ color: theme.colors.primary }}>
                Sample Header
              </div>
              <div style={{ color: theme.colors.textSecondary }}>
                Sample text content
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThemePreview;
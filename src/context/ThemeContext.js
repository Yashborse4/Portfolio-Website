import React, { createContext, useContext, useState, useEffect } from 'react';
import { lightTheme, darkTheme } from '../styles/themes';

const ThemeContext = createContext();

// Hook to use theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Helper functions for localStorage
const getStoredTheme = () => {
  try {
    const stored = localStorage.getItem('portfolio-theme');
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.warn('Failed to parse stored theme:', error);
  }
  
  // Default to user's system preference
  return {
    isDarkMode: window.matchMedia('(prefers-color-scheme: dark)').matches
  };
};

const storeTheme = (themeData) => {
  try {
    localStorage.setItem('portfolio-theme', JSON.stringify(themeData));
  } catch (error) {
    console.warn('Failed to store theme:', error);
  }
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => getStoredTheme().isDarkMode);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Listen to system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleSystemThemeChange = (e) => {
      // Only apply system theme if user hasn't manually set a preference
      if (!localStorage.getItem('portfolio-theme-manual')) {
        setIsDarkMode(e.matches);
        storeTheme({ isDarkMode: e.matches });
      }
    };

    mediaQuery.addListener(handleSystemThemeChange);
    return () => mediaQuery.removeListener(handleSystemThemeChange);
  }, []);

  // Toggle theme function with smooth transition
  const toggleTheme = () => {
    setIsTransitioning(true);
    
    // Add a slight delay for visual feedback
    setTimeout(() => {
      const newIsDarkMode = !isDarkMode;
      setIsDarkMode(newIsDarkMode);
      
      // Store theme preference
      storeTheme({ isDarkMode: newIsDarkMode });
      localStorage.setItem('portfolio-theme-manual', 'true');
      
      setIsTransitioning(false);
    }, 150);
  };

  // Set theme function for direct theme setting
  const setTheme = (theme) => {
    const newIsDarkMode = theme === 'dark';
    setIsDarkMode(newIsDarkMode);
    storeTheme({ isDarkMode: newIsDarkMode });
    localStorage.setItem('portfolio-theme-manual', 'true');
  };

  // Reset to system theme
  const resetToSystemTheme = () => {
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(systemPrefersDark);
    storeTheme({ isDarkMode: systemPrefersDark });
    localStorage.removeItem('portfolio-theme-manual');
  };

  // Get current theme object
  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  const value = {
    // State
    isDarkMode,
    isTransitioning,
    theme: isDarkMode ? 'dark' : 'light',
    currentTheme,
    
    // Actions
    toggleTheme,
    setTheme,
    resetToSystemTheme,
    
    // Utils
    isManuallySet: () => localStorage.getItem('portfolio-theme-manual') === 'true',
    getSystemPreference: () => window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;

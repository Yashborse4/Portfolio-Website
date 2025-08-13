/**
 * Theme utility functions for color manipulation and helpers
 */

// Color manipulation utilities
export const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

export const rgbToHex = (r, g, b) => {
  return "#" + [r, g, b].map(x => {
    const hex = x.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }).join("");
};

export const addOpacity = (color, opacity) => {
  const rgb = hexToRgb(color);
  return rgb ? `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})` : color;
};

export const lighten = (color, amount) => {
  const rgb = hexToRgb(color);
  if (!rgb) return color;
  
  const r = Math.min(255, Math.floor(rgb.r + (255 - rgb.r) * amount));
  const g = Math.min(255, Math.floor(rgb.g + (255 - rgb.g) * amount));
  const b = Math.min(255, Math.floor(rgb.b + (255 - rgb.b) * amount));
  
  return rgbToHex(r, g, b);
};

export const darken = (color, amount) => {
  const rgb = hexToRgb(color);
  if (!rgb) return color;
  
  const r = Math.max(0, Math.floor(rgb.r * (1 - amount)));
  const g = Math.max(0, Math.floor(rgb.g * (1 - amount)));
  const b = Math.max(0, Math.floor(rgb.b * (1 - amount)));
  
  return rgbToHex(r, g, b);
};

// Theme detection utilities
export const detectSystemTheme = () => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const detectReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export const detectHighContrast = () => {
  return window.matchMedia('(prefers-contrast: high)').matches;
};

// Theme persistence utilities
export const THEME_STORAGE_KEY = 'portfolio-theme';
export const THEME_MANUAL_KEY = 'portfolio-theme-manual';

export const getStoredThemePreference = () => {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch (error) {
    console.warn('Failed to parse stored theme preference:', error);
    return null;
  }
};

export const setStoredThemePreference = (preference) => {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(preference));
  } catch (error) {
    console.warn('Failed to store theme preference:', error);
  }
};

export const isManualThemeSet = () => {
  return localStorage.getItem(THEME_MANUAL_KEY) === 'true';
};

export const setManualTheme = (isManual = true) => {
  if (isManual) {
    localStorage.setItem(THEME_MANUAL_KEY, 'true');
  } else {
    localStorage.removeItem(THEME_MANUAL_KEY);
  }
};

// CSS variable utilities
export const setCSSVariable = (name, value) => {
  document.documentElement.style.setProperty(name, value);
};

export const getCSSVariable = (name) => {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
};

export const updateThemeVariables = (theme) => {
  Object.entries(theme.colors).forEach(([key, value]) => {
    if (typeof value === 'object' && value !== null) {
      // Handle nested objects like glass
      Object.entries(value).forEach(([nestedKey, nestedValue]) => {
        setCSSVariable(`--${key}-${nestedKey}`, nestedValue);
      });
    } else {
      setCSSVariable(`--color-${key}`, value);
    }
  });

  Object.entries(theme.fonts).forEach(([key, value]) => {
    setCSSVariable(`--font-${key}`, value);
  });

  Object.entries(theme.sizes).forEach(([key, value]) => {
    if (typeof value === 'object' && value !== null) {
      Object.entries(value).forEach(([nestedKey, nestedValue]) => {
        setCSSVariable(`--${key}-${nestedKey}`, nestedValue);
      });
    } else {
      setCSSVariable(`--${key}`, value);
    }
  });
};

// Animation utilities
export const createTransition = (properties, duration = '0.3s', easing = 'ease') => {
  const props = Array.isArray(properties) ? properties.join(', ') : properties;
  return `${props} ${duration} ${easing}`;
};

export const easingFunctions = {
  ease: 'ease',
  easeIn: 'ease-in',
  easeOut: 'ease-out',
  easeInOut: 'ease-in-out',
  spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  smooth: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  swift: 'cubic-bezier(0.4, 0, 0.2, 1)',
};

// Glassmorphism utilities
export const createGlassEffect = (
  backdrop = 'rgba(255, 255, 255, 0.25)',
  blur = '12px',
  border = 'rgba(255, 255, 255, 0.18)',
  shadow = '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
) => ({
  background: backdrop,
  backdropFilter: `blur(${blur})`,
  WebkitBackdropFilter: `blur(${blur})`,
  border: `1px solid ${border}`,
  boxShadow: shadow,
});

// Responsive utilities
export const breakpointValues = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};

export const mediaUp = (breakpoint) => 
  `@media (min-width: ${breakpointValues[breakpoint]}px)`;

export const mediaDown = (breakpoint) => 
  `@media (max-width: ${breakpointValues[breakpoint] - 1}px)`;

export const mediaBetween = (minBreakpoint, maxBreakpoint) => 
  `@media (min-width: ${breakpointValues[minBreakpoint]}px) and (max-width: ${breakpointValues[maxBreakpoint] - 1}px)`;

// Accessibility utilities
export const getFocusStyle = (color = 'var(--color-accent)', width = '2px') => ({
  outline: `${width} solid ${color}`,
  outlineOffset: '2px',
});

export const getVisuallyHiddenStyle = () => ({
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: 0,
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  border: 0,
});

// Theme validation utilities
export const validateThemeStructure = (theme) => {
  const requiredKeys = ['colors', 'fonts', 'sizes'];
  const missingKeys = requiredKeys.filter(key => !theme[key]);
  
  if (missingKeys.length > 0) {
    console.warn('Theme missing required keys:', missingKeys);
    return false;
  }
  
  return true;
};

export default {
  // Color utilities
  hexToRgb,
  rgbToHex,
  addOpacity,
  lighten,
  darken,
  
  // Detection utilities
  detectSystemTheme,
  detectReducedMotion,
  detectHighContrast,
  
  // Persistence utilities
  getStoredThemePreference,
  setStoredThemePreference,
  isManualThemeSet,
  setManualTheme,
  
  // CSS utilities
  setCSSVariable,
  getCSSVariable,
  updateThemeVariables,
  
  // Animation utilities
  createTransition,
  easingFunctions,
  
  // Glassmorphism utilities
  createGlassEffect,
  
  // Responsive utilities
  breakpointValues,
  mediaUp,
  mediaDown,
  mediaBetween,
  
  // Accessibility utilities
  getFocusStyle,
  getVisuallyHiddenStyle,
  
  // Validation utilities
  validateThemeStructure,
};

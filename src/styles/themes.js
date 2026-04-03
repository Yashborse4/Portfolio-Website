export const lightTheme = {
  colors: {
    // Base colors - Warm Bronze Theme (Light)
    background: '#f5f5f0',
    backgroundSolid: '#f5f5f0',
    surface: '#ffffff',
    surfaceHover: '#fafaf8',
    primary: '#b87333', // Bronze/Copper
    primaryGlass: 'rgba(184, 115, 51, 0.12)',
    secondary: '#d4956a', // Lighter bronze
    secondaryGlass: 'rgba(212, 149, 106, 0.12)',

    // Text colors
    text: '#1a1a1a',
    textSecondary: '#555555',
    textMuted: '#999999',
    textOnGlass: '#1a1a1a',

    // Interactive colors
    accent: '#b87333',
    accentGlass: 'rgba(184, 115, 51, 0.12)',
    success: '#2d8a56',
    successGlass: 'rgba(45, 138, 86, 0.12)',
    warning: '#d4956a',
    warningGlass: 'rgba(212, 149, 106, 0.12)',
    error: '#c0392b',
    errorGlass: 'rgba(192, 57, 43, 0.12)',

    // Glassmorphism effects
    glass: {
      backdrop: 'rgba(255, 255, 255, 0.85)',
      backdropHover: 'rgba(255, 255, 255, 0.95)',
      blur: '20px',
      border: 'rgba(0, 0, 0, 0.08)',
      shadow: '0 4px 24px rgba(0, 0, 0, 0.06)'
    },

    // Terminal
    terminalBg: '#1a1a1a',
    terminalText: '#e0e0e0',
    terminalPrompt: '#b87333',
    terminalGreen: '#4ade80',

    // Legacy support
    border: 'rgba(0, 0, 0, 0.08)',
    shadow: '0 4px 24px rgba(0, 0, 0, 0.06)'
  },
  fonts: {
    primary: "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
    secondary: "'Playfair Display', Georgia, 'Times New Roman', serif",
    mono: "'Space Mono', 'Fira Code', 'SF Mono', Monaco, monospace"
  },
  sizes: {
    maxWidth: '1200px',
    headerHeight: '70px',
    borderRadius: {
      sm: '0.375rem',
      md: '0.5rem',
      lg: '0.75rem',
      xl: '1rem',
      full: '9999px'
    }
  }
};

export const darkTheme = {
  colors: {
    // Base colors - Warm Bronze Theme (Dark)
    background: '#0a0a0a',
    backgroundSolid: '#0a0a0a',
    surface: '#141414',
    surfaceHover: '#1e1e1e',
    primary: '#b87333', // Bronze/Copper
    primaryGlass: 'rgba(184, 115, 51, 0.15)',
    secondary: '#d4956a',
    secondaryGlass: 'rgba(212, 149, 106, 0.15)',

    // Text colors
    text: '#f5f5f0',
    textSecondary: '#a0a0a0',
    textMuted: '#666666',
    textOnGlass: '#f5f5f0',

    // Interactive colors
    accent: '#d4956a',
    accentGlass: 'rgba(212, 149, 106, 0.15)',
    success: '#4ade80',
    successGlass: 'rgba(74, 222, 128, 0.15)',
    warning: '#fbbf24',
    warningGlass: 'rgba(251, 191, 36, 0.15)',
    error: '#f87171',
    errorGlass: 'rgba(248, 113, 113, 0.15)',

    // Glassmorphism effects
    glass: {
      backdrop: 'rgba(20, 20, 20, 0.85)',
      backdropHover: 'rgba(30, 30, 30, 0.92)',
      blur: '20px',
      border: 'rgba(255, 255, 255, 0.08)',
      shadow: '0 4px 24px rgba(0, 0, 0, 0.3)'
    },

    // Terminal
    terminalBg: '#0d0d0d',
    terminalText: '#e0e0e0',
    terminalPrompt: '#b87333',
    terminalGreen: '#4ade80',

    // Legacy support
    border: 'rgba(255, 255, 255, 0.08)',
    shadow: '0 4px 24px rgba(0, 0, 0, 0.3)'
  },
  fonts: {
    primary: "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
    secondary: "'Playfair Display', Georgia, 'Times New Roman', serif",
    mono: "'Space Mono', 'Fira Code', 'SF Mono', Monaco, monospace"
  },
  sizes: {
    maxWidth: '1200px',
    headerHeight: '70px',
    borderRadius: {
      sm: '0.375rem',
      md: '0.5rem',
      lg: '0.75rem',
      xl: '1rem',
      full: '9999px'
    }
  }
};

export const breakpoints = {
  xs: '0px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px'
};

const themes = { lightTheme, darkTheme, breakpoints };

export default themes;

export const lightTheme = {
  colors: {
    // Base colors - Tazrin Theme (Light - Violet Polish)
    background: '#F2F4F7', // Light Gray
    backgroundSolid: '#F2F4F7',
    surface: '#FFFFFF',
    surfaceHover: '#FFFFFF',
    primary: '#8B5CF6', // Electric Violet
    primaryGlass: 'rgba(139, 92, 246, 0.15)',
    secondary: '#A78BFA', // Lighter Violet (Accent)
    secondaryGlass: 'rgba(167, 139, 250, 0.15)',

    // Text colors
    text: '#2D3436', // Dark Slate
    textSecondary: '#636E72', // Muted Gray
    textMuted: '#B2BEC3',
    textOnGlass: '#2D3436',

    // Interactive colors
    accent: '#A78BFA',
    accentGlass: 'rgba(167, 139, 250, 0.15)',
    success: '#00B894',
    successGlass: 'rgba(0, 184, 148, 0.15)',
    warning: '#FD79A8',
    warningGlass: 'rgba(253, 121, 168, 0.15)',
    error: '#D63031',
    errorGlass: 'rgba(214, 48, 49, 0.15)',

    // Glassmorphism effects
    glass: {
      backdrop: 'rgba(255, 255, 255, 0.8)',
      backdropHover: 'rgba(255, 255, 255, 0.95)',
      blur: '20px',
      border: 'rgba(148, 163, 184, 0.2)',
      shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
    },

    // Legacy support
    border: 'rgba(148, 163, 184, 0.2)',
    shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
  },
  fonts: {
    primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif",
    secondary: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
    mono: "'Fira Code', 'SF Mono', Monaco, Inconsolata, 'Roboto Mono', 'Source Code Pro', monospace"
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
    // Base colors - Tazrin Theme (Dark - Violet Polish)
    background: '#0F172A', // Rich Slate Navy (Depth)
    backgroundSolid: '#0F172A',
    surface: '#1E293B', // Slate Grey (Card background)
    surfaceHover: '#334155', // Lighter Slate for hover
    primary: '#8B5CF6', // Electric Violet
    primaryGlass: 'rgba(139, 92, 246, 0.15)',
    secondary: '#A78BFA', // Lighter Violet (Accent)
    secondaryGlass: 'rgba(167, 139, 250, 0.15)',

    // Text colors
    text: '#F8FAFC', // Off-white for readability
    textSecondary: '#94A3B8', // Slate 400
    textMuted: '#64748B', // Slate 500
    textOnGlass: '#F8FAFC',

    // Interactive colors
    accent: '#A78BFA',
    accentGlass: 'rgba(167, 139, 250, 0.15)',
    success: '#10B981', // Emerald
    successGlass: 'rgba(16, 185, 129, 0.15)',
    warning: '#F59E0B', // Amber
    warningGlass: 'rgba(245, 158, 11, 0.15)',
    error: '#EF4444', // Red
    errorGlass: 'rgba(239, 68, 68, 0.15)',

    // Glassmorphism effects
    glass: {
      backdrop: 'rgba(17, 17, 17, 0.8)',
      backdropHover: 'rgba(23, 23, 23, 0.9)',
      blur: '20px',
      border: 'rgba(255, 255, 255, 0.1)',
      shadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.25)'
    },

    // Legacy support
    border: 'rgba(255, 255, 255, 0.1)',
    shadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.25)'
  },
  fonts: {
    primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif",
    secondary: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
    mono: "'Fira Code', 'SF Mono', Monaco, Inconsolata, 'Roboto Mono', 'Source Code Pro', monospace"
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

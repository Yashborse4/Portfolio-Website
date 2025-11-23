export const lightTheme = {
  colors: {
    // Base colors - Clean white theme
    background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
    backgroundSolid: '#f0f9ff',
    surface: 'rgba(255, 255, 255, 0.9)',
    surfaceHover: 'rgba(240, 249, 255, 1)',
    primary: '#3b82f6',
    primaryGlass: 'rgba(59, 130, 246, 0.1)',
    secondary: '#64748b',
    secondaryGlass: 'rgba(100, 116, 139, 0.1)',
    
    // Text colors
    text: '#1e293b',
    textSecondary: '#475569',
    textMuted: '#94a3b8',
    textOnGlass: '#1e293b',
    
    // Interactive colors
    accent: '#06b6d4',
    accentGlass: 'rgba(6, 182, 212, 0.1)',
    success: '#10b981',
    successGlass: 'rgba(16, 185, 129, 0.1)',
    warning: '#f59e0b',
    warningGlass: 'rgba(245, 158, 11, 0.1)',
    error: '#ef4444',
    errorGlass: 'rgba(239, 68, 68, 0.1)',
    
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
    // Base colors - White/Blue theme (Uniform)
    background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%)',
    backgroundSolid: '#ffffff',
    surface: 'rgba(255, 255, 255, 0.95)',
    surfaceHover: 'rgba(248, 250, 252, 1)',
    primary: '#3b82f6',
    primaryGlass: 'rgba(59, 130, 246, 0.1)',
    secondary: '#64748b',
    secondaryGlass: 'rgba(100, 116, 139, 0.1)',
    
    // Text colors
    text: '#0f172a',
    textSecondary: '#475569',
    textMuted: '#94a3b8',
    textOnGlass: '#0f172a',
    
    // Interactive colors
    accent: '#06b6d4',
    accentGlass: 'rgba(6, 182, 212, 0.1)',
    success: '#10b981',
    successGlass: 'rgba(16, 185, 129, 0.1)',
    warning: '#f59e0b',
    warningGlass: 'rgba(245, 158, 11, 0.1)',
    error: '#ef4444',
    errorGlass: 'rgba(239, 68, 68, 0.1)',
    
    // Glassmorphism effects
    glass: {
      backdrop: 'rgba(255, 255, 255, 0.8)',
      backdropHover: 'rgba(255, 255, 255, 0.95)',
      blur: '20px',
      border: 'rgba(226, 232, 240, 0.8)',
      shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
    },
    
    // Legacy support
    border: 'rgba(226, 232, 240, 0.8)',
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

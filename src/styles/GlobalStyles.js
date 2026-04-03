import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Google Fonts Import */
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,700&display=swap');
  
  /* CSS Custom Properties */
  :root {
    /* Colors */
    --color-background: ${({ theme }) => theme.colors.background};
    --color-background-solid: ${({ theme }) => theme.colors.backgroundSolid};
    --color-surface: ${({ theme }) => theme.colors.surface};
    --color-primary: ${({ theme }) => theme.colors.primary};
    --color-secondary: ${({ theme }) => theme.colors.secondary};
    --color-accent: ${({ theme }) => theme.colors.accent};
    --color-text: ${({ theme }) => theme.colors.text};
    --color-text-secondary: ${({ theme }) => theme.colors.textSecondary};
    --color-text-muted: ${({ theme }) => theme.colors.textMuted};
    --color-border: ${({ theme }) => theme.colors.border};
    --color-shadow: ${({ theme }) => theme.colors.shadow};
    
    /* Glassmorphism */
    --glass-backdrop: ${({ theme }) => theme.colors.glass.backdrop};
    --glass-blur: ${({ theme }) => theme.colors.glass.blur};
    --glass-border: ${({ theme }) => theme.colors.glass.border};
    --glass-shadow: ${({ theme }) => theme.colors.glass.shadow};
    
    /* Fonts */
    --font-primary: ${({ theme }) => theme.fonts.primary};
    --font-secondary: ${({ theme }) => theme.fonts.secondary};
    --font-mono: ${({ theme }) => theme.fonts.mono};
    
    /* Sizes */
    --max-width: ${({ theme }) => theme.sizes.maxWidth};
    --header-height: ${({ theme }) => theme.sizes.headerHeight};
    
    /* Border Radius */
    --radius-sm: ${({ theme }) => theme.sizes.borderRadius.sm};
    --radius-md: ${({ theme }) => theme.sizes.borderRadius.md};
    --radius-lg: ${({ theme }) => theme.sizes.borderRadius.lg};
    --radius-xl: ${({ theme }) => theme.sizes.borderRadius.xl};
    --radius-full: ${({ theme }) => theme.sizes.borderRadius.full};
    
    /* Transitions */
    --transition-fast: 0.15s ease;
    --transition-normal: 0.3s ease;
    --transition-slow: 0.5s ease;
    --transition-spring: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  
  /* CSS Reset */
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  /* Root element */
  html {
    font-size: 16px;
    scroll-behavior: smooth;
    scroll-padding-top: calc(var(--header-height) + 2rem);
    -webkit-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    text-size-adjust: 100%;
  }
  
  /* Body */
  body {
    font-family: var(--font-primary);
    font-weight: 400;
    line-height: 1.6;
    color: var(--color-text);
    background: var(--color-background);
    background-attachment: fixed;
    transition: background-color 0.4s ease, color 0.4s ease;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
  }
  
  /* Focus management */
  :focus {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
  }
  
  :focus:not(:focus-visible) {
    outline: none;
  }
  
  /* Links */
  a {
    color: inherit;
    text-decoration: none;
    transition: all var(--transition-fast);
  }
  
  a:hover {
    color: var(--color-accent);
  }
  
  /* Lists */
  ul,
  ol {
    list-style: none;
  }
  
  /* Media elements */
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
    height: auto;
  }
  
  /* Form elements */
  input,
  button,
  textarea,
  select {
    font: inherit;
    color: inherit;
  }
  
  button {
    cursor: pointer;
    border: none;
    background: none;
    transition: all var(--transition-fast);
  }
  
  button:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
  
  input,
  textarea {
    border: none;
    outline: none;
  }
  
  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-secondary);
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
    color: var(--color-text);
    letter-spacing: -0.01em;
  }
  
  h1 {
    font-size: clamp(2rem, 5vw, 3.5rem);
    letter-spacing: -0.03em;
  }
  
  h2 {
    font-size: clamp(1.75rem, 4vw, 2.75rem);
  }
  
  h3 {
    font-size: clamp(1.5rem, 3vw, 2.25rem);
    font-weight: 600;
  }
  
  h4 {
    font-size: clamp(1.25rem, 2.5vw, 1.875rem);
    font-weight: 500;
  }
  
  p {
    margin-bottom: 1rem;
    color: var(--color-text-secondary);
    max-width: 65ch;
  }
  
  /* Code elements */
  code,
  pre {
    font-family: var(--font-mono);
    font-size: 0.875em;
  }
  
  code {
    background: var(--glass-backdrop);
    padding: 0.125rem 0.25rem;
    border-radius: var(--radius-sm);
    border: 1px solid var(--glass-border);
  }
  
  pre {
    background: var(--glass-backdrop);
    padding: 1rem;
    border-radius: var(--radius-md);
    border: 1px solid var(--glass-border);
    overflow-x: auto;
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
  }
  
  /* Selection */
  ::selection {
    background-color: var(--color-primary);
    color: white;
  }
  
  ::-moz-selection {
    background-color: var(--color-primary);
    color: white;
  }
  
  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 6px;
  }
  
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  
  ::-webkit-scrollbar-thumb {
    background: var(--color-primary);
    border-radius: var(--radius-full);
    opacity: 0.5;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-accent);
  }
  
  /* Utility classes */
  .glass {
    background: var(--glass-backdrop);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: 1px solid var(--glass-border);
    box-shadow: var(--glass-shadow);
  }
  
  /* Animation utilities */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes slideInFromLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes slideInFromRight {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export default GlobalStyles;

import { css } from 'styled-components';
import { breakpoints } from './themes';

// Media query helper
export const mediaQuery = (breakpoint) => {
  return `@media (min-width: ${breakpoints[breakpoint]})`;
};

// Flexbox mixins
export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const flexBetween = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const flexColumn = css`
  display: flex;
  flex-direction: column;
`;

// Container mixin
export const container = css`
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1rem;

  ${mediaQuery('md')} {
    padding: 0 2rem;
  }
`;

// Button mixins
export const primaryButton = css`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;

export const secondaryButton = css`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;

// Glassmorphism mixins
export const glass = css`
  background: ${({ theme }) => theme.colors.glass.backdrop};
  backdrop-filter: blur(${({ theme }) => theme.colors.glass.blur});
  -webkit-backdrop-filter: blur(${({ theme }) => theme.colors.glass.blur});
  border: 1px solid ${({ theme }) => theme.colors.glass.border};
  box-shadow: ${({ theme }) => theme.colors.glass.shadow};
`;

export const glassCard = css`
  ${glass}
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  transition: all var(--transition-normal);
  
  &:hover {
    background: ${({ theme }) => theme.colors.glass.backdropHover};
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.colors.glass.shadow}, 0 8px 25px -8px ${({ theme }) => theme.colors.accent}20;
  }
`;

export const glassSurface = css`
  ${glass}
  border-radius: var(--radius-md);
  padding: 1rem;
`;

export const glassButton = css`
  ${glass}
  border-radius: var(--radius-md);
  padding: 0.75rem 1.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textOnGlass};
  transition: all var(--transition-fast);
  cursor: pointer;
  
  &:hover {
    background: ${({ theme }) => theme.colors.glass.backdropHover};
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0) scale(0.98);
  }
`;

// Legacy card mixin (updated with glassmorphism)
export const card = css`
  ${glassCard}
`;

// Section padding
export const sectionPadding = css`
  padding: 4rem 0;

  ${mediaQuery('md')} {
    padding: 6rem 0;
  }
`;

// Text truncation
export const truncateText = css`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

// Responsive text sizes
export const responsiveText = {
  h1: css`
    font-size: 2rem;
    ${mediaQuery('md')} {
      font-size: 3rem;
    }
  `,
  h2: css`
    font-size: 1.75rem;
    ${mediaQuery('md')} {
      font-size: 2.25rem;
    }
  `,
  h3: css`
    font-size: 1.5rem;
    ${mediaQuery('md')} {
      font-size: 1.875rem;
    }
  `
};

const mixins = {
  mediaQuery,
  flexCenter,
  flexBetween,
  flexColumn,
  container,
  primaryButton,
  secondaryButton,
  glass,
  glassCard,
  glassSurface,
  glassButton,
  card,
  sectionPadding,
  truncateText,
  responsiveText
};

export default mixins;

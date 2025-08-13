import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useTheme } from '../context/ThemeContext';

// Keyframes for animations
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-3px);
  }
  60% {
    transform: translateY(-2px);
  }
`;

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 ${props => props.theme.colors.accent}40;
  }
  70% {
    box-shadow: 0 0 0 10px transparent;
  }
  100% {
    box-shadow: 0 0 0 0 transparent;
  }
`;

// Styled components
const ToggleContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ToggleButton = styled.button`
  position: relative;
  width: 60px;
  height: 32px;
  border-radius: var(--radius-full);
  background: ${({ theme }) => theme.colors.glass.backdrop};
  backdrop-filter: blur(${({ theme }) => theme.colors.glass.blur});
  -webkit-backdrop-filter: blur(${({ theme }) => theme.colors.glass.blur});
  border: 1px solid ${({ theme }) => theme.colors.glass.border};
  box-shadow: ${({ theme }) => theme.colors.glass.shadow};
  cursor: pointer;
  transition: all var(--transition-normal);
  overflow: hidden;
  
  &:hover {
    transform: translateY(-1px);
    background: ${({ theme }) => theme.colors.glass.backdropHover};
    animation: ${pulse} 2s infinite;
  }
  
  &:active {
    transform: translateY(0) scale(0.98);
  }
  
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 2px;
  }
`;

const ToggleTrack = styled.div`
  position: absolute;
  top: 2px;
  left: 2px;
  right: 2px;
  bottom: 2px;
  border-radius: var(--radius-full);
  background: linear-gradient(90deg, 
    ${({ theme, $isDarkMode }) => $isDarkMode 
      ? `${theme.colors.primary}20, ${theme.colors.accent}20`
      : `${theme.colors.warning}20, ${theme.colors.primary}20`
    });
  transition: all var(--transition-normal);
`;

const ToggleThumb = styled.div`
  position: absolute;
  top: 50%;
  left: ${({ $isDarkMode }) => $isDarkMode ? 'calc(100% - 26px)' : '4px'};
  transform: translateY(-50%);
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.text};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-spring);
  animation: ${({ $isTransitioning }) => $isTransitioning ? bounce : 'none'} 0.6s ease;
  
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: ${({ theme, $isDarkMode }) => $isDarkMode 
      ? theme.colors.glass.backdrop
      : 'transparent'
    };
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    transition: all var(--transition-normal);
  }
`;

const ThemeIcon = styled.div`
  position: relative;
  z-index: 1;
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme, $isDarkMode }) => $isDarkMode 
    ? theme.colors.backgroundSolid 
    : theme.colors.warning
  };
  font-size: 10px;
  transition: all var(--transition-normal);
  animation: ${({ $isTransitioning }) => $isTransitioning ? rotate : 'none'} 0.6s ease;
  
  &::before {
    content: '${({ $isDarkMode }) => $isDarkMode ? '🌙' : '☀️'}';
    position: absolute;
  }
`;

const TooltipLabel = styled.span`
  position: absolute;
  bottom: -35px;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textOnGlass};
  background: ${({ theme }) => theme.colors.glass.backdrop};
  backdrop-filter: blur(${({ theme }) => theme.colors.glass.blur});
  -webkit-backdrop-filter: blur(${({ theme }) => theme.colors.glass.blur});
  border: 1px solid ${({ theme }) => theme.colors.glass.border};
  border-radius: var(--radius-sm);
  box-shadow: ${({ theme }) => theme.colors.glass.shadow};
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all var(--transition-fast);
  pointer-events: none;
  z-index: 1000;
  
  &::before {
    content: '';
    position: absolute;
    top: -4px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 4px solid ${({ theme }) => theme.colors.glass.border};
  }
  
  ${ToggleButton}:hover & {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) translateY(-2px);
  }
`;

const AccessibleLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

const ThemeToggle = ({ showLabel = true, className }) => {
  const { isDarkMode, toggleTheme, isTransitioning } = useTheme();

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleTheme();
    }
  };

  const themeLabel = isDarkMode ? 'Switch to light mode' : 'Switch to dark mode';

  return (
    <ToggleContainer className={className}>
      <ToggleButton
        onClick={toggleTheme}
        onKeyDown={handleKeyDown}
        aria-label={themeLabel}
        title={themeLabel}
        role="switch"
        aria-checked={isDarkMode}
      >
        <AccessibleLabel>
          {themeLabel}
        </AccessibleLabel>
        
        <ToggleTrack $isDarkMode={isDarkMode} />
        
        <ToggleThumb 
          $isDarkMode={isDarkMode}
          $isTransitioning={isTransitioning}
        >
          <ThemeIcon 
            $isDarkMode={isDarkMode}
            $isTransitioning={isTransitioning}
          />
        </ToggleThumb>
        
        {showLabel && (
          <TooltipLabel>
            {isDarkMode ? 'Dark Mode' : 'Light Mode'}
          </TooltipLabel>
        )}
      </ToggleButton>
    </ToggleContainer>
  );
};

export default ThemeToggle;

# Global Style & Theme System Documentation

This document outlines the comprehensive theme system implemented in the portfolio project, featuring glassmorphism effects, Google Fonts integration, smooth scrolling, and localStorage persistence.

## 🎨 Features Implemented

### 1. Global Styles (`src/styles/GlobalStyles.js`)
- **CSS Reset**: Modern reset with box-sizing and proper defaults
- **Google Fonts**: Inter & Poppins fonts imported with optimal loading
- **CSS Variables**: Comprehensive custom properties for easy customization
- **Smooth Scrolling**: Native smooth scrolling with proper scroll padding
- **Typography**: Responsive, fluid typography with clamp()
- **Glassmorphism**: Utility classes for glass effects
- **Animations**: Pre-built keyframe animations and utilities
- **Accessibility**: Focus management and screen reader support
- **Custom Scrollbar**: Styled with glassmorphism effects

### 2. Theme System (`src/styles/themes.js`)
- **Light Theme**: Beautiful gradient backgrounds with translucent surfaces
- **Dark Theme**: Deep space-like gradients with proper contrast
- **Glassmorphism Palettes**: Dedicated glass effect color schemes
- **Color System**: Primary, secondary, accent, text, and glass variations
- **Typography**: Font families with fallback stacks
- **Sizing**: Responsive breakpoints and border radius scales

### 3. Theme Context (`src/context/ThemeContext.js`)
- **localStorage Persistence**: Theme preferences saved automatically
- **System Theme Detection**: Respects user's OS preference
- **Manual Override**: Users can manually set themes
- **Transition States**: Smooth theme switching with loading states
- **Theme Objects**: Direct access to current theme values
- **Utility Functions**: Helper methods for theme management

### 4. Theme Toggle Component (`src/components/ThemeToggle.js`)
- **Glassmorphism Design**: Beautiful translucent toggle switch
- **Smooth Animations**: Spring animations and hover effects
- **Accessibility**: Full keyboard support and ARIA attributes
- **Visual Feedback**: Icons, tooltips, and transition states
- **Responsive**: Works across all device sizes

### 5. CSS Mixins (`src/styles/mixins.js`)
- **Glassmorphism Mixins**: `glass`, `glassCard`, `glassSurface`, `glassButton`
- **Layout Mixins**: `flexCenter`, `flexBetween`, `container`
- **Button Mixins**: Primary and secondary button styles
- **Responsive**: Media query helpers
- **Typography**: Responsive text size utilities

### 6. Theme Utilities (`src/utils/themeUtils.js`)
- **Color Manipulation**: Hex/RGB conversion, opacity, lighten/darken
- **System Detection**: Theme, motion, and contrast preferences
- **Persistence**: localStorage management
- **CSS Variables**: Dynamic CSS custom property updates
- **Glassmorphism**: Glass effect generators
- **Accessibility**: Focus styles and visually hidden utilities

## 🚀 Usage Examples

### Basic Theme Usage
```jsx
import { useTheme } from '../context/ThemeContext';
import styled from 'styled-components';
import { glassCard } from '../styles/mixins';

const MyComponent = styled.div`
  ${glassCard}
  color: ${({ theme }) => theme.colors.text};
`;

function Component() {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <MyComponent>
      <button onClick={toggleTheme}>
        Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>
    </MyComponent>
  );
}
```

### Using CSS Variables
```css
.my-element {
  background: var(--glass-backdrop);
  backdrop-filter: blur(var(--glass-blur));
  border: 1px solid var(--glass-border);
  color: var(--color-text);
  font-family: var(--font-primary);
  border-radius: var(--radius-md);
}
```

### Creating Glass Effects
```jsx
import { createGlassEffect } from '../utils/themeUtils';

const GlassPanel = styled.div`
  ${createGlassEffect(
    'rgba(255, 255, 255, 0.1)',  // backdrop
    '16px',                       // blur
    'rgba(255, 255, 255, 0.2)',  // border
    '0 8px 32px rgba(0, 0, 0, 0.3)' // shadow
  )}
`;
```

## 📱 Theme Toggle Integration

The ThemeToggle component can be placed anywhere in your app:

```jsx
import ThemeToggle from './components/ThemeToggle';

function Navbar() {
  return (
    <nav>
      {/* Other nav items */}
      <ThemeToggle showLabel={true} />
    </nav>
  );
}
```

## 🎯 CSS Custom Properties Available

### Colors
- `--color-background` - Main background (gradient)
- `--color-surface` - Surface elements
- `--color-primary` - Primary brand color
- `--color-text` - Main text color
- `--glass-backdrop` - Glass background
- `--glass-blur` - Glass blur amount
- `--glass-border` - Glass border color
- `--glass-shadow` - Glass shadow

### Typography
- `--font-primary` - Inter font stack
- `--font-secondary` - Poppins font stack
- `--font-mono` - Monospace font stack

### Spacing & Sizing
- `--radius-sm` to `--radius-xl` - Border radius scale
- `--transition-fast` to `--transition-slow` - Transition durations

## 🌟 Glassmorphism Design System

The implemented glassmorphism system includes:

1. **Backdrop Filters**: CSS backdrop-filter with WebKit support
2. **Translucent Backgrounds**: RGBA colors with proper opacity
3. **Border Highlights**: Subtle borders for definition
4. **Layered Shadows**: Multiple shadow layers for depth
5. **Hover States**: Enhanced interactions with smooth transitions

## 💾 Persistence Features

- **Automatic Saving**: Theme choice is saved to localStorage
- **System Sync**: Follows OS theme preference by default
- **Manual Override**: User choices take precedence over system
- **Graceful Fallbacks**: Works without localStorage support

## ♿ Accessibility Features

- **Keyboard Navigation**: Full keyboard support for theme toggle
- **ARIA Attributes**: Proper screen reader support
- **High Contrast**: Respects prefers-contrast media query
- **Reduced Motion**: Respects prefers-reduced-motion settings
- **Focus Management**: Clear focus indicators

## 📦 File Structure

```
src/
├── components/
│   └── ThemeToggle.js          # Theme toggle component
├── context/
│   └── ThemeContext.js         # Theme context and provider
├── styles/
│   ├── GlobalStyles.js         # Global styles and CSS reset
│   ├── themes.js              # Light and dark theme definitions
│   └── mixins.js              # Styled-components mixins
├── utils/
│   └── themeUtils.js          # Theme utility functions
└── App.js                     # Main app with theme integration
```

## 🔧 Customization

### Adding New Colors
```js
// In themes.js
export const lightTheme = {
  colors: {
    // ... existing colors
    customColor: '#your-color',
    customGlass: 'rgba(your, color, values, 0.1)',
  }
};
```

### Creating New Glass Components
```jsx
// Using the glass mixin
const MyGlassComponent = styled.div`
  ${glass}
  padding: 2rem;
  border-radius: var(--radius-xl);
`;
```

### Adding Theme Variables
```js
// The GlobalStyles component automatically generates CSS variables
// from your theme object structure
```

## 🚀 Getting Started

1. **Wrap your app** with the ThemeProvider:
```jsx
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      {/* Your app content */}
    </ThemeProvider>
  );
}
```

2. **Use the theme** in styled components:
```jsx
const StyledComponent = styled.div`
  color: ${({ theme }) => theme.colors.text};
`;
```

3. **Add the toggle** where needed:
```jsx
import ThemeToggle from './components/ThemeToggle';
<ThemeToggle />
```

The system is now fully implemented and ready to use! The glassmorphism effects, font loading, theme persistence, and smooth scrolling are all working together to create a modern, accessible, and beautiful theme system.

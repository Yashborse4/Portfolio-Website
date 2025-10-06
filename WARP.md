# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a React-based portfolio website for Yash Borse, a React Native developer at HAL (Hindustan Aeronautics Limited). The site features a modern glassmorphism design system with light/dark themes, smooth animations using Framer Motion, and a responsive single-page application architecture.

## Development Commands

### Essential Commands
```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Deploy to GitHub Pages
npm run deploy
```

### Testing Individual Components
```bash
# Test specific components (no built-in isolated testing configured)
# Use React DevTools in browser for component debugging
```

## Architecture Overview

### Core Architecture Patterns

**Theme System Architecture**
- Global theme management using React Context (`src/context/ThemeContext.js`)
- Theme definitions in `src/styles/themes.js` with comprehensive glassmorphism color palettes
- CSS custom properties generated dynamically from theme objects
- Styled-components integration with theme provider pattern

**Component Architecture**
- **Layout Pattern**: Single `MainLayout` wrapper containing `Navbar`, main content area, and `Footer`
- **Section Components**: Each portfolio section (Hero, About, Experience, Projects, Education, Contact) is a standalone component
- **Route Structure**: Simple HashRouter setup with Home route and 404 fallback
- **Animation Layer**: Framer Motion integrated throughout with consistent animation variants

**Styling Architecture**
- **Global Styles**: Comprehensive reset and typography system in `GlobalStyles.js`
- **Theme System**: Light/dark themes with glassmorphism effects and localStorage persistence
- **Mixin Library**: Reusable styled-components mixins for glassmorphism, layouts, buttons
- **CSS Variables**: Runtime theme switching via CSS custom properties

### Data Management
- **Static Data**: Project and job information stored in JSON files (`src/data/`)
- **No External APIs**: Self-contained portfolio with static content
- **Local State Only**: Component-level state for UI interactions (mobile menu, theme toggle, project filters)

### Key Dependencies & Their Roles
- **Framer Motion**: Page and component animations, transitions, gesture handling
- **React Scroll**: Smooth scrolling navigation between sections
- **React Typed**: Typewriter effect in hero section
- **React Icons**: Consistent icon system throughout
- **Styled Components**: CSS-in-JS with theme integration
- **React Router DOM**: HashRouter for GitHub Pages deployment

## File Structure Significance

```
src/
├── components/          # Section components (Hero, About, Projects, etc.)
├── context/            # Theme context and state management
├── data/              # Static JSON data for projects and jobs
├── layouts/           # Layout wrapper components
├── routes/            # Route-level components
├── styles/            # Theme definitions, mixins, and global styles
└── utils/             # Theme utilities and helpers
```

## Theme System Deep Dive

The theme system is the most complex part of this codebase:

1. **Theme Context** (`ThemeContext.js`) manages global theme state with localStorage persistence
2. **Theme Definitions** (`themes.js`) contain comprehensive color palettes for glassmorphism effects
3. **Global Styles** automatically converts theme objects to CSS custom properties
4. **Mixins** provide reusable glassmorphism effects (`glass`, `glassCard`, `glassSurface`, `glassButton`)

### Working with Themes
- Always use theme properties through styled-components: `${({ theme }) => theme.colors.primary}`
- CSS custom properties are available globally: `var(--color-primary)`
- Glassmorphism mixins handle backdrop-filter, borders, and shadows consistently

## Component Patterns

### Animation Patterns
Most components follow this Framer Motion pattern:
```javascript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};
```

### Glassmorphism Components
Import and use glassmorphism mixins:
```javascript
import { glassCard } from '../styles/mixins';

const StyledCard = styled.div`
  ${glassCard}
  // additional styles
`;
```

## Development Guidelines

### Adding New Sections
1. Create component in `src/components/`
2. Import and add to `src/routes/Home.js`
3. Add navigation link to `navItems` array in `Navbar.js`
4. Use consistent animation patterns and glassmorphism styling

### Modifying Project Data
- Edit `src/data/projects.json` for portfolio projects
- Edit `src/data/jobs.json` for work experience
- Follow existing JSON structure for consistency

### Theme Customization
- Modify color palettes in `src/styles/themes.js`
- Add new CSS custom properties in `GlobalStyles.js`
- Create new mixins in `src/styles/mixins.js` for reusable patterns

### Deployment Notes
- Uses HashRouter for GitHub Pages compatibility
- Homepage field in package.json set to `https://yashborse4.github.io/Portfolio-Website/`
- `npm run deploy` builds and pushes to gh-pages branch
- Website is accessible at: https://yashborse4.github.io/Portfolio-Website/

### Changing Domain (Easy Method)
Use the provided script to change domains easily:
```bash
# Change to a custom domain
node change-domain.js https://yashborse.tech

# Change back to GitHub Pages
node change-domain.js https://yashborse4.github.io/Portfolio-Website/
```

### Manual Domain Change
- Update the `homepage` field in package.json
- Run `npm run build` to test
- Run `npm run deploy` to deploy
- Commit and push changes

## Performance Considerations

- Framer Motion animations are optimized with `once: true` intersection observers
- Theme switching uses CSS custom properties for instant updates
- Images are referenced from public directory for optimal loading
- Glassmorphism effects use backdrop-filter with WebKit prefixes

## Responsive Design

- Mobile-first responsive design with consistent breakpoints
- `mediaQuery` mixin available for responsive styling
- Mobile navigation with full-screen overlay pattern
- Typography uses `clamp()` for fluid scaling across devices

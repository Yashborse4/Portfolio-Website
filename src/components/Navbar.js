import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import { useTheme } from '../context/ThemeContext';

// ========================================
// STYLED COMPONENTS
// ========================================

const NavWrapper = styled.div`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  
  @media (max-width: 768px) {
    top: 12px;
    width: calc(100% - 24px);
  }
`;

const NavPill = styled(motion.nav)`
  background: ${({ theme }) => theme.colors.glass.backdrop};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid ${({ theme }) => theme.colors.glass.border};
  border-radius: 50px;
  padding: 0.6rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  box-shadow: ${({ theme }) => theme.colors.glass.shadow};
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    padding: 0.6rem 1rem;
    justify-content: space-between;
  }
`;

const Logo = styled(ScrollLink)`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1.1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  white-space: nowrap;
  letter-spacing: -0.02em;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(ScrollLink)`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 0.85rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 0.4rem 0.75rem;
  border-radius: 20px;
  
  &:hover {
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.primaryGlass};
  }
  
  &.active {
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.primaryGlass};
  }
`;

const ThemeButton = styled(motion.button)`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primaryGlass};
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary}30;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  flex-shrink: 0;
  
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;

const MobileMenuButton = styled(motion.button)`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.3rem;
  cursor: pointer;
  padding: 0.4rem;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MobileOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.colors.backgroundSolid};
  z-index: 1001;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const MobileNavLink = styled(ScrollLink)`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const MobileCloseButton = styled(motion.button)`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 2rem;
  cursor: pointer;
`;

// ========================================
// NAVBAR COMPONENT
// ========================================
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const navItems = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'Education', to: 'education' },
    { name: 'Contact', to: 'contact' }
  ];

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <NavWrapper>
        <NavPill
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <Logo to="hero" smooth={true} duration={500} offset={0}>
            YB.
          </Logo>

          <NavLinks>
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-100}
                activeClass="active"
              >
                {item.name}
              </NavLink>
            ))}
          </NavLinks>

          <ThemeButton
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle theme"
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </ThemeButton>

          <MobileMenuButton
            onClick={() => setMobileMenuOpen(true)}
            whileTap={{ scale: 0.9 }}
          >
            <FaBars />
          </MobileMenuButton>
        </NavPill>
      </NavWrapper>

      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <MobileCloseButton
              onClick={closeMobileMenu}
              whileTap={{ scale: 0.9 }}
            >
              <FaTimes />
            </MobileCloseButton>

            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
              >
                <MobileNavLink
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  onClick={closeMobileMenu}
                >
                  {item.name}
                </MobileNavLink>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <ThemeButton
                onClick={toggleTheme}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isDarkMode ? <FaSun /> : <FaMoon />}
              </ThemeButton>
            </motion.div>
          </MobileOverlay>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

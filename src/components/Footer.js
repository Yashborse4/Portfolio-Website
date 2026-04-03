import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

// ========================================
// STYLED COMPONENTS
// ========================================
const FooterContainer = styled.footer`
  padding: 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.glass.border};
  background: ${({ theme }) => theme.colors.glass.backdrop};
  backdrop-filter: blur(10px);
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const Copyright = styled.div`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textMuted};
  
  .accent {
    color: ${({ theme }) => theme.colors.primary};
  }
  
  svg {
    display: inline;
    color: ${({ theme }) => theme.colors.primary};
    vertical-align: middle;
    font-size: 0.75rem;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 1rem;
  
  a {
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 1.1rem;
    transition: all 0.2s ease;
    
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
      transform: translateY(-2px);
    }
  }
`;

// ========================================
// FOOTER COMPONENT
// ========================================
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <Copyright>
          © {year} <span className="accent">Yash Borse</span>. Built with <FaHeart /> and React.
        </Copyright>
        
        <FooterLinks>
          <a href="https://github.com/yashborse4" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/yashborse" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="mailto:yashborse432005@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </FooterLinks>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;

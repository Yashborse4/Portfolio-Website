import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart, FaArrowUp } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.backgroundSolid};
  border-top: 1px solid ${({ theme }) => theme.colors.glass.border};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at 20% 50%,
      ${({ theme }) => theme.colors.primary}10 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 50%,
      ${({ theme }) => theme.colors.accent}10 0%,
      transparent 50%
    );
    z-index: -1;
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem 2rem;
  
  @media (max-width: 768px) {
    padding: 3rem 1rem 1.5rem;
  }
`;

const FooterMain = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
`;

const FooterSection = styled(motion.div)`
  .section-title {
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: 1.25rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 1rem;
  }
  
  .section-content {
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.6;
  }
`;

const BrandSection = styled(FooterSection)`
  .brand-name {
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: 2rem;
    font-weight: 700;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.accent});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 1rem;
  }
  
  .brand-description {
    font-size: 1rem;
    margin-bottom: 1.5rem;
    max-width: 400px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background: ${({ theme }) => theme.colors.glass.backdrop};
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.colors.glass.border};
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.1rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    transform: translateY(-3px);
  }
`;

const QuickLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const QuickLink = styled(ScrollLink)`
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    transform: translateX(5px);
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  
  .contact-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 0.9rem;
    
    .icon {
      color: ${({ theme }) => theme.colors.primary};
      flex-shrink: 0;
    }
    
    a {
      color: inherit;
      text-decoration: none;
      transition: color 0.3s ease;
      
      &:hover {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.glass.border};
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.875rem;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  .heart {
    color: ${({ theme }) => theme.colors.error};
    animation: heartbeat 2s infinite;
  }
  
  @keyframes heartbeat {
    0%, 50%, 100% {
      transform: scale(1);
    }
    25%, 75% {
      transform: scale(1.1);
    }
  }
`;

const BackToTop = styled(motion.button)`
  background: ${({ theme }) => theme.colors.glass.backdrop};
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.colors.glass.border};
  color: ${({ theme }) => theme.colors.primary};
  width: 45px;
  height: 45px;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    transform: translateY(-3px);
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/yashborse', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/yashborse', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://twitter.com/yashborse', label: 'Twitter' },
    { icon: FaEnvelope, href: 'mailto:yashborse.dev@gmail.com', label: 'Email' }
  ];

  const quickLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'Education', to: 'education' },
    { name: 'Contact', to: 'contact' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  return (
    <FooterContainer>
      <FooterContent>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <FooterMain>
            <BrandSection variants={itemVariants}>
              <h2 className="brand-name">Yash Borse</h2>
              <p className="brand-description section-content">
                React Native developer with 1+ year experience at HAL, specializing in 
                cross-platform mobile applications. Let's build something incredible together.
              </p>
              <SocialLinks>
                {socialLinks.map((social, index) => (
                  <SocialLink
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <social.icon />
                  </SocialLink>
                ))}
              </SocialLinks>
            </BrandSection>
            
            <FooterSection variants={itemVariants}>
              <h3 className="section-title">Quick Links</h3>
              <QuickLinks>
                {quickLinks.map((link) => (
                  <QuickLink
                    key={link.name}
                    to={link.to}
                    smooth={true}
                    duration={800}
                  >
                    {link.name}
                  </QuickLink>
                ))}
              </QuickLinks>
            </FooterSection>
            
            <FooterSection variants={itemVariants}>
              <h3 className="section-title">Get In Touch</h3>
              <ContactInfo>
                <div className="contact-item">
                  <FaEnvelope className="icon" />
                  <a href="mailto:yashborse.dev@gmail.com">yashborse.dev@gmail.com</a>
                </div>
                <div className="contact-item">
                  <span>📞</span>
                  <a href="tel:+919876543210">+91 98765 43210</a>
                </div>
                <div className="contact-item">
                  <span>📍</span>
                  <span>Maharashtra, India</span>
                </div>
              </ContactInfo>
            </FooterSection>
          </FooterMain>
          
          <FooterBottom>
            <Copyright>
              © {currentYear} Yash Borse. Made with <FaHeart className="heart" /> using React
            </Copyright>
            
            <ScrollLink to="hero" smooth={true} duration={800}>
              <BackToTop
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Back to top"
              >
                <FaArrowUp />
              </BackToTop>
            </ScrollLink>
          </FooterBottom>
        </motion.div>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;

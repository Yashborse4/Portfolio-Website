import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaChevronDown, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import { ReactTyped as Typed } from 'react-typed';

const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0 2rem;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at 20% 80%,
      ${({ theme }) => theme.colors.primary}20 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 20%,
      ${({ theme }) => theme.colors.accent}20 0%,
      transparent 50%
    );
    z-index: -1;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
`;

const TextContent = styled.div`
  z-index: 2;
`;

const Greeting = styled(motion.p)`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Name = styled(motion.h1)`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 0.5rem;
  background: linear-gradient(
    135deg, 
    ${({ theme }) => theme.colors.text}, 
    ${({ theme }) => theme.colors.primary}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const TypedContainer = styled(motion.div)`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: clamp(1.5rem, 4vw, 3rem);
  font-weight: 600;
  margin-bottom: 1.5rem;
  min-height: 4rem;
  display: flex;
  align-items: center;
  
  .typed-text {
    color: ${({ theme }) => theme.colors.accent};
  }
  
  @media (max-width: 768px) {
    min-height: 3rem;
  }
`;

const Description = styled(motion.p)`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.125rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 2rem;
  max-width: 600px;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Button = styled(motion.button)`
  padding: 0.875rem 2rem;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1rem;
  font-weight: 600;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  ${({ variant, theme }) => {
    if (variant === 'primary') {
      return `
        background: linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.accent});
        color: white;
        
        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }
        
        &:hover::before {
          left: 100%;
        }
      `;
    } else {
      return `
        background: transparent;
        color: ${theme.colors.text};
        border: 2px solid ${theme.colors.primary};
        
        &:hover {
          background: ${theme.colors.primary};
          color: white;
          transform: translateY(-2px);
        }
      `;
    }
  }}
`;

const SocialLinksContainer = styled(motion.div)`
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
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.glass.backdrop};
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.colors.glass.border};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.2rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    transform: translateY(-3px);
  }
`;

const ProfileSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (max-width: 968px) {
    order: -1;
  }
`;

const ProfileImage = styled(motion.div)`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.accent});
  padding: 4px;
  margin-bottom: 1rem;
  
  .image-inner {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.backgroundSolid};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 6rem;
    color: ${({ theme }) => theme.colors.textMuted};
  }
  
  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
    
    .image-inner {
      font-size: 4rem;
    }
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: ${({ theme }) => theme.colors.textSecondary};
  cursor: pointer;
  
  .scroll-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-size: 0.5rem;
    align-items: center;
    justify-content: center;
  }
  
  .scroll-text {
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 0.9rem;
    font-weight: 200;
    text-align: center;
    white-space: nowrap;
  }
  
  .scroll-icon {
    font-size: 0.5rem;
    animation: bounce 2s infinite;
    display: flex;
    justify-content: center;
    width: 50%;
    align-items: center;

  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Hero = () => {
  const heroRef = useRef(null);

  const roles = [
    'Java Developer',
    'Full Stack Developer',
    'React Native Developer',
    'Mobile App Developer'
  ];

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/yashborse4', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/yashborse', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:yash_borse@yahoo.com', label: 'Email' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const profileVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <HeroContainer id="hero" ref={heroRef}>
      <HeroContent>
        <TextContent>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <Greeting variants={itemVariants}>
              👋 Hello, I'm
            </Greeting>
            
            <Name variants={itemVariants}>
              Yash Borse
            </Name>
            
            <TypedContainer variants={itemVariants}>
              <Typed
                className="typed-text"
                strings={roles}
                typeSpeed={60}
                backSpeed={40}
                loop
                showCursor={true}
                cursorChar="|"
              />
            </TypedContainer>
            
            <Description variants={itemVariants}>
              I'm a passionate React Native developer with 1+ year of experience at HAL, 
              specializing in cross-platform mobile applications. I create seamless, 
              high-performance mobile experiences for both iOS and Android.
            </Description>
            
            <ButtonGroup variants={itemVariants}>
              <ScrollLink to="projects" smooth={true} duration={500} offset={-80}>
                <Button
                  variant="primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                </Button>
              </ScrollLink>
              
              <ScrollLink to="contact" smooth={true} duration={500} offset={-80}>
                <Button
                  variant="secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                </Button>
              </ScrollLink>
            </ButtonGroup>
            
            <SocialLinksContainer variants={itemVariants}>
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
            </SocialLinksContainer>
          </motion.div>
        </TextContent>
        
        <ProfileSection
          variants={profileVariants}
          initial="hidden"
          animate="visible"
        >
          <ProfileImage
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <div className="image-inner">
            <img src="/assets/pic.png" alt="Profile picture" />


            </div>
          </ProfileImage>
        </ProfileSection>
      </HeroContent>
      
      <ScrollIndicator
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <ScrollLink to="about" smooth={true} duration={500} offset={-80}>
          <div className="scroll-text">Scroll Down</div>
          <FaChevronDown className="scroll-icon" />
        </ScrollLink>
      </ScrollIndicator>
    </HeroContainer>
  );
};

export default Hero;

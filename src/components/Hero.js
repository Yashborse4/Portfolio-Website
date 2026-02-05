import React, { useRef, useState, useCallback } from 'react';
import styled from 'styled-components';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaArrowRight, FaCommentDots } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import { ReactTyped as Typed } from 'react-typed';
import { fadeInUp, staggerContainer, profile3D } from '../styles/animations';

// ========================================
// STYLED COMPONENTS
// ========================================

const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0 2rem;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.background};
  
  /* Decorative Background Elements */
  &::before {
    content: '';
    position: absolute;
    top: -10%;
    right: -5%;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, ${({ theme }) => theme.colors.primary}10 0%, transparent 70%);
    border-radius: 50%;
    z-index: 0;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -10%;
    left: -5%;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, ${({ theme }) => theme.colors.accent}10 0%, transparent 70%);
    border-radius: 50%;
    z-index: 0;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 2;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 3rem;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (max-width: 968px) {
    align-items: center;
  }
`;

const Greeting = styled(motion.h2)`
  font-family: ${({ theme }) => theme.fonts.secondary}; // Use Serif/Display font if available in secondary
  font-size: clamp(3rem, 5vw, 4.5rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.1;
  margin-bottom: 1rem;
  
  span.highlight {
    color: ${({ theme }) => theme.colors.primary};
  }
  
  span.wave {
    display: inline-block;
    animation: wave 2.5s ease-in-out infinite;
    transform-origin: 70% 70%;
    font-size: 0.8em;
  }
  
  @keyframes wave {
    0%, 100% { transform: rotate(0deg); }
    10% { transform: rotate(14deg); }
    20% { transform: rotate(-8deg); }
    30% { transform: rotate(14deg); }
    40% { transform: rotate(-4deg); }
    50% { transform: rotate(10deg); }
    60%, 100% { transform: rotate(0deg); }
  }
`;

const RoleText = styled(motion.h3)`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textSecondary}; // Almost black/dark grey
  margin-bottom: 2rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;

  @media (max-width: 968px) {
    justify-content: center;
  }
`;

const Description = styled(motion.p)`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 2.5rem;
  max-width: 500px;
  
  @media (max-width: 968px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (max-width: 968px) {
    justify-content: center;
    flex-direction: row; // Keep row on mobile for better look
    gap: 1.5rem;
  }
`;

const HireMeButton = styled(motion.button)`
  padding: 1rem 2.5rem;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1rem;
  font-weight: 600;
  border-radius: 5px; // Slightly rounded, not pill
  border: none;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  box-shadow: 0 10px 20px ${({ theme }) => theme.colors.primaryGlass};
  display: flex;
  align-items: center;
  gap: 0.8rem;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 15px 30px ${({ theme }) => theme.colors.primaryGlass}; // Stronger shadow on hover
  }
  
  svg {
    font-size: 0.9rem;
  }
`;

const DownloadLink = styled(motion.a)`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary}40;
  padding-bottom: 2px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

const SocialsRow = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  .label {
    font-size: 0.9rem;
    font-weight: 600;
    margin-right: 0.5rem;
    color: ${({ theme }) => theme.colors.text};
  }

  @media (max-width: 968px) {
    justify-content: center;
  }
`;

const SocialIcon = styled(motion.a)`
  color: #333; // Default dark icon color
  font-size: 1.2rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

// Right Side - Image & Floating Elements

const VisualContent = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  perspective: 1000px;
`;

const ImageContainer = styled(motion.div)`
  width: 400px;
  height: 500px; // Portrait aspect ratio
  position: relative;
  z-index: 1;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 20px 20px 60px rgba(0,0,0,0.05); // Soft shadow
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 768px) {
    width: 300px;
    height: 380px;
  }
`;

const FloatingCard = styled(motion.div)`
  position: absolute;
  background: ${({ theme }) => theme.colors.surface}; // Use surface color for better opacity in dark mode
  backdrop-filter: blur(10px);
  padding: 1rem 1.5rem;
  border-radius: 12px;
  box-shadow: 0 15px 35px ${({ theme }) => theme.colors.shadow};
  border: 1px solid ${({ theme }) => theme.colors.border}; // Add border for edge definition
  display: flex;
  align-items: center;
  gap: 1rem;
  z-index: 5;
  min-width: 200px;
  
  &.expert-card {
    top: 10%;
    right: -10%;
    @media (max-width: 1200px) { right: -5%; }
    @media (max-width: 968px) { right: 5%; top: 5%; }
  }
  
  &.status-card {
    bottom: 10%;
    left: -10%;
    @media (max-width: 1200px) { left: -5%; }
    @media (max-width: 968px) { left: 5%; bottom: 5%; }
  }
  
  .icon-box {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary}20;
    color: ${({ theme }) => theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
  }
  
  .text-box {
    display: flex;
    flex-direction: column;
    
    span.label {
      font-size: 0.8rem;
      color: ${({ theme }) => theme.colors.textSecondary};
    }
    span.value {
      font-size: 0.95rem;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.text};
    }
  }
`;

const DecorativeCircle = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  z-index: 0;
  
  &.circle-1 {
    width: 80px;
    height: 80px;
    background: transparent;
    border: 5px solid ${({ theme }) => theme.colors.accent};
    top: -20px;
    left: 20px;
  }
  
  &.circle-2 {
    width: 40px;
    height: 40px;
    background: ${({ theme }) => theme.colors.primary};
    bottom: 50px;
    right: -20px;
  }
`;


// ========================================
// HERO COMPONENT
// ========================================

const Hero = () => {
  const roles = [
    'User Interface Designer',
    'Full Stack Developer',
    'Java Specialist',
  ];

  // Mouse move effect for image
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <HeroContainer id="hero">
      <HeroContent>
        {/* LEFT COLUMN: TEXT */}
        <TextContent>
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">

            <Greeting variants={fadeInUp}>
              Hi, <br />
              I'm <span className="highlight">Yash Borse</span>
              <span className="wave" style={{ marginLeft: '10px' }}>👋</span>
            </Greeting>

            <RoleText variants={fadeInUp}>
              <Typed
                strings={roles}
                typeSpeed={50}
                backSpeed={30}
                loop
              />
            </RoleText>

            <Description variants={fadeInUp}>
              I design and build premium web applications with a focus on
              clean aesthetics and robust performance. Based in India.
            </Description>

            <ButtonGroup variants={fadeInUp}>
              <ScrollLink to="projects" smooth={true} duration={500} offset={-80}>
                <HireMeButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  Hire Me <FaArrowRight />
                </HireMeButton>
              </ScrollLink>

              <DownloadLink
                href="/Portfolio-Website/Yash_Borse.pdf"
                download
                whileHover={{ x: 5 }}
              >
                <FaDownload /> Download CV
              </DownloadLink>
            </ButtonGroup>

            <SocialsRow variants={fadeInUp}>
              {/* <span className="label">Check out my:</span> */}
              <SocialIcon href="https://github.com/yashborse4" target="_blank" aria-label="GitHub">
                <FaGithub />
              </SocialIcon>
              <SocialIcon href="https://www.linkedin.com/in/yashborse" target="_blank" aria-label="LinkedIn">
                <FaLinkedin />
              </SocialIcon>
              <SocialIcon href="mailto:yashborse432005@gmail.com" aria-label="Email">
                <FaEnvelope />
              </SocialIcon>
              <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.9rem', fontWeight: '600' }}>
                Let's Chat <FaCommentDots style={{ color: '#FF6B6B' }} />
              </div>
            </SocialsRow>

          </motion.div>
        </TextContent>

        {/* RIGHT COLUMN: IMAGE & FLOATING UI */}
        <VisualContent
          initial="hidden"
          animate="visible"
          variants={profile3D}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY }}
        >
          {/* Decorative Elements */}
          <DecorativeCircle className="circle-1" animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} />
          <DecorativeCircle className="circle-2" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} />

          <ImageContainer>
            <img src="/assets/pic.png" alt="Yash Borse" />
          </ImageContainer>

          {/* Floating Cards */}
          <FloatingCard
            className="expert-card"
            variants={fadeInUp}
            custom={1}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          >
            <div className="icon-box">
              <FaGithub />
            </div>
            <div className="text-box">
              <span className="label">Expert on</span>
              <span className="value">Spring Boot & React</span>
            </div>
          </FloatingCard>

          <FloatingCard
            className="status-card"
            variants={fadeInUp}
            custom={2}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          >
            <div className="icon-box" style={{ background: '#E0F7FA', color: '#00BCD4' }}>
              <FaArrowRight style={{ transform: 'rotate(-45deg)' }} />
            </div>
            <div className="text-box">
              <span className="label">Projects</span>
              <span className="value">10+ Completed</span>
            </div>
          </FloatingCard>

        </VisualContent>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;

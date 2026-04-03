import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaGooglePlay } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import { staggerContainer, fadeInUp } from '../styles/animations';
import { getExperienceYears } from '../utils/ExperienceCalculator';

// ========================================
// TERMINAL TYPING HOOK
// ========================================
const useTerminalTyping = (commands) => {
  const [lines, setLines] = useState([]);
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [currentText, setCurrentText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (currentCommandIndex >= commands.length) {
      setIsTyping(false);
      return;
    }

    const cmd = commands[currentCommandIndex];
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (charIndex <= cmd.input.length) {
        setCurrentText(cmd.input.substring(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        
        setTimeout(() => {
          setLines(prev => [
            ...prev,
            { type: 'input', text: cmd.input },
            { type: 'output', text: cmd.output, isJson: cmd.isJson }
          ]);
          setCurrentText('');
          setCurrentCommandIndex(prev => prev + 1);
        }, 300);
      }
    }, 45);

    return () => clearInterval(typeInterval);
  }, [currentCommandIndex, commands]);

  return { lines, currentText, isTyping, showCursor, currentCommandIndex };
};

// ========================================
// PARTICLE BACKGROUND
// ========================================
const ParticleCanvas = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef();
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Initialize particles
    const count = 60;
    particlesRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.3 + 0.1
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(184, 115, 51, ${p.opacity})`;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    zIndex: 0,
    opacity: 0.6
  }} />;
};

// ========================================
// STYLED COMPONENTS
// ========================================
const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: 100px 2rem 2rem;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.background};
`;

const HeroContent = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 2;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

// Terminal Window
const TerminalWindow = styled(motion.div)`
  background: ${({ theme }) => theme.colors.terminalBg};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.05);
  font-family: ${({ theme }) => theme.fonts.mono};
  max-width: 520px;
  width: 100%;
  
  @media (max-width: 968px) {
    max-width: 100%;
    order: 2;
  }
`;

const TerminalHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.03);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
`;

const TerminalDot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({ color }) => color};
`;

const TerminalTitle = styled.span`
  color: #666;
  font-size: 0.75rem;
  margin-left: auto;
  margin-right: auto;
`;

const TerminalBody = styled.div`
  padding: 1rem 1.25rem;
  min-height: 280px;
  max-height: 340px;
  overflow-y: auto;
  font-size: 0.82rem;
  line-height: 1.7;
  
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255,255,255,0.1);
    border-radius: 2px;
  }
`;

const TerminalLine = styled.div`
  color: ${({ theme }) => theme.colors.terminalText};
  margin-bottom: 0.3rem;
  word-break: break-word;
  
  .prompt {
    color: ${({ theme }) => theme.colors.terminalPrompt};
    margin-right: 8px;
  }
  
  .command {
    color: #e0e0e0;
  }
  
  .json-key {
    color: #82aaff;
  }
  
  .json-value {
    color: #c3e88d;
  }
  
  .json-bracket {
    color: #89ddff;
  }
  
  .output-text {
    color: #a0a0a0;
    padding-left: 4px;
  }
  
  .green {
    color: #4ade80;
  }
`;

const Cursor = styled.span`
  display: inline-block;
  width: 8px;
  height: 16px;
  background: ${({ theme }) => theme.colors.primary};
  animation: ${blink} 1s step-end infinite;
  vertical-align: middle;
  margin-left: 2px;
`;

// Right Side - Name & Title
const TextContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  
  @media (max-width: 968px) {
    text-align: center;
    align-items: center;
    order: 1;
  }
`;

const NameHeading = styled(motion.h1)`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.1;
  margin-bottom: 0.75rem;
  font-style: italic;
  letter-spacing: -0.02em;
`;

const RoleSubtext = styled(motion.div)`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 0.5rem;
`;

const SpecialtiesList = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
  
  @media (max-width: 968px) {
    justify-content: center;
  }
`;

const SpecialtyTag = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.primaryGlass};
  border: 1px solid ${({ theme }) => theme.colors.primary}25;
  padding: 0.3rem 0.75rem;
  border-radius: 20px;
`;

const HeroActions = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 968px) {
    justify-content: center;
  }
`;

const PrimaryButton = styled(ScrollLink)`
  padding: 0.75rem 1.75rem;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px ${({ theme }) => theme.colors.primaryGlass};
    color: white;
  }
`;

const SecondaryLink = styled.a`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textSecondary};
  display: flex;
  align-items: center;
  gap: 0.4rem;
  transition: all 0.2s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const SocialRow = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  @media (max-width: 968px) {
    justify-content: center;
  }
`;

const SocialIcon = styled.a`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 1.2rem;
  transition: all 0.2s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
  }
`;

// Stats Bar
const StatsBar = styled(motion.div)`
  max-width: 1200px;
  width: 100%;
  margin: 3rem auto 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  background: ${({ theme }) => theme.colors.glass.backdrop};
  backdrop-filter: blur(20px);
  border: 1px solid ${({ theme }) => theme.colors.glass.border};
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StatItem = styled.div`
  padding: 1.25rem 1rem;
  text-align: center;
  border-right: 1px solid ${({ theme }) => theme.colors.glass.border};
  
  &:last-child {
    border-right: none;
  }
  
  @media (max-width: 768px) {
    &:nth-child(2) {
      border-right: none;
    }
    &:nth-child(3), &:nth-child(4) {
      border-top: 1px solid ${({ theme }) => theme.colors.glass.border};
    }
  }
  
  .stat-value {
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: 1.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 0.15rem;
  }
  
  .stat-label {
    font-size: 0.75rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.textMuted};
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
`;


// ========================================
// HERO COMPONENT
// ========================================

const TERMINAL_COMMANDS = [
  {
    input: 'whoami',
    output: 'yash-borse',
    isJson: false
  },
  {
    input: 'cat profile.json',
    output: JSON.stringify({
      role: "Full Stack Developer",
      company: "ZenZero Developer (Startup)",
      app: "Wheel Deals",
      stack: ["Spring Boot", "React Native", "MySQL", "Redis", "WebSockets", "Docker", "AWS"],
      location: "India"
    }, null, 2),
    isJson: true
  },
  {
    input: 'echo $MISSION',
    output: '"Building secure, high-performance systems with automated CI/CD and production-ready architecture."',
    isJson: false
  }
];

const Hero = () => {
  const experienceYears = getExperienceYears();
  const terminalBodyRef = useRef(null);

  const { lines, currentText, showCursor, currentCommandIndex } = useTerminalTyping(TERMINAL_COMMANDS);

  // Auto scroll terminal
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [lines, currentText]);

  const renderJsonOutput = (text) => {
    // Simple JSON syntax highlighting
    return text.split('\n').map((line, i) => {
      const highlighted = line
        .replace(/"([^"]+)":/g, '<span class="json-key">"$1"</span>:')
        .replace(/: "([^"]+)"/g, ': <span class="json-value">"$1"</span>')
        .replace(/[\[\]{},]/g, (match) => `<span class="json-bracket">${match}</span>`);
      
      return (
        <div key={i} dangerouslySetInnerHTML={{ __html: highlighted }} />
      );
    });
  };

  return (
    <HeroContainer id="hero">
      <ParticleCanvas />
      
      <HeroContent>
        {/* LEFT: Terminal */}
        <TerminalWindow
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <TerminalHeader>
            <TerminalDot color="#ff5f57" />
            <TerminalDot color="#febc2e" />
            <TerminalDot color="#28c840" />
            <TerminalTitle>zsh — yash@dev</TerminalTitle>
          </TerminalHeader>
          <TerminalBody ref={terminalBodyRef}>
            {lines.map((line, index) => (
              <TerminalLine key={index}>
                {line.type === 'input' ? (
                  <>
                    <span className="prompt">❯</span>
                    <span className="command">{line.text}</span>
                  </>
                ) : line.isJson ? (
                  <div className="output-text">{renderJsonOutput(line.text)}</div>
                ) : (
                  <div className="output-text green">{line.text}</div>
                )}
              </TerminalLine>
            ))}
            {currentCommandIndex < TERMINAL_COMMANDS.length && (
              <TerminalLine>
                <span className="prompt">❯</span>
                <span className="command">{currentText}</span>
                {showCursor && <Cursor />}
              </TerminalLine>
            )}
            
            {currentCommandIndex >= TERMINAL_COMMANDS.length && (
              <TerminalLine>
                <span className="prompt">❯</span>
                {showCursor && <Cursor />}
              </TerminalLine>
            )}
          </TerminalBody>
        </TerminalWindow>

        {/* RIGHT: Name & Info */}
        <TextContent
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <NameHeading variants={fadeInUp}>
            Yash Borse
          </NameHeading>
          
          <RoleSubtext variants={fadeInUp}>
            Full Stack Developer · React Native · DevOps
          </RoleSubtext>
          
          <SpecialtiesList variants={fadeInUp}>
            <SpecialtyTag>Spring Boot</SpecialtyTag>
            <SpecialtyTag>React Native</SpecialtyTag>
            <SpecialtyTag>GitHub Actions</SpecialtyTag>
            <SpecialtyTag>VPS Management</SpecialtyTag>
            <SpecialtyTag>Docker</SpecialtyTag>
          </SpecialtiesList>
          
          <HeroActions variants={fadeInUp}>
            <PrimaryButton
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
            >
              Get in Touch
            </PrimaryButton>
            <SecondaryLink 
              href="/Portfolio-Website/Yash_Borse.pdf"
              download
            >
              <FaDownload /> Resume
            </SecondaryLink>
          </HeroActions>
          
          <SocialRow variants={fadeInUp}>
            <SocialIcon href="https://github.com/yashborse4" target="_blank" aria-label="GitHub">
              <FaGithub />
            </SocialIcon>
            <SocialIcon href="https://www.linkedin.com/in/yashborse" target="_blank" aria-label="LinkedIn">
              <FaLinkedin />
            </SocialIcon>
            <SocialIcon href="mailto:yashborse432005@gmail.com" aria-label="Email">
              <FaEnvelope />
            </SocialIcon>
          </SocialRow>
        </TextContent>
      </HeroContent>

      {/* Stats Bar */}
      <StatsBar
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.2 }}
      >
        <StatItem>
          <div className="stat-value">{experienceYears}+</div>
          <div className="stat-label">Years Experience</div>
        </StatItem>
        <StatItem>
          <div className="stat-value">10+</div>
          <div className="stat-label">Projects Built</div>
        </StatItem>
        <StatItem>
          <div className="stat-value"><FaGooglePlay style={{ display: 'inline', fontSize: '1.1rem', verticalAlign: 'middle' }} /></div>
          <div className="stat-label">Published on Play Store</div>
        </StatItem>
        <StatItem>
          <div className="stat-value">5+</div>
          <div className="stat-label">Professional Badges</div>
        </StatItem>
      </StatsBar>
    </HeroContainer>
  );
};

export default Hero;

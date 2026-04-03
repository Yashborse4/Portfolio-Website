import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaTools, FaGooglePlay } from 'react-icons/fa';
import { staggerContainer, fadeInUp } from '../styles/animations';
import { getExperienceYears } from '../utils/ExperienceCalculator';

// ========================================
// ANIMATED PROGRESS BAR
// ========================================
const AnimatedProgress = ({ value, label, techs = [], delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setIsVisible(true), delay);
      return () => clearTimeout(timer);
    }
  }, [isInView, delay]);

  return (
    <ProgressContainer ref={ref}>
      <ProgressHeader>
        <span className="label">{label}</span>
        <span className="value">{value}%</span>
      </ProgressHeader>
      <ProgressTrack>
        <ProgressFill style={{ width: isVisible ? `${value}%` : '0%' }} $delay={delay} />
      </ProgressTrack>
      {techs.length > 0 && (
        <TechTags>
          {techs.map(tech => (
            <TechTag key={tech}>{tech}</TechTag>
          ))}
        </TechTags>
      )}
    </ProgressContainer>
  );
};

// ========================================
// STYLED COMPONENTS
// ========================================
const AboutContainer = styled.section`
  padding: 100px 2rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 80px 1rem;
  }
`;

const SectionLabel = styled(motion.div)`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 0.75rem;
  text-align: center;
`;

const SectionTitle = styled(motion.h2)`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 700;
  text-align: center;
  margin-bottom: 4rem;
  color: ${({ theme }) => theme.colors.text};
  font-style: italic;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const BioSection = styled(motion.div)`
  .bio-heading {
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: 1.75rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 1.5rem;
    font-style: italic;
    
    span {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  
  .paragraph {
    font-size: 1rem;
    line-height: 1.8;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: 1.25rem;
  }
  
  .highlight {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
  }
`;

const AchievementBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: ${({ theme }) => theme.colors.primaryGlass};
  border: 1px solid ${({ theme }) => theme.colors.primary}30;
  padding: 0.6rem 1rem;
  border-radius: 10px;
  margin-top: 0.5rem;
  
  .badge-icon {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.1rem;
  }
  
  .badge-text {
    font-size: 0.85rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
  }
`;

const SkillsSection = styled(motion.div)``;

const SkillCategory = styled.div`
  margin-bottom: 2rem;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  .category-header {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    margin-bottom: 1rem;
    
    .icon {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      background: ${({ theme }) => theme.colors.primaryGlass};
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${({ theme }) => theme.colors.primary};
      font-size: 0.9rem;
    }
    
    .title {
      font-family: ${({ theme }) => theme.fonts.primary};
      font-size: 1rem;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.text};
    }
  }
`;

const ProgressContainer = styled.div`
  margin-bottom: 1.25rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const ProgressHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.4rem;
  
  .label {
    font-size: 0.85rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
  
  .value {
    font-size: 0.8rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.mono};
  }
`;

const ProgressTrack = styled.div`
  height: 6px;
  background: ${({ theme }) => theme.colors.glass.border};
  border-radius: 3px;
  overflow: hidden;
`;

const ProgressFill = styled.div`
  height: 100%;
  background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  border-radius: 3px;
  transition: width 1.2s cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: ${({ $delay }) => $delay}ms;
`;

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  margin-top: 0.5rem;
`;

const TechTag = styled.span`
  font-size: 0.7rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  color: ${({ theme }) => theme.colors.textMuted};
  background: ${({ theme }) => theme.colors.glass.backdrop};
  border: 1px solid ${({ theme }) => theme.colors.glass.border};
  padding: 0.15rem 0.5rem;
  border-radius: 4px;
`;

// ========================================
// ABOUT COMPONENT
// ========================================
const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const experience = getExperienceYears();

  const skillCategories = [
    {
      icon: FaServer,
      title: 'Backend & APIs',
      skills: [
        { name: 'Java / Spring Boot', value: 90, techs: ['REST', 'GraphQL', 'JWT', 'WebSocket'] },
        { name: 'Database Systems', value: 85, techs: ['PostgreSQL', 'Redis', 'OpenSearch'] },
      ]
    },
    {
      icon: FaCode,
      title: 'Frontend & Mobile',
      skills: [
        { name: 'React / React Native', value: 85, techs: ['Redux', 'Navigation', 'Expo'] },
        { name: 'TypeScript / JavaScript', value: 80, techs: ['ES6+', 'Node.js'] },
      ]
    },
    {
      icon: FaTools,
      title: 'DevOps & Cloud',
      skills: [
        { name: 'Docker / CI/CD', value: 80, techs: ['Docker Compose', 'GitHub Actions'] },
        { name: 'AWS / GCP', value: 70, techs: ['EC2', 'S3', 'Cloud Run'] },
      ]
    }
  ];

  return (
    <AboutContainer id="about" ref={ref}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <SectionLabel variants={fadeInUp}>// about</SectionLabel>
        <SectionTitle variants={fadeInUp}>
          About Me
        </SectionTitle>

        <ContentGrid>
          <BioSection variants={fadeInUp}>
            <h3 className="bio-heading">
              I build things <span>that scale.</span>
            </h3>
            <p className="paragraph">
              I'm <span className="highlight">Yash Borse</span>, a Full Stack Developer
              with <span className="highlight">{experience}+ years</span> of experience,
              currently leading development at <span className="highlight">ZenZero Developer (Startup)</span> — 
              architecting high-scale automotive solutions like <span className="highlight">Wheel Deals</span>.
            </p>
            <p className="paragraph">
              I specialize in building scalable <span className="highlight">Spring Boot</span> backends handling 5,000+ active users 
              and complex transaction workflows. My expertise includes implementing <span className="highlight">WebSocket</span> real-time features, 
              optimizing media pipelines for <span className="highlight">reduced latency (35%+)</span>, and managing production environments on 
              <span className="highlight">AWS</span> and <span className="highlight">VPS</span> using Docker and GitHub Actions.
            </p>
            <p className="paragraph">
              Previously, I served as a React Native Developer at <span className="highlight">Hindustan Aeronautics Limited (HAL), Nashik</span>, 
              delivering secure mobile solutions for the aerospace sector.
            </p>
            <p className="paragraph">
              I hold a Diploma in Computer Engineering with <span className="highlight">84.5%</span> and 
              am pursuing my B.E. in Computer Science. I have completed professional training in 
              <span className="highlight">AWS</span> and <span className="highlight">Google Cloud</span>.
            </p>
            
            <AchievementBadge>
              <FaGooglePlay className="badge-icon" />
              <span className="badge-text">Developed & Published "Wheel Deals" — end-to-end delivery</span>
            </AchievementBadge>
          </BioSection>

          <SkillsSection variants={fadeInUp}>
            {skillCategories.map((category, catIdx) => (
              <SkillCategory key={category.title}>
                <div className="category-header">
                  <div className="icon"><category.icon /></div>
                  <h4 className="title">{category.title}</h4>
                </div>
                {category.skills.map((skill, skillIdx) => (
                  <AnimatedProgress
                    key={skill.name}
                    label={skill.name}
                    value={skill.value}
                    techs={skill.techs}
                    delay={catIdx * 200 + skillIdx * 150}
                  />
                ))}
              </SkillCategory>
            ))}
          </SkillsSection>
        </ContentGrid>
      </motion.div>
    </AboutContainer>
  );
};

export default About;

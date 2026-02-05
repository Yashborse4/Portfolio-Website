import React, { useRef, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaTools, FaAws, FaDocker, FaReact, FaJava } from 'react-icons/fa';
import { SiSpringboot, SiPostgresql, SiGraphql, SiRedis, SiTypescript, SiPython } from 'react-icons/si';
import { glassCard, glassPremium } from '../styles/mixins';
import { staggerContainer, fadeInUp, scaleIn } from '../styles/animations';

// ========================================
// ANIMATED COUNTER HOOK
// ========================================
const useAnimatedCounter = (target, duration = 2) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    if (target.includes('.')) {
      return latest.toFixed(1);
    }
    return Math.round(latest);
  });

  useEffect(() => {
    const numTarget = parseFloat(target);
    const controls = animate(count, numTarget, { duration });
    return controls.stop;
  }, [target, count, duration]);

  return rounded;
};

// ========================================
// ANIMATED PROGRESS BAR COMPONENT
// ========================================
const AnimatedProgress = ({ value, label, delay = 0 }) => {
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
      <ProgressLabel>
        <span>{label}</span>
        <span>{value}%</span>
      </ProgressLabel>
      <ProgressTrack>
        <ProgressFill
          style={{ width: isVisible ? `${value}%` : '0%' }}
          $delay={delay}
        />
      </ProgressTrack>
    </ProgressContainer>
  );
};

// ========================================
// SKILL ORBIT COMPONENT
// ========================================
const skillIcons = [
  { Icon: FaJava, name: 'Java', color: '#ED8B00' },
  { Icon: SiSpringboot, name: 'Spring Boot', color: '#6DB33F' },
  { Icon: SiPostgresql, name: 'PostgreSQL', color: '#4169E1' },
  { Icon: SiGraphql, name: 'GraphQL', color: '#E535AB' },
  { Icon: FaReact, name: 'React', color: '#61DAFB' },
  { Icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
  { Icon: FaDocker, name: 'Docker', color: '#2496ED' },
  { Icon: SiRedis, name: 'Redis', color: '#DC382D' },
];

const SkillOrbit = () => {
  return (
    <OrbitContainer>
      <OrbitCenter>
        <CenterIcon>💻</CenterIcon>
        <CenterText>Tech Stack</CenterText>
      </OrbitCenter>

      <OrbitRing className="inner">
        {skillIcons.slice(0, 4).map((skill, index) => (
          <OrbitItem
            key={skill.name}
            $index={index}
            $total={4}
            $radius={90}
            style={{ '--color': skill.color }}
          >
            <skill.Icon />
            <span className="tooltip">{skill.name}</span>
          </OrbitItem>
        ))}
      </OrbitRing>

      <OrbitRing className="outer">
        {skillIcons.slice(4, 8).map((skill, index) => (
          <OrbitItem
            key={skill.name}
            $index={index}
            $total={4}
            $radius={150}
            style={{ '--color': skill.color }}
          >
            <skill.Icon />
            <span className="tooltip">{skill.name}</span>
          </OrbitItem>
        ))}
      </OrbitRing>
    </OrbitContainer>
  );
};

// ========================================
// STYLED COMPONENTS
// ========================================
const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const rotateReverse = keyframes`
  from { transform: rotate(360deg); }
  to { transform: rotate(0deg); }
`;

const AboutContainer = styled.section`
  padding: 100px 0;
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 2rem;
  padding-right: 2rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 20%;
    left: -10%;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, ${({ theme }) => theme.colors.primary}10 0%, transparent 70%);
    border-radius: 50%;
    animation: ${float} 8s ease-in-out infinite;
    pointer-events: none;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 10%;
    right: -5%;
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, ${({ theme }) => theme.colors.accent}10 0%, transparent 70%);
    border-radius: 50%;
    animation: ${float} 6s ease-in-out infinite reverse;
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    padding: 80px 1rem;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.text}, ${({ theme }) => theme.colors.primary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SectionSubtitle = styled(motion.p)`
  text-align: center;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 4rem;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const AboutText = styled(motion.div)`
  position: relative;
  z-index: 2;
  
  .paragraph {
    font-size: 1.1rem;
    line-height: 1.8;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: 1.5rem;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  .highlight {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
  }
`;

const OrbitContainer = styled.div`
  width: 350px;
  height: 350px;
  position: relative;
  margin: 0 auto;
  
  @media (max-width: 968px) {
    order: -1;
    width: 280px;
    height: 280px;
  }
`;

const OrbitCenter = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.glass.backdrop};
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.colors.glass.border};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

const CenterIcon = styled.span`
  font-size: 1.5rem;
`;

const CenterText = styled.span`
  font-size: 0.6rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textMuted};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const OrbitRing = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  border: 1px dashed ${({ theme }) => theme.colors.glass.border};
  
  &.inner {
    width: 180px;
    height: 180px;
    transform: translate(-50%, -50%);
    animation: ${rotate} 30s linear infinite;
  }
  
  &.outer {
    width: 300px;
    height: 300px;
    transform: translate(-50%, -50%);
    animation: ${rotateReverse} 40s linear infinite;
  }
  
  @media (max-width: 968px) {
    &.inner {
      width: 140px;
      height: 140px;
    }
    &.outer {
      width: 240px;
      height: 240px;
    }
  }
`;

const OrbitItem = styled.div`
  position: absolute;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.glass.backdrop};
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.colors.glass.border};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  color: var(--color);
  cursor: pointer;
  transition: all 0.3s ease;
  
  ${({ $index, $total, $radius }) => {
    const angle = ($index / $total) * 360;
    return `
      top: 50%;
      left: 50%;
      transform: 
        translate(-50%, -50%) 
        rotate(${angle}deg) 
        translateX(${$radius}px) 
        rotate(-${angle}deg);
    `;
  }}
  
  /* Counter-rotate to keep icons upright */
  svg {
    animation: ${rotateReverse} 30s linear infinite;
  }
  
  .outer & svg {
    animation: ${rotate} 40s linear infinite;
  }
  
  .tooltip {
    position: absolute;
    bottom: -25px;
    left: 50%;
    transform: translateX(-50%);
    background: ${({ theme }) => theme.colors.backgroundSolid};
    color: ${({ theme }) => theme.colors.text};
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.7rem;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s;
  }
  
  &:hover {
    transform: translate(-50%, -50%) scale(1.2);
    box-shadow: 0 0 20px var(--color);
    
    .tooltip {
      opacity: 1;
    }
  }
  
  @media (max-width: 968px) {
    width: 38px;
    height: 38px;
    font-size: 1rem;
  }
`;

const AboutStats = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
`;

const StatCard = styled(motion.div)`
  ${glassCard}
  text-align: center;
  padding: 1.5rem 1rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.accent});
  }
  
  .number {
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: 2rem;
    font-weight: 700;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.accent});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.25rem;
  }
  
  .label {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

const SkillsSection = styled.div`
  margin-top: 4rem;
`;

const SkillsTitle = styled(motion.h3)`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1.75rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.text};
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCategory = styled(motion.div)`
  ${glassPremium}
  padding: 1.5rem;
  
  .category-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1.25rem;
    
    .icon {
      width: 40px;
      height: 40px;
      border-radius: 10px;
      background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}20, ${({ theme }) => theme.colors.accent}20);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.25rem;
      color: ${({ theme }) => theme.colors.primary};
    }
    
    .title {
      font-family: ${({ theme }) => theme.fonts.secondary};
      font-size: 1.1rem;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.text};
    }
  }
`;

const ProgressContainer = styled.div`
  margin-bottom: 1rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const ProgressLabel = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const ProgressTrack = styled.div`
  height: 6px;
  background: ${({ theme }) => theme.colors.glass.border};
  border-radius: 3px;
  overflow: hidden;
`;

const ProgressFill = styled.div`
  height: 100%;
  background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.accent});
  border-radius: 3px;
  transition: width 1s cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: ${({ $delay }) => $delay}ms;
`;

// ========================================
// ABOUT COMPONENT
// ========================================
const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { number: '84.5', suffix: '%', label: 'Diploma Score' },
    { number: '2026', suffix: '', label: 'Graduation' },
    { number: '10', suffix: '+', label: 'Projects' },
    { number: '2', suffix: '+', label: 'Certifications' }
  ];

  const skillCategories = [
    {
      icon: FaCode,
      title: 'Frontend',
      skills: [
        { name: 'React / React Native', value: 85 },
        { name: 'TypeScript', value: 80 },
        { name: 'HTML/CSS', value: 90 },
      ]
    },
    {
      icon: FaServer,
      title: 'Backend',
      skills: [
        { name: 'Java Spring Boot', value: 90 },
        { name: 'GraphQL / REST', value: 85 },
        { name: 'Python', value: 75 },
      ]
    },
    {
      icon: FaDatabase,
      title: 'Database',
      skills: [
        { name: 'PostgreSQL', value: 85 },
        { name: 'Redis', value: 75 },
        { name: 'OpenSearch', value: 70 },
      ]
    },
    {
      icon: FaTools,
      title: 'DevOps & Tools',
      skills: [
        { name: 'Docker', value: 80 },
        { name: 'Git / GitHub', value: 90 },
        { name: 'AWS / GCP', value: 70 },
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
        <SectionTitle variants={fadeInUp}>
          About Me
        </SectionTitle>

        <SectionSubtitle variants={fadeInUp}>
          Passionate about building scalable solutions that make an impact
        </SectionSubtitle>

        <AboutContent>
          <AboutText variants={fadeInUp}>
            <p className="paragraph">
              Hi! I'm <span className="highlight">Yash Borse</span>, a Full Stack Developer
              currently working at <span className="highlight">Hindustan Aeronautics Limited (HAL)</span>.
              I specialize in building robust backend systems and cross-platform mobile applications.
            </p>
            <p className="paragraph">
              With a strong foundation in <span className="highlight">Java Spring Boot</span> and
              <span className="highlight"> PostgreSQL</span>, I design and implement scalable
              REST and GraphQL APIs. My work at HAL focuses on secure, high-performance
              applications for the aerospace and defense sector.
            </p>
            <p className="paragraph">
              I hold a Diploma in Computer Science with <span className="highlight">84.5%</span>
              and am pursuing my B.E. in Information Technology, expected to graduate in 2026.
              I'm also certified in <span className="highlight">AWS</span> and <span className="highlight">Google Cloud</span>.
            </p>
          </AboutText>

          <SkillOrbit />
        </AboutContent>

        <AboutStats variants={fadeInUp}>
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              variants={scaleIn}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            >
              <motion.div
                className="number"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                {stat.number}{stat.suffix}
              </motion.div>
              <div className="label">{stat.label}</div>
            </StatCard>
          ))}
        </AboutStats>

        <SkillsSection>
          <SkillsTitle variants={fadeInUp}>
            Skills & Expertise
          </SkillsTitle>

          <SkillsGrid>
            {skillCategories.map((category, categoryIndex) => (
              <SkillCategory
                key={category.title}
                variants={fadeInUp}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              >
                <div className="category-header">
                  <div className="icon">
                    <category.icon />
                  </div>
                  <h4 className="title">{category.title}</h4>
                </div>

                {category.skills.map((skill, skillIndex) => (
                  <AnimatedProgress
                    key={skill.name}
                    label={skill.name}
                    value={skill.value}
                    delay={categoryIndex * 200 + skillIndex * 100}
                  />
                ))}
              </SkillCategory>
            ))}
          </SkillsGrid>
        </SkillsSection>
      </motion.div>
    </AboutContainer>
  );
};

export default About;

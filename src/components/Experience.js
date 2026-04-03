import React, { useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FaBriefcase, FaCalendar, FaMapMarkerAlt, FaCheckCircle, FaRocket, FaChevronDown } from 'react-icons/fa';
import { staggerContainer, fadeInUp } from '../styles/animations';
import jobsData from '../data/jobs.json';

// ========================================
// STYLED COMPONENTS
// ========================================
const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.05); opacity: 0.8; }
`;

const ExperienceContainer = styled.section`
  padding: 100px 2rem;
  max-width: 900px;
  margin: 0 auto;
  
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

const Timeline = styled.div`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 24px;
    width: 2px;
    height: 100%;
    background: linear-gradient(
      180deg,
      ${({ theme }) => theme.colors.primary},
      ${({ theme }) => theme.colors.primary}40
    );
    
    @media (min-width: 768px) {
      left: 24px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 2rem;
  padding-left: 60px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  left: 12px;
  top: 8px;
  width: 26px;
  height: 26px;
  background: ${({ $isCurrent, theme }) => 
    $isCurrent 
      ? theme.colors.primary
      : theme.colors.surface
  };
  border: 3px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  
  ${({ $isCurrent }) => $isCurrent && `
    box-shadow: 0 0 0 4px rgba(184, 115, 51, 0.2);
  `}
  
  svg {
    font-size: 0.55rem;
    color: white;
  }
`;

const ExperienceCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.glass.backdrop};
  backdrop-filter: blur(20px);
  border: 1px solid ${({ theme }) => theme.colors.glass.border};
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary}30;
    box-shadow: 0 8px 30px ${({ theme }) => theme.colors.glass.shadow};
  }
`;

const CardHeader = styled.div`
  padding: 1.25rem 1.5rem;
  cursor: pointer;
  transition: background 0.2s ease;
  
  &:hover {
    background: ${({ theme }) => theme.colors.primaryGlass};
  }
  
  .top-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.35rem;
  }
  
  .company-name {
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 1.1rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .current-badge {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    padding: 0.15rem 0.5rem;
    border-radius: 4px;
    font-size: 0.6rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    animation: ${pulse} 2s ease-in-out infinite;
    display: flex;
    align-items: center;
    gap: 3px;
  }
  
  .position {
    font-size: 0.9rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 0.5rem;
  }
  
  .meta {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    
    .meta-item {
      display: flex;
      align-items: center;
      gap: 0.35rem;
      font-size: 0.78rem;
      color: ${({ theme }) => theme.colors.textMuted};
      
      svg {
        font-size: 0.7rem;
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
  
  .chevron {
    color: ${({ theme }) => theme.colors.textMuted};
    transition: transform 0.3s ease;
    font-size: 0.85rem;
    
    &.open {
      transform: rotate(180deg);
    }
  }
`;

const CardBody = styled(motion.div)`
  padding: 0 1.5rem 1.5rem;
  
  .description {
    font-size: 0.9rem;
    line-height: 1.7;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: 1.25rem;
  }
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-bottom: 1.25rem;
  
  .tech-label {
    font-size: 0.7rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.textMuted};
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 0.25rem;
    width: 100%;
  }
`;

const TechTag = styled.span`
  font-size: 0.72rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  background: ${({ theme }) => theme.colors.primaryGlass};
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.primary}20;
`;

const AchievementList = styled.div`
  .achievement-label {
    font-size: 0.7rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.textMuted};
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 0.5rem;
  }
  
  .achievement {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    margin-bottom: 0.35rem;
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.5;
    
    svg {
      color: ${({ theme }) => theme.colors.success};
      margin-top: 0.2rem;
      flex-shrink: 0;
      font-size: 0.7rem;
    }
  }
`;

// ========================================
// ACCORDION ITEM COMPONENT
// ========================================
const AccordionCard = ({ job, isInitiallyOpen }) => {
  const [isOpen, setIsOpen] = useState(isInitiallyOpen);
  const isCurrent = job.duration?.includes('Present');

  return (
    <TimelineItem variants={fadeInUp}>
      <TimelineDot $isCurrent={isCurrent}>
        {isCurrent && <FaRocket />}
      </TimelineDot>
      
      <ExperienceCard>
        <CardHeader onClick={() => setIsOpen(!isOpen)}>
          <div className="top-row">
            <div className="company-name">
              {job.company}
              {isCurrent && (
                <span className="current-badge">
                  <FaRocket style={{ fontSize: '0.5rem' }} /> Current
                </span>
              )}
            </div>
            <FaChevronDown className={`chevron ${isOpen ? 'open' : ''}`} />
          </div>
          <div className="position">{job.position}</div>
          <div className="meta">
            <div className="meta-item">
              <FaCalendar />
              <span>{job.duration}</span>
            </div>
            <div className="meta-item">
              <FaMapMarkerAlt />
              <span>{job.location}</span>
            </div>
          </div>
        </CardHeader>
        
        <AnimatePresence>
          {isOpen && (
            <CardBody
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              <p className="description">{job.description}</p>
              
              <TechList>
                <div className="tech-label">Technologies</div>
                {job.technologies.map((tech, i) => (
                  <TechTag key={i}>{tech}</TechTag>
                ))}
              </TechList>
              
              {job.achievements && (
                <AchievementList>
                  <div className="achievement-label">Key Achievements</div>
                  {job.achievements.map((ach, i) => (
                    <div className="achievement" key={i}>
                      <FaCheckCircle />
                      <span>{ach}</span>
                    </div>
                  ))}
                </AchievementList>
              )}
            </CardBody>
          )}
        </AnimatePresence>
      </ExperienceCard>
    </TimelineItem>
  );
};

// ========================================
// EXPERIENCE COMPONENT
// ========================================
const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <ExperienceContainer id="experience" ref={ref}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <SectionLabel variants={fadeInUp}>// experience</SectionLabel>
        <SectionTitle variants={fadeInUp}>
          Professional Journey
        </SectionTitle>

        <Timeline>
          {jobsData.map((job, index) => (
            <AccordionCard
              key={job.id}
              job={job}
              isInitiallyOpen={index === 0}
            />
          ))}
        </Timeline>
      </motion.div>
    </ExperienceContainer>
  );
};

export default Experience;

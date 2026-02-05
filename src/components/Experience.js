import React, { useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { FaBriefcase, FaCalendar, FaMapMarkerAlt, FaCheckCircle, FaRocket } from 'react-icons/fa';
import { glassCard, glassPremium } from '../styles/mixins';
import { staggerContainer, fadeInUp, timelineIconVariants } from '../styles/animations';
import jobsData from '../data/jobs.json';

// ========================================
// STYLED COMPONENTS
// ========================================
const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.8; }
`;

const ExperienceContainer = styled.section`
  padding: 100px 0;
  max-width: 1000px;
  margin: 0 auto;
  padding-left: 2rem;
  padding-right: 2rem;
  
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

const Timeline = styled.div`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 30px;
    width: 3px;
    height: 100%;
    background: linear-gradient(
      180deg,
      ${({ theme }) => theme.colors.primary},
      ${({ theme }) => theme.colors.accent}
    );
    border-radius: 3px;
    
    @media (min-width: 768px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const ExperienceItem = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  margin-bottom: 3rem;
  position: relative;
  padding-left: 80px;
  
  @media (min-width: 768px) {
    padding-left: 0;
    
    &:nth-child(odd) {
      padding-right: calc(50% + 50px);
      
      .card {
        text-align: right;
      }
      
      .meta {
        justify-content: flex-end;
      }
    }
    
    &:nth-child(even) {
      padding-left: calc(50% + 50px);
    }
  }
`;

const TimelineIcon = styled(motion.div)`
  position: absolute;
  left: 10px;
  width: 44px;
  height: 44px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.accent});
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1rem;
  z-index: 2;
  box-shadow: 0 0 20px ${({ theme }) => theme.colors.primary}50;
  
  @media (min-width: 768px) {
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 50px;
  }`;

const ExperienceCard = styled(motion.div)`
  ${glassPremium}
  padding: 1.5rem;
  position: relative;
  width: 100%;
  
  &::before {
    content: '';
    position: absolute;
    top: 20px;
    width: 20px;
    height: 2px;
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.accent});
    left: -20px;
    
    @media (min-width: 768px) {
      ${ExperienceItem}:nth-child(odd) & {
        left: auto;
        right: -20px;
      }
      
      ${ExperienceItem}:nth-child(even) & {
        left: -20px;
      }
    }
  }
  
  .company {
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: 1.25rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 0.25rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
  }
  
  .current-badge {
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.success}, ${({ theme }) => theme.colors.accent});
    color: white;
    padding: 0.2rem 0.6rem;
    border-radius: 12px;
    font-size: 0.65rem;
    font-weight: 600;
    animation: ${pulse} 2s ease-in-out infinite;
  }
  
  .position {
    font-size: 1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 0.75rem;
  }
  
  .meta {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
    flex-wrap: wrap;
    
    .meta-item {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      font-size: 0.8rem;
      color: ${({ theme }) => theme.colors.textSecondary};
      
      .icon {
        color: ${({ theme }) => theme.colors.primary};
        font-size: 0.75rem;
      }
    }
  }
  
  .description {
    font-size: 0.9rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: 1.25rem;
  }
`;

const TechnologiesContainer = styled.div`
  margin-bottom: 1.25rem;
  
  .technologies-label {
    font-size: 0.75rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  .technologies-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    
    @media (min-width: 768px) {
      ${ExperienceItem}:nth-child(odd) & {
        justify-content: flex-end;
      }
    }
  }
`;

const TechTag = styled(motion.span)`
  background: ${({ theme }) => theme.colors.primaryGlass};
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 500;
  border: 1px solid ${({ theme }) => theme.colors.primary}30;
`;

const AchievementsList = styled.div`
  .achievements-label {
    font-size: 0.75rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  .achievement {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    margin-bottom: 0.4rem;
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    
    &:last-child {
      margin-bottom: 0;
    }
    
    .icon {
      color: ${({ theme }) => theme.colors.success};
      margin-top: 0.15rem;
      flex-shrink: 0;
      font-size: 0.75rem;
    }
    
    @media (min-width: 768px) {
      ${ExperienceItem}:nth-child(odd) & {
        flex-direction: row-reverse;
        text-align: right;
      }
    }
  }
`;

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
        <SectionTitle variants={fadeInUp}>
          Professional Experience
        </SectionTitle>

        <SectionSubtitle variants={fadeInUp}>
          A journey through my professional growth and achievements
        </SectionSubtitle>

        <Timeline>
          {jobsData.map((job, index) => (
            <ExperienceItem key={job.id} variants={fadeInUp}>
              <TimelineIcon
                variants={timelineIconVariants}
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <FaBriefcase />
              </TimelineIcon>

              <ExperienceCard
                className="card"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              >
                <h3 className="company">
                  {job.company}
                  {job.duration.includes('Present') && (
                    <span className="current-badge">
                      <FaRocket style={{ marginRight: '4px' }} />
                      Current
                    </span>
                  )}
                </h3>
                <h4 className="position">{job.position}</h4>

                <div className="meta">
                  <div className="meta-item">
                    <FaCalendar className="icon" />
                    <span>{job.duration}</span>
                  </div>
                  <div className="meta-item">
                    <FaMapMarkerAlt className="icon" />
                    <span>{job.location}</span>
                  </div>
                </div>

                <p className="description">{job.description}</p>

                <TechnologiesContainer>
                  <div className="technologies-label">Technologies</div>
                  <div className="technologies-list">
                    {job.technologies.map((tech, techIndex) => (
                      <TechTag
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + techIndex * 0.05 }}
                      >
                        {tech}
                      </TechTag>
                    ))}
                  </div>
                </TechnologiesContainer>

                <AchievementsList>
                  <div className="achievements-label">Key Achievements</div>
                  {job.achievements.map((achievement, achIndex) => (
                    <motion.div
                      key={achIndex}
                      className="achievement"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + achIndex * 0.1 }}
                    >
                      <FaCheckCircle className="icon" />
                      <span>{achievement}</span>
                    </motion.div>
                  ))}
                </AchievementsList>
              </ExperienceCard>
            </ExperienceItem>
          ))}
        </Timeline>
      </motion.div>
    </ExperienceContainer>
  );
};

export default Experience;

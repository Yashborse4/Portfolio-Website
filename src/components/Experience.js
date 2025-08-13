import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { FaBriefcase, FaCalendar, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import { glassCard } from '../styles/mixins';
import jobsData from '../data/jobs.json';

const ExperienceContainer = styled.section`
  padding: 100px 0;
  max-width: 1200px;
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
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: linear-gradient(
      180deg,
      ${({ theme }) => theme.colors.primary},
      ${({ theme }) => theme.colors.accent}
    );
    
    @media (max-width: 768px) {
      left: 30px;
    }
  }
`;

const ExperienceItem = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-bottom: 4rem;
  position: relative;
  
  &:nth-child(even) {
    flex-direction: row-reverse;
    
    .content {
      margin-right: 2rem;
      margin-left: 0;
      
      @media (max-width: 768px) {
        margin-right: 0;
        margin-left: 2rem;
      }
    }
    
    @media (max-width: 768px) {
      flex-direction: row;
    }
  }
  
  &:nth-child(odd) .content {
    margin-left: 2rem;
    
    @media (max-width: 768px) {
      margin-left: 2rem;
    }
  }
  
  @media (max-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const TimelineIcon = styled(motion.div)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.accent});
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  z-index: 2;
  box-shadow: ${({ theme }) => theme.colors.shadow};
  
  @media (max-width: 768px) {
    left: 30px;
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
`;

const ExperienceCard = styled(motion.div)`
  ${glassCard}
  flex: 1;
  max-width: 45%;
  padding: 2rem;
  position: relative;
  
  @media (max-width: 768px) {
    max-width: none;
    flex: none;
    width: calc(100% - 6rem);
  }
  
  .company {
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: 1.375rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 0.5rem;
  }
  
  .position {
    font-size: 1.125rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1rem;
  }
  
  .meta {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
    flex-wrap: wrap;
    
    .meta-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.875rem;
      color: ${({ theme }) => theme.colors.textSecondary};
      
      .icon {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
  
  .description {
    font-size: 1rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: 1.5rem;
  }
`;

const TechnologiesContainer = styled.div`
  margin-bottom: 1.5rem;
  
  .technologies-label {
    font-size: 0.875rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  .technologies-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
`;

const TechTag = styled.span`
  background: ${({ theme }) => theme.colors.primaryGlass};
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.75rem;
  font-weight: 500;
  border: 1px solid ${({ theme }) => theme.colors.primary}30;
`;

const AchievementsList = styled.div`
  .achievements-label {
    font-size: 0.875rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  .achievement {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    
    &:last-child {
      margin-bottom: 0;
    }
    
    .icon {
      color: ${({ theme }) => theme.colors.success};
      margin-top: 0.125rem;
      flex-shrink: 0;
    }
  }
`;

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 10
      }
    }
  };

  return (
    <ExperienceContainer id="experience" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <SectionTitle variants={itemVariants}>
          Professional Experience
        </SectionTitle>
        
        <SectionSubtitle variants={itemVariants}>
          A journey through my professional growth and achievements
        </SectionSubtitle>
        
        <Timeline>
          {jobsData.map((job, index) => (
            <ExperienceItem key={job.id} variants={itemVariants}>
              <TimelineIcon
                variants={iconVariants}
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <FaBriefcase />
              </TimelineIcon>
              
              <ExperienceCard
                className="content"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 10 }}
              >
                <h3 className="company">{job.company}</h3>
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
                  <div className="technologies-label">Technologies Used</div>
                  <div className="technologies-list">
                    {job.technologies.map((tech, techIndex) => (
                      <TechTag key={techIndex}>{tech}</TechTag>
                    ))}
                  </div>
                </TechnologiesContainer>
                
                <AchievementsList>
                  <div className="achievements-label">Key Achievements</div>
                  {job.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="achievement">
                      <FaCheckCircle className="icon" />
                      <span>{achievement}</span>
                    </div>
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

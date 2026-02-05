import React, { useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaAward, FaCalendar, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import { SiAmazonwebservices, SiGooglecloud } from 'react-icons/si';
import { glassCard, glassPremium } from '../styles/mixins';
import { staggerContainer, fadeInUp, scaleIn } from '../styles/animations';
import educationData from '../data/education.json';

// ========================================
// ANIMATED CIRCULAR PROGRESS
// ========================================
const CircularProgress = ({ value, size = 80, strokeWidth = 6 }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (parseFloat(value) / 100) * circumference;

  return (
    <ProgressSvg width={size} height={size}>
      <circle
        className="bg"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={strokeWidth}
      />
      <motion.circle
        className="progress"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        whileInView={{ strokeDashoffset: offset }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        viewport={{ once: true }}
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dy="0.3em"
        className="value"
      >
        {value}
      </text>
    </ProgressSvg>
  );
};

// ========================================
// STYLED COMPONENTS
// ========================================
const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
`;

const EducationContainer = styled.section`
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
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const TabContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const Tab = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  
  ${({ $active, theme }) => $active ? `
    background: linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.accent});
    color: white;
    box-shadow: 0 5px 20px ${theme.colors.primary}40;
  ` : `
    background: ${theme.colors.glass.backdrop};
    color: ${theme.colors.textSecondary};
    border: 1px solid ${theme.colors.glass.border};
    
    &:hover {
      background: ${theme.colors.glass.backdropHover};
      color: ${theme.colors.text};
    }
  `}
`;

const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const EducationCard = styled(motion.div)`
  ${glassPremium}
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, 
      ${({ $type, theme }) =>
    $type === 'degree' ? theme.colors.primary :
      $type === 'diploma' ? theme.colors.accent :
        theme.colors.success
  },
      ${({ theme }) => theme.colors.accent}
    );
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: linear-gradient(135deg, 
    ${({ theme }) => theme.colors.primary}20, 
    ${({ theme }) => theme.colors.accent}20
  );
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  flex-shrink: 0;
`;

const CardInfo = styled.div`
  flex: 1;
  
  .institution {
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: 1.1rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 0.25rem;
    line-height: 1.3;
  }
  
  .degree {
    font-size: 0.9rem;
    font-weight: 600;
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
      gap: 0.3rem;
      font-size: 0.75rem;
      color: ${({ theme }) => theme.colors.textSecondary};
      
      .icon {
        color: ${({ theme }) => theme.colors.primary};
        font-size: 0.7rem;
      }
    }
  }
`;

const ScoreSection = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`;

const ProgressSvg = styled.svg`
  transform: rotate(-90deg);
  
  .bg {
    fill: none;
    stroke: ${({ theme }) => theme.colors.glass.border};
  }
  
  .progress {
    fill: none;
    stroke: url(#gradient);
    stroke-linecap: round;
  }
  
  .value {
    fill: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: 0.9rem;
    font-weight: 700;
    transform: rotate(90deg);
    transform-origin: center;
  }
  
  defs {
    linearGradient {
      stop:first-child {
        stop-color: ${({ theme }) => theme.colors.primary};
      }
      stop:last-child {
        stop-color: ${({ theme }) => theme.colors.accent};
      }
    }
  }
`;

const Description = styled.p`
  font-size: 0.85rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1rem;
`;

const AchievementsList = styled.div`
  .label {
    font-size: 0.7rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 0.5rem;
  }
  
  .achievement {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    margin-bottom: 0.3rem;
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    
    .icon {
      color: ${({ theme }) => theme.colors.success};
      margin-top: 0.15rem;
      flex-shrink: 0;
      font-size: 0.7rem;
    }
  }
`;

const CertBadge = styled(motion.div)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.5rem;
  animation: ${float} 3s ease-in-out infinite;
`;

// ========================================
// EDUCATION COMPONENT
// ========================================
const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [filter, setFilter] = React.useState('all');

  const degrees = educationData.filter(item => item.type === 'degree' || item.type === 'diploma');
  const certifications = educationData.filter(item => item.type === 'certification');

  const displayData = filter === 'all' ? educationData :
    filter === 'degrees' ? degrees : certifications;

  const getIcon = (type, institution) => {
    if (type === 'certification') {
      if (institution.includes('AWS')) return SiAmazonwebservices;
      if (institution.includes('Google')) return SiGooglecloud;
      return FaCertificate;
    }
    return FaGraduationCap;
  };

  return (
    <EducationContainer id="education" ref={ref}>
      <svg width="0" height="0">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
      </svg>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <SectionTitle variants={fadeInUp}>
          Education & Certifications
        </SectionTitle>

        <SectionSubtitle variants={fadeInUp}>
          My academic journey and professional credentials
        </SectionSubtitle>

        <TabContainer variants={fadeInUp}>
          <Tab $active={filter === 'all'} onClick={() => setFilter('all')}
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <FaAward /> All
          </Tab>
          <Tab $active={filter === 'degrees'} onClick={() => setFilter('degrees')}
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <FaGraduationCap /> Degrees
          </Tab>
          <Tab $active={filter === 'certifications'} onClick={() => setFilter('certifications')}
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <FaCertificate /> Certifications
          </Tab>
        </TabContainer>

        <EducationGrid>
          {displayData.map((item, index) => {
            const Icon = getIcon(item.type, item.institution);

            return (
              <EducationCard
                key={item.id + '-' + index}
                $type={item.type}
                variants={scaleIn}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              >
                {item.type === 'certification' && (
                  <CertBadge>
                    {item.institution.includes('AWS') ? '🏆' :
                      item.institution.includes('Google') ? '☁️' : '📜'}
                  </CertBadge>
                )}

                <CardHeader>
                  <IconWrapper>
                    <Icon />
                  </IconWrapper>
                  <CardInfo>
                    <h3 className="institution">{item.institution}</h3>
                    <h4 className="degree">{item.degree}</h4>
                    <div className="meta">
                      <div className="meta-item">
                        <FaCalendar className="icon" />
                        <span>{item.duration}</span>
                      </div>
                      {item.location && (
                        <div className="meta-item">
                          <FaMapMarkerAlt className="icon" />
                          <span>{item.location}</span>
                        </div>
                      )}
                    </div>
                  </CardInfo>
                </CardHeader>

                {item.percentage && (
                  <ScoreSection>
                    <CircularProgress value={item.percentage.replace('%', '')} />
                  </ScoreSection>
                )}

                {item.description && (
                  <Description>{item.description}</Description>
                )}

                {item.achievements && item.achievements.length > 0 && (
                  <AchievementsList>
                    <div className="label">Achievements</div>
                    {item.achievements.slice(0, 3).map((achievement, achIndex) => (
                      <motion.div
                        key={achIndex}
                        className="achievement"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + achIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <FaCheckCircle className="icon" />
                        <span>{achievement}</span>
                      </motion.div>
                    ))}
                  </AchievementsList>
                )}
              </EducationCard>
            );
          })}
        </EducationGrid>
      </motion.div>
    </EducationContainer>
  );
};

export default Education;

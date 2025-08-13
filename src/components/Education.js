import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaCalendar, FaMapMarkerAlt, FaMedal, FaChartLine } from 'react-icons/fa';
import { glassCard } from '../styles/mixins';
import educationData from '../data/education.json';

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
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const EducationCard = styled(motion.div)`
  ${glassCard}
  padding: 2rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.accent});
  }
  
  .education-header {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1.5rem;
    
    .icon-container {
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.accent});
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 1.5rem;
      flex-shrink: 0;
    }
    
    .education-info {
      flex: 1;
      
      .degree {
        font-family: ${({ theme }) => theme.fonts.secondary};
        font-size: 1.25rem;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.text};
        margin-bottom: 0.5rem;
        line-height: 1.2;
      }
      
      .institution {
        font-size: 1rem;
        color: ${({ theme }) => theme.colors.primary};
        font-weight: 600;
        margin-bottom: 0.5rem;
      }
    }
  }
  
  .education-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1.5rem;
    
    .meta-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.875rem;
      color: ${({ theme }) => theme.colors.textSecondary};
      
      .icon {
        color: ${({ theme }) => theme.colors.primary};
        flex-shrink: 0;
      }
    }
  }
  
  .percentage-container {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
    padding: 1rem;
    background: ${({ theme }) => theme.colors.primaryGlass};
    border-radius: 12px;
    border: 1px solid ${({ theme }) => theme.colors.primary}30;
    
    .percentage-icon {
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.primary};
    }
    
    .percentage-info {
      .percentage-label {
        font-size: 0.875rem;
        color: ${({ theme }) => theme.colors.textMuted};
        margin-bottom: 0.25rem;
      }
      
      .percentage-value {
        font-size: 1.5rem;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.primary};
        font-family: ${({ theme }) => theme.fonts.secondary};
      }
    }
  }
  
  .description {
    font-size: 1rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: 1.5rem;
  }
  
  .coursework-section {
    margin-bottom: 1.5rem;
    
    .section-title {
      font-size: 0.875rem;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.text};
      margin-bottom: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    
    .coursework-list {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
    
    .coursework-item {
      background: ${({ theme }) => theme.colors.glass.backdrop};
      color: ${({ theme }) => theme.colors.textSecondary};
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      font-size: 0.75rem;
      font-weight: 500;
      border: 1px solid ${({ theme }) => theme.colors.glass.border};
    }
  }
  
  .achievements-section {
    .section-title {
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
      
      .achievement-icon {
        color: ${({ theme }) => theme.colors.success};
        margin-top: 0.125rem;
        flex-shrink: 0;
      }
    }
  }
`;

const CertificationsSection = styled.div`
  margin-top: 3rem;
`;

const CertificationsTitle = styled(motion.h3)`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1.875rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.text};
`;

const CertificationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CertificationCard = styled(motion.div)`
  ${glassCard}
  padding: 1.5rem;
  text-align: center;
  
  .cert-icon {
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.accent}, ${({ theme }) => theme.colors.primary});
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.2rem;
    margin: 0 auto 1rem;
  }
  
  .cert-title {
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: 1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 0.5rem;
    line-height: 1.3;
  }
  
  .cert-institution {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
  
  .cert-year {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Filter main education (degree and diploma) and certifications
  const mainEducation = educationData.filter(item => item.type === 'degree' || item.type === 'diploma');
  const certifications = educationData.filter(item => item.type === 'certification');

  const getEducationIcon = (type) => {
    return type === 'degree' ? FaGraduationCap : FaCertificate;
  };

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
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <EducationContainer id="education" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <SectionTitle variants={itemVariants}>
          Education
        </SectionTitle>
        
        <SectionSubtitle variants={itemVariants}>
          Academic foundation and continuous learning journey
        </SectionSubtitle>
        
        <EducationGrid>
          {mainEducation.map((edu) => {
            const IconComponent = getEducationIcon(edu.type);
            return (
              <EducationCard
                key={edu.id}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 10 }}
              >
                <div className="education-header">
                  <div className="icon-container">
                    <IconComponent />
                  </div>
                  <div className="education-info">
                    <h3 className="degree">{edu.degree}</h3>
                    <div className="institution">{edu.institution}</div>
                  </div>
                </div>
                
                <div className="education-meta">
                  <div className="meta-item">
                    <FaCalendar className="icon" />
                    <span>{edu.duration}</span>
                  </div>
                  <div className="meta-item">
                    <FaMapMarkerAlt className="icon" />
                    <span>{edu.location}</span>
                  </div>
                </div>
                
                {edu.percentage && (
                  <div className="percentage-container">
                    <FaChartLine className="percentage-icon" />
                    <div className="percentage-info">
                      <div className="percentage-label">Academic Performance</div>
                      <div className="percentage-value">{edu.percentage}</div>
                    </div>
                  </div>
                )}
                
                <p className="description">{edu.description}</p>
                
                <div className="coursework-section">
                  <div className="section-title">Key Coursework</div>
                  <div className="coursework-list">
                    {edu.relevantCoursework.slice(0, 6).map((course, index) => (
                      <span key={index} className="coursework-item">{course}</span>
                    ))}
                  </div>
                </div>
                
                <div className="achievements-section">
                  <div className="section-title">Achievements</div>
                  {edu.achievements.map((achievement, index) => (
                    <div key={index} className="achievement">
                      <FaMedal className="achievement-icon" />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </EducationCard>
            );
          })}
        </EducationGrid>
        
        {certifications.length > 0 && (
          <CertificationsSection>
            <CertificationsTitle variants={itemVariants}>
              Certifications
            </CertificationsTitle>
            
            <CertificationsGrid>
              {certifications.map((cert, index) => (
                <CertificationCard
                  key={cert.id}
                  variants={itemVariants}
                  whileHover={{ y: -3, scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                >
                  <div className="cert-icon">
                    <FaCertificate />
                  </div>
                  <h4 className="cert-title">{cert.degree}</h4>
                  <div className="cert-institution">{cert.institution}</div>
                  <div className="cert-year">{cert.duration}</div>
                </CertificationCard>
              ))}
            </CertificationsGrid>
          </CertificationsSection>
        )}
      </motion.div>
    </EducationContainer>
  );
};

export default Education;

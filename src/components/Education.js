import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaMapMarkerAlt, FaCalendar, FaCheckCircle } from 'react-icons/fa';
import { staggerContainer, fadeInUp } from '../styles/animations';
import educationData from '../data/education.json';

// ========================================
// STYLED COMPONENTS
// ========================================
const EducationContainer = styled.section`
  padding: 100px 2rem;
  max-width: 1000px;
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

const SubHeading = styled(motion.h3)`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  svg {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const EducationCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.glass.backdrop};
  backdrop-filter: blur(20px);
  border: 1px solid ${({ theme }) => theme.colors.glass.border};
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  }
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary}30;
    transform: translateY(-3px);
  }
  
  .institution {
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 1.05rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 0.3rem;
  }
  
  .degree {
    font-size: 0.9rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 0.6rem;
  }
  
  .meta-row {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    margin-bottom: 0.75rem;
    
    .meta-item {
      display: flex;
      align-items: center;
      gap: 0.3rem;
      font-size: 0.78rem;
      color: ${({ theme }) => theme.colors.textMuted};
      
      svg {
        font-size: 0.7rem;
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
  
  .percentage-badge {
    display: inline-block;
    background: ${({ theme }) => theme.colors.primaryGlass};
    color: ${({ theme }) => theme.colors.primary};
    padding: 0.2rem 0.6rem;
    border-radius: 6px;
    font-size: 0.8rem;
    font-weight: 700;
    font-family: ${({ theme }) => theme.fonts.mono};
    margin-bottom: 0.75rem;
  }
  
  .description {
    font-size: 0.85rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: 0.75rem;
  }
  
  .achievements {
    .ach-item {
      display: flex;
      align-items: flex-start;
      gap: 0.4rem;
      font-size: 0.8rem;
      color: ${({ theme }) => theme.colors.textSecondary};
      margin-bottom: 0.3rem;
      
      svg {
        color: ${({ theme }) => theme.colors.success};
        margin-top: 0.15rem;
        flex-shrink: 0;
        font-size: 0.65rem;
      }
    }
  }
`;

// ========================================
// EDUCATION COMPONENT
// ========================================
const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const degrees = educationData.filter(e => e.type === 'degree' || e.type === 'diploma');
  const certifications = educationData.filter(e => e.type === 'certification');

  return (
    <EducationContainer id="education" ref={ref}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <SectionLabel variants={fadeInUp}>// education</SectionLabel>
        <SectionTitle variants={fadeInUp}>
          Education & Certifications
        </SectionTitle>

        {/* Degrees */}
        <SubHeading variants={fadeInUp}>
          <FaGraduationCap /> Academic Background
        </SubHeading>
        
        <CardsGrid>
          {degrees.map((edu) => (
            <EducationCard key={edu.id} variants={fadeInUp}>
              <div className="institution">{edu.institution}</div>
              <div className="degree">{edu.degree}</div>
              <div className="meta-row">
                <div className="meta-item">
                  <FaCalendar />
                  <span>{edu.duration}</span>
                </div>
                <div className="meta-item">
                  <FaMapMarkerAlt />
                  <span>{edu.location}</span>
                </div>
              </div>
              {edu.percentage && (
                <div className="percentage-badge">{edu.percentage}</div>
              )}
              <p className="description">{edu.description}</p>
              {edu.achievements && (
                <div className="achievements">
                  {edu.achievements.slice(0, 3).map((ach, i) => (
                    <div className="ach-item" key={i}>
                      <FaCheckCircle />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              )}
            </EducationCard>
          ))}
        </CardsGrid>

        {/* Certifications */}
        <SubHeading variants={fadeInUp}>
          <FaCertificate /> Professional Certifications
        </SubHeading>
        
        <CardsGrid>
          {certifications.map((cert) => (
            <EducationCard key={cert.id + cert.degree} variants={fadeInUp}>
              <div className="institution">{cert.institution}</div>
              <div className="degree">{cert.degree}</div>
              <div className="meta-row">
                <div className="meta-item">
                  <FaCalendar />
                  <span>{cert.duration}</span>
                </div>
                <div className="meta-item">
                  <FaMapMarkerAlt />
                  <span>{cert.location}</span>
                </div>
              </div>
              <p className="description">{cert.description}</p>
              {cert.achievements && (
                <div className="achievements">
                  {cert.achievements.map((ach, i) => (
                    <div className="ach-item" key={i}>
                      <FaCheckCircle />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              )}
            </EducationCard>
          ))}
        </CardsGrid>
      </motion.div>
    </EducationContainer>
  );
};

export default Education;

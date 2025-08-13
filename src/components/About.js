import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa';
import { glassCard } from '../styles/mixins';

const AboutContainer = styled.section`
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

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 4rem;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const AboutText = styled(motion.div)`
  .paragraph {
    font-size: 1.125rem;
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

const AboutStats = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
`;

const StatCard = styled(motion.div)`
  ${glassCard}
  text-align: center;
  padding: 2rem 1rem;
  
  .number {
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: 2.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 0.5rem;
  }
  
  .label {
    font-size: 0.875rem;
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
  font-size: 1.875rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.text};
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCategory = styled(motion.div)`
  ${glassCard}
  padding: 2rem;
  
  .category-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
    
    .icon {
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.primary};
    }
    
    .title {
      font-family: ${({ theme }) => theme.fonts.secondary};
      font-size: 1.25rem;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.text};
    }
  }
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const SkillTag = styled(motion.span)`
  background: ${({ theme }) => theme.colors.primaryGlass};
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid ${({ theme }) => theme.colors.primary}30;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    transform: translateY(-2px);
  }
`;

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { number: '84.51%', label: 'Diploma Score' },
    { number: '2026', label: 'Expected Graduation' },
    { number: '10+', label: 'Projects Built' },
    { number: 'B.E (I.T)', label: 'Current Degree' }
  ];

  const skills = [
    {
      icon: FaCode,
      title: 'Frontend Development',
      skills: ['React', 'JavaScript', 'Tailwind CSS', 'Mobile App (Java)', 'HTML5', 'CSS3']
    },
    {
      icon: FaServer,
      title: 'Backend Development', 
      skills: ['Java SpringBoot', 'Python', 'REST APIs', 'GraphQL APIs', 'Spring Framework']
    },
    {
      icon: FaDatabase,
      title: 'Database & Storage',
      skills: ['MySQL', 'PostgreSQL', 'Database Design', 'Data Modeling']
    },
    {
      icon: FaTools,
      title: 'Tools & Others',
      skills: ['Git', 'API Development', 'Mobile Development', 'Problem Solving']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <AboutContainer id="about" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <SectionTitle variants={itemVariants}>
          About Me
        </SectionTitle>
        
        <SectionSubtitle variants={itemVariants}>
          Passionate about creating digital solutions that make a difference
        </SectionSubtitle>
        
        <AboutContent>
          <AboutText variants={itemVariants}>
            <p className="paragraph">
              Hi! I'm <span className="highlight">Yash Borse</span>, a dedicated and skilled student currently 
              pursuing a Bachelor of Engineering (BE) in Information Technology at JSPM BSIOTR, Wagholi, Pune, 
              with an expected graduation date in 2026.
            </p>
            <p className="paragraph">
              Having completed a diploma in Computer Science with an impressive score of <span className="highlight">84.51%</span>, 
              I have developed a strong foundation in software development. I possess expertise in 
              <span className="highlight">Java Spring Boot and MySQL</span>, allowing me to design and implement efficient 
              REST and GraphQL APIs.
            </p>
            <p className="paragraph">
              My experience extends to mobile app development, where I have applied my technical knowledge to create 
              user-friendly applications. I am passionate about leveraging technology to solve real-world problems 
              and am eager to contribute to innovative projects in the field.
            </p>
          </AboutText>
          
          <AboutStats variants={itemVariants}>
            {stats.map((stat, index) => (
              <StatCard
                key={stat.label}
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: 'spring', stiffness: 300, damping: 10 }}
              >
                <div className="number">{stat.number}</div>
                <div className="label">{stat.label}</div>
              </StatCard>
            ))}
          </AboutStats>
        </AboutContent>
        
        <SkillsSection>
          <SkillsTitle variants={itemVariants}>
            Skills & Expertise
          </SkillsTitle>
          
          <SkillsGrid>
            {skills.map((category, categoryIndex) => (
              <SkillCategory
                key={category.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 10 }}
              >
                <div className="category-header">
                  <category.icon className="icon" />
                  <h4 className="title">{category.title}</h4>
                </div>
                
                <SkillsList>
                  {category.skills.map((skill, skillIndex) => (
                    <SkillTag
                      key={skill}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ delay: skillIndex * 0.05 }}
                    >
                      {skill}
                    </SkillTag>
                  ))}
                </SkillsList>
              </SkillCategory>
            ))}
          </SkillsGrid>
        </SkillsSection>
      </motion.div>
    </AboutContainer>
  );
};

export default About;

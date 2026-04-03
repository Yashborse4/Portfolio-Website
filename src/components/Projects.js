import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaGooglePlay } from 'react-icons/fa';
import { staggerContainer, fadeInUp } from '../styles/animations';
import projectsData from '../data/projects.json';

// ========================================
// STYLED COMPONENTS
// ========================================
const ProjectsContainer = styled.section`
  padding: 100px 2rem;
  max-width: 1200px;
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
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.text};
  font-style: italic;
`;

const FilterBar = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 0.8rem;
  font-weight: 500;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  border: 1px solid ${({ $active, theme }) => 
    $active ? theme.colors.primary : theme.colors.glass.border};
  background: ${({ $active, theme }) => 
    $active ? theme.colors.primaryGlass : 'transparent'};
  color: ${({ $active, theme }) => 
    $active ? theme.colors.primary : theme.colors.textSecondary};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.glass.backdrop};
  backdrop-filter: blur(20px);
  border: 1px solid ${({ theme }) => theme.colors.glass.border};
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary}30;
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
  }
`;

const CardTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  
  .category {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.7rem;
    color: ${({ theme }) => theme.colors.primary};
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  .card-links {
    display: flex;
    gap: 0.75rem;
    
    a {
      color: ${({ theme }) => theme.colors.textMuted};
      font-size: 1rem;
      transition: color 0.2s ease;
      
      &:hover {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;

const ProjectTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.15rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const PlayStoreBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 3px;
  background: ${({ theme }) => theme.colors.primaryGlass};
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.15rem 0.5rem;
  border-radius: 4px;
  font-size: 0.6rem;
  font-weight: 600;
  
  svg {
    font-size: 0.6rem;
  }
`;

const ProjectDescription = styled.p`
  font-size: 0.88rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1rem;
  flex-grow: 1;
`;

const TechRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  margin-top: auto;
`;

const TechTag = styled.span`
  font-size: 0.7rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  background: ${({ theme }) => theme.colors.glass.backdrop};
  color: ${({ theme }) => theme.colors.textMuted};
  border: 1px solid ${({ theme }) => theme.colors.glass.border};
  padding: 0.15rem 0.5rem;
  border-radius: 4px;
`;

// ========================================
// PROJECTS COMPONENT
// ========================================
const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(projectsData.map(p => p.category))];
  
  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  // Projects that are published on Play Store
  const playStoreProjects = ['Wheel Deals'];

  return (
    <ProjectsContainer id="projects" ref={ref}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <SectionLabel variants={fadeInUp}>// projects</SectionLabel>
        <SectionTitle variants={fadeInUp}>
          Featured Work
        </SectionTitle>

        <FilterBar variants={fadeInUp}>
          {categories.map(cat => (
            <FilterButton
              key={cat}
              $active={filter === cat}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </FilterButton>
          ))}
        </FilterBar>

        <ProjectsGrid>
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              variants={fadeInUp}
              layout
            >
              <CardTop>
                <span className="category">{project.category}</span>
                <div className="card-links">
                  {project.githubUrl && project.githubUrl !== '#' && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <FaGithub />
                    </a>
                  )}
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                      <FaExternalLinkAlt style={{ fontSize: '0.85rem' }} />
                    </a>
                  )}
                </div>
              </CardTop>

              <ProjectTitle>
                {project.title}
                {playStoreProjects.includes(project.title) && (
                  <PlayStoreBadge>
                    <FaGooglePlay /> Play Store
                  </PlayStoreBadge>
                )}
              </ProjectTitle>

              <ProjectDescription>{project.description}</ProjectDescription>

              <TechRow>
                {project.technologies.slice(0, 5).map((tech, i) => (
                  <TechTag key={i}>{tech}</TechTag>
                ))}
                {project.technologies.length > 5 && (
                  <TechTag>+{project.technologies.length - 5}</TechTag>
                )}
              </TechRow>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </motion.div>
    </ProjectsContainer>
  );
};

export default Projects;

import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaServer, FaCode, FaMobile, FaBrain, FaNetworkWired, FaArrowRight, FaFolder } from 'react-icons/fa';
import { fadeInUp, staggerContainer, modalContent, modalBackdrop } from '../styles/animations';
import projects from '../data/projects.json';

// ========================================
// PROJECT MODAL
// ========================================
const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <ModalOverlay
        variants={modalBackdrop}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={onClose}
      >
        <ModalContent
          variants={modalContent}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={(e) => e.stopPropagation()}
        >
          <CloseButton onClick={onClose}>
            <FaTimes />
          </CloseButton>

          <ModalHeaderWrapper>
            {/* Simple solid header instead of gradient */}
            <ModalTitle>{project.title}</ModalTitle>
            <ModalCategory>{project.category}</ModalCategory>
          </ModalHeaderWrapper>

          <ModalBody>
            <ModalDescription>{project.description}</ModalDescription>

            <SectionLabel>Technology Stack</SectionLabel>
            <TechGrid>
              {project.technologies.map((tech) => (
                <TechBadge key={tech}>{tech}</TechBadge>
              ))}
            </TechGrid>

            {project.features && (
              <>
                <SectionLabel>Key Features</SectionLabel>
                <FeatureList>
                  {project.features.map((feature, idx) => (
                    <FeatureItem key={idx}>
                      <span className="bullet">•</span> {feature}
                    </FeatureItem>
                  ))}
                </FeatureList>
              </>
            )}

            <ActionButtons>
              {project.githubUrl && (
                <ActionButton href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <FaGithub /> Source Code
                </ActionButton>
              )}
              {project.liveUrl && project.liveUrl !== '#' && (
                <ActionButton href={project.liveUrl} target="_blank" rel="noopener noreferrer" $primary>
                  <FaExternalLinkAlt /> Live Demo
                </ActionButton>
              )}
            </ActionButtons>
          </ModalBody>
        </ModalContent>
      </ModalOverlay>
    </AnimatePresence>
  );
};

// ========================================
// COMPONENTS
// ========================================

const CategoryIcon = ({ category }) => {
  const icons = {
    'Backend API': FaServer,
    'Web Application': FaCode,
    'Mobile App': FaMobile,
    'AI/ML Application': FaBrain,
    'Network Utility': FaNetworkWired,
  };
  const Icon = icons[category] || FaFolder;
  return <Icon />;
};

const SpotlightProject = ({ project, onClick }) => (
  <SpotlightContainer
    layoutId={`project-${project.id}`}
    onClick={() => onClick(project)}
    whileHover={{ y: -5 }}
    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
  >
    <SpotlightInfo>
      <SpotlightTag>Flagship Project</SpotlightTag>
      <SpotlightTitle>{project.title}</SpotlightTitle>
      <SpotlightDesc>{project.description}</SpotlightDesc>

      <TechStackInline>
        {project.technologies.slice(0, 4).map(tech => (
          <TechDot key={tech}>{tech}</TechDot>
        ))}
      </TechStackInline>

      <SpotlightButton>
        View Case Study <FaArrowRight />
      </SpotlightButton>
    </SpotlightInfo>

    <SpotlightImageWrapper>
      {project.image ? (
        <SpotlightImage src={project.image} alt={project.title} />
      ) : (
        <VisualPlaceholder>
          <CategoryIcon category={project.category} />
        </VisualPlaceholder>
      )}

      {/* Decorative Floating Element */}
      <FloatingBadge className="badge-1" animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }}>
        <FaCode /> Full Stack
      </FloatingBadge>
    </SpotlightImageWrapper>
  </SpotlightContainer>
);

const ProjectCard = ({ project, onClick }) => (
  <CardContainer
    layoutId={`project-${project.id}`}
    onClick={() => onClick(project)}
    whileHover={{ y: -8 }}
    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
  >
    {project.image ? (
      <CardImage src={project.image} alt={project.title} />
    ) : (
      <CardIconWrapper>
        <CategoryIcon category={project.category} />
      </CardIconWrapper>
    )}

    <CardContent>
      <CardCategory>{project.category}</CardCategory>
      <CardTitle>{project.title}</CardTitle>
      <CardDesc>{project.description}</CardDesc>
      <CardLink>Read More <FaArrowRight /></CardLink>
    </CardContent>
  </CardContainer>
);

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Flagship: Sell-the-old-Car (ID 6)
  const flagshipProject = projects.find(p => p.id === 6);
  const featuredProjects = projects.filter(p => p.featured && p.id !== 6);

  return (
    <SectionContainer id="projects">
      <ContentWrapper>
        <SectionHeader variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <SectionTitle>
            <span className="accent">Selected</span> Works
          </SectionTitle>
          <SectionSubtitle>
            A curated selection of projects demonstrating full-stack engineering excellence.
          </SectionSubtitle>
        </SectionHeader>

        <LayoutGrid variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {/* Spotlight Section */}
          {flagshipProject && (
            <div variants={fadeInUp}>
              <SpotlightProject project={flagshipProject} onClick={setSelectedProject} />
            </div>
          )}

          {/* Featured Grid */}
          <FeaturedGrid variants={fadeInUp}>
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} project={project} onClick={setSelectedProject} />
            ))}
          </FeaturedGrid>
        </LayoutGrid>

        {/* Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </ContentWrapper>
    </SectionContainer>
  );
};

// ========================================
// STYLES
// ========================================

const SectionContainer = styled.section`
  padding: 6rem 0;
  background: ${({ theme }) => theme.colors.background};
  position: relative;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const SectionHeader = styled(motion.div)`
  margin-bottom: 4rem;
  text-align: center; // Center aligned for cleaner look
`;

const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
  
  .accent {
    color: ${({ theme }) => theme.colors.primary};
  }
  
  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
`;

const SectionSubtitle = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
`;

const LayoutGrid = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

// Spotlight Styles
const SpotlightContainer = styled(motion.div)`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;
  box-shadow: 0 10px 40px -10px rgba(0,0,0,0.05); // Subtle shadow
  cursor: pointer;
  min-height: 400px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    min-height: auto;
  }
`;

const SpotlightInfo = styled.div`
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (max-width: 968px) {
    padding: 2.5rem;
  }
`;

const SpotlightTag = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 1px;
  margin-bottom: 1rem;
`;

const SpotlightTitle = styled.h3`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
  line-height: 1.1;
`;

const SpotlightDesc = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.1rem;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const TechStackInline = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 2.5rem;
`;

const TechDot = styled.span`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const SpotlightButton = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 600;
    transition: gap 0.2s;
    
    ${SpotlightContainer}:hover & {
        gap: 0.8rem;
        color: ${({ theme }) => theme.colors.primary};
    }
`;

const SpotlightImageWrapper = styled.div`
    background: ${({ theme }) => theme.colors.background}; // Contrast background
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    
    @media (max-width: 968px) {
        height: 250px;
        order: -1;
    }
`;

const SpotlightImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
    
    ${SpotlightContainer}:hover & {
        transform: scale(1.05);
    }
`;

const VisualPlaceholder = styled.div`
    font-size: 8rem;
    color: ${({ theme }) => theme.colors.primary}20; // Very subtle brand color
    transform: rotate(-5deg);
    transition: transform 0.5s ease;
    
    ${SpotlightContainer}:hover & {
        transform: rotate(0deg) scale(1.05);
        color: ${({ theme }) => theme.colors.primary}30;
    }
`;

const FloatingBadge = styled(motion.div)`
    position: absolute;
    background: ${({ theme }) => theme.colors.surface};
    padding: 0.8rem 1.2rem;
    border-radius: 12px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.05);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 600;
    bottom: 20%;
    right: 15%;
    z-index: 2;
    
    svg { color: ${({ theme }) => theme.colors.primary}; }
`;

// Card Styles
const FeaturedGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CardContainer = styled(motion.div)`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 16px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: border-color 0.3s, transform 0.3s;
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary}40;
    transform: translateY(-5px);
  }
`;

const CardIconWrapper = styled.div`
    width: 50px;
    height: 50px;
    background: ${({ theme }) => theme.colors.background};
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
`;

const CardImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 12px;
    margin-bottom: 1.5rem;
`;

const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const CardCategory = styled.span`
    font-size: 0.8rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: 0.5rem;
    font-weight: 600;
`;

const CardTitle = styled.h4`
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 0.8rem;
    font-weight: 700;
`;

const CardDesc = styled.p`
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

const CardLink = styled.span`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 600;
    font-size: 0.9rem;
    margin-top: auto;
    transition: gap 0.2s;
    
    ${CardContainer}:hover & {
        gap: 0.8rem;
        color: ${({ theme }) => theme.colors.primary};
    }
`;

// Modal Styles (Refined)
const ModalOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const ModalContent = styled(motion.div)`
  background: ${({ theme }) => theme.colors.surface};
  width: 100%;
  max-width: 800px;
  border-radius: 20px;
  overflow: hidden;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 25px 50px -12px rgba(0,0,0,0.2);
`;

const ModalHeaderWrapper = styled.div`
  padding: 3rem 2.5rem 1.5rem 2.5rem;
  background: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const ModalTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.5rem;
`;

const ModalCategory = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.9rem;
`;

const ModalBody = styled.div`
  padding: 2.5rem;
  overflow-y: auto;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    transform: rotate(90deg);
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ModalDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 2.5rem;
`;

const SectionLabel = styled.h4`
    font-size: 0.85rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 1rem;
`;

const TechGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 2.5rem;
`;

const TechBadge = styled.span`
  padding: 0.4rem 0.8rem;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 3rem;
`;

const FeatureItem = styled.div`
  display: flex;
  gap: 0.75rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.5;
  
  .bullet {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

const ActionButton = styled.a`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem;
  border-radius: 12px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s;
  
  ${({ $primary, theme }) => $primary ? `
    background: ${theme.colors.primary};
    color: white;
    box-shadow: 0 4px 15px ${theme.colors.primaryGlass};
    &:hover { opacity: 0.9; transform: translateY(-2px); }
  ` : `
    background: ${theme.colors.background};
    color: ${theme.colors.text};
    border: 1px solid ${theme.colors.border};
    &:hover { border-color: ${theme.colors.text}; transform: translateY(-2px); }
  `}
`;

export default Projects;

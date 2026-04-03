import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane, FaMapMarkerAlt } from 'react-icons/fa';
import { staggerContainer, fadeInUp } from '../styles/animations';

// ========================================
// STYLED COMPONENTS
// ========================================
const ContactContainer = styled.section`
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
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
  font-style: italic;
`;

const SectionSubtitle = styled(motion.p)`
  text-align: center;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 3rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ConnectCards = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ConnectCard = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem;
  background: ${({ theme }) => theme.colors.glass.backdrop};
  backdrop-filter: blur(20px);
  border: 1px solid ${({ theme }) => theme.colors.glass.border};
  border-radius: 12px;
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary}30;
    transform: translateX(4px);
    
    .icon-box {
      background: ${({ theme }) => theme.colors.primary};
      color: white;
    }
  }
  
  .icon-box {
    width: 44px;
    height: 44px;
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.primaryGlass};
    color: ${({ theme }) => theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    flex-shrink: 0;
  }
  
  .card-text {
    .card-label {
      font-size: 0.75rem;
      color: ${({ theme }) => theme.colors.textMuted};
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    
    .card-value {
      font-size: 0.95rem;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.text};
    }
  }
`;

const LocationInfo = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  background: ${({ theme }) => theme.colors.glass.backdrop};
  backdrop-filter: blur(20px);
  border: 1px solid ${({ theme }) => theme.colors.glass.border};
  border-radius: 12px;
  
  .icon-box {
    width: 44px;
    height: 44px;
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.primaryGlass};
    color: ${({ theme }) => theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    flex-shrink: 0;
  }
  
  .location-text {
    .loc-label {
      font-size: 0.75rem;
      color: ${({ theme }) => theme.colors.textMuted};
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    
    .loc-value {
      font-size: 0.95rem;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.text};
    }
  }
`;

const ContactForm = styled(motion.form)`
  background: ${({ theme }) => theme.colors.glass.backdrop};
  backdrop-filter: blur(20px);
  border: 1px solid ${({ theme }) => theme.colors.glass.border};
  border-radius: 12px;
  padding: 2rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.25rem;
  
  label {
    display: block;
    font-size: 0.8rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.textSecondary};
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 0.5rem;
  }
  
  input, textarea {
    width: 100%;
    padding: 0.75rem 1rem;
    background: ${({ theme }) => theme.colors.surface};
    border: 1px solid ${({ theme }) => theme.colors.glass.border};
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 0.9rem;
    transition: border-color 0.2s ease;
    
    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.primary};
    }
    
    &::placeholder {
      color: ${({ theme }) => theme.colors.textMuted};
    }
  }
  
  textarea {
    min-height: 120px;
    resize: vertical;
  }
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  padding: 0.85rem;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }
`;

// ========================================
// CONTACT COMPONENT
// ========================================
const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '', email: '', subject: '', message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:yashborse432005@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.open(mailtoLink, '_blank');
  };

  const connectLinks = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'yashborse432005@gmail.com',
      href: 'mailto:yashborse432005@gmail.com'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/yashborse',
      href: 'https://www.linkedin.com/in/yashborse'
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'github.com/yashborse4',
      href: 'https://github.com/yashborse4'
    }
  ];

  return (
    <ContactContainer id="contact" ref={ref}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <SectionLabel variants={fadeInUp}>// contact</SectionLabel>
        <SectionTitle variants={fadeInUp}>
          Let's Connect
        </SectionTitle>
        <SectionSubtitle variants={fadeInUp}>
          Have a project in mind or want to collaborate? I'd love to hear from you.
        </SectionSubtitle>

        <ContactGrid>
          <ConnectCards variants={fadeInUp}>
            {connectLinks.map(link => (
              <ConnectCard
                key={link.label}
                href={link.href}
                target={link.label !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                whileHover={{ x: 4 }}
              >
                <div className="icon-box">
                  <link.icon />
                </div>
                <div className="card-text">
                  <div className="card-label">{link.label}</div>
                  <div className="card-value">{link.value}</div>
                </div>
              </ConnectCard>
            ))}
            
            <LocationInfo>
              <div className="icon-box">
                <FaMapMarkerAlt />
              </div>
              <div className="location-text">
                <div className="loc-label">Location</div>
                <div className="loc-value">India</div>
              </div>
            </LocationInfo>
          </ConnectCards>

          <ContactForm
            variants={fadeInUp}
            onSubmit={handleSubmit}
          >
            <FormGroup>
              <label>Name</label>
              <input 
                type="text" 
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <label>Email</label>
              <input 
                type="email" 
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <label>Subject</label>
              <input 
                type="text" 
                name="subject"
                placeholder="What's this about?"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <label>Message</label>
              <textarea 
                name="message"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <SubmitButton
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <FaPaperPlane /> Send Message
            </SubmitButton>
          </ContactForm>
        </ContactGrid>
      </motion.div>
    </ContactContainer>
  );
};

export default Contact;

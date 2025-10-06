import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import { glassCard } from '../styles/mixins';

const ContactContainer = styled.section`
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

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ContactInfo = styled(motion.div)`
  .info-title {
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: 1.5rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 1rem;
  }
  
  .info-description {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
  }
`;

const ContactInfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const ContactInfoItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.glass.backdrop};
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.colors.glass.border};
  border-radius: 12px;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => theme.colors.glass.backdropHover};
    transform: translateX(5px);
  }
  
  .icon {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.primary};
    flex-shrink: 0;
  }
  
  .content {
    .label {
      font-size: 0.875rem;
      color: ${({ theme }) => theme.colors.textMuted};
      margin-bottom: 0.25rem;
    }
    
    .value {
      font-weight: 500;
      color: ${({ theme }) => theme.colors.text};
    }
  }
`;

const SocialLinks = styled.div`
  .social-title {
    font-size: 1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 1rem;
  }
  
  .social-list {
    display: flex;
    gap: 1rem;
  }
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: ${({ theme }) => theme.colors.glass.backdrop};
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.colors.glass.border};
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.2rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    transform: translateY(-3px);
  }
`;

const ContactForm = styled(motion.form)`
  ${glassCard}
  padding: 2rem;
`;

const FormTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1.5rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  
  label {
    display: block;
    font-size: 0.875rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 0.5rem;
  }
  
  input, textarea {
    width: 100%;
    padding: 0.875rem 1rem;
    background: ${({ theme }) => theme.colors.glass.backdrop};
    border: 1px solid ${({ theme }) => theme.colors.glass.border};
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 1rem;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    
    &::placeholder {
      color: ${({ theme }) => theme.colors.textMuted};
    }
    
    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.primary};
      background: ${({ theme }) => theme.colors.glass.backdropHover};
    }
  }
  
  textarea {
    min-height: 120px;
    resize: vertical;
  }
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  padding: 0.875rem 1.5rem;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.accent});
  color: white;
  border: none;
  border-radius: 8px;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px ${({ theme }) => theme.colors.primary}40;
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const SuccessMessage = styled(motion.div)`
  background: ${({ theme }) => theme.colors.successGlass};
  color: ${({ theme }) => theme.colors.success};
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.success}30;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'yashborse432005@gmail.com',
      href: 'mailto:yashborse432005@gmail.com'
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+91 940 391 9940',
      href: 'tel:+919403919940'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Maharashtra, India',
      href: null
    }
  ];

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/yashborse4', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/yashborse', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://twitter.com/yashborse4', label: 'Twitter' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }, 2000);
  };

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
    <ContactContainer id="contact" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <SectionTitle variants={itemVariants}>
          Get In Touch
        </SectionTitle>
        
        <SectionSubtitle variants={itemVariants}>
          Let's discuss your next project or just say hello!
        </SectionSubtitle>
        
        <ContactContent>
          <ContactInfo variants={itemVariants}>
            <h3 className="info-title">Let's Connect</h3>
            <p className="info-description">
              I'm always interested in hearing about new opportunities and 
              exciting projects. Whether you have a question or just want to 
              say hi, I'll try my best to get back to you!
            </p>
            
            <ContactInfoList>
              {contactInfo.map((info, index) => (
                <ContactInfoItem
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  as={info.href ? 'a' : 'div'}
                  href={info.href}
                  target={info.href?.startsWith('mailto:') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                >
                  <info.icon className="icon" />
                  <div className="content">
                    <div className="label">{info.label}</div>
                    <div className="value">{info.value}</div>
                  </div>
                </ContactInfoItem>
              ))}
            </ContactInfoList>
            
            <SocialLinks>
              <div className="social-title">Follow Me</div>
              <div className="social-list">
                {socialLinks.map((social, index) => (
                  <SocialLink
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <social.icon />
                  </SocialLink>
                ))}
              </div>
            </SocialLinks>
          </ContactInfo>
          
          <ContactForm
            variants={itemVariants}
            onSubmit={handleSubmit}
            whileHover={{ scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 300, damping: 10 }}
          >
            <FormTitle>Send Message</FormTitle>
            
            <FormGroup>
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Yash Borse"
                required
              />
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="yashborse432005@gmail.com"
                required
              />
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="What's this about?"
                required
              />
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell me about your project..."
                required
              />
            </FormGroup>
            
            <SubmitButton
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  >
                    ⚪
                  </motion.div>
                  Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  Send Message
                </>
              )}
            </SubmitButton>
            
            {showSuccess && (
              <SuccessMessage
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <FaCheckCircle />
                Message sent successfully! I'll get back to you soon.
              </SuccessMessage>
            )}
          </ContactForm>
        </ContactContent>
      </motion.div>
    </ContactContainer>
  );
};

export default Contact;

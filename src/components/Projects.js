import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Car Selling Platform',
    description: 'Scalable platform using Spring Boot with RESTful/GraphQL APIs. Secured with Spring Security, JWT, and OAuth. Microservices architecture.',
    tech: ['Spring Boot', 'React', 'Microservices', 'OAuth'],
    github: 'https://github.com/Yashborse4/OldCarFrontend', // Assuming link based on repo name
    demo: '#',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Duplicate File Detection',
    description: 'High-performance Java app using SHA-256 hashing and bit-by-bit comparison. Integrated Apache Kafka and Docker.',
    tech: ['Java', 'MySQL', 'Kafka', 'Docker'],
    github: 'https://github.com/Yashborse4/Duplicate-File-Detection-System',
    demo: '#',
    color: 'from-blue-600 to-cyan-600'
  },
  {
    title: 'KindNet',
    description: 'Full stack application with TypeScript frontend and Python backend.',
    tech: ['TypeScript', 'Python', 'Full Stack'],
    github: 'https://github.com/Yashborse4/KindNet-Frotend',
    demo: '#',
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'AutoSMS-Mailer',
    description: 'A private tool that reads incoming SMS and instantly sends them to your email—no servers, no manual action.',
    tech: ['Kotlin', 'Android', 'Automation'],
    github: 'https://github.com/Yashborse4/AutoSMS-Mailer',
    demo: '#',
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'Campus Surveillance',
    description: 'App to track the movement of students and visitors using Python.',
    tech: ['Python', 'Surveillance', 'Tracking'],
    github: 'https://github.com/Yashborse4/Campus-Surveillance',
    demo: '#',
    color: 'from-indigo-500 to-blue-500'
  },
  {
    title: 'Student Tracking',
    description: 'Computer vision project using cameras to monitor and track student movements.',
    tech: ['Python', 'Computer Vision', 'OpenCV'],
    github: 'https://github.com/Yashborse4/Student-Tracking',
    demo: '#',
    color: 'from-yellow-500 to-orange-500'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 font-sora"
        >
          Featured <span className="text-blue-500">Projects</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg hover:border-gray-300 transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

              <div className="p-8 h-full flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold font-sora text-slate-900 group-hover:text-blue-600 transition-all duration-300">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-blue-600 transition-colors"
                    >
                      <FaGithub size={22} />
                    </a>
                    {project.demo !== '#' && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-blue-600 transition-colors"
                      >
                        <FaExternalLinkAlt size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-slate-600 mb-6 font-poppins text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

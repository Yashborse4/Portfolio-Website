import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaPython, FaReact, FaDocker } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiSpringboot, SiGraphql, SiMysql } from 'react-icons/si';

// Structured to exactly match the SKILLS section of the resume
const skillCategories = [
  {
    title: 'Back-End Development',
    skills: [
      { name: 'Java', icon: <FaJava className="text-red-500" /> },
      { name: 'Spring Boot', icon: <SiSpringboot className="text-green-500" /> },
      { name: 'Python', icon: <FaPython className="text-yellow-300" /> },
      { name: 'Docker', icon: <FaDocker className="text-blue-500" /> },
      { name: 'Database Management (MySQL)', icon: <SiMysql className="text-blue-500" /> },
    ],
  },
  {
    title: 'API Development',
    skills: [
      { name: 'REST APIs', icon: <span className="text-xl font-bold text-gray-400">REST</span> },
      { name: 'GraphQL', icon: <SiGraphql className="text-pink-500" /> },
      { name: 'WebSockets', icon: <span className="text-xl font-bold text-gray-400">WS</span> },
    ],
  },
  {
    title: 'Front-End Development',
    skills: [
      { name: 'React Native', icon: <FaReact className="text-blue-400" /> },
      { name: 'React', icon: <FaReact className="text-blue-400" /> },
      { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
      { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
      {
        name: 'CSS-in-JS (Styled Components)',
        icon: <span className="text-xl font-bold text-gray-400">CSS</span>,
      },
      { name: 'UI/UX Design', icon: <span className="text-xl font-bold text-gray-400">UX</span> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-slate-900 mb-16 font-sora"
        >
          My <span className="text-blue-500">Skills</span>
        </motion.h2>

        <div className="space-y-12">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex}>
              <h3 className="text-2xl font-bold text-slate-700 mb-6 font-sora border-l-4 border-blue-500 pl-4">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.05)' }}
                    className="bg-white shadow-sm border border-gray-100 rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:border-blue-500/50 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="text-4xl group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-all duration-300">
                      {skill.icon}
                    </div>
                    <span className="text-slate-600 font-medium font-poppins text-sm text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Cross-Platform Mobile Developer (React Native)',
    company: 'Hindustan Aeronautics Limited (HAL)',
    period: 'Oct 2024 - Present',
    description: 'Building secure, offline-ready Android and React Native systems for aviation-grade operations.',
    achievements: [
      'LCA Inspection & Review Sheet Automation – Developed a digital inspection system to manage 1,00,000+ mandatory checks for LCA aircraft components, replacing manual review sheets to reduce human error and improve traceability.',
      'Designed structured data capture modules to ensure inspection accuracy during assembly and pre-flight tests, with real-time review logs for supervisors to improve workflow transparency.',
      'Enhanced compliance with aviation safety standards through systematic validation and audit-ready inspection records.',
      'LCA Loom Board Projection System – Built an advanced loom board projection tool with an ultra-short-throw projector to replace manual wire-routing charts and printed boards, achieving up to 90% reduction in loom routing time.',
      'Added zoom, highlight, and navigation features to quickly identify specific wiring paths, making loom setup faster, cleaner, and error-free.',
      'SU-30 MKI Dismantling & Damage Management – Developed a secure Android-based inspection system for recording defects during SU-30 MKI overhaul with image capture, barcode tagging, and part identification for precise documentation.',
      'Improved communication between ground teams and overhaul engineers through instant data syncing, reducing paperwork and ensuring traceable repair history for every dismantled component.',
      'LCA Tejas Loom Management App – Created a dedicated Android app to manage loom assemblies used in LCA Tejas aircraft, automating storage, retrieval, version control, and routing details for complex wiring looms.',
      'Enabled technicians to quickly identify loom numbers, lengths, checkpoints, and installation guidelines while adding secure access control for sensitive wiring data.',
      'CNC Shop Production & Job Tracking – Built an Android application to manage CNC shop job allocation, providing operators with real-time job lists, work order details, part dimensions, and toolpath information.',
      'Designed supervisor views to track job progress, delays, and machine utilization, improving production scheduling accuracy and maintaining complete history logs for audits and part traceability.',
      'Military-Grade Android Launcher – Developed a custom high-security Android launcher with full device lockdown, including disabled WiFi/Bluetooth/Hotspot, blocked unauthorized apps, and restricted system settings.',
      'Implemented single-app or mission-specific mode with tamper-proof protections and remote supervisor configuration of allowed features, creating a distraction-free, secure UI for defence environments and reducing device misuse and data leakage risks.',
    ],
    tech: ['React Native', 'Android', 'Java', 'Kotlin', 'SQLite', 'Redux'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white text-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 font-sora"
        >
          Professional <span className="text-blue-500">Experience</span>
        </motion.h2>

        <div className="relative border-l border-gray-200 ml-3 md:ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute -left-1.5 bg-blue-500 h-3 w-3 rounded-full border-4 border-white"></div>

              <div className="bg-white shadow-md p-6 rounded-xl border border-gray-100 hover:border-blue-500/30 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 font-sora">{exp.title}</h3>
                    <p className="text-blue-600 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-slate-500 text-sm mt-2 md:mt-0 font-mono">{exp.period}</span>
                </div>

                <p className="text-slate-600 mb-4 font-poppins italic">{exp.description}</p>

                <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2 font-poppins text-sm">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded bg-blue-50 text-blue-600 border border-blue-100"
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

export default Experience;

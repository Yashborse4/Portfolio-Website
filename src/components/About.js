import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center gap-12"
        >
          {/* Profile image */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-gray-800">
              <img
                src="/assets/pic.jpg"
                alt="Yash Borse profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text content */}
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-4xl font-bold mb-6 font-sora">
              About <span className="text-blue-500">Me</span>
            </h2>

            <p className="text-slate-600 text-lg mb-4 font-poppins leading-relaxed">
              I am a Full Stack and Mobile Developer specializing in Java, Spring Boot, React, and
              React Native. I focus on building secure, scalable, and high-performance applications,
              with experience in RESTful and GraphQL API design, microservices, and cloud-native
              deployments using Docker, Kubernetes, and CI/CD pipelines.
            </p>

            <p className="text-slate-600 text-lg mb-6 font-poppins leading-relaxed">
              I enjoy optimizing backend performance, designing efficient databases with MySQL and
              PostgreSQL, and integrating Redis for caching. Clean architecture, automation, and
              measurable impact guide how I build software across platforms.
            </p>

            {/* Tech chips aligned with strengths */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
              {[
                'Java & Spring Boot',
                'REST & GraphQL APIs',
                'React & React Native',
                'MySQL & PostgreSQL',
                'Docker, Kubernetes, CI/CD',
                'Redis & WebSockets',
              ].map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full bg-slate-50 border border-gray-200 text-sm text-blue-600 hover:bg-blue-50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Education and focus */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white shadow-sm border border-gray-200 rounded-xl p-4 text-left">
                <h3 className="text-lg font-semibold mb-2 font-sora">Education</h3>
                <p className="text-sm text-slate-600 font-poppins">
                  <span className="font-semibold">B.E. Information Technology</span>, JSPM BSIOTR, Pune (2026)
                  — CGPA 7.69/10
                </p>
                <p className="text-sm text-slate-600 font-poppins mt-2">
                  <span className="font-semibold">Diploma, Computer Science</span>, Shri H.H.J.B Polytechnic,
                  Chandwad (2023) — 84.51%
                </p>
              </div>

              <div className="bg-white shadow-sm border border-gray-200 rounded-xl p-4 text-left">
                <h3 className="text-lg font-semibold mb-2 font-sora">Focus Areas</h3>
                <p className="text-sm text-slate-600 font-poppins">
                  Full stack and mobile development with Java Spring Boot, React, and React Native.
                  Strong focus on secure-by-design systems, backend performance, and automation using
                  Docker, Kubernetes, and modern DevOps practices.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
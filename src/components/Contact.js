import React from 'react';
import { motion } from 'framer-motion';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
} from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white text-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-50/50 to-white pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 font-sora"
        >
          Get In <span className="text-blue-500">Touch</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 font-sora">Let's Connect</h3>
            <p className="text-slate-600 mb-8 font-poppins">
              I'm currently open to new opportunities and collaborations. Whether you have a question,
              want to discuss a project, or just say hi, feel free to reach out!
            </p>

            <div className="space-y-4">
              {/* Email */}
              <a
                href="mailto:yashborse432005@gmail.com"
                className="flex items-center gap-4 text-slate-600 hover:text-blue-600 transition-colors"
              >
                <div className="p-3 bg-slate-100 rounded-full">
                  <FaEnvelope size={20} />
                </div>
                <span>yashborse432005@gmail.com</span>
              </a>

              {/* Phone */}
              <div className="flex items-center gap-4 text-slate-600">
                <div className="p-3 bg-slate-100 rounded-full">
                  <FaPhone size={20} />
                </div>
                <span>+91 9403919940</span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 text-slate-600">
                <div className="p-3 bg-slate-100 rounded-full">
                  <FaMapMarkerAlt size={20} />
                </div>
                <span>India</span>
              </div>

              {/* External portfolio */}
              <div className="flex items-center gap-4 text-slate-600">
                <div className="p-3 bg-slate-100 rounded-full">
                  <FaExternalLinkAlt size={20} />
                </div>
                <a
                  href="https://yashborse4.github.io/Portfolio-Website/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-600 transition-colors"
                >
                  View external portfolio
                </a>
              </div>

              {/* Socials */}
              <div className="flex gap-4 mt-6">
                {[
                  { icon: <FaGithub size={24} />, href: 'https://github.com/yashborse' },
                  { icon: <FaLinkedin size={24} />, href: 'https://www.linkedin.com/in/yashborse' },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="p-3 bg-slate-100 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: contact form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white shadow-lg p-8 rounded-2xl border border-gray-100"
          >
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-500 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-gray-300 text-slate-900 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-500 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-gray-300 text-slate-900 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-500 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-gray-300 text-slate-900 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold hover:opacity-90 transition-opacity transform active:scale-95"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
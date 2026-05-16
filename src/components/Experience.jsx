import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-violet">02. </span>
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-violet rounded-full"></div>
        </motion.div>

        <div className="relative border-l-2 border-border-glass ml-4 md:ml-0">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="mb-12 pl-8 relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-bg-dark border-2 border-neon-cyan flex items-center justify-center text-neon-cyan">
                <FaBriefcase size={12} />
              </div>

              <div className="glass p-8 rounded-2xl hover-glow group transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-neon-cyan transition-colors">{exp.role}</h3>
                    <h4 className="text-xl text-violet font-semibold">{exp.company}</h4>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <p className="text-gray-400 font-mono text-sm">{exp.duration}</p>
                    <p className="text-gray-500 text-sm">{exp.location}</p>
                  </div>
                </div>

                <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                  {exp.contributions.map((item, index) => (
                    <li key={index} className="pl-2">{item}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.techStack.map((tech, index) => (
                    <span key={index} className="px-3 py-1 text-xs font-mono text-electric-blue bg-electric-blue/10 rounded-full border border-electric-blue/20">
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

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Microlink from '@microlink/react';

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-violet">04. </span>
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-violet rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl overflow-hidden hover-glow group flex flex-col"
            >
              {/* Microlink Preview (or custom preview block if no valid url) */}
              <div className="h-64 w-full bg-bg-darker relative overflow-hidden border-b border-border-glass">
                {project.demoUrl || project.githubUrl ? (
                  <div className="w-full h-full scale-105 group-hover:scale-110 transition-transform duration-500">
                    <Microlink 
                      url={project.demoUrl || project.githubUrl} 
                      style={{ width: '100%', height: '100%', border: 'none', borderRadius: 0, backgroundColor: 'transparent' }}
                      media="image"
                    />
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-500 font-mono">
                    No preview available
                  </div>
                )}
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark to-transparent opacity-80"></div>
              </div>

              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neon-cyan transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech, index) => (
                    <span key={index} className="px-3 py-1 text-xs font-mono text-violet bg-violet/10 rounded-full border border-violet/20">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-white hover:scale-105 transition-all">
                      <FaGithub size={20} />
                      <span className="font-medium">GitHub</span>
                    </a>
                  )}
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-neon-cyan hover:text-white hover:scale-105 transition-all ml-4">
                      <FaExternalLinkAlt size={18} />
                      <span className="font-medium">Live Demo</span>
                    </a>
                  )}
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

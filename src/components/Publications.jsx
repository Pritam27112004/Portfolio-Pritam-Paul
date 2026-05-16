import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { FaBookOpen, FaExternalLinkAlt } from 'react-icons/fa';

const Publications = () => {
  const { publications } = portfolioData;

  return (
    <section id="publications" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-violet">06. </span>
            Publications & Research
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-violet rounded-full"></div>
        </motion.div>

        <div className="space-y-8">
          {publications.map((pub, i) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass p-8 rounded-2xl hover-glow group transition-all flex flex-col md:flex-row gap-6 border-l-4 border-l-violet hover:border-l-neon-cyan"
            >
              <div className="flex-shrink-0 pt-1 hidden md:block">
                <FaBookOpen className="text-violet group-hover:text-neon-cyan text-3xl transition-colors" />
              </div>
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-neon-cyan transition-colors">
                    {pub.title}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold whitespace-nowrap ${pub.status === 'Published' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'}`}>
                    {pub.status}
                  </span>
                </div>
                
                <p className="text-gray-400 mb-4 leading-relaxed text-sm md:text-base italic">
                  "{pub.abstract}"
                </p>
                
                <div className="flex items-center justify-between mt-6">
                  <span className="text-sm font-mono text-electric-blue">
                    {pub.domain}
                  </span>
                  
                  {pub.link && (
                    <a href={pub.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                      <FaExternalLinkAlt size={14} />
                      <span className="text-sm">Read Paper</span>
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

export default Publications;

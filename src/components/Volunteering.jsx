import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { FaHeart, FaUsers } from 'react-icons/fa';

const Volunteering = () => {
  const { volunteering } = portfolioData;

  return (
    <section id="volunteering" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-violet">05. </span>
            Volunteering & Leadership
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-violet rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {volunteering.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass p-8 rounded-2xl hover-glow group transition-all relative overflow-hidden"
            >
              <div className="absolute -right-6 -top-6 text-violet/10 group-hover:text-violet/20 transition-colors">
                <FaHeart size={100} />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-electric-blue/20 flex items-center justify-center text-electric-blue">
                    <FaUsers size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-neon-cyan transition-colors">{item.role}</h3>
                    <h4 className="text-md text-gray-400 font-mono">{item.organization}</h4>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {item.summary}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.techStack.map((tech, index) => (
                    <span key={index} className="px-3 py-1 text-xs font-mono text-neon-cyan bg-neon-cyan/10 rounded-full border border-neon-cyan/20">
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

export default Volunteering;

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  const { introduction, stats } = portfolioData.about;

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-violet">01. </span>
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-violet rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {introduction}
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I specialize in <span className="text-neon-cyan">Software Engineering</span>, <span className="text-violet">Machine Learning</span>, and building premium web experiences. Whether it's crafting an intuitive frontend or architecting a robust backend model, I'm always eager to take on new challenges.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, i) => (
              <div key={i} className="glass p-6 rounded-2xl flex flex-col items-center justify-center text-center hover-glow group cursor-pointer">
                <h3 className="text-4xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                  {stat.value}
                </h3>
                <p className="text-sm text-gray-400 font-mono">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { portfolioData } from '../data/portfolioData';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaReact, FaNodeJs, FaPython, FaDocker } from 'react-icons/fa';
import { SiTensorflow } from 'react-icons/si';

const floatingIcons = [
  { Icon: FaReact, color: '#61DAFB', delay: 0 },
  { Icon: FaNodeJs, color: '#339933', delay: 0.2 },
  { Icon: FaPython, color: '#3776AB', delay: 0.4 },
  { Icon: SiTensorflow, color: '#FF6F00', delay: 0.6 },
  { Icon: FaDocker, color: '#2496ED', delay: 0.8 },
  { Icon: FaGithub, color: '#FFFFFF', delay: 1.0 },
];

const Hero = () => {
  const { name, roles, description, socials } = portfolioData.hero;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Floating Background Icons */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {floatingIcons.map((item, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: item.delay,
              ease: "easeInOut"
            }}
          >
            <item.Icon size={40} color={item.color} />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-neon-cyan font-mono mb-4"
        >
          Hi, my name is
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-6 text-glow text-white"
        >
          {name}.
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl md:text-5xl font-bold mb-6 text-gray-400 h-16"
        >
          I am a{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-violet">
            <Typewriter
              words={roles}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl text-lg text-gray-400 mb-10"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 mb-12"
        >
          <a href="#projects" className="px-8 py-3 rounded-full bg-gradient-to-r from-electric-blue to-violet text-white font-semibold hover-glow transition-all">
            View Projects
          </a>
          <a href="#contact" className="px-8 py-3 rounded-full border border-neon-cyan text-neon-cyan font-semibold hover:bg-neon-cyan/10 transition-all box-glow">
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex gap-6"
        >
          <a href={socials.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition-all"><FaGithub size={24} /></a>
          <a href={socials.linkedin} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-electric-blue hover:scale-110 transition-all"><FaLinkedin size={24} /></a>
          <a href={socials.instagram} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-pink-500 hover:scale-110 transition-all"><FaInstagram size={24} /></a>
          <a href={socials.email} className="text-gray-400 hover:text-neon-cyan hover:scale-110 transition-all"><FaEnvelope size={24} /></a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-neon-cyan rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

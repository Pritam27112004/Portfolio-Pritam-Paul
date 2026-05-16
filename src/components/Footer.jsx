import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const { socials } = portfolioData.hero;

  return (
    <footer className="border-t border-border-glass py-8 mt-12">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <div className="flex gap-6 mb-6">
          <a href={socials.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition-all"><FaGithub size={20} /></a>
          <a href={socials.linkedin} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-electric-blue hover:scale-110 transition-all"><FaLinkedin size={20} /></a>
          <a href={socials.instagram} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-pink-500 hover:scale-110 transition-all"><FaInstagram size={20} /></a>
          <a href={socials.email} className="text-gray-400 hover:text-neon-cyan hover:scale-110 transition-all"><FaEnvelope size={20} /></a>
        </div>
        <p className="text-gray-500 text-sm mb-2 font-mono text-center">
          Designed & Built by {portfolioData.hero.name}
        </p>
        <p className="text-gray-600 text-xs font-mono">
          Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;

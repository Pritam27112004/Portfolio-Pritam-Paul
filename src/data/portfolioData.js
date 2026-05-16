export const portfolioData = {
  hero: {
    name: "Pritam Paul",
    roles: ["Software Engineer", "AI & ML Enthusiast", "Web3 Explorer"],
    description: "I build exceptional and accessible digital experiences for the web and beyond.",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      email: "mailto:contact@example.com"
    }
  },
  about: {
    introduction: "I am a passionate Software Engineer with a strong interest in Machine Learning, Deep Learning, and Full-Stack Web Development. I love contributing to open source, writing research papers, and building innovative solutions that solve real-world problems.",
    stats: [
      { label: "Projects Completed", value: "20+" },
      { label: "Research Papers", value: "3" },
      { label: "Technologies Learned", value: "15+" },
      { label: "Open Source Contributions", value: "50+" }
    ]
  },
  experience: [
    {
      id: 1,
      role: "Software Services Internship",
      company: "Tech Corp",
      duration: "Jun 2025 - Present",
      location: "Remote",
      techStack: ["React", "Node.js", "AWS"],
      contributions: [
        "Developed scalable microservices",
        "Improved application performance by 30%",
        "Collaborated with cross-functional teams"
      ]
    },
    {
      id: 2,
      role: "Web Development Projects Intern",
      company: "Startup Inc",
      duration: "Jan 2025 - May 2025",
      location: "New York, NY",
      techStack: ["Vue.js", "Firebase", "Tailwind CSS"],
      contributions: [
        "Built responsive landing pages",
        "Integrated payment gateways",
        "Optimized SEO, increasing traffic by 40%"
      ]
    }
  ],
  skills: [
    { category: "Programming Languages", items: ["Python", "Java", "C", "JavaScript"] },
    { category: "Frontend", items: ["HTML", "CSS", "React", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express.js", "MongoDB"] },
    { category: "AI/ML", items: ["TensorFlow", "PyTorch"] },
    { category: "Tools & Platforms", items: ["Git", "GitHub", "Docker", "VS Code"] }
  ],
  projects: [
    {
      id: 1,
      title: "IEEE MTTS Website",
      description: "A modern, responsive website for the IEEE Microwave Theory and Technology Society student chapter. Built with React and Tailwind CSS.",
      techStack: ["React", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com",
      demoUrl: "https://example.com"
    },
    {
      id: 2,
      title: "AI Stock Prediction Agent",
      description: "An advanced machine learning model using LSTM networks to predict stock market trends with high accuracy.",
      techStack: ["Python", "TensorFlow", "Pandas", "Scikit-Learn"],
      githubUrl: "https://github.com",
      demoUrl: "https://example.com"
    },
    {
      id: 3,
      title: "Blockchain + Merkle Tree Research",
      description: "Research project focusing on optimizing blockchain transaction verification using advanced Merkle Tree structures.",
      techStack: ["Solidity", "Node.js", "Cryptography"],
      githubUrl: "https://github.com",
      demoUrl: ""
    }
  ],
  volunteering: [
    {
      id: 1,
      organization: "GuildScript Summer of Code",
      role: "Contributor",
      duration: "Summer 2024",
      summary: "Contributed to multiple open-source repositories, fixed critical bugs, and added new features.",
      techStack: ["React", "Node.js", "Git"]
    },
    {
      id: 2,
      organization: "IEEE MTTS Student Chapter",
      role: "Technical Community Volunteer",
      duration: "2023 - Present",
      summary: "Organized technical workshops, hackathons, and managed the chapter's digital presence.",
      techStack: ["Event Management", "Web Dev"]
    }
  ],
  publications: [
    {
      id: 1,
      title: "Optimized Federated Learning for Edge Devices",
      abstract: "This paper presents a novel approach to federated learning on edge devices, significantly reducing communication overhead while maintaining model accuracy.",
      domain: "Machine Learning / Edge Computing",
      status: "Published",
      link: "https://example.com/paper1"
    },
    {
      id: 2,
      title: "Secure Smart Contracts using Formal Verification",
      abstract: "An analysis of common vulnerabilities in Solidity smart contracts and a proposed framework for formal verification.",
      domain: "Blockchain / Security",
      status: "Under Review",
      link: ""
    }
  ]
};

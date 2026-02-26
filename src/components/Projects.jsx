// src/components/Projects.jsx
import React from 'react';
import sccImage from '../assets/Screenshot 2026-02-26 110042.png';
import taskImage from '../assets/Screenshot 2026-02-26 134608.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "TASKMASTER",
      description: "Aplikasi web berbasis React untuk mengelola dan melacak tugas harian secara interaktif.",
      category: "PRODUCTIVITY",
      tech: ['React.js', 'Express', 'MongoDB', 'JWT', 'Tailwind'],
      github: "https://github.com/Alpharado2575/taskmaster",
      image: taskImage 
    },
    {
      id: 2,
      title: "SCC",
      description: "Website Ekstrakulikuler Stemba Computer Club",
      category: "WEB APP",
      tech: ['Laravel', 'Typescript', 'Tailwind'],
      github: "https://github.com/rakhaafd/stemba-computer-club",
      image: sccImage
    },
    {
      id: 3,
      title: "TITANIC SURVIVAL PREDICTION",
      description: "Analisis data Titanic dengan berbagai chart interaktif dan model prediksi survival.",
      category: "DATA VIZ",
      tech: ['Python'],
      github: "https://github.com/Alpharado2575/titanic-survival-prediction",
      image: "https://placehold.co/600x400/1a1a1a/666666?text=TITANIC"
    }
  ];

  return (
    <section id="proyek" className="py-32 bg-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(255,255,255,0.02)_0%,_transparent_50%)]" />
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-thin text-white/90 mb-4 tracking-[0.3em]">
            PROYEK
          </h2>
          <div className="w-20 h-[1px] bg-white/20 mx-auto" />
          <p className="text-white/30 mt-8 max-w-2xl mx-auto text-sm tracking-wider">
            SELECTED WORKS • 2024
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group relative bg-black hover:bg-[#0A0A0A] transition-all duration-700 border border-white/5 hover:border-white/20 overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-150 group-hover:opacity-150 group-hover:scale-110 transition-all duration-700"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                
                {/* Category badge on image */}
                <span className="absolute top-4 left-4 text-[10px] text-white/40 bg-black/50 px-3 py-1 tracking-wider border border-white/10">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 relative">
                <h3 className="text-2xl font-light text-white/90 mb-3 group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-white/40 text-sm mb-6 leading-relaxed group-hover:text-white/60 transition-colors">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="text-[10px] text-white/30 bg-white/5 px-3 py-1.5 tracking-wider group-hover:bg-white/10 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Button Links */}
                <div className="flex flex-wrap gap-3">
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white/40 hover:text-white text-[10px] tracking-[0.2em] transition-all duration-300 border border-white/10 px-3 py-2 hover:border-white/30"
                    >
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span>GITHUB</span>
                    </a>
                  )}
                  
                  {project.demo && (
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white/40 hover:text-white text-[10px] tracking-[0.2em] transition-all duration-300 border border-white/10 px-3 py-2 hover:border-white/30"
                    >
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <span>DEMO</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
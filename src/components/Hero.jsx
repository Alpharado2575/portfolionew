// src/components/Hero.jsx
import React from 'react';
// Import foto (taruh di folder assets)
import profileImage from '../assets/profile.png';

const Hero = () => {
  return (
    <section className="min-h-screen bg-black text-white flex items-center relative overflow-hidden pt-20 md:pt-0">
      {/* Dark dramatic overlay */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_30%_40%,_rgba(255,255,255,0.05)_0%,_transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_70%_60%,_rgba(255,255,255,0.03)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left column - Text */}
          <div className="order-2 md:order-1 text-center md:text-left">
            <p className="text-white/20 font-mono text-sm mb-4 md:mb-6 tracking-[0.5em] animate-pulse">
              &lt;01/&gt;
            </p>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-thin mb-4 md:mb-6 leading-none">
              Muhammad
              <span className="font-bold block mt-2 md:mt-4 text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white">
                Alfarado
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-white/40 mb-6 md:mb-8 font-light tracking-[0.2em] md:tracking-[0.3em] border-l-0 md:border-l-4 border-white/20 pl-0 md:pl-6">
              PRADIPA PUTRA ATALLA FAJRI
            </p>
            
            <p className="text-xl sm:text-2xl text-white/80 mb-8 md:mb-12 font-light">
              Fullstack Developer
            </p>
            
            <div className="flex flex-wrap gap-4 md:gap-6 justify-center md:justify-start">
              <a 
                href="#proyek" 
                className="group relative px-6 md:px-10 py-3 md:py-5 bg-white text-black text-xs md:text-sm tracking-[0.2em] font-medium overflow-hidden transition-all duration-500 hover:bg-white/90"
              >
                <span className="relative z-10">EKSPLORASI</span>
                <span className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 mix-blend-overlay" />
              </a>
              
              <a 
                href="#kontak" 
                className="px-6 md:px-10 py-3 md:py-5 border border-white/20 hover:border-white/60 text-white/80 hover:text-white text-xs md:text-sm tracking-[0.2em] font-medium transition-all duration-500"
              >
                KONTAK
              </a>

              {/* Tombol CV */}
              <a 
                href="https://drive.google.com/file/d/1_SNfk0d8GP4pQl3I3MpFsuiSCK-LDmfp/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 md:px-10 py-3 md:py-5 border border-white/20 hover:border-white/60 text-white/80 hover:text-white text-xs md:text-sm tracking-[0.2em] font-medium transition-all duration-500 flex items-center gap-2 group/cv"
              >
                <svg className="w-3 h-3 md:w-4 md:h-4 group-hover/cv:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>CV</span>
              </a>
            </div>
          </div>

          {/* Right column - Foto */}
          <div className="order-1 md:order-2 flex justify-center items-center mb-8 md:mb-0">
            <div className="relative w-48 sm:w-64 md:w-72 lg:w-80 xl:w-96 group">
              {/* Frame effect */}
              <div className="absolute inset-0 border border-white/20 transform rotate-2 md:rotate-3 group-hover:rotate-3 md:group-hover:rotate-6 transition-transform duration-700" />
              <div className="absolute inset-0 border border-white/10 transform -rotate-2 md:-rotate-3 group-hover:-rotate-3 md:group-hover:-rotate-6 transition-transform duration-700" />
              
              {/* Foto */}
              <div className="relative w-full aspect-[3/4] overflow-hidden">
                <img 
                  src={profileImage}
                  alt="Muhammad Alfarado"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              
              {/* Decorative elements - disembunyikan di mobile */}
              <div className="hidden md:block absolute -top-4 -right-4 w-16 lg:w-20 h-16 lg:h-20 border border-white/10" />
              <div className="hidden md:block absolute -bottom-4 -left-4 w-16 lg:w-20 h-16 lg:h-20 border border-white/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${
      isScrolled ? 'bg-black backdrop-blur-md border-b border-[#1a1a1a]' : 'bg-black'
    }`}>
      <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
        {/* Logo dengan inisial */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 border border-[#333] flex items-center justify-center group hover:border-[#555] transition-all duration-500">
            <span className="text-[#666] text-lg font-light tracking-wider group-hover:text-[#888]">
              M
            </span>
          </div>
          <div className="h-6 w-[1px] bg-[#1a1a1a]" />
          <span className="text-xs text-[#333] tracking-[0.3em] hidden md:block">
            ALFARADO
          </span>
        </div>
        
        <div className="space-x-12">
          {['Tentang', 'Proyek', 'Kontak'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-xs font-light tracking-[0.2em] transition-all duration-300 hover:text-white relative group ${
                isScrolled ? 'text-white/60' : 'text-white/70'
              }`}
            >
              {item.toUpperCase()}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
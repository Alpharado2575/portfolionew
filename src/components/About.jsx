// src/components/About.jsx
import React from 'react';

const About = () => {
  return (
    <section id="tentang" className="py-40 bg-black relative">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.02)_0%,_transparent_50%)]" />
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-thin text-white/90 mb-4 tracking-[0.3em]">
            TENTANG
          </h2>
          <div className="w-20 h-[1px] bg-white/20 mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-16">
            <div className="md:col-span-2 space-y-8">
              <p className="text-3xl font-light text-white/90 leading-relaxed">
                Muhammad Alfarado Pradipa Putra Atalla Fajri
              </p>
              
              <p className="text-white/40 leading-relaxed text-lg">
                Seorang Fullstack Developer yang passionate dalam menciptakan solusi digital 
                yang tidak hanya berfungsi dengan baik, tetapi juga memiliki nilai estetika 
                dan pengalaman pengguna yang optimal. Beralamat di Kota Semarang.
              </p>
              
              <p className="text-white/30 leading-relaxed border-l-2 border-white/10 pl-6 italic">
                "Percaya bahwa kode yang bersih dan arsitektur yang terstruktur adalah fondasi 
                dari aplikasi yang scalable dan maintainable."
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="border-b border-white/10 pb-6">
                <p className="text-white/30 text-xs tracking-[0.2em] mb-3">LOKASI</p>
                <p className="text-white/80 text-lg">Semarang, Indonesia</p>
              </div>
              <div className="border-b border-white/10 pb-6">
                <p className="text-white/30 text-xs tracking-[0.2em] mb-3">EMAIL</p>
                <p className="text-white/80 text-lg">muhammadalfarado5@gmail.com</p>
              </div>
              <div className="border-b border-white/10 pb-6">
                <p className="text-white/30 text-xs tracking-[0.2em] mb-3">GITHUB</p>
                <a 
                  href="https://github.com/Alpharado2575" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/80 text-lg hover:text-white transition-colors group flex items-center gap-2"
                >
                  @Alpharado2575
                  <span className="text-white/30 group-hover:text-white/60 transition-colors">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
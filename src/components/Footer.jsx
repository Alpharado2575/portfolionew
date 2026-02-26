// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#020202] py-12 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <p className="text-white/20 text-xs tracking-[0.3em] mb-4">
            MUHAMMAD ALFARADO PRADIPA PUTRA ATALLA FAJRI
          </p>
          <p className="text-white/10 text-xs tracking-wider">
            FULLSTACK DEVELOPER • {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
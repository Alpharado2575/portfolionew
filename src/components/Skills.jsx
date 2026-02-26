// src/components/Skills.jsx
import React from 'react';

const Skills = () => {
  const skills = [
    {
      category: "FRONTEND",
      items: ['React', 'Tailwind CSS', 'Javascript']
    },
    {
      category: "BACKEND",
      items: ['Node.js', 'Python', 'Laravel', 'Express', 'PHP']
    },
    {
      category: "DATABASE",
      items: ['MongoDB', 'MySQL']
    },
    {
      category: "DEVOPS & TOOLS",
      items: ['Git', 'Linux']
    }
  ];

  return (
    <section className="py-32 bg-[#0A0A0A] relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(255,255,255,0.02)_0%,_transparent_50%)]" />
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-thin text-white/90 mb-4 tracking-[0.3em]">
            KEAHLIAN
          </h2>
          <div className="w-20 h-[1px] bg-white/20 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((category, idx) => (
            <div 
              key={idx} 
              className="group relative bg-black/50 border border-white/5 hover:border-white/20 p-8 transition-all duration-700"
            >
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <h3 className="text-xs text-white/30 mb-8 tracking-[0.3em] group-hover:text-white/50 transition-colors">
                {category.category}
              </h3>
              <div className="space-y-4 relative z-10">
                {category.items.map((skill, i) => (
                  <div key={i} className="flex items-center justify-between border-b border-white/5 pb-3 group/item">
                    <span className="text-white/70 text-lg font-light group-hover/item:text-white/90 transition-colors">
                      {skill}
                    </span>
                    <span className="text-white/20 group-hover/item:text-white/40 transition-colors">
                      {(i + 1) * 2}•
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
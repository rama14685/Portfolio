import React, { useState, useEffect } from 'react';

const BACKGROUND_SECTIONS = [
  {
    id: 'hero',
    name: 'Forest Battle',
    // Pixel Forest Battle
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1920&auto=format&fit=crop&q=80',
    overlayColor: 'from-[#0b130e]/80 via-[#0d0b18]/70 to-[#0d0b18]',
    accentColor: '#4ade80'
  },
  {
    id: 'stats',
    name: 'Underground Cave',
    // Pixel Underground Cave / Dungeon
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1920&auto=format&fit=crop&q=80',
    overlayColor: 'from-[#140b24]/85 via-[#0d0b18]/80 to-[#0d0b18]',
    accentColor: '#a855f7'
  },
  {
    id: 'projects',
    name: 'Castle Ramparts',
    // Pixel Castle / Night Fortress
    image: 'https://images.unsplash.com/photo-1514539079130-25950c84af65?w=1920&auto=format&fit=crop&q=80',
    overlayColor: 'from-[#06181b]/85 via-[#0d0b18]/80 to-[#0d0b18]',
    accentColor: '#10b981'
  },
  {
    id: 'guestbook',
    name: 'Save Point Temple',
    // Magical Save Crystal Temple
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1920&auto=format&fit=crop&q=80',
    overlayColor: 'from-[#22071a]/85 via-[#0d0b18]/80 to-[#0d0b18]',
    accentColor: '#ec4899'
  },
  {
    id: 'contact',
    name: 'Volcanic Peak',
    // Fiery Volcano Summit
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1920&auto=format&fit=crop&q=80',
    overlayColor: 'from-[#260a0a]/85 via-[#0d0b18]/80 to-[#0d0b18]',
    accentColor: '#06b6d4'
  }
];

export default function DynamicBackground() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -30% 0px',
      threshold: 0.1
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    const sectionIds = ['hero', 'stats', 'projects', 'guestbook', 'contact'];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      
      {/* Stacked Background Images with Smooth Cross-Fade */}
      {BACKGROUND_SECTIONS.map((sec) => (
        <div
          key={sec.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            activeSection === sec.id ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
          style={{ transitionProperty: 'opacity, transform' }}
        >
          {/* Background Image Layer */}
          <div
            className="absolute inset-0 bg-cover bg-center filter brightness-50 contrast-125"
            style={{ backgroundImage: `url(${sec.image})` }}
          />

          {/* Dark Retro Gradient Overlay for Readability */}
          <div className={`absolute inset-0 bg-gradient-to-b ${sec.overlayColor}`} />
          
          {/* Pixel Grid Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#1e1a38_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" />
        </div>
      ))}

      {/* Floating HUD Section Indicator */}
      <div className="fixed bottom-4 left-4 z-40 hidden sm:flex items-center gap-2 bg-black/80 border-2 border-yellow-500/60 px-3 py-1.5 font-press text-[9px] text-yellow-400">
        <span className="w-2 h-2 rounded-full bg-green-400 animate-ping" />
        <span>AREA: {activeSection.toUpperCase()}</span>
      </div>

    </div>
  );
}

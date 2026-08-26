import React, { useState, useEffect } from 'react';
import { Play, Shield, Terminal, Zap, Code, Database, Sparkles } from 'lucide-react';
import { soundFx } from '../lib/soundEffects';

export default function HeroSection() {
  const fullText = "Halo Adventurer! Selamat datang di dunia portofolio bertema Pixel RPG. Saya adalah seorang Fullstack Web Developer yang siap membangun aplikasi web modern, cepat, dan interaktif.";
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingDone, setIsTypingDone] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        setIsTypingDone(true);
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const handleStart = () => {
    soundFx.playPowerup();
    const projectsEl = document.getElementById('projects');
    if (projectsEl) {
      projectsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="py-12 md:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Main Hero Container */}
        <div className="pixel-box p-6 md:p-10 relative overflow-hidden">
          
          {/* Top Title Bar */}
          <div className="flex items-center justify-between border-b-4 border-[#3c3166] pb-4 mb-8">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-red-500 rounded-full inline-block"></span>
              <span className="w-3 h-3 bg-yellow-500 rounded-full inline-block"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full inline-block"></span>
              <span className="font-press text-xs text-purple-300 ml-2">WORLD 1-1 // INTRO</span>
            </div>
            <div className="font-press text-xs text-yellow-400 animate-pulse">
              ★ READY ★
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            
            {/* Character Avatar Box */}
            <div className="flex flex-col items-center justify-center">
              <div className="pixel-box-yellow p-4 w-48 h-48 flex flex-col items-center justify-center relative group cursor-pointer" onClick={() => soundFx.playCoin()}>
                {/* Pixel Character Art Placeholder / Avatar */}
                <div className="text-7xl mb-2 pixel-float group-hover:scale-110 transition-transform">
                  🧙‍♂️
                </div>
                <div className="font-press text-[10px] bg-black text-yellow-400 px-2 py-1 border border-yellow-500 mt-2">
                  CLASS: CODER
                </div>
              </div>
              <div className="mt-3 font-press text-xs text-slate-300 flex items-center gap-2">
                <span className="text-green-400">STATUS:</span> ONLINE
              </div>
            </div>

            {/* RPG Dialogue Box */}
            <div className="md:col-span-2 flex flex-col justify-between">
              
              {/* Retro Speech Box */}
              <div className="bg-black border-4 border-white p-5 mb-6 relative min-h-[140px] shadow-[4px_4px_0_0_#000]">
                <div className="font-press text-xs text-yellow-400 mb-2 flex items-center justify-between">
                  <span>[SYSTEM DIALOGUE]</span>
                  <span className="text-slate-500 text-[10px]">VER 2.0</span>
                </div>
                <p className="font-vt text-xl md:text-2xl text-green-400 leading-relaxed">
                  "{displayedText}"
                  {!isTypingDone && <span className="inline-block w-2 h-5 bg-green-400 ml-1 pixel-blink"></span>}
                </p>
              </div>

              {/* Badges / Tech Highlights */}
              <div className="flex flex-wrap gap-2 mb-6 font-press text-[10px]">
                <span className="bg-purple-900/80 border border-purple-400 text-purple-200 px-2.5 py-1.5 flex items-center gap-1">
                  <Code className="w-3.5 h-3.5 text-purple-400" /> REACT & VITE
                </span>
                <span className="bg-emerald-900/80 border border-emerald-400 text-emerald-200 px-2.5 py-1.5 flex items-center gap-1">
                  <Database className="w-3.5 h-3.5 text-emerald-400" /> SUPABASE
                </span>
                <span className="bg-yellow-900/80 border border-yellow-400 text-yellow-200 px-2.5 py-1.5 flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-yellow-400" /> TAILWIND CSS
                </span>
              </div>

              {/* Press Start CTA Button */}
              <div className="flex items-center gap-4">
                <button
                  onClick={handleStart}
                  className="pixel-btn pixel-btn-yellow text-sm font-press py-3 px-6"
                >
                  <Play className="w-4 h-4 fill-black" /> PRESS START
                </button>

                <a
                  href="#contact"
                  onClick={() => soundFx.playBlip()}
                  className="pixel-btn text-xs font-press py-3 px-4"
                >
                  <Terminal className="w-4 h-4" /> TRANSMIT
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
